"use strict";
s.r(t), s.d(t, {
  SafetyToolsSlides: function() {
    return n
  },
  default: function() {
    return c
  }
}), s("222007");
var n, a, l = s("37983"),
  T = s("884691"),
  r = s("77078"),
  o = s("13355"),
  i = s("217736"),
  _ = s("903303"),
  u = s("96928"),
  S = s("926945"),
  d = s("782340"),
  E = s("650766");
(a = n || (n = {})).ACTIONS = "ACTIONS", a.SAFETY_TIPS = "SAFETY_TIPS", a.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS";
var c = e => {
  let {
    onClose: t,
    channelId: s,
    warningId: n,
    warningType: a,
    otherUserId: c,
    transitionState: O
  } = e, A = null != (0, o.useSafetyToolsButtonTooltipForChannel)(s), [I, C] = T.useState("ACTIONS"), f = T.useCallback(e => {
    (0, i.trackCtaEvent)({
      channelId: s,
      warningId: n,
      warningType: a,
      senderId: c,
      cta: e,
      isNudgeWarning: A
    })
  }, [s, n, a, c, A]), L = T.useCallback(e => {
    let {
      text: t,
      onClick: s
    } = e;
    return (0, l.jsx)(r.Button, {
      look: r.Button.Looks.LINK,
      size: r.Button.Sizes.MIN,
      onClick: s,
      color: r.Button.Colors.CUSTOM,
      className: E.footerLink,
      children: t
    })
  }, []), R = T.useCallback(() => {
    switch (I) {
      case "SAFETY_TIPS":
      case "ABOUT_SAFETY_ALERTS":
        return (0, l.jsx)(L, {
          text: d.default.Messages.BACK,
          onClick: () => C("ACTIONS")
        });
      default:
        return null
    }
  }, [I, L]), p = T.useCallback(() => {
    switch (I) {
      case "SAFETY_TIPS":
        return d.default.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE;
      case "ABOUT_SAFETY_ALERTS":
        return d.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE;
      default:
        return d.default.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER
    }
  }, [I]), N = T.useCallback(e => {
    C(e)
  }, [C]);
  return (0, l.jsxs)(r.ModalRoot, {
    transitionState: O,
    "aria-label": d.default.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER,
    size: r.ModalSize.SMALL,
    children: [(0, l.jsx)(r.ModalHeader, {
      separator: !1,
      className: E.modalHeader,
      children: (0, l.jsx)(r.Heading, {
        variant: "heading-xl/semibold",
        children: p()
      })
    }), (0, l.jsx)(r.Scroller, {
      children: (0, l.jsxs)(r.Slides, {
        activeSlide: I,
        width: 440,
        children: [(0, l.jsx)(r.Slide, {
          id: "ACTIONS",
          children: (0, l.jsx)(u.default, {
            otherUserId: c,
            channelId: s,
            warningId: n,
            warningType: a,
            transitionToSlide: N
          })
        }), (0, l.jsx)(r.Slide, {
          id: "ABOUT_SAFETY_ALERTS",
          children: (0, l.jsx)(_.default, {
            onClose: () => {
              t(), f(i.CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS)
            }
          })
        }), (0, l.jsx)(r.Slide, {
          id: "SAFETY_TIPS",
          children: (0, l.jsx)(S.default, {})
        })]
      })
    }), (0, l.jsxs)(r.ModalFooter, {
      className: E.modalFooter,
      children: [(0, l.jsx)(L, {
        text: d.default.Messages.CLOSE,
        onClick: () => {
          t(), f(i.CtaEventTypes.USER_SAFETY_TOOLS_DISMISS)
        }
      }), R()]
    })]
  })
}