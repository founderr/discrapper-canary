n.d(t, {
  Z: function() {
    return r
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(920906),
  a = n(481060);

function r(e) {
  let {
    children: t,
    className: n,
    flashKey: r
  } = e, o = (0, a.useToken)(a.tokens.colors.BACKGROUND_MESSAGE_HIGHLIGHT).spring({
    opacity: 1
  }), c = (0, a.useToken)(a.tokens.colors.BACKGROUND_MESSAGE_HIGHLIGHT).spring({
    opacity: 0
  }), [u, d] = (0, s.useSpring)(() => ({
    immediate: !0,
    from: {
      backgroundColor: o
    }
  }));
  return i.useEffect(() => {
    d({
      reset: !0,
      immediate: !0,
      to: {
        backgroundColor: o
      }
    }), d({
      delay: 1e3,
      immediate: !1,
      to: {
        backgroundColor: c
      }
    })
  }, [r, d]), (0, l.jsx)(s.animated.div, {
    style: u,
    className: n,
    children: t
  })
}