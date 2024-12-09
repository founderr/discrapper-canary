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
    _ = n(649700),
    p = n(952164),
    h = n(960870),
    m = n(139793),
    g = n(994746),
    E = n(273284),
    v = n(510659),
    I = n(287954),
    T = n(660579),
    b = n(652853),
    S = n(64621),
    y = n(448980),
    A = n(336383),
    N = n(194811),
    C = n(373826),
    R = n(315324),
    O = n(582123),
    D = n(262210),
    L = n(666984),
    x = n(386019),
    w = n(228168),
    P = n(249942);
function M(e) {
    var t;
    let { user: n, currentUser: a, activity: M, guild: k, channel: U, className: B, onClose: G, profileGuildId: Z } = e,
        { profileType: F } = (0, b.z)(),
        V = { [P.fullSize]: F === w.y0.FULL_SIZE },
        { interactionSource: j, interactionSourceId: H } = (0, v.Xo)(),
        Y = (0, _.Z)({
            activity: M,
            user: n
        }),
        W = (0, g.Z)(M),
        { largeImage: K } = (0, d.FO)(M),
        { analyticsLocations: z } = (0, c.ZP)(u.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        q = (0, h.Z)({
            display: 'live',
            user: n,
            activity: M,
            entry: Y,
            analyticsLocations: z
        }),
        Q = (0, m.Z)({
            userId: n.id,
            onAction: q
        });
    if (!(0, l.Z)(M)) return null;
    let X = () => {
            var e, t;
            let a = null !== (t = null === (e = M.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== t ? t : [];
            return 0 === a.length
                ? null
                : null == M.sync_id
                  ? (0, r.jsx)(C.Z, {
                        variant: 'text-xs/normal',
                        text: a.join(', ')
                    })
                  : (0, r.jsx)(C.Z, {
                        variant: 'text-xs/normal',
                        text: a.map((e, t) =>
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(o.Clickable, {
                                            className: s()(P.clickableText, P.inline),
                                            onClick: () => {
                                                q({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, p.d$)(M, n.id, t);
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
            let { timestamps: e } = M;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, r.jsx)(D.Z, {
                      start: t,
                      end: n
                  });
        },
        $ = () =>
            null == k || null == U
                ? null
                : (0, r.jsx)(R.Z, {
                      user: n,
                      guild: k,
                      channel: U,
                      onAction: q,
                      onClose: G
                  }),
        ee = () =>
            n.id === a.id
                ? null
                : (0, r.jsx)('div', {
                      className: s()(P.actions, V),
                      children: (0, r.jsx)(L.Z, {
                          user: n,
                          activity: M,
                          onAction: q
                      })
                  });
    if (null === F) return null;
    let et = null !== (t = M.application_id) && void 0 !== t ? t : M.name,
        en = j === w.n_.ACTIVITY && H === et;
    return (0, r.jsx)(c.Gt, {
        value: z,
        children: (0, r.jsx)(S.Z, {
            sourceType: w.n_.ACTIVITY,
            user: n,
            children: (0, r.jsx)(O.Z, {
                user: n,
                onClose: G,
                children: (e) => {
                    let { onAutoDismiss: t } = e;
                    return (0, r.jsx)(I.Z, {
                        user: n,
                        guildId: Z,
                        profileType: F,
                        sourceId: et,
                        sourceDetails: null == Y ? (0, E.Z)(M) : null,
                        entry: Y,
                        sourceType: w.n_.ACTIVITY,
                        children: () =>
                            (0, r.jsx)(T.Z, {
                                user: n,
                                className: P.toolbarContainer,
                                sourceType: w.n_.ACTIVITY,
                                interactionSourceId: et,
                                renderMoreButtonPopout: (e) =>
                                    (0, r.jsx)(x.Z, {
                                        display: 'live',
                                        user: n,
                                        activity: M,
                                        entry: Y,
                                        onClose: G,
                                        onRequestOpen: t,
                                        children: e
                                    }),
                                onShowToolbar: () => q({ action: 'HOVER_ACTIVITY_CARD' }),
                                children: (0, r.jsxs)(A.Z, {
                                    ref: Q,
                                    className: s()(B, { [P.hoisted]: en }),
                                    onAction: q,
                                    onClose: G,
                                    children: [
                                        (0, r.jsx)(N.Z, { ...W }),
                                        (0, r.jsxs)('div', {
                                            className: P.body,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    className: s()(P.content, V),
                                                    children: [
                                                        (0, r.jsx)(f.E, {
                                                            image: K,
                                                            className: P.clickableImage,
                                                            onClick: () => {
                                                                q({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, p.Z5)(M, n.id);
                                                            },
                                                            size: f.J.SIZE_60
                                                        }),
                                                        (0, r.jsxs)('div', {
                                                            className: P.details,
                                                            children: [
                                                                (0, r.jsxs)('div', {
                                                                    children: [
                                                                        (0, r.jsx)(C.Z, {
                                                                            variant: 'heading-sm/semibold',
                                                                            text: M.details,
                                                                            onClick: () => {
                                                                                q({ action: 'OPEN_SPOTIFY_TRACK' }), (0, p.aG)(M);
                                                                            }
                                                                        }),
                                                                        X()
                                                                    ]
                                                                }),
                                                                (0, r.jsx)(y.Z, {
                                                                    user: n,
                                                                    activity: M,
                                                                    className: P.badges
                                                                }),
                                                                J()
                                                            ]
                                                        }),
                                                        F === w.y0.FULL_SIZE && ee()
                                                    ]
                                                }),
                                                $()
                                            ]
                                        }),
                                        F !== w.y0.FULL_SIZE && ee()
                                    ]
                                })
                            })
                    });
                }
            })
        })
    });
}
