"use strict";
n.r(t), n.d(t, {
  useActivityShelfItemData: function() {
    return a
  }
});
var s = n("470079"),
  i = n("127255");

function a(e, t, n) {
  let a = (0, i.default)({
    guildId: e,
    channel: n
  });
  return s.useMemo(() => {
    var e;
    return null !== (e = a.find(e => e.application.id === t)) && void 0 !== e ? e : null
  }, [a, t])
}