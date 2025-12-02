import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import User from "@/components/User";

const Home = () => {
  const userName = "Juliano"
  return (
    <div>
      <Menu /><br />
      <User nome = {userName}>
        {/* <p className="text-center">
          Este é um conteúdo extra fornecido como children
        </p> */}
      </User>
      <h2>Bem-vindo, Juliano!</h2><br />
      <Footer />
    </div>
  );}

export default Home;