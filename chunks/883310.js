"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var l = n("884691"),
  i = n("448993"),
  a = n("374860"),
  s = n("495829");
let r = {
  onSuccess: () => {},
  permissionOverwrites: []
};

function u() {
  let [e, t] = l.useState(!1), [n, u] = l.useState(null);
  return [async function e(e, n) {
    let {
      onSuccess: l = r.onSuccess,
      permissionOverwrites: d = r.permissionOverwrites
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
    t(!0);
    try {
      await s.preStartEventActions(e, d), await s.setEventAsActive(e, n), await (0, a.navigateToEvent)(e, l), await (0, a.postStartActions)(e, l), t(!1)
    } catch (n) {
      let e = new i.APIError(n);
      u(e), t(!1)
    }
    t(!1)
  }, {
    loading: e,
    error: n
  }]
}