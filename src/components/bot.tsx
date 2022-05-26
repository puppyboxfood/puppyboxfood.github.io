import React, { useState, useEffect } from "react"
import Message from "./bot/message"
import Options from "./bot/options"
import Range from "./bot/range"
import conversationTree from "../data/bot/conversation-tree.json"
import { RadioGroup } from "@headlessui/react"
import { ChatIcon, DotsHorizontalIcon, CheckIcon } from "@heroicons/react/solid"
import avatar from "../images/bot/avatar.jpg"

const baseWaitTime = 1000
const typingSpeed = 50

export default ({ onClick, bottom }) => {
  const [open, setOpen] = useState(false)
  const [answers, setAnswers] = useState({})
  const [messageQueue, setMessageQueue] = useState(conversationTree)
  const [chat, setChat] = useState({messages: [], isTyping: false})
  const [checkpoints, setCheckpoints] = useState({})

  useEffect(() => {
    if (open) {
      let [head, ...queue] = messageQueue

      if (head) {
        if (head.them) {
          setMessageQueue(queue)
          setChat({
            ...chat,
            messages: [
              head,
              ...chat.messages,
            ]
          })
        } else {
          if (head.checkpoint) {
            setCheckpoints({
              ...checkpoints,
              [head.id]: head
            })
          }

          setChat({
            ...chat,
            isTyping: true
          })

          if (head.dependsOn) {
            const answersOnly = Object.values(answers).flat()
            const { messages } = messageQueue.find((conditional) => {
              return conditional.dependsOn.every((answer) => {
                if (Array.isArray(answer)) {
                  return answer.some((answer) => answersOnly.includes(answer))
                }
                return answersOnly.includes(answer)
              })
            })

            head = messages[0]
            queue = messages.slice(1)
          }

          const typingDuration = head.text ? head.text.length * typingSpeed : 0

          setTimeout(() => {
            let checkpoint = checkpoints[head.goTo]
            if (checkpoint) {
              checkpoint = {
                ...checkpoint,
                id: `${checkpoint.id}__${head.id}`
              }
            }
            setChat({
              ...chat,
              isTyping: false,
              messages: [...(checkpoint ? [checkpoint] : []), head, ...chat.messages]
            })
            setTimeout(() => {
              setMessageQueue(queue)
            }, baseWaitTime * Math.random())
          }, typingDuration)
        }
      }
    }
  }, [messageQueue.length, open])

  return (
    <div
      onClick={(e) => {
        if (open) {
          setOpen(false)
        }
      }}
      style={{ bottom: bottom || 0 }}
      className={`z-50 flex flex-col justify-end items-end fixed bottom-0 right-0 ${open ? "top-0 left-0 bg-white/[.5] overflow-hidden md:top-auto md:left-auto md:bg-transparent md:overflow-visible" : ""} p-4 md:p-8`}
    >
      {open ? (
        <div
          className="rounded-md bg-white md:w-[23rem] md:h-[35rem] mb-4 drop-shadow-md flex flex-col-reverse overflow-auto flex-1 md:flex-auto w-full justify-between"
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <div className="py-4 px-4 md:h-[35rem] flex flex-col-reverse overflow-auto">
            {chat.isTyping ? <Message key="typing" typing /> : null}
            {chat.messages.map(({id, multipleChoice, options, range, next, ...props}) => (
              <React.Fragment key={`${id}__${Math.random()}`}>
                {!answers[id] && range ? (
                  <Range
                    onChange={(value) => {
                      const customId = `${id}__${value}`

                      setAnswers({
                        ...answers,
                        [id]: [customId]
                      })

                      const stages = Object.keys(range.triggers).sort((a,b) => parseInt(a) - parseInt(b))
                      const match = stages.find((stage) => value <= parseInt(stage))
                      const trigger = range.triggers[match]

                      const addToQueue = [
                        ...(next && next.prepend ? next : []),
                        ...(trigger || []),
                        ...(next && !next.prepend ? next : [])
                      ]

                      setChat({
                        ...chat,
                        messages: [
                          {
                            id: customId,
                            text: value,
                            them: true,
                          },
                          ...chat.messages
                        ]
                      })
                      setMessageQueue([...messageQueue, ...addToQueue])
                    }}
                    max={range.max}
                    min={range.min}
                  />
                ) : null}
                {!answers[id] && options ? (
                  <Options
                    answers={answers}
                    multipleChoice={multipleChoice}
                    onSubmit={(options) => {
                      setAnswers({
                        ...answers,
                        [id]: options.map((option) => option.id)
                      })
                      setChat({
                        ...chat,
                        messages: [
                          {
                            id: options.map((option) => option.id).join(","),
                            text: options.map((option) => option.text).join(", "),
                            them: true,
                          },
                          ...chat.messages
                        ]
                      })
                      setMessageQueue([...messageQueue, ...(next || [])])
                    }}
                    onChange={(option) => {
                      setAnswers({
                        ...answers,
                        [option.id]: true,
                        [id]: [
                          option.id,
                        ]
                      })
                      const addToQueue = [
                        ...(next && next.prepend ? next : []),
                        ...(option.next || []),
                        ...(next && !next.prepend ? next : [])
                      ]

                      setChat({
                        ...chat,
                        messages: [
                          { id: option.id, text: option.text, them: true },
                          ...chat.messages
                        ]
                      })
                      setMessageQueue([...addToQueue, ...messageQueue])
                    }}
                    options={options}
                  />
                ) : null}
                <Message {...props} />
              </React.Fragment>
            ))}
          </div>
          <div className="bg-red-600 h-16 md:h-20 drop-shadow-md flex flex-row justify-self-start">
            <div className="relative self-start h-16 w-20 md:h-20 md:w-20 flex justify-center items-center">
              <img src={avatar} alt="avatar" className="object-cover rounded-full h-12 h-12 md:h-14 md:w-14 border-white border-2" />
              <div className="bg-green-500 absolute bottom-3 right-4 md:bottom-4 md:right-3 w-3 h-3 rounded-full"></div>
            </div>
            <div className="flex-1 w-full flex flex-col justify-center">
              <div className="font-medium text-lg md:text-xl text-white leading-none">Ella Butter</div>
              <div className="font-normal text-sm md:text-md text-white opacity-75 leading-none">Dog meat advisor</div>
            </div>
          </div>
        </div>
      ) : null}
      <button
        onClick={() => {
          onClick(!open)
          setOpen(!open)
        }}
        className="rounded-full bg-red-600 w-16 h-16 md:w-20 md:h-20 drop-shadow-xl text-white hover:bg-red-700 flex justify-center items-center"
      >
        <ChatIcon className="w-6 h-6 md:w-8 md:h-8" />
      </button>
    </div>
  )
}
