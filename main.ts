input.onButtonPressed(Button.A, function () {
    reading = input.lightLevel()
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.showString("L")
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(reading)
    basic.pause(500)
    basic.showString("L")
})
let reading = 0
basic.showString("L")
reading = input.lightLevel()
basic.pause(100)
