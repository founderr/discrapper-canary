"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("885774"),
  r = n("435064"),
  o = n("39604"),
  u = n("441167"),
  d = n("871499"),
  c = n("199902"),
  f = n("314897"),
  h = n("358221"),
  m = n("354459"),
  p = n("689938"),
  E = n("930422");

function g(e) {
  let {
    channel: t
  } = e, n = (0, s.useStateFromStores)([h.default], () => h.default.getSelectedParticipant(t.id)), g = (null == n ? void 0 : n.type) === m.ParticipantTypes.STREAM, C = (0, s.useStateFromStores)([c.default], () => g ? c.default.getActiveStreamForStreamKey(n.id) : null), {
    ignoreSenderPreference: S
  } = u.default.useExperiment({
    location: "ActionBarClipsButton"
  }, {
    autoTrackExposure: !1
  }), {
    viewerClippingAllowed: _,
    isAtMaxSavingClipOperations: T
  } = (0, s.useStateFromStoresObject)([r.default], () => ({
    viewerClippingAllowed: null != C && (r.default.isViewerClippingAllowedForUser(C.ownerId) || S),
    isAtMaxSavingClipOperations: r.default.getIsAtMaxSaveClipOperations()
  })), I = r.default.getSettings().clipsEnabled, A = (null == C ? void 0 : C.ownerId) === f.default.getId(), v = !I || !(A || _) || T || null == n, x = l.useCallback(e => (0, a.jsx)(i.CameraIcon, {
    ...e,
    color: "currentColor"
  }), []);
  return (0, a.jsx)(d.default, {
    className: E.actionBarButton,
    onClick: () => {
      !v && (A ? (0, o.saveClip)() : (0, o.saveClip)(n.id))
    },
    disabled: v,
    iconComponent: x,
    label: null == C ? p.default.Messages.CLIPS_VIEWERSIDE_BUTTON_FOCUS_TOOLTIP : A || _ ? I ? T ? void 0 : p.default.Messages.CLIPS_SAVE : p.default.Messages.CLIPS_VIEWERSIDE_BUTTON_ENABLE_CLIPS_TOOLTIP : p.default.Messages.CLIPS_VIEWERSIDE_BUTTON_DISABLED_TOOLTIP,
    grow: !1
  })
}