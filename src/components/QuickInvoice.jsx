import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const QuickInvoice = (props) => {
  return (
    <div className="p-2">
      <div className="flex items-center justify-between">
        <div className="font-medium text-[#064061]">Quick Invoice</div>
        <div className="text-[#4EB7F2] bg-[#FAFAFA] rounded-full px-4 py-2 font-bold">
          +
        </div>
      </div>
      <div className="text-[#064061]">Latest transaction</div>
      {/* <div className="flex items-center gap-2"> */}
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {props.invoice?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex items-center gap-3 bg-[#FAFAFA] w-fit p-2 rounded-lg w-full cursor-pointer">
                <div>
                  <img src="/avatar1.svg" />
                </div>
                <div>
                  <div className="font-medium text-[#064061]">{item.name}</div>
                  <div className="font-small text-xs">{item.email}</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* </div> */}
      <hr className="my-5 border" />
      <div className="grid grid-cols-2">
        <div className="ps-2 pe-1">
          <div className="my-2">
            <label htmlFor="" className="text-[#064061]">
              Customer name
            </label>
            <input
              placeholder="Type customer name"
              className="p-3 w-full rounded-lg bg-[#FAFAFA]"
            />
          </div>
          <div className="my-2">
            <label htmlFor="" className="text-[#064061]">
              Item name
            </label>
            <input
              placeholder="Type customer item name"
              className="p-3 w-full rounded-lg bg-[#FAFAFA]"
            />
          </div>

          <div className="p-3 text-[#4EB7F2] font-medium">Add more details</div>
        </div>
        <div className="ps-1 pe-2">
          <div className="my-2">
            <label htmlFor="" className="text-[#064061]">
              Customer email
            </label>
            <input
              placeholder="Type customer email"
              className="p-3 w-full rounded-lg bg-[#FAFAFA]"
            />
          </div>
          <div className="my-2">
            <label htmlFor="" className="text-[#064061]">
              Item mount
            </label>
            <div className="flex">
              <select
                name=""
                id=""
                className="p-3 bg-[#FAFAFA] rounded-l-lg text-[#AAAAAA]"
              >
                <option value="USD">USD</option>
                <option value="IDR">IDR</option>
              </select>
              <input className="p-3 rounded-r-lg bg-[#FAFAFA] w-full" />
            </div>
          </div>
          <button className="p-3 text-center bg-[#4EB7F2] rounded-lg font-medium text-white w-full">
            Send Money
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickInvoice;
