n.d(t, {
  u: function() {
    return c
  }
});
var l = n(374470),
  i = n(481060),
  s = n(40851),
  r = n(574254),
  a = n(585483),
  o = n(547420),
  u = n(981631);
let c = {
  POP_LAYER: {
    binds: ["esc"],
    comboKeysBindGlobal: !0,
    action(e) {
      if ((0, i.isInDndMode)()) return !1;
      if (a.S.hasSubscribers(u.CkL.CALL_DECLINE)) return a.S.dispatch(u.CkL.CALL_DECLINE), !1;
      if (r.Z.close()) return !1;
      if ((0, l.k)(e.target)) {
        let t = (0, s.J5)(e.target);
        if (null == t ? void 0 : t.hasSubscribers(u.CkL.POPOUT_CLOSE)) return t.dispatch(u.CkL.POPOUT_CLOSE), !1
      }
      if (a.S.hasSubscribers(u.CkL.MODAL_CLOSE)) return a.S.dispatch(u.CkL.MODAL_CLOSE), !1;
      a.S.dispatch(u.CkL.LAYER_POP_ESCAPE_KEY)
    }
  },
  ...o.ZP
}