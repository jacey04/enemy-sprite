input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    player.change(LedSpriteProperty.X, 1)
})
let player: game.LedSprite = null
basic.showIcon(IconNames.Heart)
player = game.createSprite(0, 0)
let enemy = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (player.isTouching(enemy)) {
        basic.showLeds(`
            # # # # #
            . # # # .
            . # # # .
            . . # . .
            . # # # .
            `)
        enemy.delete()
        enemy = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
