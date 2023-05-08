import React, { createContext, Suspense } from "react";
import Chillum from "../../components/HropxLanding/Chillums/Chillums";
import Cutivation from "../../components/HropxLanding/Cultivation/Cultivation";
import Header from "../../components/HropxLanding/Header/Header";
import Portable from "../../components/HropxLanding/Portable/Portable";
import Statistics from "../../components/HropxLanding/Statistics/Statistics";
import SubscribeNewsletter from "../../components/HropxLanding/SubscribeNewsletter/SubscribeNewsletter";
import TrustedSuppliers from "../../components/HropxLanding/TrustedSuppliers/TrustedSuppliers";
import Vaporize from "../../components/HropxLanding/Vaporize/Vaporize";
import Marketplace from "../../components/HropxLanding/MarketPlace/Marketplace";
import Diaganose from "../../components/HropxLanding/Diagnose/Diaganose";
import FeatureMarketPlace from "../../components/HropxLanding/FeatureMarketplace/FeatureMarketPlace";
import EMultiVendor from "../../components/HropxLanding/EMultiVendor/EMultiVendor";
import Testimonials from "../../components/HropxLanding/Testimonials/Testimonials";
import Locate from "../../components/HropxLanding/Locate/Locate";
import interOrg1 from "../../assets/landingImages/interOrg1.svg";
import interOrg2 from "../../assets/landingImages/interOrg2.svg";
import interOrg3 from "../../assets/landingImages/interOrg3.svg";
import interOrg4 from "../../assets/landingImages/interOrg4.svg";
import interOrg5 from "../../assets/landingImages/interOrg5.svg";
import trustedSupplier2 from "../../assets/landingImages/trustedSupplier2.svg";
import trustedSupplier3 from "../../assets/landingImages/trustedSupplier3.svg";
import trustedSupplier4 from "../../assets/landingImages/trustedSupplier4.svg";
import trustedSupplier5 from "../../assets/landingImages/trustedSupplier5.svg";
import trustedSupplier6 from "../../assets/landingImages/trustedSupplier6.svg";
import FollowUs from "../../components/HropxLanding/FollowUs/FollowUs";
import followUs1 from "../../assets/landingImages/twitter.svg";
import followUs2 from "../../assets/landingImages/facebook.svg";
import followUs3 from "../../assets/landingImages/youtube.svg";
import followUs4 from "../../assets/landingImages/snapchat.svg";
import followUs5 from "../../assets/landingImages/tictok.svg";
import followUs6 from "../../assets/landingImages/messenger.svg";
import followUs7 from "../../assets/landingImages/instagram.svg";
import followUs8 from "../../assets/landingImages/linkdin.svg";
import hygie1 from "../../assets/landingImages/hygie1.svg";
import hygie2 from "../../assets/landingImages/hygie2.svg";
import hygie3 from "../../assets/landingImages/hygie3.svg";
import hygie4 from "../../assets/landingImages/hygie4.svg";
import hygie5 from "../../assets/landingImages/hygie5.svg";
import hygie6 from "../../assets/landingImages/hygie6.svg";
import hygie7 from "../../assets/landingImages/hygie7.svg";
import hygie8 from "../../assets/landingImages/hygie8.svg";
import hygie9 from "../../assets/landingImages/hygie9.svg";
import Quote from "../../components/HropxLanding/Quote/Quote";
import { ViewTodayContainer } from "../../components/HropxLanding/Header/Globals";
import ViewedToday from "../../components/HropxLanding/ViewedToday/ViewedToday";
// import SectionPlaceHolder from '../Globals/SectionPlaceHolder'
import DesignShowcase from "../../components/HropxLanding/ShowCase/DesignShowcase";
import Feedback from "../../components/HropxLanding/Feedback/FeedBack";
import Footer from "../../components/Layout/Footer/Footer";

export const VolumeContext = createContext();

const HproxLanding = () => {
    const [volumeValue, setVolumeValue] = React.useState(false);


    const Inhalate = React.lazy(() => import('../../components/HropxLanding/Inhalate/Inhalate'))

    const handleVolume = (value) => {
        setVolumeValue(value);
    };

    const trustedSuppliers = [
        trustedSupplier2,
        trustedSupplier3,
        trustedSupplier4,
        trustedSupplier5,
        trustedSupplier6,
        trustedSupplier6,
        trustedSupplier4,
        trustedSupplier5,
        trustedSupplier6,
        trustedSupplier6,
    ];
    const trustedOrganizations = [
        interOrg1,
        interOrg2,
        interOrg3,
        interOrg4,
        interOrg5,
        interOrg1,
    ];
    const followUsImgs = [
        { img: followUs1, title: "Twitter" },
        { img: followUs2, title: "Facbook" },
        { img: followUs3, title: "Youtube" },
        { img: followUs4, title: "Snapchat" },
        { img: followUs5, title: "Ticktok" },
        { img: followUs6, title: "Messenger" },
        { img: followUs7, title: "Instagram" },
        { img: followUs8, title: "LinkedIn" },
    ];
    const hygieImgs = [
        { img: hygie1, title: "Europe" },
        { img: hygie2, title: "USA" },
        { img: hygie3, title: "Canada" },
        { img: hygie4, title: "Qatar" },
        { img: hygie5, title: "Dubai" },
        { img: hygie6, title: "Spain" },
        { img: hygie7, title: "Qatar" },
        { img: hygie8, title: "Spain" },
        { img: hygie9, title: "Dubai" },
    ];

    return (
        <div className="">
            {/* <Popup/> */}
            <VolumeContext.Provider value={handleVolume}>
                <Header id="HOME" value={volumeValue} />
            </VolumeContext.Provider>

            < DesignShowcase />
            <Suspense>
                <Inhalate id="INHALATE" />
            </Suspense>

            <Vaporize id="VAPORIZE" />
            <Portable id="PORTABLES" />
            <Chillum id="CHILLUMS" />
            <Cutivation id="CULTIVATE" />
            <TrustedSuppliers
                id="CULTIVATE"
                imgs={trustedSuppliers}
                head="Trusted International Brands"
            />
            <Diaganose id="DIAGNOSE" />
            <Marketplace id="MARKETPLACE" />
            <FeatureMarketPlace order="second" />
            <ViewTodayContainer>
                <ViewedToday section="viewedToday" />
            </ViewTodayContainer>
            <EMultiVendor />
            <Testimonials />
            <Locate id="LOCATE" />
            <Statistics />
            <SubscribeNewsletter />
            <ViewTodayContainer>
                <ViewedToday section="viewedToday" />
            </ViewTodayContainer>
            <TrustedSuppliers
                imgs={trustedOrganizations}
                head="Trusted International Organizations"
            />
            <FollowUs
                imgs={followUsImgs}
                head="Follow Us"
                imgs1={hygieImgs}
                head1="Hygieia Apothecary"
            />
            <Footer type="landing" />


            <VolumeContext.Provider value={handleVolume}>
                <Quote value={volumeValue} />
            </VolumeContext.Provider>

            <Feedback />



        </div>
    );
};

export default HproxLanding;
