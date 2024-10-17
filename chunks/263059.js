n.d(t, {
    Z: function () {
        return P;
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
    y = n(666984),
    D = n(290274),
    b = n(228168),
    M = n(676411);
function P(e) {
    let { user: t, currentUser: n, activity: a, guild: P, channel: U, className: w, onClose: x } = e,
        { profileType: G } = (0, A.z)(),
        k = { [M.fullSize]: G === b.y0.FULL_SIZE },
        { interactionType: B } = (0, m.Xo)(),
        F = (0, E.Bq)({
            activity: a,
            user: t
        }),
        V = (0, I.Z)(a),
        { largeImage: H } = (0, d.FO)(a),
        { analyticsLocations: Z } = (0, c.ZP)(u.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        Y = (0, h.Z)({
            display: 'live',
            user: t,
            activity: a,
            entry: F,
            analyticsLocations: Z
        }),
        j = (0, p.Z)({
            userId: t.id,
            onAction: Y
        });
    if (!(0, l.Z)(a)) return null;
    let W = () => {
            var e, n;
            let l = null !== (n = null === (e = a.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== n ? n : [];
            return 0 === l.length
                ? null
                : null == a.sync_id
                  ? (0, r.jsx)(O.Z, {
                        variant: 'text-xs/normal',
                        text: l.join(', ')
                    })
                  : (0, r.jsx)(O.Z, {
                        variant: 'text-xs/normal',
                        text: l.map((e, n) =>
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(o.Clickable, {
                                            className: s()(M.clickable, M.inline),
                                            onClick: () => {
                                                Y({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, f.d$)(a, t.id, n);
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
        K = () => {
            let { timestamps: e } = a;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, r.jsx)(L.Z, {
                      start: t,
                      end: n
                  });
        },
        z = () =>
            null == P || null == U
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: M.voiceChannelDivider }),
                          (0, r.jsx)(v.Z, {
                              user: t,
                              guild: P,
                              channel: U,
                              onAction: Y,
                              onClose: x
                          })
                      ]
                  }),
        q = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: s()(M.actions, k),
                      children: (0, r.jsx)(y.Z, {
                          user: t,
                          activity: a,
                          onAction: Y
                      })
                  });
    return (0, r.jsx)(c.Gt, {
        value: Z,
        children: (0, r.jsx)(C.Z, {
            user: t,
            onClose: x,
            children: (e) => {
                let { onAutoDismiss: n } = e;
                return (0, r.jsx)(T.Z, {
                    user: t,
                    profileType: null === G || G === b.y0.CARD ? b.y0.BITE_SIZE : G,
                    sourceType: b.n_.ACTIVITY,
                    children: () =>
                        (0, r.jsx)(g.Z.Overlay, {
                            className: s()(M.card, w, { [M.disabled]: null !== B }),
                            ref: j,
                            children: (0, r.jsxs)(S.Z, {
                                user: t,
                                className: M.body,
                                sourceType: b.n_.ACTIVITY,
                                children: [
                                    (0, r.jsx)(R.Z, {
                                        text: V.text,
                                        icon: V.icon,
                                        contextMenu: (0, r.jsx)(D.Z, {
                                            display: 'live',
                                            user: t,
                                            activity: a,
                                            entry: F,
                                            onClose: x,
                                            onRequestOpen: n
                                        })
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: M.body,
                                        children: [
                                            (0, r.jsxs)('div', {
                                                className: s()(M.content, k),
                                                children: [
                                                    (0, r.jsx)(_.E, {
                                                        image: H,
                                                        onClick: () => {
                                                            Y({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, f.Z5)(a, t.id);
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
                                                                        text: a.details,
                                                                        onClick: () => {
                                                                            Y({ action: 'OPEN_SPOTIFY_TRACK' }), (0, f.aG)(a);
                                                                        }
                                                                    }),
                                                                    W()
                                                                ]
                                                            }),
                                                            (0, r.jsx)(N.Z, {
                                                                user: t,
                                                                activity: a,
                                                                className: M.badges
                                                            }),
                                                            K()
                                                        ]
                                                    }),
                                                    G === b.y0.FULL_SIZE && q()
                                                ]
                                            }),
                                            z()
                                        ]
                                    }),
                                    G !== b.y0.FULL_SIZE && q()
                                ]
                            })
                        })
                });
            }
        })
    });
}
