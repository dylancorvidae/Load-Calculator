const performerMass = document.getElementById('performer-mass');
const apparatusMass = document.getElementById('apparatus-mass');
const dynamicFactor = document.getElementById('dynamic-factor');
const totalMass = performerMass + apparatusMass;

const calculatedLoad = document.getElementById('calculated-load')

const characteristicLoad = totalMass * dynamicFactor * 6

