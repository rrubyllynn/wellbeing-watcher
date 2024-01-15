let water = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.showNumber(water)
})
input.onGesture(Gesture.Shake, function () {
    water += 1
})
