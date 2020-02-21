// export function characteristicLoad() {
//   const performerMass = document.getElementById('performer-mass').value;
//   const apparatusMass = document.getElementById('apparatus-mass').value;
//   const totalMass = performerMass + apparatusMass;
  
//   const dynamicFactor = document.getElementById('dynamic-factor').value;

//   let result = document.getElementById('result');

//   let characteristicLoad = totalMass * dynamicFactor * 6;
//   result.value = characteristicLoad;
// }


// Stretch Goal
// add staticLoad characteristicLoad = totalMass * 10 whichever is greater

export function characteristicLoad() {
  const performerMass = document.getElementById('performer-mass').value;
  const apparatusMass = document.getElementById('apparatus-mass').value;
  const totalMass = performerMass + apparatusMass;
  
  const dynamicFactor = document.getElementById('dynamic-factor').value;

  let result = document.getElementById('result');

  let characteristicLoad = totalMass * dynamicFactor * 6;
  result.value = characteristicLoad;
}

