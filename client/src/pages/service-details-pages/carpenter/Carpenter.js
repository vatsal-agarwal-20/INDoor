import { ServicesCheckout } from '../ServicesCheckout'
import { services_carpenter } from '../../../Data/ServicesData'

export const Coding = () => {
    return (
        <>
            <ServicesCheckout title={services_carpenter[0].desc} desc={services_carpenter[0].checkout_desc} img={services_carpenter[0].img} category="Online Instructor" />
        </>
    )
}

export const HealthAndDiet = () => {
    return (
        <>
            <ServicesCheckout title={services_carpenter[1].desc} desc={services_carpenter[1].checkout_desc} img={services_carpenter[1].img} category="Online Instructor" />
        </>
    )
}

export const CookingAndBaking = () => {
    return (
        <>
            <ServicesCheckout title={services_carpenter[2].desc} desc={services_carpenter[2].checkout_desc} img={services_carpenter[2].img} category="Online Instructor" />
        </>
    )
}

export const FitnessAndGym = () => {
    return (
        <>
            <ServicesCheckout title={services_carpenter[3].desc} desc={services_carpenter[3].checkout_desc} img={services_carpenter[3].img} category="Online Instructor" />
        </>
    )
}

export const MusicInstructor = () => {
    return (
        <>
            <ServicesCheckout title={services_carpenter[4].desc} desc={services_carpenter[4].checkout_desc} img={services_carpenter[4].img} category="Online Instructor" />
        </>
    )
}

export const TuitionForKids = () => {
    return (
        <>
            <ServicesCheckout title={services_carpenter[5].desc} desc={services_carpenter[5].checkout_desc} img={services_carpenter[5].img} category="Online Instructor" />
        </>
    )
}

