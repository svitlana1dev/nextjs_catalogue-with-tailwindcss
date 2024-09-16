import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  title: string;
}

const CardIcon = ({ src, alt, title }: Props) => {
  return (
    <div className="car-card__icon">
      <Image src={src} width={20} height={20} alt={alt} />
      <p className="car-card__icon-text">{title}</p>
    </div>
  );
};

export default CardIcon;
