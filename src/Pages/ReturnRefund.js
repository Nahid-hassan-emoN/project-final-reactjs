import React, { useState } from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import "./Extra.css";

const ReturnRefund = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
    console.log(index);
  };

  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />

      <div className="returnRefund ">
        <div className="container-xxl">
          <div className="header-text py-3">
            <h3 className="text-center">Returns & Refunds</h3>
          </div>

          <div className="bloc-tabs d-flex align-items-center text-center">
            <div className="tabLabel col-4 " onClick={() => toggleTab(1)}>
              {" "}
              How To Return a Product{" "}
            </div>
            <div className="tabLabel col-4" onClick={() => toggleTab(2)}>
              {" "}
              Returns Policy{" "}
            </div>
            <div className="tabLabel col-4" onClick={() => toggleTab(3)}>
              {" "}
              Refund Policy{" "}
            </div>
          </div>

          <div className="content-tabs">
            <div className={toggleState === 1 ? "show-content" : "content"}>
              <div className="tab-inner-content d-flex px-3">
                <div className="col-8 ">
                  <h3 className=" mb-3">Returns Process</h3>
                  <div className="li-content ">
                    <li>
                      <span>1</span>
                      Sign in to your Daraz Account, click on “My Account” from
                      bottom.
                    </li>
                    <li>
                      <span>2</span>
                      Select the “My Order” section and click on the View all.
                    </li>
                    <li>
                      <span>3</span>
                      Choose the item you want to return and click on “initiate
                      return”
                    </li>
                    <li>
                      <span>4</span>
                      Please select your desired refund method.
                    </li>
                    <li>
                      <span>5</span>
                      Pack your return package securely, with the product in the
                      original and undamaged manufacturer's packaging as
                      delivered to you. Write your order number & return
                      tracking number clearly on the outer side of the package.
                    </li>
                    <li>
                      <span>6</span>
                      Head to your nearest drop-off point or wait for collection
                      by our pick-up service. While handing over your package to
                      Drop-Off station/ Pickup Agent, please collect the Daraz
                      Return Acknowledgment paper and reserve it for future
                      reference.
                    </li>

                    <li>
                      <span>7</span>
                      Make sure you have written your order number and return
                      tracking number on your package at the time of drop off.
                      You can view your return tracking number as soon as you
                      have filled the Online Return Form and logged your return
                      request.
                    </li>

                    <li>
                      <span>8</span>
                      Thank you
                    </li>
                  </div>
                </div>
                <div className="col-4 tab-inner-content2 mb-4">
                  <h4>Conditions for Returns</h4>
                  <p>
                    1.&nbsp;&nbsp;The product must be unused, unworn, unwashed
                    and without any flaws. Fashion products can be tried on to
                    see if they fit and will still be considered unworn. If a
                    product is returned to us in an inadequate condition, we
                    reserve the right to send it back to you.
                    <br />
                    <br />
                    2.&nbsp;&nbsp;The product must include the original tags,
                    user manual, warranty cards, freebies and accessories.
                    <br />
                    <br />
                    3.&nbsp;&nbsp;The product must be returned in the original
                    and undamaged manufacturer packaging / box. If the product
                    was delivered in a second layer of Daraz packaging, it must
                    be returned in the same condition with return shipping label
                    attached. Do not put tape or stickers on the manufacturers
                    box.
                    <br />
                    <br />
                    4.&nbsp;&nbsp;While you return the item at our hub, please
                    collect the Daraz Return Acknowlegement Form from the Hub
                    and fill it in by yourself. Keep one copy to yourself and we
                    will keep another copy of it for the record.
                    <br />
                    <br />
                    <b>Note:</b> It is important to indicate the order number
                    and return tracking number on your return package to avoid
                    any inconvenience/delay in process of your return.
                  </p>
                </div>
              </div>
            </div>

            <div className={toggleState === 2 ? "show-content" : "content"}>
              <div className="tab-inner-content d-flex px-3">
                <div className="col-8 ">
                  <h3 className=" mb-3">Returns Policy</h3>
                  <div className="li-content ">
                    <li>
                      <span>1</span>
                      If your product is damaged, defective, incorrect or
                      incomplete at the time of delivery, please raise a return
                      request on Daraz app or website.
                      <b>
                        Return request must be raised within 14 days for
                        DarazMall items, or within 7 days for non-DarazMall
                        items from the date of delivery.
                      </b>
                    </li>
                    <li>
                      <span>2</span>
                      For electronic appliances & mobile phones related issues
                      after usage or after the return policy period, please
                      check if the product is covered under seller warranty or
                      brand warranty. For more information on warranty claims,
                      please view our Warranty Policy.
                    </li>
                    <li>
                      <span>3</span>
                      For selected categories, we accept a change of mind.
                      Please refer to the section below on Return Policy per
                      Category for more information.
                    </li>

                    <h5 className="mb-3">Valid reasons to return an item</h5>

                    <li>
                      <span>1</span>
                      Delivered product is damaged (i.e. physically destroyed or
                      broken) / defective (e.g. unable to switch on)
                    </li>

                    <li>
                      <span>2</span>
                      Delivered product is incomplete (i.e. has missing items
                      and/or accessories)
                    </li>
                    <li>
                      <span>3</span>
                      Delivered product is incorrect (i.e. wrong
                      product/size/colour, fake item, or expired)
                    </li>

                    <li>
                      <span>4</span>
                      Delivered product is does not match product description or
                      picture (i.e product not as advertised)
                    </li>

                    <li>
                      <span>5</span>
                      Delivered product does not fit. (i.e. size is unsuitable)
                    </li>
                  </div>
                </div>
                <div className="col-4 tab-inner-content2 mb-4">
                  <h4>Conditions for Returns</h4>
                  <p>
                    1.&nbsp;&nbsp;The product must be unused, unworn, unwashed
                    and without any flaws. Fashion products can be tried on to
                    see if they fit and will still be considered unworn. If a
                    product is returned to us in an inadequate condition, we
                    reserve the right to send it back to you.
                    <br />
                    <br />
                    2.&nbsp;&nbsp;The product must include the original tags,
                    user manual, warranty cards, freebies and accessories.
                    <br />
                    <br />
                    3.&nbsp;&nbsp;The product must be returned in the original
                    and undamaged manufacturer packaging / box. If the product
                    was delivered in a second layer of Daraz packaging, it must
                    be returned in the same condition with return shipping label
                    attached. Do not put tape or stickers on the manufacturers
                    box.
                    <br />
                    <br />
                    4.&nbsp;&nbsp;While you return the item at our hub, please
                    collect the Daraz Return Acknowlegement Form from the Hub
                    and fill it in by yourself. Keep one copy to yourself and we
                    will keep another copy of it for the record.
                    <br />
                    <br />
                    <b>Note:</b> It is important to indicate the order number
                    and return tracking number on your return package to avoid
                    any inconvenience/delay in process of your return.
                  </p>
                </div>
              </div>
            </div>

            <div className={toggleState === 3 ? "show-content" : "content"}>
              <div className="tab-inner-content d-flex py-3">
                <div className="col-10 ">
                  <h3 className=" mb-3">Issuance of Refunds</h3>
                  <div className="li-content ">
                    <li>
                      <span>1</span>
                      The processing time of your refund depends on the type of
                      refund and the payment method you used.
                    </li>
                    <li>
                      <span>2</span>
                      The refund period / process starts when Daraz has
                      processed your refund according to your refund type.
                    </li>
                    <li>
                      <span>3</span>
                      The refund amount covers the item price and shipping fee
                      for your returned product.
                    </li>

                    <h5 className="mb-3">Refund Types</h5>
                    <li className="px-0">
                      Daraz will process your refund according to the following
                      refund types
                    </li>
                    <li>
                      <span>1</span>
                      Refund from returns - Refund is processed once your item
                      is returned to the warehouse and QC is completed
                      (successful). To learn how to return an item, read our
                      Return Policy.
                    </li>

                    <li>
                      <span>2</span>
                      Refunds from cancelled orders - Refund is automatically
                      triggered once cancelation is successfully processed.
                    </li>
                    <li>
                      <span>3</span>
                      Refunds from failed deliveries - Refund process starts
                      when the item has reached the seller. Please take note
                      that this may take more time depending on the area of your
                      shipping address. Screen reader support enabled.
                    </li>
                  </div>

                  <table className="refund-table">
                    <tr>
                      <th>Company</th>
                      <th>Contact</th>
                      <th>Country</th>
                    </tr>
                    <tr>
                      <td>Alfreds Futterkiste</td>
                      <td>Maria Anders</td>
                      <td>Germany</td>
                    </tr>
                    <tr>
                      <td>Centro comercial Moctezuma</td>
                      <td>Francisco Chang</td>
                      <td>Mexico</td>
                    </tr>
                    <tr>
                      <td>Ernst Handel</td>
                      <td>Roland Mendel</td>
                      <td>Austria</td>
                    </tr>
                    <tr>
                      <td>Island Trading</td>
                      <td>Helen Bennett</td>
                      <td>UK</td>
                    </tr>
                    <tr>
                      <td>Laughing Bacchus Winecellars</td>
                      <td>Yoshi Tannamuri</td>
                      <td>Canada</td>
                    </tr>
                    <tr>
                      <td>Magazzini Alimentari Riuniti</td>
                      <td>Giovanni Rovelli</td>
                      <td>Italy</td>
                    </tr>
                  </table>

                  <table className="refund-table mt-4">
                    <tr>
                      <th>Company</th>
                      <th>Contact</th>
                    </tr>
                    <tr>
                      <td>Alfreds Futterkiste</td>
                      <td>Maria Anders</td>
                    </tr>
                    <tr>
                      <td>Centro comercial Moctezuma</td>
                      <td>Francisco Chang</td>
                    </tr>
                    <tr>
                      <td>Ernst Handel</td>
                      <td>Roland Mendel</td>
                    </tr>
                    <tr>
                      <td>Island Trading</td>
                      <td>Helen Bennett</td>
                    </tr>
                    <tr>
                      <td>Laughing Bacchus Winecellars</td>
                      <td>Yoshi Tannamuri</td>
                    </tr>
                    <tr>
                      <td>Magazzini Alimentari Riuniti</td>
                      <td>Giovanni Rovelli</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReturnRefund;
