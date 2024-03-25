"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  r = n("146606"),
  i = n("230606");
let l = () => {
  let e = a.useRef(null),
    [t, n] = a.useState(0),
    s = a.useMemo(() => new i.default(e => {
      let [t] = e;
      return n(t.contentRect.height)
    }), []);
  return a.useLayoutEffect(() => (null != e.current && s.observe(e.current), () => s.disconnect()), [s]), {
    ref: e,
    height: t
  }
};

function o(e) {
  let {
    show: t,
    children: n,
    top: a = 0,
    bottom: i = 0
  } = e, {
    ref: o,
    height: u
  } = l(), d = (0, r.useSpring)({
    from: {
      height: 0,
      paddingBottom: "0px",
      marginTop: "0px"
    },
    to: {
      height: t ? u : 0,
      paddingBottom: t ? "".concat(i, "px") : "0px",
      marginTop: t ? "".concat(a, "px") : "0px"
    },
    config: {
      tension: 170,
      friction: 26
    }
  }), c = (0, r.useSpring)({
    from: {
      opacity: 0
    },
    to: {
      opacity: t ? 1 : 0
    },
    config: {
      duration: 200,
      easing: t ? e => e ** 4 : e => e * (2 - e)
    }
  });
  return (0, s.jsx)(r.animated.div, {
    style: {
      overflow: "hidden",
      height: d.height,
      paddingBottom: d.paddingBottom,
      marginTop: d.marginTop
    },
    children: (0, s.jsx)(r.animated.div, {
      style: {
        opacity: c.opacity
      },
      ref: o,
      children: n
    })
  })
}