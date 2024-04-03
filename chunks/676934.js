"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  l = s("481060"),
  i = s("230711"),
  r = s("454175"),
  o = s("111510"),
  d = s("761174"),
  u = s("695346"),
  c = s("314897"),
  S = s("981631"),
  E = s("231338"),
  T = s("689938"),
  f = s("630883");

function m(e) {
  u.RecentGamesEnabled.updateSetting(e), e && r.default.fetchUserRecentGames(c.default.getId()), !e && (0, o.trackDisableRecentGamesSetting)()
}
t.default = n.memo(function() {
  let e = u.ShowCurrentGame.useSetting(),
    t = (0, d.useIsSelfRecentGamesEnabled)({
      location: "28tk0bf_8"
    });
  return (0, a.jsx)(l.FormSwitch, {
    disabled: !e,
    value: t,
    note: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        children: T.default.Messages.RECENT_GAMES_SETTING_NOTE.format({
          onHelpArticleClick: E.NOOP
        })
      }), (0, a.jsx)(l.Text, {
        className: f.requirement,
        variant: "text-sm/normal",
        color: "text-normal",
        children: T.default.Messages.RECENT_GAMES_SETTING_REQUIREMENT.format({
          onSettingClick: () => {
            i.default.setSection(S.AnalyticsSections.SETTINGS_ACTIVITY_PRIVACY)
          }
        })
      })]
    }),
    onChange: m,
    children: T.default.Messages.USER_RECENT_GAMES_ON_PROFILE
  })
})