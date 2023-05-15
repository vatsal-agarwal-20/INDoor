import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/Home';
import { ContactUs } from './pages/Contact-Us';
import { RegisterAsProfessional } from './pages/Register-as-professional';
import { ServicesCategories } from './pages/Services/ServicesCategories';
// import { ClientOrders } from './container/Orders-Dashboards/ClientOrders'
import { SignUp } from './container/SignIn-SignUp/Sign-Up/SignUp';
import { SignIn } from './container/SignIn-SignUp/Sign-In/SignIn';

import { Mechanic, Electrician, Plumbing, Cleaning, PestControl, Carpenter, Painting, Cooking } from './pages/Services/AllServices';

import { AcRepairCheckout, MicrowaveRepairCheckout, RefrigeratorRepairCheckout, WashingMachineRepairCheckout, HouseholdApplianceRepairCheckout, MixerGrinderRepairCheckout, DishwasherRepairCheckout } from './pages/service-details-pages/mechanic/Mechanic';

import { Fan, Switchboard, Fuse, NewInternalWiring, InverterServicing, LightFitting, CCTVCamera, Doorbell } from './pages/service-details-pages/electrician/ElectricianCheckout'

import { WaterTank, TabAndMixer, BasinAndSink, ToiletAndBathroom, WaterLeakage, WholeHousePlumbing } from './pages/service-details-pages/plumbing/PlumbingCheckout';

import { BathroomCleaning, CarpetCleaning, DustCleaning, FurnitureCleaning, HouseDeepCleaning, HousePainting, KitchenDeepCleaning, SweepingAndMopping } from './pages/service-details-pages/cleaning/Cleaning';

import { HairSalonForMen, HairStylingForWomen, MakeupAndFaceCare, MassageAndTherapy, SkinCare } from './pages/service-details-pages/pest_control/PestAndControl';

import { CAForBusiness, BusinessConsultancy, GST, TaxPlanning } from './pages/service-details-pages/cooking/Cooking';
import { CompleteEventManagement, Decoration, EventPlanning, FoodAndCatering, MusicAndSound, Photography } from './pages/service-details-pages/painting/Painting';
import { Coding, CookingAndBaking, FitnessAndGym, HealthAndDiet, MusicInstructor, TuitionForKids } from './pages/service-details-pages/carpenter/Carpenter';

// pages for admin dashboard


import CheckoutForm from './pages/checkout-form/CheckoutForm';
import Error from './pages/Error Page/Error';


function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Categories" element={<ServicesCategories />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
        <Route path="/checkout/:category/:service" element={<CheckoutForm />} />
        {/* <Route path="/Orders" element={<ClientOrders />} /> */}

        {/* Link in pages/services/ServicesCategories*/}
        <Route path="/categories/mechanic" element={<Mechanic />} />
        <Route path="/categories/electrician" element={<Electrician />} />
        <Route path="/categories/plumbing" element={<Plumbing />} />
        <Route path="/categories/cleaning" element={<Cleaning />} />
        <Route path="/categories/pest_control" element={<PestControl />} />
        <Route path="/categories/carpenter" element={<Carpenter />} />
        <Route path="/categories/painting" element={<Painting />} />
        <Route path="/categories/cooking" element={<Cooking />} />
        <Route path="/categories/gardening" element={<Cooking />} />


        {/* Link in components/services/services.jsx */}
        <Route path="/categories/mechanic/ac_repair" element={<AcRepairCheckout />} />
        <Route path="/categories/mechanic/microwave_repair" element={<MicrowaveRepairCheckout />} />
        <Route path="/categories/mechanic/refrigerator_repair" element={<RefrigeratorRepairCheckout />} />
        <Route path="/categories/mechanic/washing_machine_repair" element={<WashingMachineRepairCheckout />} />
        <Route path="/categories/mechanic/ac_repair" element={<HouseholdApplianceRepairCheckout />} />
        <Route path="/categories/mechanic/mixer_grinder_repair" element={<MixerGrinderRepairCheckout />} />
        <Route path="/categories/mechanic/dishwasher_repair" element={<DishwasherRepairCheckout />} />
        <Route path="/categories/mechanic/household_appliance_repair" element={< HouseholdApplianceRepairCheckout />} />


        <Route path="/categories/electrician/fan" element={<Fan />} />
        <Route path="/categories/electrician/fuse" element={<Fuse />} />
        <Route path="/categories/electrician/switchboard" element={<Switchboard />} />
        <Route path="/categories/electrician/new_internal_wiring" element={<NewInternalWiring />} />
        <Route path="/categories/electrician/inverter_servicing" element={<InverterServicing />} />
        <Route path="/categories/electrician/light_fitting" element={<LightFitting />} />
        <Route path="/categories/electrician/cctv_camera" element={<CCTVCamera />} />
        <Route path="/categories/electrician/door_bell" element={<Doorbell />} />

        <Route path="/categories/plumbing/water_tank" element={<WaterTank />} />
        <Route path="/categories/plumbing/tab_and_mixer" element={<TabAndMixer />} />
        <Route path="/categories/plumbing/basin_and_sink" element={<BasinAndSink />} />
        <Route path="/categories/plumbing/toilet_and_bathroom" element={<ToiletAndBathroom />} />
        <Route path="/categories/plumbing/water_leakage" element={<WaterLeakage />} />
        <Route path="/categories/plumbing/whole_house_plumbing" element={<WholeHousePlumbing />} />

        <Route path="/categories/cleaning/pest_control" element={<PestControl />} />
        <Route path="/categories/cleaning/house_deep_cleaning" element={<HouseDeepCleaning />} />
        <Route path="/categories/cleaning/kitchen_deep_cleaning" element={<KitchenDeepCleaning />} />
        <Route path="/categories/cleaning/carpet_cleaning" element={<CarpetCleaning />} />
        <Route path="/categories/cleaning/house_painting" element={<HousePainting />} />
        <Route path="/categories/cleaning/dust_cleaning" element={<DustCleaning />} />
        <Route path="/categories/cleaning/bathroom_cleaning" element={<BathroomCleaning />} />
        <Route path="/categories/cleaning/furniture_cleaning" element={<FurnitureCleaning />} />
        <Route path="/categories/cleaning/sweeping_and_mopping" element={<SweepingAndMopping />} />

        <Route path="/categories/pest_control/makeup_and_face_care" element={<MakeupAndFaceCare />} />
        <Route path="/categories/pest_control/hairstyling_for_women" element={<HairStylingForWomen />} />
        <Route path="/categories/pest_control/massage_and_therapy" element={<MassageAndTherapy />} />
        <Route path="/categories/pest_control/hair_salon_for_men" element={<HairSalonForMen />} />
        <Route path="/categories/pest_control/skin_care" element={<SkinCare />} />

        <Route path="/categories/cooking/ca_for_business" element={<CAForBusiness />} />
        <Route path="/categories/cooking/business_consultancy" element={<BusinessConsultancy />} />
        <Route path="/categories/cooking/tax_planning" element={<TaxPlanning />} />
        <Route path="/categories/cooking/GST" element={<GST />} />

        <Route path="/categories/painting/complete_event_management" element={<CompleteEventManagement />} />
        <Route path="/categories/painting/decoration" element={<Decoration />} />
        <Route path="/categories/painting/photography" element={<Photography />} />
        <Route path="/categories/painting/event_planning" element={<EventPlanning />} />
        <Route path="/categories/painting/food_and_catering" element={<FoodAndCatering />} />
        <Route path="/categories/painting/music_and_sound" element={<MusicAndSound />} />

        <Route path="/categories/carpenter/coding" element={<Coding />} />
        <Route path="/categories/carpenter/health_and_diet" element={<HealthAndDiet />} />
        <Route path="/categories/carpenter/cooking_and_baking" element={<CookingAndBaking />} />
        <Route path="/categories/carpenter/fitness_and_gym" element={<FitnessAndGym />} />
        <Route path="/categories/carpenter/music_instructor" element={<MusicInstructor />} />
        <Route path="/categories/carpenter/tuition_for_kids" element={<TuitionForKids />} />

        <Route path="/categories/gardening/ca_for_business" element={<CAForBusiness />} />
        <Route path="/categories/gardening/business_consultancy" element={<BusinessConsultancy />} />
        <Route path="/categories/gardening/tax_planning" element={<TaxPlanning />} />
        <Route path="/categories/gardening/GST" element={<GST />} />

        <Route path="/RegisterAsProfessional" element={<RegisterAsProfessional />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
