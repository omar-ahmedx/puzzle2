import Footer from "./components/footer";
import { useEffect } from "react";
import "./App.css";
import bg1 from "./images/1.png";
import logo from "./images/logo with R.png";
import logoBg from "./images/3.png";
import Response from "./components/response";

function App() {
  const check = () => {
    let checkbox = document.querySelectorAll("[type=checkbox]");
    let checkboxArray = Array.from(checkbox);
    let correct = 0;
    for (let i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray[i].checked === true) {
        if (checkboxArray[i].name === "_4" || checkboxArray[i].name === "_18") {
          correct += 1;
        }
      }
    }
    document.querySelector(".App").style.display = "none";
    document.querySelector(".top-container").style.display = "flex";

    answer(correct);
  };
  const answer = (correct) => {
    if (correct === 0) {
      document.querySelector(".an0").style.display = "block";
    } else if (correct === 1) {
      document.querySelector(".an1").style.display = "block";
    } else if (correct === 2) {
      document.querySelector(".an2").style.display = "block";
    }
  };
  const times = () => {
    let checkbox = document.querySelectorAll("[type=checkbox]");
    let checkboxArray = Array.from(checkbox);
    let selected = 0;
    for (let i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray[i].checked === true) {
        selected += 1;
      }
    }
    if (selected !== 2) {
      document.querySelector("#submit").removeEventListener("click", check);
    } else {
      document.querySelector("#submit").addEventListener("click", check);
    }
  };

  useEffect(() => times());
  const documents = [
    "مقالة بعنوان -براءة علي يوسف جميل من جميع التهم التي وجهت له بخصوص جريمة القتل التي وقعت في مدينة الساقي عام 1988",
    "مقالة بعنوان -مقتل طبيبة نفسية للاطفال  شهيره",
    "مقالة بعنوان -اعتقال ابو جميل بتهمة قتل غاده ماسي",
    "تقرير الطبيب الشرعي",
    "صورة مسرح الجريمة -أمام المطعم",
    "صورة مسرح الجريمة -الزقاق الخلفي",
    "تقرير الأدلة الخاتم",
    "خريطة السالم",
    "بصمات ابو جميل ",
    "صورة علي يوسف جميل",
    "صورة خاتم الخطوبة",
    "أمر محكمة الاسرة ",
    "سجلات هاتف عيادة صحتنا ",
    "صورة المشتبه به -لؤي تامر هتان",
    "صورة المشتبه به -مروان احمد سعيد",
    "صورة المشتبه به -علي يوسف جميل",
    "صورة المشتبه به -مهند طلال ناصر",
    "صورة المشتبه به -سعد احمد وسيم",
    "معلومات المشتبه-مروان احمد سعيد",
    "معلومات المشتبه -علي يوسف جميل",
    "معلومات المشتبه -مهند طلال ناصر",
    "معلومات المشتبه -سعد احمد وسيم",
    "معلومات المشتبه -لؤي تامر هتان",
    "مقابلة مع مروان احمد سعيد",
    "مقابلة مع علي يوسف جميل",
    "مقابلة مع مهند طلال ناصر",
    "مقابلة مع المشتبه به -سعد احمد وسيم",
    "مقابلة مع المشتبه به -لؤي تامر هتان",
    "صورة الشاهد -عدنان حمد",
    "صورة الشاهد -انس غازي",
    "صورة الشاهد-ابراهيم ساجي",
    "صورة الشاهد-راكان انور",
    "صورة الشاهد -سيف العدل",
    "صورة الشاهد-هلال الدين",
    "صورة الشاهد-عمر فارس",
    "إفادة الشهود -سجى فادي",
    "افادة الشهود - عدنان حمد ",
    "افادة الشهود - انس غازي ",
    "افادة الشهود - راكان انور",
    "افادة الشهود - سيف العدل ",
    "افادة الشهود - ابراهيم ساجي ",
    "افادة الشهود - اسماء جواد ",
    "افادة الشهود - عمر فارس",
    "افادة الشهود - هلال الدين ",
  ];

  return (
    <div>
      <div className="App">
        <img src={bg1} className="top-bg" alt="A piece of paper" />
        <div className="bottom-bg">
          <img className="bottom-bg-img" src={bg1} alt="A piece of paper" />
        </div>
        <div className="gab"></div>
        <div className="main-container">
          <div className="logo-container">
            <img className="logo-bg" src={logoBg} alt="Logo" />
            <img className="logo" src={logo} alt="Logo" />
          </div>

          <div>
            <h1>هل تعرف اي مشتبه به يكذب بشأن حجة غيابه؟</h1>
            <h2>
              أي المشتبهين يكذب حول عذر الغياب
              <br />
              اثبت ذلك ادناه للانتقال إلي الجزء التالي من القضية.
            </h2>

            <div className="documents">
              {documents.map((doc, id) => (
                <label key={`___${id}`}>
                  <input
                    className="checkbox"
                    type="checkbox"
                    name={`_${id}`}
                    key={id}
                    onClick={times}
                  />
                  <span
                    key={`__${id}`}
                    className="checkmark"
                    id={`_${id}`}
                  ></span>
                  {doc}
                </label>
              ))}
            </div>
            <input id="submit" type="button" value="تحقق" className="submit" />
          </div>
        </div>
        <Footer />
      </div>

      <Response />
    </div>
  );
}

export default App;
