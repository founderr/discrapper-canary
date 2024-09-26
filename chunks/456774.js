n.d(t, {
    Z: function () {
        return G;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(442837),
    l = n(481060),
    u = n(367907),
    c = n(372900),
    d = n(666188),
    _ = n(372769),
    E = n(523751),
    f = n(549817),
    h = n(819553),
    p = n(17181),
    m = n(303737),
    I = n(965638),
    T = n(434404),
    g = n(962086),
    S = n(160404),
    A = n(703656),
    v = n(814443),
    N = n(592125),
    O = n(626135),
    R = n(912787),
    C = n(272709),
    y = n(718582),
    L = n(126134),
    b = n(981631),
    D = n(689938),
    M = n(206248);
let P = 12,
    U = 14,
    w = 8;
function x(e) {
    let { guild: t } = e,
        n = !0,
        r = -1,
        i = (0, y.V1)(t),
        s = o.useMemo(
            () =>
                i.map((e) => {
                    if (n) {
                        let n = null;
                        return (
                            e.category === L.L.EMBEDDED_ACTIVITY ? (n = e.embeddedActivities[0].channelId) : e.category === L.L.HANGOUT || e.category === L.L.GAMING ? (n = e.channelId) : e.category === L.L.EVENT && (n = e.event.channel_id),
                            r++,
                            (0, a.jsx)(
                                C.Z,
                                {
                                    cardData: e,
                                    guildId: t.id,
                                    cardIndex: r
                                },
                                ''.concat(e.category, '-').concat(n)
                            )
                        );
                    }
                }),
            [i, t.id, r, n]
        );
    return (o.useEffect(() => {
        let e = [],
            n = [],
            r = [],
            a = [],
            o = [],
            s = [],
            l = {};
        for (let u of i) {
            var c, d, _, E, f;
            if (3 === e.length) break;
            let i = null !== (_ = (0, R.i)(u)) && void 0 !== _ ? _ : '',
                h = (0, y.bA)(i, t.id),
                p = e.length;
            e.push(u.category),
                r.push(h.length),
                a.push(h.length > 0 ? h[0].id : '0'),
                o.push(h.length > 0 && null !== (E = null === (c = v.Z.getUserAffinity(h[0].id)) || void 0 === c ? void 0 : c.affinity) && void 0 !== E ? E : 0),
                n.push(Math.min(h.length, 6)),
                s.push(null !== (f = null === (d = N.Z.getChannel(i)) || void 0 === d ? void 0 : d.type) && void 0 !== f ? f : b.d4z.UNKNOWN),
                (l['position_'.concat(p + 1, '_affinity_user_ids')] = h.slice(0, 6).map((e) => e.id)),
                (l['position_'.concat(p + 1, '_user_affinity_scores')] = h.slice(0, 6).map((e) => {
                    var t, n;
                    return null !== (n = null === (t = v.Z.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0;
                }));
        }
        0 !== e.length &&
            ((l.card_types = e),
            (l.affinity_users_counts = n),
            (l.total_users_counts = r),
            (l.max_affinity_user_ids = a),
            (l.max_affinity_user_scores = o),
            (l.channel_types = s),
            (l.guild_id = t.id),
            O.default.track(b.rMx.GUILD_TOOLTIP_SHOWN, {
                ...l,
                ...(0, u.hH)(t.id)
            }));
    }, []),
    0 === i.length)
        ? null
        : (0, a.jsx)('div', {
              className: M.cards,
              children: s
          });
}
function G(e) {
    var t;
    let { guild: n, closePopout: r, nudge: i } = e,
        u = o.useRef(null),
        v = (0, d.Z)(n),
        N = (0, I.I)(n),
        { isViewingRoles: O, backNavigationSection: R } = (0, s.cj)([S.Z], () => ({
            isViewingRoles: S.Z.isViewingRoles(n.id),
            backNavigationSection: S.Z.getBackNavigationSection(n.id)
        })),
        C = () => {
            S.Z.isFullServerPreview(n.id) && (0, A.uL)(b.Z5c.CHANNEL(n.id)), h.ZP.shouldShowOnboarding(n.id) && (f.Z.finishOnboarding(n.id), (0, p.discardOnboardingPromise)(n.id)), (0, g.mL)(n.id), T.Z.open(n.id, R), R === b.pNK.ROLE_SUBSCRIPTIONS && (0, m.GN)(n.id);
        },
        y = null === (t = u.current) || void 0 === t ? void 0 : t.clientHeight,
        L = i + U,
        G = null != y ? y - (U + w) : L;
    return (0, a.jsx)(c.Z.Provider, {
        value: n.id,
        children: (0, a.jsxs)('div', {
            className: M.container,
            ref: u,
            children: [
                (0, a.jsx)('div', {
                    className: M.tooltipPointer,
                    style: { top: Math.min(L, G) }
                }),
                (0, a.jsxs)('div', {
                    className: M.header,
                    children: [
                        v
                            ? (0, a.jsx)(E.Z, {
                                  guild: n,
                                  className: M.rowIconV2,
                                  tooltipColor: l.Tooltip.Colors.PRIMARY
                              })
                            : (0, a.jsx)(_.Z, {
                                  guild: n,
                                  size: 20,
                                  className: M.rowIcon
                              }),
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            children: n.name
                        })
                    ]
                }),
                (0, a.jsx)(x, { guild: n }),
                N
                    ? (0, a.jsxs)('div', {
                          className: M.footer,
                          children: [
                              (0, a.jsx)(l.CircleInformationIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: P,
                                  height: P,
                                  className: M.infoIcon
                              }),
                              (0, a.jsx)(l.Text, {
                                  color: 'text-muted',
                                  variant: 'text-xs/medium',
                                  children: D.Z.Messages.GUILD_POPOUT_INVITES_PAUSED.format({
                                      onClick: () => {
                                          r(), T.Z.open(n.id, b.pNK.INSTANT_INVITES);
                                      }
                                  })
                              })
                          ]
                      })
                    : null,
                O
                    ? (0, a.jsxs)('div', {
                          className: M.footer,
                          children: [
                              (0, a.jsx)(l.CircleInformationIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: P,
                                  height: P,
                                  className: M.infoIcon
                              }),
                              (0, a.jsx)(l.Text, {
                                  color: 'text-muted',
                                  variant: 'text-xs/medium',
                                  children: D.Z.Messages.GUILD_POPOUT_VIEWING_AS_ROLES.format({
                                      onClick: () => {
                                          r(), C();
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
