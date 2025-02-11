makerbit.onIrButton(IrButton.Right, IrButtonAction.Released, function () {
    OLED.writeNum(4)
    pins.analogWritePin(AnalogPin.P0, 255)
    pins.analogWritePin(AnalogPin.P1, 255)
    pins.analogWritePin(AnalogPin.P6, 0)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Released, function () {
    OLED.writeNum(3)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P6, 1023)
})
makerbit.onIrButton(IrButton.Number_5, IrButtonAction.Released, function () {
    OLED.writeNum(7)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 255)
    pins.analogWritePin(AnalogPin.P6, 255)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Released, function () {
    OLED.writeNum(1)
    pins.analogWritePin(AnalogPin.P0, 255)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P6, 0)
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Released, function () {
    OLED.writeNum(5)
    pins.analogWritePin(AnalogPin.P0, 255)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P6, 252)
})
makerbit.onIrButton(IrButton.Number_6, IrButtonAction.Released, function () {
    OLED.writeNum(8)
    pins.analogWritePin(AnalogPin.P0, 255)
    pins.analogWritePin(AnalogPin.P1, 255)
    pins.analogWritePin(AnalogPin.P6, 255)
})
makerbit.onIrButton(IrButton.Number_4, IrButtonAction.Released, function () {
    OLED.writeNum(6)
    pins.analogWritePin(AnalogPin.P0, 188)
    pins.analogWritePin(AnalogPin.P1, 238)
    pins.analogWritePin(AnalogPin.P6, 0)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Released, function () {
    OLED.writeNum(2)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 255)
    pins.analogWritePin(AnalogPin.P6, 0)
})
makerbit.connectIrReceiver(DigitalPin.P8, IrProtocol.Keyestudio)
OLED.init(128, 64)
pins.analogWritePin(AnalogPin.P0, 0)
pins.analogWritePin(AnalogPin.P1, 0)
pins.analogWritePin(AnalogPin.P6, 0)
