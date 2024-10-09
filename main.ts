/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Emre Guzel
 * Created on: Oct 9 2024
 * This program alows yu play rock paper sisors 
*/

//seting up the verible
let socre = 0
let ramdomNumber: number = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake,function(){
    ramdomNumber=randint(0,1)
    basic.clearScreen()
    
    
})





