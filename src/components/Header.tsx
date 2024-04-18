import Link from "next/link";

export const Header = () => {
  return (
    <div className="font-bold text-gray-700 flex justify-between max-w-[1500px] mx-auto gap-20 items-end py-6">
      <h1 className="font-bold text-gray-700 text-3xl">Ontheway</h1>
      <ul className="text-xl flex gap-10">
        <li className="uppercase hover:text-gray-500">
          <Link href="#">Blog</Link>
        </li>
        <li className="uppercase hover:text-gray-500">
          <Link href="#">About</Link>
        </li>

        <li className="uppercase hover:text-gray-500">
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
