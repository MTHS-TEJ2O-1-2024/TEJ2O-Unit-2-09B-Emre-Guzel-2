/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Emre Guzel
 * Created on: Oct 9 2024
 * This program alows yu play rock paper sisors 
*/
// Setting up the variable
let score: number = 0
// Setting the screen 
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    // Picking a ramdom number 
    let ramdomNumber: number = 0
    ramdomNumber = -1
    ramdomNumber = randint(2, 0)
    // Making the icons for random number 
    // Rock
    if (ramdomNumber == 0) {
        basic.clearScreen()
        basic.showIcon(IconNames.SmallSquare)
        pause(5000)
        basic.showIcon(IconNames.Happy)
    }
    // Paper
    if (ramdomNumber == 1) {
        basic.showIcon(IconNames.Square)
        pause(5000)
        basic.showIcon(IconNames.Happy)
    }
    // Scissors
    if (ramdomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
        pause(5000)
        basic.showIcon(IconNames.Happy)
    }

})
// Save the scroe
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    score += 1
    pause(5000)
    basic.showIcon(IconNames.Happy)
})

// Show score 
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString(" Score:"), + basic.showNumber(score)
    basic.showIcon(IconNames.Happy)
})
