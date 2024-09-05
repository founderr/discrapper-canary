n.d(t, {
    Z: function () {
        return L;
    }
});
var r = n(735250),
    i = n(470079),
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
    h = n(994746),
    p = n(502762),
    I = n(652853),
    m = n(448980),
    T = n(194811),
    g = n(373826),
    S = n(315324),
    A = n(582123),
    N = n(262210),
    O = n(666984),
    R = n(290274),
    v = n(318134),
    C = n(228168),
    y = n(139665);
function L(e) {
    let { user: t, currentUser: n, activity: a, guild: L, channel: D, className: b, onClose: M } = e,
        { profileType: P } = (0, I.z)(),
        U = { [y.fullSize]: P === C.y0.FULL_SIZE },
        w = (0, E.Bq)({
            activity: a,
            user: t
        }),
        x = (0, h.Z)(a),
        { largeImage: G } = (0, d.FO)(a),
        { analyticsLocations: k } = (0, c.ZP)(u.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { onAction: B, trackViewRef: F } = (0, v.Z)({
            display: 'live',
            user: t,
            activity: a,
            entry: w,
            analyticsLocations: k
        });
    if (!(0, l.Z)(a)) return null;
    let V = () => {
            var e, n;
            let l = null !== (n = null === (e = a.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== n ? n : [];
            return 0 === l.length
                ? null
                : null == a.sync_id
                  ? (0, r.jsx)(g.Z, {
                        variant: 'text-xs/normal',
                        text: l.join(', ')
                    })
                  : (0, r.jsx)(g.Z, {
                        variant: 'text-xs/normal',
                        text: l.map((e, n) =>
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(o.Clickable, {
                                            className: s()(y.clickable, y.inline),
                                            onClick: () => {
                                                B({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, f.d$)(a, t.id, n);
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
        H = () => {
            let { timestamps: e } = a;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, r.jsx)(N.Z, {
                      start: t,
                      end: n
                  });
        },
        Z = () =>
            null == L || null == D
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: y.voiceChannelDivider }),
                          (0, r.jsx)(S.Z, {
                              user: t,
                              guild: L,
                              channel: D,
                              onAction: B,
                              onClose: M
                          })
                      ]
                  }),
        Y = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: s()(y.actions, U),
                      children: (0, r.jsx)(O.Z, {
                          user: t,
                          activity: a,
                          onAction: B
                      })
                  });
    return (0, r.jsx)(c.Gt, {
        value: k,
        children: (0, r.jsx)(A.Z, {
            user: t,
            onClose: M,
            children: (e) => {
                let { onAutoDismiss: n } = e;
                return (0, r.jsxs)(p.Z.Overlay, {
                    className: s()(y.card, b),
                    ref: F,
                    children: [
                        (0, r.jsx)(T.Z, {
                            text: x.text,
                            icon: x.icon,
                            tags: (0, r.jsx)(R.Z, {
                                display: 'live',
                                user: t,
                                activity: a,
                                entry: w,
                                onClose: M,
                                onRequestOpen: n
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: y.body,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: s()(y.content, U),
                                    children: [
                                        (0, r.jsx)(_.E, {
                                            image: G,
                                            onClick: () => {
                                                B({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, f.Z5)(a, t.id);
                                            },
                                            size: _.J.SIZE_60
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: y.details,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    children: [
                                                        (0, r.jsx)(g.Z, {
                                                            variant: 'heading-sm/semibold',
                                                            text: a.details,
                                                            onClick: () => {
                                                                B({ action: 'OPEN_SPOTIFY_TRACK' }), (0, f.aG)(a);
                                                            }
                                                        }),
                                                        V()
                                                    ]
                                                }),
                                                (0, r.jsx)(m.Z, {
                                                    user: t,
                                                    activity: a,
                                                    className: y.badges
                                                }),
                                                H()
                                            ]
                                        }),
                                        P === C.y0.FULL_SIZE && Y()
                                    ]
                                }),
                                Z()
                            ]
                        }),
                        P !== C.y0.FULL_SIZE && Y()
                    ]
                });
            }
        })
    });
}
