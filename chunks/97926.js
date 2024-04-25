"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  l = s("481060"),
  i = s("63063"),
  r = s("113434"),
  o = s("497505"),
  d = s("918701"),
  u = s("37303"),
  c = s("981631"),
  S = s("689938"),
  E = s("719023");
t.default = () => {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = (0, r.useQuests)({
    fetchPolicy: "cache-and-network"
  });
  (0, r.useDismissNewQuestBadge)();
  let s = (0, r.useExpiredQuestsMap)(),
    T = n.useMemo(() => e.filter(e => {
      var t, a;
      let n = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
      return !(null !== (a = s.get(e.id)) && void 0 !== a && a) || n
    }).sort((e, t) => {
      var s, a, n, l, i, r;
      let u = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.completedAt) != null,
        c = (null === (a = e.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null,
        S = (null === (n = t.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        E = (null === (l = t.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null;
      if (u && !c && S && !E) return 0;
      if (u && !c) return -1;
      if (S && !E) return 1;
      let T = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null,
        m = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
      if (T && !u && m && !S) {
        let s = (0, d.calculatePercentComplete)(e);
        return (0, d.calculatePercentComplete)(t) - s
      }
      if (T && !u) return -1;
      if (m && !S) return 1;
      let f = e.targetedContent.includes(o.QuestContent.GIFT_INVENTORY_FOR_YOU),
        _ = t.targetedContent.includes(o.QuestContent.GIFT_INVENTORY_FOR_YOU);
      if (f && !T && !u && _ && !m && !S) return 0;
      if (f && !T && !u) return -1;
      if (_ && !m && !S) return 1;
      let g = u && c,
        h = S && E;
      return g && !h ? 1 : !g && h ? -1 : 0
    }), [e, s]);
  return t ? (0, a.jsx)(l.Spinner, {
    className: E.spinner
  }) : 0 === T.length ? null : (0, a.jsx)(l.FormSection, {
    className: E.questsContainer,
    children: (0, a.jsxs)(l.HeadingLevel, {
      component: (0, a.jsxs)("div", {
        className: E.questsHeading,
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          className: E.questsHeading,
          children: S.default.Messages.QUESTS
        }), (0, a.jsx)(l.Text, {
          variant: "text-xs/normal",
          className: E.questsHeadingLearnMore,
          children: S.default.Messages.QUESTS_LEARN_MORE_LINK.format({
            questsLearnMoreLink: i.default.getArticleURL(c.HelpdeskArticles.QUESTS_LEARN_MORE)
          })
        })]
      }),
      children: [(0, a.jsx)(l.FormDivider, {
        className: E.divider
      }), (0, a.jsx)("div", {
        className: E.questCards,
        children: T.map(e => (0, a.jsx)(u.QuestsCard, {
          quest: e,
          location: o.QuestContent.QUEST_INVENTORY_CARD
        }, e.id))
      })]
    })
  })
}