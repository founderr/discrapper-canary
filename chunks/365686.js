"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var T = s("37983"),
  l = s("884691"),
  n = s("77078"),
  o = s("79112"),
  a = s("701909"),
  r = s("689294"),
  _ = s("49111"),
  i = s("782340"),
  S = s("756233"),
  u = function(e) {
    let {
      onClose: t
    } = e, s = l.useCallback(() => {
      o.default.open(_.UserSettingsSections.PRIVACY_AND_SAFETY), t()
    }, [t]);
    return (0, T.jsxs)(r.default, {
      style: S.wrapperStyle,
      children: [(0, T.jsx)(n.Text, {
        variant: "text-md/medium",
        children: i.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_DESCRIPTION.format({
          learnMoreLink: a.default.getArticleURL(_.HelpdeskArticles.SAFETY_ALERTS)
        })
      }), (0, T.jsx)(n.Button, {
        className: S.settingsButton,
        onClick: s,
        children: i.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_GO_TO_SETTINGS
      })]
    })
  }