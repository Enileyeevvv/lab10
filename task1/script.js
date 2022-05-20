res = prompt()

var readBinaryWatch = function(num) {
  var res = [];
  helper(num, 0, 0, res, 0);
  console.log(res)
  return res;
};

var helper = function (num, hours, minute, res, index) {
  if (num < 0 || index > 10 || hours > 11 || minute > 59) {
    return;
  } else if (num === 0) {
    res.push(hours + ':' + (minute < 10 ? ('0' + minute) : minute));
  } else if (index < 4) {
    helper(num - 1, hours + Math.pow(2, index), minute, res, index + 1);
    helper(num, hours, minute, res, index + 1);
  } else if (index >= 4) {
    helper(num - 1, hours, minute + Math.pow(2, index - 4), res, index + 1);
    helper(num, hours, minute, res, index + 1);
  }
};

readBinaryWatch(+res)
