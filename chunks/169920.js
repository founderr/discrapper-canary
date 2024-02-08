"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("65597"),
  i = n("84339"),
  r = n("427953"),
  u = n("550766"),
  o = n("191225"),
  d = n("420444"),
  c = n("294926"),
  f = n("272505");

function h(e) {
  let {
    maxHeight: t,
    renderExternalHeader: n
  } = e, {
    connectedChannelId: h,
    connectedActivity: p,
    activityPanelMode: m
  } = (0, s.useStateFromStoresObject)([o.default], () => {
    var e;
    let t = o.default.getConnectedActivityChannelId();
    return {
      connectedChannelId: t,
      connectedActivity: null != t && null !== (e = o.default.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0,
      activityPanelMode: o.default.getActivityPanelMode()
    }
  }), E = (0, r.useIsActivitiesInTextEnabled)(h, "ActivityPanelUI"), C = (0, i.default)(h);
  if (l.useEffect(() => {
      null != h && null == C && (0, u.updateFocusedActivityLayout)(f.FocusedActivityLayouts.RESIZABLE)
    }, [h, C]), !E) return null;
  let g = null == p ? void 0 : p.applicationId;
  return m !== f.ActivityPanelModes.PANEL || null == g ? null : null == h || null == p || (0, d.default)(h) || null == g ? null : (0, a.jsx)(c.default, {
    maxHeight: t,
    connectedChannelId: h,
    renderExternalHeader: n
  })
}