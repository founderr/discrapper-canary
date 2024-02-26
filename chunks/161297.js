"use strict";
s.r(t), s.d(t, {
  SafetyToolsSlides: function() {
    return n
  },
  default: function() {
    return d
  }
}), s("222007");
var n, a, l = s("37983"),
  r = s("884691"),
  T = s("77078"),
  o = s("903303"),
  i = s("96928"),
  u = s("926945"),
  _ = s("782340"),
  S = s("650766");
(a = n || (n = {})).ACTIONS = "ACTIONS", a.SAFETY_TIPS = "SAFETY_TIPS", a.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS";
var d = e => {
  let {
    onClose: t,
    channelId: s,
    warningId: n,
    warningType: a,
    otherUserId: d,
    transitionState: E
  } = e, [c, O] = r.useState("ACTIONS"), A = r.useCallback(e => {
    let {
      text: t,
      onClick: s
    } = e;
    return (0, l.jsx)(T.Button, {
      look: T.Button.Looks.LINK,
      size: T.Button.Sizes.MIN,
      onClick: s,
      color: T.Button.Colors.CUSTOM,
      className: S.footerLink,
      children: t
    })
  }, []), C = r.useCallback(() => {
    switch (c) {
      case "SAFETY_TIPS":
      case "ABOUT_SAFETY_ALERTS":
        return (0, l.jsx)(A, {
          text: _.default.Messages.BACK,
          onClick: () => O("ACTIONS")
        });
      default:
        return null
    }
  }, [c, A]), I = r.useCallback(() => {
    switch (c) {
      case "SAFETY_TIPS":
        return _.default.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE;
      case "ABOUT_SAFETY_ALERTS":
        return _.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE;
      default:
        return _.default.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER
    }
  }, [c]), f = r.useCallback(e => {
    O(e)
  }, [O]);
  return (0, l.jsxs)(T.ModalRoot, {
    transitionState: E,
    "aria-label": _.default.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER,
    size: T.ModalSize.SMALL,
    children: [(0, l.jsx)(T.ModalHeader, {
      separator: !1,
      className: S.modalHeader,
      children: (0, l.jsx)(T.Heading, {
        variant: "heading-xl/semibold",
        children: I()
      })
    }), (0, l.jsx)(T.Scroller, {
      children: (0, l.jsxs)(T.Slides, {
        activeSlide: c,
        width: 440,
        children: [(0, l.jsx)(T.Slide, {
          id: "ACTIONS",
          children: (0, l.jsx)(i.default, {
            otherUserId: d,
            channelId: s,
            warningId: n,
            warningType: a,
            transitionToSlide: f
          })
        }), (0, l.jsx)(T.Slide, {
          id: "ABOUT_SAFETY_ALERTS",
          children: (0, l.jsx)(o.default, {
            onClose: () => t()
          })
        }), (0, l.jsx)(T.Slide, {
          id: "SAFETY_TIPS",
          children: (0, l.jsx)(u.default, {})
        })]
      })
    }), (0, l.jsxs)(T.ModalFooter, {
      className: S.modalFooter,
      children: [(0, l.jsx)(A, {
        text: _.default.Messages.CLOSE,
        onClick: t
      }), C()]
    })]
  })
}