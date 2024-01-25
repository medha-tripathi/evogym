import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit";
import ActionButtion from "@/shared/ActionButtion";
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

const container={
  hidden:{},
  visible:{
    transition:{
      staggerChildren:0.2
    }
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        <motion.div className="md:my-5 md:w-3/5" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay:0.2,duration: 2 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm"> Reiciendis, illo doloribus, tempore asperiores dolorem eveniet, quis error mollitia sint necessitatibus quos eligendi provident distinctio? Ad veniam temporibus excepturi eligendi commodi.</p>
        </motion.div>
        <motion.div className="md:flex items-center justify-between gap-8 mt-5"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true,amount:0.5}}
        >
          {benefits.map((benefit) => (<Benefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
          />))}
         </motion.div>
         <div>
          <img className="mx-auto" src={BenefitPageGraphic} alt="benefit-page-graphic" />
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z[-1] md:before:content-abstractwaves">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay:0.2,duration: 2 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
                  <HText>MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            <div>
              <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi enim velit suscipit assumenda magnam ex tempore sint placeat et ratione est mollitia, labore quod aspernatur odit. Praesentium, voluptatibus quisquam.</p>
              <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magni quia laborum nobis nisi ducimus, consequuntur sapiente debitis aliquid saepe?</p>
            </div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-20 before:z-[-1] md:before:content-sparkles">
                <ActionButtion setSelectedPage={setSelectedPage}>JOIN NOW</ActionButtion>
              </div>
            </div>
          </div>
         </div>
      </motion.div>
    </section>
  )
}

export default Benefits