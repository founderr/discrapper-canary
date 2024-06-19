n.d(e, {
  U3: function() {
    return p
  },
  XM: function() {
    return u
  },
  hd: function() {
    return c
  },
  lI: function() {
    return a
  },
  py: function() {
    return h
  }
});
var s = n(481060),
  i = n(819640),
  o = n(585483),
  r = n(981631);
let l = () => i.Z.hasLayers() || (0, s.hasAnyModalOpen)(),
  a = 12633 == n.j ? {
    binds: ["right"],
    comboKeysBindGlobal: !0,
    action() {
      if (!l()) return o.S.dispatch(r.CkL.CAROUSEL_NEXT), !1
    }
  } : null,
  c = 12633 == n.j ? {
    binds: ["left"],
    comboKeysBindGlobal: !0,
    action() {
      if (!l()) return o.S.dispatch(r.CkL.CAROUSEL_PREV), !1
    }
  } : null,
  u = {
    binds: ["right", "down", "space"],
    comboKeysBindGlobal: !0,
    action: () => (o.S.dispatch(r.CkL.MODAL_CAROUSEL_NEXT), !1)
  },
  h = {
    binds: ["left", "up"],
    comboKeysBindGlobal: !0,
    action: () => (o.S.dispatch(r.CkL.MODAL_CAROUSEL_PREV), !1)
  },
  p = {
    binds: ["esc"],
    comboKeysBindGlobal: !0,
    action() {
      if (o.S.hasSubscribers(r.CkL.MODAL_CLOSE)) return o.S.dispatch(r.CkL.MODAL_CLOSE), !1
    }
  }