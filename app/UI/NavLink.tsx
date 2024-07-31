const NavLink = ({text, link}: {text:string, link: string}) => {
  return (
    <span className="text-white text-2xl hover:text-indigo-400 cursor-pointer font-light drop-shadow-sm px-5 mx-3">
       <a href={link}>{text}</a>
    </span>
  )
}

export default NavLink