n.d(t, {
  El: function() {
    return i
  },
  RN: function() {
    return c
  },
  X2: function() {
    return r
  },
  Zv: function() {
    return E
  },
  _e: function() {
    return o
  },
  fS: function() {
    return u
  },
  kS: function() {
    return l
  },
  n4: function() {
    return a
  },
  oL: function() {
    return d
  }
});
var s = n(689938);
let i = ["XBOX", "PLAYSTATION", "SWITCH", "PC"],
  l = 2592e4,
  a = "https://support.discord.com/hc/en-us/articles/9146392276375",
  r = {
    FORTNITE: "FORTNITE"
  },
  o = {
    STREAM_CTA: "STREAM_CTA",
    LOADING_INITIAL_PROGRESS: "LOADING_INITIAL_PROGRESS",
    TRACK_PROGRESS: "TRACK_PROGRESS",
    QUEST_COMPLETION: "QUEST_COMPLETION"
  },
  c = {
    FORTNITE: ["Fortnite"]
  },
  u = "YYYY-MM-DD HH:mm",
  d = "1022633972510752774",
  E = {
    [r.FORTNITE]: {
      title: "Fortnite",
      gameSearchTerm: c[r.FORTNITE],
      assets: {
        iconSrc: n(569655),
        tooltipSrc: n(836110),
        rewardSrc: n(945368)
      },
      dropsQuestId: d,
      dropsGameId: "432980957394370572",
      endDate: "2023-05-22 23:59",
      finalClaimDate: "2023-5-29 08:00",
      dropsNoticeBannerDurationDays: 3,
      articleUrl: a,
      messages: {
        claimTip: () => s.Z.Messages.FORTNITE_REDEMPTION_TIP.format({
          learnMoreUrl: "https://discord.com/blog/fortnite-quest"
        }),
        giftInfo: () => s.Z.Messages.FORTNITE_GIFT_INVENTORY_INFO.format({
          guardOutfitName: s.Z.Messages.FORNITE_GUARD_OUTPUT,
          rewardName: s.Z.Messages.FORTNITE_REWARD_NAME
        }),
        enrollmentTooltip: e => s.Z.Messages.FORTNITE_DROPS_ELIGIBILITY_ENROLLMENT_TOOLTIP.format({
          rewardName: s.Z.Messages.FORTNITE_REWARD_NAME,
          streamLengthRequirement: e
        }),
        completionTooltip: e => s.Z.Messages.FORTNITE_DROPS_COMPLETION_TOOLTIP.format({
          rewardName: s.Z.Messages.FORTNITE_REWARD_NAME,
          streamLengthRequirement: e
        })
      }
    }
  }