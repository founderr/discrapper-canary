"use strict";
s.r(t), s("47120"), s("724458");
var a = s("735250"),
  n = s("470079"),
  l = s("844099"),
  i = s("481060"),
  r = s("63063"),
  o = s("686777"),
  d = s("113434"),
  u = s("497505"),
  c = s("918701"),
  S = s("37303"),
  E = s("46140"),
  T = s("981631"),
  _ = s("689938"),
  I = s("201403");

function N(e) {
  if (null == e) return !1;
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
  }), s = (0, d.useExpiredQuestsMap)(), f = (0, o.useIsEligibleForConcurrentQuests)({
    location: E.QuestsExperimentLocations.USER_SETTINGS_GIFT_INVENTORY
  }), [g, m] = n.useState(!0), [C, A] = n.useState([]), [h, O] = n.useState([]), p = n.useMemo(() => g ? t ? "unsorted" : "pending_sort" : "sorted", [g, t]);
  n.useEffect(() => {
    m(!0)
  }, [t, s]), n.useEffect(() => {
    if ("pending_sort" === p) {
      let {
        sortedQuestIds: t,
        sections: a
      } = function(e) {
        let t = new Map(e.map(e => [e.id, e])),
          s = e.sort((e, t) => {
            var s, a, n, l, i, r;
            let o = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.completedAt) != null,
              d = (null === (a = e.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null,
              S = (null === (n = t.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
              T = (null === (l = t.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null;
            if (o && !d && S && !T) return 0;
            if (o && !d) return -1;
            if (S && !T) return 1;
            let _ = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null,
              I = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
            if (_ && !o && I && !S) {
              let s = (0, c.calculatePercentComplete)({
                quest: e,
                location: E.QuestsExperimentLocations.USER_SETTINGS_GIFT_INVENTORY
              });
              return (0, c.calculatePercentComplete)({
                quest: t,
                location: E.QuestsExperimentLocations.USER_SETTINGS_GIFT_INVENTORY
              }) - s
            }
            if (_ && !o) return -1;
            if (I && !S) return 1;
            let N = (0, c.isTargetedForContent)(e, u.QuestContent.QUEST_BAR),
              f = (0, c.isTargetedForContent)(t, u.QuestContent.QUEST_BAR);
            if (N && f) return 0;
            if (N) return -1;
            if (f) return 1;
            let g = (0, c.isTargetedForContent)(e, u.QuestContent.GIFT_INVENTORY_FOR_YOU),
              m = (0, c.isTargetedForContent)(t, u.QuestContent.GIFT_INVENTORY_FOR_YOU);
            if (g && !_ && !o && m && !I && !S) return 0;
            if (g && !_ && !o) return -1;
            if (m && !I && !S) return 1;
            let C = o && d,
              A = S && T;
            return C && !A ? 1 : !C && A ? -1 : 0
          }).map(e => e.id),
          a = [{
            location: u.QuestContent.GIFT_INVENTORY_FOR_YOU,
            title: _.default.Messages.QUESTS_FOR_YOU,
            questIds: s.filter(e => N(t.get(e)))
          }, {
            location: u.QuestContent.GIFT_INVENTORY_OTHER,
            title: _.default.Messages.QUESTS_OTHER,
            questIds: s.filter(e => !N(t.get(e)))
          }];
        return {
          sortedQuestIds: s,
          sections: a
        }
      }(e.filter(e => {
        var t, a;
        let n = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
        return !(null !== (a = s.get(e.id)) && void 0 !== a && a) || n
      }));
      A(t), O(a), m(!1)
    }
  }, [e, s, p]);
  let R = h.every(e => {
    let {
      questIds: t
    } = e;
    return t.length > 0
  });
  return t || "sorted" !== p ? (0, a.jsx)(i.Spinner, {
    className: I.spinner
  }) : 0 === C.length ? null : (0, a.jsx)(i.FormSection, {
    className: I.questsContainer,
    children: (0, a.jsxs)(i.HeadingLevel, {
      component: (0, a.jsxs)("div", {
        className: I.questsHeading,
        children: [f && (0, a.jsx)(l.QuestsIcon, {
          className: I.questsIcon
        }), (0, a.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          className: I.questsHeading,
          children: _.default.Messages.QUESTS
        }), (0, a.jsx)(i.Text, {
          variant: "text-xs/normal",
          className: I.questsHeadingLearnMore,
          children: _.default.Messages.QUESTS_LEARN_MORE_LINK.format({
            questsLearnMoreLink: r.default.getArticleURL(T.HelpdeskArticles.QUESTS_LEARN_MORE)
          })
        })]
      }),
      children: [(0, a.jsx)(i.FormDivider, {
        className: I.divider
      }), f ? h.map((e, t, s) => {
        let {
          location: n,
          questIds: l,
          title: r
        } = e;
        if (0 === l.length) return null;
        let o = 0 === t ? 0 : s.slice(0, t).reduce((e, t) => {
          let {
            questIds: s
          } = t;
          return e + s.length
        }, 0);
        return (0, a.jsxs)("section", {
          className: I.questsListContainer,
          children: [R && (0, a.jsx)(i.Text, {
            variant: "text-xs/semibold",
            color: "header-secondary",
            className: I.sectionHeader,
            children: r
          }), l.map((e, t) => (0, a.jsx)(S.QuestsCardWrapper, {
            questId: e,
            location: n,
            contentPosition: t + o,
            initiallyExpanded: !R
          }, e))]
        }, n)
      }) : C.map((e, t) => (0, a.jsx)(S.QuestsCardWrapper, {
        questId: e,
        location: u.QuestContent.GIFT_INVENTORY_FOR_YOU,
        contentPosition: t
      }, e))]
    })
  })
}