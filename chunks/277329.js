"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var a = s("735250");
s("470079");
var n = s("442837"),
  l = s("481060"),
  i = s("230711"),
  r = s("574755"),
  o = s("663389"),
  d = s("309739"),
  u = s("293389"),
  c = s("327885"),
  S = s("326528"),
  E = s("332325"),
  T = s("981631"),
  f = s("689938"),
  _ = s("417433");

function m() {
  let e = (0, S.useGameSettingsTabs)(),
    t = (0, n.useStateFromStores)([o.default], () => o.default.getSubsection()),
    s = null != t ? t : e[0].id;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.Heading, {
      className: _.heading,
      variant: "heading-xl/semibold",
      children: f.default.Messages.GAMES
    }), (0, a.jsx)(l.TabBar, {
      className: _.tabBar,
      selectedItem: s,
      onItemSelect: e => {
        i.default.setSection(T.UserSettingsSections.GAMES, e)
      },
      orientation: "horizontal",
      type: "top",
      look: "brand",
      children: e.map(e => (0, a.jsxs)(l.TabBar.Item, {
        className: _.tab,
        id: e.id,
        "aria-label": e.title,
        children: [(0, a.jsx)(e.icon, {
          className: _.tabIcon,
          color: "currentColor"
        }), (0, a.jsx)("div", {
          className: _.iconTitle,
          children: e.title
        })]
      }, e.id))
    }), (() => {
      switch (s) {
        case E.GameSettingsTab.CLIPS:
          return (0, a.jsx)(r.default, {
            className: _.body,
            showHeader: !1
          });
        case E.GameSettingsTab.OVERLAY:
          return (0, a.jsx)(c.default, {
            className: _.body,
            showHeader: !1
          });
        case E.GameSettingsTab.ACTIVITY_PRIVACY:
          return (0, a.jsx)(d.default, {
            className: _.body,
            showHeader: !1
          });
        case E.GameSettingsTab.MY_GAMES:
        default:
          return (0, a.jsx)(u.default, {
            className: _.body,
            showHeader: !1
          })
      }
    })()]
  })
}