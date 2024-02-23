"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  T = s.n(n),
  r = s("669491"),
  o = s("748802"),
  i = s("77078"),
  u = s("545158"),
  d = s("377114"),
  S = s("652126"),
  _ = s("615992"),
  c = s("15408"),
  E = s("161297"),
  A = s("514914"),
  O = s("324252"),
  I = s("782340"),
  f = s("744228");

function C(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)("div", {
    className: f.actionGroup,
    children: t
  })
}

function L(e) {
  let {
    title: t,
    subTitle: s,
    buttonText: l,
    buttonColor: n,
    onPress: T
  } = e;
  return (0, a.jsxs)("div", {
    className: f.actionRow,
    children: [(0, a.jsxs)("div", {
      className: f.actionButtonDetails,
      children: [(0, a.jsx)(i.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t
      }), (0, a.jsx)(i.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: s
      })]
    }), (0, a.jsx)(i.Button, {
      size: i.Button.Sizes.SMALL,
      color: n,
      onClick: T,
      children: l
    })]
  })
}

function x(e) {
  let {
    title: t,
    onPress: s
  } = e;
  return (0, a.jsxs)(i.Clickable, {
    className: T(f.actionRow, f.clickableActionRow),
    onClick: s,
    children: [(0, a.jsx)(i.Text, {
      variant: "text-md/semibold",
      color: "header-primary",
      children: t
    }), (0, a.jsx)(o.ChevronSmallRightIcon, {
      width: 24,
      height: 24,
      color: r.default.colors.INTERACTIVE_NORMAL
    })]
  })
}
var N = function(e) {
  let {
    otherUserId: t,
    channelId: n,
    transitionToSlide: T
  } = e, r = (0, S.useShouldShowHelplineLink)(), o = (0, _.useLastChannelMessage)(n), f = l.useCallback(() => {
    (0, i.closeModal)(O.SAFETY_TOOLS_MODAL_KEY)
  }, []), N = l.useCallback(() => {
    (0, i.closeModal)(O.SAFETY_TOOLS_MODAL_KEY)
  }, []), h = l.useMemo(() => {
    let e = {
        title: I.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_TITLE,
        subTitle: I.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_SUBTITLE,
        buttonText: I.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_BUTTON,
        buttonColor: i.ButtonColors.PRIMARY,
        onPress: () => {
          (0, u.default)(O.CRISIS_TEXT_LINE_URL)
        }
      },
      l = {
        title: I.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE,
        subTitle: I.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_SUBTITLE,
        buttonText: I.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_BUTTON,
        buttonColor: i.ButtonColors.PRIMARY,
        onPress: () => {
          (0, u.default)(O.NOFILTR_URL)
        }
      };
    return [{
      title: I.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
      subTitle: I.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_SUBTITLE,
      buttonText: I.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
      buttonColor: i.ButtonColors.PRIMARY,
      onPress: () => {
        (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await s.el("811578").then(s.bind(s, "811578"));
          return s => {
            let {
              transitionState: l,
              onClose: T
            } = s;
            return (0, a.jsx)(e, {
              transitionState: l,
              onBlock: f,
              onBlockAndReport: N,
              onCancel: () => {
                null == T || T()
              },
              onClose: T,
              userId: t,
              channelId: n
            })
          }
        })
      }
    }, {
      title: I.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
      subTitle: I.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_SUBTITLE,
      buttonText: I.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
      buttonColor: i.ButtonColors.PRIMARY,
      onPress: () => {
        (0, i.closeModal)(O.SAFETY_TOOLS_MODAL_KEY), (0, d.showReportModalForInappropriateConversationSafetyAlert)(o)
      }
    }, r ? e : l, {
      title: I.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_TITLE,
      subTitle: I.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_SUBTITLE,
      buttonText: I.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_BUTTON,
      buttonColor: i.ButtonColors.BRAND,
      onPress: () => {
        (0, c.default)(i.closeAllModals)
      }
    }]
  }, [n, t, o, r, f, N]), M = l.useMemo(() => [{
    title: I.default.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE,
    onPress: () => T(E.SafetyToolsSlides.SAFETY_TIPS)
  }, {
    title: I.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE,
    onPress: () => T(E.SafetyToolsSlides.ABOUT_SAFETY_ALERTS)
  }], [T]);
  return (0, a.jsxs)(A.default, {
    children: [(0, a.jsx)(C, {
      children: h.map(e => {
        let {
          title: t,
          subTitle: s,
          buttonText: l,
          buttonColor: n,
          onPress: T
        } = e;
        return (0, a.jsx)(L, {
          title: t,
          subTitle: s,
          buttonText: l,
          buttonColor: n,
          onPress: T
        }, t)
      })
    }), (0, a.jsx)(C, {
      children: M.map(e => {
        let {
          title: t,
          onPress: s
        } = e;
        return (0, a.jsx)(x, {
          title: t,
          onPress: s
        }, t)
      })
    })]
  })
}