"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
});
var n = s("37983"),
  a = s("884691"),
  l = s("414456"),
  r = s.n(l),
  T = s("669491"),
  o = s("748802"),
  i = s("77078"),
  u = s("545158"),
  _ = s("377114"),
  S = s("652126"),
  d = s("615992"),
  E = s("13355"),
  c = s("15408"),
  O = s("217736"),
  A = s("161297"),
  C = s("514914"),
  I = s("324252"),
  f = s("782340"),
  L = s("744228");

function p(e) {
  let {
    children: t
  } = e;
  return (0, n.jsx)("div", {
    className: L.actionGroup,
    children: t
  })
}

function N(e) {
  let {
    title: t,
    subTitle: s,
    buttonText: a,
    buttonColor: l,
    onPress: r
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
      onClick: r,
      children: a
    })]
  })
}

function R(e) {
  let {
    title: t,
    onPress: s
  } = e;
  return (0, n.jsxs)(i.Clickable, {
    className: r(L.actionRow, L.clickableActionRow),
    onClick: s,
    children: [(0, n.jsx)(i.Text, {
      variant: "text-md/semibold",
      color: "header-primary",
      children: t
    }), (0, n.jsx)(o.ChevronSmallRightIcon, {
      width: 24,
      height: 24,
      color: T.default.colors.INTERACTIVE_NORMAL
    })]
  })
}
var h = function(e) {
  let {
    otherUserId: t,
    channelId: l,
    warningId: r,
    warningType: T,
    transitionToSlide: o
  } = e, L = (0, S.useShouldShowHelplineLink)(), h = (0, d.useLastChannelMessage)(l), F = null != (0, E.useSafetyToolsButtonTooltipForChannel)(l), x = a.useCallback(e => {
    (0, O.trackCtaEvent)({
      channelId: l,
      warningId: r,
      senderId: t,
      warningType: T,
      cta: e,
      isNudgeWarning: F
    })
  }, [l, r, t, T, F]), Y = a.useCallback(() => {
    (0, i.closeModal)(I.SAFETY_TOOLS_MODAL_KEY), x(O.CtaEventTypes.USER_SAFETY_TOOLS_BLOCK_CONFIRM)
  }, [x]), M = a.useCallback(() => {
    (0, i.closeModal)(I.SAFETY_TOOLS_MODAL_KEY), x(O.CtaEventTypes.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM)
  }, [x]), m = a.useMemo(() => {
    let e = {
        title: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_TITLE,
        subTitle: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_SUBTITLE,
        buttonText: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_BUTTON,
        buttonColor: i.ButtonColors.PRIMARY,
        onPress: () => {
          (0, u.default)(I.CRISIS_TEXT_LINE_URL), x(O.CtaEventTypes.USER_SAFETY_TOOLS_CTL)
        }
      },
      a = {
        title: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE,
        subTitle: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_SUBTITLE,
        buttonText: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_BUTTON,
        buttonColor: i.ButtonColors.PRIMARY,
        onPress: () => {
          (0, u.default)(I.NOFILTR_URL), x(O.CtaEventTypes.USER_SAFETY_TOOLS_NO_FILTR)
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
              onClose: r
            } = s;
            return (0, n.jsx)(e, {
              transitionState: a,
              onBlock: Y,
              onBlockAndReport: M,
              onCancel: () => {
                null == r || r(), x(O.CtaEventTypes.USER_SAFETY_TOOLS_BLOCK_CANCEL)
              },
              onClose: r,
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
        (0, i.closeModal)(I.SAFETY_TOOLS_MODAL_KEY), (0, _.showReportModalForInappropriateConversationSafetyAlert)(h), x(O.CtaEventTypes.USER_SAFETY_TOOLS_REPORT)
      }
    }, L ? e : a, {
      title: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_TITLE,
      subTitle: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_SUBTITLE,
      buttonText: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_BUTTON,
      buttonColor: i.ButtonColors.BRAND,
      onPress: () => {
        (0, c.default)(i.closeAllModals), x(O.CtaEventTypes.USER_SAFETY_TOOLS_VIBING_WUMPUS)
      }
    }]
  }, [l, t, h, L, Y, M, x]), g = a.useMemo(() => [{
    title: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE,
    onPress: () => {
      o(A.SafetyToolsSlides.SAFETY_TIPS), x(O.CtaEventTypes.USER_SAFETY_TOOLS_SAFETY_TIPS)
    }
  }, {
    title: f.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE,
    onPress: () => {
      o(A.SafetyToolsSlides.ABOUT_SAFETY_ALERTS), x(O.CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS)
    }
  }], [o, x]);
  return (0, n.jsxs)(C.default, {
    children: [(0, n.jsx)(p, {
      children: m.map(e => {
        let {
          title: t,
          subTitle: s,
          buttonText: a,
          buttonColor: l,
          onPress: r
        } = e;
        return (0, n.jsx)(N, {
          title: t,
          subTitle: s,
          buttonText: a,
          buttonColor: l,
          onPress: r
        }, t)
      })
    }), (0, n.jsx)(p, {
      children: g.map(e => {
        let {
          title: t,
          onPress: s
        } = e;
        return (0, n.jsx)(R, {
          title: t,
          onPress: s
        }, t)
      })
    })]
  })
}