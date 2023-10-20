import LeftSideBar from './components/LeftSideBar';
import AllExpenses from './components/AllExpenses';
import QuickInvoice from './components/QuickInvoice';
import MyCard from './components/MyCard';
import TransactionHistory from './components/TransactionHistory';
export default function App() {
  return (
    <div className="container mx-auto bg-[#F7F9FA]">
      <div className="grid grid-cols-1 lg:grid-cols-6">
        <div className="col-span-1 bg-white">
          <LeftSideBar />
        </div>
        <div className="col-span-3 px-5 lg:ps-10 lg:pe-5">
          <div className="bg-white rounded-lg mt-10">
            <AllExpenses />
          </div>
          <div className="bg-white rounded-lg mt-5 mb-10">
            <QuickInvoice />
          </div>
        </div>
        <div className="col-span-2 px-5 lg:ps-5 lg:pe-10 mt-10">
          <div className="bg-white rounded-lg">
            <MyCard/>
            <hr className='border mx-2 my-5'/>
            <TransactionHistory/>
          </div>
        </div>
      </div>
    </div>
  );
}
