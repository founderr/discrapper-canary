n.d(t, {
  Z: function() {
    return h
  }
});
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(618158),
  o = n(819640),
  c = n(131951),
  u = n(502568),
  d = n(924557),
  E = n(435064),
  _ = n(779618),
  I = n(175470),
  T = n(203259),
  m = n(356659),
  N = n(689938);

function h(e) {
  let {
    canShowReminder: t = !1,
    className: h
  } = e, C = (0, _.Z)(c.Z), {
    showClipsHeaderEntrypoint: S
  } = d.NV.useExperiment({
    location: "ClipsButton"
  }, {
    autoTrackExposure: !1
  }), {
    hasClips: A,
    hasNewClips: g,
    lastClipsSession: p,
    remindersEnabled: f,
    hasAnyClipAnimations: R
  } = (0, l.cj)([E.Z], () => ({
    hasClips: E.Z.hasClips(),
    hasNewClips: E.Z.getNewClipIds().length > 0,
    lastClipsSession: E.Z.getLastClipsSession(),
    remindersEnabled: E.Z.getSettings().remindersEnabled,
    hasAnyClipAnimations: E.Z.hasAnyClipAnimations()
  })), O = null != p && p.newClipIds.length > 0, M = (0, I.n)(e => e.clipsButtonRef), x = (0, I.n)(e => e.setClipsButtonRef), v = (0, l.e7)([o.Z], () => o.Z.hasLayers()), {
    preventIdle: L,
    allowIdle: Z
  } = (0, r.Y)("animation");

  function P() {
    (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("2668"), n.e("32991")]).then(n.bind(n, 542055));
      return t => (0, s.jsx)(e, {
        ...t
      })
    }, {
      modalKey: m.Qr
    })
  }
  return (i.useEffect(() => (R ? L() : Z(), () => Z()), [R, L, Z]), S && C && A) ? (0, s.jsxs)(s.Fragment, {
    children: [null != M && t && f && O && !(0, a.hasAnyModalOpen)() && !v && (0, s.jsx)(T.Z, {
      clipIconRef: M,
      lastClipsSession: p,
      onOpenClipsGallery: P
    }), (0, s.jsx)("div", {
      ref: x,
      children: (0, s.jsx)(u.JO, {
        className: h,
        icon: a.ClipsIcon,
        showBadge: g,
        tooltip: N.Z.Messages.CLIPS_GALLERY_TOOLTIP,
        onClick: P
      })
    })]
  }) : null
}