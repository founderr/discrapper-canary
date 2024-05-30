"use strict";
n.r(t), n.d(t, {
  OAuth2Modal: function() {
    return h
  },
  OAuth2Page: function() {
    return S
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("466377"),
  l = n("481060"),
  u = n("252618"),
  d = n("612744"),
  _ = n("449934"),
  c = n("792125"),
  E = n("981631"),
  I = n("756286"),
  T = n("689938"),
  f = n("897456");

function S(e) {
  let {
    children: t,
    wrapperClassName: n,
    embedded: s
  } = e, [o, S] = r.useState(I.WaveStates.INITIAL), h = r.useCallback(e => {
    S(t => Math.max(t, e))
  }, []);
  return (0, u.usePageTitle)({
    location: T.default.Messages.OAUTH2_TITLE
  }), (0, i.jsx)(l.ThemeContextProvider, {
    theme: E.ThemeTypes.DARK,
    children: (0, i.jsx)(d.default, {
      embedded: s,
      className: a()((0, c.getThemeClass)(E.ThemeTypes.DARK), f.wave),
      splash: (0, _.getArtForPath)(),
      waveState: o,
      showLogo: !0,
      updateWaveState: h,
      children: (0, i.jsx)("div", {
        className: a()(f.oauth2Wrapper, n),
        children: t
      })
    })
  })
}

function h(e) {
  let {
    children: t,
    footer: n,
    transitionState: r,
    ...s
  } = e;
  return (0, i.jsxs)(o.ModalRoot, {
    size: o.ModalSize.DYNAMIC,
    transitionState: r,
    className: f.oauth2Wrapper,
    ...s,
    children: [(0, i.jsx)(o.ModalContent, {
      children: t
    }), null != n && (0, i.jsx)(o.ModalFooter, {
      className: f.footer,
      children: n
    })]
  })
}