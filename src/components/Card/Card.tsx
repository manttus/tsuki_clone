type CardProps = {
  src: string;
  title: string;
  price: string;
};

const Card = ({ src, title, price }: CardProps) => {
  return (
    <div className="flex flex-col border-y-1 h-1/5 border-r-1 border-black w-1/2 group relative">
      <img src={src} />
      <div className="hidden absolute bottom-24 cursor-pointer left-0 right-0 border-t-1 divide-y border-black text-center p-5 bg-primary group-hover:block">
        Quick View
      </div>
      <div className="flex flex-col border-t-1 p-5 h-24 border-black justify-center items-center text-center">
        <h1 className="font-normal pb-1">{title}</h1>
        <p className="text-gray-500 font-light text-sm">$ {price} USD</p>
      </div>
    </div>
  );
};

export default Card;
