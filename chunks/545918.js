t.r(n),
    t.d(n, {
        default: function () {
            return P;
        }
    });
var i = t(200651),
    l = t(192379),
    r = t(120356),
    o = t.n(r),
    a = t(442837),
    s = t(481060),
    d = t(100527),
    c = t(906732),
    u = t(111028),
    x = t(252618),
    h = t(189432),
    _ = t(189357),
    g = t(473403),
    C = t(984370),
    I = t(703656),
    N = t(171368),
    f = t(433355),
    m = t(592125),
    E = t(984933),
    T = t(430824),
    j = t(944486),
    S = t(241559),
    v = t(575766),
    p = t(305473),
    A = t(937283),
    M = t(440857),
    Z = t(707113),
    R = t(981631),
    b = t(176505),
    k = t(50493),
    L = t(388032),
    B = t(743140),
    D = t(293914);
function G(e) {
    let { guild: n, previousChannel: t } = e,
        r = L.intl.string(L.t.oclz3d),
        o = L.intl.string(L.t.oclz3d);
    return (
        (0, x.Tt)({
            location: n.name,
            subsection: r
        }),
        (0, i.jsxs)(C.Z, {
            className: B.header,
            innerClassname: B.__invalid_innerHeader,
            channelId: b.oC.MEMBER_SAFETY,
            guildId: n.id,
            hideSearch: !0,
            toolbar:
                null != t
                    ? (0, i.jsx)(s.Button, {
                          className: B.returnButton,
                          size: s.Button.Sizes.SMALL,
                          look: s.Button.Looks.OUTLINED,
                          color: s.Button.Colors.PRIMARY,
                          onClick: () => {
                              null != t && (0, I.XU)(n.id, t.id);
                          },
                          children: (0, i.jsx)(s.Text, {
                              className: B.returnButtonText,
                              variant: 'text-xs/medium',
                              color: 'none',
                              children: L.intl.format(L.t.IX7oWl, {
                                  channelNameHook: () =>
                                      null == t
                                          ? null
                                          : (0, i.jsxs)(
                                                l.Fragment,
                                                {
                                                    children: [
                                                        (0, i.jsx)(g._, {
                                                            className: B.returnIcon,
                                                            guild: n,
                                                            channel: t
                                                        }),
                                                        (0, i.jsx)(u.Z, {
                                                            children: (0, i.jsx)(s.Text, {
                                                                variant: 'text-xs/medium',
                                                                color: 'none',
                                                                children: t.name
                                                            })
                                                        })
                                                    ]
                                                },
                                                t.id
                                            )
                              })
                          })
                      })
                    : (0, i.jsx)('div', {}),
            children: [
                (0, i.jsx)(C.Z.Icon, {
                    icon: s.GroupIcon,
                    'aria-hidden': !0
                }),
                (0, i.jsx)(C.Z.Title, { children: o })
            ]
        })
    );
}
function P(e) {
    let { guildId: n } = e,
        t = (0, a.e7)([T.Z], () => T.Z.getGuild(n)),
        { analyticsLocations: r } = (0, c.ZP)(d.Z.MEMBER_SAFETY_PAGE),
        u = (0, S.n2)(n),
        x = (0, _.ms)(n, u),
        g = (0, a.e7)([j.Z], () => j.Z.getLastSelectedChannelId(n)),
        C = (0, a.e7)([m.Z], () => m.Z.getChannel(g)),
        L = l.useRef(null);
    (0, v.n)(n),
        l.useEffect(() => {
            if (!u && null != t) {
                var e;
                let n = null === (e = E.ZP.getDefaultChannel(t.id)) || void 0 === e ? void 0 : e.id;
                (0, I.XU)(t.id, n);
            }
        }, [t, u]);
    let P = (0, a.e7)([f.ZP], () => null != f.ZP.getGuildSidebarState(n), [n]),
        y = l.useCallback(
            (e) => {
                (0, _.By)(e.guildId, !0)
                    ? (0, h.r)(e.guildId, e.userId, b.oC.MEMBER_SAFETY, { modViewPanel: k.k.INFO })
                    : (0, N.openUserProfileModal)({
                          userId: e.userId,
                          guildId: e.guildId,
                          sourceAnalyticsLocations: r,
                          analyticsLocation: { section: R.jXE.MEMBER_SAFETY_PAGE }
                      });
            },
            [r]
        );
    return null != t && u
        ? (0, i.jsxs)(c.Gt, {
              value: r,
              children: [
                  (0, i.jsxs)('div', {
                      className: o()(D.chat, B.page, { [D.threadSidebarOpen]: P }),
                      children: [
                          (0, i.jsx)(G, {
                              guild: t,
                              previousChannel: C
                          }),
                          (0, i.jsx)(s.AdvancedScroller, {
                              className: o()(B.scroller),
                              ref: L,
                              orientation: 'vertical',
                              children: (0, i.jsxs)('div', {
                                  className: o()(D.content, B.container),
                                  children: [
                                      (0, i.jsx)(p.Z, { guild: t }),
                                      (0, i.jsx)(Z.Z, {
                                          guild: t,
                                          onMemberSelect: y
                                      })
                                  ]
                              })
                          }),
                          (0, i.jsx)(M.Z, { guildId: t.id })
                      ]
                  }),
                  x && (0, i.jsx)(A.Z, { guildId: t.id })
              ]
          })
        : null;
}
