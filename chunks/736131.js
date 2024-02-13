"use strict";
s.r(t), s.d(t, {
  SafetyToolsSlides: function() {
    return T
  },
  default: function() {
    return u
  }
}), s("222007");
var T, l, n = s("37983"),
  o = s("884691"),
  a = s("77078"),
  r = s("365686"),
  _ = s("626216"),
  i = s("782340"),
  S = s("319584");
(l = T || (T = {})).ACTIONS = "ACTIONS", l.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS";
var u = e => {
  let {
    onClose: t,
    transitionState: s
  } = e, [T, l] = o.useState("ACTIONS"), u = o.useCallback(e => {
    let {
      text: t,
      onClick: s
    } = e;
    return (0, n.jsx)(a.Button, {
      look: a.Button.Looks.LINK,
      size: a.Button.Sizes.MIN,
      onClick: s,
      color: a.Button.Colors.CUSTOM,
      className: S.footerLink,
      children: t
    })
  }, []), E = o.useCallback(() => {
    if ("ABOUT_SAFETY_ALERTS" === T) return (0, n.jsx)(u, {
      text: i.default.Messages.BACK,
      onClick: () => l("ACTIONS")
    });
    return null
  }, [T, u]), d = o.useCallback(() => {
    if ("ABOUT_SAFETY_ALERTS" === T) return i.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE;
    return i.default.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER
  }, [T]), O = o.useCallback(e => {
    l(e)
  }, [l]);
  return (0, n.jsxs)(a.ModalRoot, {
    transitionState: s,
    "aria-label": i.default.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER,
    size: a.ModalSize.SMALL,
    children: [(0, n.jsx)(a.ModalHeader, {
      separator: !1,
      className: S.modalHeader,
      children: (0, n.jsx)(a.Heading, {
        variant: "heading-xl/semibold",
        children: d()
      })
    }), (0, n.jsx)(a.Scroller, {
      children: (0, n.jsxs)(a.Slides, {
        activeSlide: T,
        width: 440,
        children: [(0, n.jsx)(a.Slide, {
          id: "ACTIONS",
          children: (0, n.jsx)(_.default, {
            transitionToSlide: O
          })
        }), (0, n.jsx)(a.Slide, {
          id: "ABOUT_SAFETY_ALERTS",
          children: (0, n.jsx)(r.default, {
            onClose: () => t()
          })
        })]
      })
    }), (0, n.jsxs)(a.ModalFooter, {
      className: S.modalFooter,
      children: [(0, n.jsx)(u, {
        text: i.default.Messages.CLOSE,
        onClick: t
      }), E()]
    })]
  })
}