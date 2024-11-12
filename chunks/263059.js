n.d(t, {
    Z: function () {
        return k;
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
    p = n(952164),
    h = n(960870),
    m = n(139793),
    g = n(994746),
    E = n(273284),
    v = n(510659),
    I = n(287954),
    b = n(660579),
    S = n(502762),
    T = n(652853),
    y = n(64621),
    A = n(448980),
    N = n(194811),
    C = n(373826),
    R = n(315324),
    O = n(582123),
    D = n(262210),
    L = n(666984),
    x = n(290274),
    w = n(228168),
    M = n(727747),
    P = n(676411);
function k(e) {
    var t;
    let { user: n, currentUser: a, activity: k, guild: U, channel: G, className: B, onClose: Z, profileGuildId: F } = e,
        { profileType: V } = (0, T.z)(),
        j = { [P.fullSize]: V === w.y0.FULL_SIZE },
        { interactionSource: H, interactionSourceId: Y } = (0, v.Xo)(),
        W = (0, _.Bq)({
            activity: k,
            user: n
        }),
        K = (0, g.Z)(k),
        { largeImage: z } = (0, d.FO)(k),
        { analyticsLocations: q } = (0, c.ZP)(u.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        Q = (0, h.Z)({
            display: 'live',
            user: n,
            activity: k,
            entry: W,
            analyticsLocations: q
        }),
        X = (0, m.Z)({
            userId: n.id,
            onAction: Q
        });
    if (!(0, l.Z)(k)) return null;
    let J = () => {
            var e, t;
            let a = null !== (t = null === (e = k.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== t ? t : [];
            return 0 === a.length
                ? null
                : null == k.sync_id
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
                                            className: s()(P.clickable, P.inline),
                                            onClick: () => {
                                                Q({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, p.d$)(k, n.id, t);
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
        $ = () => {
            let { timestamps: e } = k;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, r.jsx)(D.Z, {
                      start: t,
                      end: n
                  });
        },
        ee = () =>
            null == U || null == G
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: P.voiceChannelDivider }),
                          (0, r.jsx)(R.Z, {
                              user: n,
                              guild: U,
                              channel: G,
                              onAction: Q,
                              onClose: Z
                          })
                      ]
                  }),
        et = () =>
            n.id === a.id
                ? null
                : (0, r.jsx)('div', {
                      className: s()(P.actions, j),
                      children: (0, r.jsx)(L.Z, {
                          user: n,
                          activity: k,
                          onAction: Q
                      })
                  });
    if (null === V) return null;
    let en = null !== (t = k.application_id) && void 0 !== t ? t : k.name,
        er = H === w.n_.ACTIVITY && Y === en;
    return (0, r.jsx)(c.Gt, {
        value: q,
        children: (0, r.jsx)(y.Z, {
            sourceType: w.n_.ACTIVITY,
            user: n,
            children: (0, r.jsx)(O.Z, {
                user: n,
                onClose: Z,
                children: (e) => {
                    let { onAutoDismiss: t } = e;
                    return (0, r.jsx)(I.Z, {
                        user: n,
                        guildId: F,
                        profileType: V,
                        sourceId: en,
                        sourceDetails: (0, E.Z)(k),
                        sourceType: w.n_.ACTIVITY,
                        children: () =>
                            (0, r.jsx)(S.Z.Overlay, {
                                className: s()(P.card, B, { [P.hoisted]: er }),
                                ref: X,
                                children: (0, r.jsxs)(b.Z, {
                                    user: n,
                                    className: P.body,
                                    sourceType: w.n_.ACTIVITY,
                                    interactionSourceId: en,
                                    moreButton: (0, r.jsx)(x.Z, {
                                        display: 'live',
                                        user: n,
                                        activity: k,
                                        entry: W,
                                        onClose: Z,
                                        onRequestOpen: t,
                                        className: M.button
                                    }),
                                    children: [
                                        (0, r.jsx)(N.Z, { ...K }),
                                        (0, r.jsxs)('div', {
                                            className: P.body,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    className: s()(P.content, j),
                                                    children: [
                                                        (0, r.jsx)(f.E, {
                                                            image: z,
                                                            onClick: () => {
                                                                Q({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, p.Z5)(k, n.id);
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
                                                                            text: k.details,
                                                                            onClick: () => {
                                                                                Q({ action: 'OPEN_SPOTIFY_TRACK' }), (0, p.aG)(k);
                                                                            }
                                                                        }),
                                                                        J()
                                                                    ]
                                                                }),
                                                                (0, r.jsx)(A.Z, {
                                                                    user: n,
                                                                    activity: k,
                                                                    className: P.badges
                                                                }),
                                                                $()
                                                            ]
                                                        }),
                                                        V === w.y0.FULL_SIZE && et()
                                                    ]
                                                }),
                                                ee()
                                            ]
                                        }),
                                        V !== w.y0.FULL_SIZE && et()
                                    ]
                                })
                            })
                    });
                }
            })
        })
    });
}
