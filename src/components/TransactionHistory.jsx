const TransactionHistory = (props) => {
  return (
    <div>
      <div className="flex items-center justify-between p-2">
        <div className="text-[#064061] font-medium">Transaction History</div>
        <div className="text-[#4EB7F2]">See all</div>
      </div>
      <div className="font-normal p-2 text-[#AAAAAA]">13 April 2023</div>
      {props.history?.map((item) => {
        return (
          <div className="p-2">
            <div className="bg-[#FAFAFA] p-2 rounded-lg flex flex-row items-center justify-between">
              <div>
                <div className="font-medium text-[#064061]">
                  {item.description}
                </div>
                <div className="font-light text-[#AAAAAA]">
                  13 Apr, 2022 at 3:30 PM
                </div>
              </div>
              <div className={`${item.amount[1] === 'in' ? 'text-[#7DD97B]' : 'text-[#F3735E]'} font-medium`}>${item.amount[0]}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionHistory;
