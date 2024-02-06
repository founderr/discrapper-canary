"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("550410"),
  o = n("778588"),
  u = n("522049"),
  d = n("664336"),
  c = n("773336"),
  f = n("56947"),
  h = n("386045"),
  E = n("728658"),
  m = n("389535"),
  p = n("80028"),
  S = n("782340");

function g(e) {
  let {
    canShowReminder: t = !1,
    className: g
  } = e, {
    showClipsHeaderEntrypoint: N,
    ignorePlatformRestriction: _
  } = f.ClipsExperiment.useExperiment({
    location: "ClipsButton"
  }, {
    autoTrackExposure: !1
  }), {
    hasClips: T,
    hasNewClips: I,
    lastClipsSession: C,
    remindersEnabled: A,
    hasAnyClipAnimations: M
  } = (0, s.useStateFromStoresObject)([h.default], () => ({
    hasClips: h.default.hasClips(),
    hasNewClips: h.default.getNewClipIds().length > 0,
    lastClipsSession: h.default.getLastClipsSession(),
    remindersEnabled: h.default.getSettings().remindersEnabled,
    hasAnyClipAnimations: h.default.hasAnyClipAnimations()
  })), x = null != C && C.newClipIds.length > 0, R = (0, E.useClipsButtonStore)(e => e.clipsButtonRef), v = (0, E.useClipsButtonStore)(e => e.setClipsButtonRef), L = (0, s.useStateFromStores)([o.default], () => o.default.hasLayers()), {
    preventIdle: O,
    allowIdle: b
  } = (0, r.usePreventIdle)("animation");

  function y() {
    (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("167573").then(n.bind(n, "167573"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    }, {
      modalKey: p.CLIPS_GALLERY_MODAL_KEY
    })
  }
  return (l.useEffect(() => (M ? O() : b(), () => b()), [M, O, b]), N && ((0, c.isWindows)() || _) && T) ? (0, a.jsxs)(a.Fragment, {
    children: [null != R && t && A && x && !(0, i.hasAnyModalOpen)() && !L && (0, a.jsx)(m.default, {
      clipIconRef: R,
      lastClipsSession: C,
      onOpenClipsGallery: y
    }), (0, a.jsx)("div", {
      ref: v,
      children: (0, a.jsx)(d.Icon, {
        className: g,
        icon: u.default,
        showBadge: I,
        tooltip: S.default.Messages.CLIPS_GALLERY_TOOLTIP,
        onClick: y
      })
    })]
  }) : null
}