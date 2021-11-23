import React from "react";
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

import { FooterContainer, SocialMediaLinks } from "./Footer.styles";

const Footer: React.FC = () => {
    return (
        <FooterContainer>

            <p>© 2021 Real Estate, Inc.</p>
            <SocialMediaLinks>
                <AiOutlineFacebook />
                <AiOutlineTwitter />
                <AiOutlineInstagram />
            </SocialMediaLinks>
        </FooterContainer>
    )
}

export default Footer;
