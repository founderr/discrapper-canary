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
    S = t(78826),
    I = t(37303),
    N = t(134483),
    m = t(478977),
    C = t(456799),
    A = t(210851),
    g = t(602683),
    h = t(916028),
    O = t(15033),
    p = t(815183),
    R = t(899457),
    x = t(231338),
    f = t(720778);
function M(e, s, t) {
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
let D = ['svg', 'png', 'gif', 'webp'],
    P = [...D, 'jpg', 'jpeg'],
    L = Array.from(new Set([...P, 'gif', 'mp4', 'webm']));
function b() {
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
let Z = '1193992107035983872',
    v = {
        id: Z,
        preview: !0,
        config: {
            id: Z,
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
                questBarHero: 'quests_bar_hero.webm',
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
function j() {
    var e, s, t;
    let [r, o] = a.useState(v),
        [l, c] = a.useState(R.a.UNENROLLED),
        [M, Z] = a.useState([]),
        [j, B] = a.useState(!1),
        [U, G] = a.useState(null),
        [F, y] = a.useState(x.BR.DARK);
    let V =
        ((t = r.config),
        (0, i.EQ)(t)
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
        Z(
            ((e = r.config),
            (0, i.EQ)(e)
                .with({ configVersion: 2 }, (e) => e.features)
                .exhaustive())
        );
    }, [r]);
    function Y(e, s) {
        var t, n;
        if ('hero' === e || 'questBarHero' === e || 'gameTile' === e || 'logotype' === e)
            o({
                ...r,
                config:
                    ((t = r.config),
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
    function w(e, s) {
        var t, n;
        if ('questName' === e || 'gameTitle' === e || 'gamePublisher' === e)
            o({
                ...r,
                config:
                    ((t = r.config),
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
    function k(e, s) {
        var t, n;
        if ('rewardName' === e || 'rewardNameWithArticle' === e)
            o({
                ...r,
                config:
                    ((t = r.config),
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
    function H(e, s) {
        o({
            ...r,
            config: {
                ...r.config,
                colors: {
                    ...r.config.colors,
                    [e]: s
                }
            }
        });
    }
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsx)(d.Heading, {
                variant: 'heading-lg/bold',
                className: f.heading,
                children: 'Quest Preview Tool'
            }),
            (0, n.jsx)('div', {
                className: f.fields,
                children: (0, n.jsx)(h.Z, {
                    onSelect: function (e) {
                        if ((G(e), null != e)) o(e);
                    },
                    quest: U
                })
            }),
            (0, n.jsx)(d.Heading, {
                variant: 'heading-md/semibold',
                className: f.subheading,
                children: 'Messages'
            }),
            (0, n.jsxs)('div', {
                className: f.fields,
                children: [
                    (0, n.jsx)(g.Z, {
                        title: 'Quest Name',
                        assetKey: 'questName',
                        onMessageChange: w,
                        initialValue: r.config.messages.questName
                    }),
                    (0, n.jsx)(g.Z, {
                        title: 'Game Title',
                        assetKey: 'gameTitle',
                        onMessageChange: w,
                        initialValue: r.config.messages.gameTitle
                    }),
                    (0, n.jsx)(g.Z, {
                        title: 'Reward Name',
                        assetKey: 'rewardName',
                        onMessageChange: k,
                        initialValue: V.name
                    }),
                    (0, n.jsx)(g.Z, {
                        title: 'Reward Name With Article',
                        assetKey: 'rewardNameWithArticle',
                        onMessageChange: k,
                        initialValue: V.nameWithArticle
                    })
                ]
            }),
            (0, n.jsx)(d.Heading, {
                variant: 'heading-md/semibold',
                className: f.subheading,
                children: 'Assets'
            }),
            (0, n.jsxs)('div', {
                className: f.fields,
                children: [
                    (0, n.jsx)(A.Z, {
                        title: 'Game Tile Asset',
                        assetKey: 'gameTile',
                        onFileChange: Y,
                        filters: P,
                        initialValue: r.config.assets.gameTile
                    }),
                    (0, n.jsx)(A.Z, {
                        title: 'Logotype',
                        assetKey: 'logotype',
                        onFileChange: Y,
                        filters: D,
                        initialValue: r.config.assets.logotype
                    }),
                    (0, n.jsx)(A.Z, {
                        title: 'Quest Bar Hero Asset',
                        assetKey: 'questBarHero',
                        onFileChange: Y,
                        filters: L,
                        initialValue: r.config.assets.questBarHero
                    }),
                    (0, n.jsx)(A.Z, {
                        title: 'Reward Tile Asset',
                        assetKey: 'rewardTile',
                        onFileChange: function (e, s) {
                            var t, n;
                            if ('rewardTile' === e)
                                o({
                                    ...r,
                                    config:
                                        ((t = r.config),
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
                        filters: L,
                        initialValue: V.rewardTile
                    }),
                    (0, n.jsx)(A.Z, {
                        title: 'Gift Inventory Hero',
                        assetKey: 'hero',
                        onFileChange: Y,
                        filters: L,
                        initialValue: r.config.assets.hero
                    })
                ]
            }),
            (0, n.jsx)('div', {
                className: f.fields,
                children: (0, n.jsx)('div', {
                    className: f.fullWidthField,
                    children: (0, n.jsx)(O.Z, {
                        onChange: function (e) {
                            var s, t;
                            o({
                                ...r,
                                config:
                                    ((s = r.config),
                                    (t = e),
                                    (0, i.EQ)(s)
                                        .with({ configVersion: 2 }, (e) => ({
                                            ...e,
                                            features: t
                                        }))
                                        .exhaustive())
                            }),
                                Z(e);
                        },
                        values: M
                    })
                })
            }),
            (0, n.jsx)(d.Heading, {
                variant: 'heading-md/semibold',
                className: f.subheading,
                children: 'Colors & Quest States'
            }),
            (0, n.jsxs)('div', {
                className: f.fields,
                children: [
                    (0, n.jsxs)('div', {
                        className: f.fields,
                        style: { marginBottom: 0 },
                        children: [
                            (0, n.jsx)(m.Z, {
                                title: 'Primary',
                                colorKey: 'primary',
                                onChange: H,
                                value: r.config.colors.primary
                            }),
                            (0, n.jsx)(m.Z, {
                                title: 'Secondary',
                                colorKey: 'secondary',
                                onChange: H,
                                value: r.config.colors.secondary
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: f.fields,
                        children: (0, n.jsx)(p.Z, {
                            onSelect: y,
                            theme: F
                        })
                    }),
                    (0, n.jsx)(R.Z, {
                        onChange: function (e) {
                            switch ((c(e), e)) {
                                case R.a.UNENROLLED:
                                    o({
                                        ...r,
                                        userStatus: null
                                    });
                                    break;
                                case R.a.ENROLLED:
                                    o({
                                        ...r,
                                        userStatus: b({ enrolledAt: new Date().toISOString() })
                                    });
                                    break;
                                case R.a.COMPLETED_25:
                                    o({
                                        ...r,
                                        userStatus: b({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 10 * _.Z.Seconds.MINUTE * 0.25
                                        })
                                    });
                                    break;
                                case R.a.COMPLETED_50:
                                    o({
                                        ...r,
                                        userStatus: b({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 10 * _.Z.Seconds.MINUTE * 0.5
                                        })
                                    });
                                    break;
                                case R.a.COMPLETED_75:
                                    o({
                                        ...r,
                                        userStatus: b({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 10 * _.Z.Seconds.MINUTE * 0.75
                                        })
                                    });
                                    break;
                                case R.a.COMPLETED_100:
                                    o({
                                        ...r,
                                        userStatus: b({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 10 * _.Z.Seconds.MINUTE
                                        })
                                    });
                                    break;
                                case R.a.CLAIMED:
                                    o({
                                        ...r,
                                        userStatus: b({
                                            claimedAt: new Date().toISOString(),
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 10 * _.Z.Seconds.MINUTE
                                        })
                                    });
                            }
                        },
                        value: l
                    })
                ]
            }),
            (0, n.jsx)(d.Heading, {
                variant: 'heading-lg/bold',
                className: f.heading,
                children: 'Component Previews'
            }),
            (0, n.jsxs)('div', {
                className: f.componentPreviews,
                children: [
                    (0, n.jsxs)(C.Z, {
                        theme: F,
                        withBorder: !0,
                        children: [
                            (0, n.jsx)(d.FormTitle, { children: 'Quest Bar' }),
                            (0, n.jsxs)('div', {
                                className: f.questBarPreviewWrapper,
                                children: [
                                    (null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null &&
                                        (0, n.jsx)(d.Text, {
                                            color: 'text-secondary',
                                            variant: 'text-sm/normal',
                                            children: 'The Quest Bar is hidden when the user has claimed the reward.'
                                        }),
                                    (0, n.jsx)('div', {
                                        className: f.questBarPreview,
                                        children: (0, n.jsx)(S.p, {
                                            isPreview: !0,
                                            source: 'preview',
                                            questId: '0',
                                            children: (0, n.jsx)(T.Z, { children: (0, n.jsx)(E.P, { quest: r }) })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsxs)(C.Z, {
                        theme: F,
                        withBorder: !0,
                        children: [
                            (0, n.jsx)(d.FormTitle, { children: 'Gift Inventory' }),
                            (0, n.jsx)(S.p, {
                                isPreview: !0,
                                source: 'preview',
                                questId: '0',
                                children: (0, n.jsx)(I.Z, {
                                    quest: r,
                                    location: u.jn.GIFT_INVENTORY_FOR_YOU
                                })
                            })
                        ]
                    }),
                    (0, n.jsxs)(C.Z, {
                        theme: F,
                        withBorder: !0,
                        children: [
                            (0, n.jsx)(d.FormTitle, { children: 'Channel Call Header' }),
                            (null === (s = r.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null &&
                                (0, n.jsx)(d.Text, {
                                    color: 'text-secondary',
                                    variant: 'text-sm/normal',
                                    children: 'The Quest Channel Call Header is hidden when the user has claimed the reward.'
                                }),
                            (0, n.jsx)('div', {
                                className: f.questBarPreviewWrapper,
                                children: (0, n.jsx)(S.p, {
                                    isPreview: !0,
                                    source: 'preview',
                                    questId: '0',
                                    children: (0, n.jsx)('div', {
                                        className: f.questChannelCallHeaderPreview,
                                        children: (0, n.jsx)(N.Z, {
                                            channelId: '123',
                                            previewQuest: r,
                                            isParticipatingOverride: j
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: f.channelCallParticipationToggle,
                        children: (0, n.jsx)(d.FormItem, {
                            children: (0, n.jsx)(d.FormSwitch, {
                                value: j,
                                onChange: function (e) {
                                    B(e);
                                },
                                hideBorder: !0,
                                children: 'Is Participating:'
                            })
                        })
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
            ? (0, n.jsxs)('div', {
                  className: f.errorBoundary,
                  children: [
                      (0, n.jsx)(d.CircleWarningIcon, { className: f.errorBoundaryIcon }),
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
                              className: f.errorMessageWrapper,
                              children: (0, n.jsx)('code', {
                                  className: f.errorMessage,
                                  children: e.message
                              })
                          })
                  ]
              })
            : (0, n.jsx)(j, {}, s);
    }
    constructor(...e) {
        super(...e),
            M(this, 'state', {
                error: null,
                renderKey: 0
            }),
            M(this, 'handleResetState', () => {
                this.setState((e) => ({
                    error: null,
                    renderKey: e.renderKey + 1
                }));
            });
    }
}
s.Z = B;
