n.d(t, {
    Z: function () {
        return M;
    }
}),
    n(653041),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(367907),
    l = n(372900),
    u = n(666188),
    c = n(372769),
    d = n(523751),
    _ = n(549817),
    E = n(819553),
    f = n(17181),
    h = n(303737),
    p = n(965638),
    I = n(434404),
    m = n(962086),
    T = n(160404),
    S = n(703656),
    g = n(814443),
    A = n(592125),
    N = n(626135),
    R = n(912787),
    O = n(272709),
    v = n(718582),
    C = n(126134),
    L = n(981631),
    y = n(689938),
    D = n(206248);
function b(e) {
    let { guild: t } = e,
        n = -1,
        a = (0, v.V1)(t),
        s = i.useMemo(
            () =>
                a.map((e) => {
                    {
                        let i = null;
                        return (
                            e.category === C.L.EMBEDDED_ACTIVITY ? (i = e.embeddedActivities[0].channelId) : e.category === C.L.HANGOUT || e.category === C.L.GAMING ? (i = e.channelId) : e.category === C.L.EVENT && (i = e.event.channel_id),
                            n++,
                            (0, r.jsx)(
                                O.Z,
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
            var c, d, _, E, f;
            if (3 === e.length) break;
            let a = null !== (_ = (0, R.i)(o)) && void 0 !== _ ? _ : '',
                h = (0, v.bA)(a, t.id),
                p = e.length;
            e.push(o.category),
                r.push(h.length),
                i.push(h.length > 0 ? h[0].id : '0'),
                s.push(h.length > 0 && null !== (E = null === (c = g.Z.getUserAffinity(h[0].id)) || void 0 === c ? void 0 : c.affinity) && void 0 !== E ? E : 0),
                n.push(Math.min(h.length, 6)),
                l.push(null !== (f = null === (d = A.Z.getChannel(a)) || void 0 === d ? void 0 : d.type) && void 0 !== f ? f : L.d4z.UNKNOWN),
                (u['position_'.concat(p + 1, '_affinity_user_ids')] = h.slice(0, 6).map((e) => e.id)),
                (u['position_'.concat(p + 1, '_user_affinity_scores')] = h.slice(0, 6).map((e) => {
                    var t, n;
                    return null !== (n = null === (t = g.Z.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0;
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
            N.default.track(L.rMx.GUILD_TOOLTIP_SHOWN, {
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
function M(e) {
    var t;
    let { guild: n, closePopout: o, nudge: g } = e,
        A = i.useRef(null),
        N = (0, u.Z)(n),
        R = (0, p.I)(n),
        { isViewingRoles: O, backNavigationSection: v } = (0, a.cj)([T.Z], () => ({
            isViewingRoles: T.Z.isViewingRoles(n.id),
            backNavigationSection: T.Z.getBackNavigationSection(n.id)
        })),
        C = () => {
            T.Z.isFullServerPreview(n.id) && (0, S.uL)(L.Z5c.CHANNEL(n.id)), E.ZP.shouldShowOnboarding(n.id) && (_.Z.finishOnboarding(n.id), (0, f.discardOnboardingPromise)(n.id)), (0, m.mL)(n.id), I.Z.open(n.id, v), v === L.pNK.ROLE_SUBSCRIPTIONS && (0, h.GN)(n.id);
        },
        M = null === (t = A.current) || void 0 === t ? void 0 : t.clientHeight,
        P = g + 14;
    return (0, r.jsx)(l.Z.Provider, {
        value: n.id,
        children: (0, r.jsxs)('div', {
            className: D.container,
            ref: A,
            children: [
                (0, r.jsx)('div', {
                    className: D.tooltipPointer,
                    style: { top: Math.min(P, null != M ? M - 22 : P) }
                }),
                (0, r.jsxs)('div', {
                    className: D.header,
                    children: [
                        N
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
                (0, r.jsx)(b, { guild: n }),
                R
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
                                  children: y.Z.Messages.GUILD_POPOUT_INVITES_PAUSED.format({
                                      onClick: () => {
                                          o(), I.Z.open(n.id, L.pNK.INSTANT_INVITES);
                                      }
                                  })
                              })
                          ]
                      })
                    : null,
                O
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
                                  children: y.Z.Messages.GUILD_POPOUT_VIEWING_AS_ROLES.format({
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
