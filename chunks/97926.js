s(47120), s(724458);
var n = s(735250),
  a = s(470079),
  i = s(481060),
  r = s(100527),
  o = s(63063),
  l = s(686777),
  c = s(113434),
  d = s(497505),
  _ = s(918701),
  E = s(625252),
  u = s(37303),
  T = s(709158),
  I = s(46140),
  S = s(981631),
  N = s(689938),
  C = s(165549);

function m(e) {
  if (null == e)
return !1;
  let {
userStatus: t
  } = e, s = (null == t ? void 0 : t.completedAt) != null && (null == t ? void 0 : t.claimedAt) == null, n = (null == t ? void 0 : t.enrolledAt) != null && (null == t ? void 0 : t.completedAt) == null;
  return s || n || (0, _.Mi)(e, d.jn.GIFT_INVENTORY_FOR_YOU);
}
t.Z = () => {
  (0, c.jU)();
  let {
quests: e,
isFetchingCurrentQuests: t
  } = (0, c.J2)({
fetchPolicy: 'cache-and-network'
  }), s = (0, c.EH)(), A = (0, l.q)({
location: I.dr.USER_SETTINGS_GIFT_INVENTORY
  }), g = (0, T.Z)(r.Z.USER_SETTINGS_GIFT_INVENTORY), [h, O] = a.useState(!0), [p, R] = a.useState([]), [x, M] = a.useState([]), f = a.useMemo(() => h ? t ? 'unsorted' : 'pending_sort' : 'sorted', [
h,
t
  ]);
  a.useEffect(() => {
O(!0);
  }, [
t,
s
  ]), a.useEffect(() => {
if ('pending_sort' === f) {
  let {
    sortedQuestIds: t,
    sections: n
  } = function(e) {
    let t = new Map(e.map(e => [
        e.id,
        e
      ])),
      s = e.sort((e, t) => {
        var s, n, a, i, r, o;
        let l = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.completedAt) != null,
          c = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
          E = (null === (a = t.userStatus) || void 0 === a ? void 0 : a.completedAt) != null,
          u = (null === (i = t.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null;
        if (l && !c && E && !u)
          return 0;
        if (l && !c)
          return -1;
        if (E && !u)
          return 1;
        let T = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null,
          I = (null === (o = t.userStatus) || void 0 === o ? void 0 : o.enrolledAt) != null;
        if (T && !l && I && !E) {
          let {
            percentComplete: s
          } = (0, _.il)(e), {
            percentComplete: n
          } = (0, _.il)(t);
          return n - s;
        }
        if (T && !l)
          return -1;
        if (I && !E)
          return 1;
        let S = (0, _.Mi)(e, d.jn.QUEST_BAR),
          N = (0, _.Mi)(t, d.jn.QUEST_BAR);
        if (S && N)
          return 0;
        if (S)
          return -1;
        if (N)
          return 1;
        let C = (0, _.Mi)(e, d.jn.GIFT_INVENTORY_FOR_YOU),
          m = (0, _.Mi)(t, d.jn.GIFT_INVENTORY_FOR_YOU);
        if (C && !T && !l && m && !I && !E)
          return 0;
        if (C && !T && !l)
          return -1;
        if (m && !I && !E)
          return 1;
        let A = l && c,
          g = E && u;
        return A && !g ? 1 : !A && g ? -1 : 0;
      }).map(e => e.id),
      n = [{
          location: d.jn.GIFT_INVENTORY_FOR_YOU,
          title: N.Z.Messages.QUESTS_FOR_YOU,
          questIds: s.filter(e => m(t.get(e)))
        },
        {
          location: d.jn.GIFT_INVENTORY_OTHER,
          title: N.Z.Messages.QUESTS_OTHER,
          questIds: s.filter(e => !m(t.get(e)))
        }
      ];
    return {
      sortedQuestIds: s,
      sections: n
    };
  }(e.filter(e => {
    var t, n;
    let a = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
    return !(null !== (n = s.get(e.id)) && void 0 !== n && n) || a;
  }));
  R(t), M(n), O(!1);
}
  }, [
e,
s,
f
  ]);
  let D = x.every(e => {
let {
  questIds: t
} = e;
return t.length > 0;
  });
  return t || 'sorted' !== f ? (0, n.jsx)(i.Spinner, {
className: C.spinner
  }) : 0 === p.length ? null : (0, n.jsxs)(i.FormSection, {
className: C.questsContainer,
children: [
  g ? (0, n.jsx)(E.Z, {}) : null,
  (0, n.jsxs)(i.HeadingLevel, {
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
      A ? x.map((e, t, s) => {
        let {
          location: a,
          questIds: r,
          title: o
        } = e;
        if (0 === r.length)
          return null;
        let l = 0 === t ? 0 : s.slice(0, t).reduce((e, t) => {
          let {
            questIds: s
          } = t;
          return e + s.length;
        }, 0);
        return (0, n.jsxs)('section', {
          className: C.questsListContainer,
          children: [
            D && (0, n.jsx)(i.Text, {
              variant: 'text-xs/semibold',
              color: 'header-secondary',
              className: C.sectionHeader,
              children: o
            }),
            r.map((e, t) => (0, n.jsx)(u.D, {
              questId: e,
              location: a,
              contentPosition: t + l,
              initiallyExpanded: !D
            }, e))
          ]
        }, a);
      }) : p.map((e, t) => (0, n.jsx)(u.D, {
        questId: e,
        location: d.jn.GIFT_INVENTORY_FOR_YOU,
        contentPosition: t
      }, e))
    ]
  })
]
  });
};