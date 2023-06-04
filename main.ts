basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
