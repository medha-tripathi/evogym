import Logo from "@/assets/Logo.png"

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="mx-auto justify-center w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="logo" />
                    <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatum tenetur expedita hic beatae dicta similique, laboriosam delectus dolores voluptatibus, , expedita? Mollitia?
                    </p>
                    <p>
                        Evogym All Rights Reserved.
                    </p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Lorem, ipsum dolor.</p>
                    <p className="my-5">Nihil voluptatum tenetur</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">random.mail@evogym.in</p>
                    <p className="my-5">+91 456 345 023</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer