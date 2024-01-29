"use strict";
t.r(A), t.d(A, {
  default: function() {
    return c
  }
}), t("222007");
var a = t("37983"),
  l = t("884691"),
  n = t("907002"),
  r = t("669491"),
  s = t("77078"),
  o = t("659500"),
  i = t("49111"),
  d = t("782340"),
  u = t("317404"),
  c = function(e) {
    var A;
    let {
      message: t,
      errorMessage: c,
      submitting: f,
      onReset: C,
      onSave: g,
      onSaveText: T,
      onResetText: h,
      onSaveButtonColor: m,
      disabled: U,
      saveButtonTooltip: I
    } = e, p = l.useRef(null), [{
      spring: v
    }, E] = (0, n.useSpring)(() => ({
      spring: 0
    }));
    l.useEffect(() => {
      function e() {
        E({
          spring: 1,
          config: n.config.gentle
        }), E({
          spring: 0,
          config: n.config.gentle,
          delay: 1e3
        })
      }
      return o.ComponentDispatch.subscribe(i.ComponentActions.EMPHASIZE_NOTICE, e), () => {
        o.ComponentDispatch.unsubscribe(i.ComponentActions.EMPHASIZE_NOTICE, e)
      }
    }, [E]);
    let q = v.to({
        range: [0, 1],
        output: [(0, s.useToken)(r.default.colors.TEXT_NORMAL).hex(), (0, s.useToken)(r.default.unsafe_rawColors.WHITE_500).hex()]
      }),
      N = v.to({
        range: [0, 1],
        output: [(0, s.useToken)(r.default.colors.BACKGROUND_FLOATING).hex(), (0, s.useToken)(r.default.colors.STATUS_DANGER).hex()]
      }),
      O = (0, s.useToken)(r.default.colors.TEXT_DANGER).hex();
    return (0, a.jsx)(n.animated.div, {
      className: u.container,
      style: {
        backgroundColor: N
      },
      children: (0, a.jsx)("div", {
        className: u.flexContainer,
        ref: p,
        children: (0, a.jsxs)(s.FocusRingScope, {
          containerRef: p,
          children: [(0, a.jsx)("div", {
            className: u.shrinkingContainer,
            children: (0, a.jsx)(n.animated.div, {
              className: u.message,
              style: {
                color: null != c ? O : q
              },
              children: null !== (A = null != c ? c : t) && void 0 !== A ? A : d.default.Messages.SETTINGS_NOTICE_MESSAGE
            })
          }), (0, a.jsxs)("div", {
            className: u.actions,
            children: [null != C && (0, a.jsx)(s.Button, {
              className: u.resetButton,
              size: s.Button.Sizes.SMALL,
              color: s.Button.Colors.PRIMARY,
              look: s.Button.Looks.LINK,
              onClick: C,
              children: (0, a.jsx)(n.animated.span, {
                style: {
                  color: q
                },
                children: null != h ? h : d.default.Messages.RESET
              })
            }), null != g ? (0, a.jsx)(s.Tooltip, {
              text: I,
              children: e => (0, a.jsx)(s.Button, {
                size: s.Button.Sizes.SMALL,
                color: null != m ? m : s.Button.Colors.GREEN,
                submitting: f,
                disabled: U,
                onClick: g,
                ...e,
                children: null != T ? T : d.default.Messages.SAVE_CHANGES
              })
            }) : null]
          })]
        })
      })
    })
  }