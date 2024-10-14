"""
Created by: Emre Guzel
Created on: Oct 10 2024
This module is a Micro:bit MicroPython program alows you play rock paper siso
"""

from microbit import *
import random

# Setting up the verivle and setting the screen.
random_Number = -1
score = 0
display.clear()
display.show(Image.HAPPY)
# Define a custom image for scissors
scissors_image = Image("00900:" "09090:" "00900:" "09090:" "90009")

# Setting up the ramdom number and adding the ions in the sake functoin
while True:
    # Shake functoin
    if accelerometer.was_gesture("shake"):
        # Genrates ramdom number from 0 to 2
        random_Number = random.randint(0, 2)

        # Rock
        if random_Number == 0:
            display.clear()
            display.show(Image.SQUARE_SMALL)
            sleep(5000)
            display.show(Image.HAPPY)

        # Papper
        if random_Number == 1:
            display.show(Image.SQUARE)
            sleep(5000)
            display.show(Image.HAPPY)

        # Scissors
        if random_Number == 2:
            display.show(scissors_image)
            sleep(5000)
            display.show(Image.HAPPY)

    # Setting score
    if button_a.was_pressed():
        display.show(Image.YES)
        score += 1

    if button_b.was_pressed():
        display.scroll(" Score is: " + str(score))
