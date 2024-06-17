"use strict";
n.d(t, {
  K: function() {
    return R
  },
  y: function() {
    return O
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
  d = n(585483),
  c = n(956664),
  E = n(589530),
  I = n(261922),
  T = n(133910),
  h = n(68588),
  S = n(981631),
  f = n(689938),
  N = n(791691);

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
  } = e, [l, u] = r.useState(!1), d = r.useRef(a);
  return (r.useEffect(() => {
    a !== d.current && u(!s)
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
    original: n,
    placeholder: s,
    width: o,
    height: l,
    animated: u,
    children: _,
    responsive: E,
    renderLinkComponent: T,
    maxWidth: h,
    maxHeight: O,
    shouldAnimate: R,
    onClose: C,
    shouldHideMediaOptions: p = !1,
    obscure: g = !1,
    ...L
  } = e, {
    width: v,
    height: D
  } = (0, c.zp)(o, l), M = a.tq && null != C;
  r.useEffect(() => {
    if (null != C) return d.S.subscribe(S.CkL.MEDIA_MODAL_CLOSE, C), () => {
      d.S.unsubscribe(S.CkL.MEDIA_MODAL_CLOSE, C)
    }
  }, [C]);
  let P = p ? e => {
    e.stopPropagation(), e.preventDefault()
  } : L.onContextMenu;
  return (0, i.jsxs)("div", {
    className: N.wrapper,
    children: [M ? (0, i.jsx)(A, {
      onClose: C
    }) : null, (0, i.jsx)(m, {
      isObscured: g,
      src: t,
      children: e => (0, i.jsx)(I.Z, {
        src: t,
        placeholder: s,
        shouldLink: !1,
        width: o,
        height: l,
        maxWidth: v,
        maxHeight: D,
        children: _,
        animated: !e && u,
        autoPlay: !e,
        responsive: E,
        onContextMenu: P,
        ...L
      }, t)
    }), null != n && !p && T({
      href: n,
      target: "_blank",
      rel: "noreferrer noopener",
      className: N.downloadLink,
      children: f.Z.Messages.OPEN_IN_BROWSER
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
    shouldHideMediaOptions: u = !1,
    obscure: _ = !1,
    ...d
  } = e, {
    width: I,
    height: h
  } = (0, c.zp)(n, r), S = a.tq && null != s, O = u ? e => {
    e.stopPropagation(), e.preventDefault()
  } : d.onContextMenu;
  return (0, i.jsxs)("div", {
    className: o()(N.wrapper, N.videoWrapper),
    children: [S ? (0, i.jsx)(A, {
      onClose: s
    }) : null, (0, i.jsx)(m, {
      hasMediaControls: !0,
      isObscured: _,
      src: t,
      children: e => (0, i.jsx)(T.Z, {
        src: t,
        width: n,
        height: r,
        maxWidth: I,
        maxHeight: h,
        renderLinkComponent: l,
        volume: E.FC,
        autoMute: E.rs,
        onVolumeChange: E.jA,
        onMute: E.Zj,
        autoPlay: !e,
        onContextMenu: O,
        ...d
      }, t)
    }), !u && l({
      href: t,
      target: "_blank",
      rel: "noreferrer noopener",
      className: N.downloadLink,
      children: f.Z.Messages.OPEN_IN_BROWSER
    })]
  })
}