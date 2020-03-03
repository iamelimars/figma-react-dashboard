import React from 'react'
import styled from 'styled-components'
import { useThemeContext } from '../../context/themeContext'


const Switch = styled.div`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    width: ${({ theme }) => theme.switchWidth};
    height: ${({ theme }) => theme.switchHeight};
    border-radius: 50em;
    padding: ${({ theme }) => theme.switchPadding} 0;

    .switch__input, .switch__label {
        position: absolute;
        left: 0;
        top: 0;
    }
    .switch__input {
        margin: 0;
        padding: 0;
        opacity: 0;
        height: 0;
        width: 0;
        pointer-events: none;

        &:checked + .switch__label {
            background-color: ${({ theme }) => theme.colorWhite};
        }

        &:checked + .switch__label + .switch__marker {
            left: calc(100% - ${({ theme }) => theme.switchHeight} + ${({ theme }) => theme.switchPadding});
        }

        &:focus + .switch__label,
        &:active + .switch__label {
            box-shadow: 0 0 0 3px alpha(${({ theme }) => theme.primary}, 0.2);
        }
    }
    .switch__label {
        width: 100%;
        height: 100%;
        color: transparent;
        user-select: none;
        background-color: ${({ theme }) => theme.textColor};
        border-radius: inherit;
        z-index: 1;
        transition: background ${({ theme }) => theme.switchAnimationDuration};
    }

    .switch__marker {
        position: relative;
        background-color: ${({ theme }) => theme.primary};
        width: calc(${({ theme }) => theme.switchHeight} - ${({ theme }) => theme.switchPadding} * 2);
        height: calc(${({ theme }) => theme.switchHeight} - ${({ theme }) => theme.switchPadding} * 2);
        border-radius: 50%;
        z-index: 2;
        pointer-events: none;
        box-shadow: 0 1px 1px hsla(0, 0%, 0%, 0.25);
        left: ${({ theme }) => theme.switchPadding};
        transition: left ${({ theme }) => theme.switchAnimationDuration};
        will-change: left;
    }
`

const ToggleSwitch = () => {
    const { toggleTheme } = useThemeContext()


    return (
        <>
            <Switch>
                <input className="switch__input" type="checkbox" id="switchCheckbox1" onClick={toggleTheme} />
                <label aria-hidden="true" className="switch__label" htmlFor="switchCheckbox1">On</label>
                <div aria-hidden="true" className="switch__marker"></div>
            </Switch>
        </>
    )
}

export default ToggleSwitch


// #804AD8
// #624BD9