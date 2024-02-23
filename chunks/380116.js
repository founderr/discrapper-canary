"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("174727"),
  r = n("124824"),
  o = n("515496"),
  u = n("568088"),
  d = n("257407"),
  c = n("814711");

function f(e) {
  let {
    channel: t
  } = e, n = (0, s.useStateFromStores)([u.default], () => u.default.effectCooldownEndTime), f = a.useMemo(() => null != n ? (n.getTime() - Date.now()) / 1e3 : 0, [n]), {
    seconds: h
  } = (0, i.default)(null != n ? n : new Date), m = h > 0;
  return (0, l.jsx)(c.default, {
    renderPopout: e => {
      let {
        closePopout: n,
        onFocus: a
      } = e;
      return (0, l.jsx)(r.default, {
        children: (0, l.jsx)(d.default, {
          channel: t,
          closePopout: n,
          onFocus: a
        })
      })
    },
    children: e => {
      let {
        onMouseEnter: t,
        ...n
      } = e;
      return (0, l.jsx)(o.default, {
        totalCooldownSeconds: f,
        remainingCooldownSeconds: h,
        onMouseEnter: e => {
          var n, l;
          return n = e, l = t, void(!m && l(n))
        },
        ...n
      })
    }
  })
}