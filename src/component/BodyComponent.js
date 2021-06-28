import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import BannerComponent from './BannerComponent'
import ItemComponent from './ItemComponent'
import FooterComponent from './FooterComponent'

export default class BodyComponent extends Component {
    render() {
        return (
            <div>
                <HeaderComponent></HeaderComponent>
                <BannerComponent></BannerComponent>
                <ItemComponent></ItemComponent>
                <FooterComponent></FooterComponent>
            </div>
        )
    }
}
