export function ValuesItem({ description, icon, title, asBullets }: { icon?: React.ReactNode; title?: string; description?: string, asBullets?: boolean }) {
  return (
    <div className="w-full h-full md:w-[29rem] p-2 stack gap-2 items-center justify-center">
      {icon}
      <span className="text-body-14 font-normal md:text-[1.75rem] text-[#3AA8DB]">{title}</span>
      {
        asBullets ? (
          <ul className="list-disc list-inside text-body-12 md:text-body-20 font-normal text-chumbo-dark-min">
            {description?.split("\n").map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <span className="text-center text-body-12 md:text-body-20 font-normal text-chumbo-dark-min">{description}</span>
        )
      }
    </div>
  )
}