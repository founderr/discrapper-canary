"use strict";
t.r(a), t.d(a, {
  FakeActivityCharacter: function() {
    return l
  }
}), t("47120");
var l, i, r = t("735250"),
  n = t("470079"),
  s = t("120356"),
  o = t.n(s),
  u = t("920906"),
  d = t("481060"),
  c = t("607070"),
  f = t("659101"),
  m = t("689938"),
  v = t("427503"),
  p = t("508840"),
  g = t("576909");
(i = l || (l = {}))[i.WUMPUS = 0] = "WUMPUS", i[i.PHIBI = 1] = "PHIBI";
let h = {
  0: v.activityCharacterWumpus,
  1: v.activityCharacterPhibi
};
a.default = n.memo(function(e) {
  let {
    activityName: a,
    activityCharacter: t = 0,
    showExampleButton: l = !1
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
        className: o()(v.fakeActivityIcon, h[t]),
        children: (0, r.jsx)(u.animated.img, {
          className: v.fakeActivityPencil,
          src: 0 === t ? g : p,
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
              let t = i % 60,
                l = (i - t) / 60;
              return (0, r.jsxs)("span", {
                className: v.fakeActivityTimeValues,
                children: [l.toString().padStart(2, "0"), ":", t.toString().padStart(2, "0")]
              }, a)
            }
          })
        })]
      })]
    }), l && (0, r.jsx)(d.Button, {
      className: v.button,
      color: v.buttonColor,
      size: d.Button.Sizes.SMALL,
      fullWidth: !0,
      children: m.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON
    })]
  })
})