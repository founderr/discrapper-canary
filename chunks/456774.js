n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(653041),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(367907),
    l = n(372900),
    u = n(666188),
    c = n(372769),
    d = n(523751),
    f = n(549817),
    _ = n(819553),
    h = n(17181),
    p = n(303737),
    m = n(965638),
    g = n(434404),
    E = n(962086),
    v = n(160404),
    I = n(703656),
    S = n(814443),
    b = n(592125),
    T = n(626135),
    y = n(912787),
    A = n(272709),
    N = n(718582),
    C = n(126134),
    R = n(981631),
    O = n(388032),
    D = n(635846);
function L(e) {
    let { guild: t } = e,
        n = -1,
        a = (0, N.V1)(t),
        s = i.useMemo(
            () =>
                a.map((e) => {
                    {
                        let i = null;
                        return (
                            e.category === C.L.EMBEDDED_ACTIVITY ? (i = e.embeddedActivities[0].channelId) : e.category === C.L.HANGOUT || e.category === C.L.GAMING ? (i = e.channelId) : e.category === C.L.EVENT && (i = e.event.channel_id),
                            n++,
                            (0, r.jsx)(
                                A.Z,
                                {
                                    cardData: e,
                                    guildId: t.id,
                                    cardIndex: n
                                },
                                ''.concat(e.category, '-').concat(i)
                            )
                        );
                    }
                }),
            [a, t.id, n, !0]
        );
    return (i.useEffect(() => {
        let e = [],
            n = [],
            r = [],
            i = [],
            s = [],
            l = [],
            u = {};
        for (let o of a) {
            var c, d, f, _, h;
            if (3 === e.length) break;
            let a = null !== (f = (0, y.i)(o)) && void 0 !== f ? f : '',
                p = (0, N.bA)(a, t.id),
                m = e.length;
            e.push(o.category),
                r.push(p.length),
                i.push(p.length > 0 ? p[0].id : '0'),
                s.push(p.length > 0 && null !== (_ = null === (c = S.Z.getUserAffinity(p[0].id)) || void 0 === c ? void 0 : c.affinity) && void 0 !== _ ? _ : 0),
                n.push(Math.min(p.length, 6)),
                l.push(null !== (h = null === (d = b.Z.getChannel(a)) || void 0 === d ? void 0 : d.type) && void 0 !== h ? h : R.d4z.UNKNOWN),
                (u['position_'.concat(m + 1, '_affinity_user_ids')] = p.slice(0, 6).map((e) => e.id)),
                (u['position_'.concat(m + 1, '_user_affinity_scores')] = p.slice(0, 6).map((e) => {
                    var t, n;
                    return null !== (n = null === (t = S.Z.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0;
                }));
        }
        0 !== e.length &&
            ((u.card_types = e),
            (u.affinity_users_counts = n),
            (u.total_users_counts = r),
            (u.max_affinity_user_ids = i),
            (u.max_affinity_user_scores = s),
            (u.channel_types = l),
            (u.guild_id = t.id),
            T.default.track(R.rMx.GUILD_TOOLTIP_SHOWN, {
                ...u,
                ...(0, o.hH)(t.id)
            }));
    }, []),
    0 === a.length)
        ? null
        : (0, r.jsx)('div', {
              className: D.cards,
              children: s
          });
}
function x(e) {
    var t;
    let { guild: n, closePopout: o, nudge: S } = e,
        b = i.useRef(null),
        T = (0, u.Z)(n),
        y = (0, m.I)(n),
        { isViewingRoles: A, backNavigationSection: N } = (0, a.cj)([v.Z], () => ({
            isViewingRoles: v.Z.isViewingRoles(n.id),
            backNavigationSection: v.Z.getBackNavigationSection(n.id)
        })),
        C = () => {
            v.Z.isFullServerPreview(n.id) && (0, I.uL)(R.Z5c.CHANNEL(n.id)), _.ZP.shouldShowOnboarding(n.id) && (f.Z.finishOnboarding(n.id), (0, h.discardOnboardingPromise)(n.id)), (0, E.mL)(n.id), g.Z.open(n.id, N), N === R.pNK.ROLE_SUBSCRIPTIONS && (0, p.GN)(n.id);
        },
        x = null === (t = b.current) || void 0 === t ? void 0 : t.clientHeight,
        w = S + 14;
    return (0, r.jsx)(l.Z.Provider, {
        value: n.id,
        children: (0, r.jsxs)('div', {
            className: D.container,
            ref: b,
            children: [
                (0, r.jsx)('div', {
                    className: D.tooltipPointer,
                    style: { top: Math.min(w, null != x ? x - 22 : w) }
                }),
                (0, r.jsxs)('div', {
                    className: D.header,
                    children: [
                        T
                            ? (0, r.jsx)(d.Z, {
                                  guild: n,
                                  className: D.rowIconV2,
                                  tooltipColor: s.Tooltip.Colors.PRIMARY
                              })
                            : (0, r.jsx)(c.Z, {
                                  guild: n,
                                  size: 20,
                                  className: D.rowIcon
                              }),
                        (0, r.jsx)(s.Text, {
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            children: n.name
                        })
                    ]
                }),
                (0, r.jsx)(L, { guild: n }),
                y
                    ? (0, r.jsxs)('div', {
                          className: D.footer,
                          children: [
                              (0, r.jsx)(s.CircleInformationIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 12,
                                  height: 12,
                                  className: D.infoIcon
                              }),
                              (0, r.jsx)(s.Text, {
                                  color: 'text-muted',
                                  variant: 'text-xs/medium',
                                  children: O.intl.format(O.t['3YedRU'], {
                                      onClick: () => {
                                          o(), g.Z.open(n.id, R.pNK.INSTANT_INVITES);
                                      }
                                  })
                              })
                          ]
                      })
                    : null,
                A
                    ? (0, r.jsxs)('div', {
                          className: D.footer,
                          children: [
                              (0, r.jsx)(s.CircleInformationIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 12,
                                  height: 12,
                                  className: D.infoIcon
                              }),
                              (0, r.jsx)(s.Text, {
                                  color: 'text-muted',
                                  variant: 'text-xs/medium',
                                  children: O.intl.format(O.t['+W8njI'], {
                                      onClick: () => {
                                          o(), C();
                                      }
                                  })
                              })
                          ]
                      })
                    : null
            ]
        })
    });
}
