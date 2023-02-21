"use client";

interface Props{
    children:string,
    link:string
}
export default function ButtonSidebar({children,link}:Props) {


  return (
    <button>
      {" "}
      <li className="flex w-full justify-between  text-gray-300 cursor-pointer items-center mb-6">
        <a
          href="javascript:void(0)"
          className="flex gap-3 items-center group focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-grid"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <rect x="4" y="4" width="6" height="6" rx="1"></rect>
            <rect x="14" y="4" width="6" height="6" rx="1"></rect>
            <rect x="4" y="14" width="6" height="6" rx="1"></rect>
            <rect x="14" y="14" width="6" height="6" rx="1"></rect>
          </svg>
          <span className="text-sm ml-2 ">{children}</span>
        </a>
      </li>
    </button>
  );
}
