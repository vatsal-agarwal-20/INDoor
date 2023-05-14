import { services_mechanic, services_pest_control, services_cooking, services_electrician, services_painting, services_cleaning, services_carpenter, services_plumbing } from "./ServicesData";

let mechanic = services_mechanic;
let pest_control = services_pest_control;
let cooking = services_cooking;
let electrician = services_electrician;
let painting = services_painting;
let cleaning = services_cleaning;
let carpenter = services_carpenter;
let plumbing = services_plumbing;

const allServices = [...mechanic, ...pest_control, ...cooking, ...electrician, ...painting, ...cleaning, ...carpenter, ...plumbing];

export default allServices;
