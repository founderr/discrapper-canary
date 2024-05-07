"use strict";
s.r(t), s("47120");
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
  f = s("689938"),
  m = s("941725");

function _(e) {
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
  }), h = n.useMemo(() => e.filter(e => {
    var t, a;
    let n = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
    return !(null !== (a = s.get(e.id)) && void 0 !== a && a) || n
  }), [e, s]), I = n.useMemo(() => new Map(h.map(e => [e.id, e])), [h]), N = n.useRef(!1), p = n.useRef([]), C = n.useMemo(() => {
    if (0 === h.length) return [];
    if (N.current) return p.current;
    let e = h.sort((e, t) => {
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
      let m = (0, c.isTargetedForContent)(e, u.QuestContent.QUEST_BAR),
        _ = (0, c.isTargetedForContent)(t, u.QuestContent.QUEST_BAR);
      if (m && _) return 0;
      if (m) return -1;
      if (_) return 1;
      let g = (0, c.isTargetedForContent)(e, u.QuestContent.GIFT_INVENTORY_FOR_YOU),
        h = (0, c.isTargetedForContent)(t, u.QuestContent.GIFT_INVENTORY_FOR_YOU);
      if (g && !T && !o && h && !f && !S) return 0;
      if (g && !T && !o) return -1;
      if (h && !f && !S) return 1;
      let I = o && d,
        N = S && E;
      return I && !N ? 1 : !I && N ? -1 : 0
    }).map(e => e.id);
    return N.current = !0, p.current = e, e
  }, [h]), A = n.useRef(null), O = n.useMemo(() => {
    if (null != A.current) return A.current;
    let e = g ? [{
      location: u.QuestContent.GIFT_INVENTORY_FOR_YOU,
      title: f.default.Messages.QUESTS_FOR_YOU,
      questIds: C.filter(e => _(I.get(e)))
    }, {
      location: u.QuestContent.GIFT_INVENTORY_OTHER,
      title: f.default.Messages.QUESTS_OTHER,
      questIds: C.filter(e => !_(I.get(e)))
    }] : [];
    return A.current = e, e
  }, [g, C, I]), x = O.every(e => {
    let {
      questIds: t
    } = e;
    return t.length > 0
  }), R = n.useCallback(e => {
    let {
      questIds: t,
      location: s
    } = e;
    return (0, a.jsx)(a.Fragment, {
      children: t.map(e => {
        let t = I.get(e);
        return null == t ? null : (0, a.jsx)(S.QuestsCard, {
          quest: t,
          location: s,
          initiallyExpanded: !x
        }, t.id)
      })
    })
  }, [x, I]);
  return t ? (0, a.jsx)(i.Spinner, {
    className: m.spinner
  }) : 0 === C.length ? null : (0, a.jsx)(i.FormSection, {
    className: m.questsContainer,
    children: (0, a.jsxs)(i.HeadingLevel, {
      component: (0, a.jsxs)("div", {
        className: m.questsHeading,
        children: [g && (0, a.jsx)(l.QuestsIcon, {
          className: m.questsIcon
        }), (0, a.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          className: m.questsHeading,
          children: f.default.Messages.QUESTS
        }), (0, a.jsx)(i.Text, {
          variant: "text-xs/normal",
          className: m.questsHeadingLearnMore,
          children: f.default.Messages.QUESTS_LEARN_MORE_LINK.format({
            questsLearnMoreLink: r.default.getArticleURL(T.HelpdeskArticles.QUESTS_LEARN_MORE)
          })
        })]
      }),
      children: [(0, a.jsx)(i.FormDivider, {
        className: m.divider
      }), g ? O.map(e => {
        let {
          location: t,
          questIds: s,
          title: n
        } = e;
        return 0 === s.length ? null : (0, a.jsxs)("section", {
          className: m.questsListContainer,
          children: [x && (0, a.jsx)(i.Text, {
            variant: "text-xs/semibold",
            color: "header-secondary",
            className: m.sectionHeader,
            children: n
          }), (0, a.jsx)(R, {
            questIds: s,
            location: t
          })]
        }, t)
      }) : (0, a.jsx)(R, {
        questIds: C,
        location: u.QuestContent.GIFT_INVENTORY_FOR_YOU
      })]
    })
  })
}