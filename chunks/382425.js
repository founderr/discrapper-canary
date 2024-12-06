n.d(t, {
    Z: function () {
        return J;
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
    f = n(833664),
    _ = n(579630),
    p = n(100527),
    h = n(906732),
    m = n(750881),
    g = n(194082),
    E = n(318374),
    v = n(102172),
    I = n(359110),
    T = n(769654),
    b = n(922482),
    S = n(543882),
    y = n(592125),
    A = n(430824),
    N = n(496675),
    C = n(158776),
    R = n(699516),
    O = n(938475),
    D = n(626135),
    L = n(960870),
    x = n(139793),
    w = n(510659),
    P = n(287954),
    M = n(660579),
    k = n(652853),
    U = n(64621),
    B = n(336383),
    G = n(194811),
    Z = n(373826),
    F = n(315324),
    V = n(582123),
    j = n(599864),
    H = n(386019),
    Y = n(228168),
    W = n(981631),
    K = n(388032),
    z = n(249942),
    q = n(22481),
    Q = n(924482),
    X = n(774797);
function J(e) {
    let { user: t, currentUser: n, stream: a, className: J, onClose: $, profileGuildId: ee } = e,
        { profileType: et, theme: en } = (0, k.z)(),
        { interactionSource: er, interactionSourceId: ei } = (0, w.Xo)(),
        ea = {
            [q.fullSize]: et === Y.y0.FULL_SIZE,
            [z.fullSize]: et === Y.y0.FULL_SIZE
        },
        { enabled: es, analyticsEligible: eo } = (0, m.R4)('user-profile-stream-activity-card-web'),
        { analyticsLocations: el } = (0, h.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        eu = (0, L.Z)({
            display: 'live',
            user: t,
            stream: a,
            analyticsLocations: el
        }),
        ec = (0, x.Z)({
            userId: t.id,
            onAction: eu
        }),
        ed = (0, o.e7)([A.Z], () => A.Z.getGuild(null == a ? void 0 : a.guildId)),
        ef = (0, o.e7)([y.Z], () => y.Z.getChannel(null == a ? void 0 : a.channelId)),
        e_ = (0, o.Wu)([O.ZP], () =>
            null != ef
                ? O.ZP.getVoiceStatesForChannel(ef).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        ep = (0, o.e7)([C.Z], () => C.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, _.Z)(e))),
        [eh, em] = (0, v.wq)(ef),
        {
            url: eg,
            isLoading: eE,
            canSeePreview: ev
        } = (0, o.cj)([N.Z, S.Z], () => {
            let e = null != ef && N.Z.canBasicChannel(W.S7T.CONNECT, ef);
            return e
                ? {
                      url: S.Z.getPreviewURL(a.guildId, a.channelId, a.ownerId),
                      isLoading: S.Z.getIsPreviewLoading(a.guildId, a.channelId, a.ownerId),
                      canSeePreview: e
                  }
                : {
                      url: null,
                      isLoading: !1,
                      canSeePreview: e
                  };
        }),
        eI = (0, o.e7)([R.Z], () => R.Z.getRelationshipType(t.id));
    i.useEffect(() => {
        if (eo) {
            var e;
            D.default.track(W.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: t.id,
                discoverable: null === (e = a.discoverable) || void 0 === e || e,
                surface: 'user-profile-stream-activity-card',
                relationship_type: eI,
                treatment: es && !1 === a.discoverable ? m.h9.HIDE : m.h9.SHOW
            });
        }
    }, [t, eI, es, eo, a]);
    let eT = (0, d.Z)(eE ? null : eg),
        eb = eE || null == eg ? eT : eg;
    if (null == ed || null == ef || (es && !1 === a.discoverable) || null === et) return null;
    let eS = () => {
            let e = s()(q.preview, ea),
                t = () => {
                    eu({ action: 'PRESS_IMAGE' }), u.default.selectVoiceChannel(a.channelId), (0, c.iV)(a), null == $ || $();
                };
            return null == eb && eE
                ? (0, r.jsx)('div', {
                      className: e,
                      children: (0, r.jsx)(l.Spinner, {})
                  })
                : null == eb
                  ? (0, r.jsxs)(l.Clickable, {
                        className: s()(e, q.overlay, { [q.clickable]: eh }),
                        onClick: eh ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: en === W.BRd.LIGHT ? X : Q
                            }),
                            et !== Y.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: q.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, v.P9)(em)
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: ev ? K.intl.string(K.t.uQZTBQ) : K.intl.string(K.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(l.Clickable, {
                        className: s()(e, q.overlay, { [q.clickable]: eh }),
                        onClick: eh ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: eb,
                                className: q.image
                            }),
                            et !== Y.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: q.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, v.P9)(em)
                                        }),
                                        (0, r.jsx)(l.ClydeIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: q.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        ey = () => {
            if (et !== Y.y0.FULL_SIZE) return null;
            let e = ef.isGuildStageVoice(),
                n = e ? l.StageIcon : l.VoiceNormalIcon;
            return (0, r.jsxs)('div', {
                className: z.details,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(l.Heading, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: z.voiceChannelHeading,
                                children: [
                                    (0, r.jsx)(n, {
                                        size: 'xxs',
                                        color: l.tokens.colors.TEXT_NORMAL,
                                        className: z.voiceIcon
                                    }),
                                    (0, r.jsx)(l.Clickable, {
                                        className: s()(z.clickableText, z.inline),
                                        onClick: () => {
                                            null == eu || eu({ action: 'OPEN_VOICE_CHANNEL' }), e ? (0, b.Cq)(ef) : (u.default.selectVoiceChannel(ef.id), (0, I.Kh)(ef.id)), null == $ || $();
                                        },
                                        children: ef.name
                                    })
                                ]
                            }),
                            (0, r.jsx)(Z.Z, {
                                variant: 'text-xs/normal',
                                text: K.intl.formatToPlainString(K.t['hq/Qzc'], { guildName: ed.name }),
                                onClick: () => {
                                    eu({ action: 'OPEN_VOICE_GUILD' }), (0, T.X)(ed.id), null == $ || $();
                                }
                            })
                        ]
                    }),
                    (0, r.jsx)(E.Z, {
                        users: e_,
                        guildId: ed.id,
                        channelId: ef.id,
                        maxUsers: F.W,
                        size: l.AvatarSizes.SIZE_16,
                        disableUserPopout: (e) => e === t.id,
                        overflowCountVariant: 'text-xxs/semibold',
                        overflowCountColor: 'text-muted'
                    })
                ]
            });
        },
        eA = () =>
            et === Y.y0.FULL_SIZE
                ? null
                : (0, r.jsx)(F.Z, {
                      user: t,
                      guild: ed,
                      channel: ef,
                      onAction: eu,
                      onClose: $
                  }),
        eN = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: s()(z.actions, ea),
                      children: (0, r.jsx)(j.Z, {
                          channel: ef,
                          onAction: eu,
                          onClose: $
                      })
                  }),
        eC = er === Y.n_.ACTIVITY && ei === eg,
        eR = null != ep ? K.intl.formatToPlainString(K.t['4CQq9f'], { name: ep.name }) : K.intl.string(K.t['Jpkr/v']);
    return (0, r.jsx)(h.Gt, {
        value: el,
        children: (0, r.jsx)(U.Z, {
            sourceType: Y.n_.ACTIVITY,
            user: t,
            children: (0, r.jsx)(V.Z, {
                user: t,
                onClose: $,
                children: (e) => {
                    let { onAutoDismiss: n } = e;
                    return (0, r.jsx)(P.Z, {
                        user: t,
                        guildId: ee,
                        profileType: et,
                        sourceId: eg,
                        sourceDetails: eR,
                        sourceType: Y.n_.ACTIVITY,
                        children: () =>
                            (0, r.jsx)(M.Z, {
                                user: t,
                                className: z.toolbarContainer,
                                interactionSourceId: eg,
                                sourceType: Y.n_.ACTIVITY,
                                renderMoreButtonPopout: (e) =>
                                    (0, r.jsx)(H.Z, {
                                        display: 'live',
                                        user: t,
                                        onClose: $,
                                        onRequestOpen: n,
                                        children: e
                                    }),
                                onShowToolbar: () => eu({ action: 'HOVER_ACTIVITY_CARD' }),
                                children: (0, r.jsxs)(B.Z, {
                                    ref: ec,
                                    className: s()(J, { [z.hoisted]: eC }),
                                    onAction: eu,
                                    onClose: $,
                                    children: [
                                        (0, r.jsx)(G.Z, {
                                            text: eR,
                                            tags: (0, r.jsx)(g.ZP, { size: g.OH.SMALL })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: z.body,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    className: s()(z.content, ea),
                                                    children: [eS(), ey(), et === Y.y0.FULL_SIZE && eN()]
                                                }),
                                                eA()
                                            ]
                                        }),
                                        et !== Y.y0.FULL_SIZE && eN()
                                    ]
                                })
                            })
                    });
                }
            })
        })
    });
}
