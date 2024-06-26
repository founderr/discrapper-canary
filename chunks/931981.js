"use strict";
n.d(t, {
  V: function() {
    return N
  },
  e: function() {
    return S
  }
}), n(47120);
var i, r = n(735250);
n(470079);
var s = n(442837),
  o = n(481060),
  a = n(570140),
  l = n(592125),
  u = n(271383),
  _ = n(944486),
  c = n(594174),
  d = n(689938),
  E = n(864914);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let T = new Set;
class h extends(i = s.ZP.PersistedStore) {
  initialize(e) {
    null != e && (T = new Set(e))
  }
  hasId(e) {
    return T.has(e)
  }
  getState() {
    return [...T]
  }
}
I(h, "displayName", "PTOStore"), I(h, "persistKey", "PTOStore");
let f = new h(a.Z, {}),
  S = e => (0, s.e7)([u.ZP, c.default, f], () => {
    let t = c.default.getCurrentUser();
    if (null == t || !t.isStaff() || !e.isDM()) return !1;
    let n = c.default.getUser(e.getRecipientId());
    if (!(null == n ? void 0 : n.isStaff())) return !1;
    let i = u.ZP.getNicknames(n.id).some(e => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
    return i ? !f.hasId(n.id) && i : (T.delete(n.id) && f.emitChange(), !1)
  }),
  N = () => (0, r.jsxs)("div", {
    className: E.bar,
    children: [d.Z.Messages.STAFF_PTO_NOTICE, (0, r.jsx)(o.Clickable, {
      className: E.closeButton,
      onClick: () => {
        let e = _.Z.getChannelId();
        if (null == e) return;
        let t = l.Z.getChannel(e);
        null != t && t.isPrivate() && !T.has(t.getRecipientId()) && (T.add(t.getRecipientId()), f.emitChange())
      },
      children: (0, r.jsx)(o.CircleXIcon, {
        size: "md",
        color: "currentColor",
        className: E.closeIcon
      })
    })]
  })