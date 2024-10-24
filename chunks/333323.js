l.d(n, {
    Z: function () {
        return k;
    }
}),
    l(47120);
var a = l(200651),
    i = l(192379),
    r = l(120356),
    t = l.n(r),
    s = l(399606),
    d = l(481060),
    c = l(749210),
    o = l(131388),
    u = l(367907),
    h = l(644080),
    m = l(984370),
    g = l(6025),
    C = l(433355),
    x = l(626135),
    f = l(526120),
    I = l(563534),
    v = l(846121),
    _ = l(460347),
    Z = l(404488),
    N = l(605276),
    j = l(869764),
    p = l(919318),
    b = l(150512),
    E = l(981631),
    M = l(176505),
    A = l(689938),
    S = l(469085),
    T = l(784237);
let R = Z.q + 300 + 64,
    P = i.memo(function (e) {
        let { guild: n } = e;
        return (0, a.jsxs)(m.Z, {
            channelId: M.oC.GUILD_HOME,
            guildId: n.id,
            className: t()(S.title, S.background),
            innerClassname: S.headerBarInner,
            children: [
                (0, a.jsx)(m.Z.Icon, {
                    icon: d.SignPostIcon,
                    'aria-hidden': !0
                }),
                (0, a.jsxs)(m.Z.Title, {
                    children: [(0, a.jsx)(d.HiddenVisually, { children: n.name }), A.Z.Messages.SERVER_GUIDE]
                })
            ]
        });
    });
function k(e) {
    var n, l;
    let { guild: r, width: m } = e,
        A = (0, s.e7)([C.ZP], () => C.ZP.getSection(M.oC.GUILD_HOME)),
        [k, B] = i.useState(!1),
        [y, H] = i.useState(E.$Y6),
        L = A === E.ULH.SIDEBAR_CHAT,
        w = (0, d.useFocusJumpSection)(),
        D = (0, s.e7)([I.Z], () => I.Z.getSettings(r.id)),
        O = null == D ? void 0 : D.welcomeMessage,
        U = (0, _.Z)(r.id),
        G = !U && (null !== (l = null == D ? void 0 : null === (n = D.resourceChannels) || void 0 === n ? void 0 : n.length) && void 0 !== l ? l : 0) === 0,
        W = (0, o.Z)('(max-width: 1300px)'),
        z = m - E.PrS - y,
        F = (L && z < R) || W || G;
    return (i.useEffect(() => {
        if (D === I.P) (0, f.cP)(r.id);
        else if (null != D) {
            var e, n, l, a, i;
            x.default.track(E.rMx.SERVER_GUIDE_VIEWED, {
                ...(0, u.hH)(r.id),
                num_member_actions: null !== (l = null === (e = D.newMemberActions) || void 0 === e ? void 0 : e.length) && void 0 !== l ? l : 0,
                num_member_actions_completed: Object.keys(null !== (a = v.Z.getCompletedActions(r.id)) && void 0 !== a ? a : {}).length,
                num_resource_channels: null !== (i = null === (n = D.resourceChannels) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0
            });
        }
    }, [r.id, D]),
    i.useEffect(
        () => () => {
            g.Z.closeChannelSidebar(M.oC.GUILD_HOME);
        },
        []
    ),
    i.useEffect(() => {
        G && D !== I.P && c.Z.escapeToDefaultChannel(r.id);
    }, [r.id, G, D]),
    G)
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsxs)('div', {
                      className: t()(T.chat, S.background, {
                          [T.threadSidebarOpen]: L,
                          [T.threadSidebarFloating]: L && k
                      }),
                      children: [
                          (0, a.jsx)(P, { guild: r }),
                          (0, a.jsx)(d.AdvancedScrollerAuto, {
                              ...w,
                              children: (0, a.jsxs)('div', {
                                  className: t()(S.homeContainer, { [S.homeContainerCollapsed]: F }),
                                  children: [
                                      (0, a.jsx)('div', {
                                          className: S.maxWidthWrapper,
                                          children: (0, a.jsx)(h.Z, {
                                              guild: r,
                                              titleClassName: W ? S.emptyHeaderTitle : void 0
                                          })
                                      }),
                                      (0, a.jsxs)('div', {
                                          className: t()(S.homeContent, S.maxWidthWrapper),
                                          children: [
                                              (0, a.jsxs)('div', {
                                                  className: S.mainContent,
                                                  children: [
                                                      U &&
                                                          (0, a.jsx)(b.Z, {
                                                              guildId: r.id,
                                                              welcomeMessage: O
                                                          }),
                                                      U && (0, a.jsx)(j.Z, { guildId: r.id }),
                                                      !U || F
                                                          ? (0, a.jsx)(p.ZP, {
                                                                guild: r,
                                                                isNewMember: U
                                                            })
                                                          : null
                                                  ]
                                              }),
                                              F
                                                  ? null
                                                  : (0, a.jsx)(N.Z, {
                                                        guild: r,
                                                        isNewMember: U
                                                    })
                                          ]
                                      })
                                  ]
                              })
                          })
                      ]
                  }),
                  L
                      ? (0, a.jsx)(Z.Z, {
                            pageWidth: m,
                            onSidebarResize: (e, n) => {
                                B(n), H(e);
                            }
                        })
                      : null
              ]
          });
}
