const NavLink = ({text, link}: {text:string, link: string}) => {
  return (
    <span className="text-black text-2xl hover:text-indigo-400 cursor-pointer font-bold drop-shadow-sm px-5 mx-3 bg-white">
       <a href={link}>{text}</a>
    </span>
  )
}

export default NavLink