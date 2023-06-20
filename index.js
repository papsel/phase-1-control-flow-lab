function scuberGreetingForFeet(distance){
  if (distance<=400){
    return 'This one is on me!';
  } else if(distance > 2000 && distance <= 2500){
    return 'I will gladly take your thirty bucks.';
  }else if (distance>2500){
    return 'No one can do';
  }
}

function ternaryCheckCity(){
  return city === 'NYC'? 'ok sounds goog': 'No go.'
}

function switchOnCharmFromTip(tip){
  switch (tip){
  case 'generous':
    return 'Thank you so much.';
    case 'not generous.':
      return 'Thank you.';
      default:
        return 'Bye.'
}
}
