"use strict";
n.d(t, {
  J: function() {
    return N
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
  f = n(981631),
  S = n(972216);

function A(e) {
  let {
    url: t,
    className: n,
    style: s,
    onLoad: o,
    shouldRefocus: S,
    queryParams: A,
    allowPopups: N = !1,
    referrerPolicy: m = "origin"
  } = e, O = (0, u.e7)([_.Z], () => _.Z.getWindow(f.KJ3.CHANNEL_CALL_POPOUT)), p = (0, a.useMemoOne)(() => (0, l.Z)(), [t]), R = r.useRef(null), g = (0, I.Z)(R, S, null == O ? window : O), C = {
    ...A,
    frame_id: p,
    platform: h.S4.DESKTOP
  }, [v, L] = r.useState(!1), D = d.Z.theme, M = {
    ...s
  };
  return D === f.BRd.LIGHT ? M.colorScheme = "light" : M.colorScheme = "dark", r.useEffect(() => (E.S.dispatch(f.CkL.IFRAME_MOUNT, {
    id: p
  }), () => {
    E.S.dispatch(f.CkL.IFRAME_UNMOUNT, {
      id: p
    })
  }), [p]), r.useEffect(() => {
    let e = e => {
      let {
        resizing: t
      } = e;
      L(t)
    };
    return E.S.subscribe(f.CkL.MANUAL_IFRAME_RESIZING, e), () => {
      E.S.unsubscribe(f.CkL.MANUAL_IFRAME_RESIZING, e)
    }
  }, []), v && (M.pointerEvents = "none"), null != t ? (0, i.jsx)("iframe", {
    style: M,
    allow: "autoplay; encrypted-media",
    referrerPolicy: m,
    onLoad: function(e) {
      var n;
      null == o || o(e.target), R.current = e.target, g(!0), null === (n = e.target.contentWindow) || void 0 === n || n.postMessage([c.Z.HELLO, C], null != t ? t : "")
    },
    sandbox: (0, T.Z)({
      allowPopups: N
    }),
    className: n,
    src: "".concat(t, "?").concat(new URLSearchParams(C))
  }) : null
}

function N(e) {
  let {
    onLoad: t
  } = e, [n, s] = r.useState(!1), a = r.useCallback(e => {
    s(!0), null == t || t(e)
  }, [t]);
  return (0, i.jsxs)("div", {
    className: S.fillParent,
    children: [!n && (0, i.jsx)("div", {
      className: o()(S.fillParent, S.iframePlaceholder)
    }), (0, i.jsx)("div", {
      className: o()(S.fillParent, n ? void 0 : S.hiddenIframeContainer),
      children: (0, i.jsx)(A, {
        ...e,
        onLoad: a
      })
    })]
  })
}