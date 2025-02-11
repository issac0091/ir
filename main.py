pins.analog_write_pin(AnalogPin.P0, 0)
pins.analog_write_pin(AnalogPin.P1, 0)
pins.analog_write_pin(AnalogPin.P2, 0)

def on_forever():
    if makerbit.ir_button() == 0:
        pins.analog_write_pin(AnalogPin.P2, 512)
basic.forever(on_forever)
