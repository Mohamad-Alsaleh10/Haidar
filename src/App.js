import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
// import Testimonial from "./components/tesimonial/Testimonial";
import NewsTicker from "./components/NewsTicker";  
import Portfolio from "./components/portfolio/Portfolio";


function App() {
  const newsItems = [
    ' وسائل إعلام الاحتلال: فرق الإسعاف تحركت في عملية بحث عن أماكن محتملة لسقوط صاروخ غرب بحيرة طبريا في الجليل الأسفل.',
    ' المتحدث باسم الدفاع المدني في غزة:  تسجيل أكثر من 30 شهيداً وعدد من الجرحى في قصف الاحتلال  10 منازل فجراً في حي #الشجاعية.',
    ' أكد مصدر في مجلس الأعمال السوري العراقي أن القيادة السورية ستسمح اعتباراً من يوم غد الأربعاء دخول كل مواطن عراقي يرغب زيارة سورية بدون موافقة أمنية أو تأشيرة دخول.  وقال المصدر: إن القرار نافذ اعتباراً من الغد وسيطبق على كل المنافذ الحدودية البرية والجوية.  وختم المصدر: إن المواطن العراقي سيحصل فور وصوله إلى سورية على تأشيرة الدخول من المنفذ الحدودي الذي يصل إليه وبشكل مباشر.',
    // ... أضف المزيد من الأخبار حسب الحاجة
  ];
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        <NewsTicker news={newsItems} />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        {/* <Features /> */}
        <Projects />
        <Portfolio />
        <Resume />
        {/* <Testimonial /> */}
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
