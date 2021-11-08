let s3 = 0
let s1 = 0
let s5 = 0
let s2 = 0
let s4 = 0
let shake_counter = 0
let dice_1 = 0
let dice2 = 0
let dice_3 = 0
let dice_4 = 0
let dice_5 = 0
// locks dice 3
input.onPinPressed(TouchPin.P0, function () {
    if (s3 == 1) {
        s3 = 0
    } else {
        s3 = 1
    }
    basic.showIcon(IconNames.SmallDiamond)
})
// locks dice 1
input.onButtonPressed(Button.A, function () {
    if (s1 == 1) {
        s1 = 0
    } else {
        s1 = 1
    }
    basic.showIcon(IconNames.SmallDiamond)
})
// locks dice 5
input.onPinPressed(TouchPin.P2, function () {
    if (s5 == 1) {
        s5 = 0
    } else {
        s5 = 1
    }
    basic.showIcon(IconNames.SmallDiamond)
})
// locks dice 2
input.onButtonPressed(Button.B, function () {
    if (s2 == 1) {
        s2 = 0
    } else {
        s2 = 1
    }
    basic.showIcon(IconNames.SmallDiamond)
})
// locks dice 4
input.onPinPressed(TouchPin.P1, function () {
    if (s4 == 1) {
        s4 = 0
    } else {
        s4 = 1
    }
    basic.showIcon(IconNames.SmallDiamond)
})
// when shaken 3 times, the dice will roll if they have not been toggled off
input.onGesture(Gesture.Shake, function () {
    shake_counter += 1
    // only changes if variable is not locked
    if (s1 == 0) {
        dice_1 = randint(1, 6)
    }
    // only changes if variable is not locked
    if (s2 == 0) {
        dice2 = randint(1, 6)
    }
    // only changes if variable is not locked
    if (s3 == 0) {
        dice_3 = randint(1, 6)
    }
    // only changes if variable is not locked
    if (s4 == 0) {
        dice_4 = randint(1, 6)
    }
    // only changes if variable is not locked
    if (s5 == 0) {
        dice_5 = randint(1, 6)
    }
})
// this block should do nothing to the program. it is meant to hold the ideas of what the game needs to have
// - 5 different dice
// - a player wins when they get all 5 of the dice to show the same number
// - each player's turn consists of up to 3 die rolls
// - a player wins when they get all of the dice to show the same number
// - players may choose what dice they roll, and what ones they don't
// - a display to show what the dice values are
// - 
basic.forever(function () {
    if (false) {
        basic.showString("goals")
    }
})
// this block should do nothing to the program. it is meant to hold the instructions on how to play.
// each turn a player will:
// - roll the dice 3 times
// - save dice (not roll them)
// - attempt to get all the dice to show the same number
// 
// A player wins when they make all of the  dice show the same number
// 
// - To roll, a player must shake the micro:bit.
// - to toggle weather or not a dice will be rolled, the player must press the corresponding button/input
// - to end their turn, a player should have all of the dice saved or run out of rolls
// - 
basic.forever(function () {
    if (false) {
        basic.showString("instructions")
    }
})
// repeatedly displays the dice values forever
basic.forever(function () {
    // displays the value of dice 1
    basic.showString("D1")
    basic.showNumber(dice_1)
    basic.clearScreen()
    // displays the value of dice 2
    basic.showString("D2")
    basic.showNumber(dice2)
    basic.clearScreen()
    // displays the value of dice 3
    basic.showString("D3")
    basic.showNumber(dice_3)
    basic.clearScreen()
    // displays the value of dice 4
    basic.showString("D4")
    basic.showNumber(dice_4)
    basic.clearScreen()
    // displays the value of dice 5
    basic.showString("D5")
    basic.showNumber(dice_5)
    basic.clearScreen()
    // this code tells the player when they win, then resets the game
    if (dice_1 == dice2 && dice2 == dice_3 && (dice_3 == dice_4 && dice_4 == dice_5) && dice_1 != 0) {
        basic.showString("You Win! :)")
        // resets dice
        dice_1 = 0
        dice2 = 0
        dice_3 = 0
        dice_4 = 0
        dice_5 = 0
        // resets stored variables
        s1 = 0
        s2 = 0
        s3 = 0
        s4 = 0
        s5 = 0
        shake_counter = 0
    } else {
        // ends turn
        if (shake_counter >= 3 || s1 + s2 + (s3 + s4 + s5) == 5) {
            basic.showString("Turn over")
        }
    }
})
