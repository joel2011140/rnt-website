export function NewsCard({
  banner,
  title,
  description,
}: {
  banner?: string;
  title?: string;
  description?: string;
}) {
  return (
    <div className="w-full rounded-md overflow-hidden bg-white shadow-md flex flex-col h-full">
      {banner && (
        <img
          src={banner}
          alt={title}
          className="w-full h-48 sm:h-56 md:h-60 object-cover"
        />
      )}
      <div className="p-4 flex flex-col gap-2">
        {title && <h3 className="text-lg font-semibold">{title}</h3>}
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </div>
    </div>
  );
}
