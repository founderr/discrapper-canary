"use strict";
s.r(t), s("47120");
var l = s("735250"),
  a = s("470079"),
  n = s("920906"),
  i = s("692547"),
  r = s("481060"),
  o = s("585483"),
  d = s("981631"),
  u = s("689938"),
  c = s("653919");
t.default = function(e) {
  var t;
  let {
    message: s,
    errorMessage: h,
    submitting: m,
    onReset: E,
    onSave: f,
    onSaveText: g,
    onResetText: S,
    onSaveButtonColor: T,
    disabled: N,
    saveButtonTooltip: _
  } = e, p = a.useRef(null), [{
    spring: C
  }, x] = (0, n.useSpring)(() => ({
    spring: 0
  }));
  a.useEffect(() => {
    function e() {
      x({
        spring: 1,
        config: n.config.gentle
      }), x({
        spring: 0,
        config: n.config.gentle,
        delay: 1e3
      })
    }
    return o.ComponentDispatch.subscribe(d.ComponentActions.EMPHASIZE_NOTICE, e), () => {
      o.ComponentDispatch.unsubscribe(d.ComponentActions.EMPHASIZE_NOTICE, e)
    }
  }, [x]);
  let M = C.to({
      range: [0, 1],
      output: [(0, r.useToken)(i.default.colors.TEXT_NORMAL).hex(), (0, r.useToken)(i.default.unsafe_rawColors.WHITE_500).hex()]
    }),
    I = C.to({
      range: [0, 1],
      output: [(0, r.useToken)(i.default.colors.BACKGROUND_FLOATING).hex(), (0, r.useToken)(i.default.colors.STATUS_DANGER).hex()]
    }),
    R = C.to({
      range: [0, 1],
      output: [(0, r.useToken)(i.default.colors.TEXT_DANGER).hex(), (0, r.useToken)(i.default.unsafe_rawColors.WHITE_500).hex()]
    });
  return (0, l.jsx)(n.animated.div, {
    className: c.container,
    style: {
      backgroundColor: I
    },
    children: (0, l.jsx)("div", {
      className: c.flexContainer,
      ref: p,
      children: (0, l.jsxs)(r.FocusRingScope, {
        containerRef: p,
        children: [(0, l.jsx)("div", {
          className: c.shrinkingContainer,
          children: (0, l.jsx)(n.animated.div, {
            className: c.message,
            style: {
              color: null != h ? R : M
            },
            children: null !== (t = null != h ? h : s) && void 0 !== t ? t : u.default.Messages.SETTINGS_NOTICE_MESSAGE
          })
        }), (0, l.jsxs)("div", {
          className: c.actions,
          children: [null != E && (0, l.jsx)(r.Button, {
            className: c.resetButton,
            size: r.Button.Sizes.SMALL,
            color: r.Button.Colors.PRIMARY,
            look: r.Button.Looks.LINK,
            onClick: E,
            children: (0, l.jsx)(n.animated.span, {
              style: {
                color: M
              },
              children: null != S ? S : u.default.Messages.RESET
            })
          }), null != f ? (0, l.jsx)(r.Tooltip, {
            text: _,
            children: e => (0, l.jsx)(r.Button, {
              size: r.Button.Sizes.SMALL,
              color: null != T ? T : r.Button.Colors.GREEN,
              submitting: m,
              disabled: N,
              onClick: f,
              ...e,
              children: null != g ? g : u.default.Messages.SAVE_CHANGES
            })
          }) : null]
        })]
      })
    })
  })
}