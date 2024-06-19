i.d(a, {
  m: function() {
    return n
  }
}), i(47120);
var n, l, r = i(735250),
  t = i(470079),
  s = i(120356),
  o = i.n(s),
  u = i(920906),
  d = i(481060),
  c = i(607070),
  v = i(659101),
  m = i(689938),
  f = i(69094),
  p = i(508840),
  h = i(576909);
(l = n || (n = {}))[l.WUMPUS = 0] = "WUMPUS", l[l.PHIBI = 1] = "PHIBI";
let g = {
  0: f.activityCharacterWumpus,
  1: f.activityCharacterPhibi
};
a.Z = t.memo(function(e) {
  let {
    activityName: a,
    activityCharacter: i = 0,
    showExampleButton: n = !1
  } = e, [l, s] = t.useState(0), [I, Z] = (0, u.useSpring)(() => ({
    from: {
      rotate: "0deg"
    },
    config: {
      tension: 1e3,
      friction: 5
    }
  })), x = t.useRef({
    seconds: l,
    jitter: async () => {
      for (;;) {
        var e;
        let a = (e = x.current.seconds, c.Z.useReducedMotion ? 0 : Math.min(10, (e -= 5399) / 300 * 10));
        Z({
          rotate: "-".concat(a, "deg")
        }), await new Promise(e => setTimeout(e, 80)), Z({
          rotate: "".concat(a, "deg")
        }), await new Promise(e => setTimeout(e, 80))
      }
    }
  });
  return t.useEffect(() => void(x.current.seconds = l)), t.useEffect(() => {
    let e = setInterval(() => {
      s(e => (5399 === e && x.current.jitter(), ++e))
    }, 1e3);
    return () => clearInterval(e)
  }, []), (0, r.jsxs)(v.Z, {
    lastSection: !0,
    "aria-hidden": !0,
    children: [(0, r.jsx)(d.Heading, {
      className: f.fakeActivityTitle,
      variant: "eyebrow",
      children: m.Z.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_TITLE
    }), (0, r.jsxs)("div", {
      className: f.fakeActivityLayout,
      children: [(0, r.jsx)("div", {
        className: o()(f.fakeActivityIcon, g[i]),
        children: (0, r.jsx)(u.animated.img, {
          className: f.fakeActivityPencil,
          src: 0 === i ? h : p,
          style: I
        })
      }), (0, r.jsxs)("div", {
        className: f.fakeActivityContent,
        children: [(0, r.jsx)(d.Text, {
          variant: "text-sm/semibold",
          children: null != a ? a : m.Z.Messages.USER_SETTINGS_USER_PROFILE
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: m.Z.Messages.PROFILE_CUSTOMIZATION_ACTIVITY_TIME.format({
            renderTimeHook(e, a) {
              let i = l % 60,
                n = (l - i) / 60;
              return (0, r.jsxs)("span", {
                className: f.fakeActivityTimeValues,
                children: [n.toString().padStart(2, "0"), ":", i.toString().padStart(2, "0")]
              }, a)
            }
          })
        })]
      })]
    }), n && (0, r.jsx)(d.Button, {
      className: f.button,
      color: f.buttonColor,
      size: d.Button.Sizes.SMALL,
      fullWidth: !0,
      children: m.Z.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON
    })]
  })
})