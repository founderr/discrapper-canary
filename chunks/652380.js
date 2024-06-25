t(47120), t(627341);
var n = t(735250),
  a = t(470079),
  i = t(278074),
  r = t(481060),
  o = t(70956),
  l = t(497505),
  c = t(210724),
  d = t(130653),
  _ = t(78826),
  E = t(37303),
  u = t(134483),
  T = t(478977),
  S = t(456799),
  I = t(210851),
  N = t(602683),
  C = t(916028),
  A = t(15033),
  m = t(899457),
  O = t(614771);

function g(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let h = ["svg", "png", "gif", "webp"],
  R = [...h, "jpg", "jpeg"],
  p = Array.from(new Set([...R, "gif", "mp4", "webm"]));

function x() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    {
      streamProgressSeconds: s = 0,
      completedAt: t = null,
      enrolledAt: n = null,
      claimedAt: a = null
    } = e;
  return {
    userId: "123",
    questId: "1193992107035983872",
    enrolledAt: n,
    completedAt: t,
    claimedAt: a,
    claimedTier: null,
    lastStreamHeartbeatAt: null,
    streamProgressSeconds: s,
    dismissedQuestContent: 0,
    progress: {}
  }
}
let M = {
  id: "1193992107035983872",
  preview: !0,
  config: {
    configVersion: 1,
    expiresAt: "2030-06-01T00:00:00+00:00",
    streamDurationRequirementMinutes: 10,
    getGameLink: "https://discord.com/",
    applicationId: "123",
    applicationName: "Sky Runners",
    gameTitle: "Sky Runners",
    messages: {
      questName: "Sky Runners",
      rewardName: "Orange Buddy Jetpack",
      rewardNameWithArticle: "an Orange Buddy Jetpack",
      rewardRedemptionInstructionsByPlatform: {
        0: "This code can be used on any platform!",
        1: "Redeem your code on your Xbox.",
        2: "Redeem your code on your Playstation.",
        3: "Redeem your code on your Switch.",
        4: "Redeem your code on your PC."
      },
      gameTitle: "Sky Runners",
      gamePublisher: "Discord"
    },
    colors: {
      primary: "#B377F3",
      secondary: "#5865F2"
    },
    rewardsConfig: {
      assignmentMethod: 1,
      rewards: []
    },
    rewardCodeExpiresAt: "2030-07-01T00:00:00+00:00",
    rewardCodePlatforms: [0, 4, 2, 3, 1],
    assets: {
      rewardTile: "reward.png",
      hero: "hero.png",
      questBarHero: "quests_bar_hero.webm",
      gameTile: "game_tile.png",
      logotype: "game_logotype.png"
    },
    inGameQuestConfig: null,
    variants: [],
    supplementaryApplicationIds: []
  },
  userStatus: null,
  targetedContent: []
};

function D() {
  var e, s, t;
  let [g, D] = a.useState(M), [f, L] = a.useState(m.a.UNENROLLED), [P, Z] = a.useState([]), [v, b] = a.useState(!1), [j, U] = a.useState(null);
  let B = (t = g.config, (0, i.EQ)(t).with({
    configVersion: 1
  }, e => ({
    name: e.messages.rewardName,
    nameWithArticle: e.messages.rewardNameWithArticle,
    redemptionInstructionsByPlatform: e.messages.rewardRedemptionInstructionsByPlatform,
    rewardTile: e.assets.rewardTile
  })).with({
    configVersion: 2
  }, e => {
    let s = e.rewardsConfig.rewards[0];
    return {
      ...s.messages,
      rewardTile: s.asset
    }
  }).exhaustive());
  a.useEffect(() => {
    var e;
    Z((e = g.config, (0, i.EQ)(e).with({
      configVersion: 1
    }, e => e.variants).with({
      configVersion: 2
    }, e => e.features).exhaustive()))
  }, [g]);

  function G(e, s) {
    var t, n;
    if ("hero" === e || "questBarHero" === e || "gameTile" === e || "logotype" === e) D({
      ...g,
      config: (t = g.config, n = {
        [e]: s
      }, (0, i.EQ)(t).with({
        configVersion: 1
      }, e => ({
        ...e,
        assets: {
          ...e.assets,
          ...n
        }
      })).with({
        configVersion: 2
      }, e => ({
        ...e,
        assets: {
          ...e.assets,
          ...n
        }
      })).exhaustive())
    })
  }

  function F(e, s) {
    var t, n;
    if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) D({
      ...g,
      config: (t = g.config, n = {
        [e]: s
      }, (0, i.EQ)(t).with({
        configVersion: 1
      }, e => ({
        ...e,
        messages: {
          ...e.messages,
          ...n
        }
      })).with({
        configVersion: 2
      }, e => ({
        ...e,
        messages: {
          ...e.messages,
          ...n
        }
      })).exhaustive())
    })
  }

  function V(e, s) {
    var t, n;
    if ("rewardName" === e || "rewardNameWithArticle" === e) D({
      ...g,
      config: (t = g.config, n = {
        [e]: s
      }, (0, i.EQ)(t).with({
        configVersion: 1
      }, e => ({
        ...e,
        messages: {
          ...e.messages,
          ...n
        }
      })).with({
        configVersion: 2
      }, e => ({
        ...e,
        rewardsConfig: {
          ...e.rewardsConfig,
          rewards: e.rewardsConfig.rewards.map((e, s) => 0 === s ? {
            ...e,
            messages: {
              ...e.messages,
              ...n
            }
          } : e)
        }
      })).exhaustive())
    })
  }

  function y(e, s) {
    D({
      ...g,
      config: {
        ...g.config,
        colors: {
          ...g.config.colors,
          [e]: s
        }
      }
    })
  }
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(r.Heading, {
      variant: "heading-lg/bold",
      className: O.heading,
      children: "Quest Preview Tool"
    }), (0, n.jsx)("div", {
      className: O.fields,
      children: (0, n.jsx)(C.Z, {
        onSelect: function(e) {
          if (U(e), null != e) D(e)
        },
        quest: j
      })
    }), (0, n.jsx)(r.Heading, {
      variant: "heading-md/semibold",
      className: O.subheading,
      children: "Messages"
    }), (0, n.jsxs)("div", {
      className: O.fields,
      children: [(0, n.jsx)(N.Z, {
        title: "Quest Name",
        assetKey: "questName",
        onMessageChange: F,
        initialValue: g.config.messages.questName
      }), (0, n.jsx)(N.Z, {
        title: "Game Title",
        assetKey: "gameTitle",
        onMessageChange: F,
        initialValue: g.config.messages.gameTitle
      }), (0, n.jsx)(N.Z, {
        title: "Reward Name",
        assetKey: "rewardName",
        onMessageChange: V,
        initialValue: B.name
      }), (0, n.jsx)(N.Z, {
        title: "Reward Name With Article",
        assetKey: "rewardNameWithArticle",
        onMessageChange: V,
        initialValue: B.nameWithArticle
      })]
    }), (0, n.jsx)(r.Heading, {
      variant: "heading-md/semibold",
      className: O.subheading,
      children: "Assets"
    }), (0, n.jsxs)("div", {
      className: O.fields,
      children: [(0, n.jsx)(I.Z, {
        title: "Game Tile Asset",
        assetKey: "gameTile",
        onFileChange: G,
        filters: R,
        initialValue: g.config.assets.gameTile
      }), (0, n.jsx)(I.Z, {
        title: "Logotype",
        assetKey: "logotype",
        onFileChange: G,
        filters: h,
        initialValue: g.config.assets.logotype
      }), (0, n.jsx)(I.Z, {
        title: "Quest Bar Hero Asset",
        assetKey: "questBarHero",
        onFileChange: G,
        filters: p,
        initialValue: g.config.assets.questBarHero
      }), (0, n.jsx)(I.Z, {
        title: "Reward Tile Asset",
        assetKey: "rewardTile",
        onFileChange: function(e, s) {
          var t, n;
          if ("rewardTile" === e) D({
            ...g,
            config: (t = g.config, n = {
              [e]: s
            }, (0, i.EQ)(t).with({
              configVersion: 1
            }, e => ({
              ...e,
              assets: {
                ...e.assets,
                ...n
              }
            })).with({
              configVersion: 2
            }, e => ({
              ...e,
              assets: {
                ...e.assets,
                ...n
              },
              rewardsConfig: {
                ...e.rewardsConfig,
                rewards: e.rewardsConfig.rewards.map((e, s) => 0 === s ? {
                  ...e,
                  asset: n.rewardTile
                } : e)
              }
            })).exhaustive())
          })
        },
        filters: p,
        initialValue: B.rewardTile
      }), (0, n.jsx)(I.Z, {
        title: "Gift Inventory Hero",
        assetKey: "hero",
        onFileChange: G,
        filters: p,
        initialValue: g.config.assets.hero
      })]
    }), (0, n.jsx)("div", {
      className: O.fields,
      children: (0, n.jsx)("div", {
        className: O.fullWidthField,
        children: (0, n.jsx)(A.Z, {
          onChange: function(e) {
            var s, t;
            D({
              ...g,
              config: (s = g.config, t = e, (0, i.EQ)(s).with({
                configVersion: 1
              }, e => ({
                ...e,
                variants: t
              })).with({
                configVersion: 2
              }, e => ({
                ...e,
                features: t
              })).exhaustive())
            }), Z(e)
          },
          values: P
        })
      })
    }), (0, n.jsx)(r.Heading, {
      variant: "heading-md/semibold",
      className: O.subheading,
      children: "Colors & Quest States"
    }), (0, n.jsxs)("div", {
      className: O.fields,
      children: [(0, n.jsxs)("div", {
        className: O.fields,
        style: {
          marginBottom: 0
        },
        children: [(0, n.jsx)(T.Z, {
          title: "Primary",
          colorKey: "primary",
          onChange: y,
          value: g.config.colors.primary
        }), (0, n.jsx)(T.Z, {
          title: "Secondary",
          colorKey: "secondary",
          onChange: y,
          value: g.config.colors.secondary
        })]
      }), (0, n.jsx)(m.Z, {
        onChange: function(e) {
          switch (L(e), e) {
            case m.a.UNENROLLED:
              D({
                ...g,
                userStatus: null
              });
              break;
            case m.a.ENROLLED:
              D({
                ...g,
                userStatus: x({
                  enrolledAt: new Date().toISOString()
                })
              });
              break;
            case m.a.COMPLETED_25:
              D({
                ...g,
                userStatus: x({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * o.Z.Seconds.MINUTE * .25
                })
              });
              break;
            case m.a.COMPLETED_50:
              D({
                ...g,
                userStatus: x({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * o.Z.Seconds.MINUTE * .5
                })
              });
              break;
            case m.a.COMPLETED_75:
              D({
                ...g,
                userStatus: x({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * o.Z.Seconds.MINUTE * .75
                })
              });
              break;
            case m.a.COMPLETED_100:
              D({
                ...g,
                userStatus: x({
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * o.Z.Seconds.MINUTE
                })
              });
              break;
            case m.a.CLAIMED:
              D({
                ...g,
                userStatus: x({
                  claimedAt: new Date().toISOString(),
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * o.Z.Seconds.MINUTE
                })
              })
          }
        },
        value: f
      })]
    }), (0, n.jsx)(r.Heading, {
      variant: "heading-lg/bold",
      className: O.heading,
      children: "Component Previews"
    }), (0, n.jsxs)("div", {
      className: O.componentPreviews,
      children: [(0, n.jsxs)(S.Z, {
        withBorder: !0,
        children: [(0, n.jsx)(r.FormTitle, {
          children: "Quest Bar"
        }), (0, n.jsxs)("div", {
          className: O.questBarPreviewWrapper,
          children: [(null === (e = g.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null && (0, n.jsx)(r.Text, {
            color: "text-secondary",
            variant: "text-sm/normal",
            children: "The Quest Bar is hidden when the user has claimed the reward."
          }), (0, n.jsx)("div", {
            className: O.questBarPreview,
            children: (0, n.jsx)(_.p, {
              isPreview: !0,
              children: (0, n.jsx)(d.Z, {
                children: (0, n.jsx)(c.P, {
                  quest: g
                })
              })
            })
          })]
        })]
      }), (0, n.jsxs)(S.Z, {
        children: [(0, n.jsx)(r.FormTitle, {
          children: "Gift Inventory"
        }), (0, n.jsx)(_.p, {
          isPreview: !0,
          children: (0, n.jsx)(E.Z, {
            quest: g,
            location: l.jn.GIFT_INVENTORY_FOR_YOU
          })
        })]
      }), (0, n.jsxs)(S.Z, {
        withBorder: !0,
        children: [(0, n.jsx)(r.FormTitle, {
          children: "Channel Call Header"
        }), (null === (s = g.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null && (0, n.jsx)(r.Text, {
          color: "text-secondary",
          variant: "text-sm/normal",
          children: "The Quest Channel Call Header is hidden when the user has claimed the reward."
        }), (0, n.jsx)("div", {
          className: O.questBarPreviewWrapper,
          children: (0, n.jsx)(_.p, {
            isPreview: !0,
            children: (0, n.jsx)("div", {
              className: O.questChannelCallHeaderPreview,
              children: (0, n.jsx)(u.Z, {
                channelId: "123",
                previewQuest: g,
                isParticipatingOverride: v
              })
            })
          })
        })]
      }), (0, n.jsx)("div", {
        className: O.channelCallParticipationToggle,
        children: (0, n.jsx)(r.FormItem, {
          children: (0, n.jsx)(r.FormSwitch, {
            value: v,
            onChange: function(e) {
              b(e)
            },
            hideBorder: !0,
            children: "Is Participating:"
          })
        })
      })]
    })]
  })
}
class f extends a.Component {
  componentDidCatch(e) {
    this.setState({
      error: e
    })
  }
  render() {
    let {
      error: e,
      renderKey: s
    } = this.state;
    return null != e ? (0, n.jsxs)("div", {
      className: O.errorBoundary,
      children: [(0, n.jsx)(r.CircleExclamationPointIcon, {
        className: O.errorBoundaryIcon
      }), (0, n.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        children: "Something broke in the Quest preview tool :("
      }), (0, n.jsx)(r.Button, {
        color: r.ButtonColors.PRIMARY,
        onClick: this.handleResetState,
        children: "Reset"
      }), null != e.message && (0, n.jsx)(r.Card, {
        className: O.errorMessageWrapper,
        children: (0, n.jsx)("code", {
          className: O.errorMessage,
          children: e.message
        })
      })]
    }) : (0, n.jsx)(D, {}, s)
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      error: null,
      renderKey: 0
    }), g(this, "handleResetState", () => {
      this.setState(e => ({
        error: null,
        renderKey: e.renderKey + 1
      }))
    })
  }
}
s.Z = f