t.d(s, {
    b: function () {
        return V;
    }
}),
    t(47120),
    t(627341);
var i = t(200651),
    a = t(192379),
    n = t(278074),
    l = t(754700),
    r = t(887003),
    o = t(742635),
    d = t(458708),
    c = t(481060),
    u = t(70956),
    g = t(497505),
    m = t(918701),
    h = t(210724),
    v = t(130653),
    f = t(415104),
    x = t(78826),
    j = t(37303),
    T = t(134483),
    p = t(683650),
    C = t(920916),
    S = t(341907),
    P = t(478977),
    E = t(456799),
    O = t(210851),
    N = t(602683),
    w = t(916028),
    y = t(749912),
    I = t(815183),
    b = t(899457),
    A = t(102787);
function _(e, s, t) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = t),
        e
    );
}
let L = ['png', 'gif', 'webp'],
    D = [...L, 'jpg', 'jpeg'],
    M = Array.from(new Set([...D, 'gif', 'mp4', 'webm']));
function V(e) {
    var s, t;
    return {
        code: 'PREVIEW-MODE-CODE',
        tier: 0,
        platform: g.y$.CROSS_PLATFORM,
        userId: '123',
        questId: e.id,
        claimedAt: null !== (t = null === (s = e.userStatus) || void 0 === s ? void 0 : s.claimedAt) && void 0 !== t ? t : ''
    };
}
function F() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: s = 0, completedAt: t = null, enrolledAt: i = null, claimedAt: a = null } = e;
    return {
        userId: '123',
        questId: '1193992107035983872',
        enrolledAt: i,
        completedAt: t,
        claimedAt: a,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: s,
        dismissedQuestContent: 0,
        progress: {}
    };
}
let k = '1193992107035983872',
    R = {
        id: k,
        preview: !0,
        config: {
            id: k,
            configVersion: 2,
            startsAt: '2024-01-01T00:00:00+00:00',
            expiresAt: '2030-01-01T00:00:00+00:00',
            application: {
                link: 'https://discord.com/',
                id: '123',
                name: 'Sky Runners'
            },
            messages: {
                questName: 'Sky Runners',
                gameTitle: 'Sky Runners',
                gamePublisher: 'Discord'
            },
            colors: {
                primary: '#B377F3',
                secondary: '#5865F2'
            },
            rewardsConfig: {
                assignmentMethod: 1,
                rewards: [
                    {
                        skuId: '',
                        asset: 'reward.png',
                        assetVideo: null,
                        type: r.w.REWARD_CODE,
                        messages: {
                            name: 'Orange Buddy Jetpack',
                            nameWithArticle: 'an Orange Buddy Jetpack',
                            redemptionInstructionsByPlatform: {
                                0: 'This code can be used on any platform!',
                                1: 'Redeem your code on your Xbox.',
                                2: 'Redeem your code on your Playstation.',
                                3: 'Redeem your code on your Switch.',
                                4: 'Redeem your code on your PC.'
                            }
                        }
                    }
                ],
                rewardsExpireAt: '2030-01-01T00:00:00+00:00',
                platforms: [0, 4, 2, 3, 1]
            },
            assets: {
                hero: 'hero.png',
                heroVideo: null,
                questBarHero: 'quests_bar_hero.webm',
                questBarHeroVideo: null,
                gameTile: 'game_tile.png',
                logotype: 'game_logotype.png'
            },
            taskConfig: {
                type: o.L.FIRST_PARTY,
                joinOperator: d.r.AND,
                tasks: {
                    [l.X.PLAY_ON_DESKTOP]: {
                        eventName: l.X.PLAY_ON_DESKTOP,
                        target: 300,
                        externalIds: []
                    }
                }
            },
            features: []
        },
        userStatus: null,
        targetedContent: []
    };
function Z() {
    var e, s, r, o, d, _, V, k, Z, B, H, K, q, Y;
    let [Q, U] = a.useState(R),
        [X, W] = a.useState(b.a.UNENROLLED),
        [z, G] = a.useState(!1),
        [J, $] = a.useState(!1),
        [ee, es] = a.useState(null);
    let et =
        ((Y = Q.config),
        (0, n.EQ)(Y)
            .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
            .exhaustive());
    function ei(e, s) {
        var t, i;
        if ('hero' === e || 'questBarHero' === e || 'gameTile' === e || 'logotype' === e || 'heroVideo' === e || 'questBarHeroVideo' === e)
            U({
                ...Q,
                config:
                    ((t = Q.config),
                    (i = { [e]: s }),
                    (0, n.EQ)(t)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            assets: {
                                ...e.assets,
                                ...i
                            }
                        }))
                        .exhaustive())
            });
    }
    function ea(e, s) {
        var t, i, a;
        U({
            ...Q,
            config: {
                ...Q.config,
                videoMetadata: {
                    ...Q.config.videoMetadata,
                    messages: null !== (a = null === (t = Q.config.videoMetadata) || void 0 === t ? void 0 : t.messages) && void 0 !== a ? a : {},
                    assets: {
                        ...(null === (i = Q.config.videoMetadata) || void 0 === i ? void 0 : i.assets),
                        [e]: s
                    }
                }
            }
        });
    }
    function en(e, s) {
        var t, i;
        if ('questName' === e || 'gameTitle' === e || 'gamePublisher' === e)
            U({
                ...Q,
                config:
                    ((t = Q.config),
                    (i = { [e]: s }),
                    (0, n.EQ)(t)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            messages: {
                                ...e.messages,
                                ...i
                            }
                        }))
                        .exhaustive())
            });
    }
    function el(e, s) {
        var t, i, a;
        U({
            ...Q,
            config: {
                ...Q.config,
                videoMetadata: {
                    ...Q.config.videoMetadata,
                    assets: null !== (a = null === (t = Q.config.videoMetadata) || void 0 === t ? void 0 : t.assets) && void 0 !== a ? a : {},
                    messages: {
                        ...(null === (i = Q.config.videoMetadata) || void 0 === i ? void 0 : i.messages),
                        [e]: s
                    }
                }
            }
        });
    }
    function er(e, s, t) {
        var i, a, l;
        if ('name' === e || 'nameWithArticle' === e)
            U({
                ...Q,
                config:
                    ((i = Q.config),
                    (a = { [e]: s }),
                    (l = t),
                    (0, n.EQ)(i)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            rewardsConfig: {
                                ...e.rewardsConfig,
                                rewards: e.rewardsConfig.rewards.map((e, s) =>
                                    s === l
                                        ? {
                                              ...e,
                                              messages: {
                                                  ...e.messages,
                                                  ...a
                                              }
                                          }
                                        : e
                                )
                            }
                        }))
                        .exhaustive())
            });
    }
    function eo(e, s) {
        U({
            ...Q,
            config: {
                ...Q.config,
                colors: {
                    ...Q.config.colors,
                    [e]: s
                }
            }
        });
    }
    function ed() {
        (0, m.Xv)(Q.config)
            ? (0, C.openCollectibleRewardModal)(Q, g.jn.GIFT_INVENTORY_FOR_YOU, !0)
            : (0, S.openQuestsRewardCodeModal)({
                  questId: Q.id,
                  location: g.jn.GIFT_INVENTORY_FOR_YOU,
                  preview: !0,
                  previewQuest: Q
              });
    }
    let ec = a.useMemo(() => {
            for (let [e, s] of Object.entries(Q.config.taskConfig.tasks)) if (null != s.target) return s.target;
            return 10 * u.Z.Seconds.MINUTE;
        }, [Q.config.taskConfig.tasks]),
        eu = a.useMemo(() => l.X.WATCH_VIDEO in Q.config.taskConfig.tasks, [Q.config.taskConfig.tasks]);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(c.Heading, {
                variant: 'heading-lg/bold',
                className: A.heading,
                children: 'Quest Preview Tool'
            }),
            (0, i.jsx)('div', {
                className: A.fields,
                children: (0, i.jsx)(w.Z, {
                    onSelect: function (e) {
                        if ((es(e), null != e)) U(e);
                    },
                    quest: ee
                })
            }),
            (0, i.jsx)(c.Heading, {
                variant: 'heading-md/semibold',
                className: A.subheading,
                children: 'Task Config'
            }),
            (0, i.jsx)('div', {
                className: A.fields,
                children: (0, i.jsx)(y.Z, {
                    taskDuration: ec,
                    taskConfig: Q.config.taskConfig,
                    onSelect: function (e) {
                        U({
                            ...Q,
                            config: {
                                ...Q.config,
                                taskConfig: e
                            }
                        });
                    }
                })
            }),
            (0, i.jsx)(c.Heading, {
                variant: 'heading-md/semibold',
                className: A.subheading,
                children: 'Messages'
            }),
            (0, i.jsxs)('div', {
                className: A.fields,
                children: [
                    (0, i.jsx)(N.Z, {
                        title: 'Quest Name',
                        assetKey: 'questName',
                        onMessageChange: en,
                        initialValue: Q.config.messages.questName
                    }),
                    (0, i.jsx)(N.Z, {
                        title: 'Game Title',
                        assetKey: 'gameTitle',
                        onMessageChange: en,
                        initialValue: Q.config.messages.gameTitle
                    }),
                    (0, i.jsx)(N.Z, {
                        title: 'Game Publisher',
                        assetKey: 'gamePublisher',
                        onMessageChange: en,
                        initialValue: Q.config.messages.gamePublisher
                    }),
                    eu &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(N.Z, {
                                    title: 'Video Title',
                                    assetKey: 'videoTitle',
                                    onMessageChange: el,
                                    initialValue: null === (e = Q.config.videoMetadata) || void 0 === e ? void 0 : e.messages.videoTitle
                                }),
                                (0, i.jsx)(N.Z, {
                                    title: 'End CTA Title',
                                    assetKey: 'videoEndCtaTitle',
                                    onMessageChange: el,
                                    initialValue: null === (s = Q.config.videoMetadata) || void 0 === s ? void 0 : s.messages.videoEndCtaTitle
                                }),
                                (0, i.jsx)(N.Z, {
                                    title: 'End CTA Subtitle',
                                    assetKey: 'videoEndCtaSubtitle',
                                    onMessageChange: el,
                                    initialValue: null === (r = Q.config.videoMetadata) || void 0 === r ? void 0 : r.messages.videoEndCtaSubtitle
                                })
                            ]
                        })
                ]
            }),
            (0, i.jsx)(c.Heading, {
                variant: 'heading-md/semibold',
                className: A.subheading,
                children: 'Assets'
            }),
            (0, i.jsxs)('div', {
                className: A.fields,
                children: [
                    (0, i.jsx)(O.Z, {
                        title: 'Hero',
                        assetKey: 'hero',
                        onFileChange: ei,
                        filters: M,
                        initialValue: Q.config.assets.hero
                    }),
                    (0, i.jsx)(O.Z, {
                        title: 'Hero Video (optional)',
                        assetKey: 'heroVideo',
                        onFileChange: ei,
                        filters: M,
                        initialValue: null !== (K = Q.config.assets.heroVideo) && void 0 !== K ? K : void 0
                    }),
                    (0, i.jsx)(O.Z, {
                        title: 'Quest Bar Hero',
                        assetKey: 'questBarHero',
                        onFileChange: ei,
                        filters: M,
                        initialValue: Q.config.assets.questBarHero
                    }),
                    (0, i.jsx)(O.Z, {
                        title: 'Quest Bar Hero Video (optional)',
                        assetKey: 'questBarHeroVideo',
                        onFileChange: ei,
                        filters: M,
                        initialValue: null !== (q = Q.config.assets.questBarHeroVideo) && void 0 !== q ? q : void 0
                    }),
                    (0, i.jsx)(O.Z, {
                        title: 'Game Tile',
                        assetKey: 'gameTile',
                        onFileChange: ei,
                        filters: [...D, 'svg'],
                        initialValue: Q.config.assets.gameTile
                    }),
                    (0, i.jsx)(O.Z, {
                        title: 'Logotype',
                        assetKey: 'logotype',
                        onFileChange: ei,
                        filters: [...L, 'svg'],
                        initialValue: Q.config.assets.logotype
                    }),
                    eu &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(O.Z, {
                                    title: 'Quest Video',
                                    assetKey: 'videoPlayerVideo',
                                    onFileChange: ea,
                                    filters: M,
                                    initialValue: null === (o = Q.config.videoMetadata) || void 0 === o ? void 0 : o.assets.videoPlayerVideo
                                }),
                                (0, i.jsx)(O.Z, {
                                    title: 'Quest Video (Low Resolution)',
                                    assetKey: 'videoPlayerVideoLowRes',
                                    onFileChange: ea,
                                    filters: M,
                                    initialValue: null === (d = Q.config.videoMetadata) || void 0 === d ? void 0 : d.assets.videoPlayerVideoLowRes
                                }),
                                (0, i.jsx)(O.Z, {
                                    title: 'Video Player Thumbnail (optional)',
                                    assetKey: 'videoPlayerThumbnail',
                                    onFileChange: ea,
                                    filters: D,
                                    initialValue: null === (V = Q.config.videoMetadata) || void 0 === V ? void 0 : null === (_ = V.assets) || void 0 === _ ? void 0 : _.videoPlayerThumbnail
                                }),
                                (0, i.jsx)(O.Z, {
                                    title: 'Quest Bar Preview Video (optional)',
                                    assetKey: 'questBarPreviewVideo',
                                    onFileChange: ea,
                                    filters: M,
                                    initialValue: null === (k = Q.config.videoMetadata) || void 0 === k ? void 0 : k.assets.questBarPreviewVideo
                                }),
                                (0, i.jsx)(O.Z, {
                                    title: 'Quest Home Video (optional)',
                                    assetKey: 'questHomeVideo',
                                    onFileChange: ea,
                                    filters: M,
                                    initialValue: null === (Z = Q.config.videoMetadata) || void 0 === Z ? void 0 : Z.assets.questHomeVideo
                                })
                            ]
                        })
                ]
            }),
            et.map((e, s) =>
                (0, i.jsxs)(
                    'div',
                    {
                        children: [
                            (0, i.jsxs)(c.Heading, {
                                variant: 'heading-md/semibold',
                                className: A.subheading,
                                children: ['Reward #', s + 1]
                            }),
                            (0, i.jsxs)('div', {
                                className: A.fields,
                                children: [
                                    (0, i.jsx)(N.Z, {
                                        title: 'Name',
                                        assetKey: 'name',
                                        onMessageChange: (e, t) => er(e, t, s),
                                        initialValue: e.messages.name
                                    }),
                                    (0, i.jsx)(N.Z, {
                                        title: 'Name With Article',
                                        assetKey: 'nameWithArticle',
                                        onMessageChange: (e, t) => er(e, t, s),
                                        initialValue: e.messages.nameWithArticle
                                    }),
                                    (0, i.jsx)(O.Z, {
                                        title: 'Asset',
                                        assetKey: 'asset',
                                        onFileChange: (e, t) =>
                                            (function (e, s, t) {
                                                var i, a, l;
                                                if ('asset' === e)
                                                    U({
                                                        ...Q,
                                                        config:
                                                            ((i = Q.config),
                                                            (a = s),
                                                            (l = t),
                                                            (0, n.EQ)(i)
                                                                .with({ configVersion: 2 }, (e) => ({
                                                                    ...e,
                                                                    rewardsConfig: {
                                                                        ...e.rewardsConfig,
                                                                        rewards: e.rewardsConfig.rewards.map((e, s) =>
                                                                            s === l
                                                                                ? {
                                                                                      ...e,
                                                                                      asset: a
                                                                                  }
                                                                                : e
                                                                        )
                                                                    }
                                                                }))
                                                                .exhaustive())
                                                    });
                                            })(e, t, s),
                                        filters: M,
                                        initialValue: e.asset
                                    }),
                                    (0, i.jsxs)(c.FormItem, {
                                        children: [
                                            (0, i.jsx)(c.FormTitle, { children: 'Claim Modal' }),
                                            (0, i.jsx)(c.Button, {
                                                color: c.ButtonColors.BRAND,
                                                onClick: ed,
                                                children: 'Open Reward Modal'
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    },
                    s
                )
            ),
            (0, i.jsx)(c.Heading, {
                variant: 'heading-md/semibold',
                className: A.subheading,
                children: 'Colors & Quest States'
            }),
            (0, i.jsxs)('div', {
                className: A.fields,
                children: [
                    (0, i.jsxs)('div', {
                        className: A.fields,
                        style: { marginBottom: 0 },
                        children: [
                            (0, i.jsx)(P.Z, {
                                title: 'Primary',
                                colorKey: 'primary',
                                onChange: eo,
                                value: Q.config.colors.primary
                            }),
                            (0, i.jsx)(P.Z, {
                                title: 'Secondary',
                                colorKey: 'secondary',
                                onChange: eo,
                                value: Q.config.colors.secondary
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: A.fields,
                        children: (0, i.jsx)(I.Z, {})
                    }),
                    (0, i.jsx)(b.Z, {
                        onChange: function (e) {
                            switch ((W(e), e)) {
                                case b.a.UNENROLLED:
                                    U({
                                        ...Q,
                                        userStatus: null
                                    });
                                    break;
                                case b.a.ENROLLED:
                                    U({
                                        ...Q,
                                        userStatus: F({ enrolledAt: new Date().toISOString() })
                                    });
                                    break;
                                case b.a.COMPLETED_25:
                                    U({
                                        ...Q,
                                        userStatus: F({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: ec * u.Z.Seconds.MINUTE * 0.25
                                        })
                                    });
                                    break;
                                case b.a.COMPLETED_50:
                                    U({
                                        ...Q,
                                        userStatus: F({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: ec * u.Z.Seconds.MINUTE * 0.5
                                        })
                                    });
                                    break;
                                case b.a.COMPLETED_75:
                                    U({
                                        ...Q,
                                        userStatus: F({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: ec * u.Z.Seconds.MINUTE * 0.75
                                        })
                                    });
                                    break;
                                case b.a.COMPLETED_100:
                                    U({
                                        ...Q,
                                        userStatus: F({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: ec * u.Z.Seconds.MINUTE
                                        })
                                    });
                                    break;
                                case b.a.CLAIMED:
                                    U({
                                        ...Q,
                                        userStatus: F({
                                            claimedAt: new Date().toISOString(),
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: ec * u.Z.Seconds.MINUTE
                                        })
                                    });
                            }
                        },
                        value: X
                    })
                ]
            }),
            (0, i.jsx)(c.Heading, {
                variant: 'heading-lg/bold',
                className: A.heading,
                children: 'Component Previews'
            }),
            (0, i.jsxs)('div', {
                className: A.componentPreviews,
                children: [
                    (0, i.jsxs)(E.Z, {
                        withBorder: !0,
                        children: [
                            (0, i.jsx)(c.FormTitle, { children: 'Quest Bar' }),
                            (0, i.jsxs)('div', {
                                className: A.questBarPreviewWrapper,
                                children: [
                                    (null === (B = Q.userStatus) || void 0 === B ? void 0 : B.claimedAt) != null &&
                                        (0, i.jsx)(c.Text, {
                                            color: 'text-secondary',
                                            variant: 'text-sm/normal',
                                            children: 'The Quest Bar is hidden when the user has claimed the reward.'
                                        }),
                                    (0, i.jsx)('div', {
                                        className: A.questBarPreview,
                                        children: (0, i.jsx)(x.p, {
                                            isPreview: !0,
                                            source: 'preview',
                                            questId: '0',
                                            children: (0, i.jsx)(v.Z, { children: (0, i.jsx)(h.P, { quest: Q }) })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)(E.Z, {
                        withBorder: !0,
                        children: [
                            (0, i.jsx)(c.FormTitle, { children: 'Quest Home Card' }),
                            (0, i.jsx)(x.p, {
                                isPreview: !0,
                                source: 'preview',
                                questId: '0',
                                children: (0, i.jsx)(f.Z, {
                                    quest: Q,
                                    className: A.questTile,
                                    questContent: g.jn.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)(E.Z, {
                        withBorder: !0,
                        children: [
                            (0, i.jsx)(c.FormTitle, { children: 'Channel Call Header' }),
                            (null === (H = Q.userStatus) || void 0 === H ? void 0 : H.claimedAt) != null &&
                                (0, i.jsx)(c.Text, {
                                    color: 'text-secondary',
                                    variant: 'text-sm/normal',
                                    children: 'The Quest Channel Call Header is hidden when the user has claimed the reward.'
                                }),
                            (0, i.jsx)('div', {
                                className: A.questBarPreviewWrapper,
                                children: (0, i.jsx)(x.p, {
                                    isPreview: !0,
                                    source: 'preview',
                                    questId: '0',
                                    children: (0, i.jsx)('div', {
                                        className: A.questChannelCallHeaderPreview,
                                        children: (0, i.jsx)(T.Z, {
                                            channelId: '123',
                                            previewQuest: Q,
                                            isParticipatingOverride: z
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: A.toggleSwitch,
                        children: (0, i.jsx)(c.FormItem, {
                            children: (0, i.jsx)(c.FormSwitch, {
                                value: z,
                                onChange: function (e) {
                                    G(e);
                                },
                                hideBorder: !0,
                                children: 'Is Participating:'
                            })
                        })
                    }),
                    (0, i.jsxs)(E.Z, {
                        withBorder: !0,
                        children: [
                            (0, i.jsx)(c.FormTitle, { children: 'Quest Card Embed' }),
                            J
                                ? (0, i.jsx)(p.o, {})
                                : (0, i.jsx)(
                                      j.Z,
                                      {
                                          quest: Q,
                                          location: g.jn.QUESTS_EMBED
                                      },
                                      Q.id
                                  )
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: A.toggleSwitch,
                        children: (0, i.jsx)(c.FormItem, {
                            children: (0, i.jsx)(c.FormSwitch, {
                                value: J,
                                onChange: $,
                                hideBorder: !0,
                                children: 'Invalid Quests Embed:'
                            })
                        })
                    }),
                    eu &&
                        (0, i.jsxs)(E.Z, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, i.jsx)(c.FormTitle, { children: 'Video Player' }),
                                (0, i.jsx)(c.Button, {
                                    onClick: () => {
                                        (0, c.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([t.e('32249'), t.e('84307')]).then(t.bind(t, 536687));
                                            return (s) => {
                                                var t;
                                                return (0, i.jsx)(e, {
                                                    ...s,
                                                    videoSessionId: 'fake-quest-session-id',
                                                    questId: null !== (t = Q.id) && void 0 !== t ? t : 'fake-quest-id',
                                                    overrideQuest: Q,
                                                    autoplay: !0
                                                });
                                            };
                                        });
                                    },
                                    children: 'Open Video Player Modal'
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
class B extends a.Component {
    componentDidCatch(e) {
        this.setState({ error: e });
    }
    render() {
        let { error: e, renderKey: s } = this.state;
        return null != e
            ? (0, i.jsxs)('div', {
                  className: A.errorBoundary,
                  children: [
                      (0, i.jsx)(c.CircleWarningIcon, { className: A.errorBoundaryIcon }),
                      (0, i.jsx)(c.Heading, {
                          variant: 'heading-lg/semibold',
                          children: 'Something broke in the Quest preview tool :('
                      }),
                      (0, i.jsx)(c.Button, {
                          color: c.ButtonColors.PRIMARY,
                          onClick: this.handleResetState,
                          children: 'Reset'
                      }),
                      null != e.message &&
                          (0, i.jsx)(c.Card, {
                              className: A.errorMessageWrapper,
                              children: (0, i.jsx)('code', {
                                  className: A.errorMessage,
                                  children: e.message
                              })
                          })
                  ]
              })
            : (0, i.jsx)(Z, {}, s);
    }
    constructor(...e) {
        super(...e),
            _(this, 'state', {
                error: null,
                renderKey: 0
            }),
            _(this, 'handleResetState', () => {
                this.setState((e) => ({
                    error: null,
                    renderKey: e.renderKey + 1
                }));
            });
    }
}
s.Z = B;
