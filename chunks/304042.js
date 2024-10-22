n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(287734),
    c = n(872810),
    d = n(110924),
    _ = n(100527),
    E = n(906732),
    f = n(750881),
    h = n(194082),
    p = n(318374),
    I = n(382182),
    m = n(359110),
    T = n(769654),
    S = n(922482),
    g = n(543882),
    A = n(592125),
    N = n(430824),
    R = n(496675),
    O = n(699516),
    v = n(938475),
    C = n(626135),
    L = n(960870),
    D = n(139793),
    y = n(502762),
    b = n(652853),
    M = n(194811),
    P = n(373826),
    U = n(315324),
    w = n(582123),
    x = n(599864),
    G = n(290274),
    k = n(228168),
    B = n(981631),
    F = n(689938),
    V = n(676411),
    H = n(380934),
    Z = n(924482),
    Y = n(774797);
function j(e) {
    let { user: t, currentUser: n, stream: a, className: j, onClose: W } = e,
        { profileType: K, theme: z } = (0, b.z)(),
        q = {
            [H.fullSize]: K === k.y0.FULL_SIZE,
            [V.fullSize]: K === k.y0.FULL_SIZE
        },
        { enabled: Q, analyticsEligible: X } = (0, f.R4)('user-profile-stream-activity-card-web'),
        { analyticsLocations: $ } = (0, E.ZP)(_.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        J = (0, L.Z)({
            display: 'live',
            user: t,
            stream: a,
            analyticsLocations: $
        }),
        ee = (0, D.Z)({
            userId: t.id,
            onAction: J
        }),
        et = (0, o.e7)([N.Z], () => N.Z.getGuild(null == a ? void 0 : a.guildId)),
        en = (0, o.e7)([A.Z], () => A.Z.getChannel(null == a ? void 0 : a.channelId)),
        er = (0, o.Wu)([v.ZP], () =>
            null != en
                ? v.ZP.getVoiceStatesForChannel(en).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        [ei, ea] = (0, I.wq)(en),
        {
            url: es,
            isLoading: eo,
            canSeePreview: el
        } = (0, o.cj)([R.Z, g.Z], () => {
            let e = null != en && R.Z.canBasicChannel(B.S7T.CONNECT, en);
            return e
                ? {
                      url: g.Z.getPreviewURL(a.guildId, a.channelId, a.ownerId),
                      isLoading: g.Z.getIsPreviewLoading(a.guildId, a.channelId, a.ownerId),
                      canSeePreview: e
                  }
                : {
                      url: null,
                      isLoading: !1,
                      canSeePreview: e
                  };
        }),
        eu = (0, o.e7)([O.Z], () => O.Z.getRelationshipType(t.id));
    i.useEffect(() => {
        if (X) {
            var e;
            C.default.track(B.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: t.id,
                discoverable: null === (e = a.discoverable) || void 0 === e || e,
                surface: 'user-profile-stream-activity-card',
                relationship_type: eu,
                treatment: Q && !1 === a.discoverable ? f.h9.HIDE : f.h9.SHOW
            });
        }
    }, [t, eu, Q, X, a]);
    let ec = (0, d.Z)(eo ? null : es),
        ed = eo || null == es ? ec : es;
    if (null == et || null == en || (Q && !1 === a.discoverable)) return null;
    let e_ = () => {
            let e = s()(H.preview, q),
                t = () => {
                    J({ action: 'PRESS_STREAM_IMAGE' }), u.default.selectVoiceChannel(a.channelId), (0, c.iV)(a), null == W || W();
                };
            return null == ed && eo
                ? (0, r.jsx)('div', {
                      className: e,
                      children: (0, r.jsx)(l.Spinner, {})
                  })
                : null == ed
                  ? (0, r.jsxs)(l.Clickable, {
                        className: s()(e, H.overlay, { [H.clickable]: ei }),
                        onClick: ei ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: z === B.BRd.LIGHT ? Y : Z
                            }),
                            K !== k.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: H.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, I.P9)(ea)
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: el ? F.Z.Messages.STREAM_NO_PREVIEW : F.Z.Messages.STREAM_NO_PERMISSION_CTA
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(l.Clickable, {
                        className: s()(e, H.overlay, { [H.clickable]: ei }),
                        onClick: ei ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: ed,
                                className: H.image
                            }),
                            K !== k.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: H.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, I.P9)(ea)
                                        }),
                                        (0, r.jsx)(l.ClydeIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: H.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        eE = () => {
            if (K !== k.y0.FULL_SIZE) return null;
            let e = en.isGuildStageVoice(),
                n = e ? l.StageIcon : l.VoiceNormalIcon;
            return (0, r.jsxs)('div', {
                className: V.details,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(l.Heading, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: V.voiceChannelHeading,
                                children: [
                                    (0, r.jsx)(n, {
                                        size: 'xxs',
                                        color: l.tokens.colors.TEXT_NORMAL,
                                        className: V.voiceIcon
                                    }),
                                    (0, r.jsx)(l.Clickable, {
                                        className: s()(V.clickable, V.inline),
                                        onClick: () => {
                                            null == J || J({ action: 'OPEN_VOICE_CHANNEL' }), e ? (0, S.Cq)(en) : (u.default.selectVoiceChannel(en.id), (0, m.Kh)(en.id)), null == W || W();
                                        },
                                        children: en.name
                                    })
                                ]
                            }),
                            (0, r.jsx)(P.Z, {
                                variant: 'text-xs/normal',
                                text: F.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({ guildName: et.name }),
                                onClick: () => {
                                    J({ action: 'OPEN_VOICE_GUILD' }), (0, T.X)(et.id), null == W || W();
                                }
                            })
                        ]
                    }),
                    (0, r.jsx)(p.Z, {
                        users: er,
                        guildId: et.id,
                        channelId: en.id,
                        maxUsers: U.W,
                        size: l.AvatarSizes.SIZE_16,
                        disableUserPopout: (e) => e === t.id,
                        overflowCountVariant: 'text-xxs/semibold',
                        overflowCountColor: 'text-muted'
                    })
                ]
            });
        },
        ef = () =>
            K === k.y0.FULL_SIZE
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: V.voiceChannelDivider }),
                          (0, r.jsx)(U.Z, {
                              user: t,
                              guild: et,
                              channel: en,
                              onAction: J,
                              onClose: W
                          })
                      ]
                  }),
        eh = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: s()(V.actions, q),
                      children: (0, r.jsx)(x.Z, {
                          channel: en,
                          onAction: J,
                          onClose: W
                      })
                  });
    return (0, r.jsx)(E.Gt, {
        value: $,
        children: (0, r.jsx)(w.Z, {
            user: t,
            onClose: W,
            children: (e) => {
                let { onAutoDismiss: n } = e;
                return (0, r.jsxs)(y.Z.Overlay, {
                    className: s()(V.card, j),
                    ref: ee,
                    children: [
                        (0, r.jsx)(M.Z, {
                            text: (0, r.jsxs)(r.Fragment, {
                                children: [F.Z.Messages.USER_ACTIVITY_STREAMING, (0, r.jsx)(h.ZP, { size: h.OH.SMALL })]
                            }),
                            contextMenu: (0, r.jsx)(G.Z, {
                                display: 'live',
                                user: t,
                                onClose: W,
                                onRequestOpen: n
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: V.body,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: s()(V.content, q),
                                    children: [e_(), eE(), K === k.y0.FULL_SIZE && eh()]
                                }),
                                ef()
                            ]
                        }),
                        K !== k.y0.FULL_SIZE && eh()
                    ]
                });
            }
        })
    });
}
