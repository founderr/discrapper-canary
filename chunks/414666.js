"use strict";
l.r(a), l.d(a, {
  FakeActivityCharacter: function() {
    return t
  }
}), l("47120");
var t, i, n = l("735250"),
  r = l("470079"),
  o = l("120356"),
  s = l.n(o),
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
a.default = r.memo(function(e) {
  let {
    activityName: a,
    activityCharacter: l = 0,
    showExampleButton: t = !1
  } = e, [i, o] = r.useState(0), [S, A] = (0, u.useSpring)(() => ({
    from: {
      rotate: "0deg"
    },
    config: {
      tension: 1e3,
      friction: 5
    }
  })), I = r.useRef({
    seconds: i,
    jitter: async () => {
      for (;;) {
        var e;
        let a = (e = I.current.seconds, c.default.useReducedMotion ? 0 : Math.min(10, (e -= 5399) / 300 * 10));
        A({
          rotate: "-".concat(a, "deg")
        }), await new Promise(e => setTimeout(e, 80)), A({
          rotate: "".concat(a, "deg")
        }), await new Promise(e => setTimeout(e, 80))
      }
    }
  });
  return r.useEffect(() => void(I.current.seconds = i)), r.useEffect(() => {
    let e = setInterval(() => {
      o(e => (5399 === e && I.current.jitter(), ++e))
    }, 1e3);
    return () => clearInterval(e)
  }, []), (0, n.jsxs)(f.default, {
    lastSection: !0,
    "aria-hidden": !0,
    children: [(0, n.jsx)(d.Heading, {
      className: v.fakeActivityTitle,
      variant: "eyebrow",
      children: m.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_TITLE
    }), (0, n.jsxs)("div", {
      className: v.fakeActivityLayout,
      children: [(0, n.jsx)("div", {
        className: s()(v.fakeActivityIcon, h[l]),
        children: (0, n.jsx)(u.animated.img, {
          className: v.fakeActivityPencil,
          src: 0 === l ? g : p,
          style: S
        })
      }), (0, n.jsxs)("div", {
        className: v.fakeActivityContent,
        children: [(0, n.jsx)(d.Text, {
          variant: "text-sm/semibold",
          children: null != a ? a : m.default.Messages.USER_SETTINGS_USER_PROFILE
        }), (0, n.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: m.default.Messages.PROFILE_CUSTOMIZATION_ACTIVITY_TIME.format({
            renderTimeHook(e, a) {
              let l = i % 60,
                t = (i - l) / 60;
              return (0, n.jsxs)("span", {
                className: v.fakeActivityTimeValues,
                children: [t.toString().padStart(2, "0"), ":", l.toString().padStart(2, "0")]
              }, a)
            }
          })
        })]
      })]
    }), t && (0, n.jsx)(d.Button, {
      className: v.button,
      color: v.buttonColor,
      size: d.Button.Sizes.SMALL,
      fullWidth: !0,
      children: m.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON
    })]
  })
})