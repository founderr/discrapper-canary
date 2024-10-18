n.d(t, {
    Z: function () {
        return H;
    }
}),
    n(47120);
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(287734),
    u = n(872810),
    c = n(110924),
    d = n(100527),
    _ = n(906732),
    E = n(750881),
    f = n(194082),
    h = n(318374),
    p = n(382182),
    I = n(359110),
    m = n(769654),
    T = n(922482),
    S = n(543882),
    g = n(592125),
    A = n(430824),
    N = n(496675),
    R = n(938475),
    O = n(960870),
    v = n(139793),
    C = n(502762),
    L = n(652853),
    D = n(194811),
    y = n(373826),
    b = n(315324),
    M = n(582123),
    P = n(599864),
    U = n(290274),
    w = n(228168),
    x = n(981631),
    G = n(689938),
    k = n(676411),
    B = n(380934),
    F = n(924482),
    V = n(774797);
function H(e) {
    let { user: t, currentUser: n, stream: i, className: H, onClose: Z } = e,
        { profileType: Y, theme: j } = (0, L.z)(),
        W = {
            [B.fullSize]: Y === w.y0.FULL_SIZE,
            [k.fullSize]: Y === w.y0.FULL_SIZE
        },
        K = (0, E.aK)('user-profile-stream-activity-card-web'),
        { analyticsLocations: z } = (0, _.ZP)(d.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        q = (0, O.Z)({
            display: 'live',
            user: t,
            stream: i,
            analyticsLocations: z
        }),
        Q = (0, v.Z)({
            userId: t.id,
            onAction: q
        }),
        X = (0, s.e7)([A.Z], () => A.Z.getGuild(null == i ? void 0 : i.guildId)),
        $ = (0, s.e7)([g.Z], () => g.Z.getChannel(null == i ? void 0 : i.channelId)),
        J = (0, s.Wu)([R.ZP], () =>
            null != $
                ? R.ZP.getVoiceStatesForChannel($).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        [ee, et] = (0, p.wq)($),
        {
            url: en,
            isLoading: er,
            canSeePreview: ei
        } = (0, s.cj)([N.Z, S.Z], () => {
            let e = null != $ && N.Z.canBasicChannel(x.S7T.CONNECT, $);
            return e
                ? {
                      url: S.Z.getPreviewURL(i.guildId, i.channelId, i.ownerId),
                      isLoading: S.Z.getIsPreviewLoading(i.guildId, i.channelId, i.ownerId),
                      canSeePreview: e
                  }
                : {
                      url: null,
                      isLoading: !1,
                      canSeePreview: e
                  };
        }),
        ea = (0, c.Z)(er ? null : en),
        es = er || null == en ? ea : en;
    if (null == X || null == $ || (K && !1 === i.discoverable)) return null;
    let eo = () => {
            let e = a()(B.preview, W),
                t = () => {
                    q({ action: 'PRESS_STREAM_IMAGE' }), l.default.selectVoiceChannel(i.channelId), (0, u.iV)(i), null == Z || Z();
                };
            return null == es && er
                ? (0, r.jsx)('div', {
                      className: e,
                      children: (0, r.jsx)(o.Spinner, {})
                  })
                : null == es
                  ? (0, r.jsxs)(o.Clickable, {
                        className: a()(e, B.overlay, { [B.clickable]: ee }),
                        onClick: ee ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: j === x.BRd.LIGHT ? V : F
                            }),
                            Y !== w.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(o.Text, {
                                            className: B.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, p.P9)(et)
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            variant: 'text-sm/medium',
                                            children: ei ? G.Z.Messages.STREAM_NO_PREVIEW : G.Z.Messages.STREAM_NO_PERMISSION_CTA
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(o.Clickable, {
                        className: a()(e, B.overlay, { [B.clickable]: ee }),
                        onClick: ee ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: es,
                                className: B.image
                            }),
                            Y !== w.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(o.Text, {
                                            className: B.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, p.P9)(et)
                                        }),
                                        (0, r.jsx)(o.ClydeIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: B.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        el = () => {
            if (Y !== w.y0.FULL_SIZE) return null;
            let e = $.isGuildStageVoice(),
                n = e ? o.StageIcon : o.VoiceNormalIcon;
            return (0, r.jsxs)('div', {
                className: k.details,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(o.Heading, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: k.voiceChannelHeading,
                                children: [
                                    (0, r.jsx)(n, {
                                        size: 'xxs',
                                        color: o.tokens.colors.TEXT_NORMAL,
                                        className: k.voiceIcon
                                    }),
                                    (0, r.jsx)(o.Clickable, {
                                        className: a()(k.clickable, k.inline),
                                        onClick: () => {
                                            null == q || q({ action: 'OPEN_VOICE_CHANNEL' }), e ? (0, T.Cq)($) : (l.default.selectVoiceChannel($.id), (0, I.Kh)($.id)), null == Z || Z();
                                        },
                                        children: $.name
                                    })
                                ]
                            }),
                            (0, r.jsx)(y.Z, {
                                variant: 'text-xs/normal',
                                text: G.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({ guildName: X.name }),
                                onClick: () => {
                                    q({ action: 'OPEN_VOICE_GUILD' }), (0, m.X)(X.id), null == Z || Z();
                                }
                            })
                        ]
                    }),
                    (0, r.jsx)(h.Z, {
                        users: J,
                        guildId: X.id,
                        channelId: $.id,
                        maxUsers: b.W,
                        size: o.AvatarSizes.SIZE_16,
                        disableUserPopout: (e) => e === t.id,
                        overflowCountVariant: 'text-xxs/semibold',
                        overflowCountColor: 'text-muted'
                    })
                ]
            });
        },
        eu = () =>
            Y === w.y0.FULL_SIZE
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: k.voiceChannelDivider }),
                          (0, r.jsx)(b.Z, {
                              user: t,
                              guild: X,
                              channel: $,
                              onAction: q,
                              onClose: Z
                          })
                      ]
                  }),
        ec = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(k.actions, W),
                      children: (0, r.jsx)(P.Z, {
                          channel: $,
                          onAction: q,
                          onClose: Z
                      })
                  });
    return (0, r.jsx)(_.Gt, {
        value: z,
        children: (0, r.jsx)(M.Z, {
            user: t,
            onClose: Z,
            children: (e) => {
                let { onAutoDismiss: n } = e;
                return (0, r.jsxs)(C.Z.Overlay, {
                    className: a()(k.card, H),
                    ref: Q,
                    children: [
                        (0, r.jsx)(D.Z, {
                            text: (0, r.jsxs)(r.Fragment, {
                                children: [G.Z.Messages.USER_ACTIVITY_STREAMING, (0, r.jsx)(f.ZP, { size: f.OH.SMALL })]
                            }),
                            contextMenu: (0, r.jsx)(U.Z, {
                                display: 'live',
                                user: t,
                                onClose: Z,
                                onRequestOpen: n
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: k.body,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: a()(k.content, W),
                                    children: [eo(), el(), Y === w.y0.FULL_SIZE && ec()]
                                }),
                                eu()
                            ]
                        }),
                        Y !== w.y0.FULL_SIZE && ec()
                    ]
                });
            }
        })
    });
}
