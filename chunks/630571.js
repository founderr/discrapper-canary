"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("47120");
var a = n("735250");
n("470079");
var s = n("924826"),
  l = n("844099"),
  i = n("524437"),
  r = n("515753"),
  o = n("100527"),
  u = n("377171"),
  d = n("243778"),
  c = n("26290"),
  f = n("709158"),
  E = n("981631"),
  C = n("921944"),
  h = n("689938"),
  _ = n("981079");
let S = e => {
  let {
    color: t
  } = e;
  return (0, a.jsx)(c.TextBadge, {
    className: _.newBadge,
    color: null != t ? t : u.default.BG_BRAND,
    text: h.default.Messages.NEW
  })
};

function m(e) {
  let {
    selected: t,
    locationState: n
  } = e, u = (0, s.useListItem)("quest-home"), c = o.default.HOME_PAGE_QUEST_HOME_TAB, [_, m] = (0, d.useSelectedDismissibleContent)([i.DismissibleContent.QUEST_HOME_FRIENDS_LIST_NEW_BADGE]), p = (0, f.default)(c);
  return p ? (0, a.jsx)(r.LinkButton, {
    icon: l.QuestsIcon,
    locationState: n,
    route: E.Routes.QUEST_HOME,
    selected: t,
    text: h.default.Messages.QUESTS,
    onClick: () => {
      m(C.ContentDismissActionType.TAKE_ACTION)
    },
    ...u,
    children: _ === i.DismissibleContent.QUEST_HOME_FRIENDS_LIST_NEW_BADGE && (0, a.jsx)(S, {})
  }) : null
}