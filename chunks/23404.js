n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(663002),
    c = n(481060),
    d = n(210887),
    u = n(617136),
    h = n(272008),
    m = n(113434),
    p = n(569984),
    g = n(497505),
    f = n(918701),
    _ = n(585500),
    E = n(475595),
    I = n(566078),
    C = n(602667),
    v = n(611855),
    S = n(64141),
    N = n(667105),
    T = n(860151),
    b = n(341907),
    A = n(46140),
    x = n(981631),
    Z = n(388032),
    L = n(444865);
function P(e) {
    var t;
    let { quest: n } = e,
        r = (0, m.B6)(n.config.expiresAt),
        l = (0, m.B6)(I.r.build(n.config).rewardsExpireAt),
        a = (0, o.e7)([d.Z], () => d.Z.getState().theme),
        u = (0, s.wj)(a) ? x.BRd.DARK : x.BRd.LIGHT,
        h = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
    return (0, i.jsxs)('div', {
        className: L.heading,
        children: [
            (0, i.jsx)('img', {
                className: L.headingGameTile,
                alt: '',
                src: (0, E.fh)(n, E.eC.GAME_TILE, u).url
            }),
            (0, i.jsxs)('div', {
                className: L.headingCopy,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        children: h ? Z.intl.string(Z.t.XBboAA) : Z.intl.formatToPlainString(Z.t.EQa7oq, { questName: n.config.messages.questName })
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        children: h ? Z.intl.formatToPlainString(Z.t.APddvL, { expirationDate: l }) : Z.intl.formatToPlainString(Z.t['pX+fmp'], { expirationDate: r })
                    })
                ]
            })
        ]
    });
}
t.Z = function (e) {
    var t, n, l;
    let { quest: s } = e,
        d = (0, o.e7)([p.Z], () => p.Z.isEnrolling(s.id), [s]),
        [E, I] = r.useState(!1),
        x = r.useCallback(() => I(!0), []),
        y = r.useCallback(() => I(!1), []),
        O = r.useCallback((e) => {
            e.stopPropagation();
        }, []),
        R = r.useCallback(() => {
            (0, h.AH)(s.id, {
                questContent: g.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.ACCEPT_QUEST
            });
        }, [s]),
        j = r.useCallback(() => {
            null != s &&
                ((0, u._3)({
                    questId: s.id,
                    questContent: g.jn.ACTIVITY_PANEL,
                    questContentCTA: u.jZ.TRACK_PROGRESS
                }),
                (0, b.navigateToQuestHome)(A.dr.ACTIVITY_PANEL, g.jn.ACTIVITY_PANEL, s.id));
        }, [s]),
        D = r.useCallback(() => {
            (0, u._3)({
                questId: s.id,
                questContent: g.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.LEARN_MORE
            }),
                (0, b.navigateToQuestHome)(A.dr.ACTIVITY_PANEL, g.jn.ACTIVITY_PANEL, s.id);
        }, [s]),
        M = (0, N.hf)({
            quest: s,
            location: g.jn.ACTIVITY_PANEL
        }),
        w = (0, m.tP)(s),
        k = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        U = (null === (n = s.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        G = (null === (l = s.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null,
        B = (null == s ? void 0 : s.userStatus) == null || (0, f.zE)(s.userStatus, g.jn.ACTIVITY_PANEL),
        H = (0, m.Rf)(s),
        V = (0, _.D)({
            quest: s,
            taskDetails: H,
            location: A.dr.ACTIVITY_PANEL,
            questContent: g.jn.ACTIVITY_PANEL
        });
    return B || w || G
        ? null
        : (0, i.jsx)(C.A, {
              questOrQuests: s,
              questContent: g.jn.ACTIVITY_PANEL,
              children: (e) => {
                  var t;
                  return (0, i.jsxs)('div', {
                      ref: (t) => {
                          e.current = t;
                      },
                      className: a()(L.wrapper, { [L.wrapperQuestAccepted]: k }),
                      onClick: O,
                      onKeyPress: O,
                      onFocus: x,
                      onMouseEnter: x,
                      onBlur: y,
                      onMouseLeave: y,
                      children: [
                          (0, i.jsxs)('div', {
                              className: L.utils,
                              children: [
                                  k ? (0, i.jsx)(P, { quest: s }) : (0, i.jsx)(v.Z, { textOpacity: 0.5 }),
                                  (0, i.jsx)(S.r, {
                                      quest: s,
                                      questContent: g.jn.ACTIVITY_PANEL,
                                      shouldShowDisclosure: (null === (t = s.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null,
                                      showShareLink: !0,
                                      children: (e) =>
                                          (0, i.jsx)(c.Clickable, {
                                              ...e,
                                              'aria-label': Z.intl.string(Z.t.DEoVWV),
                                              children: (0, i.jsx)(c.MoreHorizontalIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: L.submenuIcon
                                              })
                                          })
                                  })
                              ]
                          }),
                          !k &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(P, { quest: s }),
                                      (0, i.jsx)(c.Text, {
                                          className: L.instructions,
                                          variant: 'text-sm/normal',
                                          color: 'text-normal',
                                          children: V
                                      })
                                  ]
                              }),
                          k &&
                              !U &&
                              (0, i.jsx)(T.Z, {
                                  autoplay: E,
                                  className: L.rewardTileWithInstructions,
                                  quest: s,
                                  questContent: g.jn.ACTIVITY_PANEL,
                                  location: A.dr.ACTIVITY_PANEL,
                                  taskDetails: H
                              }),
                          (0, i.jsxs)('div', {
                              className: L.ctas,
                              children: [
                                  !k &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(c.Button, {
                                                  className: L.cta,
                                                  color: c.Button.Colors.PRIMARY,
                                                  fullWidth: !0,
                                                  size: c.Button.Sizes.SMALL,
                                                  onClick: D,
                                                  children: Z.intl.string(Z.t.LLLLPD)
                                              }),
                                              (0, i.jsx)(c.Button, {
                                                  className: L.cta,
                                                  color: c.Button.Colors.BRAND,
                                                  fullWidth: !0,
                                                  onClick: R,
                                                  size: c.Button.Sizes.SMALL,
                                                  submitting: d,
                                                  children: Z.intl.string(Z.t.l7E81t)
                                              })
                                          ]
                                      }),
                                  k &&
                                      !U &&
                                      (0, i.jsx)(c.Button, {
                                          className: L.cta,
                                          color: c.Button.Colors.BRAND,
                                          fullWidth: !0,
                                          onClick: j,
                                          size: c.Button.Sizes.SMALL,
                                          children: Z.intl.string(Z.t.VN1Ajo)
                                      }),
                                  U &&
                                      (0, i.jsx)(c.Button, {
                                          className: L.cta,
                                          color: c.Button.Colors.BRAND,
                                          fullWidth: !0,
                                          onClick: M,
                                          size: c.Button.Sizes.SMALL,
                                          children: Z.intl.string(Z.t.cfY4PD)
                                      })
                              ]
                          })
                      ]
                  });
              }
          });
};
