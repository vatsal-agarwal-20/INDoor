import { ServicesCheckout } from '../ServicesCheckout'
import { services_painting } from '../../../Data/ServicesData'

export const CompleteEventManagement = () => {
    return (
        <>
            <ServicesCheckout title={services_painting[0].desc} desc={services_painting[0].checkout_desc} img={services_painting[0].img} category="Manage Events" />
        </>
    )
}

export const Decoration = () => {
    return (
        <>
            <ServicesCheckout title={services_painting[1].desc} desc={services_painting[1].checkout_desc} img={services_painting[1].img} category="Manage Events" />
        </>
    )
}

export const Photography = () => {
    return (
        <>
            <ServicesCheckout title={services_painting[2].desc} desc={services_painting[2].checkout_desc} img={services_painting[2].img} category="Manage Events" />
        </>
    )
}

export const EventPlanning = () => {
    return (
        <>
            <ServicesCheckout title={services_painting[3].desc} desc={services_painting[3].checkout_desc} img={services_painting[3].img} category="Manage Events" />
        </>
    )
}

export const FoodAndCatering = () => {
    return (
        <>
            <ServicesCheckout title={services_painting[4].desc} desc={services_painting[4].checkout_desc} img={services_painting[4].img} category="Manage Events" />
        </>
    )
}

export const MusicAndSound = () => {
    return (
        <>
            <ServicesCheckout title={services_painting[5].desc} desc={services_painting[5].checkout_desc} img={services_painting[5].img} category="Manage Events" />
        </>
    )
}




