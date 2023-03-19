import AsidePerfil from "../components/AsidePerfil";
import Footer from "../components/Footer";
import Servers from "../components/Servers";
import '../css/styles.css'

export default function Inventory() {
  return (
    <>
        <div id="inventario" className="bg-light">
            <AsidePerfil />
            <Servers />
        </div>
        <Footer />
    </>
  );
}