"use strict";
l.r(t), l("47120");
var s = l("735250"),
  a = l("470079"),
  n = l("920906"),
  i = l("692547"),
  r = l("481060"),
  o = l("585483"),
  d = l("981631"),
  u = l("689938"),
  c = l("653919");
t.default = function(e) {
  var t;
  let {
    message: l,
    errorMessage: h,
    submitting: m,
    onReset: f,
    onSave: E,
    onSaveText: g,
    onResetText: S,
    onSaveButtonColor: T,
    disabled: N,
    saveButtonTooltip: p
  } = e, C = a.useRef(null), [{
    spring: _
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
  let M = _.to({
      range: [0, 1],
      output: [(0, r.useToken)(i.default.colors.TEXT_NORMAL).hex(), (0, r.useToken)(i.default.unsafe_rawColors.WHITE_500).hex()]
    }),
    I = _.to({
      range: [0, 1],
      output: [(0, r.useToken)(i.default.colors.BACKGROUND_FLOATING).hex(), (0, r.useToken)(i.default.colors.STATUS_DANGER).hex()]
    }),
    R = _.to({
      range: [0, 1],
      output: [(0, r.useToken)(i.default.colors.TEXT_DANGER).hex(), (0, r.useToken)(i.default.unsafe_rawColors.WHITE_500).hex()]
    });
  return (0, s.jsx)(n.animated.div, {
    className: c.container,
    style: {
      backgroundColor: I
    },
    children: (0, s.jsx)("div", {
      className: c.flexContainer,
      ref: C,
      children: (0, s.jsxs)(r.FocusRingScope, {
        containerRef: C,
        children: [(0, s.jsx)("div", {
          className: c.shrinkingContainer,
          children: (0, s.jsx)(n.animated.div, {
            className: c.message,
            style: {
              color: null != h ? R : M
            },
            children: null !== (t = null != h ? h : l) && void 0 !== t ? t : u.default.Messages.SETTINGS_NOTICE_MESSAGE
          })
        }), (0, s.jsxs)("div", {
          className: c.actions,
          children: [null != f && (0, s.jsx)(r.Button, {
            className: c.resetButton,
            size: r.Button.Sizes.SMALL,
            color: r.Button.Colors.PRIMARY,
            look: r.Button.Looks.LINK,
            onClick: f,
            children: (0, s.jsx)(n.animated.span, {
              style: {
                color: M
              },
              children: null != S ? S : u.default.Messages.RESET
            })
          }), null != E ? (0, s.jsx)(r.Tooltip, {
            text: p,
            children: e => (0, s.jsx)(r.Button, {
              size: r.Button.Sizes.SMALL,
              color: null != T ? T : r.Button.Colors.GREEN,
              submitting: m,
              disabled: N,
              onClick: E,
              ...e,
              children: null != g ? g : u.default.Messages.SAVE_CHANGES
            })
          }) : null]
        })]
      })
    })
  })
}