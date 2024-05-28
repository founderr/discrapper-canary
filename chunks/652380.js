"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("774867"),
  i = s("481060"),
  r = s("70956"),
  o = s("497505"),
  d = s("210724"),
  u = s("78826"),
  c = s("37303"),
  S = s("134483"),
  E = s("478977"),
  T = s("456799"),
  _ = s("210851"),
  f = s("602683"),
  m = s("15033"),
  I = s("899457"),
  g = s("975266");

function N(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let h = ["svg", "png", "gif", "webp"],
  C = [...h, "jpg", "jpeg"],
  O = Array.from(new Set([...C, "gif", "mp4", "webm"]));

function A() {
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

function R() {
  var e, t;
  let [s, l] = n.useState(p), [N, R] = n.useState(I.UserState.UNENROLLED), [x, M] = n.useState(s.config.variants), [L, D] = n.useState(!1);

  function P(e, t) {
    l({
      ...s,
      config: {
        ...s.config,
        assets: {
          ...s.config.assets,
          [e]: t
        }
      }
    })
  }

  function v(e, t) {
    l({
      ...s,
      config: {
        ...s.config,
        messages: {
          ...s.config.messages,
          [e]: t
        }
      }
    })
  }

  function b(e, t) {
    l({
      ...s,
      config: {
        ...s.config,
        colors: {
          ...s.config.colors,
          [e]: t
        }
      }
    })
  }
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-lg/bold",
      className: g.heading,
      children: "Quest Preview Tool"
    }), (0, a.jsx)(i.Heading, {
      variant: "heading-md/semibold",
      className: g.subheading,
      children: "Messages"
    }), (0, a.jsxs)("div", {
      className: g.fields,
      children: [(0, a.jsx)(f.default, {
        title: "Quest Name",
        assetKey: "questName",
        onMessageChange: v,
        initialValue: s.config.messages.questName
      }), (0, a.jsx)(f.default, {
        title: "Game Title",
        assetKey: "gameTitle",
        onMessageChange: v,
        initialValue: s.config.messages.gameTitle
      }), (0, a.jsx)(f.default, {
        title: "Reward Name",
        assetKey: "rewardName",
        onMessageChange: v,
        initialValue: s.config.messages.rewardName
      }), (0, a.jsx)(f.default, {
        title: "Reward Name With Article",
        assetKey: "rewardNameWithArticle",
        onMessageChange: v,
        initialValue: s.config.messages.rewardNameWithArticle
      })]
    }), (0, a.jsx)(i.Heading, {
      variant: "heading-md/semibold",
      className: g.subheading,
      children: "Assets"
    }), (0, a.jsxs)("div", {
      className: g.fields,
      children: [(0, a.jsx)(_.default, {
        title: "Game Tile Asset",
        assetKey: "gameTile",
        onFileChange: P,
        filters: C,
        initialValue: s.config.assets.gameTile
      }), (0, a.jsx)(_.default, {
        title: "Logotype",
        assetKey: "logotype",
        onFileChange: P,
        filters: h,
        initialValue: s.config.assets.logotype
      }), (0, a.jsx)(_.default, {
        title: "Quest Bar Hero Asset",
        assetKey: "questBarHero",
        onFileChange: P,
        filters: O,
        initialValue: s.config.assets.questBarHero
      }), (0, a.jsx)(_.default, {
        title: "Reward Tile Asset",
        assetKey: "rewardTile",
        onFileChange: P,
        filters: O,
        initialValue: s.config.assets.rewardTile
      }), (0, a.jsx)(_.default, {
        title: "Gift Inventory Hero",
        assetKey: "hero",
        onFileChange: P,
        filters: O,
        initialValue: s.config.assets.hero
      })]
    }), (0, a.jsx)("div", {
      className: g.fields,
      children: (0, a.jsx)("div", {
        className: g.fullWidthField,
        children: (0, a.jsx)(m.default, {
          onChange: function(e) {
            l({
              ...s,
              config: {
                ...s.config,
                variants: e
              }
            }), M(e)
          },
          values: x
        })
      })
    }), (0, a.jsx)(i.Heading, {
      variant: "heading-md/semibold",
      className: g.subheading,
      children: "Colors & Quest States"
    }), (0, a.jsxs)("div", {
      className: g.fields,
      children: [(0, a.jsxs)("div", {
        className: g.fields,
        style: {
          marginBottom: 0
        },
        children: [(0, a.jsx)(E.default, {
          title: "Primary",
          colorKey: "primary",
          onChange: b,
          value: s.config.colors.primary
        }), (0, a.jsx)(E.default, {
          title: "Secondary",
          colorKey: "secondary",
          onChange: b,
          value: s.config.colors.secondary
        })]
      }), (0, a.jsx)(I.default, {
        onChange: function(e) {
          switch (R(e), e) {
            case I.UserState.UNENROLLED:
              l({
                ...s,
                userStatus: null
              });
              break;
            case I.UserState.ENROLLED:
              l({
                ...s,
                userStatus: A({
                  enrolledAt: new Date().toISOString()
                })
              });
              break;
            case I.UserState.COMPLETED_25:
              l({
                ...s,
                userStatus: A({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * r.default.Seconds.MINUTE * .25
                })
              });
              break;
            case I.UserState.COMPLETED_50:
              l({
                ...s,
                userStatus: A({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * r.default.Seconds.MINUTE * .5
                })
              });
              break;
            case I.UserState.COMPLETED_75:
              l({
                ...s,
                userStatus: A({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * r.default.Seconds.MINUTE * .75
                })
              });
              break;
            case I.UserState.COMPLETED_100:
              l({
                ...s,
                userStatus: A({
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * r.default.Seconds.MINUTE
                })
              });
              break;
            case I.UserState.CLAIMED:
              l({
                ...s,
                userStatus: A({
                  claimedAt: new Date().toISOString(),
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * r.default.Seconds.MINUTE
                })
              })
          }
        },
        value: N
      })]
    }), (0, a.jsx)(i.Heading, {
      variant: "heading-lg/bold",
      className: g.heading,
      children: "Component Previews"
    }), (0, a.jsxs)("div", {
      className: g.componentPreviews,
      children: [(0, a.jsxs)(T.default, {
        withBorder: !0,
        children: [(0, a.jsx)(i.FormTitle, {
          children: "Quest Bar"
        }), (0, a.jsxs)("div", {
          className: g.questBarPreviewWrapper,
          children: [(null === (e = s.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null && (0, a.jsx)(i.Text, {
            color: "text-secondary",
            variant: "text-sm/normal",
            children: "The Quest Bar is hidden when the user has claimed the reward."
          }), (0, a.jsx)("div", {
            className: g.questBarPreview,
            children: (0, a.jsx)(u.QuestsAssetContextProvider, {
              isPreview: !0,
              children: (0, a.jsx)(d.QuestBar, {
                quest: s
              })
            })
          })]
        })]
      }), (0, a.jsxs)(T.default, {
        children: [(0, a.jsx)(i.FormTitle, {
          children: "Gift Inventory"
        }), (0, a.jsx)(u.QuestsAssetContextProvider, {
          isPreview: !0,
          children: (0, a.jsx)(c.QuestsCard, {
            quest: s,
            location: o.QuestContent.GIFT_INVENTORY_FOR_YOU
          })
        })]
      }), (0, a.jsxs)(T.default, {
        withBorder: !0,
        children: [(0, a.jsx)(i.FormTitle, {
          children: "Channel Call Header"
        }), (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && (0, a.jsx)(i.Text, {
          color: "text-secondary",
          variant: "text-sm/normal",
          children: "The Quest Channel Call Header is hidden when the user has claimed the reward."
        }), (0, a.jsx)("div", {
          className: g.questBarPreviewWrapper,
          children: (0, a.jsx)(u.QuestsAssetContextProvider, {
            isPreview: !0,
            children: (0, a.jsx)("div", {
              className: g.questChannelCallHeaderPreview,
              children: (0, a.jsx)(S.default, {
                channelId: "123",
                previewQuest: s,
                isParticipatingOverride: L
              })
            })
          })
        })]
      }), (0, a.jsx)("div", {
        className: g.channelCallParticipationToggle,
        children: (0, a.jsx)(i.FormItem, {
          children: (0, a.jsx)(i.FormSwitch, {
            value: L,
            onChange: function(e) {
              D(e)
            },
            hideBorder: !0,
            children: "Is Participating:"
          })
        })
      })]
    })]
  })
}
class x extends n.Component {
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
      className: g.errorBoundary,
      children: [(0, a.jsx)(l.CircleExclamationPointIcon, {
        className: g.errorBoundaryIcon
      }), (0, a.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        children: "Something broke in the Quest preview tool :("
      }), (0, a.jsx)(i.Button, {
        color: i.ButtonColors.PRIMARY,
        onClick: this.handleResetState,
        children: "Reset"
      }), null != e.message && (0, a.jsx)(i.Card, {
        className: g.errorMessageWrapper,
        children: (0, a.jsx)("code", {
          className: g.errorMessage,
          children: e.message
        })
      })]
    }) : (0, a.jsx)(R, {}, t)
  }
  constructor(...e) {
    super(...e), N(this, "state", {
      error: null,
      renderKey: 0
    }), N(this, "handleResetState", () => {
      this.setState(e => ({
        error: null,
        renderKey: e.renderKey + 1
      }))
    })
  }
}
t.default = x