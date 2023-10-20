const LeftSideBar = () => {
    return (
        <div className="p-5 h-auto">
            <div className="bg-[#C4C4C4] flex justify-center items-center my-5">
                <img src="/gallery.svg" className="py-4"/>
            </div>
            <div className="flex items-center gap-3 my-5 bg-[#FAFAFA] p-3">
                <div>
                    <img src="/icon-leftsidebar.svg"/>
                </div>
                <div>
                    <div>Lekan Okeowo</div>
                    <div>demo@gmail.com</div>
                </div>
            </div>
            <div className="flex items-center gap-4 border-e-4 border-[#4EB7F2] py-3 my-5">
                <div>
                    <img src="/icon-dashboard.svg"/>
                </div>
                <div>Dashboard</div>
            </div>
        </div>
    )
}

export default LeftSideBar