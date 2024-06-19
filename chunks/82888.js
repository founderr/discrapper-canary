n.d(t, {
  Z: function() {
    return m
  }
});
var l = n(735250),
  i = n(470079),
  s = n(399606),
  a = n(110924),
  r = n(867176),
  o = n(566620),
  c = n(317381),
  u = n(917107),
  d = n(9145),
  h = n(918559);

function m(e) {
  let {
    maxHeight: t,
    renderExternalHeader: n
  } = e, {
    connectedChannelId: m,
    connectedActivity: p,
    activityPanelMode: E
  } = (0, s.cj)([c.ZP], () => {
    var e;
    let t = c.ZP.getConnectedActivityChannelId();
    return {
      connectedChannelId: t,
      connectedActivity: null != t && null !== (e = c.ZP.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0,
      activityPanelMode: c.ZP.getActivityPanelMode()
    }
  }), g = (0, r.NX)(m, !1, "ActivityPanelUI"), f = (0, a.Z)(m);
  if (i.useEffect(() => {
      null != m && null == f && (0, o.gC)(h.MI.RESIZABLE)
    }, [m, f]), !g) return null;
  let C = null == p ? void 0 : p.applicationId;
  return E !== h.Ez.PANEL || null == C ? null : null == m || null == p || (0, u.Z)(m) || null == C ? null : (0, l.jsx)(d.Z, {
    maxHeight: t,
    connectedChannelId: m,
    renderExternalHeader: n
  })
}