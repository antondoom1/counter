import {AppRootStateType} from '../state/store'
//
// export const loadState = () => {
//   try {
//     const startValueCounterV1AsString = localStorage.getItem('start value of counter v1')
//     const maxValueCounterV1AsString = localStorage.getItem('max value of counter v1')
//     const startValueCounterV2AsString = localStorage.getItem('start value of counter v2')
//     const maxValueCounterV2AsString = localStorage.getItem('max value of counter v2')
//     if (startValueCounterV1AsString === null) {
//       return undefined
//     } return JSON.parse(startValueCounterV1AsString)
//             // JSON.parse(maxValueCounterV1AsString)
//             // JSON.parse(startValueCounterV2AsString)
//             // JSON.parse(maxValueCounterV2AsString)
//   } catch (err) {
//     return undefined
//   }
// }
//
// export const saveState = (state: AppRootStateType) => {
//   try {
//     const startValueCounterV1AsString = JSON.stringify(state.counters[0].minValue)
//     // const maxValueCounterV1AsString = JSON.stringify(state.counters[0].maxValue)
//     // const startValueCounterV2AsString = JSON.stringify(state.counters[1].minValue)
//     // const maxValueCounterV2AsString = JSON.stringify(state.counters[1].maxValue)
//
//     localStorage.setItem('start value of counter v1', startValueCounterV1AsString)
//     // localStorage.setItem('max value of counter v1', maxValueCounterV1AsString)
//     // localStorage.setItem('start value of counter v2', startValueCounterV2AsString)
//     // localStorage.setItem('max value of counter v2', maxValueCounterV2AsString)
//   } catch {
//     // ignore write errors
//   }
// }