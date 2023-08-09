// link Bootstrap css
import './common resource/css/bootstrap.css';

// link custom css
import './common resource/css/styles.css';

// components are:
import Header from './common resource/components/header/Header';
import Description from './common resource/components/section/Description';
import Section1 from './common resource/components/section/Section1';
import Section2 from './common resource/components/section/Section2';
import Section3 from './common resource/components/section/Section3';
import Section4 from './common resource/components/section/Section4';
import Section5 from './common resource/components/section/Section5';
import Section6 from './common resource/components/section/Section6';
import Footer from './common resource/components/footer/Footer';

function App() {
  return (
      <section>
          <Header />
          <Description />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Footer />
      </section>
  );
}

export default App;
