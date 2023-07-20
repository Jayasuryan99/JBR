import React from "react";
import image from "./balaji.png";

function Bills() {
  return (
    <div className="w-[70vw] flex flex-col items-center m-auto justify-center">
      <div className="flex justify-between items-center w-[100%]">
        <div>
          <img src={image} alt="logo" width={100} height={100} />
        </div>
        <div>
          <h1 className="text-blue-500 text-center font-semibold underline">
            SUBJECT TO HYDRABAD JURISDICTION
          </h1>
          <h1 className="text-5xl text-red-500">
            {" "}
            JAI BALAJI TRANSPORT SERVICE
          </h1>
        </div>
        <div>
          <p className="text-red-500 text-xl font-semibold">Consignor Copy</p>
          <h1 className="text-6xl text-blue-700 underline font-bold">JBR</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p>
          {" "}
          No.4 H.O. :No.4/181, Plot No.8, 1st Floor, Sri Ram Tower, Thuraiyur
          Road, Anna Nagar, Namakkal-637 002.(T.N).
        </p>
        <span>Cell:9152528000</span>
        <p>
          {" "}
          B.O. : Shop No 1, H.No: 5-29/2, Near Railway Bridge, NH-44,
          Thondupally(V), Shamshabad(M),Ranga Reddy Dist.-509325, Hyderabad,
          Telangana.{" "}
        </p>
        <span>Cell : 9152526000</span>
        <p>
          {" "}
          B.O. : Opp.Shivsudha Milk Diary, Adgaon Phata, Beed Road, AURANGABAD
          (M.S). - 431 010. Cell : 9152527000
        </p>
        <span>Email : jbtsnkl@gmail.com </span>
      </div>
      <div className="flex flex-col f w-[100%] items-end justify-center">
        <p className="flex font-bold">
          <span className="font-bold text-blue-600">Date:</span>22/11/2023
        </p>
        <p className="flex font-bold">
          <span className="font-bold text-blue-600">GC No:</span>1273
        </p>
      </div>
      <div className="w-[100%] flex justify-between items-center">
        <form className="flex flex-col gap-1">
          <label>
            <span className="text-blue-600 font-bold">Lorry No:</span>
            <input
              type="text"
              className="outline-none border-b-2 border-dashed border-blue-600 !ml-4 w-[25vw]"
            />
          </label>
          <label>
            <span className="text-blue-600 font-bold"> From:</span>
            <input
              type="text"
              className="outline-none border-b-2 border-dashed border-blue-600 ml-[2.8vw] w-[25vw]"
            />
          </label>
          <label className="flex">
            <span className="text-blue-600 font-bold">Consignor:</span>
            <input
              type="text"
              className="outline-none border-b-2 border-dashed border-blue-600 ml-2 w-[45vw]"
            />
          </label>
          <label className="flex">
            <span className="text-blue-600 font-bold"> Consignee:</span>
            <input
              type="text"
              className="outline-none border-b-2 border-dashed border-blue-600 !ml-2 w-[45vw]"
            />
          </label>
        </form>
        <form className="flex flex-col mt-10 gap-1">
          <label className="ml-[-15vw] flex">
            <span className="text-blue-600 font-bold"> From:</span>
            <input
              type="text"
              className="outline-none border-b-2 border-dashed border-blue-600 ml-[1vw] w-[26vw]"
            />
          </label>
          <label className="flex">
            <span className="text-blue-600 font-bold">Consignor:</span>
            <input
              type="text"
              className="outline-none border-b-2 border-dashed border-blue-600 ml-2 w-[10vw]"
            />
          </label>
          <label className="flex">
            <span className="text-blue-600 font-bold"> Consignee:</span>
            <input
              type="text"
              className="outline-none border-b-2 border-dashed border-blue-600 !ml-2 w-[10vw]"
            />
          </label>
        </form>
      </div>
      <div className="w-[100%] pt-6">
        <table className="border-2">
          <thead>
            <tr className="border-b-2 border-slate-200 font-bold">
              <td className="border-r-2 w-[40vw] border-slate-200 text-blue-600">
                Description of Goods
              </td>
              <td className="border-r-2 w-[10vw] border-slate-200 text-blue-600">
                Weight
              </td>
              <td className="border-r-2 w-[10vw] border-slate-200 text-blue-600">
                Rate
              </td>
              <td className="w-[10vw] text-blue-600">Rs.</td>
            </tr>
          </thead>
          <tbody className="font-bold border-2">
            <tr>
              <td className="!w-[40vw] border-r-2 border-slate-200">
                <span className="text-blue-600 ">No. of Bales:</span>
              </td>
              <td
                className="!w-[10vw] text-center border-r-2 border-slate-200 border-b-2"
                rowSpan={3}
              >
                As per Bill
              </td>
              <td
                className="!w-[10vw] text-center border-r-2 border-slate-200 border-b-2"
                rowSpan={3}
              >
                903*12
              </td>
              <td
                className="!w-[10vw] text-center  border-slate-200 border-b-2"
                rowSpan={3}
              >
                98388
              </td>
            </tr>
            <tr>
              <td className="!w-[40vw] border-r-2 pt-2 border-slate-200">
                <span className="text-blue-600">Lot No. :</span>
              </td>
             
            </tr>
            <tr>
              <td className="!w-[40vw] border-r-2 pt-2 border-slate-200">
                <span className="text-blue-600">P.R.NO. :</span>
              </td>
            </tr>
            <tr>
              <td className="!w-[40vw] border-r-2 pt-2 border-slate-200">
                <span className="text-blue-600">Inv. No. :</span>
              </td>
              <td colSpan={3} rowSpan={2} className="text-red-500">
                Remarks:please pay lorry freight amount in favour of jai balaji
                roadyways account
              </td>
            </tr>
            <tr>
              <td className="!w-[40vw] border-r-2 pt-2 border-slate-200">
                <span className="text-blue-600">Value of Goods. :</span>{" "}
              </td>
            </tr>
            <tr>
              <td className="!w-[40vw] border-r-2 border-slate-200">
                <span className="text-blue-600">Quality:</span>{" "}
              </td>
              <td colSpan={3} rowSpan={3} className="border-b-2">
                <p className="text-blue-600">Our Bank details Given below:</p>
                <p className="text-blue-600">Bank Name:Tamil Nadu Mercanitle bank</p>
                <p className="text-blue-600">Branch:Namakkal</p>
                <p className="text-red-500">A/C. No:129700050900245</p>
                <p className="text-red-500">Ifsc Code:TMBL0000129</p>
              </td>
            </tr>
            <tr>
              <td className="!w-[40vw] border-r-2 border-slate-200">
                <span className="text-blue-600">P Marks:</span>
              </td>
            </tr>
            <tr>
              <td className="!w-[40vw] border-r-2 text-blue-600 text-center  border-slate-200">
                <span className="text-blue-600 border-b-2 border-t-2 border-blue-600">GST Payable by Consignor/Consignee</span>
              </td>
            </tr>
            <tr>
              <td className="!w-[40vw] border-r-2 text-blue-600   border-slate-200">
                <span className="text-blue-600 ">Note :G.C.Note to Subject to Condition Overleaf</span>
              </td>
              <td className="text-blue-600"><p>PAN No:BJTPS6814B</p><p>Eway Bill reg No:33BJTPS6814B1Z1</p></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex gap-20 w-[100%] items-end justify-end pr-20">
        <p className="text-blue-600 font-bold">Consignor Should be ensure their goods</p>
        <p className="text-red-500 font-bold">Jai Balaji RoadWays</p>
      </div>
      <div className="flex w-[100%] justify-between font-bold text-blue-600 pt-8">
        <p>Sign Of owner or lorry driver</p>
        <p>
          <span>Authorised Signature</span>
        </p>
      </div>
    </div>
  );
}

export default Bills;
