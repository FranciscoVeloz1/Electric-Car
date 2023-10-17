import { Sensor, Led } from 'johnny-five'
import { CarEntity } from '../entities/state.entity'

// Parking mode
export const parkingMode = (
  state: CarEntity,
  pedal: Sensor,
  parkingLed: Led,
  forwardLed: Led,
  reverseLed: Led
) => {
  if (!state.carState.isOn) return
  if (pedal.scaleTo(0, 255) > 40) return
  if (state.carState.mode === 'parking') return

  parkingLed.on()
  forwardLed.off()
  reverseLed.off()
  state.carState.mode = 'parking'
}

// Forward mode
export const forwardMode = (
  state: CarEntity,
  pedal: Sensor,
  parkingLed: Led,
  forwardLed: Led,
  reverseLed: Led
) => {
  if (!state.carState.isOn) return
  if (pedal.scaleTo(0, 255) > 40) return
  if (state.carState.mode === 'forward') return

  forwardLed.on()
  parkingLed.off()
  reverseLed.off()
  state.carState.mode = 'forward'
}

// Reverse Mode
export const reverseMode = (
  state: CarEntity,
  pedal: Sensor,
  parkingLed: Led,
  forwardLed: Led,
  reverseLed: Led
) => {
  if (!state.carState.isOn) return
  if (pedal.scaleTo(0, 255) > 40) return
  if (state.carState.mode === 'reverse') return

  reverseLed.on()
  parkingLed.off()
  forwardLed.off()
  state.carState.mode = 'reverse'
}
