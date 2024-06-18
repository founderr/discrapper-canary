"use strict";
n.d(t, {
  J: function() {
    return A
  }
}), n(47120), n(610138), n(216116), n(78328), n(815648);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(482033),
  l = n(772848),
  u = n(442837),
  _ = n(928518),
  c = n(631467),
  d = n(210887),
  E = n(585483),
  I = n(53289),
  T = n(953101),
  h = n(701488),
  S = n(981631),
  f = n(972216);

function N(e) {
  let {
    url: t,
    className: n,
    style: s,
    onLoad: o,
    shouldRefocus: f,
    queryParams: N,
    allowPopups: A = !1,
    referrerPolicy: m = "origin"
  } = e, O = (0, u.e7)([_.Z], () => _.Z.getWindow(S.KJ3.CHANNEL_CALL_POPOUT)), R = (0, a.useMemoOne)(() => (0, l.Z)(), [t]), p = r.useRef(null), g = (0, I.Z)(p, f, null == O ? window : O), C = {
    ...N,
    frame_id: R,
    platform: h.S4.DESKTOP
  }, [v, L] = r.useState(!1), D = d.Z.theme, M = {
    ...s
  };
  return D === S.BRd.LIGHT ? M.colorScheme = "light" : M.colorScheme = "dark", r.useEffect(() => (E.S.dispatch(S.CkL.IFRAME_MOUNT, {
    id: R
  }), () => {
    E.S.dispatch(S.CkL.IFRAME_UNMOUNT, {
      id: R
    })
  }), [R]), r.useEffect(() => {
    let e = e => {
      let {
        resizing: t
      } = e;
      L(t)
    };
    return E.S.subscribe(S.CkL.MANUAL_IFRAME_RESIZING, e), () => {
      E.S.unsubscribe(S.CkL.MANUAL_IFRAME_RESIZING, e)
    }
  }, []), v && (M.pointerEvents = "none"), null != t ? (0, i.jsx)("iframe", {
    style: M,
    allow: "autoplay; encrypted-media",
    referrerPolicy: m,
    onLoad: function(e) {
      var n;
      null == o || o(e.target), p.current = e.target, g(!0), null === (n = e.target.contentWindow) || void 0 === n || n.postMessage([c.Z.HELLO, C], null != t ? t : "")
    },
    sandbox: (0, T.Z)({
      allowPopups: A
    }),
    className: n,
    src: "".concat(t, "?").concat(new URLSearchParams(C))
  }) : null
}

function A(e) {
  let {
    onLoad: t
  } = e, [n, s] = r.useState(!1), a = r.useCallback(e => {
    s(!0), null == t || t(e)
  }, [t]);
  return (0, i.jsxs)("div", {
    className: f.fillParent,
    children: [!n && (0, i.jsx)("div", {
      className: o()(f.fillParent, f.iframePlaceholder)
    }), (0, i.jsx)("div", {
      className: o()(f.fillParent, n ? void 0 : f.hiddenIframeContainer),
      children: (0, i.jsx)(N, {
        ...e,
        onLoad: a
      })
    })]
  })
}