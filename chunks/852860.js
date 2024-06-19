t(47120);
var l = t(735250),
  n = t(470079),
  i = t(920906),
  a = t(692547),
  r = t(481060),
  o = t(585483),
  d = t(981631),
  c = t(689938),
  u = t(252013);
s.Z = function(e) {
  var s;
  let {
    message: t,
    errorMessage: h,
    submitting: m,
    onReset: g,
    onSave: E,
    onSaveText: N,
    onResetText: T,
    onSaveButtonColor: p,
    disabled: S,
    saveButtonTooltip: x
  } = e, M = n.useRef(null), [{
    spring: C
  }, I] = (0, i.useSpring)(() => ({
    spring: 0
  }));
  n.useEffect(() => {
    function e() {
      I({
        spring: 1,
        config: i.config.gentle
      }), I({
        spring: 0,
        config: i.config.gentle,
        delay: 1e3
      })
    }
    return o.S.subscribe(d.CkL.EMPHASIZE_NOTICE, e), () => {
      o.S.unsubscribe(d.CkL.EMPHASIZE_NOTICE, e)
    }
  }, [I]);
  let R = C.to({
      range: [0, 1],
      output: [(0, r.useToken)(a.Z.colors.TEXT_NORMAL).hex(), (0, r.useToken)(a.Z.unsafe_rawColors.WHITE_500).hex()]
    }),
    _ = C.to({
      range: [0, 1],
      output: [(0, r.useToken)(a.Z.colors.BACKGROUND_FLOATING).hex(), (0, r.useToken)(a.Z.colors.STATUS_DANGER).hex()]
    }),
    Z = C.to({
      range: [0, 1],
      output: [(0, r.useToken)(a.Z.colors.TEXT_DANGER).hex(), (0, r.useToken)(a.Z.unsafe_rawColors.WHITE_500).hex()]
    });
  return (0, l.jsx)(i.animated.div, {
    className: u.container,
    style: {
      backgroundColor: _
    },
    children: (0, l.jsx)("div", {
      className: u.flexContainer,
      ref: M,
      children: (0, l.jsxs)(r.FocusRingScope, {
        containerRef: M,
        children: [(0, l.jsx)("div", {
          className: u.shrinkingContainer,
          children: (0, l.jsx)(i.animated.div, {
            className: u.message,
            style: {
              color: null != h ? Z : R
            },
            children: null !== (s = null != h ? h : t) && void 0 !== s ? s : c.Z.Messages.SETTINGS_NOTICE_MESSAGE
          })
        }), (0, l.jsxs)("div", {
          className: u.actions,
          children: [null != g && (0, l.jsx)(r.Button, {
            className: u.resetButton,
            size: r.Button.Sizes.SMALL,
            color: r.Button.Colors.PRIMARY,
            look: r.Button.Looks.LINK,
            onClick: g,
            children: (0, l.jsx)(i.animated.span, {
              style: {
                color: R
              },
              children: null != T ? T : c.Z.Messages.RESET
            })
          }), null != E ? (0, l.jsx)(r.Tooltip, {
            text: x,
            children: e => (0, l.jsx)(r.Button, {
              size: r.Button.Sizes.SMALL,
              color: null != p ? p : r.Button.Colors.GREEN,
              submitting: m,
              disabled: S,
              onClick: E,
              ...e,
              children: null != N ? N : c.Z.Messages.SAVE_CHANGES
            })
          }) : null]
        })]
      })
    })
  })
}