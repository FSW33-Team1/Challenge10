import Image from "next/image";
import hero from "../../assets/images/bg-hero.jpg";

const Home = () => {
  return (
    <div>
      <div>
        <Image src={hero} alt="" />
        <h3>Halaman Home</h3>
      </div>
    </div>
  );
};

export default Home;
