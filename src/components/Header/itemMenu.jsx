import ArrowDown from "../../assets/arrow-down.svg";

import * as S from "./styles"

export default function ItemMenu({name}) {
    return (
        <>
           <S.ButtonMenuItem>     
                <span>{name}</span>
                <img src={ArrowDown} alt="ícone para baixo"/>
            </S.ButtonMenuItem>
        </>
    )
};