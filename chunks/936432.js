"use strict";
n.r(t);
var e = n("283398"),
  a = n("757490"),
  u = ["неділю", "понеділок", "вівторок", "середу", "четвер", "п’ятницю", "суботу"];

function r(i) {
  return "'у " + u[i] + " о' p"
}
var o = {
  lastWeek: function(i, t, n) {
    var o = (0, e.toDate)(i),
      l = o.getUTCDay();
    return (0, a.default)(o, t, n) ? r(l) : function(i) {
      var t = u[i];
      switch (i) {
        case 0:
        case 3:
        case 5:
        case 6:
          return "'у минулу " + t + " о' p";
        case 1:
        case 2:
        case 4:
          return "'у минулий " + t + " о' p"
      }
    }(l)
  },
  yesterday: "'вчора о' p",
  today: "'сьогодні о' p",
  tomorrow: "'завтра о' p",
  nextWeek: function(i, t, n) {
    var o = (0, e.toDate)(i),
      l = o.getUTCDay();
    return (0, a.default)(o, t, n) ? r(l) : function(i) {
      var t = u[i];
      switch (i) {
        case 0:
        case 3:
        case 5:
        case 6:
          return "'у наступну " + t + " о' p";
        case 1:
        case 2:
        case 4:
          return "'у наступний " + t + " о' p"
      }
    }(l)
  },
  other: "P"
};
t.default = function(i, t, n, e) {
  var a = o[i];
  return "function" == typeof a ? a(t, n, e) : a
}