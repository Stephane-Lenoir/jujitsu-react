interface ScheduleProps {
    title?: string
    schedules: {
      day: string
      times: { group: string; time: string }[]
    }[]
  }
  
  export const Schedule = ({ title, schedules }: ScheduleProps) => {
    return (
      <div className="mb-2">
        {title && (
          <h3 className="font-open-sans text-3xl text-[#A68A72] underline mb-4">
            {title}
          </h3>
        )}
        <ul className="text-[#0d0000] font-open-sans space-y-2">
          {schedules.map((schedule, index) => (
            <li key={index}>
              <p className="font-bold">{schedule.day}</p>
              {schedule.times.map((time, timeIndex) => (
                <p key={timeIndex} className="ml-4">
                  {time.time} : {time.group}
                </p>
              ))}
            </li>
          ))}
        </ul>
      </div>
    )
  }