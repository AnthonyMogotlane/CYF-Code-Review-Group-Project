function splitObject(toSeparate = {}) {
  return Object.entries(toSeparate).map(([key, value]) => ({ [key]: value }));
}