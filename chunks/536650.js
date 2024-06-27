t.d(n, {
  Z: function() {
    return N
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
  E = t(863747);

function h(e, n, t) {
  return e + (n - e) * t
}

function _(e) {
  let [n, t] = l.useState(void 0);
  return l.useEffect(() => {
    null != e.current && t(getComputedStyle(e.current))
  }, [e]), n
}

function N(e) {
  let {
    application: n,
    scrollerRef: t
  } = e, h = u.ZP.getApplicationIconURL({
    id: n.id,
    icon: n.icon,
    bot: n.bot,
    size: 24
  }), N = (0, r.ap)((0, o.ZP)()), A = l.useRef(null), C = l.useRef(null), f = l.useRef(null), x = (0, s.useToken)(s.tokens.colors.BG_BASE_PRIMARY).hex(), v = (0, c.ZP)("number" == typeof h ? "" : h, null != x ? x : ""), I = l.useMemo(() => {
    var e, n;
    let t = (0, a.compact)([d.Z.parseHexString(v), d.Z.parseHexString(N ? "#000000" : "#ffffff")]);
    return null !== (n = null === (e = (0, m.k8)({
      colors: t,
      ratio: 5,
      saturationFactor: .6
    })) || void 0 === e ? void 0 : e.toHexString()) && void 0 !== n ? n : v
  }, [v, N]), g = _(A), P = _(C), T = l.useCallback(() => {
    var e, n, i, l, r, s, o, c, u;
    let d = t.current,
      m = A.current,
      p = f.current,
      E = parseInt(null !== (e = null == g ? void 0 : g.height) && void 0 !== e ? e : ""),
      h = parseInt(null !== (n = null == P ? void 0 : P.height) && void 0 !== n ? n : "");
    if (null != d && null != m && null != p && !isNaN(E) && !isNaN(h)) {
      ;
      let e = null !== (i = d.scrollTop) && void 0 !== i ? i : 0,
        n = 0 !== d.scrollHeight ? d.scrollHeight : h + 20,
        t = 0 !== d.clientHeight ? d.clientHeight : h + 20,
        _ = h - E,
        A = (0, a.clamp)(n - t, _ + 1, h + 20);
      let C = (l = e, (r = _) === (s = A) ? 1 : (0, a.clamp)((l - r) / (s - r), 0, 1));
      m.style.filter = "brightness(".concat(1 + ((N ? 1.4 : .6) - (o = 1)) * C, ")"), m.style.backgroundColor = "color-mix(in oklab,".concat(v, " ").concat((1 - C) * 100, "%, ").concat(I, ")"), p.style.opacity = "".concat(0 + (1 - (c = 0)) * C), p.style.transform = "translateY(".concat((u = E / 4) + (0 - u) * C, "px)")
    }
  }, [I, v, null == P ? void 0 : P.height, N, t, null == g ? void 0 : g.height]);
  return l.useEffect(() => {
    T()
  }, [T, N]), l.useEffect(() => {
    let e = t.current,
      n = () => {
        T()
      };
    return null == e || e.addEventListener("scroll", n), () => {
      null == e || e.removeEventListener("scroll", n)
    }
  }, [t, T]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: E.stickyContainer,
      children: [(0, i.jsx)("div", {
        className: E.stickyBannerContainer,
        children: (0, i.jsx)("div", {
          className: E.stickyBanner,
          ref: A
        })
      }), (0, i.jsx)("div", {
        className: E.backButtonContainer,
        children: (0, i.jsx)(p.Z, {})
      }), (0, i.jsx)("div", {
        className: E.nameContainer,
        children: (0, i.jsx)(s.Heading, {
          ref: f,
          className: E.textApplicationName,
          variant: "heading-md/extrabold",
          children: n.name
        })
      })]
    }), (0, i.jsx)("div", {
      ref: C,
      className: E.bannerBackground,
      style: {
        backgroundColor: v
      }
    })]
  })
}