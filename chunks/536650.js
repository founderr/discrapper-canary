"use strict";
n.d(t, {
  Z: function() {
    return f
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(392711),
  o = n(780384),
  a = n(481060),
  l = n(410030),
  u = n(220082),
  _ = n(768581),
  c = n(564334),
  d = n(302221),
  E = n(772606),
  I = n(863747);

function T(e, t, n) {
  return e + (t - e) * n
}

function h(e) {
  let [t, n] = r.useState(void 0);
  return r.useEffect(() => {
    null != e.current && n(getComputedStyle(e.current))
  }, [e]), t
}

function f(e) {
  let {
    application: t,
    scrollerRef: n
  } = e, T = _.ZP.getApplicationIconURL({
    id: t.id,
    icon: t.icon,
    bot: t.bot,
    size: 24
  }), f = (0, o.ap)((0, l.ZP)()), S = r.useRef(null), N = r.useRef(null), A = r.useRef(null), m = (0, a.useToken)(a.tokens.colors.BG_BASE_PRIMARY).hex(), O = (0, u.ZP)("number" == typeof T ? "" : T, null != m ? m : ""), p = r.useMemo(() => {
    var e, t;
    let n = (0, s.compact)([c.Z.parseHexString(O), c.Z.parseHexString(f ? "#000000" : "#ffffff")]);
    return null !== (t = null === (e = (0, d.k8)({
      colors: n,
      ratio: 5,
      saturationFactor: .6
    })) || void 0 === e ? void 0 : e.toHexString()) && void 0 !== t ? t : O
  }, [O, f]), R = h(S), g = h(N), C = r.useCallback(() => {
    var e, t, i, r, o, a, l, u, _;
    let c = n.current,
      d = S.current,
      E = A.current,
      I = parseInt(null !== (e = null == R ? void 0 : R.height) && void 0 !== e ? e : ""),
      T = parseInt(null !== (t = null == g ? void 0 : g.height) && void 0 !== t ? t : "");
    if (null != c && null != d && null != E && !isNaN(I) && !isNaN(T)) {
      ;
      let e = null !== (i = c.scrollTop) && void 0 !== i ? i : 0,
        t = 0 !== c.scrollHeight ? c.scrollHeight : T + 20,
        n = 0 !== c.clientHeight ? c.clientHeight : T + 20,
        h = T - I,
        S = (0, s.clamp)(t - n, h + 1, T + 20);
      let N = (r = e, (o = h) === (a = S) ? 1 : (0, s.clamp)((r - o) / (a - o), 0, 1));
      d.style.filter = "brightness(".concat(1 + ((f ? 1.4 : .6) - (l = 1)) * N, ")"), d.style.backgroundColor = "color-mix(in oklab,".concat(O, " ").concat((1 - N) * 100, "%, ").concat(p, ")"), E.style.opacity = "".concat(0 + (1 - (u = 0)) * N), E.style.transform = "translateY(".concat((_ = I / 4) + (0 - _) * N, "px)")
    }
  }, [p, O, null == g ? void 0 : g.height, f, n, null == R ? void 0 : R.height]);
  return r.useEffect(() => {
    C()
  }, [C, f]), r.useEffect(() => {
    let e = n.current,
      t = () => {
        C()
      };
    return null == e || e.addEventListener("scroll", t), () => {
      null == e || e.removeEventListener("scroll", t)
    }
  }, [n, C]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: I.stickyContainer,
      children: [(0, i.jsx)("div", {
        className: I.stickyBannerContainer,
        children: (0, i.jsx)("div", {
          className: I.stickyBanner,
          ref: S
        })
      }), (0, i.jsx)("div", {
        className: I.backButtonContainer,
        children: (0, i.jsx)(E.Z, {})
      }), (0, i.jsx)("div", {
        className: I.nameContainer,
        children: (0, i.jsx)(a.Heading, {
          ref: A,
          className: I.textApplicationName,
          variant: "heading-md/extrabold",
          children: t.name
        })
      })]
    }), (0, i.jsx)("div", {
      ref: N,
      className: I.bannerBackground,
      style: {
        backgroundColor: O
      }
    })]
  })
}