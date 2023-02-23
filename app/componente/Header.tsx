import React from "react";

export default function Header() {
  return (
    <nav className="absolute top-0 left-0 w-full mx-auto items-center flex justify-between bg-neutral-800 text-neutral-100 border-b border-gray-100/50 px-16">
        <div className="w-3/12 z-20 flex items-center ml-5">
        <svg width="50px" height="50px" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.4597 24L32.5949 16.8223L44.6372 45.008L27.4267 52.2858L15.4597 24Z" fill="#2A2941"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.8717 23.2246C18.1692 23.3747 17.4668 23.6498 16.8396 24.0249L17.0904 25.3754C16.5636 25.7506 16.0869 26.2257 15.7357 26.776L14.3307 26.6509C14.0046 27.2761 13.7788 27.9514 13.6534 28.6517L14.9078 29.2519C14.8827 29.8771 14.983 30.5024 15.1837 31.1026L14.1551 32.103C14.4562 32.7282 14.8576 33.3034 15.3343 33.7786L16.6639 33.2034C17.1657 33.6036 17.7427 33.9037 18.3448 34.1037L18.4954 35.4543C19.1978 35.6043 19.9254 35.6293 20.653 35.5543L21.0293 34.2038C21.6816 34.0787 22.3088 33.8286 22.8607 33.4785L24.0399 34.1788C24.6169 33.7536 25.1437 33.2284 25.5452 32.6282L24.7172 31.5528C25.0183 31.0026 25.219 30.3773 25.3194 29.7271L26.6741 29.2519C26.6992 28.5516 26.5989 27.8514 26.3731 27.2011H24.9681C24.7172 26.6259 24.3409 26.1007 23.8642 25.6755L24.3409 24.375C23.789 23.9499 23.1367 23.5998 22.4844 23.3747L21.531 24.4501C20.8788 24.3 20.2265 24.25 19.5742 24.35L18.8717 23.2246ZM18.8717 26.0257C19.7749 25.6505 20.7784 25.6255 21.6816 26.0007C22.5848 26.3508 23.3123 27.0511 23.7137 27.9514C23.8893 28.4016 23.9646 28.8768 23.9395 29.3519C23.9144 29.8271 23.8141 30.3023 23.6134 30.7275C23.4127 31.1526 23.1367 31.5528 22.7855 31.8779C22.4342 32.203 22.0077 32.4531 21.5561 32.6282C20.653 33.0283 19.6494 33.0283 18.7212 32.6782C17.818 32.3281 17.0653 31.6278 16.689 30.7275C16.5134 30.2773 16.4381 29.8021 16.4381 29.3019C16.4632 28.8267 16.5636 28.3516 16.7643 27.9014C16.965 27.4512 17.2661 27.0511 17.6173 26.7259C17.9685 26.4008 18.395 26.1507 18.8466 25.9757L18.8717 26.0257Z" fill="#2A2941"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41.5514 28.3516C40.8489 28.5266 40.1464 28.7767 39.5192 29.1519L39.7701 30.5024C39.2433 30.8775 38.7917 31.3777 38.4154 31.9029L36.9853 31.7779C36.6341 32.4031 36.4083 33.1034 36.2829 33.8036L37.5624 34.4039C37.5373 35.0291 37.6125 35.6543 37.8383 36.2546L36.8097 37.2549C37.1108 37.8802 37.5122 38.4554 37.9889 38.9306L39.3185 38.3554C39.8203 38.7555 40.3973 39.0806 41.0245 39.2557L41.1751 40.6062C41.8775 40.7563 42.6051 40.8063 43.3327 40.7063L43.709 39.3808C44.3613 39.2557 44.9885 39.0056 45.5404 38.6555L46.7196 39.3557C47.3217 38.9306 47.8485 38.4054 48.275 37.8052L47.422 36.7297C47.7231 36.1795 47.9238 35.5543 48.0241 34.9291L49.3789 34.4539C49.404 33.7536 49.3036 33.0784 49.0778 32.4031H47.6478C47.3969 31.8279 47.0206 31.3027 46.5439 30.8775L47.0206 29.577C46.4436 29.1519 45.8164 28.8017 45.1641 28.5766L44.2358 29.6521C43.5835 29.502 42.9312 29.452 42.2789 29.552L41.5263 28.3766V28.3516H41.5514ZM41.5514 31.1776C42.4546 30.8025 43.433 30.8025 44.3362 31.1526C45.2394 31.5028 45.9418 32.203 46.3432 33.0784C46.5189 33.5285 46.5941 34.0037 46.5941 34.5039C46.569 34.9791 46.4687 35.4793 46.268 35.9044C46.0673 36.3546 45.7662 36.7548 45.415 37.0799C45.0637 37.405 44.6372 37.6551 44.1857 37.8302C43.2825 38.2053 42.2789 38.2303 41.3758 37.8802C40.4726 37.5301 39.745 36.8298 39.3436 35.9294C39.168 35.4793 39.0927 35.0041 39.0927 34.5039C39.1178 34.0287 39.2182 33.5535 39.4189 33.1034C39.6196 32.6532 39.8956 32.2781 40.2719 31.9279C40.6231 31.6028 41.0496 31.3527 41.5012 31.1776H41.5514Z" fill="#2A2941"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.4236 21.4488C18.696 21.5989 18.0186 21.874 17.3914 22.2491L17.6423 23.5997C17.1155 23.9748 16.6388 24.45 16.2876 25.0002L14.8575 24.8751C14.5314 25.5004 14.3056 26.1756 14.2052 26.8759L15.4596 27.5011C15.4346 28.1264 15.5098 28.7516 15.7356 29.3518L14.707 30.3272C15.0081 30.9525 15.4095 31.5277 15.8861 32.0279L17.2158 31.4526C17.7176 31.8528 18.2946 32.1779 18.8967 32.353L19.0473 33.7035C19.7497 33.8536 20.4773 33.9036 21.2048 33.8035L21.6062 32.478C22.2585 32.353 22.8857 32.1029 23.4377 31.7528L24.6168 32.453C25.1939 32.0279 25.6956 31.5027 26.097 30.9024L25.244 29.827C25.5702 29.2768 25.7709 28.6516 25.8462 28.0013L27.2009 27.5261C27.226 26.8259 27.1257 26.1506 26.8999 25.4754H25.5702C25.3193 24.9002 24.943 24.375 24.4663 23.9498L24.943 22.6493C24.366 22.2241 23.7387 21.874 23.0614 21.6489L22.1331 22.6993C21.4808 22.5493 20.8285 22.5242 20.1762 22.5993L19.4236 21.4238V21.4488ZM19.4236 24.2499C20.3268 23.8748 21.3303 23.8498 22.2335 24.2249C23.1366 24.575 23.8642 25.2753 24.2656 26.1756C24.4412 26.6258 24.5165 27.101 24.5165 27.6012C24.4914 28.0764 24.391 28.5515 24.1903 29.0017C23.9896 29.4519 23.7137 29.852 23.3373 30.1772C22.961 30.5023 22.5596 30.7524 22.108 30.9274C21.2048 31.3026 20.2013 31.3026 19.2981 30.9274C18.395 30.5523 17.6674 29.852 17.2911 28.9517C17.1155 28.5015 17.0402 28.0263 17.0653 27.5512C17.0904 27.076 17.1907 26.6008 17.3914 26.1756C17.5921 25.7505 17.8681 25.3503 18.2193 25.0252C18.5706 24.7001 18.972 24.45 19.4236 24.2749V24.2499Z" fill="#32EDBB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.9254 21.0989L19.6996 20.7488L19.2981 20.8488C18.5204 21.0239 17.7678 21.324 17.0904 21.7242L16.7391 21.9492L16.99 23.3248C16.6137 23.6249 16.2876 23.975 16.0116 24.3501L14.5314 24.2251L14.3307 24.5752C13.9794 25.2505 13.7286 26.0008 13.6282 26.7761L13.5529 27.2262L14.8826 27.8765C14.8826 28.3017 14.9579 28.7518 15.0833 29.177L14.0045 30.2024L14.2052 30.6025C14.5314 31.3028 14.983 31.928 15.5349 32.4532L15.8109 32.7283L17.1907 32.1281C17.5671 32.3782 17.9685 32.6033 18.3699 32.7784L18.5204 34.2039L18.9469 34.2789C19.7246 34.454 20.5275 34.479 21.3303 34.404H21.7317L22.1331 33.0284C22.6098 32.9034 23.0614 32.7283 23.4879 32.5032L24.7423 33.2285L25.0684 33.0034C25.6956 32.5283 26.2476 31.953 26.6992 31.3028L26.95 30.9276L26.072 29.8022C26.2727 29.4021 26.4232 28.9519 26.4985 28.5017L27.9034 28.0015V27.5764C27.9285 26.8011 27.803 26.0508 27.5522 25.3255L27.4267 24.9254H25.9214C25.7207 24.5252 25.4698 24.1751 25.1688 23.85L25.6705 22.4994L25.3193 22.2243C24.6921 21.7492 24.0147 21.374 23.2621 21.1239L22.8858 20.9989L21.9073 22.0993C21.4306 22.0243 20.954 21.9993 20.4773 22.0243L19.9254 21.1739V21.0989ZM19.4236 21.449C18.696 21.5991 18.0186 21.8742 17.3914 22.2493L17.6423 23.5999C17.1155 23.975 16.6388 24.4502 16.2876 25.0004L14.8575 24.8753C14.5314 25.5006 14.3056 26.1758 14.2052 26.8761L15.4597 27.5013C15.4346 28.1266 15.5098 28.7518 15.7356 29.3521L14.707 30.3274C15.0081 30.9527 15.4095 31.5279 15.8861 32.0281L17.2158 31.4529C17.7176 31.853 18.2946 32.1781 18.8967 32.3532L19.0473 33.7037C19.7497 33.8538 20.4773 33.9038 21.2048 33.8037L21.6063 32.4782C22.2586 32.3532 22.8858 32.1031 23.4377 31.753L24.6168 32.4532C25.1939 32.0281 25.6956 31.5029 26.097 30.9026L25.244 29.8272C25.5702 29.277 25.7709 28.6518 25.8462 28.0015L27.2009 27.5264C27.226 26.8261 27.1006 26.1258 26.8999 25.4756H25.5702C25.3193 24.9004 24.943 24.3752 24.4663 23.95L24.943 22.6495C24.366 22.2243 23.7388 21.8742 23.0614 21.6491L22.1331 22.6995C21.4808 22.5495 20.8285 22.5245 20.1762 22.5995L19.4236 21.424V21.449ZM19.4236 24.2501C20.3268 23.875 21.3303 23.85 22.2335 24.2251C23.1366 24.5752 23.8642 25.2755 24.2656 26.1758C24.4412 26.626 24.5165 27.1012 24.5165 27.6014C24.4914 28.0766 24.3911 28.5517 24.1903 29.0019C23.9896 29.4521 23.7137 29.8522 23.3373 30.1774C22.9861 30.5025 22.5596 30.7526 22.108 30.9276C21.2048 31.3028 20.2013 31.3028 19.2981 30.9276C18.395 30.5525 17.6674 29.8522 17.2911 28.9519C17.1155 28.5017 17.0402 28.0265 17.0653 27.5514C17.0904 27.0762 17.1907 26.601 17.3914 26.1758C17.5921 25.7507 17.8681 25.3505 18.2194 25.0254C18.5706 24.7003 18.972 24.4502 19.4236 24.2751V24.2501ZM19.6494 24.8003C20.402 24.4752 21.2299 24.4752 22.0077 24.7503C22.7603 25.0504 23.3875 25.6256 23.7137 26.3759C23.8642 26.7511 23.9144 27.1512 23.8893 27.5514C23.8642 27.9515 23.7889 28.3517 23.6133 28.7018C23.4377 29.0769 23.2119 29.4021 22.9108 29.6522C22.6098 29.9273 22.2586 30.1273 21.8822 30.2774C21.1296 30.6025 20.2766 30.6275 19.5239 30.3274C18.7713 30.0273 18.1441 29.4521 17.8179 28.7018C17.6674 28.3267 17.6172 27.9265 17.6423 27.5264C17.6674 27.1262 17.7427 26.7261 17.9183 26.3759C18.0939 26.0258 18.3197 25.7007 18.6208 25.4256C18.9469 25.1505 19.2731 24.9254 19.6494 24.8003Z" fill="#2A2941"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.0782 26.6008C41.3758 26.7509 40.6733 27.026 40.0461 27.4011L40.297 28.7516C39.7701 29.1268 39.2934 29.6019 38.9422 30.1522L37.5373 30.0271C37.2111 30.6523 36.9853 31.3276 36.8599 32.0279L38.1143 32.6281C38.0892 33.2533 38.1896 33.8786 38.3903 34.4788L37.3617 35.4792C37.6627 36.1044 38.0641 36.6796 38.5408 37.1548L39.8705 36.5796C40.3722 36.9797 40.9493 37.2799 41.5514 37.4799L41.7019 38.8305C42.4044 38.9805 43.1319 39.0055 43.8595 38.9305L44.2358 37.58C44.8881 37.4549 45.5153 37.2048 46.0673 36.8547L47.2464 37.555C47.8234 37.1298 48.3252 36.6046 48.7266 36.0044L47.8987 34.929C48.1998 34.3537 48.4005 33.7535 48.5008 33.1033L49.8556 32.6281C49.8807 31.9278 49.7803 31.2276 49.5545 30.5773H48.1998C47.9489 30.0021 47.5726 29.4769 47.0959 29.0517L47.5726 27.7512C47.0206 27.3261 46.3683 26.9759 45.716 26.7509L44.7627 27.8263C44.1104 27.6762 43.4581 27.6262 42.8058 27.7262L42.0532 26.5508L42.0782 26.6008ZM42.0782 29.4019C42.9814 29.0267 43.9849 29.0017 44.8881 29.3769C45.7913 29.727 46.5188 30.4273 46.9203 31.3276C47.0959 31.7778 47.1711 32.253 47.1461 32.7281C47.121 33.2033 47.0206 33.6785 46.8199 34.1037C46.6192 34.5288 46.3432 34.929 45.992 35.2541C45.6408 35.5792 45.2143 35.8293 44.7627 36.0044C44.3111 36.2045 43.8344 36.3045 43.3327 36.3045C42.856 36.3045 42.3542 36.2295 41.9026 36.0544C41.451 35.8793 41.0245 35.6042 40.6733 35.2791C40.3221 34.929 40.0461 34.5288 39.8454 34.0786C39.6698 33.6285 39.5945 33.1533 39.6196 32.6781C39.6447 32.2029 39.745 31.7277 39.9457 31.3026C40.1464 30.8774 40.4475 30.4773 40.7987 30.1522C41.15 29.827 41.5765 29.5769 42.0281 29.4269H42.0782V29.4019Z" fill="#4C5EFD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.6051 26.2508L42.3793 25.9006L41.9528 25.9757C41.175 26.1507 40.4475 26.4508 39.745 26.851L39.3687 27.0761L39.6196 28.4516C39.2433 28.7517 38.9171 29.1269 38.6411 29.502L37.1609 29.377L36.9853 29.7271C36.6341 30.4023 36.3832 31.1276 36.2828 31.8779L36.2076 32.3281L37.5373 32.9783C37.5623 33.4035 37.6125 33.8537 37.738 34.2788L36.6592 35.3042L36.8348 35.7044C37.1609 36.4046 37.6125 37.0299 38.1645 37.5551L38.4655 37.8302L39.8203 37.2299C40.1966 37.48 40.598 37.7051 40.9994 37.8802L41.15 39.3057L41.5765 39.3808C42.3542 39.5558 43.157 39.5808 43.9598 39.5058H44.3612L44.7627 38.1303C45.2393 38.0052 45.6658 37.8302 46.1174 37.6051L47.2966 38.3304L47.6227 38.1053C48.275 37.6301 48.852 37.0549 49.3287 36.3796L49.5796 36.0045L48.7015 34.879C48.9022 34.4789 49.0277 34.0287 49.128 33.5786L50.5079 33.0784V32.6532C50.5329 31.8779 50.4075 31.1276 50.1817 30.4023L50.0312 30.0022H48.551C48.3252 29.602 48.0743 29.2519 47.7732 28.9268L48.275 27.5763L47.9238 27.3012C47.3217 26.826 46.6192 26.4508 45.8665 26.2008L45.4902 26.0757L44.562 27.1511C44.0853 27.0761 43.6086 27.0511 43.1319 27.0761L42.58 26.2258L42.6051 26.2508ZM42.1033 26.6009C41.4008 26.751 40.6984 27.0261 40.0712 27.4012L40.322 28.7517C39.7952 29.1269 39.3185 29.602 38.9673 30.1523L37.5623 30.0272C37.2362 30.6524 37.0104 31.3277 36.885 32.028L38.1394 32.6532C38.1143 33.2784 38.2146 33.9037 38.4153 34.5039L37.3867 35.5043C37.6878 36.1295 38.0892 36.7047 38.5659 37.1799L39.8955 36.6047C40.3973 37.0049 40.9743 37.305 41.5765 37.505L41.727 38.8556C42.4295 39.0056 43.157 39.0306 43.8846 38.9556L44.2609 37.6301C44.9132 37.505 45.5404 37.255 46.0923 36.9048L47.2715 37.6051C47.8485 37.1799 48.3503 36.6547 48.7517 36.0545L47.9238 34.9791C48.2248 34.4039 48.4255 33.8036 48.5259 33.1534L49.8806 32.6782C49.9057 31.9779 49.8054 31.2777 49.5796 30.6274H48.1997C47.9489 30.0522 47.5725 29.527 47.0959 29.1019L47.5725 27.8014C47.0206 27.3762 46.3683 27.0261 45.716 26.801L44.7627 27.8514C44.1104 27.7013 43.4581 27.6763 42.8058 27.7513L42.0531 26.5759L42.1033 26.6009ZM42.1033 29.402C43.0065 29.0268 44.01 29.0018 44.9132 29.377C45.8164 29.7271 46.5439 30.4274 46.9453 31.3277C47.1209 31.7779 47.1962 32.2531 47.1962 32.7532C47.1711 33.2284 47.0708 33.7036 46.8701 34.1538C46.6694 34.6039 46.3934 35.0041 46.0171 35.3292C45.6658 35.6543 45.2393 35.9044 44.7877 36.0795C44.3362 36.2796 43.8595 36.3796 43.3577 36.3796C42.856 36.3796 42.3793 36.3046 41.9277 36.1045C41.4761 35.9294 41.0496 35.6543 40.6984 35.3042C40.3471 34.9541 40.0712 34.5539 39.8705 34.1038C39.6948 33.6536 39.6196 33.1784 39.6447 32.7032C39.6698 32.228 39.7701 31.7529 39.9708 31.3277C40.1715 30.9025 40.4726 30.5024 40.8238 30.1773C41.175 29.8521 41.6015 29.602 42.0531 29.452H42.1033V29.402ZM42.3291 29.9522C43.0817 29.6271 43.9347 29.6271 44.6874 29.9022C45.44 30.2023 46.0672 30.7775 46.3934 31.5278C46.5439 31.9029 46.5941 32.3031 46.569 32.7032C46.5439 33.1034 46.4436 33.5035 46.268 33.8787C46.0923 34.2538 45.8414 34.5789 45.5404 34.829C45.2393 35.1041 44.8881 35.3042 44.5118 35.4293C43.7591 35.7544 42.9061 35.7794 42.1535 35.4793C41.4008 35.1792 40.7736 34.6039 40.4475 33.8537C40.297 33.4785 40.2468 33.0784 40.2468 32.6782C40.2719 32.2781 40.3471 31.8779 40.5228 31.5278C40.6984 31.1526 40.9242 30.8275 41.2252 30.5524C41.5263 30.2773 41.8775 30.0772 42.2538 29.9272H42.3291V29.9522Z" fill="#2A2941"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6674 19.7983L34.8027 12.6206L46.8199 40.8063L29.6345 48.1091L17.6674 19.7983Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.2542 11.5452L16.5886 19.3731L29.1578 49.2095L47.8485 41.2815L35.2542 11.5452ZM18.7713 20.2485L34.3762 13.721L45.716 40.3811L30.0861 47.0087L18.7713 20.2485Z" fill="#2A2941"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.1472 19.4233L28.6811 18.3729L28.3048 17.4475L25.7709 18.4979L26.1472 19.4233Z" fill="#2A2941"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.5808 29.377L25.8963 33.8286L31.0143 34.754L31.215 33.6536L27.6525 33.0033L29.509 29.9272L28.5808 29.377Z" fill="#2A2941"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3762 28.3515L37.9387 28.8517L36.2076 31.9028L37.186 32.428L39.6949 27.8763L34.5518 27.176L34.3762 28.3515Z" fill="#2A2941"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.3726 33.9036L33.1719 27.6763H32.0681L32.2437 33.8786L33.3726 33.9036Z" fill="#2A2941"/>
</svg>
          <h1>RamiroCode</h1></div>
      <ul className="flex py-5 items-center justify-end w-10/12 mx-auto space-x-6">
        <li className="font-semibold ">Hola RamiroCode</li>
        <li className="font-semibold">Salir Sesion</li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </li>
      </ul>
    </nav>
  );
}
