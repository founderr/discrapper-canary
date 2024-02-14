"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var r = n("37983"),
  i = n("884691"),
  s = n("907002"),
  a = n("669491"),
  l = n("77078"),
  o = n("659500"),
  u = n("49111"),
  c = n("782340"),
  d = n("645780"),
  f = function(e) {
    var t;
    let {
      message: n,
      errorMessage: f,
      submitting: E,
      onReset: _,
      onSave: T,
      onSaveText: h,
      onResetText: I,
      onSaveButtonColor: S,
      disabled: p,
      saveButtonTooltip: N
    } = e, C = i.useRef(null), [{
      spring: A
    }, v] = (0, s.useSpring)(() => ({
      spring: 0
    }));
    i.useEffect(() => {
      function e() {
        v({
          spring: 1,
          config: s.config.gentle
        }), v({
          spring: 0,
          config: s.config.gentle,
          delay: 1e3
        })
      }
      return o.ComponentDispatch.subscribe(u.ComponentActions.EMPHASIZE_NOTICE, e), () => {
        o.ComponentDispatch.unsubscribe(u.ComponentActions.EMPHASIZE_NOTICE, e)
      }
    }, [v]);
    let m = A.to({
        range: [0, 1],
        output: [(0, l.useToken)(a.default.colors.TEXT_NORMAL).hex(), (0, l.useToken)(a.default.unsafe_rawColors.WHITE_500).hex()]
      }),
      R = A.to({
        range: [0, 1],
        output: [(0, l.useToken)(a.default.colors.BACKGROUND_FLOATING).hex(), (0, l.useToken)(a.default.colors.STATUS_DANGER).hex()]
      }),
      g = (0, l.useToken)(a.default.colors.TEXT_DANGER).hex();
    return (0, r.jsx)(s.animated.div, {
      className: d.container,
      style: {
        backgroundColor: R
      },
      children: (0, r.jsx)("div", {
        className: d.flexContainer,
        ref: C,
        children: (0, r.jsxs)(l.FocusRingScope, {
          containerRef: C,
          children: [(0, r.jsx)("div", {
            className: d.shrinkingContainer,
            children: (0, r.jsx)(s.animated.div, {
              className: d.message,
              style: {
                color: null != f ? g : m
              },
              children: null !== (t = null != f ? f : n) && void 0 !== t ? t : c.default.Messages.SETTINGS_NOTICE_MESSAGE
            })
          }), (0, r.jsxs)("div", {
            className: d.actions,
            children: [null != _ && (0, r.jsx)(l.Button, {
              className: d.resetButton,
              size: l.Button.Sizes.SMALL,
              color: l.Button.Colors.PRIMARY,
              look: l.Button.Looks.LINK,
              onClick: _,
              children: (0, r.jsx)(s.animated.span, {
                style: {
                  color: m
                },
                children: null != I ? I : c.default.Messages.RESET
              })
            }), null != T ? (0, r.jsx)(l.Tooltip, {
              text: N,
              children: e => (0, r.jsx)(l.Button, {
                size: l.Button.Sizes.SMALL,
                color: null != S ? S : l.Button.Colors.GREEN,
                submitting: E,
                disabled: p,
                onClick: T,
                ...e,
                children: null != h ? h : c.default.Messages.SAVE_CHANGES
              })
            }) : null]
          })]
        })
      })
    })
  }