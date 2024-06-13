"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("618158"),
  o = n("819640"),
  u = n("131951"),
  d = n("529653"),
  c = n("502568"),
  f = n("924557"),
  E = n("435064"),
  _ = n("779618"),
  T = n("175470"),
  m = n("203259"),
  I = n("356659"),
  N = n("689938");

function p(e) {
  let {
    canShowReminder: t = !1,
    className: p
  } = e, h = (0, _.default)(u.default), {
    showClipsHeaderEntrypoint: S
  } = f.ClipsExperiment.useExperiment({
    location: "ClipsButton"
  }, {
    autoTrackExposure: !1
  }), {
    hasClips: C,
    hasNewClips: A,
    lastClipsSession: g,
    remindersEnabled: M,
    hasAnyClipAnimations: R
  } = (0, l.useStateFromStoresObject)([E.default], () => ({
    hasClips: E.default.hasClips(),
    hasNewClips: E.default.getNewClipIds().length > 0,
    lastClipsSession: E.default.getLastClipsSession(),
    remindersEnabled: E.default.getSettings().remindersEnabled,
    hasAnyClipAnimations: E.default.hasAnyClipAnimations()
  })), O = null != g && g.newClipIds.length > 0, v = (0, T.useClipsButtonStore)(e => e.clipsButtonRef), x = (0, T.useClipsButtonStore)(e => e.setClipsButtonRef), L = (0, l.useStateFromStores)([o.default], () => o.default.hasLayers()), {
    preventIdle: P,
    allowIdle: D
  } = (0, r.usePreventIdle)("animation");

  function y() {
    (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("2668"), n.e("32991")]).then(n.bind(n, "542055"));
      return t => (0, s.jsx)(e, {
        ...t
      })
    }, {
      modalKey: I.CLIPS_GALLERY_MODAL_KEY
    })
  }
  return (a.useEffect(() => (R ? P() : D(), () => D()), [R, P, D]), S && h && C) ? (0, s.jsxs)(s.Fragment, {
    children: [null != v && t && M && O && !(0, i.hasAnyModalOpen)() && !L && (0, s.jsx)(m.default, {
      clipIconRef: v,
      lastClipsSession: g,
      onOpenClipsGallery: y
    }), (0, s.jsx)("div", {
      ref: x,
      children: (0, s.jsx)(c.Icon, {
        className: p,
        icon: d.default,
        showBadge: A,
        tooltip: N.default.Messages.CLIPS_GALLERY_TOOLTIP,
        onClick: y
      })
    })]
  }) : null
}