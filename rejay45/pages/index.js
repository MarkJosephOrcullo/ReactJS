import Head from "next/head";
import AboutUs from "../components/AboutUs";
import Hero from '../components/Hero'
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import dulo from "../components/dulo";


export default function Home() {
    return ( <
        div >
        <
        Head >
        <
        title > TUPC < /title> <
        /Head> <
        Navbar / >
        <
        Hero / >
        <   
        AboutUs / >
        <
        Services / >
        <
        dulo />

        <
        /div>)
    }