t(47120), t(627341);
var n = t(735250),
  i = t(470079),
  a = t(278074),
  l = t(481060),
  r = t(70956),
  o = t(497505),
  c = t(210724),
  E = t(130653),
  d = t(78826),
  _ = t(37303),
  T = t(134483),
  S = t(478977),
  u = t(456799),
  I = t(210851),
  N = t(602683),
  A = t(916028),
  C = t(15033),
  O = t(899457),
  m = t(614771);

function h(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let g = ["svg", "png", "gif", "webp"],
  R = [...g, "jpg", "jpeg"],
  M = Array.from(new Set([...R, "gif", "mp4", "webm"]));

function x() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    {
      streamProgressSeconds: s = 0,
      completedAt: t = null,
      enrolledAt: n = null,
      claimedAt: i = null
    } = e;
  return {
    userId: "123",
    questId: "1193992107035983872",
    enrolledAt: n,
    completedAt: t,
    claimedAt: i,
    claimedTier: null,
    lastStreamHeartbeatAt: null,
    streamProgressSeconds: s,
    dismissedQuestContent: 0,
    progress: {}
  }
}
let p = {
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
  let [h, D] = i.useState(p), [L, P] = i.useState(O.a.UNENROLLED), [Z, f] = i.useState([]), [j, v] = i.useState(!1), [U, B] = i.useState(null);
  let b = (t = h.config, (0, a.EQ)(t).with({
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
  i.useEffect(() => {
    var e;
    f((e = h.config, (0, a.EQ)(e).with({
      configVersion: 1
    }, e => e.variants).with({
      configVersion: 2
    }, e => e.features).exhaustive()))
  }, [h]);

  function G(e, s) {
    var t, n;
    if ("hero" === e || "questBarHero" === e || "gameTile" === e || "logotype" === e) D({
      ...h,
      config: (t = h.config, n = {
        [e]: s
      }, (0, a.EQ)(t).with({
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
      ...h,
      config: (t = h.config, n = {
        [e]: s
      }, (0, a.EQ)(t).with({
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
      ...h,
      config: (t = h.config, n = {
        [e]: s
      }, (0, a.EQ)(t).with({
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
      ...h,
      config: {
        ...h.config,
        colors: {
          ...h.config.colors,
          [e]: s
        }
      }
    })
  }
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-lg/bold",
      className: m.heading,
      children: "Quest Preview Tool"
    }), (0, n.jsx)("div", {
      className: m.fields,
      children: (0, n.jsx)(A.Z, {
        onSelect: function(e) {
          if (B(e), null != e) D(e)
        },
        quest: U
      })
    }), (0, n.jsx)(l.Heading, {
      variant: "heading-md/semibold",
      className: m.subheading,
      children: "Messages"
    }), (0, n.jsxs)("div", {
      className: m.fields,
      children: [(0, n.jsx)(N.Z, {
        title: "Quest Name",
        assetKey: "questName",
        onMessageChange: F,
        initialValue: h.config.messages.questName
      }), (0, n.jsx)(N.Z, {
        title: "Game Title",
        assetKey: "gameTitle",
        onMessageChange: F,
        initialValue: h.config.messages.gameTitle
      }), (0, n.jsx)(N.Z, {
        title: "Reward Name",
        assetKey: "rewardName",
        onMessageChange: V,
        initialValue: b.name
      }), (0, n.jsx)(N.Z, {
        title: "Reward Name With Article",
        assetKey: "rewardNameWithArticle",
        onMessageChange: V,
        initialValue: b.nameWithArticle
      })]
    }), (0, n.jsx)(l.Heading, {
      variant: "heading-md/semibold",
      className: m.subheading,
      children: "Assets"
    }), (0, n.jsxs)("div", {
      className: m.fields,
      children: [(0, n.jsx)(I.Z, {
        title: "Game Tile Asset",
        assetKey: "gameTile",
        onFileChange: G,
        filters: R,
        initialValue: h.config.assets.gameTile
      }), (0, n.jsx)(I.Z, {
        title: "Logotype",
        assetKey: "logotype",
        onFileChange: G,
        filters: g,
        initialValue: h.config.assets.logotype
      }), (0, n.jsx)(I.Z, {
        title: "Quest Bar Hero Asset",
        assetKey: "questBarHero",
        onFileChange: G,
        filters: M,
        initialValue: h.config.assets.questBarHero
      }), (0, n.jsx)(I.Z, {
        title: "Reward Tile Asset",
        assetKey: "rewardTile",
        onFileChange: function(e, s) {
          var t, n;
          if ("rewardTile" === e) D({
            ...h,
            config: (t = h.config, n = {
              [e]: s
            }, (0, a.EQ)(t).with({
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
        filters: M,
        initialValue: b.rewardTile
      }), (0, n.jsx)(I.Z, {
        title: "Gift Inventory Hero",
        assetKey: "hero",
        onFileChange: G,
        filters: M,
        initialValue: h.config.assets.hero
      })]
    }), (0, n.jsx)("div", {
      className: m.fields,
      children: (0, n.jsx)("div", {
        className: m.fullWidthField,
        children: (0, n.jsx)(C.Z, {
          onChange: function(e) {
            var s, t;
            D({
              ...h,
              config: (s = h.config, t = e, (0, a.EQ)(s).with({
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
            }), f(e)
          },
          values: Z
        })
      })
    }), (0, n.jsx)(l.Heading, {
      variant: "heading-md/semibold",
      className: m.subheading,
      children: "Colors & Quest States"
    }), (0, n.jsxs)("div", {
      className: m.fields,
      children: [(0, n.jsxs)("div", {
        className: m.fields,
        style: {
          marginBottom: 0
        },
        children: [(0, n.jsx)(S.Z, {
          title: "Primary",
          colorKey: "primary",
          onChange: y,
          value: h.config.colors.primary
        }), (0, n.jsx)(S.Z, {
          title: "Secondary",
          colorKey: "secondary",
          onChange: y,
          value: h.config.colors.secondary
        })]
      }), (0, n.jsx)(O.Z, {
        onChange: function(e) {
          switch (P(e), e) {
            case O.a.UNENROLLED:
              D({
                ...h,
                userStatus: null
              });
              break;
            case O.a.ENROLLED:
              D({
                ...h,
                userStatus: x({
                  enrolledAt: new Date().toISOString()
                })
              });
              break;
            case O.a.COMPLETED_25:
              D({
                ...h,
                userStatus: x({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * r.Z.Seconds.MINUTE * .25
                })
              });
              break;
            case O.a.COMPLETED_50:
              D({
                ...h,
                userStatus: x({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * r.Z.Seconds.MINUTE * .5
                })
              });
              break;
            case O.a.COMPLETED_75:
              D({
                ...h,
                userStatus: x({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * r.Z.Seconds.MINUTE * .75
                })
              });
              break;
            case O.a.COMPLETED_100:
              D({
                ...h,
                userStatus: x({
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * r.Z.Seconds.MINUTE
                })
              });
              break;
            case O.a.CLAIMED:
              D({
                ...h,
                userStatus: x({
                  claimedAt: new Date().toISOString(),
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * r.Z.Seconds.MINUTE
                })
              })
          }
        },
        value: L
      })]
    }), (0, n.jsx)(l.Heading, {
      variant: "heading-lg/bold",
      className: m.heading,
      children: "Component Previews"
    }), (0, n.jsxs)("div", {
      className: m.componentPreviews,
      children: [(0, n.jsxs)(u.Z, {
        withBorder: !0,
        children: [(0, n.jsx)(l.FormTitle, {
          children: "Quest Bar"
        }), (0, n.jsxs)("div", {
          className: m.questBarPreviewWrapper,
          children: [(null === (e = h.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null && (0, n.jsx)(l.Text, {
            color: "text-secondary",
            variant: "text-sm/normal",
            children: "The Quest Bar is hidden when the user has claimed the reward."
          }), (0, n.jsx)("div", {
            className: m.questBarPreview,
            children: (0, n.jsx)(d.p, {
              isPreview: !0,
              children: (0, n.jsx)(E.Z, {
                children: (0, n.jsx)(c.P, {
                  quest: h
                })
              })
            })
          })]
        })]
      }), (0, n.jsxs)(u.Z, {
        children: [(0, n.jsx)(l.FormTitle, {
          children: "Gift Inventory"
        }), (0, n.jsx)(d.p, {
          isPreview: !0,
          children: (0, n.jsx)(_.Z, {
            quest: h,
            location: o.jn.GIFT_INVENTORY_FOR_YOU
          })
        })]
      }), (0, n.jsxs)(u.Z, {
        withBorder: !0,
        children: [(0, n.jsx)(l.FormTitle, {
          children: "Channel Call Header"
        }), (null === (s = h.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null && (0, n.jsx)(l.Text, {
          color: "text-secondary",
          variant: "text-sm/normal",
          children: "The Quest Channel Call Header is hidden when the user has claimed the reward."
        }), (0, n.jsx)("div", {
          className: m.questBarPreviewWrapper,
          children: (0, n.jsx)(d.p, {
            isPreview: !0,
            children: (0, n.jsx)("div", {
              className: m.questChannelCallHeaderPreview,
              children: (0, n.jsx)(T.Z, {
                channelId: "123",
                previewQuest: h,
                isParticipatingOverride: j
              })
            })
          })
        })]
      }), (0, n.jsx)("div", {
        className: m.channelCallParticipationToggle,
        children: (0, n.jsx)(l.FormItem, {
          children: (0, n.jsx)(l.FormSwitch, {
            value: j,
            onChange: function(e) {
              v(e)
            },
            hideBorder: !0,
            children: "Is Participating:"
          })
        })
      })]
    })]
  })
}
class L extends i.Component {
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
      className: m.errorBoundary,
      children: [(0, n.jsx)(l.CircleExclamationPointIcon, {
        className: m.errorBoundaryIcon
      }), (0, n.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        children: "Something broke in the Quest preview tool :("
      }), (0, n.jsx)(l.Button, {
        color: l.ButtonColors.PRIMARY,
        onClick: this.handleResetState,
        children: "Reset"
      }), null != e.message && (0, n.jsx)(l.Card, {
        className: m.errorMessageWrapper,
        children: (0, n.jsx)("code", {
          className: m.errorMessage,
          children: e.message
        })
      })]
    }) : (0, n.jsx)(D, {}, s)
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      error: null,
      renderKey: 0
    }), h(this, "handleResetState", () => {
      this.setState(e => ({
        error: null,
        renderKey: e.renderKey + 1
      }))
    })
  }
}
s.Z = L