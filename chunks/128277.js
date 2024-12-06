n.d(t, {
    Z: function () {
        return D;
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
    E = n(652853),
    v = n(448980),
    I = n(336383),
    T = n(194811),
    b = n(373826),
    S = n(315324),
    y = n(582123),
    A = n(262210),
    N = n(666984),
    C = n(670451),
    R = n(228168),
    O = n(249942);
function D(e) {
    let { user: t, currentUser: n, activity: a, guild: D, channel: L, className: x, onClose: w } = e,
        { profileType: P } = (0, E.z)(),
        M = { [O.fullSize]: P === R.y0.FULL_SIZE },
        k = (0, _.Z)({
            activity: a,
            user: t
        }),
        U = (0, g.Z)(a),
        { largeImage: B } = (0, d.FO)(a),
        { analyticsLocations: G } = (0, c.ZP)(u.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        Z = (0, h.Z)({
            display: 'live',
            user: t,
            activity: a,
            entry: k,
            analyticsLocations: G
        }),
        F = (0, m.Z)({
            userId: t.id,
            onAction: Z
        });
    if (!(0, l.Z)(a)) return null;
    let V = () => {
            var e, n;
            let l = null !== (n = null === (e = a.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== n ? n : [];
            return 0 === l.length
                ? null
                : null == a.sync_id
                  ? (0, r.jsx)(b.Z, {
                        variant: 'text-xs/normal',
                        text: l.join(', ')
                    })
                  : (0, r.jsx)(b.Z, {
                        variant: 'text-xs/normal',
                        text: l.map((e, n) =>
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(o.Clickable, {
                                            className: s()(O.clickableText, O.inline),
                                            onClick: () => {
                                                Z({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, p.d$)(a, t.id, n);
                                            },
                                            children: e
                                        }),
                                        n < l.length - 1 ? ', ' : ''
                                    ]
                                },
                                n
                            )
                        )
                    });
        },
        j = () => {
            let { timestamps: e } = a;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, r.jsx)(A.Z, {
                      start: t,
                      end: n
                  });
        },
        H = () =>
            null == D || null == L
                ? null
                : (0, r.jsx)(S.Z, {
                      user: t,
                      guild: D,
                      channel: L,
                      onAction: Z,
                      onClose: w
                  }),
        Y = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: s()(O.actions, M),
                      children: (0, r.jsx)(N.Z, {
                          user: t,
                          activity: a,
                          onAction: Z
                      })
                  });
    return (0, r.jsx)(c.Gt, {
        value: G,
        children: (0, r.jsx)(y.Z, {
            user: t,
            onClose: w,
            children: (e) => {
                let { onAutoDismiss: n } = e;
                return (0, r.jsxs)(I.Z, {
                    ref: F,
                    className: s()(O.card, x),
                    onAction: Z,
                    onClose: w,
                    children: [
                        (0, r.jsx)(T.Z, {
                            ...U,
                            contextMenu: (0, r.jsx)(C.Z, {
                                display: 'live',
                                user: t,
                                activity: a,
                                entry: k,
                                onClose: w,
                                onRequestOpen: n
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: O.body,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: s()(O.content, M),
                                    children: [
                                        (0, r.jsx)(f.E, {
                                            image: B,
                                            onClick: () => {
                                                Z({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, p.Z5)(a, t.id);
                                            },
                                            size: f.J.SIZE_60
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: O.details,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    children: [
                                                        (0, r.jsx)(b.Z, {
                                                            variant: 'heading-sm/semibold',
                                                            text: a.details,
                                                            onClick: () => {
                                                                Z({ action: 'OPEN_SPOTIFY_TRACK' }), (0, p.aG)(a);
                                                            }
                                                        }),
                                                        V()
                                                    ]
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    user: t,
                                                    activity: a,
                                                    className: O.badges
                                                }),
                                                j()
                                            ]
                                        }),
                                        P === R.y0.FULL_SIZE && Y()
                                    ]
                                }),
                                H()
                            ]
                        }),
                        P !== R.y0.FULL_SIZE && Y()
                    ]
                });
            }
        })
    });
}
