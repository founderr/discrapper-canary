n.d(t, {
    Z: function () {
        return K;
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
    w = n(652853),
    P = n(336383),
    M = n(194811),
    k = n(373826),
    U = n(315324),
    B = n(599864),
    G = n(670451),
    Z = n(228168),
    F = n(981631),
    V = n(388032),
    j = n(249942),
    H = n(22481),
    Y = n(924482),
    W = n(774797);
function K(e) {
    let { user: t, currentUser: n, stream: a, className: K, onClose: z } = e,
        { profileType: q, theme: Q } = (0, w.z)(),
        X = {
            [H.fullSize]: q === Z.y0.FULL_SIZE,
            [j.fullSize]: q === Z.y0.FULL_SIZE
        },
        { enabled: J, analyticsEligible: $ } = (0, m.R4)('user-profile-stream-activity-card-web'),
        { analyticsLocations: ee } = (0, h.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        et = (0, L.Z)({
            display: 'live',
            user: t,
            stream: a,
            analyticsLocations: ee
        }),
        en = (0, x.Z)({
            userId: t.id,
            onAction: et
        }),
        er = (0, o.e7)([A.Z], () => A.Z.getGuild(null == a ? void 0 : a.guildId)),
        ei = (0, o.e7)([y.Z], () => y.Z.getChannel(null == a ? void 0 : a.channelId)),
        ea = (0, o.Wu)([O.ZP], () =>
            null != ei
                ? O.ZP.getVoiceStatesForChannel(ei).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        es = (0, o.e7)([C.Z], () => C.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, _.Z)(e))),
        [eo, el] = (0, v.wq)(ei),
        {
            url: eu,
            isLoading: ec,
            canSeePreview: ed
        } = (0, o.cj)([N.Z, S.Z], () => {
            let e = null != ei && N.Z.canBasicChannel(F.S7T.CONNECT, ei);
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
        ef = (0, o.e7)([R.Z], () => R.Z.getRelationshipType(t.id));
    i.useEffect(() => {
        if ($) {
            var e;
            D.default.track(F.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: t.id,
                discoverable: null === (e = a.discoverable) || void 0 === e || e,
                surface: 'user-profile-stream-activity-card',
                relationship_type: ef,
                treatment: J && !1 === a.discoverable ? m.h9.HIDE : m.h9.SHOW
            });
        }
    }, [t, ef, J, $, a]);
    let e_ = (0, d.Z)(ec ? null : eu),
        ep = ec || null == eu ? e_ : eu;
    if (null == er || null == ei || (J && !1 === a.discoverable)) return null;
    let eh = () =>
        t.id === n.id
            ? null
            : (0, r.jsx)('div', {
                  className: s()(j.actions, X),
                  children: (0, r.jsx)(B.Z, {
                      channel: ei,
                      onAction: et,
                      onClose: z
                  })
              });
    return (0, r.jsx)(h.Gt, {
        value: ee,
        children: (0, r.jsxs)(P.Z, {
            ref: en,
            className: K,
            onAction: et,
            onClose: z,
            children: [
                (0, r.jsx)(M.Z, {
                    text: null != es ? V.intl.formatToPlainString(V.t['4CQq9f'], { name: es.name }) : V.intl.string(V.t['Jpkr/v']),
                    tags: (0, r.jsx)(g.ZP, { size: g.OH.SMALL }),
                    contextMenu: (0, r.jsx)(G.Z, {
                        display: 'live',
                        user: t,
                        onClose: z
                    })
                }),
                (0, r.jsxs)('div', {
                    className: j.body,
                    children: [
                        (0, r.jsxs)('div', {
                            className: s()(j.content, X),
                            children: [
                                (() => {
                                    let e = s()(H.preview, X),
                                        t = () => {
                                            et({ action: 'PRESS_IMAGE' }), u.default.selectVoiceChannel(a.channelId), (0, c.iV)(a), null == z || z();
                                        };
                                    return null == ep && ec
                                        ? (0, r.jsx)('div', {
                                              className: e,
                                              children: (0, r.jsx)(l.Spinner, {})
                                          })
                                        : null == ep
                                          ? (0, r.jsxs)(l.Clickable, {
                                                className: s()(e, H.overlay, { [H.clickable]: eo }),
                                                onClick: eo ? t : void 0,
                                                children: [
                                                    (0, r.jsx)('img', {
                                                        alt: '',
                                                        src: Q === F.BRd.LIGHT ? W : Y
                                                    }),
                                                    q !== Z.y0.FULL_SIZE &&
                                                        (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                (0, r.jsx)(l.Text, {
                                                                    className: H.overlayText,
                                                                    variant: 'text-sm/medium',
                                                                    color: 'always-white',
                                                                    children: (0, v.P9)(el)
                                                                }),
                                                                (0, r.jsx)(l.Text, {
                                                                    variant: 'text-sm/medium',
                                                                    children: ed ? V.intl.string(V.t.uQZTBQ) : V.intl.string(V.t.pgUTZG)
                                                                })
                                                            ]
                                                        })
                                                ]
                                            })
                                          : (0, r.jsxs)(l.Clickable, {
                                                className: s()(e, H.overlay, { [H.clickable]: eo }),
                                                onClick: eo ? t : void 0,
                                                children: [
                                                    (0, r.jsx)('img', {
                                                        alt: '',
                                                        src: ep,
                                                        className: H.image
                                                    }),
                                                    q !== Z.y0.FULL_SIZE &&
                                                        (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                (0, r.jsx)(l.Text, {
                                                                    className: H.overlayText,
                                                                    variant: 'text-sm/medium',
                                                                    color: 'always-white',
                                                                    children: (0, v.P9)(el)
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
                                })(),
                                (() => {
                                    if (q !== Z.y0.FULL_SIZE) return null;
                                    let e = ei.isGuildStageVoice(),
                                        n = e ? l.StageIcon : l.VoiceNormalIcon;
                                    return (0, r.jsxs)('div', {
                                        className: j.details,
                                        children: [
                                            (0, r.jsxs)('div', {
                                                children: [
                                                    (0, r.jsxs)(l.Heading, {
                                                        variant: 'heading-sm/semibold',
                                                        color: 'text-normal',
                                                        className: j.voiceChannelHeading,
                                                        children: [
                                                            (0, r.jsx)(n, {
                                                                size: 'xxs',
                                                                color: l.tokens.colors.TEXT_NORMAL,
                                                                className: j.voiceIcon
                                                            }),
                                                            (0, r.jsx)(l.Clickable, {
                                                                className: s()(j.clickableText, j.inline),
                                                                onClick: () => {
                                                                    null == et || et({ action: 'OPEN_VOICE_CHANNEL' }), e ? (0, b.Cq)(ei) : (u.default.selectVoiceChannel(ei.id), (0, I.Kh)(ei.id)), null == z || z();
                                                                },
                                                                children: ei.name
                                                            })
                                                        ]
                                                    }),
                                                    (0, r.jsx)(k.Z, {
                                                        variant: 'text-xs/normal',
                                                        text: V.intl.formatToPlainString(V.t['hq/Qzc'], { guildName: er.name }),
                                                        onClick: () => {
                                                            et({ action: 'OPEN_VOICE_GUILD' }), (0, T.X)(er.id), null == z || z();
                                                        }
                                                    })
                                                ]
                                            }),
                                            (0, r.jsx)(E.Z, {
                                                users: ea,
                                                guildId: er.id,
                                                channelId: ei.id,
                                                maxUsers: U.W,
                                                size: l.AvatarSizes.SIZE_16,
                                                disableUserPopout: (e) => e === t.id,
                                                overflowCountVariant: 'text-xxs/semibold',
                                                overflowCountColor: 'text-muted'
                                            })
                                        ]
                                    });
                                })(),
                                q === Z.y0.FULL_SIZE && eh()
                            ]
                        }),
                        q === Z.y0.FULL_SIZE
                            ? null
                            : (0, r.jsx)(U.Z, {
                                  user: t,
                                  guild: er,
                                  channel: ei,
                                  onAction: et,
                                  onClose: z
                              })
                    ]
                }),
                q !== Z.y0.FULL_SIZE && eh()
            ]
        })
    });
}
