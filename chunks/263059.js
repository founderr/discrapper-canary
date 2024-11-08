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
    b = n(652853),
    T = n(64621),
    y = n(448980),
    A = n(194811),
    N = n(373826),
    C = n(315324),
    R = n(582123),
    O = n(262210),
    D = n(666984),
    L = n(290274),
    x = n(228168),
    w = n(617114),
    M = n(69035);
function P(e) {
    var t;
    let { user: n, currentUser: a, activity: P, guild: k, channel: U, className: G, onClose: B, profileGuildId: Z } = e,
        { profileType: F } = (0, b.z)(),
        V = { [M.fullSize]: F === x.y0.FULL_SIZE },
        { interactionSource: H, interactionSourceId: j } = (0, E.Xo)(),
        Y = (0, _.Bq)({
            activity: P,
            user: n
        }),
        W = (0, g.Z)(P),
        { largeImage: K } = (0, d.FO)(P),
        { analyticsLocations: z } = (0, c.ZP)(u.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        q = (0, p.Z)({
            display: 'live',
            user: n,
            activity: P,
            entry: Y,
            analyticsLocations: z
        }),
        Q = (0, m.Z)({
            userId: n.id,
            onAction: q
        });
    if (!(0, l.Z)(P)) return null;
    let X = () => {
            var e, t;
            let a = null !== (t = null === (e = P.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== t ? t : [];
            return 0 === a.length
                ? null
                : null == P.sync_id
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
                                            className: s()(M.clickable, M.inline),
                                            onClick: () => {
                                                q({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, h.d$)(P, n.id, t);
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
        J = () => {
            let { timestamps: e } = P;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, r.jsx)(O.Z, {
                      start: t,
                      end: n
                  });
        },
        $ = () =>
            null == k || null == U
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: M.voiceChannelDivider }),
                          (0, r.jsx)(C.Z, {
                              user: n,
                              guild: k,
                              channel: U,
                              onAction: q,
                              onClose: B
                          })
                      ]
                  }),
        ee = () =>
            n.id === a.id
                ? null
                : (0, r.jsx)('div', {
                      className: s()(M.actions, V),
                      children: (0, r.jsx)(D.Z, {
                          user: n,
                          activity: P,
                          onAction: q
                      })
                  });
    if (null === F) return null;
    let et = null !== (t = P.application_id) && void 0 !== t ? t : P.name,
        en = H === x.n_.ACTIVITY && j === et;
    return (0, r.jsx)(c.Gt, {
        value: z,
        children: (0, r.jsx)(T.Z, {
            sourceType: x.n_.ACTIVITY,
            user: n,
            children: (0, r.jsx)(R.Z, {
                user: n,
                onClose: B,
                children: (e) => {
                    let { onAutoDismiss: t } = e;
                    return (0, r.jsx)(v.Z, {
                        user: n,
                        guildId: Z,
                        profileType: F,
                        sourceId: et,
                        sourceType: x.n_.ACTIVITY,
                        children: () =>
                            (0, r.jsx)(S.Z.Overlay, {
                                className: s()(M.card, G, { [M.hoisted]: en }),
                                ref: Q,
                                children: (0, r.jsxs)(I.Z, {
                                    user: n,
                                    className: M.body,
                                    sourceType: x.n_.ACTIVITY,
                                    interactionSourceId: et,
                                    moreButton: (0, r.jsx)(L.Z, {
                                        display: 'live',
                                        user: n,
                                        activity: P,
                                        entry: Y,
                                        onClose: B,
                                        onRequestOpen: t,
                                        className: w.button
                                    }),
                                    children: [
                                        (0, r.jsx)(A.Z, { ...W }),
                                        (0, r.jsxs)('div', {
                                            className: M.body,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    className: s()(M.content, V),
                                                    children: [
                                                        (0, r.jsx)(f.E, {
                                                            image: K,
                                                            onClick: () => {
                                                                q({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, h.Z5)(P, n.id);
                                                            },
                                                            size: f.J.SIZE_60
                                                        }),
                                                        (0, r.jsxs)('div', {
                                                            className: M.details,
                                                            children: [
                                                                (0, r.jsxs)('div', {
                                                                    children: [
                                                                        (0, r.jsx)(N.Z, {
                                                                            variant: 'heading-sm/semibold',
                                                                            text: P.details,
                                                                            onClick: () => {
                                                                                q({ action: 'OPEN_SPOTIFY_TRACK' }), (0, h.aG)(P);
                                                                            }
                                                                        }),
                                                                        X()
                                                                    ]
                                                                }),
                                                                (0, r.jsx)(y.Z, {
                                                                    user: n,
                                                                    activity: P,
                                                                    className: M.badges
                                                                }),
                                                                J()
                                                            ]
                                                        }),
                                                        F === x.y0.FULL_SIZE && ee()
                                                    ]
                                                }),
                                                $()
                                            ]
                                        }),
                                        F !== x.y0.FULL_SIZE && ee()
                                    ]
                                })
                            })
                    });
                }
            })
        })
    });
}
