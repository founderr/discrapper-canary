i.r(t), i.d(t, {
  default: function() {
    return l
  }
}), i(47120);
var n = i(735250),
  r = i(470079),
  s = i(481060),
  a = i(44315),
  o = i(745510),
  d = i(981631),
  u = i(689938),
  c = i(478649);

function l(e) {
  let {
    onClose: t,
    initialPercent: i,
    numActions: l
  } = e, [h, m] = r.useState(i), {
    createMultipleConfetti: p
  } = r.useContext(o.h);
  return r.useEffect(() => {
    setTimeout(() => m(1), 200), setTimeout(() => {
      let e = window.innerWidth / 2,
        t = window.innerHeight / 2;
      p({
        position: {
          type: "static-random",
          minValue: {
            x: e - 5,
            y: t - 5
          },
          maxValue: {
            x: e + 5,
            y: t + 5
          }
        }
      }, 25)
    }, 700), setTimeout(t, 2e3)
  }, [p, t]), (0, n.jsxs)("div", {
    children: [(0, n.jsx)(s.Heading, {
      className: c.heading,
      variant: "heading-xl/semibold",
      color: "header-primary",
      children: u.Z.Messages.MEMBER_ACTION_COMPLETE_MODAL_TEXT_WITH_COUNT.format({
        count: l
      })
    }), (0, n.jsx)(s.Progress, {
      foregroundGradientColor: [(0, a.Lq)(d.Ilk.GREEN_300), (0, a.Lq)(d.Ilk.GREEN_230)],
      percent: 100 * h,
      animate: !0
    })]
  })
}