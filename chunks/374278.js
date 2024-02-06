"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var i = n("37983");
n("884691");
var l = n("77078"),
  r = n("95039"),
  s = n("305961"),
  a = n("957255"),
  o = n("145131"),
  c = n("181114"),
  u = n("599110"),
  d = n("488464"),
  f = n("998716"),
  h = n("923510"),
  v = n("49111"),
  p = n("646718"),
  C = n("782340"),
  m = n("400237");

function g(e) {
  var t;
  let n, {
      channel: g,
      transitionState: E,
      onClose: S
    } = e,
    I = s.default.getGuild(g.guild_id),
    _ = null !== (t = null == I ? void 0 : I.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
    L = !!(null == I ? void 0 : I.isCommunity()),
    x = C.default.Messages.STAGE_FULL_TITLE,
    M = L ? _ < v.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED : (null == I ? void 0 : I.premiumTier) !== v.BoostedGuildTiers.TIER_3 && _ <= v.MAX_STAGE_VIDEO_USER_LIMIT_TIER2,
    A = a.default.can(h.MODERATE_STAGE_CHANNEL_PERMISSIONS, g);
  n = L && (null == I ? void 0 : I.premiumTier) === v.BoostedGuildTiers.TIER_3 ? _ <= v.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED ? C.default.Messages.STAGE_FULL_BOOST_MORE_BODY : C.default.Messages.STAGE_FULL_MAX_BODY : M ? C.default.Messages.STAGE_FULL_BODY : C.default.Messages.STAGE_FULL_MAX_BODY;
  let R = () => {
      S(), u.default.track(v.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
        guild_id: g.guild_id,
        type: p.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
        is_moderator: A,
        action: p.BoostingUpsellAction.DISMISS
      })
    },
    N = d.default.getMutableParticipants(g.id, f.StageChannelParticipantNamedIndex.SPEAKER),
    T = N.filter(e => e.type === f.StageChannelParticipantTypes.VOICE),
    y = T.length,
    b = d.default.getParticipantCount(g.id, f.StageChannelParticipantNamedIndex.AUDIENCE);
  return u.default.track(v.AnalyticEvents.BOOSTING_UPSELL_VIEWED, {
    guild_id: g.guild_id,
    type: p.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
    is_moderator: A,
    listener_count: y + b
  }), (0, i.jsxs)(l.ModalRoot, {
    size: l.ModalSize.SMALL,
    transitionState: E,
    "aria-label": x,
    children: [(0, i.jsxs)(l.ModalHeader, {
      justify: o.default.Justify.END,
      separator: !1,
      className: m.header,
      children: [(0, i.jsx)("div", {
        className: m.fullArt
      }), (0, i.jsx)(l.ModalCloseButton, {
        onClick: S
      })]
    }), (0, i.jsxs)(l.ModalContent, {
      className: m.content,
      children: [(0, i.jsx)(l.Heading, {
        variant: "heading-xl/bold",
        children: x
      }), (0, i.jsx)(l.Text, {
        variant: "text-md/medium",
        children: n
      })]
    }), (0, i.jsx)(l.ModalFooter, {
      className: m.footer,
      children: M ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.Button, {
          look: l.ButtonLooks.LINK,
          className: m.noThanksButton,
          color: l.ButtonColors.CUSTOM,
          size: l.ButtonSizes.SMALL,
          onClick: R,
          children: C.default.Messages.NO_THANKS
        }), (0, i.jsx)(c.default, {
          onClick: () => {
            S(), (0, r.openGuildBoostingMarketingModal)({
              guildId: g.guild_id,
              location: {
                section: v.AnalyticsSections.STAGE_VIDEO_LIMIT
              }
            }), u.default.track(v.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
              guild_id: g.guild_id,
              type: p.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
              is_moderator: A,
              action: p.BoostingUpsellAction.BOOST
            })
          },
          size: l.ButtonSizes.SMALL,
          className: m.boostButton,
          children: C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
        })]
      }) : (0, i.jsx)(l.Button, {
        onClick: R,
        size: l.ButtonSizes.SMALL,
        color: l.ButtonColors.CUSTOM,
        className: m.boostButton,
        children: C.default.Messages.GOT_IT
      })
    })]
  })
}