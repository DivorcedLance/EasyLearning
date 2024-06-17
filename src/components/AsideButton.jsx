export function AsideButton({icon, label, onClick}) {
  return (
    <button className="bg-[#189F4E69] h-28 flex items-center pl-2 gap-3" onClick={onClick}>
      <img src={icon} alt="" className="h-28 w-28 p-3"/>
      <label className="font-[poppins] italic">{label}</label>
    </button>
  )
}
