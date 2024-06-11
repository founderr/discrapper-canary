"use strict";
i.r(t), i.d(t, {
  default: function() {
    return M
  }
});
var s = i("735250");
i("470079");
var a = i("481060"),
  l = i("623624"),
  n = i("430824"),
  o = i("496675"),
  d = i("285952"),
  u = i("626135"),
  r = i("565799"),
  _ = i("501655"),
  c = i("146085"),
  E = i("981631"),
  S = i("474936"),
  T = i("689938"),
  I = i("471152");

function M(e) {
  var t;
  let i, {
      channel: M,
      transitionState: L,
      onClose: A
    } = e,
    g = n.default.getGuild(M.guild_id),
    p = null !== (t = null == g ? void 0 : g.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
    O = !!(null == g ? void 0 : g.isCommunity()),
    m = T.default.Messages.STAGE_FULL_TITLE,
    f = O ? p < E.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED : (null == g ? void 0 : g.premiumTier) !== E.BoostedGuildTiers.TIER_3 && p <= E.MAX_STAGE_VIDEO_USER_LIMIT_TIER2,
    B = o.default.can(c.MODERATE_STAGE_CHANNEL_PERMISSIONS, M);
  i = O && (null == g ? void 0 : g.premiumTier) === E.BoostedGuildTiers.TIER_3 ? p <= E.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED ? T.default.Messages.STAGE_FULL_BOOST_MORE_BODY : T.default.Messages.STAGE_FULL_MAX_BODY : f ? T.default.Messages.STAGE_FULL_BODY : T.default.Messages.STAGE_FULL_MAX_BODY;
  let C = () => {
      A(), u.default.track(E.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
        guild_id: M.guild_id,
        type: S.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
        is_moderator: B,
        action: S.BoostingUpsellAction.DISMISS
      })
    },
    U = r.default.getMutableParticipants(M.id, _.StageChannelParticipantNamedIndex.SPEAKER).filter(e => e.type === _.StageChannelParticipantTypes.VOICE).length,
    h = r.default.getParticipantCount(M.id, _.StageChannelParticipantNamedIndex.AUDIENCE);
  return u.default.track(E.AnalyticEvents.BOOSTING_UPSELL_VIEWED, {
    guild_id: M.guild_id,
    type: S.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
    is_moderator: B,
    listener_count: U + h
  }), (0, s.jsxs)(a.ModalRoot, {
    size: a.ModalSize.SMALL,
    transitionState: L,
    "aria-label": m,
    children: [(0, s.jsxs)(a.ModalHeader, {
      justify: d.default.Justify.END,
      separator: !1,
      className: I.header,
      children: [(0, s.jsx)("div", {
        className: I.fullArt
      }), (0, s.jsx)(a.ModalCloseButton, {
        onClick: A
      })]
    }), (0, s.jsxs)(a.ModalContent, {
      className: I.content,
      children: [(0, s.jsx)(a.Heading, {
        variant: "heading-xl/bold",
        children: m
      }), (0, s.jsx)(a.Text, {
        variant: "text-md/medium",
        children: i
      })]
    }), (0, s.jsx)(a.ModalFooter, {
      className: I.footer,
      children: f ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(a.Button, {
          look: a.ButtonLooks.LINK,
          className: I.noThanksButton,
          color: a.ButtonColors.CUSTOM,
          size: a.ButtonSizes.SMALL,
          onClick: C,
          children: T.default.Messages.NO_THANKS
        }), (0, s.jsx)(a.ShinyButton, {
          onClick: () => {
            A(), (0, l.openGuildBoostingMarketingModal)({
              guildId: M.guild_id,
              location: {
                section: E.AnalyticsSections.STAGE_VIDEO_LIMIT
              }
            }), u.default.track(E.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
              guild_id: M.guild_id,
              type: S.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
              is_moderator: B,
              action: S.BoostingUpsellAction.BOOST
            })
          },
          size: a.ButtonSizes.SMALL,
          className: I.boostButton,
          children: T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
        })]
      }) : (0, s.jsx)(a.Button, {
        onClick: C,
        size: a.ButtonSizes.SMALL,
        color: a.ButtonColors.CUSTOM,
        className: I.boostButton,
        children: T.default.Messages.GOT_IT
      })
    })]
  })
}