l.d(n, {
    Z: function () {
        return P;
    }
}),
    l(47120);
var a = l(200651),
    i = l(192379),
    t = l(120356),
    r = l.n(t),
    s = l(399606),
    d = l(481060),
    c = l(749210),
    o = l(131388),
    u = l(367907),
    h = l(644080),
    m = l(984370),
    g = l(6025),
    x = l(433355),
    C = l(626135),
    f = l(526120),
    v = l(563534),
    I = l(846121),
    Z = l(460347),
    p = l(404488),
    j = l(605276),
    N = l(869764),
    _ = l(919318),
    b = l(150512),
    E = l(981631),
    A = l(176505),
    S = l(388032),
    k = l(469085),
    y = l(784237);
let w = p.q + 300 + 64,
    M = i.memo(function (e) {
        let { guild: n } = e;
        return (0, a.jsxs)(m.Z, {
            channelId: A.oC.GUILD_HOME,
            guildId: n.id,
            className: r()(k.title, k.background),
            innerClassname: k.headerBarInner,
            children: [
                (0, a.jsx)(m.Z.Icon, {
                    icon: d.SignPostIcon,
                    'aria-hidden': !0
                }),
                (0, a.jsxs)(m.Z.Title, {
                    children: [(0, a.jsx)(d.HiddenVisually, { children: n.name }), S.intl.string(S.t.VbpLyc)]
                })
            ]
        });
    });
function P(e) {
    var n, l;
    let { guild: t, width: m } = e,
        S = (0, s.e7)([x.ZP], () => x.ZP.getSection(A.oC.GUILD_HOME)),
        [P, B] = i.useState(!1),
        [H, R] = i.useState(E.$Y6),
        T = S === E.ULH.SIDEBAR_CHAT,
        L = (0, d.useFocusJumpSection)(),
        D = (0, s.e7)([v.Z], () => v.Z.getSettings(t.id)),
        W = null == D ? void 0 : D.welcomeMessage,
        U = (0, Z.Z)(t.id),
        z = !U && (null !== (l = null == D ? void 0 : null === (n = D.resourceChannels) || void 0 === n ? void 0 : n.length) && void 0 !== l ? l : 0) === 0,
        G = (0, o.Z)('(max-width: 1300px)'),
        O = m - E.PrS - H,
        F = (T && O < w) || G || z;
    return (i.useEffect(() => {
        if (D === v.P) (0, f.cP)(t.id);
        else if (null != D) {
            var e, n, l, a, i;
            C.default.track(E.rMx.SERVER_GUIDE_VIEWED, {
                ...(0, u.hH)(t.id),
                num_member_actions: null !== (l = null === (e = D.newMemberActions) || void 0 === e ? void 0 : e.length) && void 0 !== l ? l : 0,
                num_member_actions_completed: Object.keys(null !== (a = I.Z.getCompletedActions(t.id)) && void 0 !== a ? a : {}).length,
                num_resource_channels: null !== (i = null === (n = D.resourceChannels) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0
            });
        }
    }, [t.id, D]),
    i.useEffect(
        () => () => {
            g.Z.closeChannelSidebar(A.oC.GUILD_HOME);
        },
        []
    ),
    i.useEffect(() => {
        z && D !== v.P && c.Z.escapeToDefaultChannel(t.id);
    }, [t.id, z, D]),
    z)
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsxs)('div', {
                      className: r()(y.chat, k.background, {
                          [y.threadSidebarOpen]: T,
                          [y.threadSidebarFloating]: T && P
                      }),
                      children: [
                          (0, a.jsx)(M, { guild: t }),
                          (0, a.jsx)(d.AdvancedScrollerAuto, {
                              ...L,
                              children: (0, a.jsxs)('div', {
                                  className: r()(k.homeContainer, { [k.homeContainerCollapsed]: F }),
                                  children: [
                                      (0, a.jsx)('div', {
                                          className: k.maxWidthWrapper,
                                          children: (0, a.jsx)(h.Z, {
                                              guild: t,
                                              titleClassName: G ? k.emptyHeaderTitle : void 0
                                          })
                                      }),
                                      (0, a.jsxs)('div', {
                                          className: r()(k.homeContent, k.maxWidthWrapper),
                                          children: [
                                              (0, a.jsxs)('div', {
                                                  className: k.mainContent,
                                                  children: [
                                                      U &&
                                                          (0, a.jsx)(b.Z, {
                                                              guildId: t.id,
                                                              welcomeMessage: W
                                                          }),
                                                      U && (0, a.jsx)(N.Z, { guildId: t.id }),
                                                      !U || F
                                                          ? (0, a.jsx)(_.ZP, {
                                                                guild: t,
                                                                isNewMember: U
                                                            })
                                                          : null
                                                  ]
                                              }),
                                              F
                                                  ? null
                                                  : (0, a.jsx)(j.Z, {
                                                        guild: t,
                                                        isNewMember: U
                                                    })
                                          ]
                                      })
                                  ]
                              })
                          })
                      ]
                  }),
                  T
                      ? (0, a.jsx)(p.Z, {
                            pageWidth: m,
                            onSidebarResize: (e, n) => {
                                B(n), R(e);
                            }
                        })
                      : null
              ]
          });
}
