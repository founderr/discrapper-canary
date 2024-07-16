n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(442837),
  o = n(663002),
  c = n(481060),
  d = n(230711),
  u = n(210887),
  _ = n(617136),
  E = n(272008),
  h = n(113434),
  I = n(569984),
  m = n(497505),
  g = n(918701),
  p = n(585500),
  T = n(566078),
  S = n(602667),
  f = n(611855),
  C = n(670638),
  N = n(667105),
  A = n(860151),
  v = n(46140),
  Z = n(981631),
  L = n(689938),
  O = n(921430);

function R(e) {
  var t;
  let {
quest: n
  } = e, a = (0, h.B6)(n.config.expiresAt), s = (0, h.B6)(T.r.build(n.config).rewardsExpireAt), r = (0, l.e7)([u.Z], () => u.Z.getState().theme), d = (0, o.w)(r) ? Z.BRd.DARK : Z.BRd.LIGHT, _ = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
  return (0, i.jsxs)('div', {
className: O.heading,
children: [
  (0, i.jsx)('img', {
    className: O.headingGameTile,
    alt: '',
    src: (0, g.uo)(n, d)
  }),
  (0, i.jsxs)('div', {
    className: O.headingCopy,
    children: [
      (0, i.jsx)(c.Heading, {
        variant: 'heading-md/semibold',
        color: 'header-primary',
        children: _ ? L.Z.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE_ACTIVITY_PANEL : L.Z.Messages.QUESTS_TITLE.format({
          questName: n.config.messages.questName
        })
      }),
      (0, i.jsx)(c.Text, {
        variant: 'text-xs/normal',
        color: 'header-secondary',
        children: _ ? L.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
          expirationDate: s
        }) : L.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
          expirationDate: a
        })
      })
    ]
  })
]
  });
}
t.Z = function(e) {
  var t, n, s;
  let {
quest: o
  } = e, u = (0, l.e7)([I.Z], () => I.Z.isEnrolling(o.id), [o]), [T, x] = a.useState(!1), b = a.useCallback(() => x(!0), []), P = a.useCallback(() => x(!1), []), M = a.useCallback(e => {
e.stopPropagation();
  }, []), D = a.useCallback(() => {
(0, E.AH)(o.id, {
  questContent: m.jn.ACTIVITY_PANEL,
  questContentCTA: _.jZ.ACCEPT_QUEST
});
  }, [o]), y = a.useCallback(() => {
null != o && ((0, _._3)({
  questId: o.id,
  questContent: m.jn.ACTIVITY_PANEL,
  questContentCTA: _.jZ.TRACK_PROGRESS
}), d.Z.open(Z.oAB.INVENTORY));
  }, [o]), j = a.useCallback(() => {
(0, _._3)({
  questId: o.id,
  questContent: m.jn.ACTIVITY_PANEL,
  questContentCTA: _.jZ.LEARN_MORE
}), d.Z.open(Z.oAB.INVENTORY);
  }, [o]), U = (0, N.hf)({
quest: o,
location: m.jn.ACTIVITY_PANEL
  }), G = (0, h.tP)(o), k = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, w = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, B = (null === (s = o.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null, H = (null == o ? void 0 : o.userStatus) == null || (0, g.zE)(o.userStatus, m.jn.ACTIVITY_PANEL), V = (0, h.Rf)(o), F = (0, p.D)({
quest: o,
taskDetails: V,
location: v.dr.ACTIVITY_PANEL,
questContent: m.jn.ACTIVITY_PANEL
  });
  return H || G || B || !(0, g.dl)(o) ? null : (0, i.jsx)(S.A, {
questOrQuests: o,
questContent: m.jn.ACTIVITY_PANEL,
children: e => {
  var t;
  return (0, i.jsxs)('div', {
    ref: t => {
      e.current = t;
    },
    className: r()(O.wrapper, {
      [O.wrapperQuestAccepted]: k
    }),
    onClick: M,
    onKeyPress: M,
    onFocus: b,
    onMouseEnter: b,
    onBlur: P,
    onMouseLeave: P,
    children: [
      (0, i.jsxs)('div', {
        className: O.utils,
        children: [
          k ? (0, i.jsx)(R, {
            quest: o
          }) : (0, i.jsx)(f.Z, {
            textOpacity: 0.5
          }),
          (0, i.jsx)(C.r, {
            quest: o,
            questContent: m.jn.ACTIVITY_PANEL,
            shouldShowDisclosure: (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null,
            showShareLink: !0,
            children: e => (0, i.jsx)(c.Clickable, {
              ...e,
              'aria-label': L.Z.Messages.ACTIONS,
              children: (0, i.jsx)(c.MoreHorizontalIcon, {
                size: 'md',
                color: 'currentColor',
                className: O.submenuIcon
              })
            })
          })
        ]
      }),
      !k && (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(R, {
            quest: o
          }),
          (0, i.jsx)(c.Text, {
            className: O.instructions,
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: F
          })
        ]
      }),
      k && !w && (0, i.jsx)(A.Z, {
        autoplay: T,
        className: O.rewardTileWithInstructions,
        quest: o,
        questContent: m.jn.ACTIVITY_PANEL,
        location: v.dr.ACTIVITY_PANEL,
        taskDetails: V
      }),
      (0, i.jsxs)('div', {
        className: O.ctas,
        children: [
          !k && (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(c.Button, {
                className: O.cta,
                color: c.Button.Colors.PRIMARY,
                fullWidth: !0,
                size: c.Button.Sizes.SMALL,
                onClick: j,
                children: L.Z.Messages.QUESTS_LEARN_MORE_V2
              }),
              (0, i.jsx)(c.Button, {
                className: O.cta,
                color: c.Button.Colors.BRAND,
                fullWidth: !0,
                onClick: D,
                size: c.Button.Sizes.SMALL,
                submitting: u,
                children: L.Z.Messages.QUESTS_ACCEPT_QUEST
              })
            ]
          }),
          k && !w && (0, i.jsx)(c.Button, {
            className: O.cta,
            color: c.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: y,
            size: c.Button.Sizes.SMALL,
            children: L.Z.Messages.QUESTS_CHECK_PROGRESS
          }),
          w && (0, i.jsx)(c.Button, {
            className: O.cta,
            color: c.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: U,
            size: c.Button.Sizes.SMALL,
            children: L.Z.Messages.QUESTS_CLAIM_REWARD
          })
        ]
      })
    ]
  });
}
  });
};