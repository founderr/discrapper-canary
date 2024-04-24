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
  S = s("478977"),
  E = s("456799"),
  T = s("210851"),
  m = s("602683"),
  f = s("899457"),
  _ = s("797565");

function g(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let h = ["svg", "png", "gif", "webp"],
  I = [...h, "jpg", "jpeg"],
  N = Array.from(new Set([...I, "gif", "mp4", "webm"]));

function p() {
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
let C = {
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
    inGameQuestConfig: null
  },
  userStatus: null,
  targetedContent: []
};

function A() {
  var e;
  let [t, s] = n.useState(C), [l, g] = n.useState(f.UserState.UNENROLLED);

  function A(e, a) {
    s({
      ...t,
      config: {
        ...t.config,
        assets: {
          ...t.config.assets,
          [e]: a
        }
      }
    })
  }

  function O(e, a) {
    s({
      ...t,
      config: {
        ...t.config,
        messages: {
          ...t.config.messages,
          [e]: a
        }
      }
    })
  }

  function x(e, a) {
    s({
      ...t,
      config: {
        ...t.config,
        colors: {
          ...t.config.colors,
          [e]: a
        }
      }
    })
  }
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-lg/bold",
      className: _.heading,
      children: "Quest Preview Tool"
    }), (0, a.jsx)(i.Heading, {
      variant: "heading-md/semibold",
      className: _.subheading,
      children: "Messages"
    }), (0, a.jsxs)("div", {
      className: _.fields,
      children: [(0, a.jsx)(m.default, {
        title: "Quest Name",
        assetKey: "questName",
        onMessageChange: O,
        initialValue: t.config.messages.questName
      }), (0, a.jsx)(m.default, {
        title: "Game Title",
        assetKey: "gameTitle",
        onMessageChange: O,
        initialValue: t.config.messages.gameTitle
      }), (0, a.jsx)(m.default, {
        title: "Reward Name",
        assetKey: "rewardName",
        onMessageChange: O,
        initialValue: t.config.messages.rewardName
      }), (0, a.jsx)(m.default, {
        title: "Reward Name With Article",
        assetKey: "rewardNameWithArticle",
        onMessageChange: O,
        initialValue: t.config.messages.rewardNameWithArticle
      })]
    }), (0, a.jsx)(i.Heading, {
      variant: "heading-md/semibold",
      className: _.subheading,
      children: "Assets"
    }), (0, a.jsxs)("div", {
      className: _.fields,
      children: [(0, a.jsx)(T.default, {
        title: "Game Tile Asset",
        assetKey: "gameTile",
        onFileChange: A,
        filters: I,
        initialValue: t.config.assets.gameTile
      }), (0, a.jsx)(T.default, {
        title: "Logotype",
        assetKey: "logotype",
        onFileChange: A,
        filters: h,
        initialValue: t.config.assets.logotype
      }), (0, a.jsx)(T.default, {
        title: "Quest Bar Hero Asset",
        assetKey: "questBarHero",
        onFileChange: A,
        filters: N,
        initialValue: t.config.assets.questBarHero
      }), (0, a.jsx)(T.default, {
        title: "Reward Tile Asset",
        assetKey: "rewardTile",
        onFileChange: A,
        filters: N,
        initialValue: t.config.assets.rewardTile
      }), (0, a.jsx)(T.default, {
        title: "Gift Inventory Hero",
        assetKey: "hero",
        onFileChange: A,
        filters: N,
        initialValue: t.config.assets.hero
      })]
    }), (0, a.jsx)(i.Heading, {
      variant: "heading-md/semibold",
      className: _.subheading,
      children: "Colors & Quest States"
    }), (0, a.jsxs)("div", {
      className: _.fields,
      children: [(0, a.jsxs)("div", {
        className: _.fields,
        children: [(0, a.jsx)(S.default, {
          title: "Primary",
          colorKey: "primary",
          onChange: x,
          value: t.config.colors.primary
        }), (0, a.jsx)(S.default, {
          title: "Secondary",
          colorKey: "secondary",
          onChange: x,
          value: t.config.colors.secondary
        })]
      }), (0, a.jsx)(f.default, {
        onChange: function(e) {
          switch (g(e), e) {
            case f.UserState.UNENROLLED:
              s({
                ...t,
                userStatus: null
              });
              break;
            case f.UserState.ENROLLED:
              s({
                ...t,
                userStatus: p({
                  enrolledAt: new Date().toISOString()
                })
              });
              break;
            case f.UserState.COMPLETED_25:
              s({
                ...t,
                userStatus: p({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * r.default.Seconds.MINUTE * .25
                })
              });
              break;
            case f.UserState.COMPLETED_50:
              s({
                ...t,
                userStatus: p({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * r.default.Seconds.MINUTE * .5
                })
              });
              break;
            case f.UserState.COMPLETED_75:
              s({
                ...t,
                userStatus: p({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * r.default.Seconds.MINUTE * .75
                })
              });
              break;
            case f.UserState.COMPLETED_100:
              s({
                ...t,
                userStatus: p({
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * r.default.Seconds.MINUTE
                })
              });
              break;
            case f.UserState.CLAIMED:
              s({
                ...t,
                userStatus: p({
                  claimedAt: new Date().toISOString(),
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * r.default.Seconds.MINUTE
                })
              })
          }
        },
        value: l
      })]
    }), (0, a.jsx)(i.Heading, {
      variant: "heading-lg/bold",
      className: _.heading,
      children: "Component Previews"
    }), (0, a.jsxs)("div", {
      className: _.componentPreviews,
      children: [(0, a.jsxs)(E.default, {
        withBorder: !0,
        children: [(0, a.jsx)(i.FormTitle, {
          children: "Quest Bar"
        }), (0, a.jsxs)("div", {
          className: _.questBarPreviewWrapper,
          children: [(null === (e = t.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null && (0, a.jsx)(i.Text, {
            color: "text-secondary",
            variant: "text-sm/normal",
            children: "The Quest Bar is hidden when the user has claimed the reward."
          }), (0, a.jsx)("div", {
            className: _.questBarPreview,
            children: (0, a.jsx)(u.QuestsAssetContextProvider, {
              isPreview: !0,
              children: (0, a.jsx)(d.default, {
                overrideQuest: t
              })
            })
          })]
        })]
      }), (0, a.jsxs)(E.default, {
        children: [(0, a.jsx)(i.FormTitle, {
          children: "Gift Inventory"
        }), (0, a.jsx)(u.QuestsAssetContextProvider, {
          isPreview: !0,
          children: (0, a.jsx)(c.QuestsCard, {
            quest: t,
            location: o.QuestContent.QUEST_INVENTORY_CARD
          })
        })]
      })]
    })]
  })
}
class O extends n.Component {
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
      className: _.errorBoundary,
      children: [(0, a.jsx)(l.CircleExclamationPointIcon, {
        className: _.errorBoundaryIcon
      }), (0, a.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        children: "Something broke in the Quest preview tool :("
      }), (0, a.jsx)(i.Button, {
        color: i.ButtonColors.PRIMARY,
        onClick: this.handleResetState,
        children: "Reset"
      }), null != e.message && (0, a.jsx)(i.Card, {
        className: _.errorMessageWrapper,
        children: (0, a.jsx)("code", {
          className: _.errorMessage,
          children: e.message
        })
      })]
    }) : (0, a.jsx)(A, {}, t)
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
t.default = O