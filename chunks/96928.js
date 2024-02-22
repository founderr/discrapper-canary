"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
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
  c = s("161297"),
  E = s("514914"),
  A = s("324252"),
  O = s("782340"),
  I = s("744228");

function C(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)("div", {
    className: I.actionGroup,
    children: t
  })
}

function f(e) {
  let {
    title: t,
    subTitle: s,
    buttonText: l,
    buttonColor: n,
    onPress: T
  } = e;
  return (0, a.jsxs)("div", {
    className: I.actionRow,
    children: [(0, a.jsxs)("div", {
      className: I.actionButtonDetails,
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

function L(e) {
  let {
    title: t,
    onPress: s
  } = e;
  return (0, a.jsxs)(i.Clickable, {
    className: T(I.actionRow, I.clickableActionRow),
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
var x = function(e) {
  let {
    otherUserId: t,
    channelId: n,
    transitionToSlide: T
  } = e, r = (0, S.useShouldShowHelplineLink)(), o = (0, _.useLastChannelMessage)(n), I = l.useCallback(() => {
    (0, i.closeModal)(A.SAFETY_TOOLS_MODAL_KEY)
  }, []), x = l.useCallback(() => {
    (0, i.closeModal)(A.SAFETY_TOOLS_MODAL_KEY)
  }, []), N = l.useMemo(() => {
    let e = {
        title: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_TITLE,
        subTitle: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_SUBTITLE,
        buttonText: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_BUTTON,
        buttonColor: i.ButtonColors.PRIMARY,
        onPress: () => {
          (0, u.default)(A.CRISIS_TEXT_LINE_URL)
        }
      },
      l = {
        title: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE,
        subTitle: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_SUBTITLE,
        buttonText: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_BUTTON,
        buttonColor: i.ButtonColors.PRIMARY,
        onPress: () => {
          (0, u.default)(A.NOFILTR_URL)
        }
      };
    return [{
      title: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
      subTitle: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_SUBTITLE,
      buttonText: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
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
              onBlock: I,
              onBlockAndReport: x,
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
      title: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
      subTitle: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_SUBTITLE,
      buttonText: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
      buttonColor: i.ButtonColors.PRIMARY,
      onPress: () => {
        (0, i.closeModal)(A.SAFETY_TOOLS_MODAL_KEY), (0, d.showReportModalForInappropriateConversationSafetyAlert)(o)
      }
    }, r ? e : l, {
      title: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_TITLE,
      subTitle: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_SUBTITLE,
      buttonText: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_BUTTON,
      buttonColor: i.ButtonColors.BRAND,
      onPress: () => {
        (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await s.el("166260").then(s.bind(s, "166260"));
          return t => (0, a.jsx)(e, {
            ...t
          })
        }, {
          onCloseCallback: i.closeAllModals
        })
      }
    }]
  }, [n, t, o, r, I, x]), h = l.useMemo(() => [{
    title: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE,
    onPress: () => T(c.SafetyToolsSlides.SAFETY_TIPS)
  }, {
    title: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE,
    onPress: () => T(c.SafetyToolsSlides.ABOUT_SAFETY_ALERTS)
  }], [T]);
  return (0, a.jsxs)(E.default, {
    children: [(0, a.jsx)(C, {
      children: N.map(e => {
        let {
          title: t,
          subTitle: s,
          buttonText: l,
          buttonColor: n,
          onPress: T
        } = e;
        return (0, a.jsx)(f, {
          title: t,
          subTitle: s,
          buttonText: l,
          buttonColor: n,
          onPress: T
        }, t)
      })
    }), (0, a.jsx)(C, {
      children: h.map(e => {
        let {
          title: t,
          onPress: s
        } = e;
        return (0, a.jsx)(L, {
          title: t,
          onPress: s
        }, t)
      })
    })]
  })
}