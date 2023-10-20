const TransactionHistory = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-2">
        <div className="text-[#064061] font-medium">Transaction History</div>
        <div className="text-[#4EB7F2]">See all</div>
      </div>
      <div className="p-2">
        <div className="bg-[#FAFAFA] p-2 rounded-lg flex flex-row items-center justify-between">
          <div>
            <div className="font-medium text-[#064061]">Cash Withdrawal</div>
            <div className="font-light text-[#AAAAAA]">13 Apr, 2022</div>
          </div>
          <div className="text-[#F3735E] font-medium">$20,129</div>
        </div>
      </div>
      <div className="p-2">
        <div className="bg-[#FAFAFA] p-2 rounded-lg flex flex-row items-center justify-between">
          <div>
            <div className="font-medium text-[#064061]">Landing Page project</div>
            <div className="font-light text-[#AAAAAA]">13 Apr, 2022 at 3:30 PM</div>
          </div>
          <div className="text-[#7DD97B] font-medium">$2,000</div>
        </div>
      </div>
      <div className="p-2">
        <div className="bg-[#FAFAFA] p-2 rounded-lg flex flex-row items-center justify-between">
          <div>
            <div className="font-medium text-[#064061]">Juni Mobile App project</div>
            <div className="font-light text-[#AAAAAA]">13 Apr, 2022 at 3:30 PM</div>
          </div>
          <div className="text-[#7DD97B] font-medium">$20,129</div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
