n.d(t, {
  V: function() {
    return u
  }
});
var s = n(317381),
  i = n(573979),
  l = n(42352),
  a = n(886355),
  r = n(238679),
  o = n(981631),
  c = n(701488);
async function u(e, t, n) {
  var u, d;
  switch (t) {
    case o.zMe.ACTIVITY_PIP_MODE_UPDATE: {
      let t = null === (u = e.application) || void 0 === u ? void 0 : u.id,
        n = null != t ? s.ZP.getLayoutModeForApp(t) : null;
      return null != n ? {
        is_pip_mode: n !== c.cE.FOCUSED
      } : null
    }
    case o.zMe.ACTIVITY_LAYOUT_MODE_UPDATE: {
      let t = null === (d = e.application) || void 0 === d ? void 0 : d.id,
        n = null != t ? s.ZP.getLayoutModeForApp(t) : null;
      return null != n ? {
        layout_mode: n
      } : null
    }
    case o.zMe.THERMAL_STATE_UPDATE: {
      let e = await (0, l.Z)();
      if (null == e) return null;
      return {
        thermal_state: (0, i.Z)(e)
      }
    }
    case o.zMe.ORIENTATION_UPDATE: {
      let e = a.Z.isScreenLandscape();
      if (null != e) return {
        screen_orientation: e ? c.W0.LANDSCAPE : c.W0.PORTRAIT
      };
      return null
    }
    case o.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
      return (0, r.dO)();
    default:
      return null
  }
}