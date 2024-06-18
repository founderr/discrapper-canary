"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(535322),
  l = n(31698),
  u = n(528771),
  _ = n(267642),
  c = n(981631),
  d = n(474936),
  E = n(689938),
  I = n(553392);
let T = [{
  tier: c.Eu4.TIER_1,
  perks: [{
    icon: o.ReactionIcon,
    getCopy: () => E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_CUSTOM_EMOJI.format({
      numEmojiSlots: d.HO[c.Eu4.TIER_1].limits.emoji
    })
  }, {
    icon: o.SoundboardIcon,
    getCopy: () => E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_CUSTOM_SOUNDS.format({
      numSoundboardSlots: d.HO[c.Eu4.TIER_1].limits.soundboardSounds
    }),
    isNew: !0
  }, {
    icon: o.GifIcon,
    getCopy: () => E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ANIMATED_GUILD_ICON
  }, {
    icon: o.VoiceNormalIcon,
    getCopy: () => E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_AUDIO_QUALITY
  }]
}, {
  tier: c.Eu4.TIER_2,
  perks: [{
    icon: o.ScreenArrowIcon,
    getCopy: () => E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_STREAM_QUALITY
  }, {
    icon: o.UploadIcon,
    getCopy: () => E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_LARGER_FILE_UPLOADS.format({
      uploadSizeLimit: E.Z.Messages.FILE_UPLOAD_LIMIT_BOOSTED_GUILD_TIER_2
    })
  }, {
    icon: o.ReactionIcon,
    getCopy: () => E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ROLE_ICONS
  }, {
    icon: o.ServerGridIcon,
    getCopy: () => E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_GUILD_BANNER
  }]
}, {
  tier: c.Eu4.TIER_3,
  perks: [{
    icon: o.LinkIcon,
    getCopy: () => E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_VANITY_URL
  }, {
    icon: o.UploadIcon,
    getCopy: () => E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_LARGER_FILE_UPLOADS.format({
      uploadSizeLimit: E.Z.Messages.FILE_UPLOAD_LIMIT_BOOSTED_GUILD_TIER_3
    })
  }, {
    icon: o.VoiceNormalIcon,
    getCopy: () => E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_HIGHEST_AUDIO_QUALITY
  }, {
    icon: o.GifIcon,
    getCopy: () => E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ANIMATED_GUILD_BANNER
  }, {
    icon: o.StageIcon,
    getCopy: () => E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_STAGE_SEATS_AND_MORE.format({
      numStageSeats: c.RcX
    })
  }]
}];
t.Z = function(e) {
  let {
    guild: t
  } = e;
  return (0, i.jsx)("div", {
    className: I.tierCards,
    children: T.map(e => (0, i.jsxs)("div", {
      className: I.tierCard,
      children: [e.tier === c.Eu4.TIER_3 && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: s()(I.tierCardBorderHighlight, I.tierCardBorderHighlightTopRight)
        }), (0, i.jsx)("div", {
          className: s()(I.tierCardBorderHighlight, I.tierCardBorderHighlightBottomLeft)
        }), (0, i.jsxs)("div", {
          className: s()(I.tierCardSparkleHighlight, I.tierCardSparkleHighlightTopRight),
          children: [(0, i.jsx)(u.Z, {
            className: I.tierCardSparkle1
          }), (0, i.jsx)(u.Z, {
            className: I.tierCardSparkle2
          }), (0, i.jsx)(l.Z, {
            className: I.tierCardSparkle3
          })]
        }), (0, i.jsx)("div", {
          className: s()(I.tierCardSparkleHighlight, I.tierCardSparkleHighlightBottomLeft),
          children: (0, i.jsx)(u.Z, {
            className: I.tierCardSparkle1
          })
        })]
      }), e.tier === t.premiumTier && (0, i.jsx)(o.Text, {
        className: I.tierCardCurrentTier,
        tag: "div",
        variant: "text-xs/semibold",
        color: "always-white",
        children: E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_CURRENT_TIER_LABEL
      }), (0, i.jsxs)("div", {
        className: I.tierCardHeader,
        children: [(0, i.jsx)(o.Heading, {
          className: I.tierCardHeading,
          variant: "heading-xxl/semibold",
          color: "always-white",
          children: (0, _.nW)(e.tier, {
            useLevels: !1
          })
        }), (0, i.jsx)(o.Text, {
          className: I.tierCardBoostRequirement,
          variant: "text-md/normal",
          color: "always-white",
          children: E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTS_REQUIRED.format({
            numBoostsRequired: c.oCV[e.tier]
          })
        })]
      }), (0, i.jsx)("ul", {
        className: I.tierCardList,
        children: e.perks.map((e, t) => null == e.predicate || e.predicate() ? (0, i.jsxs)("li", {
          className: I.tierCardPerkRow,
          children: [(0, i.jsxs)(o.Text, {
            className: I.tierCardListItem,
            variant: "text-md/normal",
            color: "always-white",
            children: [(0, i.jsx)(e.icon, {
              className: I.tierCardListIcon
            }), e.getCopy()]
          }), e.isNew ? (0, i.jsx)(a.Z, {
            className: I.tierCardNewFeatureBadge,
            forceUseColorForSparkles: !0,
            shouldInheritBackgroundColor: !0,
            shouldInheritTextColor: !0
          }) : null]
        }, t) : null)
      })]
    }, e.tier))
  })
}