import React, { Component } from 'react';

class Articles extends Component{
    render(){
        return (
            <div>
                <article>
                    <div >
                       <h2 >This Tangy Baked Lemon Tart is The Tastiest Way to Ring in Spring</h2>
                        <p>I say, when life gives you lemons, use ’em! I’ve always loved lemons and gravitate to all lemon-flavoured treats, from lemon meringue pie to lemon bars. My love for lemons continues with this semi-sweet tart that is nothing short of delicious. With its bright yellow filling, it’s also a statement piece, making it the perfect dessert to serve at an Easter meal or any other special occasion. You can eat it on its own, but it also pairs nicely with fresh raspberries and a dollop of whipped cream.</p>
                        <img className="imgArt" src="./image/tart.jpg" alt="lemon tart"/>
                    </div>
                </article>
                <article>
                    <div >
                        <h2 >Middle Eastern Sumac Chicken with Date Syrup, Lemon and Pecans</h2>
                        <p>We love easy Middle Eastern dishes that look like you put a lot of effort into them when you didn’t, and this is one of them. If you’ve never cooked with sumac before, this is the perfect recipe to start. You can find it at most conventional grocery stores in the international aisle. It has a natural tangy, lemon flavour with a vibrant purple colour, that pairs really well with other citrus fruits, like roasted lemons. Roasting a lemon only amplifies the fruit’s juiciness and sweetness, transforming it into a little yellow flavour bomb. Topping the chicken with fresh herbs brightens the dish, while the date syrup rounds out the meal, and the toasty pecans add crunch. You’ll be greeted with a delectable combination of textures and flavours with every bite. Not to mention, this dinner staple is easy on the eyes, making it a reliable repeat when entertaining.</p>
                        <img className="imgArt" src="./image/plate.jpg" alt="eastern dishes"/>
                    </div>
                </article>
                <article>
                    <div >
                        <h2 >How to Make Vietnamese Bun Cha, The Rice Noodle Salad Your Lunch Bowl is Craving</h2>
                        <p>This vibrant rice noodle salad boldly features Vietnamese-spiced pork patties, thin rice noodles, fresh vegetables and herbs, spring rolls and a salty-sweet sauce. It’s the lunch bowl you’ll be returning to again and again. The best part? You can meal prep all the components on the weekend, pack them up and enjoy throughout the week. You’ll be the envy of your co-workers!</p>
                        <img className="imgArt" src="./image/ramen.jpg" alt="vietnamese-bun-cha"/>
                    </div>
                </article>
            </div>
        )}
}

export default Articles;


