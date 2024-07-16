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
  I = t(165549);

function S(e) {
  if (null == e)
return !1;
  let {
userStatus: s
  } = e, t = (null == s ? void 0 : s.completedAt) != null && (null == s ? void 0 : s.claimedAt) == null, n = (null == s ? void 0 : s.enrolledAt) != null && (null == s ? void 0 : s.completedAt) == null;
  return t || n || (0, d.Mi)(e, c.jn.GIFT_INVENTORY_FOR_YOU);
}
s.Z = () => {
  (0, l.jU)();
  let {
quests: e,
isFetchingCurrentQuests: s
  } = (0, l.J2)({
fetchPolicy: 'cache-and-network'
  }), t = (0, l.EH)(), N = (0, o.q)({
location: E.dr.USER_SETTINGS_GIFT_INVENTORY
  }), [C, m] = a.useState(!0), [A, h] = a.useState([]), [g, O] = a.useState([]), p = a.useMemo(() => C ? s ? 'unsorted' : 'pending_sort' : 'sorted', [
C,
s
  ]);
  a.useEffect(() => {
m(!0);
  }, [
s,
t
  ]), a.useEffect(() => {
if ('pending_sort' === p) {
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
          _ = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
          E = (null === (a = s.userStatus) || void 0 === a ? void 0 : a.completedAt) != null,
          u = (null === (i = s.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null;
        if (l && !_ && E && !u)
          return 0;
        if (l && !_)
          return -1;
        if (E && !u)
          return 1;
        let T = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null,
          I = (null === (o = s.userStatus) || void 0 === o ? void 0 : o.enrolledAt) != null;
        if (T && !l && I && !E) {
          let {
            percentComplete: t
          } = (0, d.il)(e), {
            percentComplete: n
          } = (0, d.il)(s);
          return n - t;
        }
        if (T && !l)
          return -1;
        if (I && !E)
          return 1;
        let S = (0, d.Mi)(e, c.jn.QUEST_BAR),
          N = (0, d.Mi)(s, c.jn.QUEST_BAR);
        if (S && N)
          return 0;
        if (S)
          return -1;
        if (N)
          return 1;
        let C = (0, d.Mi)(e, c.jn.GIFT_INVENTORY_FOR_YOU),
          m = (0, d.Mi)(s, c.jn.GIFT_INVENTORY_FOR_YOU);
        if (C && !T && !l && m && !I && !E)
          return 0;
        if (C && !T && !l)
          return -1;
        if (m && !I && !E)
          return 1;
        let A = l && _,
          h = E && u;
        return A && !h ? 1 : !A && h ? -1 : 0;
      }).map(e => e.id),
      n = [{
          location: c.jn.GIFT_INVENTORY_FOR_YOU,
          title: T.Z.Messages.QUESTS_FOR_YOU,
          questIds: t.filter(e => S(s.get(e)))
        },
        {
          location: c.jn.GIFT_INVENTORY_OTHER,
          title: T.Z.Messages.QUESTS_OTHER,
          questIds: t.filter(e => !S(s.get(e)))
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
  h(s), O(n), m(!1);
}
  }, [
e,
t,
p
  ]);
  let R = g.every(e => {
let {
  questIds: s
} = e;
return s.length > 0;
  });
  return s || 'sorted' !== p ? (0, n.jsx)(i.Spinner, {
className: I.spinner
  }) : 0 === A.length ? null : (0, n.jsx)(i.FormSection, {
className: I.questsContainer,
children: (0, n.jsxs)(i.HeadingLevel, {
  component: (0, n.jsxs)('div', {
    className: I.questsHeading,
    children: [
      N && (0, n.jsx)(i.QuestsIcon, {
        className: I.questsIcon
      }),
      (0, n.jsx)(i.Heading, {
        variant: 'heading-md/semibold',
        className: I.questsHeading,
        children: T.Z.Messages.QUESTS
      }),
      (0, n.jsx)(i.Text, {
        variant: 'text-xs/normal',
        className: I.questsHeadingLearnMore,
        children: T.Z.Messages.QUESTS_LEARN_MORE_LINK.format({
          questsLearnMoreLink: r.Z.getArticleURL(u.BhN.QUESTS_LEARN_MORE)
        })
      })
    ]
  }),
  children: [
    (0, n.jsx)(i.FormDivider, {
      className: I.divider
    }),
    N ? g.map((e, s, t) => {
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
        className: I.questsListContainer,
        children: [
          R && (0, n.jsx)(i.Text, {
            variant: 'text-xs/semibold',
            color: 'header-secondary',
            className: I.sectionHeader,
            children: o
          }),
          r.map((e, s) => (0, n.jsx)(_.D, {
            questId: e,
            location: a,
            contentPosition: s + l,
            initiallyExpanded: !R
          }, e))
        ]
      }, a);
    }) : A.map((e, s) => (0, n.jsx)(_.D, {
      questId: e,
      location: c.jn.GIFT_INVENTORY_FOR_YOU,
      contentPosition: s
    }, e))
  ]
})
  });
};