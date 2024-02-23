"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("65597"),
  i = n("84339"),
  r = n("427953"),
  o = n("550766"),
  u = n("191225"),
  d = n("420444"),
  c = n("294926"),
  f = n("272505");

function h(e) {
  let {
    maxHeight: t,
    renderExternalHeader: n
  } = e, {
    connectedChannelId: h,
    connectedActivity: m,
    activityPanelMode: p
  } = (0, s.useStateFromStoresObject)([u.default], () => {
    var e;
    let t = u.default.getConnectedActivityChannelId();
    return {
      connectedChannelId: t,
      connectedActivity: null != t && null !== (e = u.default.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0,
      activityPanelMode: u.default.getActivityPanelMode()
    }
  }), E = (0, r.useIsActivitiesInTextEnabled)(h, "ActivityPanelUI"), S = (0, i.default)(h);
  if (a.useEffect(() => {
      null != h && null == S && (0, o.updateFocusedActivityLayout)(f.FocusedActivityLayouts.RESIZABLE)
    }, [h, S]), !E) return null;
  let g = null == m ? void 0 : m.applicationId;
  return p !== f.ActivityPanelModes.PANEL || null == g ? null : null == h || null == m || (0, d.default)(h) || null == g ? null : (0, l.jsx)(c.default, {
    maxHeight: t,
    connectedChannelId: h,
    renderExternalHeader: n
  })
}