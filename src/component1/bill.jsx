import { React } from "react";
import balaji from "./balaji.png";

function Bill() {
  return (
    <div className="bill">
      <div className="parent">
        <div className="type1">
          <div className="img">
            <img src={balaji} alt="React-images" />
          </div>

          <div className="type2">
            <p className="copy">
              {" "}
              <b> Consignor Copy </b>{" "}
            </p>
            <br />
            <p className="jbts">
              {" "}
              <b> JBTS </b>{" "}
            </p>
          </div>
        </div>
        <div className="total">
          <p className="heading">
         
            SUBJECT TO <b> HYDRABAD </b> JURISDICTION{" "}
          </p>
          <h1 className="h1"> JAI BALAJI TRANSPORT SERVICE </h1>
          <div className="address">
            <b> H.O. :</b> No.4/181, Plot No.8, 1st Floor, Sri Ram Tower,
            Thuraiyur Road, Anna Nagar, Namakkal-637 002.(T.N). Cell :
            9152528000 <br />
            <b> B.O. :</b> Shop No 1, H.No: 5-29/2, Near Railway Bridge, NH-44,
            Thondupally(V), Shamshabad(M),Ranga Reddy Dist.-509325, Hyderabad,
            Telangana. Cell : 9152526000 <br />
            <b> B.O. :</b> Opp.Shivsudha Milk Diary, Adgaon Phata, Beed Road,
            AURANGABAD (M.S). - 431 010. Cell : 9152527000 <br />
            <b> Email : jbtsnkl@gmail.com </b>
          </div>
        </div>{" "}
        <br />
        <div className="boxes">
          <div className="t7">
            <label className="t1">
              {" "}
              &nbsp; Date :
              <input
                className="ruled"
                type="date"
                placeholder="select your date"
                required
              />
            </label>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label>
           
              GC No :
              <input
                className="ruled"
                type="number"
                placeholder="enter your gc no"
                required
              />
            </label>{" "}
            <br />
          </div>

          <div className="t">
            <div className="t8">
              <label className="t1">
             
                &nbsp; Lorry No :
                <input
                  className="ruled"
                  type="text"
                  placeholder="enter your lorry no"
                  required
                />
              </label>
              <br />
              <label className="t1">
                
                &nbsp; &nbsp; &nbsp; &nbsp; From :
                <input
                  className="ruled"
                  type="text"
                  placeholder="enter your from"
                  required
                />
              </label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <label className="t1">
                Consignor :
                <input
                  className="ruled"
                  type="text"
                  placeholder="enter your consignor"
                  required
                />
              </label>{" "}
              &nbsp;&nbsp;&nbsp;
              <label className="t1">
                {" "}
                Consignee :
                <input
                  className="ruled "
                  type="text"
                  placeholder="enter your consignee"
                  required
                />
              </label>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
          <div className="t9">
            <label>
              {" "}
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; To :
              <input
                className="ruled"
                type="text"
                placeholder="enter your to"
                required
              />
            </label>{" "}
            <br />
            <label>
              {" "}
              &nbsp; &nbsp; &nbsp; GSTIN :
              <input
                className="ruled"
                type="text"
                placeholder="enter your gstin"
                required
              />
            </label>{" "}
            <br />
            <label>
              {" "}
              &nbsp; &nbsp; GSTIN :
              <input
                className="ruled"
                type="text"
                placeholder="enter your gstin"
                required
              />
            </label>
          </div>
        </div>
        <div className="t10">
          <table>
            <tr>
              <th className="goods"> Description of Goods </th>
              <th> Weight </th>
              <th> Rate </th>
              <th> Rs </th>
            </tr>

            <tr>
              <td>
                <label>
                  {" "}
                  No.of.Bales :
                  <input type="text" placeholder="no.of.bales" />
                </label>
              </td>

              <td>
                <label>
                  {" "}
                  Lot No :
                  <input type="text" placeholder="lot no" />
                </label>
              </td>

              <td>
                <label>
                  {" "}
                  P.R No :
                  <input type="text" placeholder="p.r no" />
                </label>
              </td>

              <td>
                <label>
                  {" "}
                  Inv.No :
                  <input type="text" placeholder="inv.no" />
                </label>
              </td>

              <td>
                <label>
                  {" "}
                  Value of Goods :
                  <input type="text" placeholder="value of goods" />
                </label>
              </td>

              <td>
                <label>
                  {" "}
                  Quality :
                  <input type="text" placeholder="quality" />
                </label>
              </td>

              <td>
                <label>
                  {" "}
                  P Marks :
                  <input type="text" placeholder="p marks" />
                </label>
              </td>

              <td>
                GST Payable By Consignor / Consignee <br />
                NOTE : G.C.NoteSibject to Condition overleaf
              </td>
            </tr>
          </table>
          <div className="t11">
            <p className="footer">
              {" "}
              <b> Consignor should be insure their goods </b>{" "}
            </p>{" "}
            \
            <p className="footer2">
              <b> For Jai Balaji Roadways </b>{" "}
            </p>
          </div>{" "}
          <br /> <br />
          <div className="t12">
            <p className="down1"> Sign. of Lorry Owner or Driver </p>
            <p className="down3"> Authorised Signature </p>
          </div>
          <div className="mern">
            <p>
              {" "}
              <b>
                {" "}
                Powered by R & J MERN - Developer's / Cell : 9944088629{" "}
              </b>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Bill;
