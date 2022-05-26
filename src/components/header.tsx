import * as React from "react"

type Props = {
  image: string
}

const Header = ({ image }: Props) => {
  return (
    <div className="lg:p-12 md:p-8 sm:p-4 p-2">
      <header style={{backgroundImage: `url(${image})`}} className={`rounded-lg bg-slate-300 h-[75vh] bg-cover drop-shadow-lg bg-center`}>
      </header>
    </div>
  )
}

export default Header
