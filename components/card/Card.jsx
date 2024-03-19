import Image from "next/image";

const Card = ({ record }) => {
  console.log(record?.xl_picture_url);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-2">
      <Image
        src={record?.xl_picture_url ? record?.xl_picture_url : ""}
        alt="Rental"
        width={300}
        height={200}
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{record?.host_location}</div>
        <p className="text-gray-700 text-base">106 kilometers away</p>
        <p className="text-gray-900 text-xl">${record?.price}/night</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          4.83 stars
        </span>
      </div>
    </div>
  );
};
export default Card;
