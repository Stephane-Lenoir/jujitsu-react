interface PricingProps {
  title: string;
  price: string;
  description?: string;
  descriptionDetails?: string;
  details?: string[];
  className?: string; // Ajout de la prop className
}

export const PricingCard = ({
  title,
  price,
  description,
  descriptionDetails,
  details,
  className = '', // Valeur par défaut
}: PricingProps) => {
  return (
    <div
      className={`bg-white/80 rounded-lg shadow-lg p-6 mb-4 transition-transform transform text-[#0d0000] ${className}`}
    >
      <h3 className="font-open-sans text-3xl mb-4 text-[#A68A72] underline decoration-[#A68A72]">
        {title}
      </h3>
      <p className="text-2xl font-bold mb-4">{price}</p>
      {description && (
        <p className="font-open-sans italic mt-1">{description}</p>
      )}
      {descriptionDetails && (
        <p className="font-open-sans italic">{descriptionDetails}</p>
      )}
      {details && details.length > 0 && (
        <ul className="list-disc list-inside font-open-sans space-y-2">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
