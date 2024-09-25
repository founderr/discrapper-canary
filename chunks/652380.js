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
    A = t(134483),
    m = t(683650),
    C = t(478977),
    g = t(456799),
    h = t(210851),
    O = t(602683),
    p = t(916028),
    R = t(815183),
    x = t(899457),
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
function j() {
    var e, s, t, r, o;
    let [l, c] = a.useState(v),
        [M, Z] = a.useState(x.a.UNENROLLED),
        [j, B] = a.useState(!1),
        [U, G] = a.useState(!1),
        [F, y] = a.useState(null);
    let V =
        ((o = l.config),
        (0, i.EQ)(o)
            .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
            .exhaustive());
    function Y(e, s) {
        var t, n;
        if ('hero' === e || 'questBarHero' === e || 'gameTile' === e || 'logotype' === e || 'heroVideo' === e || 'questBarHeroVideo' === e)
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
    function w(e, s) {
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
    function k(e, s, t) {
        var n, a, r;
        if ('name' === e || 'nameWithArticle' === e)
            c({
                ...l,
                config:
                    ((n = l.config),
                    (a = { [e]: s }),
                    (r = t),
                    (0, i.EQ)(n)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            rewardsConfig: {
                                ...e.rewardsConfig,
                                rewards: e.rewardsConfig.rewards.map((e, s) =>
                                    s === r
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
    function H(e, s) {
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
                className: f.heading,
                children: 'Quest Preview Tool'
            }),
            (0, n.jsx)('div', {
                className: f.fields,
                children: (0, n.jsx)(p.Z, {
                    onSelect: function (e) {
                        if ((y(e), null != e)) c(e);
                    },
                    quest: F
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
                    (0, n.jsx)(O.Z, {
                        title: 'Quest Name',
                        assetKey: 'questName',
                        onMessageChange: w,
                        initialValue: l.config.messages.questName
                    }),
                    (0, n.jsx)(O.Z, {
                        title: 'Game Title',
                        assetKey: 'gameTitle',
                        onMessageChange: w,
                        initialValue: l.config.messages.gameTitle
                    }),
                    (0, n.jsx)(O.Z, {
                        title: 'Game Publisher',
                        assetKey: 'gamePublisher',
                        onMessageChange: w,
                        initialValue: l.config.messages.gamePublisher
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
                    (0, n.jsx)(h.Z, {
                        title: 'Hero',
                        assetKey: 'hero',
                        onFileChange: Y,
                        filters: L,
                        initialValue: l.config.assets.hero
                    }),
                    (0, n.jsx)(h.Z, {
                        title: 'Hero Video (optional)',
                        assetKey: 'heroVideo',
                        onFileChange: Y,
                        filters: L,
                        initialValue: null !== (t = l.config.assets.heroVideo) && void 0 !== t ? t : void 0
                    }),
                    (0, n.jsx)(h.Z, {
                        title: 'Quest Bar Hero',
                        assetKey: 'questBarHero',
                        onFileChange: Y,
                        filters: L,
                        initialValue: l.config.assets.questBarHero
                    }),
                    (0, n.jsx)(h.Z, {
                        title: 'Quest Bar Hero Video (optional)',
                        assetKey: 'questBarHeroVideo',
                        onFileChange: Y,
                        filters: L,
                        initialValue: null !== (r = l.config.assets.questBarHeroVideo) && void 0 !== r ? r : void 0
                    }),
                    (0, n.jsx)(h.Z, {
                        title: 'Game Tile',
                        assetKey: 'gameTile',
                        onFileChange: Y,
                        filters: P,
                        initialValue: l.config.assets.gameTile
                    }),
                    (0, n.jsx)(h.Z, {
                        title: 'Logotype',
                        assetKey: 'logotype',
                        onFileChange: Y,
                        filters: D,
                        initialValue: l.config.assets.logotype
                    })
                ]
            }),
            V.map((e, s) =>
                (0, n.jsxs)(
                    'div',
                    {
                        children: [
                            (0, n.jsxs)(d.Heading, {
                                variant: 'heading-md/semibold',
                                className: f.subheading,
                                children: ['Reward #', s + 1]
                            }),
                            (0, n.jsxs)('div', {
                                className: f.fields,
                                children: [
                                    (0, n.jsx)(O.Z, {
                                        title: 'Name',
                                        assetKey: 'name',
                                        onMessageChange: (e, t) => k(e, t, s),
                                        initialValue: e.messages.name
                                    }),
                                    (0, n.jsx)(O.Z, {
                                        title: 'Name With Article',
                                        assetKey: 'nameWithArticle',
                                        onMessageChange: (e, t) => k(e, t, s),
                                        initialValue: e.messages.nameWithArticle
                                    }),
                                    (0, n.jsx)(h.Z, {
                                        title: 'Asset',
                                        assetKey: 'asset',
                                        onFileChange: (e, t) =>
                                            (function (e, s, t) {
                                                var n, a, r;
                                                if ('asset' === e)
                                                    c({
                                                        ...l,
                                                        config:
                                                            ((n = l.config),
                                                            (a = s),
                                                            (r = t),
                                                            (0, i.EQ)(n)
                                                                .with({ configVersion: 2 }, (e) => ({
                                                                    ...e,
                                                                    rewardsConfig: {
                                                                        ...e.rewardsConfig,
                                                                        rewards: e.rewardsConfig.rewards.map((e, s) =>
                                                                            s === r
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
                                        filters: L,
                                        initialValue: e.asset
                                    })
                                ]
                            })
                        ]
                    },
                    s
                )
            ),
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
                            (0, n.jsx)(C.Z, {
                                title: 'Primary',
                                colorKey: 'primary',
                                onChange: H,
                                value: l.config.colors.primary
                            }),
                            (0, n.jsx)(C.Z, {
                                title: 'Secondary',
                                colorKey: 'secondary',
                                onChange: H,
                                value: l.config.colors.secondary
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: f.fields,
                        children: (0, n.jsx)(R.Z, {})
                    }),
                    (0, n.jsx)(x.Z, {
                        onChange: function (e) {
                            switch ((Z(e), e)) {
                                case x.a.UNENROLLED:
                                    c({
                                        ...l,
                                        userStatus: null
                                    });
                                    break;
                                case x.a.ENROLLED:
                                    c({
                                        ...l,
                                        userStatus: b({ enrolledAt: new Date().toISOString() })
                                    });
                                    break;
                                case x.a.COMPLETED_25:
                                    c({
                                        ...l,
                                        userStatus: b({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 10 * _.Z.Seconds.MINUTE * 0.25
                                        })
                                    });
                                    break;
                                case x.a.COMPLETED_50:
                                    c({
                                        ...l,
                                        userStatus: b({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 10 * _.Z.Seconds.MINUTE * 0.5
                                        })
                                    });
                                    break;
                                case x.a.COMPLETED_75:
                                    c({
                                        ...l,
                                        userStatus: b({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 10 * _.Z.Seconds.MINUTE * 0.75
                                        })
                                    });
                                    break;
                                case x.a.COMPLETED_100:
                                    c({
                                        ...l,
                                        userStatus: b({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 10 * _.Z.Seconds.MINUTE
                                        })
                                    });
                                    break;
                                case x.a.CLAIMED:
                                    c({
                                        ...l,
                                        userStatus: b({
                                            claimedAt: new Date().toISOString(),
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 10 * _.Z.Seconds.MINUTE
                                        })
                                    });
                            }
                        },
                        value: M
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
                    (0, n.jsxs)(g.Z, {
                        withBorder: !0,
                        children: [
                            (0, n.jsx)(d.FormTitle, { children: 'Quest Bar' }),
                            (0, n.jsxs)('div', {
                                className: f.questBarPreviewWrapper,
                                children: [
                                    (null === (e = l.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null &&
                                        (0, n.jsx)(d.Text, {
                                            color: 'text-secondary',
                                            variant: 'text-sm/normal',
                                            children: 'The Quest Bar is hidden when the user has claimed the reward.'
                                        }),
                                    (0, n.jsx)('div', {
                                        className: f.questBarPreview,
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
                        withBorder: !0,
                        children: [
                            (0, n.jsx)(d.FormTitle, { children: 'Quest Home Card' }),
                            (0, n.jsx)(I.p, {
                                isPreview: !0,
                                source: 'preview',
                                questId: '0',
                                children: (0, n.jsx)(S.Z, {
                                    quest: l,
                                    className: f.questTile,
                                    questContent: u.jn.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0
                                })
                            })
                        ]
                    }),
                    (0, n.jsxs)(g.Z, {
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
                                className: f.questBarPreviewWrapper,
                                children: (0, n.jsx)(I.p, {
                                    isPreview: !0,
                                    source: 'preview',
                                    questId: '0',
                                    children: (0, n.jsx)('div', {
                                        className: f.questChannelCallHeaderPreview,
                                        children: (0, n.jsx)(A.Z, {
                                            channelId: '123',
                                            previewQuest: l,
                                            isParticipatingOverride: j
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: f.toggleSwitch,
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
                    }),
                    (0, n.jsxs)(g.Z, {
                        withBorder: !0,
                        children: [
                            (0, n.jsx)(d.FormTitle, { children: 'Quest Card Embed' }),
                            U
                                ? (0, n.jsx)(m.o, {})
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
                        className: f.toggleSwitch,
                        children: (0, n.jsx)(d.FormItem, {
                            children: (0, n.jsx)(d.FormSwitch, {
                                value: U,
                                onChange: G,
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
