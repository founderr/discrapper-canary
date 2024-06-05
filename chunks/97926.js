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

function f(e) {
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
  }), s = (0, d.useExpiredQuestsMap)(), m = (0, o.useIsEligibleForConcurrentQuests)({
    location: E.QuestsExperimentLocations.USER_SETTINGS_GIFT_INVENTORY
  }), N = n.useRef(!0), g = n.useRef([]), h = n.useRef([]);
  n.useEffect(() => {
    N.current = !0
  }, [t, s]), n.useEffect(() => {
    let e = new Set(g.current);
    for (let [t, a] of s)
      if (a && e.has(t)) {
        N.current = !0;
        break
      }
  }, [s]), n.useEffect(() => {
    if (N.current) {
      N.current = !1;
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
            let f = (0, c.isTargetedForContent)(e, u.QuestContent.QUEST_BAR),
              m = (0, c.isTargetedForContent)(t, u.QuestContent.QUEST_BAR);
            if (f && m) return 0;
            if (f) return -1;
            if (m) return 1;
            let N = (0, c.isTargetedForContent)(e, u.QuestContent.GIFT_INVENTORY_FOR_YOU),
              g = (0, c.isTargetedForContent)(t, u.QuestContent.GIFT_INVENTORY_FOR_YOU);
            if (N && !_ && !o && g && !I && !S) return 0;
            if (N && !_ && !o) return -1;
            if (g && !I && !S) return 1;
            let h = o && d,
              C = S && T;
            return h && !C ? 1 : !h && C ? -1 : 0
          }).map(e => e.id),
          a = [{
            location: u.QuestContent.GIFT_INVENTORY_FOR_YOU,
            title: _.default.Messages.QUESTS_FOR_YOU,
            questIds: s.filter(e => f(t.get(e)))
          }, {
            location: u.QuestContent.GIFT_INVENTORY_OTHER,
            title: _.default.Messages.QUESTS_OTHER,
            questIds: s.filter(e => !f(t.get(e)))
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
      g.current = t, h.current = a
    }
  }, [e, s]);
  let C = h.current,
    O = g.current,
    A = C.every(e => {
      let {
        questIds: t
      } = e;
      return t.length > 0
    });
  return t ? (0, a.jsx)(i.Spinner, {
    className: I.spinner
  }) : 0 === O.length ? null : (0, a.jsx)(i.FormSection, {
    className: I.questsContainer,
    children: (0, a.jsxs)(i.HeadingLevel, {
      component: (0, a.jsxs)("div", {
        className: I.questsHeading,
        children: [m && (0, a.jsx)(l.QuestsIcon, {
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
      }), m ? C.map((e, t, s) => {
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
          children: [A && (0, a.jsx)(i.Text, {
            variant: "text-xs/semibold",
            color: "header-secondary",
            className: I.sectionHeader,
            children: r
          }), l.map((e, t) => (0, a.jsx)(S.QuestsCardWrapper, {
            questId: e,
            location: n,
            contentPosition: t + o,
            initiallyExpanded: !A
          }, e))]
        }, n)
      }) : O.map((e, t) => (0, a.jsx)(S.QuestsCardWrapper, {
        questId: e,
        location: u.QuestContent.GIFT_INVENTORY_FOR_YOU,
        contentPosition: t
      }, e))]
    })
  })
}