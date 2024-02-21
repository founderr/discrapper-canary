"use strict";
s.r(t), s.d(t, {
  SafetyToolsSlides: function() {
    return T
  },
  default: function() {
    return d
  }
}), s("222007");
var T, l, a = s("37983"),
  n = s("884691"),
  r = s("77078"),
  o = s("903303"),
  i = s("96928"),
  _ = s("926945"),
  u = s("782340"),
  S = s("650766");
(l = T || (T = {})).ACTIONS = "ACTIONS", l.SAFETY_TIPS = "SAFETY_TIPS", l.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS";
var d = e => {
  let {
    onClose: t,
    transitionState: s
  } = e, [T, l] = n.useState("ACTIONS"), d = n.useCallback(e => {
    let {
      text: t,
      onClick: s
    } = e;
    return (0, a.jsx)(r.Button, {
      look: r.Button.Looks.LINK,
      size: r.Button.Sizes.MIN,
      onClick: s,
      color: r.Button.Colors.CUSTOM,
      className: S.footerLink,
      children: t
    })
  }, []), E = n.useCallback(() => {
    switch (T) {
      case "SAFETY_TIPS":
      case "ABOUT_SAFETY_ALERTS":
        return (0, a.jsx)(d, {
          text: u.default.Messages.BACK,
          onClick: () => l("ACTIONS")
        });
      default:
        return null
    }
  }, [T, d]), c = n.useCallback(() => {
    switch (T) {
      case "SAFETY_TIPS":
        return u.default.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE;
      case "ABOUT_SAFETY_ALERTS":
        return u.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE;
      default:
        return u.default.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER
    }
  }, [T]), A = n.useCallback(e => {
    l(e)
  }, [l]);
  return (0, a.jsxs)(r.ModalRoot, {
    transitionState: s,
    "aria-label": u.default.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER,
    size: r.ModalSize.SMALL,
    children: [(0, a.jsx)(r.ModalHeader, {
      separator: !1,
      className: S.modalHeader,
      children: (0, a.jsx)(r.Heading, {
        variant: "heading-xl/semibold",
        children: c()
      })
    }), (0, a.jsx)(r.Scroller, {
      children: (0, a.jsxs)(r.Slides, {
        activeSlide: T,
        width: 440,
        children: [(0, a.jsx)(r.Slide, {
          id: "ACTIONS",
          children: (0, a.jsx)(i.default, {
            transitionToSlide: A
          })
        }), (0, a.jsx)(r.Slide, {
          id: "ABOUT_SAFETY_ALERTS",
          children: (0, a.jsx)(o.default, {
            onClose: () => t()
          })
        }), (0, a.jsx)(r.Slide, {
          id: "SAFETY_TIPS",
          children: (0, a.jsx)(_.default, {})
        })]
      })
    }), (0, a.jsxs)(r.ModalFooter, {
      className: S.modalFooter,
      children: [(0, a.jsx)(d, {
        text: u.default.Messages.CLOSE,
        onClick: t
      }), E()]
    })]
  })
}