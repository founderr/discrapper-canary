"use strict";
s.r(t), s("47120"), s("627341");
var a = s("735250"),
  n = s("470079"),
  i = s("278074"),
  l = s("774867"),
  r = s("481060"),
  o = s("70956"),
  d = s("497505"),
  u = s("210724"),
  c = s("130653"),
  S = s("78826"),
  E = s("37303"),
  T = s("134483"),
  _ = s("478977"),
  I = s("456799"),
  N = s("210851"),
  g = s("602683"),
  f = s("916028"),
  m = s("15033"),
  A = s("899457"),
  C = s("975266");

function O(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let h = ["svg", "png", "gif", "webp"],
  R = [...h, "jpg", "jpeg"],
  p = Array.from(new Set([...R, "gif", "mp4", "webm"]));

function M() {
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
let D = {
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

function x() {
  var e, t, s;
  let [l, O] = n.useState(D), [x, L] = n.useState(A.UserState.UNENROLLED), [P, b] = n.useState([]), [v, U] = n.useState(!1), [j, G] = n.useState(null);
  let F = (s = l.config, (0, i.match)(s).with({
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
    b((e = l.config, (0, i.match)(e).with({
      configVersion: 1
    }, e => e.variants).with({
      configVersion: 2
    }, e => e.features).exhaustive()))
  }, [l]);

  function B(e, t) {
    if ("hero" === e || "questBarHero" === e || "gameTile" === e || "logotype" === e) {
      var s, a;
      O({
        ...l,
        config: (s = l.config, a = {
          [e]: t
        }, (0, i.match)(s).with({
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

  function y(e, t) {
    if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
      var s, a;
      O({
        ...l,
        config: (s = l.config, a = {
          [e]: t
        }, (0, i.match)(s).with({
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

  function V(e, t) {
    if ("rewardName" === e || "rewardNameWithArticle" === e) {
      var s, a;
      O({
        ...l,
        config: (s = l.config, a = {
          [e]: t
        }, (0, i.match)(s).with({
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

  function Y(e, t) {
    O({
      ...l,
      config: {
        ...l.config,
        colors: {
          ...l.config.colors,
          [e]: t
        }
      }
    })
  }
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-lg/bold",
      className: C.heading,
      children: "Quest Preview Tool"
    }), (0, a.jsx)("div", {
      className: C.fields,
      children: (0, a.jsx)(f.default, {
        onSelect: function(e) {
          G(e), null != e && O(e)
        },
        quest: j
      })
    }), (0, a.jsx)(r.Heading, {
      variant: "heading-md/semibold",
      className: C.subheading,
      children: "Messages"
    }), (0, a.jsxs)("div", {
      className: C.fields,
      children: [(0, a.jsx)(g.default, {
        title: "Quest Name",
        assetKey: "questName",
        onMessageChange: y,
        initialValue: l.config.messages.questName
      }), (0, a.jsx)(g.default, {
        title: "Game Title",
        assetKey: "gameTitle",
        onMessageChange: y,
        initialValue: l.config.messages.gameTitle
      }), (0, a.jsx)(g.default, {
        title: "Reward Name",
        assetKey: "rewardName",
        onMessageChange: V,
        initialValue: F.name
      }), (0, a.jsx)(g.default, {
        title: "Reward Name With Article",
        assetKey: "rewardNameWithArticle",
        onMessageChange: V,
        initialValue: F.nameWithArticle
      })]
    }), (0, a.jsx)(r.Heading, {
      variant: "heading-md/semibold",
      className: C.subheading,
      children: "Assets"
    }), (0, a.jsxs)("div", {
      className: C.fields,
      children: [(0, a.jsx)(N.default, {
        title: "Game Tile Asset",
        assetKey: "gameTile",
        onFileChange: B,
        filters: R,
        initialValue: l.config.assets.gameTile
      }), (0, a.jsx)(N.default, {
        title: "Logotype",
        assetKey: "logotype",
        onFileChange: B,
        filters: h,
        initialValue: l.config.assets.logotype
      }), (0, a.jsx)(N.default, {
        title: "Quest Bar Hero Asset",
        assetKey: "questBarHero",
        onFileChange: B,
        filters: p,
        initialValue: l.config.assets.questBarHero
      }), (0, a.jsx)(N.default, {
        title: "Reward Tile Asset",
        assetKey: "rewardTile",
        onFileChange: function(e, t) {
          if ("rewardTile" === e) {
            var s, a;
            O({
              ...l,
              config: (s = l.config, a = {
                [e]: t
              }, (0, i.match)(s).with({
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
        filters: p,
        initialValue: F.rewardTile
      }), (0, a.jsx)(N.default, {
        title: "Gift Inventory Hero",
        assetKey: "hero",
        onFileChange: B,
        filters: p,
        initialValue: l.config.assets.hero
      })]
    }), (0, a.jsx)("div", {
      className: C.fields,
      children: (0, a.jsx)("div", {
        className: C.fullWidthField,
        children: (0, a.jsx)(m.default, {
          onChange: function(e) {
            var t, s;
            O({
              ...l,
              config: (t = l.config, s = e, (0, i.match)(t).with({
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
            }), b(e)
          },
          values: P
        })
      })
    }), (0, a.jsx)(r.Heading, {
      variant: "heading-md/semibold",
      className: C.subheading,
      children: "Colors & Quest States"
    }), (0, a.jsxs)("div", {
      className: C.fields,
      children: [(0, a.jsxs)("div", {
        className: C.fields,
        style: {
          marginBottom: 0
        },
        children: [(0, a.jsx)(_.default, {
          title: "Primary",
          colorKey: "primary",
          onChange: Y,
          value: l.config.colors.primary
        }), (0, a.jsx)(_.default, {
          title: "Secondary",
          colorKey: "secondary",
          onChange: Y,
          value: l.config.colors.secondary
        })]
      }), (0, a.jsx)(A.default, {
        onChange: function(e) {
          switch (L(e), e) {
            case A.UserState.UNENROLLED:
              O({
                ...l,
                userStatus: null
              });
              break;
            case A.UserState.ENROLLED:
              O({
                ...l,
                userStatus: M({
                  enrolledAt: new Date().toISOString()
                })
              });
              break;
            case A.UserState.COMPLETED_25:
              O({
                ...l,
                userStatus: M({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * o.default.Seconds.MINUTE * .25
                })
              });
              break;
            case A.UserState.COMPLETED_50:
              O({
                ...l,
                userStatus: M({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * o.default.Seconds.MINUTE * .5
                })
              });
              break;
            case A.UserState.COMPLETED_75:
              O({
                ...l,
                userStatus: M({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * o.default.Seconds.MINUTE * .75
                })
              });
              break;
            case A.UserState.COMPLETED_100:
              O({
                ...l,
                userStatus: M({
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * o.default.Seconds.MINUTE
                })
              });
              break;
            case A.UserState.CLAIMED:
              O({
                ...l,
                userStatus: M({
                  claimedAt: new Date().toISOString(),
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * o.default.Seconds.MINUTE
                })
              })
          }
        },
        value: x
      })]
    }), (0, a.jsx)(r.Heading, {
      variant: "heading-lg/bold",
      className: C.heading,
      children: "Component Previews"
    }), (0, a.jsxs)("div", {
      className: C.componentPreviews,
      children: [(0, a.jsxs)(I.default, {
        withBorder: !0,
        children: [(0, a.jsx)(r.FormTitle, {
          children: "Quest Bar"
        }), (0, a.jsxs)("div", {
          className: C.questBarPreviewWrapper,
          children: [(null === (e = l.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null && (0, a.jsx)(r.Text, {
            color: "text-secondary",
            variant: "text-sm/normal",
            children: "The Quest Bar is hidden when the user has claimed the reward."
          }), (0, a.jsx)("div", {
            className: C.questBarPreview,
            children: (0, a.jsx)(S.QuestsAssetContextProvider, {
              isPreview: !0,
              children: (0, a.jsx)(c.default, {
                children: (0, a.jsx)(u.QuestBar, {
                  quest: l
                })
              })
            })
          })]
        })]
      }), (0, a.jsxs)(I.default, {
        children: [(0, a.jsx)(r.FormTitle, {
          children: "Gift Inventory"
        }), (0, a.jsx)(S.QuestsAssetContextProvider, {
          isPreview: !0,
          children: (0, a.jsx)(E.QuestsCard, {
            quest: l,
            location: d.QuestContent.GIFT_INVENTORY_FOR_YOU
          })
        })]
      }), (0, a.jsxs)(I.default, {
        withBorder: !0,
        children: [(0, a.jsx)(r.FormTitle, {
          children: "Channel Call Header"
        }), (null === (t = l.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && (0, a.jsx)(r.Text, {
          color: "text-secondary",
          variant: "text-sm/normal",
          children: "The Quest Channel Call Header is hidden when the user has claimed the reward."
        }), (0, a.jsx)("div", {
          className: C.questBarPreviewWrapper,
          children: (0, a.jsx)(S.QuestsAssetContextProvider, {
            isPreview: !0,
            children: (0, a.jsx)("div", {
              className: C.questChannelCallHeaderPreview,
              children: (0, a.jsx)(T.default, {
                channelId: "123",
                previewQuest: l,
                isParticipatingOverride: v
              })
            })
          })
        })]
      }), (0, a.jsx)("div", {
        className: C.channelCallParticipationToggle,
        children: (0, a.jsx)(r.FormItem, {
          children: (0, a.jsx)(r.FormSwitch, {
            value: v,
            onChange: function(e) {
              U(e)
            },
            hideBorder: !0,
            children: "Is Participating:"
          })
        })
      })]
    })]
  })
}
class L extends n.Component {
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
      className: C.errorBoundary,
      children: [(0, a.jsx)(l.CircleExclamationPointIcon, {
        className: C.errorBoundaryIcon
      }), (0, a.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        children: "Something broke in the Quest preview tool :("
      }), (0, a.jsx)(r.Button, {
        color: r.ButtonColors.PRIMARY,
        onClick: this.handleResetState,
        children: "Reset"
      }), null != e.message && (0, a.jsx)(r.Card, {
        className: C.errorMessageWrapper,
        children: (0, a.jsx)("code", {
          className: C.errorMessage,
          children: e.message
        })
      })]
    }) : (0, a.jsx)(x, {}, t)
  }
  constructor(...e) {
    super(...e), O(this, "state", {
      error: null,
      renderKey: 0
    }), O(this, "handleResetState", () => {
      this.setState(e => ({
        error: null,
        renderKey: e.renderKey + 1
      }))
    })
  }
}
t.default = L