import { useHeaderDictionary } from "../../../../locales/hooks/use-header-dictionary"
import MemoSunGlassesIcon from "./icons/sun-glasses-icon"
import MemoDiamondIcon from "./icons/diamond-icon"
import MemoShipIcon from "./icons/ship-icon"
import { ValuesItem } from "./values-item"

export function ValuesList() {
  // Values labels
  const labels = {
    values: useHeaderDictionary("about-us-values-title") as string,
    vision: useHeaderDictionary("about-us-vision-title") as string,
    mission: useHeaderDictionary("about-us-mission-title") as string,
  }

  // Values items
  const items = [
    {
      title: labels.vision,
      description: useHeaderDictionary("about-us-vision-description") as string,
      icon: <MemoSunGlassesIcon />,
      asBullets: false,
    },
    {
      title: labels.mission,
      description: useHeaderDictionary("about-us-mission-description") as string,
      icon: <MemoDiamondIcon />,
      asBullets: false,
    },
    {
      title: labels.values,
      description: useHeaderDictionary("about-us-values-description") as string,
      icon: <MemoShipIcon />,
      asBullets: true,
    },
  ]


  return (
    <div className="w-full p-4 flex flex-col md:flex-row   gap-2">
      {items.map((item, index) => (

        <ValuesItem
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
          asBullets={item.asBullets}
        />

      ))}
    </div>
  )
}