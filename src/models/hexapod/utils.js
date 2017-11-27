function mapValue(value, min, max, mapMin, mapMax) {
  const k = (value - min) / (max - min);
  return (mapMax - mapMin) * k + mapMin;
}

module.exports = {
  mapValue
};