"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
});
var T = s("37983"),
  l = s("884691"),
  a = s("414456"),
  n = s.n(a),
  r = s("669491"),
  o = s("748802"),
  i = s("77078"),
  _ = s("545158"),
  u = s("652126"),
  S = s("161297"),
  d = s("514914"),
  E = s("324252"),
  c = s("782340"),
  A = s("744228");

function O(e) {
  let {
    children: t
  } = e;
  return (0, T.jsx)("div", {
    className: A.actionGroup,
    children: t
  })
}

function I(e) {
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
      children: [(0, T.jsx)(i.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t
      }), (0, T.jsx)(i.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: s
      })]
    }), (0, T.jsx)(i.Button, {
      size: i.Button.Sizes.SMALL,
      color: a,
      onClick: n,
      children: l
    })]
  })
}

function f(e) {
  let {
    title: t,
    onPress: s
  } = e;
  return (0, T.jsxs)(i.Clickable, {
    className: n(A.actionRow, A.clickableActionRow),
    onClick: s,
    children: [(0, T.jsx)(i.Text, {
      variant: "text-md/semibold",
      color: "header-primary",
      children: t
    }), (0, T.jsx)(o.ChevronSmallRightIcon, {
      width: 24,
      height: 24,
      color: r.default.colors.INTERACTIVE_NORMAL
    })]
  })
}
var C = function(e) {
  let {
    transitionToSlide: t
  } = e, a = (0, u.useShouldShowHelplineLink)(), n = l.useMemo(() => {
    let e = {
        title: c.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_TITLE,
        subTitle: c.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_SUBTITLE,
        buttonText: c.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_BUTTON,
        buttonColor: i.ButtonColors.PRIMARY,
        onPress: () => {
          (0, _.default)(E.CRISIS_TEXT_LINE_URL)
        }
      },
      t = {
        title: c.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE,
        subTitle: c.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_SUBTITLE,
        buttonText: c.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_BUTTON,
        buttonColor: i.ButtonColors.PRIMARY,
        onPress: () => {
          (0, _.default)(E.NOFILTR_URL)
        }
      };
    return [{
      title: c.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
      subTitle: c.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_SUBTITLE,
      buttonText: c.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
      buttonColor: i.ButtonColors.PRIMARY,
      onPress: () => {}
    }, {
      title: c.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
      subTitle: c.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_SUBTITLE,
      buttonText: c.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
      buttonColor: i.ButtonColors.PRIMARY,
      onPress: () => {}
    }, a ? e : t, {
      title: c.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_TITLE,
      subTitle: c.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_SUBTITLE,
      buttonText: c.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_BUTTON,
      buttonColor: i.ButtonColors.BRAND,
      onPress: () => {
        (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await s.el("166260").then(s.bind(s, "166260"));
          return t => (0, T.jsx)(e, {
            ...t
          })
        }, {
          onCloseCallback: i.closeAllModals
        })
      }
    }]
  }, [a]), r = l.useMemo(() => [{
    title: c.default.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE,
    onPress: () => t(S.SafetyToolsSlides.SAFETY_TIPS)
  }, {
    title: c.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE,
    onPress: () => t(S.SafetyToolsSlides.ABOUT_SAFETY_ALERTS)
  }], [t]);
  return (0, T.jsxs)(d.default, {
    children: [(0, T.jsx)(O, {
      children: n.map(e => {
        let {
          title: t,
          subTitle: s,
          buttonText: l,
          buttonColor: a,
          onPress: n
        } = e;
        return (0, T.jsx)(I, {
          title: t,
          subTitle: s,
          buttonText: l,
          buttonColor: a,
          onPress: n
        }, t)
      })
    }), (0, T.jsx)(O, {
      children: r.map(e => {
        let {
          title: t,
          onPress: s
        } = e;
        return (0, T.jsx)(f, {
          title: t,
          onPress: s
        }, t)
      })
    })]
  })
}