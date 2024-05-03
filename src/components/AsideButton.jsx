export function AsideButton({icon, label}) {
  return (
    <button className="bg-[#189F4E]">
      <img src={icon} alt="" />
      <label>{label}</label>
    </button>
  )
}
