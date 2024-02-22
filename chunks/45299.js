"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("222007");
var n = s("37983"),
  l = s("884691"),
  o = s("907002"),
  r = s("669491"),
  a = s("77078"),
  i = s("659500"),
  u = s("49111"),
  c = s("782340"),
  d = s("645780"),
  E = function(e) {
    var t;
    let {
      message: s,
      errorMessage: E,
      submitting: f,
      onReset: C,
      onSave: _,
      onSaveText: h,
      onResetText: I,
      onSaveButtonColor: N,
      disabled: p,
      saveButtonTooltip: g
    } = e, R = l.useRef(null), [{
      spring: T
    }, m] = (0, o.useSpring)(() => ({
      spring: 0
    }));
    l.useEffect(() => {
      function e() {
        m({
          spring: 1,
          config: o.config.gentle
        }), m({
          spring: 0,
          config: o.config.gentle,
          delay: 1e3
        })
      }
      return i.ComponentDispatch.subscribe(u.ComponentActions.EMPHASIZE_NOTICE, e), () => {
        i.ComponentDispatch.unsubscribe(u.ComponentActions.EMPHASIZE_NOTICE, e)
      }
    }, [m]);
    let L = T.to({
        range: [0, 1],
        output: [(0, a.useToken)(r.default.colors.TEXT_NORMAL).hex(), (0, a.useToken)(r.default.unsafe_rawColors.WHITE_500).hex()]
      }),
      x = T.to({
        range: [0, 1],
        output: [(0, a.useToken)(r.default.colors.BACKGROUND_FLOATING).hex(), (0, a.useToken)(r.default.colors.STATUS_DANGER).hex()]
      }),
      v = T.to({
        range: [0, 1],
        output: [(0, a.useToken)(r.default.colors.TEXT_DANGER).hex(), (0, a.useToken)(r.default.unsafe_rawColors.WHITE_500).hex()]
      });
    return (0, n.jsx)(o.animated.div, {
      className: d.container,
      style: {
        backgroundColor: x
      },
      children: (0, n.jsx)("div", {
        className: d.flexContainer,
        ref: R,
        children: (0, n.jsxs)(a.FocusRingScope, {
          containerRef: R,
          children: [(0, n.jsx)("div", {
            className: d.shrinkingContainer,
            children: (0, n.jsx)(o.animated.div, {
              className: d.message,
              style: {
                color: null != E ? v : L
              },
              children: null !== (t = null != E ? E : s) && void 0 !== t ? t : c.default.Messages.SETTINGS_NOTICE_MESSAGE
            })
          }), (0, n.jsxs)("div", {
            className: d.actions,
            children: [null != C && (0, n.jsx)(a.Button, {
              className: d.resetButton,
              size: a.Button.Sizes.SMALL,
              color: a.Button.Colors.PRIMARY,
              look: a.Button.Looks.LINK,
              onClick: C,
              children: (0, n.jsx)(o.animated.span, {
                style: {
                  color: L
                },
                children: null != I ? I : c.default.Messages.RESET
              })
            }), null != _ ? (0, n.jsx)(a.Tooltip, {
              text: g,
              children: e => (0, n.jsx)(a.Button, {
                size: a.Button.Sizes.SMALL,
                color: null != N ? N : a.Button.Colors.GREEN,
                submitting: f,
                disabled: p,
                onClick: _,
                ...e,
                children: null != h ? h : c.default.Messages.SAVE_CHANGES
              })
            }) : null]
          })]
        })
      })
    })
  }