t(47120), t(724458);
var n = t(735250),
  a = t(470079),
  i = t(481060),
  r = t(100527),
  o = t(63063),
  l = t(686777),
  c = t(113434),
  d = t(497505),
  _ = t(918701),
  E = t(625252),
  u = t(37303),
  T = t(709158),
  I = t(46140),
  S = t(981631),
  N = t(689938),
  C = t(165549);

function m(e) {
  if (null == e)
return !1;
  let {
userStatus: s
  } = e, t = (null == s ? void 0 : s.completedAt) != null && (null == s ? void 0 : s.claimedAt) == null, n = (null == s ? void 0 : s.enrolledAt) != null && (null == s ? void 0 : s.completedAt) == null;
  return t || n || (0, _.Mi)(e, d.jn.GIFT_INVENTORY_FOR_YOU);
}
s.Z = () => {
  (0, c.jU)();
  let {
quests: e,
isFetchingCurrentQuests: s
  } = (0, c.J2)({
fetchPolicy: 'cache-and-network'
  }), t = (0, c.EH)(), A = (0, l.q)({
location: I.dr.USER_SETTINGS_GIFT_INVENTORY
  }), h = (0, T.Z)(r.Z.USER_SETTINGS_GIFT_INVENTORY), [g, O] = a.useState(!0), [p, R] = a.useState([]), [x, M] = a.useState([]), D = a.useMemo(() => g ? s ? 'unsorted' : 'pending_sort' : 'sorted', [
g,
s
  ]);
  a.useEffect(() => {
O(!0);
  }, [
s,
t
  ]), a.useEffect(() => {
if ('pending_sort' === D) {
  let {
    sortedQuestIds: s,
    sections: n
  } = function(e) {
    let s = new Map(e.map(e => [
        e.id,
        e
      ])),
      t = e.sort((e, s) => {
        var t, n, a, i, r, o;
        let l = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
          c = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
          E = (null === (a = s.userStatus) || void 0 === a ? void 0 : a.completedAt) != null,
          u = (null === (i = s.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null;
        if (l && !c && E && !u)
          return 0;
        if (l && !c)
          return -1;
        if (E && !u)
          return 1;
        let T = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null,
          I = (null === (o = s.userStatus) || void 0 === o ? void 0 : o.enrolledAt) != null;
        if (T && !l && I && !E) {
          let {
            percentComplete: t
          } = (0, _.il)(e), {
            percentComplete: n
          } = (0, _.il)(s);
          return n - t;
        }
        if (T && !l)
          return -1;
        if (I && !E)
          return 1;
        let S = (0, _.Mi)(e, d.jn.QUEST_BAR),
          N = (0, _.Mi)(s, d.jn.QUEST_BAR);
        if (S && N)
          return 0;
        if (S)
          return -1;
        if (N)
          return 1;
        let C = (0, _.Mi)(e, d.jn.GIFT_INVENTORY_FOR_YOU),
          m = (0, _.Mi)(s, d.jn.GIFT_INVENTORY_FOR_YOU);
        if (C && !T && !l && m && !I && !E)
          return 0;
        if (C && !T && !l)
          return -1;
        if (m && !I && !E)
          return 1;
        let A = l && c,
          h = E && u;
        return A && !h ? 1 : !A && h ? -1 : 0;
      }).map(e => e.id),
      n = [{
          location: d.jn.GIFT_INVENTORY_FOR_YOU,
          title: N.Z.Messages.QUESTS_FOR_YOU,
          questIds: t.filter(e => m(s.get(e)))
        },
        {
          location: d.jn.GIFT_INVENTORY_OTHER,
          title: N.Z.Messages.QUESTS_OTHER,
          questIds: t.filter(e => !m(s.get(e)))
        }
      ];
    return {
      sortedQuestIds: t,
      sections: n
    };
  }(e.filter(e => {
    var s, n;
    let a = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.completedAt) != null;
    return !(null !== (n = t.get(e.id)) && void 0 !== n && n) || a;
  }));
  R(s), M(n), O(!1);
}
  }, [
e,
t,
D
  ]);
  let f = x.every(e => {
let {
  questIds: s
} = e;
return s.length > 0;
  });
  return h ? (0, n.jsx)(E.Z, {}) : s || 'sorted' !== D ? (0, n.jsx)(i.Spinner, {
className: C.spinner
  }) : 0 === p.length ? null : (0, n.jsx)(i.FormSection, {
className: C.questsContainer,
children: (0, n.jsxs)(i.HeadingLevel, {
  component: (0, n.jsxs)('div', {
    className: C.questsHeading,
    children: [
      A && (0, n.jsx)(i.QuestsIcon, {
        className: C.questsIcon
      }),
      (0, n.jsx)(i.Heading, {
        variant: 'heading-md/semibold',
        className: C.questsHeading,
        children: N.Z.Messages.QUESTS
      }),
      (0, n.jsx)(i.Text, {
        variant: 'text-xs/normal',
        className: C.questsHeadingLearnMore,
        children: N.Z.Messages.QUESTS_LEARN_MORE_LINK.format({
          questsLearnMoreLink: o.Z.getArticleURL(S.BhN.QUESTS_LEARN_MORE)
        })
      })
    ]
  }),
  children: [
    (0, n.jsx)(i.FormDivider, {
      className: C.divider
    }),
    A ? x.map((e, s, t) => {
      let {
        location: a,
        questIds: r,
        title: o
      } = e;
      if (0 === r.length)
        return null;
      let l = 0 === s ? 0 : t.slice(0, s).reduce((e, s) => {
        let {
          questIds: t
        } = s;
        return e + t.length;
      }, 0);
      return (0, n.jsxs)('section', {
        className: C.questsListContainer,
        children: [
          f && (0, n.jsx)(i.Text, {
            variant: 'text-xs/semibold',
            color: 'header-secondary',
            className: C.sectionHeader,
            children: o
          }),
          r.map((e, s) => (0, n.jsx)(u.D, {
            questId: e,
            location: a,
            contentPosition: s + l,
            initiallyExpanded: !f
          }, e))
        ]
      }, a);
    }) : p.map((e, s) => (0, n.jsx)(u.D, {
      questId: e,
      location: d.jn.GIFT_INVENTORY_FOR_YOU,
      contentPosition: s
    }, e))
  ]
})
  });
};