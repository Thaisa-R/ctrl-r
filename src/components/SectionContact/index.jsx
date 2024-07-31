import React from "react";

import * as S from "./styles";

export default function SectionContact() {
    return (

        <S.Section id="contact">
            <S.H1>Contato</S.H1>
            <S.Container>
                <h2>Formulário</h2>
                <form action="/pagina-processa-dados-do-form" method="post">
                    <S.Form>
                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" />
                    </S.Form>
                    <S.Form>
                        <label for="tel">Telefone:</label>
                        <input type="telefone" id="tel" />
                    </S.Form>
                    <S.Form>
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" />
                    </S.Form>
                    <S.Form>
                        <label for="msg">Mensagem:</label>
                        <textarea id="msg"></textarea>
                    </S.Form>
                    <S.Form class="button">
                        <button type="submit">Enviar</button>
                    </S.Form>
                </form>
            </S.Container>
        </S.Section>
    )
}