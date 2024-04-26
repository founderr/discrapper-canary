"use strict";
t.r(a), t.d(a, {
  FakeActivityCharacter: function() {
    return l
  }
}), t("47120");
var l, n, i = t("735250"),
  r = t("470079"),
  s = t("120356"),
  o = t.n(s),
  u = t("718017"),
  d = t("481060"),
  c = t("607070"),
  f = t("659101"),
  m = t("689938"),
  v = t("609135"),
  g = t("508840"),
  h = t("576909");
(n = l || (l = {}))[n.WUMPUS = 0] = "WUMPUS", n[n.PHIBI = 1] = "PHIBI";
let S = {
  0: v.activityCharacterWumpus,
  1: v.activityCharacterPhibi
};
a.default = r.memo(function(e) {
  let {
    activityName: a,
    activityCharacter: t = 0,
    showExampleButton: l = !1
  } = e, [n, s] = r.useState(0), [C, p] = (0, u.useSpring)(() => ({
    from: {
      rotate: "0deg"
    },
    config: {
      tension: 1e3,
      friction: 5
    }
  })), I = r.useRef({
    seconds: n,
    jitter: async () => {
      for (;;) {
        var e;
        let a = (e = I.current.seconds, c.default.useReducedMotion ? 0 : Math.min(10, (e -= 5399) / 300 * 10));
        p({
          rotate: "-".concat(a, "deg")
        }), await new Promise(e => setTimeout(e, 80)), p({
          rotate: "".concat(a, "deg")
        }), await new Promise(e => setTimeout(e, 80))
      }
    }
  });
  return r.useEffect(() => void(I.current.seconds = n)), r.useEffect(() => {
    let e = setInterval(() => {
      s(e => (5399 === e && I.current.jitter(), ++e))
    }, 1e3);
    return () => clearInterval(e)
  }, []), (0, i.jsxs)(f.default, {
    lastSection: !0,
    "aria-hidden": !0,
    children: [(0, i.jsx)(d.Heading, {
      className: v.fakeActivityTitle,
      variant: "eyebrow",
      children: m.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_TITLE
    }), (0, i.jsxs)("div", {
      className: v.fakeActivityLayout,
      children: [(0, i.jsx)("div", {
        className: o()(v.fakeActivityIcon, S[t]),
        children: (0, i.jsx)(u.animated.img, {
          className: v.fakeActivityPencil,
          src: 0 === t ? h : g,
          style: C
        })
      }), (0, i.jsxs)("div", {
        className: v.fakeActivityContent,
        children: [(0, i.jsx)(d.Text, {
          variant: "text-sm/semibold",
          children: null != a ? a : m.default.Messages.USER_SETTINGS_USER_PROFILE
        }), (0, i.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: m.default.Messages.PROFILE_CUSTOMIZATION_ACTIVITY_TIME.format({
            renderTimeHook(e, a) {
              let t = n % 60,
                l = (n - t) / 60;
              return (0, i.jsxs)("span", {
                className: v.fakeActivityTimeValues,
                children: [l.toString().padStart(2, "0"), ":", t.toString().padStart(2, "0")]
              }, a)
            }
          })
        })]
      })]
    }), l && (0, i.jsx)(d.Button, {
      className: v.button,
      color: v.buttonColor,
      size: d.Button.Sizes.SMALL,
      fullWidth: !0,
      children: m.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON
    })]
  })
})