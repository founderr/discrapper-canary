n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(663002),
    c = n(481060),
    d = n(210887),
    u = n(617136),
    _ = n(272008),
    h = n(113434),
    E = n(569984),
    m = n(497505),
    I = n(918701),
    g = n(585500),
    p = n(566078),
    T = n(602667),
    f = n(611855),
    S = n(670638),
    C = n(667105),
    N = n(860151),
    A = n(341907),
    v = n(46140),
    L = n(981631),
    Z = n(689938),
    R = n(233342);
function O(e) {
    var t;
    let { quest: n } = e,
        a = (0, h.B6)(n.config.expiresAt),
        s = (0, h.B6)(p.r.build(n.config).rewardsExpireAt),
        r = (0, l.e7)([d.Z], () => d.Z.getState().theme),
        u = (0, o.wj)(r) ? L.BRd.DARK : L.BRd.LIGHT,
        _ = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
    return (0, i.jsxs)('div', {
        className: R.heading,
        children: [
            (0, i.jsx)('img', {
                className: R.headingGameTile,
                alt: '',
                src: (0, I.uo)(n, u)
            }),
            (0, i.jsxs)('div', {
                className: R.headingCopy,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        children: _ ? Z.Z.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE_ACTIVITY_PANEL : Z.Z.Messages.QUESTS_TITLE.format({ questName: n.config.messages.questName })
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        children: _ ? Z.Z.Messages.QUESTS_CLAIM_BY_DATE.format({ expirationDate: s }) : Z.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: a })
                    })
                ]
            })
        ]
    });
}
t.Z = function (e) {
    var t, n, s;
    let { quest: o } = e,
        d = (0, l.e7)([E.Z], () => E.Z.isEnrolling(o.id), [o]),
        [p, L] = a.useState(!1),
        x = a.useCallback(() => L(!0), []),
        b = a.useCallback(() => L(!1), []),
        P = a.useCallback((e) => {
            e.stopPropagation();
        }, []),
        M = a.useCallback(() => {
            (0, _.AH)(o.id, {
                questContent: m.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.ACCEPT_QUEST
            });
        }, [o]),
        D = a.useCallback(() => {
            null != o &&
                ((0, u._3)({
                    questId: o.id,
                    questContent: m.jn.ACTIVITY_PANEL,
                    questContentCTA: u.jZ.TRACK_PROGRESS
                }),
                (0, A.navigateToQuestHome)(v.dr.ACTIVITY_PANEL, m.jn.ACTIVITY_PANEL, o.id));
        }, [o]),
        y = a.useCallback(() => {
            (0, u._3)({
                questId: o.id,
                questContent: m.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.LEARN_MORE
            }),
                (0, A.navigateToQuestHome)(v.dr.ACTIVITY_PANEL, m.jn.ACTIVITY_PANEL, o.id);
        }, [o]),
        j = (0, C.hf)({
            quest: o,
            location: m.jn.ACTIVITY_PANEL
        }),
        U = (0, h.tP)(o),
        G = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        w = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        k = (null === (s = o.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null,
        B = (null == o ? void 0 : o.userStatus) == null || (0, I.zE)(o.userStatus, m.jn.ACTIVITY_PANEL),
        H = (0, h.Rf)(o),
        V = (0, g.D)({
            quest: o,
            taskDetails: H,
            location: v.dr.ACTIVITY_PANEL,
            questContent: m.jn.ACTIVITY_PANEL
        });
    return B || U || k || !(0, I.dl)(o)
        ? null
        : (0, i.jsx)(T.A, {
              questOrQuests: o,
              questContent: m.jn.ACTIVITY_PANEL,
              children: (e) => {
                  var t;
                  return (0, i.jsxs)('div', {
                      ref: (t) => {
                          e.current = t;
                      },
                      className: r()(R.wrapper, { [R.wrapperQuestAccepted]: G }),
                      onClick: P,
                      onKeyPress: P,
                      onFocus: x,
                      onMouseEnter: x,
                      onBlur: b,
                      onMouseLeave: b,
                      children: [
                          (0, i.jsxs)('div', {
                              className: R.utils,
                              children: [
                                  G ? (0, i.jsx)(O, { quest: o }) : (0, i.jsx)(f.Z, { textOpacity: 0.5 }),
                                  (0, i.jsx)(S.r, {
                                      quest: o,
                                      questContent: m.jn.ACTIVITY_PANEL,
                                      shouldShowDisclosure: (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null,
                                      showShareLink: !0,
                                      children: (e) =>
                                          (0, i.jsx)(c.Clickable, {
                                              ...e,
                                              'aria-label': Z.Z.Messages.ACTIONS,
                                              children: (0, i.jsx)(c.MoreHorizontalIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: R.submenuIcon
                                              })
                                          })
                                  })
                              ]
                          }),
                          !G &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(O, { quest: o }),
                                      (0, i.jsx)(c.Text, {
                                          className: R.instructions,
                                          variant: 'text-sm/normal',
                                          color: 'text-normal',
                                          children: V
                                      })
                                  ]
                              }),
                          G &&
                              !w &&
                              (0, i.jsx)(N.Z, {
                                  autoplay: p,
                                  className: R.rewardTileWithInstructions,
                                  quest: o,
                                  questContent: m.jn.ACTIVITY_PANEL,
                                  location: v.dr.ACTIVITY_PANEL,
                                  taskDetails: H
                              }),
                          (0, i.jsxs)('div', {
                              className: R.ctas,
                              children: [
                                  !G &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(c.Button, {
                                                  className: R.cta,
                                                  color: c.Button.Colors.PRIMARY,
                                                  fullWidth: !0,
                                                  size: c.Button.Sizes.SMALL,
                                                  onClick: y,
                                                  children: Z.Z.Messages.QUESTS_LEARN_MORE_V2
                                              }),
                                              (0, i.jsx)(c.Button, {
                                                  className: R.cta,
                                                  color: c.Button.Colors.BRAND,
                                                  fullWidth: !0,
                                                  onClick: M,
                                                  size: c.Button.Sizes.SMALL,
                                                  submitting: d,
                                                  children: Z.Z.Messages.QUESTS_ACCEPT_QUEST
                                              })
                                          ]
                                      }),
                                  G &&
                                      !w &&
                                      (0, i.jsx)(c.Button, {
                                          className: R.cta,
                                          color: c.Button.Colors.BRAND,
                                          fullWidth: !0,
                                          onClick: D,
                                          size: c.Button.Sizes.SMALL,
                                          children: Z.Z.Messages.QUESTS_CHECK_PROGRESS
                                      }),
                                  w &&
                                      (0, i.jsx)(c.Button, {
                                          className: R.cta,
                                          color: c.Button.Colors.BRAND,
                                          fullWidth: !0,
                                          onClick: j,
                                          size: c.Button.Sizes.SMALL,
                                          children: Z.Z.Messages.QUESTS_CLAIM_REWARD
                                      })
                              ]
                          })
                      ]
                  });
              }
          });
};
