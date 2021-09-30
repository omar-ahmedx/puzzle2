import "../response.css";
import logo from "../images/logo with R.png";
import logoBg from "../images/3.png";
import bg1 from "../images/2.png";
import bg2 from "../images/1.png";
import Footer from "./footer";
import img1 from "../images/right1.png";
import img2 from "../images/right2.png";

function response() {
  return (
    <div className="top-container">
      <img className="top-b" src={bg2} alt="A piece of paper" />
      <div className="center-b-container">
        <img className="center-b" src={bg1} alt="A piece of paper" />
      </div>
      <div className="container">
        <img className="logo-back" src={logoBg} alt="Logo" />
        <img className="main-logo" src={logo} alt="Logo" />
      </div>

      <div className="answer an0">
        <div className="res-container">
          <h1 className="header">
            للأسف، ليست هذه المستندات
            <br />
            التي نبحث عنها لإثبات أن المشتبه فيه يكذب بشأن عذره.
          </h1>

          <p>لا تتخلى عن القضية-ستكتشف ذلك</p>
          <p className="last">إذا اردت تلميح اضغط زر التلميح في الاسفل‬</p>
        </div>

        <div className="btns-container">
          <input
            className="btns"
            type="button"
            value="ارجع"
            onClick={() => {
              document.querySelector(".top-container").style.display = "none";
              document.querySelector(".an0").style.display = "none";
              document.querySelector(".App").style.display = "block";
            }}
          />
          <input
            className="btns"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".answer").style.display = "none";
              document.querySelector(".an0").style.display = "none";
              document.querySelector(".hint1").style.display = "block";
            }}
          />
        </div>
      </div>

      <div className="answer an1">
        <div className="res-container">
          <h1 className="header">
            للأسف، ليست هذه المستندات
            <br />
            التي نبحث عنها لإثبات أن المشتبه فيه يكذب بشأن عذره.
          </h1>
          <p>
            لكنك حصلت على واحد بشكل صحيح! انت على الطريق الصحيح لذا لا تستسلم!
          </p>
          <p className="last">إذا اردت تلميح اضغط زر التلميح في الاسفل‬</p>
        </div>

        <div className="btns-container">
          <input
            className="btns"
            type="button"
            value="ارجع"
            onClick={() => {
              document.querySelector(".top-container").style.display = "none";
              document.querySelector(".an1").style.display = "none";
              document.querySelector(".App").style.display = "block";
            }}
          />
          <input
            className="btns"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".answer").style.display = "none";
              document.querySelector(".an1").style.display = "none";
              document.querySelector(".hint1").style.display = "block";
            }}
          />
        </div>
      </div>

      <div className="answer an2">
        <div className="res-container">
          <h1>
            لقد اثبت ان عذر غياب مروان مزيف! <br />
            عمل رائع ايها المحقق!
          </h1>
          <h2>عمل رائع، يمكنك الان فتح الملف الاضافي الثاني</h2>
          <div className="images">
            <div>
              <img src={img1} alt="خريطه السالم" />
              <p>صورة مسرح الجريمة-أمام المطعم</p>
            </div>
            <div>
              <img src={img2} alt="مقاله" />
              <p>معلومات المشتبه به مروان احمد سعيد</p>
            </div>
          </div>
          <p>
            لقد قمت بمطابقة لوحة السيارة المدرجة في معلومات المشتبة مروان احمد
            سعيد مع صورة السياره الواقفه امام مطعم سالوكا التي تم التقاطها في
            الساعه 9:39 مساءً.
          </p>
          <p className="last">
            استخدم وسائل التواصل الاجتماعي للسماح لأصدقائك بمعرفة انك فتحت للتو
            قضية عمرها 20 عاماً لم يتم حلها!‬
          </p>
        </div>

        <div className="btns-container">
          <input
            className="btns"
            type="button"
            value="ارجع"
            onClick={() => {
              document.querySelector(".top-container").style.display = "none";
              document.querySelector(".an2").style.display = "none";
              document.querySelector(".App").style.display = "block";
            }}
          />
        </div>
      </div>

      <div className="hint1 hint">
        <div className="res-container">
          <h1 className="header">تلميح!</h1>
          <p>إحدى الوثيقتين التي ستحتاج إليها هي صورة من مسرح الجريمة</p>
          <p className="last">إذا اردت تلميح اخر اضغط زر التلميح في الاسفل‬</p>
        </div>

        <div className="btns-container">
          <input
            className="btns"
            type="button"
            value="ارجع"
            onClick={() => {
              document.querySelector(".top-container").style.display = "none";
              document.querySelector(".hint1").style.display = "none";
              document.querySelector(".App").style.display = "block";
            }}
          />
          <input
            className="btns"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".hint1").style.display = "none";
              document.querySelector(".hint2").style.display = "block";
            }}
          />
        </div>
      </div>

      <div className="hint2 hint">
        <div className="res-container">
          <h1 className="header">تلميح!</h1>
          <p>
            عندما تجد الدليل الصحيح لهذا الجزء من القضية سيكون لا مجال للجدال مع
            من كان يكذب بشأن عذرة، انت لا تبحث عن تفاصيل صغيرة غامضه.
          </p>
          <p className="last">إذا اردت تلميح اخر اضغط زر التلميح في الاسفل‬</p>
        </div>

        <div className="btns-container">
          <input
            className="btns"
            type="button"
            value="ارجع"
            onClick={() => {
              document.querySelector(".top-container").style.display = "none";
              document.querySelector(".hint2").style.display = "none";
              document.querySelector(".App").style.display = "block";
            }}
          />
          <input
            className="btns"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".hint2").style.display = "none";
              document.querySelector(".hint3").style.display = "block";
            }}
          />
        </div>
      </div>

      <div className="hint3 hint">
        <div className="res-container">
          <h1 className="header">تلميح!</h1>
          <p>هل تمتلك عدسه مكبره</p>
        </div>

        <div className="btns-container">
          <input
            className="btns"
            type="button"
            value="ارجع"
            onClick={() => {
              document.querySelector(".top-container").style.display = "none";
              document.querySelector(".hint3").style.display = "none";
              document.querySelector(".App").style.display = "block";
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default response;
