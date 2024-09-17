t(47120), t(627341);
var n = t(735250),
    a = t(470079),
    i = t(278074),
    r = t(754700),
    o = t(887003),
    l = t(742635),
    c = t(458708),
    d = t(481060),
    _ = t(70956),
    u = t(497505),
    E = t(210724),
    T = t(130653),
    S = t(415104),
    I = t(78826),
    N = t(37303),
    m = t(134483),
    C = t(683650),
    A = t(478977),
    g = t(456799),
    h = t(210851),
    O = t(602683),
    p = t(916028),
    R = t(15033),
    x = t(815183),
    f = t(899457),
    M = t(231338),
    D = t(720778);
function P(e, s, t) {
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
let L = ['svg', 'png', 'gif', 'webp'],
    b = [...L, 'jpg', 'jpeg'],
    Z = Array.from(new Set([...b, 'gif', 'mp4', 'webm']));
function v() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: s = 0, completedAt: t = null, enrolledAt: n = null, claimedAt: a = null } = e;
    return {
        userId: '123',
        questId: '1193992107035983872',
        enrolledAt: n,
        completedAt: t,
        claimedAt: a,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: s,
        dismissedQuestContent: 0,
        progress: {}
    };
}
let j = '1193992107035983872',
    B = {
        id: j,
        preview: !0,
        config: {
            id: j,
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
                        type: o.w.REWARD_CODE,
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
                type: l.L.FIRST_PARTY,
                joinOperator: c.r.AND,
                tasks: {
                    [r.X.PLAY_ON_DESKTOP]: {
                        eventName: r.X.PLAY_ON_DESKTOP,
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
function U() {
    var e, s, t, r, o;
    let [l, c] = a.useState(B),
        [P, j] = a.useState(f.a.UNENROLLED),
        [U, G] = a.useState([]),
        [F, y] = a.useState(!1),
        [V, Y] = a.useState(!1),
        [w, k] = a.useState(null),
        [H, W] = a.useState(M.BR.DARK);
    let K =
        ((o = l.config),
        (0, i.EQ)(o)
            .with({ configVersion: 2 }, (e) => {
                let s = e.rewardsConfig.rewards[0];
                return {
                    ...s.messages,
                    rewardTile: s.asset
                };
            })
            .exhaustive());
    a.useEffect(() => {
        var e;
        G(
            ((e = l.config),
            (0, i.EQ)(e)
                .with({ configVersion: 2 }, (e) => e.features)
                .exhaustive())
        );
    }, [l]);
    function z(e, s) {
        var t, n;
        if ('hero' === e || 'questBarHero' === e || 'gameTile' === e || 'logotype' === e)
            c({
                ...l,
                config:
                    ((t = l.config),
                    (n = { [e]: s }),
                    (0, i.EQ)(t)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            assets: {
                                ...e.assets,
                                ...n
                            }
                        }))
                        .exhaustive())
            });
    }
    function Q(e, s) {
        var t, n;
        if ('questName' === e || 'gameTitle' === e || 'gamePublisher' === e)
            c({
                ...l,
                config:
                    ((t = l.config),
                    (n = { [e]: s }),
                    (0, i.EQ)(t)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            messages: {
                                ...e.messages,
                                ...n
                            }
                        }))
                        .exhaustive())
            });
    }
    function X(e, s) {
        var t, n;
        if ('rewardName' === e || 'rewardNameWithArticle' === e)
            c({
                ...l,
                config:
                    ((t = l.config),
                    (n = { [e]: s }),
                    (0, i.EQ)(t)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            rewardsConfig: {
                                ...e.rewardsConfig,
                                rewards: e.rewardsConfig.rewards.map((e, s) =>
                                    0 === s
                                        ? {
                                              ...e,
                                              messages: {
                                                  ...e.messages,
                                                  ...n
                                              }
                                          }
                                        : e
                                )
                            }
                        }))
                        .exhaustive())
            });
    }
    function q(e, s) {
        c({
            ...l,
            config: {
                ...l.config,
                colors: {
                    ...l.config.colors,
                    [e]: s
                }
            }
        });
    }
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsx)(d.Heading, {
                variant: 'heading-lg/bold',
                className: D.heading,
                children: 'Quest Preview Tool'
            }),
            (0, n.jsx)('div', {
                className: D.fields,
                children: (0, n.jsx)(p.Z, {
                    onSelect: function (e) {
                        if ((k(e), null != e)) c(e);
                    },
                    quest: w
                })
            }),
            (0, n.jsx)(d.Heading, {
                variant: 'heading-md/semibold',
                className: D.subheading,
                children: 'Messages'
            }),
            (0, n.jsxs)('div', {
                className: D.fields,
                children: [
                    (0, n.jsx)(O.Z, {
                        title: 'Quest Name',
                        assetKey: 'questName',
                        onMessageChange: Q,
                        initialValue: l.config.messages.questName
                    }),
                    (0, n.jsx)(O.Z, {
                        title: 'Game Title',
                        assetKey: 'gameTitle',
                        onMessageChange: Q,
                        initialValue: l.config.messages.gameTitle
                    }),
                    (0, n.jsx)(O.Z, {
                        title: 'Game Publisher',
                        assetKey: 'gamePublisher',
                        onMessageChange: Q,
                        initialValue: l.config.messages.gamePublisher
                    }),
                    (0, n.jsx)(O.Z, {
                        title: 'Reward Name',
                        assetKey: 'rewardName',
                        onMessageChange: X,
                        initialValue: K.name
                    }),
                    (0, n.jsx)(O.Z, {
                        title: 'Reward Name With Article',
                        assetKey: 'rewardNameWithArticle',
                        onMessageChange: X,
                        initialValue: K.nameWithArticle
                    })
                ]
            }),
            (0, n.jsx)(d.Heading, {
                variant: 'heading-md/semibold',
                className: D.subheading,
                children: 'Assets'
            }),
            (0, n.jsxs)('div', {
                className: D.fields,
                children: [
                    (0, n.jsx)(h.Z, {
                        title: 'Hero',
                        assetKey: 'hero',
                        onFileChange: z,
                        filters: Z,
                        initialValue: l.config.assets.hero
                    }),
                    (0, n.jsx)(h.Z, {
                        title: 'Hero Video',
                        assetKey: 'heroVideo',
                        onFileChange: z,
                        filters: Z,
                        initialValue: null !== (t = l.config.assets.heroVideo) && void 0 !== t ? t : void 0
                    }),
                    (0, n.jsx)(h.Z, {
                        title: 'Quest Bar Hero',
                        assetKey: 'questBarHero',
                        onFileChange: z,
                        filters: Z,
                        initialValue: l.config.assets.questBarHero
                    }),
                    (0, n.jsx)(h.Z, {
                        title: 'Quest Bar Hero Video',
                        assetKey: 'questBarHeroVideo',
                        onFileChange: z,
                        filters: Z,
                        initialValue: null !== (r = l.config.assets.questBarHeroVideo) && void 0 !== r ? r : void 0
                    }),
                    (0, n.jsx)(h.Z, {
                        title: 'Game Tile',
                        assetKey: 'gameTile',
                        onFileChange: z,
                        filters: b,
                        initialValue: l.config.assets.gameTile
                    }),
                    (0, n.jsx)(h.Z, {
                        title: 'Logotype',
                        assetKey: 'logotype',
                        onFileChange: z,
                        filters: L,
                        initialValue: l.config.assets.logotype
                    }),
                    (0, n.jsx)(h.Z, {
                        title: 'Reward Tile',
                        assetKey: 'rewardTile',
                        onFileChange: function (e, s) {
                            var t, n;
                            if ('rewardTile' === e)
                                c({
                                    ...l,
                                    config:
                                        ((t = l.config),
                                        (n = { [e]: s }),
                                        (0, i.EQ)(t)
                                            .with({ configVersion: 2 }, (e) => ({
                                                ...e,
                                                assets: {
                                                    ...e.assets,
                                                    ...n
                                                },
                                                rewardsConfig: {
                                                    ...e.rewardsConfig,
                                                    rewards: e.rewardsConfig.rewards.map((e, s) =>
                                                        0 === s
                                                            ? {
                                                                  ...e,
                                                                  asset: n.rewardTile
                                                              }
                                                            : e
                                                    )
                                                }
                                            }))
                                            .exhaustive())
                                });
                        },
                        filters: Z,
                        initialValue: K.rewardTile
                    })
                ]
            }),
            (0, n.jsx)('div', {
                className: D.fields,
                children: (0, n.jsx)('div', {
                    className: D.fullWidthField,
                    children: (0, n.jsx)(R.Z, {
                        onChange: function (e) {
                            var s, t;
                            c({
                                ...l,
                                config:
                                    ((s = l.config),
                                    (t = e),
                                    (0, i.EQ)(s)
                                        .with({ configVersion: 2 }, (e) => ({
                                            ...e,
                                            features: t
                                        }))
                                        .exhaustive())
                            }),
                                G(e);
                        },
                        values: U
                    })
                })
            }),
            (0, n.jsx)(d.Heading, {
                variant: 'heading-md/semibold',
                className: D.subheading,
                children: 'Colors & Quest States'
            }),
            (0, n.jsxs)('div', {
                className: D.fields,
                children: [
                    (0, n.jsxs)('div', {
                        className: D.fields,
                        style: { marginBottom: 0 },
                        children: [
                            (0, n.jsx)(A.Z, {
                                title: 'Primary',
                                colorKey: 'primary',
                                onChange: q,
                                value: l.config.colors.primary
                            }),
                            (0, n.jsx)(A.Z, {
                                title: 'Secondary',
                                colorKey: 'secondary',
                                onChange: q,
                                value: l.config.colors.secondary
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: D.fields,
                        children: (0, n.jsx)(x.Z, {
                            onSelect: W,
                            theme: H
                        })
                    }),
                    (0, n.jsx)(f.Z, {
                        onChange: function (e) {
                            switch ((j(e), e)) {
                                case f.a.UNENROLLED:
                                    c({
                                        ...l,
                                        userStatus: null
                                    });
                                    break;
                                case f.a.ENROLLED:
                                    c({
                                        ...l,
                                        userStatus: v({ enrolledAt: new Date().toISOString() })
                                    });
                                    break;
                                case f.a.COMPLETED_25:
                                    c({
                                        ...l,
                                        userStatus: v({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 10 * _.Z.Seconds.MINUTE * 0.25
                                        })
                                    });
                                    break;
                                case f.a.COMPLETED_50:
                                    c({
                                        ...l,
                                        userStatus: v({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 10 * _.Z.Seconds.MINUTE * 0.5
                                        })
                                    });
                                    break;
                                case f.a.COMPLETED_75:
                                    c({
                                        ...l,
                                        userStatus: v({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 10 * _.Z.Seconds.MINUTE * 0.75
                                        })
                                    });
                                    break;
                                case f.a.COMPLETED_100:
                                    c({
                                        ...l,
                                        userStatus: v({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 10 * _.Z.Seconds.MINUTE
                                        })
                                    });
                                    break;
                                case f.a.CLAIMED:
                                    c({
                                        ...l,
                                        userStatus: v({
                                            claimedAt: new Date().toISOString(),
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 10 * _.Z.Seconds.MINUTE
                                        })
                                    });
                            }
                        },
                        value: P
                    })
                ]
            }),
            (0, n.jsx)(d.Heading, {
                variant: 'heading-lg/bold',
                className: D.heading,
                children: 'Component Previews'
            }),
            (0, n.jsxs)('div', {
                className: D.componentPreviews,
                children: [
                    (0, n.jsxs)(g.Z, {
                        theme: H,
                        withBorder: !0,
                        children: [
                            (0, n.jsx)(d.FormTitle, { children: 'Quest Bar' }),
                            (0, n.jsxs)('div', {
                                className: D.questBarPreviewWrapper,
                                children: [
                                    (null === (e = l.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null &&
                                        (0, n.jsx)(d.Text, {
                                            color: 'text-secondary',
                                            variant: 'text-sm/normal',
                                            children: 'The Quest Bar is hidden when the user has claimed the reward.'
                                        }),
                                    (0, n.jsx)('div', {
                                        className: D.questBarPreview,
                                        children: (0, n.jsx)(I.p, {
                                            isPreview: !0,
                                            source: 'preview',
                                            questId: '0',
                                            children: (0, n.jsx)(T.Z, { children: (0, n.jsx)(E.P, { quest: l }) })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsxs)(g.Z, {
                        theme: H,
                        withBorder: !0,
                        children: [
                            (0, n.jsx)(d.FormTitle, { children: 'Quest Home Card' }),
                            (0, n.jsx)(I.p, {
                                isPreview: !0,
                                source: 'preview',
                                questId: '0',
                                children: (0, n.jsx)(S.Z, {
                                    quest: l,
                                    className: D.questTile,
                                    questContent: u.jn.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0
                                })
                            })
                        ]
                    }),
                    (0, n.jsxs)(g.Z, {
                        theme: H,
                        withBorder: !0,
                        children: [
                            (0, n.jsx)(d.FormTitle, { children: 'Channel Call Header' }),
                            (null === (s = l.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null &&
                                (0, n.jsx)(d.Text, {
                                    color: 'text-secondary',
                                    variant: 'text-sm/normal',
                                    children: 'The Quest Channel Call Header is hidden when the user has claimed the reward.'
                                }),
                            (0, n.jsx)('div', {
                                className: D.questBarPreviewWrapper,
                                children: (0, n.jsx)(I.p, {
                                    isPreview: !0,
                                    source: 'preview',
                                    questId: '0',
                                    children: (0, n.jsx)('div', {
                                        className: D.questChannelCallHeaderPreview,
                                        children: (0, n.jsx)(m.Z, {
                                            channelId: '123',
                                            previewQuest: l,
                                            isParticipatingOverride: F
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: D.toggleSwitch,
                        children: (0, n.jsx)(d.FormItem, {
                            children: (0, n.jsx)(d.FormSwitch, {
                                value: F,
                                onChange: function (e) {
                                    y(e);
                                },
                                hideBorder: !0,
                                children: 'Is Participating:'
                            })
                        })
                    }),
                    (0, n.jsxs)(g.Z, {
                        theme: H,
                        withBorder: !0,
                        children: [
                            (0, n.jsx)(d.FormTitle, { children: 'Quest Card Embed' }),
                            V
                                ? (0, n.jsx)(C.o, {})
                                : (0, n.jsx)(
                                      N.Z,
                                      {
                                          quest: l,
                                          location: u.jn.QUESTS_EMBED
                                      },
                                      l.id
                                  )
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: D.toggleSwitch,
                        children: (0, n.jsx)(d.FormItem, {
                            children: (0, n.jsx)(d.FormSwitch, {
                                value: V,
                                onChange: Y,
                                hideBorder: !0,
                                children: 'Invalid Quests Embed:'
                            })
                        })
                    })
                ]
            })
        ]
    });
}
class G extends a.Component {
    componentDidCatch(e) {
        this.setState({ error: e });
    }
    render() {
        let { error: e, renderKey: s } = this.state;
        return null != e
            ? (0, n.jsxs)('div', {
                  className: D.errorBoundary,
                  children: [
                      (0, n.jsx)(d.CircleWarningIcon, { className: D.errorBoundaryIcon }),
                      (0, n.jsx)(d.Heading, {
                          variant: 'heading-lg/semibold',
                          children: 'Something broke in the Quest preview tool :('
                      }),
                      (0, n.jsx)(d.Button, {
                          color: d.ButtonColors.PRIMARY,
                          onClick: this.handleResetState,
                          children: 'Reset'
                      }),
                      null != e.message &&
                          (0, n.jsx)(d.Card, {
                              className: D.errorMessageWrapper,
                              children: (0, n.jsx)('code', {
                                  className: D.errorMessage,
                                  children: e.message
                              })
                          })
                  ]
              })
            : (0, n.jsx)(U, {}, s);
    }
    constructor(...e) {
        super(...e),
            P(this, 'state', {
                error: null,
                renderKey: 0
            }),
            P(this, 'handleResetState', () => {
                this.setState((e) => ({
                    error: null,
                    renderKey: e.renderKey + 1
                }));
            });
    }
}
s.Z = G;
