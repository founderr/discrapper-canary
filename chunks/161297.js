"use strict";
s.r(t), s.d(t, {
  SafetyToolsSlides: function() {
    return a
  },
  default: function() {
    return _
  }
}), s("222007");
var a, l, n = s("37983"),
  T = s("884691"),
  r = s("77078"),
  o = s("903303"),
  i = s("96928"),
  u = s("926945"),
  d = s("782340"),
  S = s("650766");
(l = a || (a = {})).ACTIONS = "ACTIONS", l.SAFETY_TIPS = "SAFETY_TIPS", l.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS";
var _ = e => {
  let {
    onClose: t,
    channelId: s,
    otherUserId: a,
    transitionState: l
  } = e, [_, c] = T.useState("ACTIONS"), E = T.useCallback(e => {
    let {
      text: t,
      onClick: s
    } = e;
    return (0, n.jsx)(r.Button, {
      look: r.Button.Looks.LINK,
      size: r.Button.Sizes.MIN,
      onClick: s,
      color: r.Button.Colors.CUSTOM,
      className: S.footerLink,
      children: t
    })
  }, []), A = T.useCallback(() => {
    switch (_) {
      case "SAFETY_TIPS":
      case "ABOUT_SAFETY_ALERTS":
        return (0, n.jsx)(E, {
          text: d.default.Messages.BACK,
          onClick: () => c("ACTIONS")
        });
      default:
        return null
    }
  }, [_, E]), O = T.useCallback(() => {
    switch (_) {
      case "SAFETY_TIPS":
        return d.default.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE;
      case "ABOUT_SAFETY_ALERTS":
        return d.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE;
      default:
        return d.default.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER
    }
  }, [_]), I = T.useCallback(e => {
    c(e)
  }, [c]);
  return (0, n.jsxs)(r.ModalRoot, {
    transitionState: l,
    "aria-label": d.default.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER,
    size: r.ModalSize.SMALL,
    children: [(0, n.jsx)(r.ModalHeader, {
      separator: !1,
      className: S.modalHeader,
      children: (0, n.jsx)(r.Heading, {
        variant: "heading-xl/semibold",
        children: O()
      })
    }), (0, n.jsx)(r.Scroller, {
      children: (0, n.jsxs)(r.Slides, {
        activeSlide: _,
        width: 440,
        children: [(0, n.jsx)(r.Slide, {
          id: "ACTIONS",
          children: (0, n.jsx)(i.default, {
            otherUserId: a,
            channelId: s,
            transitionToSlide: I
          })
        }), (0, n.jsx)(r.Slide, {
          id: "ABOUT_SAFETY_ALERTS",
          children: (0, n.jsx)(o.default, {
            onClose: () => t()
          })
        }), (0, n.jsx)(r.Slide, {
          id: "SAFETY_TIPS",
          children: (0, n.jsx)(u.default, {})
        })]
      })
    }), (0, n.jsxs)(r.ModalFooter, {
      className: S.modalFooter,
      children: [(0, n.jsx)(E, {
        text: d.default.Messages.CLOSE,
        onClick: t
      }), A()]
    })]
  })
}