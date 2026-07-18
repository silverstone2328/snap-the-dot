input.onButtonPressed(Button.A, function () {
    if (sprite_1.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
input.onButtonPressed(Button.B, function () {
    if (sprite_2.get(LedSpriteProperty.X) == 0) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
let sprite_2: game.LedSprite = null
let sprite_1: game.LedSprite = null
sprite_1 = game.createSprite(2, 2)
sprite_2 = game.createSprite(2, 2)
basic.forever(function () {
    sprite_1.move(1)
    sprite_1.ifOnEdgeBounce()
    basic.pause(100)
})
basic.forever(function () {
    sprite_2.change(LedSpriteProperty.Y, 1)
    sprite_2.ifOnEdgeBounce()
    basic.pause(100)
})
