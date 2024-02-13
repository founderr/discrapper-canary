"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
});
var T = s("37983"),
  l = s("884691"),
  n = s("414456"),
  o = s.n(n),
  a = s("669491"),
  r = s("748802"),
  _ = s("77078"),
  i = s("652126"),
  S = s("736131"),
  u = s("689294"),
  E = s("782340"),
  d = s("404098");

function O(e) {
  let {
    children: t
  } = e;
  return (0, T.jsx)("div", {
    className: d.actionGroup,
    children: t
  })
}

function A(e) {
  let {
    title: t,
    subTitle: s,
    buttonText: l,
    buttonColor: n,
    onPress: o
  } = e;
  return (0, T.jsxs)("div", {
    className: d.actionRow,
    children: [(0, T.jsxs)("div", {
      className: d.actionButtonDetails,
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
      color: n,
      onClick: o,
      children: l
    })]
  })
}

function c(e) {
  let {
    title: t,
    onPress: s
  } = e;
  return (0, T.jsxs)(_.Clickable, {
    className: o(d.actionRow, d.clickableActionRow),
    onClick: s,
    children: [(0, T.jsx)(_.Text, {
      variant: "text-md/semibold",
      color: "header-primary",
      children: t
    }), (0, T.jsx)(r.ChevronSmallRightIcon, {
      width: 24,
      height: 24,
      color: a.default.colors.INTERACTIVE_NORMAL
    })]
  })
}
var C = function(e) {
  let {
    transitionToSlide: t
  } = e, s = (0, i.useShouldShowHelplineLink)(), n = l.useMemo(() => {
    let e = {
        title: E.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_TITLE,
        subTitle: E.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_SUBTITLE,
        buttonText: E.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_BUTTON,
        buttonColor: _.ButtonColors.PRIMARY,
        onPress: () => {}
      },
      t = {
        title: E.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE,
        subTitle: E.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_SUBTITLE,
        buttonText: E.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_BUTTON,
        buttonColor: _.ButtonColors.PRIMARY,
        onPress: () => {}
      };
    return [{
      title: E.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
      subTitle: E.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_SUBTITLE,
      buttonText: E.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
      buttonColor: _.ButtonColors.PRIMARY,
      onPress: () => {}
    }, {
      title: E.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
      subTitle: E.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_SUBTITLE,
      buttonText: E.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
      buttonColor: _.ButtonColors.PRIMARY,
      onPress: () => {}
    }, s ? e : t, {
      title: E.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_TITLE,
      subTitle: E.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_SUBTITLE,
      buttonText: E.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_BUTTON,
      buttonColor: _.ButtonColors.BRAND,
      onPress: () => {}
    }]
  }, [s]), o = l.useMemo(() => [{
    title: E.default.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE,
    onPress: () => {}
  }, {
    title: E.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE,
    onPress: () => t(S.SafetyToolsSlides.ABOUT_SAFETY_ALERTS)
  }], [t]);
  return (0, T.jsxs)(u.default, {
    children: [(0, T.jsx)(O, {
      children: n.map(e => {
        let {
          title: t,
          subTitle: s,
          buttonText: l,
          buttonColor: n,
          onPress: o
        } = e;
        return (0, T.jsx)(A, {
          title: t,
          subTitle: s,
          buttonText: l,
          buttonColor: n,
          onPress: o
        }, t)
      })
    }), (0, T.jsx)(O, {
      children: o.map(e => {
        let {
          title: t,
          onPress: s
        } = e;
        return (0, T.jsx)(c, {
          title: t,
          onPress: s
        }, t)
      })
    })]
  })
}