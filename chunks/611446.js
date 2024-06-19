t.r(s), t.d(s, {
  SafetyToolsSlides: function() {
    return T
  }
}), t(47120);
var T, n, l = t(735250),
  o = t(470079),
  a = t(481060),
  _ = t(285952),
  S = t(367408),
  r = t(473092),
  i = t(419672),
  E = t(858597),
  O = t(486213),
  c = t(689938),
  A = t(20022);
(n = T || (T = {})).ACTIONS = "ACTIONS", n.SAFETY_TIPS = "SAFETY_TIPS", n.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS";
s.default = e => {
  let {
    onClose: s,
    channelId: t,
    warningId: T,
    warningType: n,
    otherUserId: d,
    transitionState: u
  } = e, I = null != (0, S.M)(t), [L, C] = o.useState("ACTIONS"), N = o.useCallback(e => {
    (0, r.qc)({
      channelId: t,
      warningId: T,
      warningType: n,
      senderId: d,
      cta: e,
      isNudgeWarning: I
    })
  }, [t, T, n, d, I]), R = o.useCallback(e => {
    let {
      text: s,
      onClick: t
    } = e;
    return (0, l.jsx)(a.Button, {
      look: a.Button.Looks.LINK,
      size: a.Button.Sizes.MIN,
      onClick: t,
      color: a.Button.Colors.CUSTOM,
      className: A.footerLink,
      children: s
    })
  }, []), x = o.useCallback(() => {
    switch (L) {
      case "SAFETY_TIPS":
      case "ABOUT_SAFETY_ALERTS":
        return (0, l.jsx)(R, {
          text: c.Z.Messages.BACK,
          onClick: () => C("ACTIONS")
        });
      default:
        return null
    }
  }, [L, R]), M = o.useCallback(() => {
    switch (L) {
      case "SAFETY_TIPS":
        return c.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE;
      case "ABOUT_SAFETY_ALERTS":
        return c.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE;
      default:
        return c.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER
    }
  }, [L]), F = o.useCallback(e => {
    C(e)
  }, [C]);
  return (0, l.jsxs)(a.ModalRoot, {
    transitionState: u,
    "aria-label": c.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER,
    size: a.ModalSize.SMALL,
    children: [(0, l.jsx)(a.ModalHeader, {
      separator: !1,
      className: A.modalHeader,
      justify: _.Z.Justify.CENTER,
      children: (0, l.jsx)(a.Heading, {
        variant: "heading-xl/semibold",
        children: M()
      })
    }), (0, l.jsx)(a.Scroller, {
      children: (0, l.jsxs)(a.Slides, {
        activeSlide: L,
        width: 440,
        children: [(0, l.jsx)(a.Slide, {
          id: "ACTIONS",
          children: (0, l.jsx)(E.Z, {
            otherUserId: d,
            channelId: t,
            warningId: T,
            warningType: n,
            transitionToSlide: F
          })
        }), (0, l.jsx)(a.Slide, {
          id: "ABOUT_SAFETY_ALERTS",
          children: (0, l.jsx)(i.Z, {
            channelId: t,
            onClose: () => {
              s(), N(r.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS)
            }
          })
        }), (0, l.jsx)(a.Slide, {
          id: "SAFETY_TIPS",
          children: (0, l.jsx)(O.Z, {})
        })]
      })
    }), (0, l.jsxs)(a.ModalFooter, {
      justify: _.Z.Justify.BETWEEN,
      children: [(0, l.jsx)(R, {
        text: c.Z.Messages.CLOSE,
        onClick: () => {
          s(), N(r.NM.USER_SAFETY_TOOLS_DISMISS)
        }
      }), x()]
    })]
  })
}