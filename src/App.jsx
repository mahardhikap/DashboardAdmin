import LeftSideBar from './components/LeftSideBar';
import AllExpenses from './components/AllExpenses';
import QuickInvoice from './components/QuickInvoice';
export default function App() {
  return (
    <div className="container mx-auto bg-[#F7F9FA]">
      <div className="grid grid-cols-6">
        <div className="col-span-1 bg-white">
          <LeftSideBar />
        </div>
        <div className="col-span-3 ps-10 pe-5">
          <div className="bg-white rounded-lg mt-10">
            <AllExpenses />
          </div>
          <div className="bg-white rounded-lg mt-5 mb-10">
            <QuickInvoice />
          </div>
        </div>
        <div className="col-span-2 ps-5 pe-10 mt-10">
          <div className="bg-white rounded-lg">My Card</div>
        </div>
      </div>
    </div>
  );
}
