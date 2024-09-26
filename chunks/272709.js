n.d(t, {
    Z: function () {
        return j;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(831209),
    u = n(442837),
    c = n(481060),
    d = n(700582),
    _ = n(812206),
    E = n(686546),
    f = n(925329),
    h = n(924301),
    p = n(454585),
    m = n(565799),
    I = n(501655),
    T = n(427679),
    g = n(543882),
    S = n(592125),
    A = n(496675),
    v = n(594174),
    N = n(979651),
    O = n(912787),
    R = n(623552),
    C = n(718582),
    y = n(177963),
    L = n(835248),
    b = n(437431),
    D = n(874070),
    M = n(185885),
    P = n(126134),
    U = n(981631),
    w = n(765305),
    x = n(689938),
    G = n(797113);
function k(e, t, n, r) {
    let a = !1,
        { category: o } = e,
        s = (0, O.Z)(e),
        { usersToShow: d } = (0, C.Es)(s),
        E = (0, u.e7)([g.Z], () => (o === P.L.HANGOUT ? g.Z.getIsPreviewLoading(t, e.channelId, e.streamUserIds[0]) : null));
    switch (o) {
        case P.L.GAMING:
            let { games: h } = e;
            if (null == h[0].application_id)
                return (0, i.jsx)(c.GameControllerIcon, {
                    size: 'md',
                    color: 'currentColor'
                });
            return (0, i.jsx)(f.Z, {
                game: _.Z.getApplication(h[0].application_id),
                size: 'xl',
                className: G.gameIcon
            });
        case P.L.EVENT:
            if (d.length > 0 && !a)
                return (0, i.jsx)(R.Z, {
                    guildId: t,
                    users: d
                });
            return e.isStage && !a ? (0, i.jsx)(b.Z, { className: G.imageIcon }) : (0, i.jsx)(y.Z, { className: G.imageIcon });
        case P.L.EMBEDDED_ACTIVITY:
            let { embeddedActivities: p } = e;
            if (null == p[0].applicationId)
                return (0, i.jsx)(c.ActivitiesIcon, {
                    size: 'md',
                    color: 'currentColor'
                });
            return (0, i.jsx)(f.Z, {
                game: r,
                size: 'xl',
                className: G.gameIcon
            });
        case P.L.HANGOUT: {
            let { streamUserIds: r, userIds: o, channelHasVideo: s, isStage: u } = e;
            if (a) {
                if (u) return (0, i.jsx)(b.Z, { className: G.imageIcon });
                if (r.length > 0) return (0, i.jsx)(L.Z, { className: G.imageIcon });
                if (s) return (0, i.jsx)(D.Z, { className: G.imageIcon });
                return (0, i.jsx)(M.Z, { className: G.imageIcon });
            }
            let _ = u ? d : [];
            if (u) {
                if (0 === _.length) return (0, i.jsx)(b.Z, { className: G.imageIcon });
                return (0, i.jsx)(R.Z, {
                    guildId: t,
                    users: _
                });
            }
            if (r.length > 0) {
                let e = (e) =>
                    (0, i.jsx)(c.TextBadge, {
                        text: x.Z.Messages.LIVE,
                        color: l.Z.STATUS_DANGER,
                        className: e
                    });
                if (E)
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(c.Spinner, { className: G.streamPreview }), e(G.liveBadge)]
                    });
                if (null != n)
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                src: n,
                                alt: '',
                                className: G.streamPreview
                            }),
                            e(G.liveBadge)
                        ]
                    });
                let a = r.map((e) => v.default.getUser(e)).filter((e) => null != e);
                return (0, i.jsx)(R.Z, {
                    guildId: t,
                    users: a
                });
            }
            let f = o.map((e) => v.default.getUser(e)).filter((e) => null != e);
            return (0, i.jsx)(R.Z, {
                guildId: t,
                users: f
            });
        }
    }
}
function B(e, t) {
    let { category: n } = e,
        r = (0, C.FP)(n === P.L.HANGOUT ? (null == e ? void 0 : e.userIds) : []),
        a = (0, C.FP)(n === P.L.HANGOUT ? (null == e ? void 0 : e.streamUserIds) : []),
        o = (0, C.FP)(n === P.L.GAMING ? (null == e ? void 0 : e.gameUserIds) : []),
        l = (0, O.Z)(e),
        { hasChannelStatus: u } = (0, C.CE)(l),
        { usersToShow: d } = (0, C.Es)(l),
        _ = (0, C.FP)(n === P.L.HANGOUT && e.isStage ? d.map((e) => e.id) : []),
        E = new Set();
    n === P.L.EMBEDDED_ACTIVITY &&
        e.embeddedActivities.forEach((e) => {
            E = new Set([...E, ...e.userIds]);
        });
    let f = (0, C.FP)(n === P.L.EMBEDDED_ACTIVITY ? [...E] : []);
    switch (n) {
        case P.L.HANGOUT: {
            if (u && 0 === a.length) {
                let e = (0, C.K6)(r, t, !0),
                    n = r.length - 1;
                return (0, i.jsxs)('div', {
                    className: G.hangoutStatusTitleContainer,
                    children: [
                        (0, i.jsx)(c.Heading, {
                            color: 'header-primary',
                            variant: 'heading-sm/semibold',
                            className: s()(G.hangoutStatusUsername, G.ellipsis),
                            children: e
                        }),
                        n > 0 &&
                            (0, i.jsx)(c.Heading, {
                                color: 'header-primary',
                                variant: 'heading-sm/semibold',
                                className: G.hangoutStatusOthers,
                                children: x.Z.Messages.USER_SUMMARY_AND_OTHERS.format({ count: n })
                            })
                    ]
                });
            }
            let n = (0, C.K6)(_.length > 0 ? _ : a.length > 0 ? a : r, t);
            if (e.isStage) {
                var h, p;
                return null !== (p = null === (h = T.Z.getStageInstanceByChannel(e.channelId)) || void 0 === h ? void 0 : h.topic) && void 0 !== p ? p : n;
            }
            return n;
        }
        case P.L.EVENT:
            return e.event.name;
        case P.L.EMBEDDED_ACTIVITY:
            return (0, C.K6)(f, t);
        case P.L.GAMING:
            return (0, C.K6)(o, t);
        default:
            return null;
    }
}
function F(e) {
    let t = (0, O.Z)(e),
        { category: n } = e;
    return (null == t ? void 0 : t.isGuildStageVoice()) ? c.StageIcon : ((n === P.L.GAMING || n === P.L.EMBEDDED_ACTIVITY) && e.streamersCount > 0) || (n === P.L.HANGOUT && e.streamUserIds.length > 0) ? c.ScreenArrowIcon : n === P.L.EVENT && (null == t ? void 0 : t.isGuildVoice()) ? c.VoiceNormalIcon : null != t && N.Z.hasVideo(t.id) ? c.VideoIcon : c.VoiceNormalIcon;
}
function Z(e, t, n) {
    var r, a, o;
    let { category: s } = e,
        l = (0, O.Z)(e),
        u = F(e),
        { audienceCount: d } = (0, C.Es)(l),
        { channelStatus: _, hasChannelStatus: E } = (0, C.CE)(l);
    switch (s) {
        case P.L.GAMING:
            let { games: f, channelId: h } = e;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(c.GameControllerIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: G.categoryIcon
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-secondary',
                        className: G.ellipsis,
                        children: 1 === f.length ? f[0].name : x.Z.Messages.MULTIPLE_GAMES_IN_CHANNEL.format({ numGames: f.length })
                    }),
                    '\u2022',
                    null != u && (0, i.jsx)(u, { className: G.categoryIcon }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-secondary',
                        className: G.ellipsis,
                        children: null === (r = S.Z.getChannel(h)) || void 0 === r ? void 0 : r.name
                    })
                ]
            });
        case P.L.EVENT:
            let { event: m } = e,
                I = (0, C.NZ)(m),
                T = null == I ? void 0 : I.IconComponent,
                g = null == I ? void 0 : I.locationName;
            if (null != T && null != g)
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(T, { className: G.categoryIcon }),
                        (0, i.jsx)(c.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-secondary',
                            className: G.ellipsis,
                            children: g
                        }),
                        null != d &&
                            d > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    '\u2022',
                                    (0, i.jsx)(c.GroupIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: G.categoryIcon
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-secondary',
                                        children: d
                                    })
                                ]
                            })
                    ]
                });
            return null;
        case P.L.EMBEDDED_ACTIVITY:
            let { embeddedActivities: A } = e;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(c.ActivitiesIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: G.categoryIcon
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-secondary',
                        className: G.ellipsis,
                        children: 1 === A.length ? (null == t ? void 0 : t.name) : x.Z.Messages.MULTIPLE_ACTIVITIES_IN_CHANNEL.format({ numActivities: A.length })
                    }),
                    '\u2022',
                    null != u && (0, i.jsx)(u, { className: G.categoryIcon }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-secondary',
                        className: G.ellipsis,
                        children: null === (a = S.Z.getChannel(A[0].channelId)) || void 0 === a ? void 0 : a.name
                    })
                ]
            });
        case P.L.HANGOUT: {
            let { channelId: t } = e,
                r = E && null == n,
                a = E && null != n;
            return (0, i.jsx)(i.Fragment, {
                children: r
                    ? (0, i.jsx)(c.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-secondary',
                          className: G.ellipsis,
                          children: p.Z.parseVoiceChannelStatus(_, !0, { channelId: t })
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              null != u && (0, i.jsx)(u, { className: G.categoryIcon }),
                              (0, i.jsx)(c.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  className: G.ellipsis,
                                  children: null === (o = S.Z.getChannel(t)) || void 0 === o ? void 0 : o.name
                              }),
                              a &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          '\u2022',
                                          (0, i.jsx)(c.Text, {
                                              variant: 'text-xs/medium',
                                              color: 'text-secondary',
                                              className: G.ellipsis,
                                              children: p.Z.parseVoiceChannelStatus(_, !0, { channelId: t })
                                          })
                                      ]
                                  }),
                              null != d &&
                                  d > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          '\u2022',
                                          (0, i.jsx)(c.GroupIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: G.categoryIcon
                                          }),
                                          (0, i.jsx)(c.Text, {
                                              variant: 'text-xs/medium',
                                              color: 'text-secondary',
                                              children: d
                                          })
                                      ]
                                  })
                          ]
                      })
            });
        }
        default:
            return null;
    }
}
function V(e) {
    let { category: t } = e,
        n = (0, O.Z)(e),
        { audienceCount: r } = (0, C.Es)(n);
    switch (t) {
        case P.L.EVENT:
            if (null != r)
                return [
                    {
                        icon: c.HeadphonesIcon,
                        count: r
                    }
                ];
            return [];
        case P.L.HANGOUT:
            let { streamUserIds: i, userIds: a, channelId: o, isStage: s } = e;
            if (s) {
                var l;
                return [
                    {
                        icon: c.HeadphonesIcon,
                        count: null !== (l = m.Z.getParticipantCount(o, I.pV.AUDIENCE)) && void 0 !== l ? l : 0
                    }
                ];
            }
            if (i.length > 0)
                return [
                    {
                        icon: c.GroupIcon,
                        count: a.length > 0 ? a.length : null
                    }
                ];
            return [];
        case P.L.EMBEDDED_ACTIVITY:
            return [
                {
                    icon: c.GroupIcon,
                    count: e.voiceUsersCount > 0 ? e.voiceUsersCount : null
                },
                {
                    icon: c.ScreenArrowIcon,
                    count: e.streamersCount > 0 ? e.streamersCount : null
                }
            ];
        case P.L.GAMING:
            return [
                {
                    icon: c.GroupIcon,
                    count: e.voiceStates.length > 0 ? e.voiceStates.length : null
                },
                {
                    icon: c.ScreenArrowIcon,
                    count: e.streamersCount > 0 ? e.streamersCount : null
                }
            ];
        default:
            return [];
    }
}
function H(e, t, n) {
    var r;
    let { category: a } = e,
        o = null,
        s = a === P.L.EVENT;
    if (null == (o = s ? e.event.channel_id : a === P.L.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : e.channelId) && !s) return;
    let l = null != o && N.Z.isInChannel(o),
        u = s && (e.event.entity_type === w.WX.EXTERNAL || e.event.entity_type === w.WX.NONE) ? x.Z.Messages.VIEW : l ? x.Z.Messages.GUILD_POPOUT_JOINED : x.Z.Messages.JOIN,
        d = (null === (r = S.Z.getChannel(o)) || void 0 === r ? void 0 : r.isGuildVocal()) && !A.Z.can(U.Plq.CONNECT, S.Z.getChannel(o)),
        _ = (0, C.DE)(e, t),
        E = (r) => {
            r.stopPropagation(), (0, C.ob)(e, t, n, C.pV.JOIN_BUTTON), null == _ || _();
        },
        f = (0, i.jsxs)(c.Button, {
            size: c.Button.Sizes.MIN,
            innerClassName: G.joinButtonInner,
            color: c.Button.Colors.GREEN,
            disabled: l || d,
            onClick: E,
            className: G.joinButton,
            children: [
                u,
                d &&
                    (0, i.jsx)(c.LockIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 14,
                        height: 14
                    })
            ]
        });
    return (0, i.jsx)('div', {
        className: G.joinButtonWhatWrapper,
        children: f
    });
}
function Y(e) {
    let { users: t, othersCount: n, extraPill: r } = e;
    return (0, i.jsxs)('div', {
        className: G.facepile,
        children: [
            t.map((e, r) => {
                let a = (0, i.jsx)(d.Z, {
                    user: e,
                    size: c.AvatarSizes.SIZE_20,
                    'aria-label': ''
                });
                return r === t.length - 1 && 0 === n
                    ? (0, i.jsx)(
                          'div',
                          {
                              className: G.facePileItem,
                              children: a
                          },
                          e.id
                      )
                    : (0, i.jsx)(
                          E.ZP,
                          {
                              width: 20,
                              height: 20,
                              mask: E.ZP.Masks.GUILD_POPOUT_FACE_PILE_AVATAR,
                              className: G.facePileItem,
                              children: a
                          },
                          e.id
                      );
            }),
            n > 0 &&
                (0, i.jsxs)(c.Text, {
                    color: 'interactive-normal',
                    variant: 'text-xs/medium',
                    className: G.othersCount,
                    children: ['+', n]
                }),
            r
        ]
    });
}
function j(e) {
    var t, n;
    let { cardData: r, guildId: o, cardIndex: l } = e,
        { category: d } = r,
        [_, E] = a.useState(!1),
        f = d === P.L.HANGOUT && r.streamUserIds.length > 0,
        p = (0, u.e7)([g.Z], () => (f ? g.Z.getPreviewURL(o, r.channelId, r.streamUserIds[0]) : null)),
        m = (0, u.e7)([g.Z], () => (d === P.L.HANGOUT ? g.Z.getIsPreviewLoading(o, r.channelId, r.streamUserIds[0]) : null)),
        I = d === P.L.HANGOUT && r.streamUserIds.length > 0 && null == p && !m,
        T = (0, u.e7)([S.Z], () => {
            let e = d === P.L.HANGOUT || d === P.L.GAMING ? r.channelId : d === P.L.EVENT ? r.event.channel_id : d === P.L.EMBEDDED_ACTIVITY ? r.embeddedActivities[0].channelId : null;
            return S.Z.getChannel(e);
        }),
        A = (0, u.e7)([h.ZP], () => h.ZP.getActiveEventByChannel(null == T ? void 0 : T.id)),
        { usersToShow: v, othersCount: N } = (0, C.QO)(null !== (n = null == T ? void 0 : T.id) && void 0 !== n ? n : '', o),
        { usersToShow: O } = (0, C.Es)(T),
        R = (0, C.ni)(r),
        y = k(r, o, p, R),
        L = B(r, o),
        b = Z(r, R, p),
        D = V(r),
        M = (0, C.$1)(r, o, l),
        U = H(r, o, l),
        { hasChannelStatus: w } = (0, C.CE)(T),
        x = F(r),
        j = d === P.L.HANGOUT && w && null == p,
        W = (null != A || !!(null == T ? void 0 : T.isGuildStageVoice())) && O.length > 0,
        K = d === P.L.HANGOUT && (0 === r.streamUserIds.length || I) && !(null == T ? void 0 : T.isGuildStageVoice()),
        z = W || K,
        q =
            d === P.L.EMBEDDED_ACTIVITY && r.streamersCount > 0
                ? (0, i.jsxs)('div', {
                      className: G.pill,
                      children: [
                          (0, i.jsx)(c.ScreenArrowIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: G.pillIcon
                          }),
                          (0, i.jsx)(c.Text, {
                              color: 'text-normal',
                              variant: 'text-xs/medium',
                              children: r.streamersCount
                          })
                      ]
                  })
                : null;
    return (0, i.jsxs)(c.Clickable, {
        onClick: () => (null == M ? void 0 : M()),
        tag: 'div',
        className: G.container,
        onMouseEnter: () => E(!0),
        onMouseLeave: () => E(!1),
        children: [
            (0, i.jsx)('div', {
                className: s()(G.image, { [G.streamContainer]: f && !I && !(null == T ? void 0 : T.isGuildStageVoice()) }),
                children: y
            }),
            (0, i.jsxs)('div', {
                className: s()(G.content, j && G.hangoutChannelStatusContent),
                children: [
                    null != L &&
                        (0, i.jsx)(c.Heading, {
                            color: 'header-primary',
                            variant: 'heading-sm/semibold',
                            className: 0 === D.length ? G.multiLineTitle : G.singleLineTitle,
                            children: L
                        }),
                    null != b &&
                        (0, i.jsx)(c.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-secondary',
                            className: G.subtitle,
                            children: b
                        }),
                    !z &&
                        !(null == T ? void 0 : T.isGuildStageVoice()) &&
                        v.length > 0 &&
                        (0, i.jsx)(Y, {
                            users: v,
                            othersCount: N,
                            extraPill: q
                        }),
                    j &&
                        (0, i.jsxs)(c.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-secondary',
                            className: G.hangoutChannel,
                            children: [
                                null != x && (0, i.jsx)(x, { className: G.categoryIcon }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-secondary',
                                    className: G.ellipsis,
                                    children: null === (t = S.Z.getChannel(r.channelId)) || void 0 === t ? void 0 : t.name
                                })
                            ]
                        })
                ]
            }),
            _ && U
        ]
    });
}
