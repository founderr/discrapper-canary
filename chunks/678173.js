"use strict";
n.r(t), n.d(t, {
  useActivityShelfItemData: function() {
    return u
  }
});
var i = n("470079"),
  s = n("127255");

function u(e, t, n) {
  let u = (0, s.default)({
    guildId: e,
    channel: n
  });
  return i.useMemo(() => {
    var e;
    return null !== (e = u.find(e => e.application.id === t)) && void 0 !== e ? e : null
  }, [u, t])
}