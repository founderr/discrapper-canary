"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
});
var i = s("37983");
s("884691");
var r = s("414456"),
  a = s.n(r),
  l = s("77078"),
  o = s("441413"),
  n = s("46829"),
  u = s("700297"),
  d = s("549586"),
  c = s("110006"),
  E = s("83900"),
  _ = s("394832"),
  T = s("754576"),
  I = s("277703"),
  f = s("16988"),
  N = s("368121"),
  R = s("228427"),
  g = s("507491"),
  m = s("427459"),
  S = s("49111"),
  M = s("646718"),
  h = s("782340"),
  G = s("694643");
let p = [{
  tier: S.BoostedGuildTiers.TIER_1,
  perks: [{
    icon: n.default,
    getCopy: () => h.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_CUSTOM_EMOJI.format({
      numEmojiSlots: M.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_1].limits.emoji
    })
  }, {
    icon: T.default,
    getCopy: () => h.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_CUSTOM_SOUNDS.format({
      numSoundboardSlots: M.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_1].limits.soundboardSounds
    }),
    isNew: !0
  }, {
    icon: c.default,
    getCopy: () => h.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ANIMATED_GUILD_ICON
  }, {
    icon: N.default,
    getCopy: () => h.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_AUDIO_QUALITY
  }]
}, {
  tier: S.BoostedGuildTiers.TIER_2,
  perks: [{
    icon: _.default,
    getCopy: () => h.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_STREAM_QUALITY
  }, {
    icon: g.default,
    getCopy: () => h.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_LARGER_FILE_UPLOADS.format({
      uploadSizeLimit: h.default.Messages.FILE_UPLOAD_LIMIT_BOOSTED_GUILD_TIER_2
    })
  }, {
    icon: u.default,
    getCopy: () => h.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ROLE_ICONS
  }, {
    icon: d.default,
    getCopy: () => h.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_GUILD_BANNER
  }]
}, {
  tier: S.BoostedGuildTiers.TIER_3,
  perks: [{
    icon: E.default,
    getCopy: () => h.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_VANITY_URL
  }, {
    icon: g.default,
    getCopy: () => h.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_LARGER_FILE_UPLOADS.format({
      uploadSizeLimit: h.default.Messages.FILE_UPLOAD_LIMIT_BOOSTED_GUILD_TIER_3
    })
  }, {
    icon: N.default,
    getCopy: () => h.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_HIGHEST_AUDIO_QUALITY
  }, {
    icon: c.default,
    getCopy: () => h.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ANIMATED_GUILD_BANNER
  }, {
    icon: R.default,
    getCopy: () => h.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_STAGE_SEATS_AND_MORE.format({
      numStageSeats: S.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
    })
  }]
}];
var x = function(e) {
  let {
    guild: t
  } = e;
  return (0, i.jsx)("div", {
    className: G.tierCards,
    children: p.map(e => (0, i.jsxs)("div", {
      className: G.tierCard,
      children: [e.tier === S.BoostedGuildTiers.TIER_3 && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: a(G.tierCardBorderHighlight, G.tierCardBorderHighlightTopRight)
        }), (0, i.jsx)("div", {
          className: a(G.tierCardBorderHighlight, G.tierCardBorderHighlightBottomLeft)
        }), (0, i.jsxs)("div", {
          className: a(G.tierCardSparkleHighlight, G.tierCardSparkleHighlightTopRight),
          children: [(0, i.jsx)(f.default, {
            className: G.tierCardSparkle1
          }), (0, i.jsx)(f.default, {
            className: G.tierCardSparkle2
          }), (0, i.jsx)(I.default, {
            className: G.tierCardSparkle3
          })]
        }), (0, i.jsx)("div", {
          className: a(G.tierCardSparkleHighlight, G.tierCardSparkleHighlightBottomLeft),
          children: (0, i.jsx)(f.default, {
            className: G.tierCardSparkle1
          })
        })]
      }), e.tier === t.premiumTier && (0, i.jsx)(l.Text, {
        className: G.tierCardCurrentTier,
        tag: "div",
        variant: "text-xs/semibold",
        color: "always-white",
        children: h.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_CURRENT_TIER_LABEL
      }), (0, i.jsxs)("div", {
        className: G.tierCardHeader,
        children: [(0, i.jsx)(l.Heading, {
          className: G.tierCardHeading,
          variant: "heading-xxl/semibold",
          color: "always-white",
          children: (0, m.getTierName)(e.tier, {
            useLevels: !1
          })
        }), (0, i.jsx)(l.Text, {
          className: G.tierCardBoostRequirement,
          variant: "text-md/normal",
          color: "always-white",
          children: h.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTS_REQUIRED.format({
            numBoostsRequired: S.AppliedGuildBoostsRequiredForBoostedGuildTier[e.tier]
          })
        })]
      }), (0, i.jsx)("ul", {
        className: G.tierCardList,
        children: e.perks.map((e, t) => null == e.predicate || e.predicate() ? (0, i.jsxs)("li", {
          className: G.tierCardPerkRow,
          children: [(0, i.jsxs)(l.Text, {
            className: G.tierCardListItem,
            variant: "text-md/normal",
            color: "always-white",
            children: [(0, i.jsx)(e.icon, {
              className: G.tierCardListIcon
            }), e.getCopy()]
          }), e.isNew ? (0, i.jsx)(o.default, {
            className: G.tierCardNewFeatureBadge,
            forceUseColorForSparkles: !0,
            shouldInheritBackgroundColor: !0,
            shouldInheritTextColor: !0
          }) : null]
        }, t) : null)
      })]
    }, e.tier))
  })
}