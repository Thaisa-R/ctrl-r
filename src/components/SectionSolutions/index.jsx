import React from "react";

import ImgComInt from "../../assets/img-com-int.png";

import ImgDesign from "../../assets/img-design-grafico.webp";

import ImgBranding from "../../assets/img-branding.png";

import ImgGamif from "../../assets/img-gamificacao.png";

import ImgEvent from "../../assets/img-evento-corporativo.webp";

import * as S from "./styles";

export default function SectionSolutions() {
    return (
        <S.Section id="solutions">
              <S.H1>
                    <h1>Nossas <span style={{ color: "#F37135" }}>Soluções</span></h1>
                </S.H1>
            <S.ContainerServices>
                <S.Container>
                    <S.Img src={ImgComInt} alt="Imagem de Comunicação interna" />
                    <S.H2>Comunicação Interna</S.H2>
                    <S.P>Todas as ferramentas de endomarketing para: gerar engajamento, potencializar resultados e alavancar transformações. Comunicação em todos os formatos: Campanhas, ativações, ações, newsletters.</S.P>
                </S.Container>

                <S.Container>
                    <S.Img src={ImgDesign} alt="Imagem de Designer Gráfico" />
                    <S.H2>Design Gráfico</S.H2>
                    <S.P>A força por trás de cada projeto que desenvolvemos. Soluções visuais incríveis para materiais impressos e digitais. Banners, projetos especiais, painéis, kits, brindes, mobiles, adesivação etc.</S.P>
                </S.Container>

                <S.Container>
                    <S.Img src={ImgBranding} alt="Imagem de Branding Interno"/>
                    <S.H2>Branding Interno</S.H2>
                    <S.P>Gestão cuidadosa de marca para fortalecer sua cultura junto ao seu público interno. Ambientação, sinalização, padronização da comunicação.</S.P>
                </S.Container>

                <S.Container>
                    <S.Img src={ImgGamif} alt="Imagem de Gamificação"/>
                    <S.H2>Gamificação</S.H2>
                    <S.P>É experiência de aprendizado concreto através do lúdico. Jogos para treinamento corporativo. Você dá o tema. A gente transforma em jogo.</S.P>
                </S.Container>

                <S.Container>
                    <S.Img src={ImgEvent} alt="Imagem de Eventos Corporativos"/>
                    <S.H2>Eventos Corporativos</S.H2>
                    <S.P>Planejamento, roteirização, gerenciamento e produção de eventos para promover experiências que o seu público-alvo não vai esquecer. De pequenos brunches a grandes festas.</S.P>
                </S.Container>
</S.ContainerServices>
</S.Section>
)
}
