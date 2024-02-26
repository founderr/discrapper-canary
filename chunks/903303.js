"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var n = s("37983"),
  a = s("884691"),
  l = s("77078"),
  r = s("79112"),
  T = s("701909"),
  o = s("514914"),
  i = s("49111"),
  u = s("782340"),
  _ = s("821054"),
  S = function(e) {
    let {
      onClose: t
    } = e, s = a.useCallback(() => {
      r.default.open(i.UserSettingsSections.PRIVACY_AND_SAFETY), t()
    }, [t]);
    return (0, n.jsxs)(o.default, {
      style: _.wrapperStyle,
      children: [(0, n.jsx)(l.Text, {
        variant: "text-md/medium",
        children: u.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_DESCRIPTION.format({
          learnMoreLink: T.default.getArticleURL(i.HelpdeskArticles.SAFETY_ALERTS)
        })
      }), (0, n.jsx)(l.Button, {
        className: _.settingsButton,
        onClick: s,
        children: u.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_GO_TO_SETTINGS
      })]
    })
  }