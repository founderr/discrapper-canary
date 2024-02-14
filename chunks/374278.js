"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var i = n("37983");
n("884691");
var s = n("77078"),
  r = n("95039"),
  l = n("305961"),
  a = n("957255"),
  o = n("145131"),
  u = n("181114"),
  c = n("599110"),
  d = n("488464"),
  f = n("998716"),
  h = n("923510"),
  v = n("49111"),
  p = n("646718"),
  _ = n("782340"),
  C = n("821715");

function E(e) {
  var t;
  let n, {
      channel: E,
      transitionState: m,
      onClose: g
    } = e,
    I = l.default.getGuild(E.guild_id),
    S = null !== (t = null == I ? void 0 : I.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
    T = !!(null == I ? void 0 : I.isCommunity()),
    N = _.default.Messages.STAGE_FULL_TITLE,
    M = T ? S < v.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED : (null == I ? void 0 : I.premiumTier) !== v.BoostedGuildTiers.TIER_3 && S <= v.MAX_STAGE_VIDEO_USER_LIMIT_TIER2,
    A = a.default.can(h.MODERATE_STAGE_CHANNEL_PERMISSIONS, E);
  n = T && (null == I ? void 0 : I.premiumTier) === v.BoostedGuildTiers.TIER_3 ? S <= v.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED ? _.default.Messages.STAGE_FULL_BOOST_MORE_BODY : _.default.Messages.STAGE_FULL_MAX_BODY : M ? _.default.Messages.STAGE_FULL_BODY : _.default.Messages.STAGE_FULL_MAX_BODY;
  let R = () => {
      g(), c.default.track(v.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
        guild_id: E.guild_id,
        type: p.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
        is_moderator: A,
        action: p.BoostingUpsellAction.DISMISS
      })
    },
    x = d.default.getMutableParticipants(E.id, f.StageChannelParticipantNamedIndex.SPEAKER),
    L = x.filter(e => e.type === f.StageChannelParticipantTypes.VOICE),
    b = L.length,
    y = d.default.getParticipantCount(E.id, f.StageChannelParticipantNamedIndex.AUDIENCE);
  return c.default.track(v.AnalyticEvents.BOOSTING_UPSELL_VIEWED, {
    guild_id: E.guild_id,
    type: p.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
    is_moderator: A,
    listener_count: b + y
  }), (0, i.jsxs)(s.ModalRoot, {
    size: s.ModalSize.SMALL,
    transitionState: m,
    "aria-label": N,
    children: [(0, i.jsxs)(s.ModalHeader, {
      justify: o.default.Justify.END,
      separator: !1,
      className: C.header,
      children: [(0, i.jsx)("div", {
        className: C.fullArt
      }), (0, i.jsx)(s.ModalCloseButton, {
        onClick: g
      })]
    }), (0, i.jsxs)(s.ModalContent, {
      className: C.content,
      children: [(0, i.jsx)(s.Heading, {
        variant: "heading-xl/bold",
        children: N
      }), (0, i.jsx)(s.Text, {
        variant: "text-md/medium",
        children: n
      })]
    }), (0, i.jsx)(s.ModalFooter, {
      className: C.footer,
      children: M ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(s.Button, {
          look: s.ButtonLooks.LINK,
          className: C.noThanksButton,
          color: s.ButtonColors.CUSTOM,
          size: s.ButtonSizes.SMALL,
          onClick: R,
          children: _.default.Messages.NO_THANKS
        }), (0, i.jsx)(u.default, {
          onClick: () => {
            g(), (0, r.openGuildBoostingMarketingModal)({
              guildId: E.guild_id,
              location: {
                section: v.AnalyticsSections.STAGE_VIDEO_LIMIT
              }
            }), c.default.track(v.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
              guild_id: E.guild_id,
              type: p.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
              is_moderator: A,
              action: p.BoostingUpsellAction.BOOST
            })
          },
          size: s.ButtonSizes.SMALL,
          className: C.boostButton,
          children: _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
        })]
      }) : (0, i.jsx)(s.Button, {
        onClick: R,
        size: s.ButtonSizes.SMALL,
        color: s.ButtonColors.CUSTOM,
        className: C.boostButton,
        children: _.default.Messages.GOT_IT
      })
    })]
  })
}