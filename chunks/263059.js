n.d(t, {
    Z: function () {
        return P;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(503438),
    u = n(100527),
    c = n(906732),
    d = n(379357),
    _ = n(358696),
    E = n(180335),
    f = n(952164),
    h = n(960870),
    p = n(139793),
    I = n(994746),
    m = n(510659),
    T = n(287954),
    S = n(660579),
    g = n(502762),
    A = n(652853),
    N = n(448980),
    R = n(194811),
    O = n(373826),
    v = n(315324),
    C = n(582123),
    L = n(262210),
    D = n(666984),
    y = n(290274),
    b = n(228168),
    M = n(676411);
function P(e) {
    var t;
    let { user: n, currentUser: a, activity: P, guild: U, channel: w, className: x, onClose: G, profileGuildId: k } = e,
        { profileType: B } = (0, A.z)(),
        F = { [M.fullSize]: B === b.y0.FULL_SIZE },
        { interactionSource: V, interactionSourceId: H } = (0, m.Xo)(),
        Z = (0, E.Bq)({
            activity: P,
            user: n
        }),
        Y = (0, I.Z)(P),
        { largeImage: j } = (0, d.FO)(P),
        { analyticsLocations: W } = (0, c.ZP)(u.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        K = (0, h.Z)({
            display: 'live',
            user: n,
            activity: P,
            entry: Z,
            analyticsLocations: W
        }),
        z = (0, p.Z)({
            userId: n.id,
            onAction: K
        });
    if (!(0, l.Z)(P)) return null;
    let q = () => {
            var e, t;
            let a = null !== (t = null === (e = P.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== t ? t : [];
            return 0 === a.length
                ? null
                : null == P.sync_id
                  ? (0, r.jsx)(O.Z, {
                        variant: 'text-xs/normal',
                        text: a.join(', ')
                    })
                  : (0, r.jsx)(O.Z, {
                        variant: 'text-xs/normal',
                        text: a.map((e, t) =>
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(o.Clickable, {
                                            className: s()(M.clickable, M.inline),
                                            onClick: () => {
                                                K({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, f.d$)(P, n.id, t);
                                            },
                                            children: e
                                        }),
                                        t < a.length - 1 ? ', ' : ''
                                    ]
                                },
                                t
                            )
                        )
                    });
        },
        Q = () => {
            let { timestamps: e } = P;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, r.jsx)(L.Z, {
                      start: t,
                      end: n
                  });
        },
        X = () =>
            null == U || null == w
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: M.voiceChannelDivider }),
                          (0, r.jsx)(v.Z, {
                              user: n,
                              guild: U,
                              channel: w,
                              onAction: K,
                              onClose: G
                          })
                      ]
                  }),
        $ = () =>
            n.id === a.id
                ? null
                : (0, r.jsx)('div', {
                      className: s()(M.actions, F),
                      children: (0, r.jsx)(D.Z, {
                          user: n,
                          activity: P,
                          onAction: K
                      })
                  });
    if (null === B || B === b.y0.CARD) return null;
    let J = null !== (t = P.application_id) && void 0 !== t ? t : P.name,
        ee = V === b.n_.ACTIVITY && H === J;
    return (0, r.jsx)(c.Gt, {
        value: W,
        children: (0, r.jsx)(C.Z, {
            user: n,
            onClose: G,
            children: (e) => {
                let { onAutoDismiss: t } = e;
                return (0, r.jsx)(T.Z, {
                    user: n,
                    guildId: k,
                    profileType: B,
                    sourceId: J,
                    sourceType: b.n_.ACTIVITY,
                    children: () =>
                        (0, r.jsx)(g.Z.Overlay, {
                            className: s()(M.card, x, { [M.hoisted]: ee }),
                            ref: z,
                            children: (0, r.jsxs)(S.Z, {
                                user: n,
                                className: M.body,
                                sourceType: b.n_.ACTIVITY,
                                interactionSourceId: J,
                                children: [
                                    (0, r.jsx)(R.Z, {
                                        ...Y,
                                        contextMenu: (0, r.jsx)(y.Z, {
                                            display: 'live',
                                            user: n,
                                            activity: P,
                                            entry: Z,
                                            onClose: G,
                                            onRequestOpen: t
                                        })
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: M.body,
                                        children: [
                                            (0, r.jsxs)('div', {
                                                className: s()(M.content, F),
                                                children: [
                                                    (0, r.jsx)(_.E, {
                                                        image: j,
                                                        onClick: () => {
                                                            K({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, f.Z5)(P, n.id);
                                                        },
                                                        size: _.J.SIZE_60
                                                    }),
                                                    (0, r.jsxs)('div', {
                                                        className: M.details,
                                                        children: [
                                                            (0, r.jsxs)('div', {
                                                                children: [
                                                                    (0, r.jsx)(O.Z, {
                                                                        variant: 'heading-sm/semibold',
                                                                        text: P.details,
                                                                        onClick: () => {
                                                                            K({ action: 'OPEN_SPOTIFY_TRACK' }), (0, f.aG)(P);
                                                                        }
                                                                    }),
                                                                    q()
                                                                ]
                                                            }),
                                                            (0, r.jsx)(N.Z, {
                                                                user: n,
                                                                activity: P,
                                                                className: M.badges
                                                            }),
                                                            Q()
                                                        ]
                                                    }),
                                                    B === b.y0.FULL_SIZE && $()
                                                ]
                                            }),
                                            X()
                                        ]
                                    }),
                                    B !== b.y0.FULL_SIZE && $()
                                ]
                            })
                        })
                });
            }
        })
    });
}
