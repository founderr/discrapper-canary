n.d(t, {
    Z: function () {
        return O;
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
    y = n(262210),
    A = n(666984),
    N = n(670451),
    C = n(228168),
    R = n(249942);
function O(e) {
    let { user: t, currentUser: n, activity: a, guild: O, channel: D, className: L, onClose: x } = e,
        { profileType: w } = (0, E.z)(),
        P = { [R.fullSize]: w === C.y0.FULL_SIZE },
        M = (0, _.Z)({
            activity: a,
            user: t
        }),
        k = (0, g.Z)(a),
        { largeImage: U } = (0, d.FO)(a),
        { analyticsLocations: B } = (0, c.ZP)(u.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        G = (0, h.Z)({
            display: 'live',
            user: t,
            activity: a,
            entry: M,
            analyticsLocations: B
        }),
        Z = (0, m.Z)({
            userId: t.id,
            onAction: G
        });
    if (!(0, l.Z)(a)) return null;
    let F = () =>
        t.id === n.id
            ? null
            : (0, r.jsx)('div', {
                  className: s()(R.actions, P),
                  children: (0, r.jsx)(A.Z, {
                      user: t,
                      activity: a,
                      onAction: G
                  })
              });
    return (0, r.jsx)(c.Gt, {
        value: B,
        children: (0, r.jsxs)(I.Z, {
            ref: Z,
            className: s()(R.card, L),
            onAction: G,
            onClose: x,
            children: [
                (0, r.jsx)(T.Z, {
                    ...k,
                    contextMenu: (0, r.jsx)(N.Z, {
                        display: 'live',
                        user: t,
                        activity: a,
                        entry: M,
                        onClose: x
                    })
                }),
                (0, r.jsxs)('div', {
                    className: R.body,
                    children: [
                        (0, r.jsxs)('div', {
                            className: s()(R.content, P),
                            children: [
                                (0, r.jsx)(f.E, {
                                    image: U,
                                    size: f.J.SIZE_60,
                                    className: R.clickableImage,
                                    onClick: () => {
                                        G({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, p.Z5)(a, t.id);
                                    }
                                }),
                                (0, r.jsxs)('div', {
                                    className: R.details,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            children: [
                                                (0, r.jsx)(b.Z, {
                                                    variant: 'heading-sm/semibold',
                                                    text: a.details,
                                                    onClick: () => {
                                                        G({ action: 'OPEN_SPOTIFY_TRACK' }), (0, p.aG)(a);
                                                    }
                                                }),
                                                (() => {
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
                                                                                    className: s()(R.clickableText, R.inline),
                                                                                    onClick: () => {
                                                                                        G({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, p.d$)(a, t.id, n);
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
                                                })()
                                            ]
                                        }),
                                        (0, r.jsx)(v.Z, {
                                            user: t,
                                            activity: a,
                                            className: R.badges
                                        }),
                                        (() => {
                                            let { timestamps: e } = a;
                                            if (null == e) return null;
                                            let { start: t, end: n } = e;
                                            return null == t || null == n
                                                ? null
                                                : (0, r.jsx)(y.Z, {
                                                      start: t,
                                                      end: n
                                                  });
                                        })()
                                    ]
                                }),
                                w === C.y0.FULL_SIZE && F()
                            ]
                        }),
                        null == O || null == D
                            ? null
                            : (0, r.jsx)(S.Z, {
                                  user: t,
                                  guild: O,
                                  channel: D,
                                  onAction: G,
                                  onClose: x
                              })
                    ]
                }),
                w !== C.y0.FULL_SIZE && F()
            ]
        })
    });
}
