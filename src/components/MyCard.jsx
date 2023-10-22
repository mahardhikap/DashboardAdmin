import React, { useRef, useState } from 'react';

const MyCard = (props) => {
  return (
    <div className="p-2">
      <div className="my-3 font-medium text-[#064061]">My Card</div>
      <div className="bg-[#4EB7F2] rounded-lg relative min-w-[345px]">
        <img src="/mask-group.svg" className="w-full lg:w-auto" />
        <div className="absolute w-full inset-0">
          <div className="flex items-center justify-between px-10 py-3">
            <div>
              <div className="text-white font-light">Name Card</div>
              <div className="text-white font-medium">{props.fullname}</div>
            </div>
            <div>
              <img
                src={props.logocard}
                className="w-[50px] object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="px-10 pt-10 sm:pt-40 md:pt-56 lg:pt-10 flex flex-col items-end">
            <div className="text-white font-bold">{props.idcard}</div>
            <div className="text-white font-light text-sm">
              {new Date(`${props.expired}`).toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
