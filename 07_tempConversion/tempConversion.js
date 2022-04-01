const ftoc = function(faren) {

  return (Math.round(((faren - 32)/1.8)*10)/10)
};

const ctof = function(cel) {

  return (Math.round(((cel*1.8)+32)*10)/10)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
