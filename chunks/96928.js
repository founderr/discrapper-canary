"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
});
var T = s("37983"),
  l = s("884691"),
  a = s("414456"),
  n = s.n(a),
  o = s("669491"),
  r = s("748802"),
  _ = s("77078"),
  i = s("545158"),
  S = s("652126"),
  u = s("161297"),
  E = s("514914"),
  d = s("324252"),
  O = s("782340"),
  A = s("744228");

function c(e) {
  let {
    children: t
  } = e;
  return (0, T.jsx)("div", {
    className: A.actionGroup,
    children: t
  })
}

function C(e) {
  let {
    title: t,
    subTitle: s,
    buttonText: l,
    buttonColor: a,
    onPress: n
  } = e;
  return (0, T.jsxs)("div", {
    className: A.actionRow,
    children: [(0, T.jsxs)("div", {
      className: A.actionButtonDetails,
      children: [(0, T.jsx)(_.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t
      }), (0, T.jsx)(_.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: s
      })]
    }), (0, T.jsx)(_.Button, {
      size: _.Button.Sizes.SMALL,
      color: a,
      onClick: n,
      children: l
    })]
  })
}

function I(e) {
  let {
    title: t,
    onPress: s
  } = e;
  return (0, T.jsxs)(_.Clickable, {
    className: n(A.actionRow, A.clickableActionRow),
    onClick: s,
    children: [(0, T.jsx)(_.Text, {
      variant: "text-md/semibold",
      color: "header-primary",
      children: t
    }), (0, T.jsx)(r.ChevronSmallRightIcon, {
      width: 24,
      height: 24,
      color: o.default.colors.INTERACTIVE_NORMAL
    })]
  })
}
var L = function(e) {
  let {
    transitionToSlide: t
  } = e, a = (0, S.useShouldShowHelplineLink)(), n = l.useMemo(() => {
    let e = {
        title: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_TITLE,
        subTitle: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_SUBTITLE,
        buttonText: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_BUTTON,
        buttonColor: _.ButtonColors.PRIMARY,
        onPress: () => {
          (0, i.default)(d.CRISIS_TEXT_LINE_URL)
        }
      },
      t = {
        title: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE,
        subTitle: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_SUBTITLE,
        buttonText: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_BUTTON,
        buttonColor: _.ButtonColors.PRIMARY,
        onPress: () => {
          (0, i.default)(d.NOFILTR_URL)
        }
      };
    return [{
      title: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
      subTitle: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_SUBTITLE,
      buttonText: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
      buttonColor: _.ButtonColors.PRIMARY,
      onPress: () => {}
    }, {
      title: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
      subTitle: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_SUBTITLE,
      buttonText: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
      buttonColor: _.ButtonColors.PRIMARY,
      onPress: () => {}
    }, a ? e : t, {
      title: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_TITLE,
      subTitle: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_SUBTITLE,
      buttonText: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_BUTTON,
      buttonColor: _.ButtonColors.BRAND,
      onPress: () => {
        (0, _.openModalLazy)(async () => {
          let {
            default: e
          } = await s.el("166260").then(s.bind(s, "166260"));
          return t => (0, T.jsx)(e, {
            ...t
          })
        }, {
          onCloseCallback: _.closeAllModals
        })
      }
    }]
  }, [a]), o = l.useMemo(() => [{
    title: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE,
    onPress: () => {}
  }, {
    title: O.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE,
    onPress: () => t(u.SafetyToolsSlides.ABOUT_SAFETY_ALERTS)
  }], [t]);
  return (0, T.jsxs)(E.default, {
    children: [(0, T.jsx)(c, {
      children: n.map(e => {
        let {
          title: t,
          subTitle: s,
          buttonText: l,
          buttonColor: a,
          onPress: n
        } = e;
        return (0, T.jsx)(C, {
          title: t,
          subTitle: s,
          buttonText: l,
          buttonColor: a,
          onPress: n
        }, t)
      })
    }), (0, T.jsx)(c, {
      children: o.map(e => {
        let {
          title: t,
          onPress: s
        } = e;
        return (0, T.jsx)(I, {
          title: t,
          onPress: s
        }, t)
      })
    })]
  })
}