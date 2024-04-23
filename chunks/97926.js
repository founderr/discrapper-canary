"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  l = s("481060"),
  i = s("63063"),
  r = s("113434"),
  o = s("497505"),
  d = s("37303"),
  u = s("981631"),
  c = s("689938"),
  S = s("719023");
t.default = () => {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = (0, r.useQuests)({
    fetchPolicy: "cache-and-network"
  });
  (0, r.useDismissNewQuestBadge)();
  let s = (0, r.useExpiredQuestsMap)(),
    E = n.useMemo(() => e.filter(e => {
      var t, a;
      let n = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
      return !(null !== (a = s.get(e.id)) && void 0 !== a && a) || n
    }).sort((e, t) => {
      var s, a, n, l;
      let i = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.completedAt) != null,
        r = (null === (a = e.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null,
        o = (null === (n = t.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        d = (null === (l = t.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null;
      if (i && !r && o && !d) return 0;
      if (i && !r) return -1;
      if (o && !d) return 1;
      let u = i && r,
        c = o && d;
      return u && !c ? 1 : !u && c ? -1 : 0
    }), [e, s]);
  return t ? (0, a.jsx)(l.Spinner, {
    className: S.spinner
  }) : 0 === E.length ? null : (0, a.jsx)(l.FormSection, {
    className: S.questsContainer,
    children: (0, a.jsxs)(l.HeadingLevel, {
      component: (0, a.jsxs)("div", {
        className: S.questsHeading,
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          className: S.questsHeading,
          children: c.default.Messages.QUESTS
        }), (0, a.jsx)(l.Text, {
          variant: "text-xs/normal",
          className: S.questsHeadingLearnMore,
          children: c.default.Messages.QUESTS_LEARN_MORE_LINK.format({
            questsLearnMoreLink: i.default.getArticleURL(u.HelpdeskArticles.QUESTS_LEARN_MORE)
          })
        })]
      }),
      children: [(0, a.jsx)(l.FormDivider, {
        className: S.divider
      }), (0, a.jsx)("div", {
        className: S.questCards,
        children: E.map(e => (0, a.jsx)(d.QuestsCard, {
          quest: e,
          location: o.QuestContent.QUEST_INVENTORY_CARD
        }, e.id))
      })]
    })
  })
}