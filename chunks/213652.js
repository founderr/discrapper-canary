n.d(t, {
  Z: function() {
    return f
  }
});
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(481060),
  r = n(435064),
  o = n(39604),
  c = n(441167),
  u = n(871499),
  d = n(199902),
  h = n(314897),
  m = n(358221),
  p = n(354459),
  E = n(689938),
  g = n(407423);

function f(e) {
  let {
    channel: t
  } = e, n = (0, s.e7)([m.Z], () => m.Z.getSelectedParticipant(t.id)), f = (null == n ? void 0 : n.type) === p.fO.STREAM, C = (0, s.e7)([d.Z], () => f ? d.Z.getActiveStreamForStreamKey(n.id) : null), {
    ignoreSenderPreference: _
  } = c.Z.useExperiment({
    location: "ActionBarClipsButton"
  }, {
    autoTrackExposure: !1
  }), {
    viewerClippingAllowed: I,
    isAtMaxSavingClipOperations: x
  } = (0, s.cj)([r.Z], () => ({
    viewerClippingAllowed: null != C && (r.Z.isViewerClippingAllowedForUser(C.ownerId) || _),
    isAtMaxSavingClipOperations: r.Z.getIsAtMaxSaveClipOperations()
  })), T = r.Z.getSettings().clipsEnabled, N = (null == C ? void 0 : C.ownerId) === h.default.getId(), Z = !T || !(N || I) || x || null == n, S = i.useCallback(e => (0, l.jsx)(a.CameraIcon, {
    ...e,
    color: "currentColor"
  }), []);
  return (0, l.jsx)(u.Z, {
    className: g.actionBarButton,
    onClick: () => {
      !Z && (N ? (0, o.C1)() : (0, o.C1)(n.id))
    },
    disabled: Z,
    iconComponent: S,
    label: null == C ? E.Z.Messages.CLIPS_VIEWERSIDE_BUTTON_FOCUS_TOOLTIP : N || I ? T ? x ? void 0 : E.Z.Messages.CLIPS_SAVE : E.Z.Messages.CLIPS_VIEWERSIDE_BUTTON_ENABLE_CLIPS_TOOLTIP : E.Z.Messages.CLIPS_VIEWERSIDE_BUTTON_DISABLED_TOOLTIP,
    grow: !1
  })
}