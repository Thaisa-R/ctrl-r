import React from "react";

import ImageCel from "../../assets/img-cel.png";

import * as S from "./styles";


export default function SectionHero() {
    return (
        <S.Section>
            <S.Container>
                <divLeft>
                    <S.ImageLeft src={ImageCel} alt="Imagem de celular" />
                </divLeft>
                <S.DivRight>
                    <S.H1>Tenha um parceiro criativo para atender as necessidades da sua empresa, seja qual for o formato.</S.H1>
                    <S.P>CTRL-R Comunicação, um parceiro para seu negócio!</S.P>
                </S.DivRight>                
            </S.Container>
        </S.Section>
    )
}

