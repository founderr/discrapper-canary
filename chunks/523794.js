s.r(t), s.d(t, {
  default: function() {
    return M
  }
});
var i = s(735250);
s(470079);
var o = s(481060),
  a = s(623624),
  n = s(430824),
  l = s(496675),
  d = s(285952),
  r = s(626135),
  u = s(565799),
  c = s(501655),
  _ = s(146085),
  S = s(981631),
  T = s(474936),
  E = s(689938),
  L = s(499352);

function M(e) {
  var t;
  let s, {
      channel: M,
      transitionState: I,
      onClose: g
    } = e,
    O = n.Z.getGuild(M.guild_id),
    B = null !== (t = null == O ? void 0 : O.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
    C = !!(null == O ? void 0 : O.isCommunity()),
    h = E.Z.Messages.STAGE_FULL_TITLE,
    m = C ? B < S.TU7 : (null == O ? void 0 : O.premiumTier) !== S.Eu4.TIER_3 && B <= S.eez,
    p = l.Z.can(_.yP, M);
  s = C && (null == O ? void 0 : O.premiumTier) === S.Eu4.TIER_3 ? B <= S.TU7 ? E.Z.Messages.STAGE_FULL_BOOST_MORE_BODY : E.Z.Messages.STAGE_FULL_MAX_BODY : m ? E.Z.Messages.STAGE_FULL_BODY : E.Z.Messages.STAGE_FULL_MAX_BODY;
  let x = () => {
      g(), r.default.track(S.rMx.BOOSTING_UPSELL_CLICKED, {
        guild_id: M.guild_id,
        type: T.cd.VIDEO_STAGE_LIMIT,
        is_moderator: p,
        action: T.T7.DISMISS
      })
    },
    A = u.Z.getMutableParticipants(M.id, c.pV.SPEAKER).filter(e => e.type === c.Ui.VOICE).length,
    U = u.Z.getParticipantCount(M.id, c.pV.AUDIENCE);
  return r.default.track(S.rMx.BOOSTING_UPSELL_VIEWED, {
    guild_id: M.guild_id,
    type: T.cd.VIDEO_STAGE_LIMIT,
    is_moderator: p,
    listener_count: A + U
  }), (0, i.jsxs)(o.ModalRoot, {
    size: o.ModalSize.SMALL,
    transitionState: I,
    "aria-label": h,
    children: [(0, i.jsxs)(o.ModalHeader, {
      justify: d.Z.Justify.END,
      separator: !1,
      className: L.header,
      children: [(0, i.jsx)("div", {
        className: L.fullArt
      }), (0, i.jsx)(o.ModalCloseButton, {
        onClick: g
      })]
    }), (0, i.jsxs)(o.ModalContent, {
      className: L.content,
      children: [(0, i.jsx)(o.Heading, {
        variant: "heading-xl/bold",
        children: h
      }), (0, i.jsx)(o.Text, {
        variant: "text-md/medium",
        children: s
      })]
    }), (0, i.jsx)(o.ModalFooter, {
      className: L.footer,
      children: m ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.Button, {
          look: o.ButtonLooks.LINK,
          className: L.noThanksButton,
          color: o.ButtonColors.CUSTOM,
          size: o.ButtonSizes.SMALL,
          onClick: x,
          children: E.Z.Messages.NO_THANKS
        }), (0, i.jsx)(o.ShinyButton, {
          onClick: () => {
            g(), (0, a.f)({
              guildId: M.guild_id,
              location: {
                section: S.jXE.STAGE_VIDEO_LIMIT
              }
            }), r.default.track(S.rMx.BOOSTING_UPSELL_CLICKED, {
              guild_id: M.guild_id,
              type: T.cd.VIDEO_STAGE_LIMIT,
              is_moderator: p,
              action: T.T7.BOOST
            })
          },
          size: o.ButtonSizes.SMALL,
          className: L.boostButton,
          children: E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION
        })]
      }) : (0, i.jsx)(o.Button, {
        onClick: x,
        size: o.ButtonSizes.SMALL,
        color: o.ButtonColors.CUSTOM,
        className: L.boostButton,
        children: E.Z.Messages.GOT_IT
      })
    })]
  })
}