n.d(t, {
  b: function() {
    return a
  }
});
var i = n(594174),
  s = n(709054);
let l = new Date("06/16/2020");

function a() {
  let e = i.default.getCurrentUser();
  return null != e && s.default.extractTimestamp(e.id) > l.getTime() && !e.isClaimed() && null == e.nsfwAllowed
}