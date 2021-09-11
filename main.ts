basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
    } else if (input.soundLevel() >　150) {
        basic.showLeds(`
            . # . # .
            # # # . #
            # . # # #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        if (input.buttonIsPressed(Button.B)) {
            basic.showNumber(input.soundLevel())
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                . # . . .
                `)
        }
    } else {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
