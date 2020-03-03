import React from 'react'
import styled from 'styled-components'

const AddButton = styled.a`
    background-color: ${({ theme }) => theme.colorGreen};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    position: absolute;
    top: 6rem;
    right: 7rem;
    cursor: pointer;
    transition: all ease-in-out 300ms;

    &:hover {
        /* box-shadow: 10px 10px 8px -8px rgba(117, 194, 130, 0.6); */
    }

`

const AddIcon = styled.span`
    color: #ffffff;
    font-size: 36px;
`


const NewDepositBtn = () => (
    <AddButton>
        <AddIcon className="iconify" data-inline="false" data-icon="mdi-light:plus" ></AddIcon>
    </AddButton>
)


export default NewDepositBtn
