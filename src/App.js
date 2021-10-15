import './App.css';
import Appointment from './components/Home/Appointment/Appointment';
import Articles from './components/Home/Articles/Articles';
import BestDoctors from './components/Home/BestDoctors/BestDoctors';
import Consulting from './components/Home/Consulting/Consulting';
import Counts from './components/Home/Counts/Counts';
import Header from './components/Home/Header/Header';
import QualityCare from './components/Home/QualityCare/QualityCare';
import WhyTrustUs from './components/Home/WhyTrustUs/WhyTrustUs';
import Navbar from './components/Shared/Navbar/Navbar';

function App() {
  return (
    <div>
    <Navbar />
    <Header />
    <Appointment />
    <QualityCare />
    <WhyTrustUs />
    <Counts />
    <BestDoctors />
    <Consulting />
    <Articles />
    </div>
  );
}

export default App;
