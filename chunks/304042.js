n.d(t, {
    Z: function () {
        return z;
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
    _ = n(833664),
    E = n(579630),
    f = n(100527),
    h = n(906732),
    p = n(750881),
    I = n(194082),
    m = n(318374),
    T = n(382182),
    S = n(359110),
    g = n(769654),
    A = n(922482),
    N = n(543882),
    R = n(592125),
    O = n(430824),
    v = n(496675),
    C = n(158776),
    L = n(699516),
    D = n(938475),
    y = n(626135),
    b = n(960870),
    M = n(139793),
    P = n(502762),
    U = n(652853),
    w = n(194811),
    x = n(373826),
    G = n(315324),
    k = n(582123),
    B = n(599864),
    F = n(290274),
    V = n(228168),
    H = n(981631),
    Z = n(689938),
    Y = n(676411),
    j = n(380934),
    W = n(924482),
    K = n(774797);
function z(e) {
    let { user: t, currentUser: n, stream: a, className: z, onClose: q } = e,
        { profileType: Q, theme: X } = (0, U.z)(),
        $ = {
            [j.fullSize]: Q === V.y0.FULL_SIZE,
            [Y.fullSize]: Q === V.y0.FULL_SIZE
        },
        { enabled: J, analyticsEligible: ee } = (0, p.R4)('user-profile-stream-activity-card-web'),
        { analyticsLocations: et } = (0, h.ZP)(f.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        en = (0, b.Z)({
            display: 'live',
            user: t,
            stream: a,
            analyticsLocations: et
        }),
        er = (0, M.Z)({
            userId: t.id,
            onAction: en
        }),
        ei = (0, o.e7)([O.Z], () => O.Z.getGuild(null == a ? void 0 : a.guildId)),
        ea = (0, o.e7)([R.Z], () => R.Z.getChannel(null == a ? void 0 : a.channelId)),
        es = (0, o.Wu)([D.ZP], () =>
            null != ea
                ? D.ZP.getVoiceStatesForChannel(ea).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        eo = (0, o.e7)([C.Z], () => C.Z.findActivity(t.id, (e) => (0, _.Z)(e) && !(0, E.Z)(e))),
        [el, eu] = (0, T.wq)(ea),
        {
            url: ec,
            isLoading: ed,
            canSeePreview: e_
        } = (0, o.cj)([v.Z, N.Z], () => {
            let e = null != ea && v.Z.canBasicChannel(H.S7T.CONNECT, ea);
            return e
                ? {
                      url: N.Z.getPreviewURL(a.guildId, a.channelId, a.ownerId),
                      isLoading: N.Z.getIsPreviewLoading(a.guildId, a.channelId, a.ownerId),
                      canSeePreview: e
                  }
                : {
                      url: null,
                      isLoading: !1,
                      canSeePreview: e
                  };
        }),
        eE = (0, o.e7)([L.Z], () => L.Z.getRelationshipType(t.id));
    i.useEffect(() => {
        if (ee) {
            var e;
            y.default.track(H.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: t.id,
                discoverable: null === (e = a.discoverable) || void 0 === e || e,
                surface: 'user-profile-stream-activity-card',
                relationship_type: eE,
                treatment: J && !1 === a.discoverable ? p.h9.HIDE : p.h9.SHOW
            });
        }
    }, [t, eE, J, ee, a]);
    let ef = (0, d.Z)(ed ? null : ec),
        eh = ed || null == ec ? ef : ec;
    if (null == ei || null == ea || (J && !1 === a.discoverable)) return null;
    let ep = () => {
            let e = s()(j.preview, $),
                t = () => {
                    en({ action: 'PRESS_IMAGE' }), u.default.selectVoiceChannel(a.channelId), (0, c.iV)(a), null == q || q();
                };
            return null == eh && ed
                ? (0, r.jsx)('div', {
                      className: e,
                      children: (0, r.jsx)(l.Spinner, {})
                  })
                : null == eh
                  ? (0, r.jsxs)(l.Clickable, {
                        className: s()(e, j.overlay, { [j.clickable]: el }),
                        onClick: el ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: X === H.BRd.LIGHT ? K : W
                            }),
                            Q !== V.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: j.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, T.P9)(eu)
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: e_ ? Z.Z.Messages.STREAM_NO_PREVIEW : Z.Z.Messages.STREAM_NO_PERMISSION_CTA
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(l.Clickable, {
                        className: s()(e, j.overlay, { [j.clickable]: el }),
                        onClick: el ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: eh,
                                className: j.image
                            }),
                            Q !== V.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: j.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, T.P9)(eu)
                                        }),
                                        (0, r.jsx)(l.ClydeIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: j.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        eI = () => {
            if (Q !== V.y0.FULL_SIZE) return null;
            let e = ea.isGuildStageVoice(),
                n = e ? l.StageIcon : l.VoiceNormalIcon;
            return (0, r.jsxs)('div', {
                className: Y.details,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(l.Heading, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: Y.voiceChannelHeading,
                                children: [
                                    (0, r.jsx)(n, {
                                        size: 'xxs',
                                        color: l.tokens.colors.TEXT_NORMAL,
                                        className: Y.voiceIcon
                                    }),
                                    (0, r.jsx)(l.Clickable, {
                                        className: s()(Y.clickable, Y.inline),
                                        onClick: () => {
                                            null == en || en({ action: 'OPEN_VOICE_CHANNEL' }), e ? (0, A.Cq)(ea) : (u.default.selectVoiceChannel(ea.id), (0, S.Kh)(ea.id)), null == q || q();
                                        },
                                        children: ea.name
                                    })
                                ]
                            }),
                            (0, r.jsx)(x.Z, {
                                variant: 'text-xs/normal',
                                text: Z.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({ guildName: ei.name }),
                                onClick: () => {
                                    en({ action: 'OPEN_VOICE_GUILD' }), (0, g.X)(ei.id), null == q || q();
                                }
                            })
                        ]
                    }),
                    (0, r.jsx)(m.Z, {
                        users: es,
                        guildId: ei.id,
                        channelId: ea.id,
                        maxUsers: G.W,
                        size: l.AvatarSizes.SIZE_16,
                        disableUserPopout: (e) => e === t.id,
                        overflowCountVariant: 'text-xxs/semibold',
                        overflowCountColor: 'text-muted'
                    })
                ]
            });
        },
        em = () =>
            Q === V.y0.FULL_SIZE
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: Y.voiceChannelDivider }),
                          (0, r.jsx)(G.Z, {
                              user: t,
                              guild: ei,
                              channel: ea,
                              onAction: en,
                              onClose: q
                          })
                      ]
                  }),
        eT = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: s()(Y.actions, $),
                      children: (0, r.jsx)(B.Z, {
                          channel: ea,
                          onAction: en,
                          onClose: q
                      })
                  });
    return (0, r.jsx)(h.Gt, {
        value: et,
        children: (0, r.jsx)(k.Z, {
            user: t,
            onClose: q,
            children: (e) => {
                let { onAutoDismiss: n } = e;
                return (0, r.jsxs)(P.Z.Overlay, {
                    className: s()(Y.card, z),
                    ref: er,
                    children: [
                        (0, r.jsx)(w.Z, {
                            text: null != eo ? Z.Z.Messages.UNFORMATTED_STREAMING.format({ name: eo.name }) : Z.Z.Messages.USER_ACTIVITY_STREAMING,
                            tags: (0, r.jsx)(I.ZP, { size: I.OH.SMALL }),
                            contextMenu: (0, r.jsx)(F.Z, {
                                display: 'live',
                                user: t,
                                onClose: q,
                                onRequestOpen: n
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: Y.body,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: s()(Y.content, $),
                                    children: [ep(), eI(), Q === V.y0.FULL_SIZE && eT()]
                                }),
                                em()
                            ]
                        }),
                        Q !== V.y0.FULL_SIZE && eT()
                    ]
                });
            }
        })
    });
}
