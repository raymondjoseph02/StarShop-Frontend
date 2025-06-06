import { SvgIcons } from "@/svg/svg";

export const InventoryAlerts = () => {
  return (
    <div className="bg-[#13111E] border border-[rgba(255,255,255,0.1)] rounded-xl p-6">
      <div className="pt-6 px-6 pb-2 space-y-2">
        <h2 className="text-lg font-semibold">Inventory Alerts</h2>
        <p className="text-[#a1a0a5] text-sm mb-4">
          Products that need attention
        </p>
      </div>
      <div className="flex flex-col gap-3 ">
        <div className="p-[1.062rem] space-y-2 bg-[rgba(245,158,11,.1)] border border-[rgba(245,158,11,.2)] rounded-lg">
          <h3 className="text-[0.96rem] leading-6 text-[#FBBF24] font-medium flex items-center gap-2">
            {SvgIcons.clockIcon()}
            Low Stock Items
          </h3>
          <div className="space-y-2 ">
            <div className="flex justify-between items-center">
              <p className="text-white text-[0.852rem]">Designer Sunglasses</p>
              <p className="text-[#FBBF24] text-[0.852rem]">5 left</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-white text-[0.852rem]">Minimalist Watch</p>
              <p className="text-[#FBBF24] text-[0.852rem]">8 left</p>
            </div>
          </div>
          <div>
            <button className="py-2 bg-[#0E0E1B] border border-[rgba(245,158,11,.2)]  text-[0.852rem] font-medium text-[#FBBF24] rounded-md w-full">
              Restock Items
            </button>
          </div>
        </div>
        <div className="p-[1.062rem] space-y-2 bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)] rounded-lg">
          <h3 className="text-[0.96rem] leading-6 text-[#F87171] font-medium flex items-center gap-2">
            {SvgIcons.warningIcon()}
            Out of Stock Items{" "}
          </h3>
          <div className="space-y-2 ">
            <div className="flex justify-between items-center">
              <p className="text-white text-[0.852rem]">Leather Wallet</p>
              <p className="text-[#F87171] text-[0.852rem]">Out of stock</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-white text-[0.852rem]">
                Summer Collection Shirt
              </p>
              <p className="text-[#F87171] text-[0.852rem]">Out of stock</p>
            </div>
          </div>
          <div>
            <button className="py-2 bg-[#0E0E1B] border border-[rgba(248,113,113,.2)]  text-[0.852rem] font-medium text-[#F87171] w-full  rounded-md">
              Restock Items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
