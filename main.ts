let s1 = 0
let dice_1 = 0
let dice2 = 0
let dice_3 = 0
let dice_4 = 0
let dice_5 = 0
input.onPinPressed(TouchPin.P0, function () {
    s1 = dice_1
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.A, function () {
    s1 = dice_1
    basic.showIcon(IconNames.Yes)
})
input.onPinPressed(TouchPin.P2, function () {
    s1 = dice_1
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    s1 = dice_1
})
input.onPinPressed(TouchPin.P1, function () {
    s1 = dice_1
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.Shake, function () {
    dice_1 = randint(1, 6)
    dice2 = randint(1, 6)
    dice_3 = randint(1, 6)
    dice_4 = randint(1, 6)
    dice_5 = randint(1, 6)
})
basic.forever(function () {
    basic.showString("D1")
    basic.showNumber(dice_1)
    basic.showString("D2")
    basic.showNumber(dice2)
    basic.showString("D3")
    basic.showNumber(dice_3)
    basic.showString("D4")
    basic.showNumber(dice_4)
    basic.showString("D5")
    basic.showNumber(dice_5)
})
