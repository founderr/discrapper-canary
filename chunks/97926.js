"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  l = s("844099"),
  i = s("481060"),
  r = s("63063"),
  o = s("686777"),
  d = s("113434"),
  u = s("497505"),
  c = s("918701"),
  S = s("87894"),
  E = s("37303"),
  T = s("46140"),
  f = s("981631"),
  m = s("689938"),
  _ = s("941725");

function g(e) {
  let {
    userStatus: t
  } = e, s = (null == t ? void 0 : t.completedAt) != null && (null == t ? void 0 : t.claimedAt) == null, a = (null == t ? void 0 : t.enrolledAt) != null && (null == t ? void 0 : t.completedAt) == null;
  return s || a || (0, c.isTargetedForContent)(e, u.QuestContent.GIFT_INVENTORY_FOR_YOU)
}
t.default = () => {
  (0, d.useDismissNewQuestBadge)();
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = (0, d.useQuests)({
    fetchPolicy: "cache-and-network"
  }), s = (0, d.useExpiredQuestsMap)(), h = (0, o.useIsEligibleForConcurrentQuests)({
    location: T.QuestsExperimentLocations.USER_SETTINGS_GIFT_INVENTORY
  }), I = n.useMemo(() => e.filter(e => {
    var t, a;
    let n = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
    return !(null !== (a = s.get(e.id)) && void 0 !== a && a) || n
  }).sort((e, t) => {
    var s, a, n, l, i, r;
    let o = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.completedAt) != null,
      d = (null === (a = e.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null,
      S = (null === (n = t.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
      E = (null === (l = t.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null;
    if (o && !d && S && !E) return 0;
    if (o && !d) return -1;
    if (S && !E) return 1;
    let T = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null,
      f = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
    if (T && !o && f && !S) {
      let s = (0, c.calculatePercentComplete)(e);
      return (0, c.calculatePercentComplete)(t) - s
    }
    if (T && !o) return -1;
    if (f && !S) return 1;
    let m = e.targetedContent.includes(u.QuestContent.GIFT_INVENTORY_FOR_YOU),
      _ = t.targetedContent.includes(u.QuestContent.GIFT_INVENTORY_FOR_YOU);
    if (m && !T && !o && _ && !f && !S) return 0;
    if (m && !T && !o) return -1;
    if (_ && !f && !S) return 1;
    let g = o && d,
      h = S && E;
    return g && !h ? 1 : !g && h ? -1 : 0
  }), [e, s]), N = n.useMemo(() => h ? [{
    section: S.QuestsInventorySection.FOR_YOU,
    title: m.default.Messages.QUESTS_FOR_YOU,
    quests: I.filter(g)
  }, {
    section: S.QuestsInventorySection.OTHER,
    title: m.default.Messages.QUESTS_OTHER,
    quests: I.filter(e => !g(e))
  }] : [], [h, I]), p = n.useCallback(e => {
    let {
      quests: t,
      section: s
    } = e;
    return (0, a.jsx)(a.Fragment, {
      children: t.map(e => (0, a.jsx)(E.QuestsCard, {
        quest: e,
        giftInventorySection: s,
        location: u.QuestContent.QUEST_INVENTORY_CARD
      }, e.id))
    })
  }, []);
  return t ? (0, a.jsx)(i.Spinner, {
    className: _.spinner
  }) : 0 === I.length ? null : (0, a.jsx)(i.FormSection, {
    className: _.questsContainer,
    children: (0, a.jsxs)(i.HeadingLevel, {
      component: (0, a.jsxs)("div", {
        className: _.questsHeading,
        children: [h && (0, a.jsx)(l.QuestsIcon, {
          className: _.questsIcon
        }), (0, a.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          className: _.questsHeading,
          children: m.default.Messages.QUESTS
        }), (0, a.jsx)(i.Text, {
          variant: "text-xs/normal",
          className: _.questsHeadingLearnMore,
          children: m.default.Messages.QUESTS_LEARN_MORE_LINK.format({
            questsLearnMoreLink: r.default.getArticleURL(f.HelpdeskArticles.QUESTS_LEARN_MORE)
          })
        })]
      }),
      children: [(0, a.jsx)(i.FormDivider, {
        className: _.divider
      }), h ? N.map(e => {
        let {
          section: t,
          quests: s,
          title: n
        } = e;
        return 0 === s.length ? null : (0, a.jsxs)("section", {
          className: _.questsListContainer,
          children: [(0, a.jsx)(i.Text, {
            variant: "text-xs/semibold",
            color: "header-secondary",
            className: _.sectionHeader,
            children: n
          }), (0, a.jsx)(p, {
            quests: s,
            section: t
          })]
        }, t)
      }) : (0, a.jsx)(p, {
        quests: I
      })]
    })
  })
}