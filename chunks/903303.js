"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var a = s("37983"),
  l = s("884691"),
  n = s("77078"),
  T = s("79112"),
  r = s("701909"),
  o = s("514914"),
  i = s("49111"),
  u = s("782340"),
  d = s("821054"),
  S = function(e) {
    let {
      onClose: t
    } = e, s = l.useCallback(() => {
      T.default.open(i.UserSettingsSections.PRIVACY_AND_SAFETY), t()
    }, [t]);
    return (0, a.jsxs)(o.default, {
      style: d.wrapperStyle,
      children: [(0, a.jsx)(n.Text, {
        variant: "text-md/medium",
        children: u.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_DESCRIPTION.format({
          learnMoreLink: r.default.getArticleURL(i.HelpdeskArticles.SAFETY_ALERTS)
        })
      }), (0, a.jsx)(n.Button, {
        className: d.settingsButton,
        onClick: s,
        children: u.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_GO_TO_SETTINGS
      })]
    })
  }