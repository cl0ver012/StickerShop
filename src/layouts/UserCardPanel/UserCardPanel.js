import React from 'react'
import './UserCardPanel.scss'
import Panel from '../../components/Panel/Panel'
import CardItems from '../../components/CardItems/CardItems'
import Button from "../../components/Button";
const UserCardPanel = () => {
  return (
    <Panel title="Your Basket"
           badge="4"
           icon="cart-outline"
           iconSize = "large"
    >
       <CardItems />
       <Footer/>
    </Panel>
  )
}


const Footer = (props) => {
    return (
        <div className={"user-card-panel-footer"}>
            <div className="final-price">
                <b>Final Price</b>
                <span> $ {3000}</span>
            </div>
            <div>
                <button className="order-now"> Order Now </button>
            </div>
        </div>
    )
}

export default UserCardPanel
