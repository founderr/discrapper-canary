"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("598165"),
  i = n("446674"),
  r = n("386045"),
  o = n("803725"),
  u = n("103979"),
  d = n("981913"),
  c = n("373469"),
  f = n("271938"),
  h = n("191145"),
  p = n("99795"),
  m = n("782340"),
  E = n("186503");

function C(e) {
  let {
    channel: t
  } = e, n = (0, i.useStateFromStores)([h.default], () => h.default.getSelectedParticipant(t.id)), C = (null == n ? void 0 : n.type) === p.ParticipantTypes.STREAM, S = (0, i.useStateFromStores)([c.default], () => C ? c.default.getActiveStreamForStreamKey(n.id) : null), {
    ignoreSenderPreference: g
  } = u.default.useExperiment({
    location: "ActionBarClipsButton"
  }, {
    autoTrackExposure: !1
  }), {
    viewerClippingAllowed: _,
    isAtMaxSavingClipOperations: I
  } = (0, i.useStateFromStoresObject)([r.default], () => ({
    viewerClippingAllowed: null != S && (r.default.isViewerClippingAllowedForUser(S.ownerId) || g),
    isAtMaxSavingClipOperations: r.default.getIsAtMaxSaveClipOperations()
  })), T = (null == S ? void 0 : S.ownerId) === f.default.getId(), v = !(T || _) || I || null == n, x = l.useCallback(e => (0, a.jsx)(s.CameraIcon, {
    ...e,
    color: "currentColor"
  }), []);
  return (0, a.jsx)(d.default, {
    className: E.actionBarButton,
    onClick: () => {
      !v && (T ? (0, o.saveClip)() : (0, o.saveClip)(n.id))
    },
    disabled: v,
    iconComponent: x,
    label: null == S ? m.default.Messages.CLIPS_VIEWERSIDE_BUTTON_FOCUS_TOOLTIP : T || _ ? I ? void 0 : m.default.Messages.CLIPS_SAVE : m.default.Messages.CLIPS_VIEWERSIDE_BUTTON_DISABLED_TOOLTIP
  })
}