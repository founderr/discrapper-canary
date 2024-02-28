"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
  }
});
var n = s("37983"),
  a = s("884691"),
  l = s("414456"),
  T = s.n(l),
  r = s("669491"),
  o = s("748802"),
  i = s("77078"),
  _ = s("545158"),
  u = s("377114"),
  S = s("652126"),
  d = s("615992"),
  E = s("13355"),
  c = s("15408"),
  O = s("217736"),
  A = s("161297"),
  I = s("514914"),
  C = s("324252"),
  f = s("782340"),
  L = s("744228");

function R(e) {
  let {
    children: t
  } = e;
  return (0, n.jsx)("div", {
    className: L.actionGroup,
    children: t
  })
}

function p(e) {
  let {
    title: t,
    subTitle: s,
    buttonText: a,
    buttonColor: l,
    onPress: T
  } = e;
  return (0, n.jsxs)("div", {
    className: L.actionRow,
    children: [(0, n.jsxs)("div", {
      className: L.actionButtonDetails,
      children: [(0, n.jsx)(i.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t
      }), (0, n.jsx)(i.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: s
      })]
    }), (0, n.jsx)(i.Button, {
      size: i.Button.Sizes.SMALL,
      color: l,
      onClick: T,
      children: a
    })]
  })
}

function N(e) {
  let {
    title: t,
    onPress: s
  } = e;
  return (0, n.jsxs)(i.Clickable, {
    className: T(L.actionRow, L.clickableActionRow),
    onClick: s,
    children: [(0, n.jsx)(i.Text, {
      variant: "text-md/semibold",
      color: "header-primary",
      children: t
    }), (0, n.jsx)(o.ChevronSmallRightIcon, {
      width: 24,
      height: 24,
      color: r.default.colors.INTERACTIVE_NORMAL
    })]
  })
}
var F = function(e) {
  let {
    otherUserId: t,
    channelId: l,
    warningId: T,
    warningType: r,
    transitionToSlide: o
  } = e, L = (0, S.useShouldShowHelplineLink)(), F = (0, d.useLastChannelMessage)(l), h = null != (0, E.useSafetyToolsButtonTooltipForChannel)(l), m = a.useCallback(e => {
    (0, O.trackCtaEvent)({
      channelId: l,
      warningId: T,
      senderId: t,
      warningType: r,
      cta: e,
      isNudgeWarning: h
    })
  }, [l, T, t, r, h]), x = a.useCallback(() => {
    (0, i.closeModal)(C.SAFETY_TOOLS_MODAL_KEY), m(O.CtaEventTypes.USER_SAFETY_TOOLS_BLOCK_CONFIRM)
  }, [m]), M = a.useCallback(() => {
    (0, i.closeModal)(C.SAFETY_TOOLS_MODAL_KEY), m(O.CtaEventTypes.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM)
  }, [m]), Y = a.useMemo(() => {
    let e = {
        title: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_TITLE,
        subTitle: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_SUBTITLE,
        buttonText: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_BUTTON,
        buttonColor: i.ButtonColors.PRIMARY,
        onPress: () => {
          (0, _.default)(C.CRISIS_TEXT_LINE_URL), m(O.CtaEventTypes.USER_SAFETY_TOOLS_CTL)
        }
      },
      a = {
        title: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE,
        subTitle: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_SUBTITLE,
        buttonText: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_BUTTON,
        buttonColor: i.ButtonColors.PRIMARY,
        onPress: () => {
          (0, _.default)(C.NOFILTR_URL), m(O.CtaEventTypes.USER_SAFETY_TOOLS_NO_FILTR)
        }
      };
    return [{
      title: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
      subTitle: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_SUBTITLE,
      buttonText: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
      buttonColor: i.ButtonColors.PRIMARY,
      onPress: () => {
        (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await s.el("811578").then(s.bind(s, "811578"));
          return s => {
            let {
              transitionState: a,
              onClose: T
            } = s;
            return (0, n.jsx)(e, {
              transitionState: a,
              onBlock: x,
              onBlockAndReport: M,
              onCancel: () => {
                null == T || T(), m(O.CtaEventTypes.USER_SAFETY_TOOLS_BLOCK_CANCEL)
              },
              onClose: T,
              userId: t,
              channelId: l
            })
          }
        })
      }
    }, {
      title: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
      subTitle: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_SUBTITLE,
      buttonText: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
      buttonColor: i.ButtonColors.PRIMARY,
      onPress: () => {
        (0, i.closeModal)(C.SAFETY_TOOLS_MODAL_KEY), (0, u.showReportModalForInappropriateConversationSafetyAlert)(F), m(O.CtaEventTypes.USER_SAFETY_TOOLS_REPORT)
      }
    }, L ? e : a, {
      title: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_TITLE,
      subTitle: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_SUBTITLE,
      buttonText: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_BUTTON,
      buttonColor: i.ButtonColors.BRAND,
      onPress: () => {
        (0, c.default)(i.closeAllModals), m(O.CtaEventTypes.USER_SAFETY_TOOLS_VIBING_WUMPUS)
      }
    }]
  }, [l, t, F, L, x, M, m]), g = a.useMemo(() => [{
    title: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE,
    onPress: () => {
      o(A.SafetyToolsSlides.SAFETY_TIPS), m(O.CtaEventTypes.USER_SAFETY_TOOLS_SAFETY_TIPS)
    }
  }, {
    title: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE,
    onPress: () => {
      o(A.SafetyToolsSlides.ABOUT_SAFETY_ALERTS), m(O.CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS)
    }
  }], [o, m]);
  return (0, n.jsxs)(I.default, {
    children: [(0, n.jsx)(R, {
      children: Y.map(e => {
        let {
          title: t,
          subTitle: s,
          buttonText: a,
          buttonColor: l,
          onPress: T
        } = e;
        return (0, n.jsx)(p, {
          title: t,
          subTitle: s,
          buttonText: a,
          buttonColor: l,
          onPress: T
        }, t)
      })
    }), (0, n.jsx)(R, {
      children: g.map(e => {
        let {
          title: t,
          onPress: s
        } = e;
        return (0, n.jsx)(N, {
          title: t,
          onPress: s
        }, t)
      })
    })]
  })
}