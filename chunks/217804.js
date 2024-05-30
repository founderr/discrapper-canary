"use strict";
n.r(l), n.d(l, {
  getLocationDataForEvent: function() {
    return i
  }
});
var t = n("471445"),
  s = n("393112"),
  a = n("230900");

function i(e, l) {
  let n, i;
  if (null == e) return null;
  let u = (0, a.getLocationFromEvent)(e);
  if (null != u) n = s.default, i = u;
  else {
    if (null == l) return null;
    n = (0, t.getSimpleChannelIconComponent)(l.type), i = l.name
  }
  return {
    IconComponent: n,
    locationName: i
  }
}