import React from 'react'
// import FormDaftar from '../../../../components/molecules/formDaftar/FormDaftar'
import { NavbarLanding, HeroLanding, FooterLanding } from '../../../organisms'
import { dataHeroSatu, dataHeroDua } from './HeroData'

const PsbLanding = () => {
    return (
        <>
            <NavbarLanding />
            <HeroLanding {...dataHeroSatu} />
            <HeroLanding {...dataHeroDua} />
            <FooterLanding />
        </>
    )
}

export default PsbLanding
