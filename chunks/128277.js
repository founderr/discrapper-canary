n.d(t, {
    Z: function () {
        return b;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(726542),
    u = n(503438),
    c = n(100527),
    d = n(906732),
    _ = n(379357),
    E = n(358696),
    f = n(180335),
    h = n(952164),
    p = n(502762),
    I = n(652853),
    m = n(448980),
    T = n(194811),
    g = n(373826),
    S = n(315324),
    A = n(582123),
    N = n(262210),
    O = n(666984),
    v = n(290274),
    R = n(318134),
    C = n(228168),
    y = n(981631),
    D = n(689938),
    L = n(139665);
function b(e) {
    let { user: t, currentUser: n, activity: a, guild: b, channel: M, className: P, onClose: U } = e,
        { profileType: w } = (0, I.z)(),
        x = { [L.fullSize]: w === C.y0.FULL_SIZE },
        G = (0, f.Bq)({
            activity: a,
            user: t
        }),
        { largeImage: k } = (0, _.FO)(a),
        { analyticsLocations: B } = (0, d.ZP)(c.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { onAction: F, trackViewRef: V } = (0, R.Z)({
            display: 'live',
            user: t,
            activity: a,
            entry: G,
            analyticsLocations: B
        });
    if (!(0, u.Z)(a)) return null;
    let H = () => {
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
                                            className: s()(L.clickable, L.inline),
                                            onClick: () => {
                                                F({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, h.d$)(a, t.id, n);
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
        Z = () => {
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
        Y = () =>
            null == b || null == M
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: L.voiceChannelDivider }),
                          (0, r.jsx)(S.Z, {
                              user: t,
                              guild: b,
                              channel: M,
                              onAction: F,
                              onClose: U
                          })
                      ]
                  }),
        j = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: s()(L.actions, x),
                      children: (0, r.jsx)(O.Z, {
                          user: t,
                          activity: a,
                          onAction: F
                      })
                  });
    return (0, r.jsx)(d.Gt, {
        value: B,
        children: (0, r.jsx)(A.Z, {
            user: t,
            onClose: U,
            children: (e) => {
                let { onAutoDismiss: n } = e;
                return (0, r.jsxs)(p.Z.Overlay, {
                    className: s()(L.card, P),
                    ref: V,
                    children: [
                        (0, r.jsx)(T.Z, {
                            text: D.Z.Messages.USER_ACTIVITY_LISTENING_TO,
                            platform: l.Z.get(y.ABu.SPOTIFY),
                            tags: (0, r.jsx)(v.Z, {
                                display: 'live',
                                user: t,
                                activity: a,
                                entry: G,
                                onClose: U,
                                onRequestOpen: n
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: L.body,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: s()(L.content, x),
                                    children: [
                                        (0, r.jsx)(E.E, {
                                            image: k,
                                            onClick: () => {
                                                F({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, h.Z5)(a, t.id);
                                            },
                                            size: E.J.SIZE_60
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: L.details,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    children: [
                                                        (0, r.jsx)(g.Z, {
                                                            variant: 'heading-sm/semibold',
                                                            text: a.details,
                                                            onClick: () => {
                                                                F({ action: 'OPEN_SPOTIFY_TRACK' }), (0, h.aG)(a);
                                                            }
                                                        }),
                                                        H()
                                                    ]
                                                }),
                                                (0, r.jsx)(m.Z, {
                                                    user: t,
                                                    activity: a,
                                                    className: L.badges
                                                }),
                                                Z()
                                            ]
                                        }),
                                        w === C.y0.FULL_SIZE && j()
                                    ]
                                }),
                                Y()
                            ]
                        }),
                        w !== C.y0.FULL_SIZE && j()
                    ]
                });
            }
        })
    });
}
