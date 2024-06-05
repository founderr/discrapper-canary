"use strict";
l.r(a), l.d(a, {
  FakeActivityCharacter: function() {
    return t
  }
}), l("47120");
var t, i, r = l("735250"),
  n = l("470079"),
  s = l("120356"),
  o = l.n(s),
  u = l("920906"),
  d = l("481060"),
  c = l("607070"),
  f = l("659101"),
  m = l("689938"),
  v = l("427503"),
  p = l("508840"),
  g = l("576909");
(i = t || (t = {}))[i.WUMPUS = 0] = "WUMPUS", i[i.PHIBI = 1] = "PHIBI";
let h = {
  0: v.activityCharacterWumpus,
  1: v.activityCharacterPhibi
};
a.default = n.memo(function(e) {
  let {
    activityName: a,
    activityCharacter: l = 0,
    showExampleButton: t = !1
  } = e, [i, s] = n.useState(0), [S, I] = (0, u.useSpring)(() => ({
    from: {
      rotate: "0deg"
    },
    config: {
      tension: 1e3,
      friction: 5
    }
  })), T = n.useRef({
    seconds: i,
    jitter: async () => {
      for (;;) {
        var e;
        let a = (e = T.current.seconds, c.default.useReducedMotion ? 0 : Math.min(10, (e -= 5399) / 300 * 10));
        I({
          rotate: "-".concat(a, "deg")
        }), await new Promise(e => setTimeout(e, 80)), I({
          rotate: "".concat(a, "deg")
        }), await new Promise(e => setTimeout(e, 80))
      }
    }
  });
  return n.useEffect(() => void(T.current.seconds = i)), n.useEffect(() => {
    let e = setInterval(() => {
      s(e => (5399 === e && T.current.jitter(), ++e))
    }, 1e3);
    return () => clearInterval(e)
  }, []), (0, r.jsxs)(f.default, {
    lastSection: !0,
    "aria-hidden": !0,
    children: [(0, r.jsx)(d.Heading, {
      className: v.fakeActivityTitle,
      variant: "eyebrow",
      children: m.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_TITLE
    }), (0, r.jsxs)("div", {
      className: v.fakeActivityLayout,
      children: [(0, r.jsx)("div", {
        className: o()(v.fakeActivityIcon, h[l]),
        children: (0, r.jsx)(u.animated.img, {
          className: v.fakeActivityPencil,
          src: 0 === l ? g : p,
          style: S
        })
      }), (0, r.jsxs)("div", {
        className: v.fakeActivityContent,
        children: [(0, r.jsx)(d.Text, {
          variant: "text-sm/semibold",
          children: null != a ? a : m.default.Messages.USER_SETTINGS_USER_PROFILE
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: m.default.Messages.PROFILE_CUSTOMIZATION_ACTIVITY_TIME.format({
            renderTimeHook(e, a) {
              let l = i % 60,
                t = (i - l) / 60;
              return (0, r.jsxs)("span", {
                className: v.fakeActivityTimeValues,
                children: [t.toString().padStart(2, "0"), ":", l.toString().padStart(2, "0")]
              }, a)
            }
          })
        })]
      })]
    }), t && (0, r.jsx)(d.Button, {
      className: v.button,
      color: v.buttonColor,
      size: d.Button.Sizes.SMALL,
      fullWidth: !0,
      children: m.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON
    })]
  })
})