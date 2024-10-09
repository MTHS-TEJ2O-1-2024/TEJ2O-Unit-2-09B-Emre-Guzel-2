/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Emre Guzel
 * Created on: Oct 9 2024
 * This program alows yu play rock paper sisors 
*/

//seting up the verible
let socre = 0
let ramdomNumber: number = 0

ramdomNumber = randint(0, 2)
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake,function(){
    if (ramdomNumber == 0) {
        basic.clearScreen()
        basic.showIcon(IconNames.Square)
        pause(5000)        
    }
    if(ramdomNumber ==1){
        basic.showIcon(IconNames.Happy)
        pause(5000)
        basic.showIcon(IconNames.Diamond)
    }

})
   input.onButtonPressed(Button.A,function(){      
 
})




