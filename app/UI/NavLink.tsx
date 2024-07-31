const NavLink = ({text}: {text:string}) => {
  return (
    <span className="text-white text-2xl hover:text-indigo-400 cursor-pointer font-light drop-shadow-sm px-5 mx-3">
        {text}
    </span>
  )
}

export default NavLink