n.d(t, {
    Z: function () {
        return Z;
    }
});
var r = n(47120);
var i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    u = n(287734),
    c = n(872810),
    d = n(110924),
    _ = n(100527),
    E = n(906732),
    f = n(750881),
    h = n(194082),
    p = n(318374),
    m = n(382182),
    I = n(769654),
    T = n(543882),
    g = n(592125),
    S = n(430824),
    A = n(496675),
    v = n(938475),
    N = n(960870),
    O = n(139793),
    R = n(502762),
    C = n(652853),
    y = n(194811),
    b = n(373826),
    L = n(315324),
    D = n(582123),
    M = n(648926),
    P = n(290274),
    U = n(228168),
    w = n(981631),
    x = n(689938),
    G = n(676411),
    k = n(380934),
    B = n(924482),
    F = n(774797);
function Z(e) {
    let { user: t, currentUser: n, stream: r, className: a, onClose: Z } = e,
        { profileType: V, theme: H } = (0, C.z)(),
        Y = {
            [k.fullSize]: V === U.y0.FULL_SIZE,
            [G.fullSize]: V === U.y0.FULL_SIZE
        },
        j = (0, f.aK)('user-profile-stream-activity-card-web'),
        { analyticsLocations: W } = (0, E.ZP)(_.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        K = (0, N.Z)({
            display: 'live',
            user: t,
            stream: r,
            analyticsLocations: W
        }),
        z = (0, O.Z)({
            userId: t.id,
            onAction: K
        }),
        q = (0, s.e7)([S.Z], () => S.Z.getGuild(null == r ? void 0 : r.guildId)),
        Q = (0, s.e7)([g.Z], () => g.Z.getChannel(null == r ? void 0 : r.channelId)),
        X = (0, s.Wu)([v.ZP], () =>
            null != Q
                ? v.ZP.getVoiceStatesForChannel(Q).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        [$, J] = (0, m.wq)(Q),
        {
            url: ee,
            isLoading: et,
            canSeePreview: en
        } = (0, s.cj)([A.Z, T.Z], () => {
            let e = null != Q && A.Z.canBasicChannel(w.S7T.CONNECT, Q);
            return e
                ? {
                      url: T.Z.getPreviewURL(r.guildId, r.channelId, r.ownerId),
                      isLoading: T.Z.getIsPreviewLoading(r.guildId, r.channelId, r.ownerId),
                      canSeePreview: e
                  }
                : {
                      url: null,
                      isLoading: !1,
                      canSeePreview: e
                  };
        }),
        er = (0, d.Z)(et ? null : ee),
        ei = et || null == ee ? er : ee;
    if (null == q || null == Q || (j && !1 === r.discoverable)) return null;
    let ea = () => {
            let e = o()(k.preview, Y),
                t = () => {
                    K({ action: 'PRESS_STREAM_IMAGE' }), u.default.selectVoiceChannel(r.channelId), (0, c.iV)(r), null == Z || Z();
                };
            return null == ei && et
                ? (0, i.jsx)('div', {
                      className: e,
                      children: (0, i.jsx)(l.Spinner, {})
                  })
                : null == ei
                  ? (0, i.jsxs)(l.Clickable, {
                        className: o()(e, { [k.clickable]: $ }),
                        onClick: $ ? t : void 0,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: H === w.BRd.LIGHT ? F : B
                            }),
                            V !== U.y0.FULL_SIZE &&
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-xs/normal',
                                    children: en ? x.Z.Messages.STREAM_NO_PREVIEW : x.Z.Messages.STREAM_NO_PERMISSION_CTA
                                })
                        ]
                    })
                  : (0, i.jsxs)(l.Clickable, {
                        className: o()(e, k.overlay, { [k.clickable]: $ }),
                        onClick: $ ? t : void 0,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: ei,
                                className: k.image
                            }),
                            V === U.y0.BITE_SIZE &&
                                (0, i.jsx)(l.ClydeIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: k.clyde
                                })
                        ]
                    });
        },
        eo = () => {
            if (V !== U.y0.FULL_SIZE) return null;
            let e = () => {
                    u.default.selectVoiceChannel(Q.id), (0, I.X)(q.id), null == K || K({ action: 'OPEN_VOICE_CHANNEL' }), null == Z || Z();
                },
                n = () => {
                    (0, I.X)(q.id), K({ action: 'OPEN_VOICE_GUILD' }), null == Z || Z();
                };
            return (0, i.jsxs)('div', {
                className: G.details,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)(l.Heading, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: G.voiceChannelHeading,
                                children: [
                                    (0, i.jsx)(l.VoiceNormalIcon, {
                                        size: 'xxs',
                                        color: l.tokens.colors.TEXT_NORMAL,
                                        className: G.voiceIcon
                                    }),
                                    (0, i.jsx)(l.Clickable, {
                                        className: o()(G.clickable, G.inline),
                                        onClick: e,
                                        children: Q.name
                                    })
                                ]
                            }),
                            (0, i.jsx)(b.Z, {
                                variant: 'text-xs/normal',
                                text: x.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({ guildName: q.name }),
                                onClick: n
                            })
                        ]
                    }),
                    (0, i.jsx)(p.Z, {
                        users: X,
                        guildId: q.id,
                        channelId: Q.id,
                        maxUsers: L.W,
                        size: l.AvatarSizes.SIZE_16,
                        disableUserPopout: (e) => e === t.id,
                        overflowCountVariant: 'text-xxs/semibold',
                        overflowCountColor: 'text-muted'
                    })
                ]
            });
        },
        es = () =>
            V === U.y0.FULL_SIZE
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)('div', { className: G.voiceChannelDivider }),
                          (0, i.jsx)(L.Z, {
                              user: t,
                              guild: q,
                              channel: Q,
                              onAction: K,
                              onClose: Z
                          })
                      ]
                  }),
        el = () =>
            t.id === n.id
                ? null
                : (0, i.jsx)('div', {
                      className: o()(G.actions, Y),
                      children: (0, i.jsx)(M.Z, {
                          stream: r,
                          canWatch: $,
                          unavailableReason: J,
                          onAction: K,
                          onClose: Z
                      })
                  });
    return (0, i.jsx)(E.Gt, {
        value: W,
        children: (0, i.jsx)(D.Z, {
            user: t,
            onClose: Z,
            children: (e) => {
                let { onAutoDismiss: n } = e;
                return (0, i.jsxs)(R.Z.Overlay, {
                    className: o()(G.card, a),
                    ref: z,
                    children: [
                        (0, i.jsx)(y.Z, {
                            text: (0, i.jsxs)(i.Fragment, {
                                children: [x.Z.Messages.USER_ACTIVITY_STREAMING, (0, i.jsx)(h.ZP, { size: h.OH.SMALL })]
                            }),
                            contextMenu: (0, i.jsx)(P.Z, {
                                display: 'live',
                                user: t,
                                onClose: Z,
                                onRequestOpen: n
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: G.body,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: o()(G.content, Y),
                                    children: [ea(), eo(), V === U.y0.FULL_SIZE && el()]
                                }),
                                es()
                            ]
                        }),
                        V !== U.y0.FULL_SIZE && el()
                    ]
                });
            }
        })
    });
}
