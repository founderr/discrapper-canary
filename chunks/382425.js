n.d(t, {
    Z: function () {
        return X;
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
    V = n(599864),
    j = n(386019),
    H = n(228168),
    Y = n(981631),
    W = n(388032),
    K = n(249942),
    z = n(22481),
    q = n(924482),
    Q = n(774797);
function X(e) {
    let { user: t, currentUser: n, stream: a, className: X, onClose: J, profileGuildId: $ } = e,
        { profileType: ee, theme: et } = (0, k.z)(),
        { interactionSource: en, interactionSourceId: er } = (0, w.Xo)(),
        ei = {
            [z.fullSize]: ee === H.y0.FULL_SIZE,
            [K.fullSize]: ee === H.y0.FULL_SIZE
        },
        { enabled: ea, analyticsEligible: es } = (0, m.R4)('user-profile-stream-activity-card-web'),
        { analyticsLocations: eo } = (0, h.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        el = (0, L.Z)({
            display: 'live',
            user: t,
            stream: a,
            analyticsLocations: eo
        }),
        eu = (0, x.Z)({
            userId: t.id,
            onAction: el
        }),
        ec = (0, o.e7)([A.Z], () => A.Z.getGuild(null == a ? void 0 : a.guildId)),
        ed = (0, o.e7)([y.Z], () => y.Z.getChannel(null == a ? void 0 : a.channelId)),
        ef = (0, o.Wu)([O.ZP], () =>
            null != ed
                ? O.ZP.getVoiceStatesForChannel(ed).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        e_ = (0, o.e7)([C.Z], () => C.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, _.Z)(e))),
        [ep, eh] = (0, v.wq)(ed),
        {
            url: em,
            isLoading: eg,
            canSeePreview: eE
        } = (0, o.cj)([N.Z, S.Z], () => {
            let e = null != ed && N.Z.canBasicChannel(Y.S7T.CONNECT, ed);
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
        ev = (0, o.e7)([R.Z], () => R.Z.getRelationshipType(t.id));
    i.useEffect(() => {
        if (es) {
            var e;
            D.default.track(Y.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: t.id,
                discoverable: null === (e = a.discoverable) || void 0 === e || e,
                surface: 'user-profile-stream-activity-card',
                relationship_type: ev,
                treatment: ea && !1 === a.discoverable ? m.h9.HIDE : m.h9.SHOW
            });
        }
    }, [t, ev, ea, es, a]);
    let eI = (0, d.Z)(eg ? null : em),
        eT = eg || null == em ? eI : em;
    if (null == ec || null == ed || (ea && !1 === a.discoverable) || null === ee) return null;
    let eb = () => {
            let e = s()(z.preview, ei),
                t = () => {
                    el({ action: 'PRESS_IMAGE' }), u.default.selectVoiceChannel(a.channelId), (0, c.iV)(a), null == J || J();
                };
            return null == eT && eg
                ? (0, r.jsx)('div', {
                      className: e,
                      children: (0, r.jsx)(l.Spinner, {})
                  })
                : null == eT
                  ? (0, r.jsxs)(l.Clickable, {
                        className: s()(e, z.overlay, { [z.clickable]: ep }),
                        onClick: ep ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: et === Y.BRd.LIGHT ? Q : q
                            }),
                            ee !== H.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: z.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, v.P9)(eh)
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: eE ? W.intl.string(W.t.uQZTBQ) : W.intl.string(W.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(l.Clickable, {
                        className: s()(e, z.overlay, { [z.clickable]: ep }),
                        onClick: ep ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: eT,
                                className: z.image
                            }),
                            ee !== H.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: z.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, v.P9)(eh)
                                        }),
                                        (0, r.jsx)(l.ClydeIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: z.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        eS = () => {
            if (ee !== H.y0.FULL_SIZE) return null;
            let e = ed.isGuildStageVoice(),
                n = e ? l.StageIcon : l.VoiceNormalIcon;
            return (0, r.jsxs)('div', {
                className: K.details,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(l.Heading, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: K.voiceChannelHeading,
                                children: [
                                    (0, r.jsx)(n, {
                                        size: 'xxs',
                                        color: l.tokens.colors.TEXT_NORMAL,
                                        className: K.voiceIcon
                                    }),
                                    (0, r.jsx)(l.Clickable, {
                                        className: s()(K.clickableText, K.inline),
                                        onClick: () => {
                                            null == el || el({ action: 'OPEN_VOICE_CHANNEL' }), e ? (0, b.Cq)(ed) : (u.default.selectVoiceChannel(ed.id), (0, I.Kh)(ed.id)), null == J || J();
                                        },
                                        children: ed.name
                                    })
                                ]
                            }),
                            (0, r.jsx)(Z.Z, {
                                variant: 'text-xs/normal',
                                text: W.intl.formatToPlainString(W.t['hq/Qzc'], { guildName: ec.name }),
                                onClick: () => {
                                    el({ action: 'OPEN_VOICE_GUILD' }), (0, T.X)(ec.id), null == J || J();
                                }
                            })
                        ]
                    }),
                    (0, r.jsx)(E.Z, {
                        users: ef,
                        guildId: ec.id,
                        channelId: ed.id,
                        maxUsers: F.W,
                        size: l.AvatarSizes.SIZE_16,
                        disableUserPopout: (e) => e === t.id,
                        overflowCountVariant: 'text-xxs/semibold',
                        overflowCountColor: 'text-muted'
                    })
                ]
            });
        },
        ey = () =>
            ee === H.y0.FULL_SIZE
                ? null
                : (0, r.jsx)(F.Z, {
                      user: t,
                      guild: ec,
                      channel: ed,
                      onAction: el,
                      onClose: J
                  }),
        eA = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: s()(K.actions, ei),
                      children: (0, r.jsx)(V.Z, {
                          channel: ed,
                          onAction: el,
                          onClose: J
                      })
                  }),
        eN = en === H.n_.ACTIVITY && er === em,
        eC = null != e_ ? W.intl.formatToPlainString(W.t['4CQq9f'], { name: e_.name }) : W.intl.string(W.t['Jpkr/v']);
    return (0, r.jsx)(h.Gt, {
        value: eo,
        children: (0, r.jsx)(U.Z, {
            sourceType: H.n_.ACTIVITY,
            user: t,
            children: (0, r.jsx)(P.Z, {
                user: t,
                guildId: $,
                profileType: ee,
                sourceId: em,
                sourceDetails: eC,
                sourceType: H.n_.ACTIVITY,
                children: () =>
                    (0, r.jsx)(M.Z, {
                        user: t,
                        className: K.toolbarContainer,
                        interactionSourceId: em,
                        sourceType: H.n_.ACTIVITY,
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(j.Z, {
                                display: 'live',
                                user: t,
                                onClose: J,
                                children: e
                            }),
                        onShowToolbar: () => el({ action: 'HOVER_ACTIVITY_CARD' }),
                        children: (0, r.jsxs)(B.Z, {
                            ref: eu,
                            className: s()(X, { [K.hoisted]: eN }),
                            onAction: el,
                            onClose: J,
                            children: [
                                (0, r.jsx)(G.Z, {
                                    text: eC,
                                    tags: (0, r.jsx)(g.ZP, { size: g.OH.SMALL })
                                }),
                                (0, r.jsxs)('div', {
                                    className: K.body,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: s()(K.content, ei),
                                            children: [eb(), eS(), ee === H.y0.FULL_SIZE && eA()]
                                        }),
                                        ey()
                                    ]
                                }),
                                ee !== H.y0.FULL_SIZE && eA()
                            ]
                        })
                    })
            })
        })
    });
}
