n.d(t, {
    Z: function () {
        return B;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(831209),
    l = n(442837),
    u = n(481060),
    c = n(700582),
    d = n(812206),
    f = n(686546),
    _ = n(925329),
    h = n(924301),
    p = n(454585),
    m = n(565799),
    g = n(501655),
    E = n(427679),
    v = n(543882),
    I = n(592125),
    S = n(496675),
    T = n(594174),
    b = n(979651),
    y = n(912787),
    A = n(623552),
    N = n(718582),
    C = n(177963),
    R = n(835248),
    O = n(437431),
    D = n(874070),
    L = n(185885),
    x = n(126134),
    w = n(981631),
    M = n(765305),
    P = n(388032),
    k = n(797113);
function U(e) {
    let t = (0, y.Z)(e),
        { category: n } = e;
    return (null == t ? void 0 : t.isGuildStageVoice()) ? u.StageIcon : ((n === x.L.GAMING || n === x.L.EMBEDDED_ACTIVITY) && e.streamersCount > 0) || (n === x.L.HANGOUT && e.streamUserIds.length > 0) ? u.ScreenArrowIcon : n === x.L.EVENT && (null == t ? void 0 : t.isGuildVoice()) ? u.VoiceNormalIcon : null != t && b.Z.hasVideo(t.id) ? u.VideoIcon : u.VoiceNormalIcon;
}
function G(e) {
    let { users: t, othersCount: n, extraPill: i } = e;
    return (0, r.jsxs)('div', {
        className: k.facepile,
        children: [
            t.map((e, i) => {
                let a = (0, r.jsx)(c.Z, {
                    user: e,
                    size: u.AvatarSizes.SIZE_20,
                    'aria-label': ''
                });
                return i === t.length - 1 && 0 === n
                    ? (0, r.jsx)(
                          'div',
                          {
                              className: k.facePileItem,
                              children: a
                          },
                          e.id
                      )
                    : (0, r.jsx)(
                          f.ZP,
                          {
                              width: 20,
                              height: 20,
                              mask: f.ZP.Masks.GUILD_POPOUT_FACE_PILE_AVATAR,
                              className: k.facePileItem,
                              children: a
                          },
                          e.id
                      );
            }),
            n > 0 &&
                (0, r.jsxs)(u.Text, {
                    color: 'interactive-normal',
                    variant: 'text-xs/medium',
                    className: k.othersCount,
                    children: ['+', n]
                }),
            i
        ]
    });
}
function B(e) {
    var t, n;
    let { cardData: a, guildId: c, cardIndex: f } = e,
        { category: R } = a,
        [D, L] = i.useState(!1),
        B = R === x.L.HANGOUT && a.streamUserIds.length > 0,
        Z = (0, l.e7)([v.Z], () => (B ? v.Z.getPreviewURL(c, a.channelId, a.streamUserIds[0]) : null)),
        F = (0, l.e7)([v.Z], () => (R === x.L.HANGOUT ? v.Z.getIsPreviewLoading(c, a.channelId, a.streamUserIds[0]) : null)),
        V = R === x.L.HANGOUT && a.streamUserIds.length > 0 && null == Z && !F,
        H = (0, l.e7)([I.Z], () => {
            let e = R === x.L.HANGOUT || R === x.L.GAMING ? a.channelId : R === x.L.EVENT ? a.event.channel_id : R === x.L.EMBEDDED_ACTIVITY ? a.embeddedActivities[0].channelId : null;
            return I.Z.getChannel(e);
        }),
        j = (0, l.e7)([h.ZP], () => h.ZP.getActiveEventByChannel(null == H ? void 0 : H.id)),
        { usersToShow: Y, othersCount: W } = (0, N.QO)(null !== (n = null == H ? void 0 : H.id) && void 0 !== n ? n : '', c),
        { usersToShow: K } = (0, N.Es)(H),
        z = (0, N.ni)(a),
        q = (function (e, t, n, i) {
            let { category: a } = e,
                s = (0, y.Z)(e),
                { usersToShow: c } = (0, N.Es)(s),
                f = (0, l.e7)([v.Z], () => (a === x.L.HANGOUT ? v.Z.getIsPreviewLoading(t, e.channelId, e.streamUserIds[0]) : null));
            switch (a) {
                case x.L.GAMING:
                    let { games: h } = e;
                    if (null == h[0].application_id)
                        return (0, r.jsx)(u.GameControllerIcon, {
                            size: 'md',
                            color: 'currentColor'
                        });
                    return (0, r.jsx)(_.Z, {
                        game: d.Z.getApplication(h[0].application_id),
                        size: 'xl',
                        className: k.gameIcon
                    });
                case x.L.EVENT:
                    if (c.length > 0)
                        return (0, r.jsx)(A.Z, {
                            guildId: t,
                            users: c
                        });
                    return e.isStage ? (0, r.jsx)(O.Z, { className: k.imageIcon }) : (0, r.jsx)(C.Z, { className: k.imageIcon });
                case x.L.EMBEDDED_ACTIVITY:
                    let { embeddedActivities: p } = e;
                    if (null == p[0].applicationId)
                        return (0, r.jsx)(u.ActivitiesIcon, {
                            size: 'md',
                            color: 'currentColor'
                        });
                    return (0, r.jsx)(_.Z, {
                        game: i,
                        size: 'xl',
                        className: k.gameIcon
                    });
                case x.L.HANGOUT: {
                    let { streamUserIds: i, userIds: a, channelHasVideo: s, isStage: l } = e,
                        d = l ? c : [];
                    if (l) {
                        if (0 === d.length) return (0, r.jsx)(O.Z, { className: k.imageIcon });
                        return (0, r.jsx)(A.Z, {
                            guildId: t,
                            users: d
                        });
                    }
                    if (i.length > 0) {
                        let e = (e) =>
                            (0, r.jsx)(u.TextBadge, {
                                text: P.intl.string(P.t.dI3q4u),
                                color: o.Z.STATUS_DANGER,
                                className: e
                            });
                        if (f)
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(u.Spinner, { className: k.streamPreview }), e(k.liveBadge)]
                            });
                        if (null != n)
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)('img', {
                                        src: n,
                                        alt: '',
                                        className: k.streamPreview
                                    }),
                                    e(k.liveBadge)
                                ]
                            });
                        let a = i.map((e) => T.default.getUser(e)).filter((e) => null != e);
                        return (0, r.jsx)(A.Z, {
                            guildId: t,
                            users: a
                        });
                    }
                    let _ = a.map((e) => T.default.getUser(e)).filter((e) => null != e);
                    return (0, r.jsx)(A.Z, {
                        guildId: t,
                        users: _
                    });
                }
            }
        })(a, c, Z, z),
        Q = (function (e, t) {
            let { category: n } = e,
                i = (0, N.FP)(n === x.L.HANGOUT ? (null == e ? void 0 : e.userIds) : []),
                a = (0, N.FP)(n === x.L.HANGOUT ? (null == e ? void 0 : e.streamUserIds) : []),
                o = (0, N.FP)(n === x.L.GAMING ? (null == e ? void 0 : e.gameUserIds) : []),
                l = (0, y.Z)(e),
                { hasChannelStatus: c } = (0, N.CE)(l),
                { usersToShow: d } = (0, N.Es)(l),
                f = (0, N.FP)(n === x.L.HANGOUT && e.isStage ? d.map((e) => e.id) : []),
                _ = new Set();
            n === x.L.EMBEDDED_ACTIVITY &&
                e.embeddedActivities.forEach((e) => {
                    _ = new Set([..._, ...e.userIds]);
                });
            let h = (0, N.FP)(n === x.L.EMBEDDED_ACTIVITY ? [..._] : []);
            switch (n) {
                case x.L.HANGOUT: {
                    if (c && 0 === a.length) {
                        let e = (0, N.K6)(i, t, !0),
                            n = i.length - 1;
                        return (0, r.jsxs)('div', {
                            className: k.hangoutStatusTitleContainer,
                            children: [
                                (0, r.jsx)(u.Heading, {
                                    color: 'header-primary',
                                    variant: 'heading-sm/semibold',
                                    className: s()(k.hangoutStatusUsername, k.ellipsis),
                                    children: e
                                }),
                                n > 0 &&
                                    (0, r.jsx)(u.Heading, {
                                        color: 'header-primary',
                                        variant: 'heading-sm/semibold',
                                        className: k.hangoutStatusOthers,
                                        children: P.intl.format(P.t.RGr9tr, { count: n })
                                    })
                            ]
                        });
                    }
                    let n = (0, N.K6)(f.length > 0 ? f : a.length > 0 ? a : i, t);
                    if (e.isStage) {
                        var p, m;
                        return null !== (m = null === (p = E.Z.getStageInstanceByChannel(e.channelId)) || void 0 === p ? void 0 : p.topic) && void 0 !== m ? m : n;
                    }
                    return n;
                }
                case x.L.EVENT:
                    return e.event.name;
                case x.L.EMBEDDED_ACTIVITY:
                    return (0, N.K6)(h, t);
                case x.L.GAMING:
                    return (0, N.K6)(o, t);
                default:
                    return null;
            }
        })(a, c),
        X = (function (e, t, n) {
            var i, a, s;
            let { category: o } = e,
                l = (0, y.Z)(e),
                c = U(e),
                { audienceCount: d } = (0, N.Es)(l),
                { channelStatus: f, hasChannelStatus: _ } = (0, N.CE)(l);
            switch (o) {
                case x.L.GAMING:
                    let { games: h, channelId: m } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(u.GameControllerIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: k.categoryIcon
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-secondary',
                                className: k.ellipsis,
                                children: 1 === h.length ? h[0].name : P.intl.formatToPlainString(P.t.uIKPiI, { numGames: h.length })
                            }),
                            '\u2022',
                            null != c && (0, r.jsx)(c, { className: k.categoryIcon }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-secondary',
                                className: k.ellipsis,
                                children: null === (i = I.Z.getChannel(m)) || void 0 === i ? void 0 : i.name
                            })
                        ]
                    });
                case x.L.EVENT:
                    let { event: g } = e,
                        E = (0, N.NZ)(g),
                        v = null == E ? void 0 : E.IconComponent,
                        S = null == E ? void 0 : E.locationName;
                    if (null != v && null != S)
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(v, { className: k.categoryIcon }),
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-secondary',
                                    className: k.ellipsis,
                                    children: S
                                }),
                                null != d &&
                                    d > 0 &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            '\u2022',
                                            (0, r.jsx)(u.GroupIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: k.categoryIcon
                                            }),
                                            (0, r.jsx)(u.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'text-secondary',
                                                children: d
                                            })
                                        ]
                                    })
                            ]
                        });
                    return null;
                case x.L.EMBEDDED_ACTIVITY:
                    let { embeddedActivities: T } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(u.ActivitiesIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: k.categoryIcon
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-secondary',
                                className: k.ellipsis,
                                children: 1 === T.length ? (null == t ? void 0 : t.name) : P.intl.formatToPlainString(P.t.LMOYUV, { numActivities: T.length })
                            }),
                            '\u2022',
                            null != c && (0, r.jsx)(c, { className: k.categoryIcon }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-secondary',
                                className: k.ellipsis,
                                children: null === (a = I.Z.getChannel(T[0].channelId)) || void 0 === a ? void 0 : a.name
                            })
                        ]
                    });
                case x.L.HANGOUT: {
                    let { channelId: t } = e,
                        i = _ && null == n;
                    return (0, r.jsx)(r.Fragment, {
                        children: i
                            ? (0, r.jsx)(u.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  className: k.ellipsis,
                                  children: p.Z.parseVoiceChannelStatus(f, !0, { channelId: t })
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      null != c && (0, r.jsx)(c, { className: k.categoryIcon }),
                                      (0, r.jsx)(u.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'text-secondary',
                                          className: k.ellipsis,
                                          children: null === (s = I.Z.getChannel(t)) || void 0 === s ? void 0 : s.name
                                      }),
                                      _ &&
                                          null != n &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  '\u2022',
                                                  (0, r.jsx)(u.Text, {
                                                      variant: 'text-xs/medium',
                                                      color: 'text-secondary',
                                                      className: k.ellipsis,
                                                      children: p.Z.parseVoiceChannelStatus(f, !0, { channelId: t })
                                                  })
                                              ]
                                          }),
                                      null != d &&
                                          d > 0 &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  '\u2022',
                                                  (0, r.jsx)(u.GroupIcon, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: k.categoryIcon
                                                  }),
                                                  (0, r.jsx)(u.Text, {
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
        })(a, z, Z),
        J = (function (e) {
            let { category: t } = e,
                n = (0, y.Z)(e),
                { audienceCount: r } = (0, N.Es)(n);
            switch (t) {
                case x.L.EVENT:
                    if (null != r)
                        return [
                            {
                                icon: u.HeadphonesIcon,
                                count: r
                            }
                        ];
                    return [];
                case x.L.HANGOUT:
                    let { streamUserIds: i, userIds: a, channelId: s, isStage: o } = e;
                    if (o) {
                        var l;
                        return [
                            {
                                icon: u.HeadphonesIcon,
                                count: null !== (l = m.Z.getParticipantCount(s, g.pV.AUDIENCE)) && void 0 !== l ? l : 0
                            }
                        ];
                    }
                    if (i.length > 0)
                        return [
                            {
                                icon: u.GroupIcon,
                                count: a.length > 0 ? a.length : null
                            }
                        ];
                    return [];
                case x.L.EMBEDDED_ACTIVITY:
                    return [
                        {
                            icon: u.GroupIcon,
                            count: e.voiceUsersCount > 0 ? e.voiceUsersCount : null
                        },
                        {
                            icon: u.ScreenArrowIcon,
                            count: e.streamersCount > 0 ? e.streamersCount : null
                        }
                    ];
                case x.L.GAMING:
                    return [
                        {
                            icon: u.GroupIcon,
                            count: e.voiceStates.length > 0 ? e.voiceStates.length : null
                        },
                        {
                            icon: u.ScreenArrowIcon,
                            count: e.streamersCount > 0 ? e.streamersCount : null
                        }
                    ];
                default:
                    return [];
            }
        })(a),
        $ = (0, N.$1)(a, c, f),
        ee = (function (e, t, n) {
            var i;
            let { category: a } = e,
                s = null,
                o = a === x.L.EVENT;
            if (null == (s = o ? e.event.channel_id : a === x.L.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : e.channelId) && !o) return;
            let l = null != s && b.Z.isInChannel(s),
                c = o && (e.event.entity_type === M.WX.EXTERNAL || e.event.entity_type === M.WX.NONE) ? P.intl.string(P.t['HO/oXl']) : l ? P.intl.string(P.t['/YuDAg']) : P.intl.string(P.t.VJlc0d),
                d = (null === (i = I.Z.getChannel(s)) || void 0 === i ? void 0 : i.isGuildVocal()) && !S.Z.can(w.Plq.CONNECT, I.Z.getChannel(s)),
                f = (0, N.DE)(e, t),
                _ = (0, r.jsxs)(u.Button, {
                    size: u.Button.Sizes.MIN,
                    innerClassName: k.joinButtonInner,
                    color: u.Button.Colors.GREEN,
                    disabled: l || d,
                    onClick: (r) => {
                        r.stopPropagation(), (0, N.ob)(e, t, n, N.pV.JOIN_BUTTON), null == f || f();
                    },
                    className: k.joinButton,
                    children: [
                        c,
                        d &&
                            (0, r.jsx)(u.LockIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 14,
                                height: 14
                            })
                    ]
                });
            return (0, r.jsx)('div', {
                className: k.joinButtonWhatWrapper,
                children: _
            });
        })(a, c, f),
        { hasChannelStatus: et } = (0, N.CE)(H),
        en = U(a),
        er = R === x.L.HANGOUT && et && null == Z,
        ei = (null != j || !!(null == H ? void 0 : H.isGuildStageVoice())) && K.length > 0,
        ea = R === x.L.HANGOUT && (0 === a.streamUserIds.length || V) && !(null == H ? void 0 : H.isGuildStageVoice()),
        es =
            R === x.L.EMBEDDED_ACTIVITY && a.streamersCount > 0
                ? (0, r.jsxs)('div', {
                      className: k.pill,
                      children: [
                          (0, r.jsx)(u.ScreenArrowIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: k.pillIcon
                          }),
                          (0, r.jsx)(u.Text, {
                              color: 'text-normal',
                              variant: 'text-xs/medium',
                              children: a.streamersCount
                          })
                      ]
                  })
                : null;
    return (0, r.jsxs)(u.Clickable, {
        onClick: () => (null == $ ? void 0 : $()),
        tag: 'div',
        className: k.container,
        onMouseEnter: () => L(!0),
        onMouseLeave: () => L(!1),
        children: [
            (0, r.jsx)('div', {
                className: s()(k.image, { [k.streamContainer]: B && !V && !(null == H ? void 0 : H.isGuildStageVoice()) }),
                children: q
            }),
            (0, r.jsxs)('div', {
                className: s()(k.content, er && k.hangoutChannelStatusContent),
                children: [
                    null != Q &&
                        (0, r.jsx)(u.Heading, {
                            color: 'header-primary',
                            variant: 'heading-sm/semibold',
                            className: 0 === J.length ? k.multiLineTitle : k.singleLineTitle,
                            children: Q
                        }),
                    null != X &&
                        (0, r.jsx)(u.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-secondary',
                            className: k.subtitle,
                            children: X
                        }),
                    !(ei || ea) &&
                        !(null == H ? void 0 : H.isGuildStageVoice()) &&
                        Y.length > 0 &&
                        (0, r.jsx)(G, {
                            users: Y,
                            othersCount: W,
                            extraPill: es
                        }),
                    er &&
                        (0, r.jsxs)(u.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-secondary',
                            className: k.hangoutChannel,
                            children: [
                                null != en && (0, r.jsx)(en, { className: k.categoryIcon }),
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-secondary',
                                    className: k.ellipsis,
                                    children: null === (t = I.Z.getChannel(a.channelId)) || void 0 === t ? void 0 : t.name
                                })
                            ]
                        })
                ]
            }),
            D && ee
        ]
    });
}
