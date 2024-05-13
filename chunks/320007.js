"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("618158"),
  o = n("819640"),
  u = n("131951"),
  d = n("529653"),
  c = n("502568"),
  f = n("924557"),
  h = n("435064"),
  E = n("779618"),
  m = n("175470"),
  p = n("203259"),
  g = n("356659"),
  S = n("689938");

function N(e) {
  let {
    canShowReminder: t = !1,
    className: N
  } = e, _ = (0, E.default)(u.default), {
    showClipsHeaderEntrypoint: I
  } = f.ClipsExperiment.useExperiment({
    location: "ClipsButton"
  }, {
    autoTrackExposure: !1
  }), {
    hasClips: T,
    hasNewClips: C,
    lastClipsSession: A,
    remindersEnabled: v,
    hasAnyClipAnimations: x
  } = (0, s.useStateFromStoresObject)([h.default], () => ({
    hasClips: h.default.hasClips(),
    hasNewClips: h.default.getNewClipIds().length > 0,
    lastClipsSession: h.default.getLastClipsSession(),
    remindersEnabled: h.default.getSettings().remindersEnabled,
    hasAnyClipAnimations: h.default.hasAnyClipAnimations()
  })), R = null != A && A.newClipIds.length > 0, M = (0, m.useClipsButtonStore)(e => e.clipsButtonRef), L = (0, m.useClipsButtonStore)(e => e.setClipsButtonRef), b = (0, s.useStateFromStores)([o.default], () => o.default.hasLayers()), {
    preventIdle: O,
    allowIdle: y
  } = (0, r.usePreventIdle)("animation");

  function j() {
    (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("2668"), n.e("32991")]).then(n.bind(n, "542055"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    }, {
      modalKey: g.CLIPS_GALLERY_MODAL_KEY
    })
  }
  return (l.useEffect(() => (x ? O() : y(), () => y()), [x, O, y]), I && _ && T) ? (0, a.jsxs)(a.Fragment, {
    children: [null != M && t && v && R && !(0, i.hasAnyModalOpen)() && !b && (0, a.jsx)(p.default, {
      clipIconRef: M,
      lastClipsSession: A,
      onOpenClipsGallery: j
    }), (0, a.jsx)("div", {
      ref: L,
      children: (0, a.jsx)(c.Icon, {
        className: N,
        icon: d.default,
        showBadge: C,
        tooltip: S.default.Messages.CLIPS_GALLERY_TOOLTIP,
        onClick: j
      })
    })]
  }) : null
}