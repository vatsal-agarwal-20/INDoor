import { ServicesCheckout } from '../ServicesCheckout'
import { services_gardening } from '../../../Data/ServicesData'

export const WeedRemoving = () => {
    return (
        <>
            <ServicesCheckout title={services_gardening[0].desc} desc={services_gardening[0].checkout_desc} img={services_gardening[0].img} category="Business" />
        </>
    )
}

export const GardenMaintainence = () => {
    return (
        <>
            <ServicesCheckout title={services_gardening[1].desc} desc={services_gardening[1].checkout_desc} img={services_gardening[1].img} category="Business" />
        </>
    )
}




