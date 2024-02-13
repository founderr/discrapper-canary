"use strict";
s.r(t), s.d(t, {
  SafetyToolsSlides: function() {
    return T
  },
  default: function() {
    return u
  }
}), s("222007");
var T, l, a = s("37983"),
  n = s("884691"),
  o = s("77078"),
  r = s("365686"),
  _ = s("626216"),
  i = s("782340"),
  S = s("319584");
(l = T || (T = {})).ACTIONS = "ACTIONS", l.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS";
var u = e => {
  let {
    onClose: t,
    transitionState: s
  } = e, [T, l] = n.useState("ACTIONS"), u = n.useCallback(e => {
    let {
      text: t,
      onClick: s
    } = e;
    return (0, a.jsx)(o.Button, {
      look: o.Button.Looks.LINK,
      size: o.Button.Sizes.MIN,
      onClick: s,
      color: o.Button.Colors.CUSTOM,
      className: S.footerLink,
      children: t
    })
  }, []), E = n.useCallback(() => {
    if ("ABOUT_SAFETY_ALERTS" === T) return (0, a.jsx)(u, {
      text: i.default.Messages.BACK,
      onClick: () => l("ACTIONS")
    });
    return null
  }, [T, u]), d = n.useCallback(() => {
    if ("ABOUT_SAFETY_ALERTS" === T) return i.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE;
    return i.default.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER
  }, [T]), O = n.useCallback(e => {
    l(e)
  }, [l]);
  return (0, a.jsxs)(o.ModalRoot, {
    transitionState: s,
    "aria-label": i.default.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER,
    size: o.ModalSize.SMALL,
    children: [(0, a.jsx)(o.ModalHeader, {
      separator: !1,
      className: S.modalHeader,
      children: (0, a.jsx)(o.Heading, {
        variant: "heading-xl/semibold",
        children: d()
      })
    }), (0, a.jsx)(o.Scroller, {
      children: (0, a.jsxs)(o.Slides, {
        activeSlide: T,
        width: 440,
        children: [(0, a.jsx)(o.Slide, {
          id: "ACTIONS",
          children: (0, a.jsx)(_.default, {
            transitionToSlide: O
          })
        }), (0, a.jsx)(o.Slide, {
          id: "ABOUT_SAFETY_ALERTS",
          children: (0, a.jsx)(r.default, {
            onClose: () => t()
          })
        })]
      })
    }), (0, a.jsxs)(o.ModalFooter, {
      className: S.modalFooter,
      children: [(0, a.jsx)(u, {
        text: i.default.Messages.CLOSE,
        onClick: t
      }), E()]
    })]
  })
}