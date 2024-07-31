import React from "react";

import * as S from "./styles"

import LogoCtrllComunicação from "../../assets/img-logo-b.roxo.png";

import ItemMenu from "./itemMenu";

import ImgInsta from "../../assets/img-insta.jpg";

import ImgIn from "../../assets/img-in.png";

import ImgWath from "../../assets/img-wath...png";



export default function Header() {

    return (
        <S.Header>
            <S.Container>
                <S.ContainerItens>
                    <div>
                        <S.Img src={LogoCtrllComunicação} alt="Logotipo da Empresa CTRL-L Comunicação" />
                    </div>

                    <S.Ul>
                        <S.A href="#about">
                            <S.Li>
                            <ItemMenu name="Quem Somos" />
                            </S.Li>
                        </S.A>

                        <S.A href="#solutions">
                            <S.Li>
                            <ItemMenu name="Nossas Soluções" />
                            </S.Li>
                        </S.A>

                        <S.A href="#clients">
                        <S.Li>
                            <ItemMenu name="Nossos Clientes" />
                        </S.Li>
                        </S.A>

                        <S.A href="#portfolio">
                        <S.Li>
                            <ItemMenu name= "Portfólio" />
                        </S.Li>
                        </S.A>

                        <S.A href="#contact">
                        <S.Li>
                            <ItemMenu name= "Contato" />
                        </S.Li>
                        </S.A>
                    </S.Ul>

            <S.UlIcones>
                    <S.Li>
                        <a href="https://www.instagram.com/ctrlrcomunicacao/">
                            <S.ImgTwo src={ImgInsta} alt="Imagem Icone Instagram" />
                        </a>
                    </S.Li>
                        
                    <S.Li>
                        <a href=" https://www.linkedin.com/">
                            <S.ImgTwo src={ImgIn} alt="Imagem Icone LinkedIn" />
                        </a>
                    </S.Li>
                       
                    <S.Li>
                        <a href="https://api.whatsapp.com/send/?phone=5521969945823&text&type=phone_number&app_absent=0">
                            <S.ImgTwo src={ImgWath} alt="Imagem Icone WathsAap" />
                        </a>
                    </S.Li>
            </S.UlIcones>
                
                </S.ContainerItens>
            </S.Container>
        </S.Header>
    );
}