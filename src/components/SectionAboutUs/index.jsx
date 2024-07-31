import React from "react";

import * as S from "./styles";

import ImgBalloon from "..//../assets/img-balloon.jpeg";

export default function SectionAboutUs() {
    return (
        <S.Section id="about">
            <S.ContainerPrimary>
                <S.H1>
                    <h1>Quem <span style={{ color: "#F37135" }}>Somos</span></h1>
                </S.H1>
                <S.SectionParagraphs>
                    <p>Somos uma equipe criativa que atua no mercado, comunicando com fotos, eventos, sites, instagram, facebook, linkedin..</p>
                    <p>Planejamos e executamos o seu marketing de ponta a ponta, estaremos com você durante todos os passos do seu projeto, para garantir solução que tragam resultados. </p>
                    <p> A CTRL-R Comunicação é uma empresa de marketing e assessoria de comunicação, que irá ajudar sua empresa a decolar online; Juntos alcaçaremos mais clientes para aumentar sua produção.</p>
                </S.SectionParagraphs>
                <S.H2>
                        <h2>
                            <span style={{ color: "#533D6B" }}> Missão, </span>
                            <span style={{ color: "#F37135" }}> Visão</span>
                            <span style={{ color: "white" }}> & Valores</span>
                        </h2>
                    </S.H2>
                <S.Container>
                    <S.Img src={ImgBalloon} alt="Imagem de balões de mensagem" />
                </S.Container>
            </S.ContainerPrimary>
        </S.Section>
    )
}
