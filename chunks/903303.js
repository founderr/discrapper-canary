"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var n = s("37983"),
  a = s("884691"),
  l = s("77078"),
  T = s("79112"),
  r = s("701909"),
  o = s("514914"),
  i = s("49111"),
  S = s("782340"),
  u = s("821054"),
  _ = function(e) {
    let {
      onClose: t
    } = e, s = a.useCallback(() => {
      T.default.open(i.UserSettingsSections.PRIVACY_AND_SAFETY), t()
    }, [t]);
    return (0, n.jsxs)(o.default, {
      style: u.wrapperStyle,
      children: [(0, n.jsx)(l.Text, {
        variant: "text-md/medium",
        children: S.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_DESCRIPTION.format({
          learnMoreLink: r.default.getArticleURL(i.HelpdeskArticles.SAFETY_ALERTS)
        })
      }), (0, n.jsx)(l.Button, {
        className: u.settingsButton,
        onClick: s,
        children: S.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_GO_TO_SETTINGS
      })]
    })
  }