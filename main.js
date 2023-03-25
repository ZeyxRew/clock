const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

function setTime(){
    const time= new Date();

    const seconds = time.getSeconds();
    let secDegree= ((seconds / 60) * 360) + 90;
    secondHand.style.transform=`rotate(${secDegree}deg)`;

    const minutes = time.getMinutes();
    let minDegree=  ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform=`rotate(${minDegree}deg)`;

    const hours = time.getHours();
    let hoDegree= ((hours / 12) * 360) + ((minutes/60)*30) + 90;
    hourHand.style.transform=`rotate(${hoDegree}deg)`;
}


setInterval(setTime, 1000);

setTime();





