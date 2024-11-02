var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(512722),
    s = n.n(a),
    o = n(442837),
    c = n(481060),
    u = n(730749),
    d = n(726542),
    h = n(600164),
    m = n(750154),
    p = n(592125),
    f = n(594174),
    g = n(979651),
    C = n(374129),
    x = n(639351),
    v = n(503438),
    _ = n(802856),
    I = n(387903),
    E = n(606925),
    b = n(719216),
    S = n(429589),
    Z = n(276149),
    T = n(636245),
    N = n(697761),
    j = n(611459),
    A = n(544671),
    y = n(757182),
    P = n(910424),
    M = n(981631),
    R = n(193710);
t.Z = (0, u.Z)((e) => {
    let { activity: t, embeddedActivity: n, user: l, applicationStream: a, className: u, guildId: L, channelId: k, source: O, color: w = c.Button.Colors.WHITE, look: D = c.Button.Looks.OUTLINED, type: U, onAction: B, isEmbedded: H = !1 } = e,
        F = (0, o.e7)([f.default], () => {
            let e = f.default.getCurrentUser();
            return s()(null != e, 'UserActivityActions: currentUser cannot be undefined'), e;
        }),
        G = U === I.Y.STREAM_PREVIEW || null != a,
        V = (0, v.Z)(t),
        z = V || G ? h.Z.Direction.HORIZONTAL : h.Z.Direction.VERTICAL,
        W = (null == t ? void 0 : t.type) === M.IIU.HANG_STATUS,
        Y = (0, o.e7)([g.Z, p.Z], () => {
            var e;
            return W ? p.Z.getChannel(null === (e = g.Z.getVoiceStateForUser(l.id)) || void 0 === e ? void 0 : e.channelId) : null;
        }),
        K = z === h.Z.Direction.VERTICAL;
    return (0, i.jsx)(h.Z, {
        grow: 0,
        align: h.Z.Align.STRETCH,
        direction: z,
        wrap: K ? h.Z.Wrap.WRAP : h.Z.Wrap.NO_WRAP,
        className: r()(u, R.buttonsWrapper, K ? R.vertical : R.horizontal),
        children: (() => {
            if ((0, _.Z)(t))
                return (0, i.jsx)(
                    E.Z,
                    {
                        platform: d.Z.get(M.ABu.XBOX),
                        look: D,
                        color: w,
                        onAction: B,
                        Icon: x.Z
                    },
                    'ConnectPlatformActivityButton'
                );
            if ((null == t ? void 0 : t.platform) === M.M7m.PS4 || (null == t ? void 0 : t.platform) === M.M7m.PS5)
                return (0, i.jsx)(
                    E.Z,
                    {
                        look: D,
                        color: w,
                        platform: d.Z.get(M.ABu.PLAYSTATION),
                        onAction: B,
                        Icon: C.Z
                    },
                    'ConnectPlatformActivityButton'
                );
            if (V) {
                let e = (0, i.jsx)(
                        A.Z,
                        {
                            activity: t,
                            user: l,
                            guildId: L,
                            channelId: k,
                            source: O,
                            look: D,
                            color: w,
                            onAction: B
                        },
                        'spotify-activity-sync-button'
                    ),
                    n = (0, i.jsx)(
                        j.Z,
                        {
                            activity: t,
                            user: l,
                            source: O,
                            look: D,
                            color: w,
                            onAction: B
                        },
                        'spotify-activity-play-button'
                    );
                return (0, i.jsxs)(i.Fragment, {
                    children: [n, e]
                });
            }
            if ((0, m.dS)(t)) {
                let e = (0, m.rq)(t);
                return null == e
                    ? null
                    : (0, i.jsx)(
                          T.Z,
                          {
                              guildId: e.guildId,
                              channelId: e.channelId,
                              color: w,
                              look: D,
                              onAction: B
                          },
                          e.channelId
                      );
            }
            return G
                ? (0, i.jsx)(
                      P.Z,
                      {
                          isCurrentUser: F.id === l.id,
                          color: w,
                          look: D,
                          applicationStream: a,
                          onAction: B
                      },
                      'watch-button'
                  )
                : W && null != Y
                  ? (0, i.jsx)(
                        Z.Z,
                        {
                            color: w,
                            look: D,
                            hangStatusChannel: Y,
                            onAction: B
                        },
                        'hang-status-button'
                    )
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(
                                y.Z,
                                {
                                    activity: t,
                                    color: w,
                                    look: D,
                                    onAction: B
                                },
                                'watch-button'
                            ),
                            (0, i.jsx)(
                                S.Z,
                                {
                                    activity: t,
                                    embeddedActivity: n,
                                    user: l,
                                    color: w,
                                    look: D,
                                    isEmbedded: H,
                                    onAction: B
                                },
                                'join-activity-button'
                            ),
                            (0, i.jsx)(
                                N.Z,
                                {
                                    activity: t,
                                    user: l,
                                    color: w,
                                    look: D,
                                    onAction: B
                                },
                                'notify-button'
                            ),
                            (0, i.jsx)(
                                b.Z,
                                {
                                    user: l,
                                    color: w,
                                    look: D,
                                    activity: t,
                                    onAction: B
                                },
                                'custom-activity-button'
                            )
                        ]
                    });
        })()
    });
});
