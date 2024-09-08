// import React from 'react'
// import styles from './sendPage.module.css'
// import Btnrangi from '../BUTTONS/BtnRangi/btnrangi'
// import EditSaveComponent from '../InputEdite/input'
// import DiscountCodeInput from '../kodTakhfif/kod'
// import Ghavanin from '../ghavanin/ghavanin'
// import Hematali from '../HematAlii/hema'
// import Heder from '../Heder/heder'
// import Modernbtn from '../BUTTONS/modernBTN/modernbtn'
// import { useCart } from '../Like/CartContext';

// export default function Sendpage() {

//   const { totalFee } = useCart(); // Get the total fee from context


//   let data = [
//     { id: 0, description: "نحوه‌ی ارسال و پرداخت" },
//     { id: 1, name: " قیمت نهایی (ریال)", catch: `  ${totalFee.toLocaleString()} ` },
//     { id: 2, name: " هزینه ارسال (ریال)", catch: "  35,000" },
//     { id: 3, name: " قابل پرداخت (ریال)", catch: ` ${(totalFee + 35000).toLocaleString()} ` },
//     { id: 4, name: "پرداخت" },
//     { id: 5, name: "آدرس تحویل سفارش" },
//     { id: 6, name: "نحوه‌ی ارسال" },
//     { id: 7, name: "نحوه‌ی پرداخت" },
//     { id: 8, name: "پرداخت از طریق درگاه پرداخت اینترنتی(کلیه کارت‌های‌ عضو شبکه‌ی شتاب)" },
//     { id: 9, name: "پرداخت از طریق کارت به کارت (6104338928382247)" },
//     { id: 10, name: "قوانین را مطالعه کرده و می‌پذیرم" },
//     { id: 11, name: "پیک موتوری" },
//     { id: 12, name: "تیپاکس" },
//     { id: 13, name: "پست پیشتاز" },
//   ];

//   return (
//     <div className={styles.Main}>
//       <div className={styles.satr1}><h4 className={styles.TextS11}>{data[0].description}</h4></div>
      
//       <div className={styles.mainS2}>
//         <div className={styles.MchildAB}>
//           <div className={styles.childAS2}>

//             <div className={styles.mainS4}>

//               <div className={styles.chaild1S4}>
//                 {/* <div className={styles.sate4}>
//                   <DiscountCodeInput />
//                 </div> */}
//                 <h5>درصورت تمایل به واریز مبلغ بیشتر،مبلغ را واردنمایید</h5>
//                 <div className={styles.sate4}>
//                   <Hematali />
//                 </div>
//                 <div className={styles.ghavanin2}><Ghavanin /> <span className={styles.Ga}>{data[10].name}</span></div>

//               </div>
              
//               <hr className={styles.hr1Sendpage}/>
              
//               <div className={styles.chaild2S4}>
//                 <div><h4 className={styles.TextD4}>{data[1].name}</h4><h4 className={styles.Textcatch}>{data[1].catch}</h4></div>
//                 <div><h4 className={styles.TextD4}>{data[2].name}</h4><h4 className={styles.Textcatch}>{data[2].catch}</h4></div>
//                 <div><h4 className={styles.TextD4}>{data[3].name}</h4><h4 className={styles.Textcatch}>{data[3].catch}</h4></div>
//               </div>
//             </div>
//             <div className={styles.divA4}><Modernbtn /></div>

//           </div>
//           <div className={styles.MainBCs2}>
//             <div className={styles.childBS2}><h5 className={styles.TextS1} >{data[5].name}</h5>
//               <EditSaveComponent />
//             </div>


//             <div className={styles.childCS2}>


//               <div className={styles.Nersal}>

//                 <div className={styles.children11} >
//                   <input className={styles.radiosendP} type="radio" id="پیک موتوری" name="fav_language" value="پیک موتوری" />
//                   <h5 className={styles.h5SEND}>{data[11].name}</h5></div>

//                 <div className={styles.children1}>  <input className={styles.radiosendP} type="radio" id="تیپاکس" name="fav_language" value="تیپاکس" />
//                   <h5 className={styles.h5SEND} >{data[12].name}</h5></div>

//                 <div className={styles.children1}> <input className={styles.radiosendP} type="radio" id="پست پیشتاز" name="fav_language" value="پست پیشتاز" />
//                   <h5 className={styles.h5SEND}>{data[13].name}</h5></div>

//                 <div className={styles.children1}> <h5 className={styles.radio}>{data[6].name}</h5></div>
//               </div>
//               <div className={styles.satr3}>
//                 <h5 className={styles.TextS18}>{data[7].name}</h5>

//                 <div className={styles.child1satr3}><input className={styles.uicheckbox} type="radio" id="h1" name="fav_languagee" value="h1" /> <h5 >{data[8].name}</h5></div>
//                 <div className={styles.child1satr3}><input className={styles.uicheckbox} type="radio" id="h2" name="fav_languagee" value="h2" /><h5 >{data[9].name}</h5></div>
             
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }


// Sendpage.js
import React from 'react';
import styles from './sendPage.module.css';
import Hematali from '../HematAlii/hema';
import Ghavanin from '../ghavanin/ghavanin';
import Modernbtn from '../BUTTONS/modernBTN/modernbtn';
import { useCart } from '../Like/CartContext';
import { useLaw } from '../ghavanin/LawContext';
import EditSaveComponent from '../InputEdite/input'
export default function Sendpage() {
  const { totalFee } = useCart();
  const { lawChecked } = useLaw(); // Use the context to get the lawChecked state

  let data = [
    { id: 0, description: "نحوه‌ی ارسال و پرداخت" },
    { id: 1, name: " قیمت نهایی (ریال)", catch: `  ${totalFee.toLocaleString()} ` },
    { id: 2, name: " هزینه ارسال (ریال)", catch: "  35,000" },
    { id: 3, name: " قابل پرداخت (ریال)", catch: ` ${(totalFee + 35000).toLocaleString()} ` },
    { id: 4, name: "پرداخت" },
    { id: 5, name: "آدرس تحویل سفارش" },
    { id: 6, name: "نحوه‌ی ارسال" },
    { id: 7, name: "نحوه‌ی پرداخت" },
    { id: 8, name: "پرداخت از طریق درگاه پرداخت اینترنتی(کلیه کارت‌های‌ عضو شبکه‌ی شتاب)" },
    { id: 9, name: "پرداخت از طریق کارت به کارت (6104338928382247)" },
    { id: 10, name: "قوانین را مطالعه کرده و می‌پذیرم" },
    { id: 11, name: "پیک موتوری" },
    { id: 12, name: "تیپاکس" },
    { id: 13, name: "پست پیشتاز" },
  ];

  return (
    <div className={styles.Main}>
      <div className={styles.satr1}>
        <h4 className={styles.TextS11}>{data[0].description}</h4>
      </div>

      <div className={styles.mainS2}>
        <div className={styles.MchildAB}>
          <div className={styles.childAS2}>
            <div className={styles.mainS4}>
              <div className={styles.chaild1S4}>
                <h5>درصورت تمایل به واریز مبلغ بیشتر، مبلغ را واردنمایید</h5>
                <div className={styles.sate4}>
                  <Hematali />
                </div>
                <div className={styles.ghavanin2}>
                  <Ghavanin />
                  <span className={styles.Ga}>{data[10].name}</span>
                </div>
              </div>

              <hr className={styles.hr1Sendpage} />

              <div className={styles.chaild2S4}>
                <div>
                  <h4 className={styles.TextD4}>{data[1].name}</h4>
                  <h4 className={styles.Textcatch}>{data[1].catch}</h4>
                </div>
                <div>
                  <h4 className={styles.TextD4}>{data[2].name}</h4>
                  <h4 className={styles.Textcatch}>{data[2].catch}</h4>
                </div>
                <div>
                  <h4 className={styles.TextD4}>{data[3].name}</h4>
                  <h4 className={styles.Textcatch}>{data[3].catch}</h4>
                </div>
              </div>
            </div>
            <div className={styles.divA4}>
              <Modernbtn />
            </div>
          </div>
          <div className={styles.MainBCs2}>
            <div className={styles.childBS2}>
              <h5 className={styles.TextS1}>{data[5].name}</h5>
              <EditSaveComponent/>
            </div>

            <div className={styles.childCS2}>
              <div className={styles.Nersal}>
                <div className={styles.children11}>
                  <input className={styles.radiosendP} type="radio" id="پیک موتوری" name="fav_language" value="پیک موتوری" />
                  <h5 className={styles.h5SEND}>{data[11].name}</h5>
                </div>
                <div className={styles.children1}>
                  <input className={styles.radiosendP} type="radio" id="تیپاکس" name="fav_language" value="تیپاکس" />
                  <h5 className={styles.h5SEND}>{data[12].name}</h5>
                </div>
                <div className={styles.children1}>
                  <input className={styles.radiosendP} type="radio" id="پست پیشتاز" name="fav_language" value="پست پیشتاز" />
                  <h5 className={styles.h5SEND}>{data[13].name}</h5>
                </div>
                <div className={styles.children1}>
                  <h5 className={styles.radio}>{data[6].name}</h5>
                </div>
              </div>
              <div className={styles.satr3}>
                <h5 className={styles.TextS18}>{data[7].name}</h5>
                <div className={styles.child1satr3}>
                  <input className={styles.uicheckbox} type="radio" id="h1" name="fav_languagee" value="h1" />
                  <h5>{data[8].name}</h5>
                </div>
                <div className={styles.child1satr3}>
                  <input className={styles.uicheckbox} type="radio" id="h2" name="fav_languagee" value="h2" />
                  <h5>{data[9].name}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
