t(47120), t(724458);
var n = t(735250),
  a = t(470079),
  i = t(481060),
  r = t(63063),
  o = t(686777),
  l = t(113434),
  c = t(497505),
  d = t(918701),
  _ = t(37303),
  E = t(46140),
  u = t(981631),
  T = t(689938),
  S = t(179795);

function I(e) {
  if (null == e) return !1;
  let {
    userStatus: s
  } = e, t = (null == s ? void 0 : s.completedAt) != null && (null == s ? void 0 : s.claimedAt) == null, n = (null == s ? void 0 : s.enrolledAt) != null && (null == s ? void 0 : s.completedAt) == null;
  return t || n || (0, d.Mi)(e, c.jn.GIFT_INVENTORY_FOR_YOU)
}
s.Z = () => {
  (0, l.jU)();
  let {
    quests: e,
    isFetchingCurrentQuests: s
  } = (0, l.J2)({
    fetchPolicy: "cache-and-network"
  }), t = (0, l.EH)(), N = (0, o.q)({
    location: E.dr.USER_SETTINGS_GIFT_INVENTORY
  }), [C, A] = a.useState(!0), [m, O] = a.useState([]), [g, h] = a.useState([]), R = a.useMemo(() => C ? s ? "unsorted" : "pending_sort" : "sorted", [C, s]);
  a.useEffect(() => {
    A(!0)
  }, [s, t]), a.useEffect(() => {
    if ("pending_sort" === R) {
      let {
        sortedQuestIds: s,
        sections: n
      } = function(e) {
        let s = new Map(e.map(e => [e.id, e])),
          t = e.sort((e, s) => {
            var t, n, a, i, r, o;
            let l = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
              _ = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
              u = (null === (a = s.userStatus) || void 0 === a ? void 0 : a.completedAt) != null,
              T = (null === (i = s.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null;
            if (l && !_ && u && !T) return 0;
            if (l && !_) return -1;
            if (u && !T) return 1;
            let S = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null,
              I = (null === (o = s.userStatus) || void 0 === o ? void 0 : o.enrolledAt) != null;
            if (S && !l && I && !u) {
              let {
                percentComplete: t
              } = (0, d.il)({
                quest: e,
                location: E.dr.USER_SETTINGS_GIFT_INVENTORY
              }), {
                percentComplete: n
              } = (0, d.il)({
                quest: s,
                location: E.dr.USER_SETTINGS_GIFT_INVENTORY
              });
              return n - t
            }
            if (S && !l) return -1;
            if (I && !u) return 1;
            let N = (0, d.Mi)(e, c.jn.QUEST_BAR),
              C = (0, d.Mi)(s, c.jn.QUEST_BAR);
            if (N && C) return 0;
            if (N) return -1;
            if (C) return 1;
            let A = (0, d.Mi)(e, c.jn.GIFT_INVENTORY_FOR_YOU),
              m = (0, d.Mi)(s, c.jn.GIFT_INVENTORY_FOR_YOU);
            if (A && !S && !l && m && !I && !u) return 0;
            if (A && !S && !l) return -1;
            if (m && !I && !u) return 1;
            let O = l && _,
              g = u && T;
            return O && !g ? 1 : !O && g ? -1 : 0
          }).map(e => e.id),
          n = [{
            location: c.jn.GIFT_INVENTORY_FOR_YOU,
            title: T.Z.Messages.QUESTS_FOR_YOU,
            questIds: t.filter(e => I(s.get(e)))
          }, {
            location: c.jn.GIFT_INVENTORY_OTHER,
            title: T.Z.Messages.QUESTS_OTHER,
            questIds: t.filter(e => !I(s.get(e)))
          }];
        return {
          sortedQuestIds: t,
          sections: n
        }
      }(e.filter(e => {
        var s, n;
        let a = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.completedAt) != null;
        return !(null !== (n = t.get(e.id)) && void 0 !== n && n) || a
      }));
      O(s), h(n), A(!1)
    }
  }, [e, t, R]);
  let p = g.every(e => {
    let {
      questIds: s
    } = e;
    return s.length > 0
  });
  return s || "sorted" !== R ? (0, n.jsx)(i.Spinner, {
    className: S.spinner
  }) : 0 === m.length ? null : (0, n.jsx)(i.FormSection, {
    className: S.questsContainer,
    children: (0, n.jsxs)(i.HeadingLevel, {
      component: (0, n.jsxs)("div", {
        className: S.questsHeading,
        children: [N && (0, n.jsx)(i.QuestsIcon, {
          className: S.questsIcon
        }), (0, n.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          className: S.questsHeading,
          children: T.Z.Messages.QUESTS
        }), (0, n.jsx)(i.Text, {
          variant: "text-xs/normal",
          className: S.questsHeadingLearnMore,
          children: T.Z.Messages.QUESTS_LEARN_MORE_LINK.format({
            questsLearnMoreLink: r.Z.getArticleURL(u.BhN.QUESTS_LEARN_MORE)
          })
        })]
      }),
      children: [(0, n.jsx)(i.FormDivider, {
        className: S.divider
      }), N ? g.map((e, s, t) => {
        let {
          location: a,
          questIds: r,
          title: o
        } = e;
        if (0 === r.length) return null;
        let l = 0 === s ? 0 : t.slice(0, s).reduce((e, s) => {
          let {
            questIds: t
          } = s;
          return e + t.length
        }, 0);
        return (0, n.jsxs)("section", {
          className: S.questsListContainer,
          children: [p && (0, n.jsx)(i.Text, {
            variant: "text-xs/semibold",
            color: "header-secondary",
            className: S.sectionHeader,
            children: o
          }), r.map((e, s) => (0, n.jsx)(_.D, {
            questId: e,
            location: a,
            contentPosition: s + l,
            initiallyExpanded: !p
          }, e))]
        }, a)
      }) : m.map((e, s) => (0, n.jsx)(_.D, {
        questId: e,
        location: c.jn.GIFT_INVENTORY_FOR_YOU,
        contentPosition: s
      }, e))]
    })
  })
}