import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const MyCard = () => {
  return (
    <div className="p-2">
      <div className="my-3 font-medium text-[#064061]">My Card</div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[#4EB7F2] rounded-lg relative min-w-[345px]">
            <img src="/mask-group.svg" />
            <div className="absolute w-full inset-0">
              <div className="flex items-center justify-between px-10 py-3">
                <div>
                  <div className="text-white font-light">Name Card</div>
                  <div className="text-white font-medium">Syah Bandi</div>
                </div>
                <div>
                  <img src="/gallery.svg" />
                </div>
              </div>
              <div className="px-10 pt-10 flex flex-col items-end">
                <div className="text-white font-bold">0918 8124 0042 8129</div>
                <div className="text-white font-light text-sm">12/20 - 124</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#4EB7F2] rounded-lg relative min-w-[345px]">
            <img src="/mask-group.svg" />
            <div className="absolute w-full inset-0">
              <div className="flex items-center justify-between px-10 py-3">
                <div>
                  <div className="text-white font-light">Name Card</div>
                  <div className="text-white font-medium">Syah Bandi</div>
                </div>
                <div>
                  <img src="/gallery.svg" />
                </div>
              </div>
              <div className="px-10 pt-10 flex flex-col items-end">
                <div className="text-white font-bold">0918 8124 0042 8129</div>
                <div className="text-white font-light text-sm">12/20 - 124</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#4EB7F2] rounded-lg relative min-w-[345px]">
            <img src="/mask-group.svg" />
            <div className="absolute w-full inset-0">
              <div className="flex items-center justify-between px-10 py-3">
                <div>
                  <div className="text-white font-light">Name Card</div>
                  <div className="text-white font-medium">Syah Bandi</div>
                </div>
                <div>
                  <img src="/gallery.svg" />
                </div>
              </div>
              <div className="px-10 pt-10 flex flex-col items-end">
                <div className="text-white font-bold">0918 8124 0042 8129</div>
                <div className="text-white font-light text-sm">12/20 - 124</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MyCard;
