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
    O = n(262210),
    D = n(666984),
    L = n(386019),
    x = n(228168),
    w = n(249942);
function P(e) {
    var t;
    let { user: n, currentUser: a, activity: P, guild: M, channel: k, className: U, onClose: B, profileGuildId: G } = e,
        { profileType: Z } = (0, b.z)(),
        F = { [w.fullSize]: Z === x.y0.FULL_SIZE },
        { interactionSource: V, interactionSourceId: j } = (0, v.Xo)(),
        H = (0, _.Z)({
            activity: P,
            user: n
        }),
        Y = (0, g.Z)(P),
        { largeImage: W } = (0, d.FO)(P),
        { analyticsLocations: K } = (0, c.ZP)(u.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        z = (0, h.Z)({
            display: 'live',
            user: n,
            activity: P,
            entry: H,
            analyticsLocations: K
        }),
        q = (0, m.Z)({
            userId: n.id,
            onAction: z
        });
    if (!(0, l.Z)(P)) return null;
    let Q = () => {
            var e, t;
            let a = null !== (t = null === (e = P.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== t ? t : [];
            return 0 === a.length
                ? null
                : null == P.sync_id
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
                                            className: s()(w.clickableText, w.inline),
                                            onClick: () => {
                                                z({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, p.d$)(P, n.id, t);
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
        J = () =>
            null == M || null == k
                ? null
                : (0, r.jsx)(R.Z, {
                      user: n,
                      guild: M,
                      channel: k,
                      onAction: z,
                      onClose: B
                  }),
        $ = () =>
            n.id === a.id
                ? null
                : (0, r.jsx)('div', {
                      className: s()(w.actions, F),
                      children: (0, r.jsx)(D.Z, {
                          user: n,
                          activity: P,
                          onAction: z
                      })
                  });
    if (null === Z) return null;
    let ee = null !== (t = P.application_id) && void 0 !== t ? t : P.name,
        et = V === x.n_.ACTIVITY && j === ee;
    return (0, r.jsx)(c.Gt, {
        value: K,
        children: (0, r.jsx)(S.Z, {
            sourceType: x.n_.ACTIVITY,
            user: n,
            children: (0, r.jsx)(I.Z, {
                user: n,
                guildId: G,
                profileType: Z,
                sourceId: ee,
                sourceDetails: null == H ? (0, E.Z)(P) : null,
                entry: H,
                sourceType: x.n_.ACTIVITY,
                children: () =>
                    (0, r.jsx)(T.Z, {
                        user: n,
                        className: w.toolbarContainer,
                        sourceType: x.n_.ACTIVITY,
                        interactionSourceId: ee,
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(L.Z, {
                                display: 'live',
                                user: n,
                                activity: P,
                                entry: H,
                                onClose: B,
                                children: e
                            }),
                        onShowToolbar: () => z({ action: 'HOVER_ACTIVITY_CARD' }),
                        children: (0, r.jsxs)(A.Z, {
                            ref: q,
                            className: s()(U, { [w.hoisted]: et }),
                            onAction: z,
                            onClose: B,
                            children: [
                                (0, r.jsx)(N.Z, { ...Y }),
                                (0, r.jsxs)('div', {
                                    className: w.body,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: s()(w.content, F),
                                            children: [
                                                (0, r.jsx)(f.E, {
                                                    image: W,
                                                    size: f.J.SIZE_60,
                                                    className: w.clickableImage,
                                                    onClick: () => {
                                                        z({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, p.Z5)(P, n.id);
                                                    }
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: w.details,
                                                    children: [
                                                        (0, r.jsxs)('div', {
                                                            children: [
                                                                (0, r.jsx)(C.Z, {
                                                                    variant: 'heading-sm/semibold',
                                                                    text: P.details,
                                                                    onClick: () => {
                                                                        z({ action: 'OPEN_SPOTIFY_TRACK' }), (0, p.aG)(P);
                                                                    }
                                                                }),
                                                                Q()
                                                            ]
                                                        }),
                                                        (0, r.jsx)(y.Z, {
                                                            user: n,
                                                            activity: P,
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
            })
        })
    });
}
