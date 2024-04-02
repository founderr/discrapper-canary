"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  l = s("481060"),
  i = s("230711"),
  r = s("454175"),
  o = s("761174"),
  d = s("695346"),
  u = s("314897"),
  c = s("981631"),
  S = s("231338"),
  E = s("689938"),
  T = s("630883");

function f(e) {
  d.RecentGamesEnabled.updateSetting(e), e && r.default.fetchUserRecentGames(u.default.getId())
}
t.default = n.memo(function() {
  let e = d.ShowCurrentGame.useSetting(),
    t = (0, o.useIsSelfRecentGamesEnabled)({
      location: "28tk0bf_8"
    });
  return (0, a.jsx)(l.FormSwitch, {
    disabled: !e,
    value: t,
    note: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        children: E.default.Messages.RECENT_GAMES_SETTING_NOTE.format({
          onHelpArticleClick: S.NOOP
        })
      }), (0, a.jsx)(l.Text, {
        className: T.requirement,
        variant: "text-sm/normal",
        color: "text-normal",
        children: E.default.Messages.RECENT_GAMES_SETTING_REQUIREMENT.format({
          onSettingClick: () => {
            i.default.setSection(c.AnalyticsSections.SETTINGS_ACTIVITY_PRIVACY)
          }
        })
      })]
    }),
    onChange: f,
    children: E.default.Messages.USER_RECENT_GAMES_ON_PROFILE
  })
})