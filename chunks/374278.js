"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var i = n("37983");
n("884691");
var s = n("77078"),
  l = n("95039"),
  r = n("305961"),
  a = n("957255"),
  o = n("145131"),
  c = n("181114"),
  u = n("599110"),
  d = n("488464"),
  h = n("998716"),
  f = n("923510"),
  p = n("49111"),
  v = n("646718"),
  C = n("782340"),
  g = n("400237");

function m(e) {
  var t;
  let n, {
      channel: m,
      transitionState: E,
      onClose: _
    } = e,
    I = r.default.getGuild(m.guild_id),
    S = null !== (t = null == I ? void 0 : I.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
    L = !!(null == I ? void 0 : I.isCommunity()),
    M = C.default.Messages.STAGE_FULL_TITLE,
    A = L ? S < p.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED : (null == I ? void 0 : I.premiumTier) !== p.BoostedGuildTiers.TIER_3 && S <= p.MAX_STAGE_VIDEO_USER_LIMIT_TIER2,
    R = a.default.can(f.MODERATE_STAGE_CHANNEL_PERMISSIONS, m);
  n = L && (null == I ? void 0 : I.premiumTier) === p.BoostedGuildTiers.TIER_3 ? S <= p.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED ? C.default.Messages.STAGE_FULL_BOOST_MORE_BODY : C.default.Messages.STAGE_FULL_MAX_BODY : A ? C.default.Messages.STAGE_FULL_BODY : C.default.Messages.STAGE_FULL_MAX_BODY;
  let x = () => {
      _(), u.default.track(p.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
        guild_id: m.guild_id,
        type: v.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
        is_moderator: R,
        action: v.BoostingUpsellAction.DISMISS
      })
    },
    T = d.default.getMutableParticipants(m.id, h.StageChannelParticipantNamedIndex.SPEAKER),
    N = T.filter(e => e.type === h.StageChannelParticipantTypes.VOICE),
    b = N.length,
    y = d.default.getParticipantCount(m.id, h.StageChannelParticipantNamedIndex.AUDIENCE);
  return u.default.track(p.AnalyticEvents.BOOSTING_UPSELL_VIEWED, {
    guild_id: m.guild_id,
    type: v.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
    is_moderator: R,
    listener_count: b + y
  }), (0, i.jsxs)(s.ModalRoot, {
    size: s.ModalSize.SMALL,
    transitionState: E,
    "aria-label": M,
    children: [(0, i.jsxs)(s.ModalHeader, {
      justify: o.default.Justify.END,
      separator: !1,
      className: g.header,
      children: [(0, i.jsx)("div", {
        className: g.fullArt
      }), (0, i.jsx)(s.ModalCloseButton, {
        onClick: _
      })]
    }), (0, i.jsxs)(s.ModalContent, {
      className: g.content,
      children: [(0, i.jsx)(s.Heading, {
        variant: "heading-xl/bold",
        children: M
      }), (0, i.jsx)(s.Text, {
        variant: "text-md/medium",
        children: n
      })]
    }), (0, i.jsx)(s.ModalFooter, {
      className: g.footer,
      children: A ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(s.Button, {
          look: s.ButtonLooks.LINK,
          className: g.noThanksButton,
          color: s.ButtonColors.CUSTOM,
          size: s.ButtonSizes.SMALL,
          onClick: x,
          children: C.default.Messages.NO_THANKS
        }), (0, i.jsx)(c.default, {
          onClick: () => {
            _(), (0, l.openGuildBoostingMarketingModal)({
              guildId: m.guild_id,
              location: {
                section: p.AnalyticsSections.STAGE_VIDEO_LIMIT
              }
            }), u.default.track(p.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
              guild_id: m.guild_id,
              type: v.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
              is_moderator: R,
              action: v.BoostingUpsellAction.BOOST
            })
          },
          size: s.ButtonSizes.SMALL,
          className: g.boostButton,
          children: C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
        })]
      }) : (0, i.jsx)(s.Button, {
        onClick: x,
        size: s.ButtonSizes.SMALL,
        color: s.ButtonColors.CUSTOM,
        className: g.boostButton,
        children: C.default.Messages.GOT_IT
      })
    })]
  })
}