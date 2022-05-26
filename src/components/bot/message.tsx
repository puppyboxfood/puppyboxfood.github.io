import React from "react"
import { PlayIcon } from "@heroicons/react/solid"

const OptionalLinkedText = ({ text, url }) => {
  if (url) {
    return (
      <a href={url} target="_blank" className="underline">{text}</a>
    )
  }

  return text
}

export default ({ text, url, image, youtubeVideoId, startTime, them, typing }) => (
  <div className={`${them ? "self-end" : "self-start"} max-w-[75%] my-0.5`}>
    <div className={`rounded-xl ${them ? "bg-gray-300" : (typing ? "bg-red-300" : "bg-red-500")}`}>
      {youtubeVideoId ? (
        <a className="relative block" target="_blank" href={`https://www.youtube.com/watch?v=${youtubeVideoId}${startTime ? "&t=" + startTime : ""}`}>
          <div className="opacity-50 hover:opacity-75 absolute top-0 bottom-0 left-0 right-0 z-10 flex justify-center items-center">
            <PlayIcon className="w-[40%] text-white" />
          </div>
          <img
            src={`http://img.youtube.com/vi/${youtubeVideoId}/0.jpg`}
            className={`rounded-t-xl ${text ? "" : "rounded-b-xl"} relative z-0`}
          />
        </a>
      ) : null}
      {image ? <img className="w-full rounded-t-xl" src={image} /> : null}
      {(text || typing) ? (
        <p className={`${them ? "text-gray-500" : "text-white"} py-2 px-4 font-medium text-md`}>
          {typing ? (<>&nbsp;&nbsp;<span className="dot-flashing"></span>&nbsp;&nbsp;</>) : <OptionalLinkedText url={url} text={text} />}
        </p>
      ) : null}
    </div>
  </div>
)

