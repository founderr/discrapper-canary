"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var T = s("37983"),
  l = s("884691"),
  a = s("77078"),
  n = s("79112"),
  r = s("701909"),
  o = s("514914"),
  i = s("49111"),
  _ = s("782340"),
  u = s("821054"),
  S = function(e) {
    let {
      onClose: t
    } = e, s = l.useCallback(() => {
      n.default.open(i.UserSettingsSections.PRIVACY_AND_SAFETY), t()
    }, [t]);
    return (0, T.jsxs)(o.default, {
      style: u.wrapperStyle,
      children: [(0, T.jsx)(a.Text, {
        variant: "text-md/medium",
        children: _.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_DESCRIPTION.format({
          learnMoreLink: r.default.getArticleURL(i.HelpdeskArticles.SAFETY_ALERTS)
        })
      }), (0, T.jsx)(a.Button, {
        className: u.settingsButton,
        onClick: s,
        children: _.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_GO_TO_SETTINGS
      })]
    })
  }