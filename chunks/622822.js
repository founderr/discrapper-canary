n.d(t, {
  b: function() {
    return a
  }
});
var s = n(594174),
  i = n(709054);
let l = new Date("06/16/2020");

function a() {
  let e = s.default.getCurrentUser();
  return null != e && i.default.extractTimestamp(e.id) > l.getTime() && !e.isClaimed() && null == e.nsfwAllowed
}