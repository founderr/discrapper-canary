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
  f = s("201403");

function m(e) {
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
  }), s = (0, d.useExpiredQuestsMap)(), g = (0, o.useIsEligibleForConcurrentQuests)({
    location: E.QuestsExperimentLocations.USER_SETTINGS_GIFT_INVENTORY
  }), I = n.useMemo(() => e.filter(e => {
    var t, a;
    let n = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
    return !(null !== (a = s.get(e.id)) && void 0 !== a && a) || n
  }), [e, s]), N = n.useMemo(() => new Map(I.map(e => [e.id, e])), [I]), h = n.useRef(!1), C = n.useRef([]), A = n.useMemo(() => {
    if (0 === I.length) return [];
    if (h.current) return C.current;
    let e = I.sort((e, t) => {
      var s, a, n, l, i, r;
      let o = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.completedAt) != null,
        d = (null === (a = e.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null,
        S = (null === (n = t.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        T = (null === (l = t.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null;
      if (o && !d && S && !T) return 0;
      if (o && !d) return -1;
      if (S && !T) return 1;
      let _ = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null,
        f = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
      if (_ && !o && f && !S) {
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
      if (f && !S) return 1;
      let m = (0, c.isTargetedForContent)(e, u.QuestContent.QUEST_BAR),
        g = (0, c.isTargetedForContent)(t, u.QuestContent.QUEST_BAR);
      if (m && g) return 0;
      if (m) return -1;
      if (g) return 1;
      let I = (0, c.isTargetedForContent)(e, u.QuestContent.GIFT_INVENTORY_FOR_YOU),
        N = (0, c.isTargetedForContent)(t, u.QuestContent.GIFT_INVENTORY_FOR_YOU);
      if (I && !_ && !o && N && !f && !S) return 0;
      if (I && !_ && !o) return -1;
      if (N && !f && !S) return 1;
      let h = o && d,
        C = S && T;
      return h && !C ? 1 : !h && C ? -1 : 0
    }).map(e => e.id);
    return h.current = !0, C.current = e, e
  }, [I]), p = n.useRef(null), O = n.useMemo(() => {
    if (null != p.current) return p.current;
    let e = g ? [{
      location: u.QuestContent.GIFT_INVENTORY_FOR_YOU,
      title: _.default.Messages.QUESTS_FOR_YOU,
      questIds: A.filter(e => m(N.get(e)))
    }, {
      location: u.QuestContent.GIFT_INVENTORY_OTHER,
      title: _.default.Messages.QUESTS_OTHER,
      questIds: A.filter(e => !m(N.get(e)))
    }] : [];
    return p.current = e, e
  }, [g, A, N]), R = O.every(e => {
    let {
      questIds: t
    } = e;
    return t.length > 0
  });
  n.useEffect(() => {
    t && (p.current = null, h.current = !1)
  }, [t]);
  let x = n.useCallback(e => {
    let {
      questIds: t,
      location: s,
      contentPositionOffset: n = 0
    } = e;
    return (0, a.jsx)(a.Fragment, {
      children: t.map((e, t) => {
        let l = N.get(e);
        return null == l ? null : (0, a.jsx)(S.QuestsCard, {
          quest: l,
          location: s,
          initiallyExpanded: !R,
          contentPosition: t + n
        }, l.id)
      })
    })
  }, [R, N]);
  return t ? (0, a.jsx)(i.Spinner, {
    className: f.spinner
  }) : 0 === A.length ? null : (0, a.jsx)(i.FormSection, {
    className: f.questsContainer,
    children: (0, a.jsxs)(i.HeadingLevel, {
      component: (0, a.jsxs)("div", {
        className: f.questsHeading,
        children: [g && (0, a.jsx)(l.QuestsIcon, {
          className: f.questsIcon
        }), (0, a.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          className: f.questsHeading,
          children: _.default.Messages.QUESTS
        }), (0, a.jsx)(i.Text, {
          variant: "text-xs/normal",
          className: f.questsHeadingLearnMore,
          children: _.default.Messages.QUESTS_LEARN_MORE_LINK.format({
            questsLearnMoreLink: r.default.getArticleURL(T.HelpdeskArticles.QUESTS_LEARN_MORE)
          })
        })]
      }),
      children: [(0, a.jsx)(i.FormDivider, {
        className: f.divider
      }), g ? O.map((e, t, s) => {
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
          className: f.questsListContainer,
          children: [R && (0, a.jsx)(i.Text, {
            variant: "text-xs/semibold",
            color: "header-secondary",
            className: f.sectionHeader,
            children: r
          }), (0, a.jsx)(x, {
            questIds: l,
            location: n,
            contentPositionOffset: o
          })]
        }, n)
      }) : (0, a.jsx)(x, {
        questIds: A,
        location: u.QuestContent.GIFT_INVENTORY_FOR_YOU
      })]
    })
  })
}