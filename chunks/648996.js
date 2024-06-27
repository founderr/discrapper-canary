"use strict";
n.d(t, {
  Z: function() {
    return R
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(512722),
  l = n.n(a),
  u = n(442837),
  _ = n(481060),
  c = n(493683),
  d = n(37234),
  E = n(904245),
  I = n(541716),
  T = n(957730),
  h = n(592125),
  f = n(699516),
  S = n(51144),
  A = n(838440),
  N = n(981631),
  m = n(689938),
  O = n(151915);

function R(e) {
  let {
    user: t,
    autoFocus: n = !1,
    className: s,
    inputClassName: a,
    onSend: R
  } = e, p = r.useRef(null), g = (0, u.e7)([f.Z], () => f.Z.isBlocked(t.id)), C = r.useCallback(e => {
    if ("Enter" === e.key) {
      e.preventDefault(), l()(null != p.current, "Keypress on Input when not mounted");
      let n = p.current.value.trim();
      return (0, A.v)({
        type: I.I.NORMAL,
        content: n,
        channel: null
      }).then(e => {
        let {
          valid: i
        } = e;
        if (!!i) c.Z.openPrivateChannel(t.id, !1, !1, "Quick Message Input").then(e => {
          let t = h.Z.getChannel(e);
          l()(null != t, "Newly created PrivateChannel is null"), E.Z.sendMessage(t.id, T.ZP.parse(t, n)), (0, d.xf)()
        }), null == R || R()
      }), !0
    }
    e.which === N.yXg.SPACE && e.stopPropagation()
  }, [t, R]), v = g ? m.Z.Messages.QUICK_DM_BLOCKED : m.Z.Messages.QUICK_DM_USER.format({
    name: S.ZP.getName(t)
  });
  return (0, i.jsx)(_.TextInput, {
    className: s,
    inputClassName: o()(a, O.input),
    inputRef: p,
    autoFocus: n,
    placeholder: v,
    "aria-label": v,
    onKeyPress: C,
    disabled: g
  })
}