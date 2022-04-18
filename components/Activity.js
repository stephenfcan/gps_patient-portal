import Profile from "./Profile"


function Activity({ img, name, desc, date, time }) {
  return (
    <div className="md:flex items-center border-b pb-2">
        <Profile img={img} name={name} desc={desc} />
        <p className="text-xs px-3">{name} created an appointment for {date} at {time}</p>
    </div>
  )
}

export default Activity