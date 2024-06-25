t(47120);
var r = t(735250),
  o = t(470079),
  s = t(920906),
  l = t(692547),
  a = t(481060),
  i = t(585483),
  u = t(981631),
  c = t(689938),
  d = t(252013);
n.Z = function(e) {
  var n;
  let {
    message: t,
    errorMessage: h,
    submitting: E,
    onReset: m,
    onSave: x,
    onSaveText: f,
    onResetText: N,
    onSaveButtonColor: _,
    disabled: p,
    saveButtonTooltip: C
  } = e, I = o.useRef(null), [{
    spring: T
  }, g] = (0, s.useSpring)(() => ({
    spring: 0
  }));
  o.useEffect(() => {
    function e() {
      g({
        spring: 1,
        config: s.config.gentle
      }), g({
        spring: 0,
        config: s.config.gentle,
        delay: 1e3
      })
    }
    return i.S.subscribe(u.CkL.EMPHASIZE_NOTICE, e), () => {
      i.S.unsubscribe(u.CkL.EMPHASIZE_NOTICE, e)
    }
  }, [g]);
  let R = T.to({
      range: [0, 1],
      output: [(0, a.useToken)(l.Z.colors.TEXT_NORMAL).hex(), (0, a.useToken)(l.Z.unsafe_rawColors.WHITE_500).hex()]
    }),
    v = T.to({
      range: [0, 1],
      output: [(0, a.useToken)(l.Z.colors.BACKGROUND_FLOATING).hex(), (0, a.useToken)(l.Z.colors.STATUS_DANGER).hex()]
    }),
    j = T.to({
      range: [0, 1],
      output: [(0, a.useToken)(l.Z.colors.TEXT_DANGER).hex(), (0, a.useToken)(l.Z.unsafe_rawColors.WHITE_500).hex()]
    });
  return (0, r.jsx)(s.animated.div, {
    className: d.container,
    style: {
      backgroundColor: v
    },
    children: (0, r.jsx)("div", {
      className: d.flexContainer,
      ref: I,
      children: (0, r.jsxs)(a.FocusRingScope, {
        containerRef: I,
        children: [(0, r.jsx)("div", {
          className: d.shrinkingContainer,
          children: (0, r.jsx)(s.animated.div, {
            className: d.message,
            style: {
              color: null != h ? j : R
            },
            children: null !== (n = null != h ? h : t) && void 0 !== n ? n : c.Z.Messages.SETTINGS_NOTICE_MESSAGE
          })
        }), (0, r.jsxs)("div", {
          className: d.actions,
          children: [null != m && (0, r.jsx)(a.Button, {
            className: d.resetButton,
            size: a.Button.Sizes.SMALL,
            color: a.Button.Colors.PRIMARY,
            look: a.Button.Looks.LINK,
            onClick: m,
            children: (0, r.jsx)(s.animated.span, {
              style: {
                color: R
              },
              children: null != N ? N : c.Z.Messages.RESET
            })
          }), null != x ? (0, r.jsx)(a.Tooltip, {
            text: C,
            children: e => (0, r.jsx)(a.Button, {
              size: a.Button.Sizes.SMALL,
              color: null != _ ? _ : a.Button.Colors.GREEN,
              submitting: E,
              disabled: p,
              onClick: x,
              ...e,
              children: null != f ? f : c.Z.Messages.SAVE_CHANGES
            })
          }) : null]
        })]
      })
    })
  })
}