"use strict";
s.r(t), s("47120"), s("627341");
var a = s("735250"),
  n = s("470079"),
  l = s("278074"),
  i = s("774867"),
  r = s("481060"),
  o = s("70956"),
  d = s("497505"),
  u = s("210724"),
  c = s("78826"),
  S = s("37303"),
  E = s("134483"),
  T = s("478977"),
  _ = s("456799"),
  f = s("210851"),
  m = s("602683"),
  g = s("916028"),
  I = s("15033"),
  N = s("899457"),
  h = s("975266");

function C(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let A = ["svg", "png", "gif", "webp"],
  p = [...A, "jpg", "jpeg"],
  O = Array.from(new Set([...p, "gif", "mp4", "webm"]));

function R() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    {
      streamProgressSeconds: t = 0,
      completedAt: s = null,
      enrolledAt: a = null,
      claimedAt: n = null
    } = e;
  return {
    userId: "123",
    questId: "1193992107035983872",
    enrolledAt: a,
    completedAt: s,
    claimedAt: n,
    claimedTier: null,
    lastStreamHeartbeatAt: null,
    streamProgressSeconds: t,
    dismissedQuestContent: 0,
    progress: {}
  }
}
let x = {
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

function M() {
  var e, t, s;
  let [i, C] = n.useState(x), [M, v] = n.useState(N.UserState.UNENROLLED), [L, D] = n.useState([]), [P, b] = n.useState(!1), [j, U] = n.useState(null);
  let y = (s = i.config, (0, l.match)(s).with({
    configVersion: 1
  }, e => ({
    name: e.messages.rewardName,
    nameWithArticle: e.messages.rewardNameWithArticle,
    redemptionInstructionsByPlatform: e.messages.rewardRedemptionInstructionsByPlatform,
    rewardTile: e.assets.rewardTile
  })).with({
    configVersion: 2
  }, e => {
    let t = e.rewardsConfig.rewards[0];
    return {
      ...t.messages,
      rewardTile: t.asset
    }
  }).exhaustive());
  n.useEffect(() => {
    var e;
    D((e = i.config, (0, l.match)(e).with({
      configVersion: 1
    }, e => e.variants).with({
      configVersion: 2
    }, e => e.features).exhaustive()))
  }, [i]);

  function G(e, t) {
    if ("hero" === e || "questBarHero" === e || "gameTile" === e || "logotype" === e) {
      var s, a;
      C({
        ...i,
        config: (s = i.config, a = {
          [e]: t
        }, (0, l.match)(s).with({
          configVersion: 1
        }, e => ({
          ...e,
          assets: {
            ...e.assets,
            ...a
          }
        })).with({
          configVersion: 2
        }, e => ({
          ...e,
          assets: {
            ...e.assets,
            ...a
          }
        })).exhaustive())
      })
    }
  }

  function F(e, t) {
    if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
      var s, a;
      C({
        ...i,
        config: (s = i.config, a = {
          [e]: t
        }, (0, l.match)(s).with({
          configVersion: 1
        }, e => ({
          ...e,
          messages: {
            ...e.messages,
            ...a
          }
        })).with({
          configVersion: 2
        }, e => ({
          ...e,
          messages: {
            ...e.messages,
            ...a
          }
        })).exhaustive())
      })
    }
  }

  function B(e, t) {
    if ("rewardName" === e || "rewardNameWithArticle" === e) {
      var s, a;
      C({
        ...i,
        config: (s = i.config, a = {
          [e]: t
        }, (0, l.match)(s).with({
          configVersion: 1
        }, e => ({
          ...e,
          messages: {
            ...e.messages,
            ...a
          }
        })).with({
          configVersion: 2
        }, e => ({
          ...e,
          rewardsConfig: {
            ...e.rewardsConfig,
            rewards: e.rewardsConfig.rewards.map((e, t) => 0 === t ? {
              ...e,
              messages: {
                ...e.messages,
                ...a
              }
            } : e)
          }
        })).exhaustive())
      })
    }
  }

  function k(e, t) {
    C({
      ...i,
      config: {
        ...i.config,
        colors: {
          ...i.config.colors,
          [e]: t
        }
      }
    })
  }
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-lg/bold",
      className: h.heading,
      children: "Quest Preview Tool"
    }), (0, a.jsx)("div", {
      className: h.fields,
      children: (0, a.jsx)(g.default, {
        onSelect: function(e) {
          U(e), null != e && C(e)
        },
        quest: j
      })
    }), (0, a.jsx)(r.Heading, {
      variant: "heading-md/semibold",
      className: h.subheading,
      children: "Messages"
    }), (0, a.jsxs)("div", {
      className: h.fields,
      children: [(0, a.jsx)(m.default, {
        title: "Quest Name",
        assetKey: "questName",
        onMessageChange: F,
        initialValue: i.config.messages.questName
      }), (0, a.jsx)(m.default, {
        title: "Game Title",
        assetKey: "gameTitle",
        onMessageChange: F,
        initialValue: i.config.messages.gameTitle
      }), (0, a.jsx)(m.default, {
        title: "Reward Name",
        assetKey: "rewardName",
        onMessageChange: B,
        initialValue: y.name
      }), (0, a.jsx)(m.default, {
        title: "Reward Name With Article",
        assetKey: "rewardNameWithArticle",
        onMessageChange: B,
        initialValue: y.nameWithArticle
      })]
    }), (0, a.jsx)(r.Heading, {
      variant: "heading-md/semibold",
      className: h.subheading,
      children: "Assets"
    }), (0, a.jsxs)("div", {
      className: h.fields,
      children: [(0, a.jsx)(f.default, {
        title: "Game Tile Asset",
        assetKey: "gameTile",
        onFileChange: G,
        filters: p,
        initialValue: i.config.assets.gameTile
      }), (0, a.jsx)(f.default, {
        title: "Logotype",
        assetKey: "logotype",
        onFileChange: G,
        filters: A,
        initialValue: i.config.assets.logotype
      }), (0, a.jsx)(f.default, {
        title: "Quest Bar Hero Asset",
        assetKey: "questBarHero",
        onFileChange: G,
        filters: O,
        initialValue: i.config.assets.questBarHero
      }), (0, a.jsx)(f.default, {
        title: "Reward Tile Asset",
        assetKey: "rewardTile",
        onFileChange: function(e, t) {
          if ("rewardTile" === e) {
            var s, a;
            C({
              ...i,
              config: (s = i.config, a = {
                [e]: t
              }, (0, l.match)(s).with({
                configVersion: 1
              }, e => ({
                ...e,
                assets: {
                  ...e.assets,
                  ...a
                }
              })).with({
                configVersion: 2
              }, e => ({
                ...e,
                assets: {
                  ...e.assets,
                  ...a
                },
                rewardsConfig: {
                  ...e.rewardsConfig,
                  rewards: e.rewardsConfig.rewards.map((e, t) => 0 === t ? {
                    ...e,
                    asset: a.rewardTile
                  } : e)
                }
              })).exhaustive())
            })
          }
        },
        filters: O,
        initialValue: y.rewardTile
      }), (0, a.jsx)(f.default, {
        title: "Gift Inventory Hero",
        assetKey: "hero",
        onFileChange: G,
        filters: O,
        initialValue: i.config.assets.hero
      })]
    }), (0, a.jsx)("div", {
      className: h.fields,
      children: (0, a.jsx)("div", {
        className: h.fullWidthField,
        children: (0, a.jsx)(I.default, {
          onChange: function(e) {
            var t, s;
            C({
              ...i,
              config: (t = i.config, s = e, (0, l.match)(t).with({
                configVersion: 1
              }, e => ({
                ...e,
                variants: s
              })).with({
                configVersion: 2
              }, e => ({
                ...e,
                features: s
              })).exhaustive())
            }), D(e)
          },
          values: L
        })
      })
    }), (0, a.jsx)(r.Heading, {
      variant: "heading-md/semibold",
      className: h.subheading,
      children: "Colors & Quest States"
    }), (0, a.jsxs)("div", {
      className: h.fields,
      children: [(0, a.jsxs)("div", {
        className: h.fields,
        style: {
          marginBottom: 0
        },
        children: [(0, a.jsx)(T.default, {
          title: "Primary",
          colorKey: "primary",
          onChange: k,
          value: i.config.colors.primary
        }), (0, a.jsx)(T.default, {
          title: "Secondary",
          colorKey: "secondary",
          onChange: k,
          value: i.config.colors.secondary
        })]
      }), (0, a.jsx)(N.default, {
        onChange: function(e) {
          switch (v(e), e) {
            case N.UserState.UNENROLLED:
              C({
                ...i,
                userStatus: null
              });
              break;
            case N.UserState.ENROLLED:
              C({
                ...i,
                userStatus: R({
                  enrolledAt: new Date().toISOString()
                })
              });
              break;
            case N.UserState.COMPLETED_25:
              C({
                ...i,
                userStatus: R({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * o.default.Seconds.MINUTE * .25
                })
              });
              break;
            case N.UserState.COMPLETED_50:
              C({
                ...i,
                userStatus: R({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * o.default.Seconds.MINUTE * .5
                })
              });
              break;
            case N.UserState.COMPLETED_75:
              C({
                ...i,
                userStatus: R({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * o.default.Seconds.MINUTE * .75
                })
              });
              break;
            case N.UserState.COMPLETED_100:
              C({
                ...i,
                userStatus: R({
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * o.default.Seconds.MINUTE
                })
              });
              break;
            case N.UserState.CLAIMED:
              C({
                ...i,
                userStatus: R({
                  claimedAt: new Date().toISOString(),
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * o.default.Seconds.MINUTE
                })
              })
          }
        },
        value: M
      })]
    }), (0, a.jsx)(r.Heading, {
      variant: "heading-lg/bold",
      className: h.heading,
      children: "Component Previews"
    }), (0, a.jsxs)("div", {
      className: h.componentPreviews,
      children: [(0, a.jsxs)(_.default, {
        withBorder: !0,
        children: [(0, a.jsx)(r.FormTitle, {
          children: "Quest Bar"
        }), (0, a.jsxs)("div", {
          className: h.questBarPreviewWrapper,
          children: [(null === (e = i.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null && (0, a.jsx)(r.Text, {
            color: "text-secondary",
            variant: "text-sm/normal",
            children: "The Quest Bar is hidden when the user has claimed the reward."
          }), (0, a.jsx)("div", {
            className: h.questBarPreview,
            children: (0, a.jsx)(c.QuestsAssetContextProvider, {
              isPreview: !0,
              children: (0, a.jsx)(u.QuestBar, {
                quest: i
              })
            })
          })]
        })]
      }), (0, a.jsxs)(_.default, {
        children: [(0, a.jsx)(r.FormTitle, {
          children: "Gift Inventory"
        }), (0, a.jsx)(c.QuestsAssetContextProvider, {
          isPreview: !0,
          children: (0, a.jsx)(S.QuestsCard, {
            quest: i,
            location: d.QuestContent.GIFT_INVENTORY_FOR_YOU
          })
        })]
      }), (0, a.jsxs)(_.default, {
        withBorder: !0,
        children: [(0, a.jsx)(r.FormTitle, {
          children: "Channel Call Header"
        }), (null === (t = i.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && (0, a.jsx)(r.Text, {
          color: "text-secondary",
          variant: "text-sm/normal",
          children: "The Quest Channel Call Header is hidden when the user has claimed the reward."
        }), (0, a.jsx)("div", {
          className: h.questBarPreviewWrapper,
          children: (0, a.jsx)(c.QuestsAssetContextProvider, {
            isPreview: !0,
            children: (0, a.jsx)("div", {
              className: h.questChannelCallHeaderPreview,
              children: (0, a.jsx)(E.default, {
                channelId: "123",
                previewQuest: i,
                isParticipatingOverride: P
              })
            })
          })
        })]
      }), (0, a.jsx)("div", {
        className: h.channelCallParticipationToggle,
        children: (0, a.jsx)(r.FormItem, {
          children: (0, a.jsx)(r.FormSwitch, {
            value: P,
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
class v extends n.Component {
  componentDidCatch(e) {
    this.setState({
      error: e
    })
  }
  render() {
    let {
      error: e,
      renderKey: t
    } = this.state;
    return null != e ? (0, a.jsxs)("div", {
      className: h.errorBoundary,
      children: [(0, a.jsx)(i.CircleExclamationPointIcon, {
        className: h.errorBoundaryIcon
      }), (0, a.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        children: "Something broke in the Quest preview tool :("
      }), (0, a.jsx)(r.Button, {
        color: r.ButtonColors.PRIMARY,
        onClick: this.handleResetState,
        children: "Reset"
      }), null != e.message && (0, a.jsx)(r.Card, {
        className: h.errorMessageWrapper,
        children: (0, a.jsx)("code", {
          className: h.errorMessage,
          children: e.message
        })
      })]
    }) : (0, a.jsx)(M, {}, t)
  }
  constructor(...e) {
    super(...e), C(this, "state", {
      error: null,
      renderKey: 0
    }), C(this, "handleResetState", () => {
      this.setState(e => ({
        error: null,
        renderKey: e.renderKey + 1
      }))
    })
  }
}
t.default = v