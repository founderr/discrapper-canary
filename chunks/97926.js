t(47120), t(724458);
var n = t(735250),
  i = t(470079),
  a = t(481060),
  l = t(63063),
  r = t(686777),
  o = t(113434),
  c = t(497505),
  E = t(918701),
  d = t(37303),
  _ = t(46140),
  T = t(981631),
  S = t(689938),
  u = t(179795);

function I(e) {
  if (null == e) return !1;
  let {
    userStatus: s
  } = e, t = (null == s ? void 0 : s.completedAt) != null && (null == s ? void 0 : s.claimedAt) == null, n = (null == s ? void 0 : s.enrolledAt) != null && (null == s ? void 0 : s.completedAt) == null;
  return t || n || (0, E.Mi)(e, c.jn.GIFT_INVENTORY_FOR_YOU)
}
s.Z = () => {
  (0, o.jU)();
  let {
    quests: e,
    isFetchingCurrentQuests: s
  } = (0, o.J2)({
    fetchPolicy: "cache-and-network"
  }), t = (0, o.EH)(), N = (0, r.q)({
    location: _.dr.USER_SETTINGS_GIFT_INVENTORY
  }), [A, C] = i.useState(!0), [O, m] = i.useState([]), [h, g] = i.useState([]), R = i.useMemo(() => A ? s ? "unsorted" : "pending_sort" : "sorted", [A, s]);
  i.useEffect(() => {
    C(!0)
  }, [s, t]), i.useEffect(() => {
    if ("pending_sort" === R) {
      let {
        sortedQuestIds: s,
        sections: n
      } = function(e) {
        let s = new Map(e.map(e => [e.id, e])),
          t = e.sort((e, s) => {
            var t, n, i, a, l, r;
            let o = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
              d = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
              T = (null === (i = s.userStatus) || void 0 === i ? void 0 : i.completedAt) != null,
              S = (null === (a = s.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null;
            if (o && !d && T && !S) return 0;
            if (o && !d) return -1;
            if (T && !S) return 1;
            let u = (null === (l = e.userStatus) || void 0 === l ? void 0 : l.enrolledAt) != null,
              I = (null === (r = s.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
            if (u && !o && I && !T) {
              let {
                percentComplete: t
              } = (0, E.il)({
                quest: e,
                location: _.dr.USER_SETTINGS_GIFT_INVENTORY
              }), {
                percentComplete: n
              } = (0, E.il)({
                quest: s,
                location: _.dr.USER_SETTINGS_GIFT_INVENTORY
              });
              return n - t
            }
            if (u && !o) return -1;
            if (I && !T) return 1;
            let N = (0, E.Mi)(e, c.jn.QUEST_BAR),
              A = (0, E.Mi)(s, c.jn.QUEST_BAR);
            if (N && A) return 0;
            if (N) return -1;
            if (A) return 1;
            let C = (0, E.Mi)(e, c.jn.GIFT_INVENTORY_FOR_YOU),
              O = (0, E.Mi)(s, c.jn.GIFT_INVENTORY_FOR_YOU);
            if (C && !u && !o && O && !I && !T) return 0;
            if (C && !u && !o) return -1;
            if (O && !I && !T) return 1;
            let m = o && d,
              h = T && S;
            return m && !h ? 1 : !m && h ? -1 : 0
          }).map(e => e.id),
          n = [{
            location: c.jn.GIFT_INVENTORY_FOR_YOU,
            title: S.Z.Messages.QUESTS_FOR_YOU,
            questIds: t.filter(e => I(s.get(e)))
          }, {
            location: c.jn.GIFT_INVENTORY_OTHER,
            title: S.Z.Messages.QUESTS_OTHER,
            questIds: t.filter(e => !I(s.get(e)))
          }];
        return {
          sortedQuestIds: t,
          sections: n
        }
      }(e.filter(e => {
        var s, n;
        let i = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.completedAt) != null;
        return !(null !== (n = t.get(e.id)) && void 0 !== n && n) || i
      }));
      m(s), g(n), C(!1)
    }
  }, [e, t, R]);
  let M = h.every(e => {
    let {
      questIds: s
    } = e;
    return s.length > 0
  });
  return s || "sorted" !== R ? (0, n.jsx)(a.Spinner, {
    className: u.spinner
  }) : 0 === O.length ? null : (0, n.jsx)(a.FormSection, {
    className: u.questsContainer,
    children: (0, n.jsxs)(a.HeadingLevel, {
      component: (0, n.jsxs)("div", {
        className: u.questsHeading,
        children: [N && (0, n.jsx)(a.QuestsIcon, {
          className: u.questsIcon
        }), (0, n.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          className: u.questsHeading,
          children: S.Z.Messages.QUESTS
        }), (0, n.jsx)(a.Text, {
          variant: "text-xs/normal",
          className: u.questsHeadingLearnMore,
          children: S.Z.Messages.QUESTS_LEARN_MORE_LINK.format({
            questsLearnMoreLink: l.Z.getArticleURL(T.BhN.QUESTS_LEARN_MORE)
          })
        })]
      }),
      children: [(0, n.jsx)(a.FormDivider, {
        className: u.divider
      }), N ? h.map((e, s, t) => {
        let {
          location: i,
          questIds: l,
          title: r
        } = e;
        if (0 === l.length) return null;
        let o = 0 === s ? 0 : t.slice(0, s).reduce((e, s) => {
          let {
            questIds: t
          } = s;
          return e + t.length
        }, 0);
        return (0, n.jsxs)("section", {
          className: u.questsListContainer,
          children: [M && (0, n.jsx)(a.Text, {
            variant: "text-xs/semibold",
            color: "header-secondary",
            className: u.sectionHeader,
            children: r
          }), l.map((e, s) => (0, n.jsx)(d.D, {
            questId: e,
            location: i,
            contentPosition: s + o,
            initiallyExpanded: !M
          }, e))]
        }, i)
      }) : O.map((e, s) => (0, n.jsx)(d.D, {
        questId: e,
        location: c.jn.GIFT_INVENTORY_FOR_YOU,
        contentPosition: s
      }, e))]
    })
  })
}