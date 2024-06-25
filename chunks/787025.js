"use strict";
n.d(t, {
  G: function() {
    return f
  },
  j: function() {
    return S
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(466377),
  l = n(481060),
  u = n(568154),
  _ = n(252618),
  c = n(449934),
  d = n(792125),
  E = n(981631),
  I = n(898625),
  T = n(689938),
  h = n(466320);

function f(e) {
  let {
    children: t,
    wrapperClassName: n,
    embedded: s
  } = e, [a, f] = r.useState(I.hO.INITIAL), S = r.useCallback(e => {
    f(t => Math.max(t, e))
  }, []);
  return (0, _.Tt)({
    location: T.Z.Messages.OAUTH2_TITLE
  }), (0, i.jsx)(l.ThemeContextProvider, {
    theme: E.BRd.DARK,
    children: (0, i.jsx)(u.Z, {
      embedded: s,
      className: o()((0, d.Q)(E.BRd.DARK), h.wave),
      splash: (0, c.gK)(),
      waveState: a,
      showLogo: !0,
      updateWaveState: S,
      children: (0, i.jsx)("div", {
        className: o()(h.oauth2Wrapper, n),
        children: t
      })
    })
  })
}

function S(e) {
  let {
    children: t,
    footer: n,
    transitionState: r,
    ...s
  } = e;
  return (0, i.jsxs)(a.Y0, {
    size: a.Cg.DYNAMIC,
    transitionState: r,
    className: h.oauth2Wrapper,
    ...s,
    children: [(0, i.jsx)(a.hz, {
      children: t
    }), null != n && (0, i.jsx)(a.mz, {
      className: h.footer,
      children: n
    })]
  })
}