function findMatching(d, n){  return d.filter(driver => {        return driver.string.toLowerCase() === string.toLowerCase();  });  }function fuzzyMatch(drivers, string){  return drivers.filter(driver => driver.startsWith(string));}function matchName(drivers, string){  return drivers.filter(driver => driver.name === string);}