t.d(n, {
  Z: function() {
    return E
  }
}), t(47120);
var i = t(735250),
  l = t(470079),
  a = t(392711),
  r = t(780384),
  s = t(481060),
  o = t(410030),
  c = t(220082),
  u = t(768581),
  d = t(564334),
  m = t(302221),
  p = t(772606),
  h = t(863747);

function N(e, n, t) {
  return e + (n - e) * t
}

function _(e) {
  let [n, t] = l.useState(void 0);
  return l.useEffect(() => {
    null != e.current && t(getComputedStyle(e.current))
  }, [e]), n
}

function E(e) {
  let {
    application: n,
    scrollerRef: t
  } = e, N = u.ZP.getApplicationIconURL({
    id: n.id,
    icon: n.icon,
    bot: n.bot,
    size: 24
  }), E = (0, r.ap)((0, o.ZP)()), C = l.useRef(null), A = l.useRef(null), f = l.useRef(null), x = (0, s.useToken)(s.tokens.colors.BG_BASE_PRIMARY).hex(), v = (0, c.ZP)("number" == typeof N ? "" : N, null != x ? x : ""), I = l.useMemo(() => {
    var e, n;
    let t = (0, a.compact)([d.Z.parseHexString(v), d.Z.parseHexString(E ? "#000000" : "#ffffff")]);
    return null !== (n = null === (e = (0, m.k8)({
      colors: t,
      ratio: 5,
      saturationFactor: .6
    })) || void 0 === e ? void 0 : e.toHexString()) && void 0 !== n ? n : v
  }, [v, E]), g = _(C), P = _(A), T = l.useCallback(() => {
    var e, n, i, l, r, s, o, c, u;
    let d = t.current,
      m = C.current,
      p = f.current,
      h = parseInt(null !== (e = null == g ? void 0 : g.height) && void 0 !== e ? e : ""),
      N = parseInt(null !== (n = null == P ? void 0 : P.height) && void 0 !== n ? n : "");
    if (null != d && null != m && null != p && !isNaN(h) && !isNaN(N)) {
      ;
      let e = null !== (i = d.scrollTop) && void 0 !== i ? i : 0,
        n = 0 !== d.scrollHeight ? d.scrollHeight : N + 20,
        t = 0 !== d.clientHeight ? d.clientHeight : N + 20,
        _ = N - h,
        C = (0, a.clamp)(n - t, _ + 1, N + 20);
      let A = (l = e, (r = _) === (s = C) ? 1 : (0, a.clamp)((l - r) / (s - r), 0, 1));
      m.style.filter = "brightness(".concat(1 + ((E ? 1.4 : .6) - (o = 1)) * A, ")"), m.style.backgroundColor = "color-mix(in oklab,".concat(v, " ").concat((1 - A) * 100, "%, ").concat(I, ")"), p.style.opacity = "".concat(0 + (1 - (c = 0)) * A), p.style.transform = "translateY(".concat((u = h / 4) + (0 - u) * A, "px)")
    }
  }, [I, v, null == P ? void 0 : P.height, E, t, null == g ? void 0 : g.height]);
  return l.useEffect(() => {
    T()
  }, [T, E]), l.useEffect(() => {
    let e = t.current,
      n = () => {
        T()
      };
    return null == e || e.addEventListener("scroll", n), () => {
      null == e || e.removeEventListener("scroll", n)
    }
  }, [t, T]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: h.stickyContainer,
      children: [(0, i.jsx)("div", {
        className: h.stickyBannerContainer,
        children: (0, i.jsx)("div", {
          className: h.stickyBanner,
          ref: C
        })
      }), (0, i.jsx)("div", {
        className: h.backButtonContainer,
        children: (0, i.jsx)(p.Z, {})
      }), (0, i.jsx)("div", {
        className: h.nameContainer,
        children: (0, i.jsx)(s.Heading, {
          ref: f,
          className: h.textApplicationName,
          variant: "heading-md/extrabold",
          children: n.name
        })
      })]
    }), (0, i.jsx)("div", {
      ref: A,
      className: h.bannerBackground,
      style: {
        backgroundColor: v
      }
    })]
  })
}