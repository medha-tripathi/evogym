import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButtion from "@/shared/ActionButtion";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsesrRedBull from "@/assets/SponsorRedBull.png";
import SponserForbes from "@/assets/SponsorForbes.png";
import SponserFortune from "@/assets/SponsorFortune.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    return (
        <section id="home" className="gap-16 bg-gray-50 py-10 md:h-full md:pb-0">
            <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6" onViewportEnter={()=>{setSelectedPage(SelectedPage.Home)}}>
                <div className="z-10 mt-32 md:basis-3/5">
                    <motion.div className="md:-mt-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 2 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z[-1] md:before:content-evolvetext">
                                <img src={HomePageText} alt="hpt" />
                            </div>
                        </div>
                        <p className="mt-8 text-sm md:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatum tenetur expedita hic beatae dicta similique, laboriosam delectus dolores voluptatibus, , expedita? Mollitia?</p>
                    </motion.div>
                    
                    <motion.div className="mt-8 flex items-center gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay:0.2,duration: 2 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}> 
                        <ActionButtion setSelectedPage={setSelectedPage}> Join Now</ActionButtion>
                        <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500" onClick={() => { setSelectedPage(SelectedPage.ContactUs) }} href={`#${SelectedPage.ContactUs}`}>
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                    <img src={HomePageGraphic} alt="hpg" />
                </div>
            </motion.div>
            {isAboveMediumScreens && (<div className="h-[150]px w-full bg-red-200 py-10">
                <div className="mx-auto w-5/6">
                    <div className="flex w-3/5 items-center justify-between gap-8">
                        <img src={SponsesrRedBull} alt="srb" />
                        <img src={SponserForbes} alt="sf" />
                        <img src={SponserFortune} alt="sfo" />
                    </div>
                </div>
            </div>)}
        </section>
    )
}

export default Home