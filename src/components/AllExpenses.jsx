const AllExpenses = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-2">
        <div className="font-medium text-[#064061]">All Expenses</div>
        <div>
          <select name="" id="" className="border p-2 rounded-lg">
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
            <option value="daily">Daily</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="ps-2 py-2">
          <div className="p-2 border bg-[#4EB7F2] rounded-lg">
            <div className="flex items-center justify-between">
              <div className="bg-[#FFFFFF1A] p-3 rounded-full">
                <img src="/moneys.svg" />
              </div>
              <div>
                <img src="/arrow-right.svg" />
              </div>
            </div>
            <div className="font-medium text-white mb-2 mt-10">Balance</div>
            <div className="text-white my-2">April 2022</div>
            <div className="font-bold text-white my-2 text-lg">$20,129</div>
          </div>
        </div>
        <div className="p-2">
          <div className="p-2 border rounded-lg">
            <div className="flex items-center justify-between">
              <div className="bg-[#FAFAFA] p-3 rounded-full">
                <img src="/card-receive.svg" />
              </div>
              <div>
                <img src="/arrow-right-black.svg" />
              </div>
            </div>
            <div className="font-medium text-[#064061] mb-2 mt-10">Income</div>
            <div className="text-[#AAAAAA] my-2">April 2022</div>
            <div className="font-bold text-[#4EB7F2] my-2 text-lg">$20,129</div>
          </div>
        </div>
        <div className="pe-2 py-2">
          <div className="p-2 border rounded-lg">
            <div className="flex items-center justify-between">
              <div className="bg-[#FAFAFA] p-3 rounded-full">
                <img src="/card-send.svg" />
              </div>
              <div>
                <img src="/arrow-right-black.svg" />
              </div>
            </div>
            <div className="font-medium text-[#064061] mb-2 mt-10">Expenses</div>
            <div className="text-[#AAAAAA] my-2">April 2022</div>
            <div className="font-bold text-[#4EB7F2] my-2 text-lg">$20,129</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllExpenses;
