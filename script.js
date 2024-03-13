let tries = 4
let password = '777'
let quest = prompt("password")




for(i of quest){
  if(quest !== password && tries >= 1){
    tries = tries - 1
    prompt(`у вас осталось ${tries} попыток.
    Попроьуйте снова.`
    )
  }else if(tries <= 0){
    alert(`У вас не осталось попыток`)
    break
  }else if(quest === password){
    alert(`добро пожаловать`)
    break
  }
}