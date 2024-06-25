"use strict";
n.d(t, {
  K: function() {
    return R
  },
  y: function() {
    return p
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(873546),
  l = n(481060),
  u = n(425493),
  _ = n(169525),
  c = n(261922),
  d = n(133910),
  E = n(68588),
  I = n(585483),
  T = n(956664),
  h = n(589530),
  f = n(981631),
  S = n(689938),
  A = n(626729);

function N(e) {
  let {
    onClose: t
  } = e, n = r.useRef(null);
  return (0, i.jsx)("div", {
    className: A.mobileCloseWrapper,
    ref: n,
    children: (0, i.jsx)(l.FocusRingScope, {
      containerRef: n,
      children: (0, i.jsx)("div", {
        children: (0, i.jsx)(u.Z, {
          closeAction: t,
          keybind: "ESC"
        })
      })
    })
  })
}
let m = e => {
  let {
    children: t,
    hasMediaControls: n,
    isObscured: s,
    src: a
  } = e, [l, u] = r.useState(!1), c = r.useRef(a);
  return (r.useEffect(() => {
    a !== c.current && u(!s)
  }, [a, s]), s) ? (0, i.jsx)(E.a.Provider, {
    value: l,
    children: (0, i.jsx)(E.Z, {
      type: E.Z.Types.ATTACHMENT,
      reason: _.wk.EXPLICIT_CONTENT,
      className: A.obscureContainer,
      obscured: !0,
      isSingleMosaicItem: !0,
      obscurityControlClassName: o()({
        [A.controlsOffset]: n && l
      }),
      onToggleObscurity: e => {
        e.stopPropagation(), e.nativeEvent.stopPropagation(), u(e => !e)
      },
      children: e => (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)("div", {
          className: o()(A.obscureWrapper, {
            [A.obscure]: e
          }),
          children: t(e)
        })
      })
    }, a)
  }) : (0, i.jsx)(i.Fragment, {
    children: t(!1)
  })
};

function O(e) {
  let {
    src: t,
    renderLinkComponent: n,
    renderForwardComponent: r
  } = e, s = n({
    href: t,
    target: "_blank",
    rel: "noreferrer noopener",
    className: A.downloadLink,
    children: S.Z.Messages.OPEN_IN_BROWSER
  }), o = r({
    className: A.forward
  });
  return null == s && null == o ? null : (0, i.jsxs)("div", {
    className: A.optionsContainer,
    children: [s, o]
  })
}

function p(e) {
  let {
    src: t,
    original: n,
    placeholder: s,
    width: o,
    height: l,
    animated: u,
    children: _,
    responsive: d,
    renderLinkComponent: E,
    renderForwardComponent: h,
    maxWidth: S,
    maxHeight: p,
    shouldAnimate: R,
    onClose: g,
    shouldHideMediaOptions: C = !1,
    obscure: v = !1,
    ...L
  } = e, {
    width: D,
    height: M
  } = (0, T.zp)(o, l), P = a.tq && null != g;
  r.useEffect(() => {
    if (null != g) return I.S.subscribe(f.CkL.MEDIA_MODAL_CLOSE, g), () => {
      I.S.unsubscribe(f.CkL.MEDIA_MODAL_CLOSE, g)
    }
  }, [g]);
  let y = C ? e => {
    e.stopPropagation(), e.preventDefault()
  } : L.onContextMenu;
  return (0, i.jsxs)("div", {
    className: A.wrapper,
    children: [P ? (0, i.jsx)(N, {
      onClose: g
    }) : null, (0, i.jsx)(m, {
      isObscured: v,
      src: t,
      children: e => (0, i.jsx)(c.Z, {
        src: t,
        placeholder: s,
        shouldLink: !1,
        width: o,
        height: l,
        maxWidth: D,
        maxHeight: M,
        children: _,
        animated: !e && u,
        autoPlay: !e,
        responsive: d,
        onContextMenu: y,
        ...L
      }, t)
    }), null == n || C ? null : (0, i.jsx)(O, {
      src: n,
      renderLinkComponent: E,
      renderForwardComponent: h
    })]
  })
}

function R(e) {
  let {
    src: t,
    width: n,
    height: r,
    onClose: s,
    renderLinkComponent: l,
    renderForwardComponent: u,
    shouldHideMediaOptions: _ = !1,
    obscure: c = !1,
    ...E
  } = e, {
    width: I,
    height: f
  } = (0, T.zp)(n, r), S = a.tq && null != s, p = _ ? e => {
    e.stopPropagation(), e.preventDefault()
  } : E.onContextMenu;
  return (0, i.jsxs)("div", {
    className: o()(A.wrapper, A.videoWrapper),
    children: [S ? (0, i.jsx)(N, {
      onClose: s
    }) : null, (0, i.jsx)(m, {
      hasMediaControls: !0,
      isObscured: c,
      src: t,
      children: e => (0, i.jsx)(d.Z, {
        src: t,
        width: n,
        height: r,
        maxWidth: I,
        maxHeight: f,
        renderLinkComponent: l,
        volume: h.FC,
        autoMute: h.rs,
        onVolumeChange: h.jA,
        onMute: h.Zj,
        autoPlay: !e,
        onContextMenu: p,
        ...E
      }, t)
    }), _ ? null : (0, i.jsx)(O, {
      src: t,
      renderLinkComponent: l,
      renderForwardComponent: u
    })]
  })
}