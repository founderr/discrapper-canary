n.d(t, {
    Z: function () {
        return $;
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
    H = n(290274),
    Y = n(228168),
    W = n(981631),
    K = n(388032),
    z = n(518919),
    q = n(249942),
    Q = n(22481),
    X = n(924482),
    J = n(774797);
function $(e) {
    let { user: t, currentUser: n, stream: a, className: $, onClose: ee, profileGuildId: et } = e,
        { profileType: en, theme: er } = (0, k.z)(),
        { interactionSource: ei, interactionSourceId: ea } = (0, w.Xo)(),
        es = {
            [Q.fullSize]: en === Y.y0.FULL_SIZE,
            [q.fullSize]: en === Y.y0.FULL_SIZE
        },
        { enabled: eo, analyticsEligible: el } = (0, m.R4)('user-profile-stream-activity-card-web'),
        { analyticsLocations: eu } = (0, h.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        ec = (0, L.Z)({
            display: 'live',
            user: t,
            stream: a,
            analyticsLocations: eu
        }),
        ed = (0, x.Z)({
            userId: t.id,
            onAction: ec
        }),
        ef = (0, o.e7)([A.Z], () => A.Z.getGuild(null == a ? void 0 : a.guildId)),
        e_ = (0, o.e7)([y.Z], () => y.Z.getChannel(null == a ? void 0 : a.channelId)),
        ep = (0, o.Wu)([O.ZP], () =>
            null != e_
                ? O.ZP.getVoiceStatesForChannel(e_).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        eh = (0, o.e7)([C.Z], () => C.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, _.Z)(e))),
        [em, eg] = (0, v.wq)(e_),
        {
            url: eE,
            isLoading: ev,
            canSeePreview: eI
        } = (0, o.cj)([N.Z, S.Z], () => {
            let e = null != e_ && N.Z.canBasicChannel(W.S7T.CONNECT, e_);
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
        eT = (0, o.e7)([R.Z], () => R.Z.getRelationshipType(t.id));
    i.useEffect(() => {
        if (el) {
            var e;
            D.default.track(W.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: t.id,
                discoverable: null === (e = a.discoverable) || void 0 === e || e,
                surface: 'user-profile-stream-activity-card',
                relationship_type: eT,
                treatment: eo && !1 === a.discoverable ? m.h9.HIDE : m.h9.SHOW
            });
        }
    }, [t, eT, eo, el, a]);
    let eb = (0, d.Z)(ev ? null : eE),
        eS = ev || null == eE ? eb : eE;
    if (null == ef || null == e_ || (eo && !1 === a.discoverable) || null === en) return null;
    let ey = () => {
            let e = s()(Q.preview, es),
                t = () => {
                    ec({ action: 'PRESS_IMAGE' }), u.default.selectVoiceChannel(a.channelId), (0, c.iV)(a), null == ee || ee();
                };
            return null == eS && ev
                ? (0, r.jsx)('div', {
                      className: e,
                      children: (0, r.jsx)(l.Spinner, {})
                  })
                : null == eS
                  ? (0, r.jsxs)(l.Clickable, {
                        className: s()(e, Q.overlay, { [Q.clickable]: em }),
                        onClick: em ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: er === W.BRd.LIGHT ? J : X
                            }),
                            en !== Y.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: Q.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, v.P9)(eg)
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: eI ? K.intl.string(K.t.uQZTBQ) : K.intl.string(K.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(l.Clickable, {
                        className: s()(e, Q.overlay, { [Q.clickable]: em }),
                        onClick: em ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: eS,
                                className: Q.image
                            }),
                            en !== Y.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: Q.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, v.P9)(eg)
                                        }),
                                        (0, r.jsx)(l.ClydeIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: Q.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        eA = () => {
            if (en !== Y.y0.FULL_SIZE) return null;
            let e = e_.isGuildStageVoice(),
                n = e ? l.StageIcon : l.VoiceNormalIcon;
            return (0, r.jsxs)('div', {
                className: q.details,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(l.Heading, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: q.voiceChannelHeading,
                                children: [
                                    (0, r.jsx)(n, {
                                        size: 'xxs',
                                        color: l.tokens.colors.TEXT_NORMAL,
                                        className: q.voiceIcon
                                    }),
                                    (0, r.jsx)(l.Clickable, {
                                        className: s()(q.clickableText, q.inline),
                                        onClick: () => {
                                            null == ec || ec({ action: 'OPEN_VOICE_CHANNEL' }), e ? (0, b.Cq)(e_) : (u.default.selectVoiceChannel(e_.id), (0, I.Kh)(e_.id)), null == ee || ee();
                                        },
                                        children: e_.name
                                    })
                                ]
                            }),
                            (0, r.jsx)(Z.Z, {
                                variant: 'text-xs/normal',
                                text: K.intl.formatToPlainString(K.t['hq/Qzc'], { guildName: ef.name }),
                                onClick: () => {
                                    ec({ action: 'OPEN_VOICE_GUILD' }), (0, T.X)(ef.id), null == ee || ee();
                                }
                            })
                        ]
                    }),
                    (0, r.jsx)(E.Z, {
                        users: ep,
                        guildId: ef.id,
                        channelId: e_.id,
                        maxUsers: F.W,
                        size: l.AvatarSizes.SIZE_16,
                        disableUserPopout: (e) => e === t.id,
                        overflowCountVariant: 'text-xxs/semibold',
                        overflowCountColor: 'text-muted'
                    })
                ]
            });
        },
        eN = () =>
            en === Y.y0.FULL_SIZE
                ? null
                : (0, r.jsx)(F.Z, {
                      user: t,
                      guild: ef,
                      channel: e_,
                      onAction: ec,
                      onClose: ee
                  }),
        eC = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: s()(q.actions, es),
                      children: (0, r.jsx)(j.Z, {
                          channel: e_,
                          onAction: ec,
                          onClose: ee
                      })
                  }),
        eR = ei === Y.n_.ACTIVITY && ea === eE,
        eO = null != eh ? K.intl.formatToPlainString(K.t['4CQq9f'], { name: eh.name }) : K.intl.string(K.t['Jpkr/v']);
    return (0, r.jsx)(h.Gt, {
        value: eu,
        children: (0, r.jsx)(U.Z, {
            sourceType: Y.n_.ACTIVITY,
            user: t,
            children: (0, r.jsx)(V.Z, {
                user: t,
                onClose: ee,
                children: (e) => {
                    let { onAutoDismiss: n } = e;
                    return (0, r.jsx)(P.Z, {
                        user: t,
                        guildId: et,
                        profileType: en,
                        sourceId: eE,
                        sourceDetails: eO,
                        sourceType: Y.n_.ACTIVITY,
                        children: () =>
                            (0, r.jsx)(M.Z, {
                                user: t,
                                className: q.toolbarContainer,
                                interactionSourceId: eE,
                                sourceType: Y.n_.ACTIVITY,
                                moreButton: (0, r.jsx)(H.Z, {
                                    display: 'live',
                                    user: t,
                                    onClose: ee,
                                    onRequestOpen: n,
                                    className: z.button
                                }),
                                onShowToolbar: () => ec({ action: 'HOVER_ACTIVITY_CARD' }),
                                children: (0, r.jsxs)(B.Z, {
                                    ref: ed,
                                    className: s()($, { [q.hoisted]: eR }),
                                    onAction: ec,
                                    onClose: ee,
                                    children: [
                                        (0, r.jsx)(G.Z, {
                                            text: eO,
                                            tags: (0, r.jsx)(g.ZP, { size: g.OH.SMALL })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: q.body,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    className: s()(q.content, es),
                                                    children: [ey(), eA(), en === Y.y0.FULL_SIZE && eC()]
                                                }),
                                                eN()
                                            ]
                                        }),
                                        en !== Y.y0.FULL_SIZE && eC()
                                    ]
                                })
                            })
                    });
                }
            })
        })
    });
}
