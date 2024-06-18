"use strict";
n.d(t, {
  K: function() {
    return p
  },
  y: function() {
    return R
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
  c = n(585483),
  d = n(956664),
  E = n(589530),
  I = n(261922),
  T = n(133910),
  h = n(68588),
  S = n(981631),
  f = n(689938),
  N = n(303536);

function A(e) {
  let {
    onClose: t
  } = e, n = r.useRef(null);
  return (0, i.jsx)("div", {
    className: N.mobileCloseWrapper,
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
  }, [a, s]), s) ? (0, i.jsx)(h.a.Provider, {
    value: l,
    children: (0, i.jsx)(h.Z, {
      type: h.Z.Types.ATTACHMENT,
      reason: _.wk.EXPLICIT_CONTENT,
      className: N.obscureContainer,
      obscured: !0,
      isSingleMosaicItem: !0,
      obscurityControlClassName: o()({
        [N.controlsOffset]: n && l
      }),
      onToggleObscurity: e => {
        e.stopPropagation(), e.nativeEvent.stopPropagation(), u(e => !e)
      },
      children: e => (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)("div", {
          className: o()(N.obscureWrapper, {
            [N.obscure]: e
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
    className: N.downloadLink,
    children: f.Z.Messages.OPEN_IN_BROWSER
  }), o = r({
    className: N.forward
  });
  return null == s && null == o ? null : (0, i.jsxs)("div", {
    className: N.optionsContainer,
    children: [s, o]
  })
}

function R(e) {
  let {
    src: t,
    original: n,
    placeholder: s,
    width: o,
    height: l,
    animated: u,
    children: _,
    responsive: E,
    renderLinkComponent: T,
    renderForwardComponent: h,
    maxWidth: f,
    maxHeight: R,
    shouldAnimate: p,
    onClose: g,
    shouldHideMediaOptions: C = !1,
    obscure: v = !1,
    ...L
  } = e, {
    width: D,
    height: M
  } = (0, d.zp)(o, l), P = a.tq && null != g;
  r.useEffect(() => {
    if (null != g) return c.S.subscribe(S.CkL.MEDIA_MODAL_CLOSE, g), () => {
      c.S.unsubscribe(S.CkL.MEDIA_MODAL_CLOSE, g)
    }
  }, [g]);
  let y = C ? e => {
    e.stopPropagation(), e.preventDefault()
  } : L.onContextMenu;
  return (0, i.jsxs)("div", {
    className: N.wrapper,
    children: [P ? (0, i.jsx)(A, {
      onClose: g
    }) : null, (0, i.jsx)(m, {
      isObscured: v,
      src: t,
      children: e => (0, i.jsx)(I.Z, {
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
        responsive: E,
        onContextMenu: y,
        ...L
      }, t)
    }), null == n || C ? null : (0, i.jsx)(O, {
      src: n,
      renderLinkComponent: T,
      renderForwardComponent: h
    })]
  })
}

function p(e) {
  let {
    src: t,
    width: n,
    height: r,
    onClose: s,
    renderLinkComponent: l,
    renderForwardComponent: u,
    shouldHideMediaOptions: _ = !1,
    obscure: c = !1,
    ...I
  } = e, {
    width: h,
    height: S
  } = (0, d.zp)(n, r), f = a.tq && null != s, R = _ ? e => {
    e.stopPropagation(), e.preventDefault()
  } : I.onContextMenu;
  return (0, i.jsxs)("div", {
    className: o()(N.wrapper, N.videoWrapper),
    children: [f ? (0, i.jsx)(A, {
      onClose: s
    }) : null, (0, i.jsx)(m, {
      hasMediaControls: !0,
      isObscured: c,
      src: t,
      children: e => (0, i.jsx)(T.Z, {
        src: t,
        width: n,
        height: r,
        maxWidth: h,
        maxHeight: S,
        renderLinkComponent: l,
        volume: E.FC,
        autoMute: E.rs,
        onVolumeChange: E.jA,
        onMute: E.Zj,
        autoPlay: !e,
        onContextMenu: R,
        ...I
      }, t)
    }), _ ? null : (0, i.jsx)(O, {
      src: t,
      renderLinkComponent: l,
      renderForwardComponent: u
    })]
  })
}