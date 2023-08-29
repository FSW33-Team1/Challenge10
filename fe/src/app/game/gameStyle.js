import css from 'styled-jsx/css';

export default css.game`
.img-clickable:hover{
    transition: .3s;
    width: 120px;
}

.img{
    position: absolute;
}

.header{
    display: grid;
    position: relative;
    /* background-color: red; */
    width: 100vw;
    height: 10vh;
    grid-template-columns: 7.5% 7.5% 85%;
    overflow: hidden;
}

.game-container{
    display: grid;
    justify-items: center;
    grid-template-columns: 33.3% 33.3% 33.3%;
    margin-top: 50px;
    padding-bottom: 250px;
}

.btn-back-container{
    text-align: center;
    margin: auto;
    padding:0;
}

.btn-back{
    color: #634705;
    font-size: 50px;
    background-color: Transparent;
    border: none;
}

.logo{
    width: 50px;
    margin-top: 2.5vh;
    justify-self: center;
}

.hdr-title{
    font-size: 30px;
    text-align: center;
    padding-top: 15px;
    color: orange;
    justify-self: start;
    font-weight: bold;
    /* overflow: hidden; */
}

.player{
    display: grid;
    /* row-gap: 40px; */
    justify-items: center;
    margin-left: 15vw;
    /* position: relative; */
}

.text-player{
    font-size: 3vw;
    font-weight: bold;
}

.player-rock{
    margin-top: 15vh;
}

.player-paper{
    margin-top: 30vh;
}

.player-scissor{
    margin-top: 55vh;
}

.mid-utilities{
    display: grid;
    grid-template-rows: 95% 5%;
}

.text-vs{
    font-size: 100px;
    color: red;
    margin-top: 200px;
    font-weight: bold;
    justify-self:center;
}

.btn-refresh{
    justify-self: center;
    margin-top: 65vh;
}

.com{
    display: grid;
    row-gap: 40px;
    justify-items: center;
    margin-right: 15vw;
    position: relative;
}

.com-rock{
    margin-top: 15vh;
}

.com-paper{
    margin-top: 30vh;
}

.com-scissor{
    margin-top: 55vh;
}

.text-com{
    font-size: 3vw;
    font-weight: bold;
}

.selected{
    width: 120px;
    background-color: rgb(255,255,255, .5);
    padding: 5px;
    border-radius: 10px;
}

.text-win{
    content: 'YOU WIN';
    font-size: 100px;
    background-color: green;
    margin-top: 200px;
    font-weight: bold;
    justify-self:center;
    color: white;
    border-radius: 25px;
    transform: rotate(-30deg);
    font-size: 5vw;
    padding: 20px;
}

.text-lose{
    content: 'YOU LOSE';
    font-size: 100px;
    background-color: RED;
    margin-top: 200px;
    font-weight: bold;
    justify-self:center;
    color: white;
    border-radius: 25px;
    transform: rotate(-30deg);
    font-size: 5vw;
    padding: 20px;
}

.text-draw{
    content: 'DRAW';
    font-size: 100px;
    background-color: orange;
    margin-top: 200px;
    font-weight: bold;
    justify-self:center;
    color: white;
    border-radius: 25px;
    transform: rotate(-30deg);
    font-size: 5vw;
    padding: 20px;
}


`;