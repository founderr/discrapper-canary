n.d(t, {
    Z: function () {
        return M;
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
    f = n(358696),
    _ = n(180335),
    h = n(952164),
    p = n(960870),
    m = n(139793),
    g = n(994746),
    E = n(510659),
    v = n(287954),
    I = n(660579),
    S = n(502762),
    T = n(652853),
    b = n(64621),
    y = n(448980),
    A = n(194811),
    N = n(373826),
    C = n(315324),
    R = n(582123),
    O = n(262210),
    D = n(666984),
    L = n(290274),
    x = n(228168),
    w = n(676411);
function M(e) {
    var t;
    let { user: n, currentUser: a, activity: M, guild: P, channel: k, className: U, onClose: G, profileGuildId: B } = e,
        { profileType: Z } = (0, T.z)(),
        F = { [w.fullSize]: Z === x.y0.FULL_SIZE },
        { interactionSource: V, interactionSourceId: H } = (0, E.Xo)(),
        j = (0, _.Bq)({
            activity: M,
            user: n
        }),
        Y = (0, g.Z)(M),
        { largeImage: W } = (0, d.FO)(M),
        { analyticsLocations: K } = (0, c.ZP)(u.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        z = (0, p.Z)({
            display: 'live',
            user: n,
            activity: M,
            entry: j,
            analyticsLocations: K
        }),
        q = (0, m.Z)({
            userId: n.id,
            onAction: z
        });
    if (!(0, l.Z)(M)) return null;
    let Q = () => {
            var e, t;
            let a = null !== (t = null === (e = M.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== t ? t : [];
            return 0 === a.length
                ? null
                : null == M.sync_id
                  ? (0, r.jsx)(N.Z, {
                        variant: 'text-xs/normal',
                        text: a.join(', ')
                    })
                  : (0, r.jsx)(N.Z, {
                        variant: 'text-xs/normal',
                        text: a.map((e, t) =>
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(o.Clickable, {
                                            className: s()(w.clickable, w.inline),
                                            onClick: () => {
                                                z({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, h.d$)(M, n.id, t);
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
        X = () => {
            let { timestamps: e } = M;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, r.jsx)(O.Z, {
                      start: t,
                      end: n
                  });
        },
        J = () =>
            null == P || null == k
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: w.voiceChannelDivider }),
                          (0, r.jsx)(C.Z, {
                              user: n,
                              guild: P,
                              channel: k,
                              onAction: z,
                              onClose: G
                          })
                      ]
                  }),
        $ = () =>
            n.id === a.id
                ? null
                : (0, r.jsx)('div', {
                      className: s()(w.actions, F),
                      children: (0, r.jsx)(D.Z, {
                          user: n,
                          activity: M,
                          onAction: z
                      })
                  });
    if (null === Z) return null;
    let ee = null !== (t = M.application_id) && void 0 !== t ? t : M.name,
        et = V === x.n_.ACTIVITY && H === ee;
    return (0, r.jsx)(c.Gt, {
        value: K,
        children: (0, r.jsx)(b.Z, {
            sourceType: x.n_.ACTIVITY,
            user: n,
            children: (0, r.jsx)(R.Z, {
                user: n,
                onClose: G,
                children: (e) => {
                    let { onAutoDismiss: t } = e;
                    return (0, r.jsx)(v.Z, {
                        user: n,
                        guildId: B,
                        profileType: Z,
                        sourceId: ee,
                        sourceType: x.n_.ACTIVITY,
                        children: () =>
                            (0, r.jsx)(S.Z.Overlay, {
                                className: s()(w.card, U, { [w.hoisted]: et }),
                                ref: q,
                                children: (0, r.jsxs)(I.Z, {
                                    user: n,
                                    className: w.body,
                                    sourceType: x.n_.ACTIVITY,
                                    interactionSourceId: ee,
                                    children: [
                                        (0, r.jsx)(A.Z, {
                                            ...Y,
                                            contextMenu: (0, r.jsx)(L.Z, {
                                                display: 'live',
                                                user: n,
                                                activity: M,
                                                entry: j,
                                                onClose: G,
                                                onRequestOpen: t
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: w.body,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    className: s()(w.content, F),
                                                    children: [
                                                        (0, r.jsx)(f.E, {
                                                            image: W,
                                                            onClick: () => {
                                                                z({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, h.Z5)(M, n.id);
                                                            },
                                                            size: f.J.SIZE_60
                                                        }),
                                                        (0, r.jsxs)('div', {
                                                            className: w.details,
                                                            children: [
                                                                (0, r.jsxs)('div', {
                                                                    children: [
                                                                        (0, r.jsx)(N.Z, {
                                                                            variant: 'heading-sm/semibold',
                                                                            text: M.details,
                                                                            onClick: () => {
                                                                                z({ action: 'OPEN_SPOTIFY_TRACK' }), (0, h.aG)(M);
                                                                            }
                                                                        }),
                                                                        Q()
                                                                    ]
                                                                }),
                                                                (0, r.jsx)(y.Z, {
                                                                    user: n,
                                                                    activity: M,
                                                                    className: w.badges
                                                                }),
                                                                X()
                                                            ]
                                                        }),
                                                        Z === x.y0.FULL_SIZE && $()
                                                    ]
                                                }),
                                                J()
                                            ]
                                        }),
                                        Z !== x.y0.FULL_SIZE && $()
                                    ]
                                })
                            })
                    });
                }
            })
        })
    });
}
