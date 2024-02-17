"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("65597"),
  r = n("797350"),
  o = n("237020"),
  u = n("352567"),
  d = n("305861"),
  c = n("715072"),
  f = n("77078"),
  h = n("917397"),
  m = n("290491"),
  p = n("305961"),
  E = n("18494"),
  g = n("124969"),
  S = n("153769"),
  C = n("994906"),
  _ = n("136281"),
  I = n("782340"),
  T = n("865331");

function v(e) {
  let {
    member: t
  } = e, n = (0, i.default)([p.default], () => p.default.getGuild(t.guildId), [t.guildId]), a = (0, h.useUserAccountVerified)(t.userId), v = (0, h.useUserRulesAgreementLevel)(t.userId, t.guildId), x = (0, h.useUserAccountAgeDate)(t.userId), N = (0, h.useGuildMemberJoinedAtDate)(t.userId, t.guildId);
  return null == n ? null : (0, l.jsx)("div", {
    className: s(T.safetySignalsMainContainer),
    children: (0, l.jsx)(f.FormItem, {
      title: I.default.Messages.ACCOUNT,
      titleClassName: T.infoTitle,
      children: (0, l.jsxs)(_.UserModInfoItemContainer, {
        children: [(0, l.jsx)(_.UserModInfoItem, {
          icon: (0, l.jsx)(d.ShieldUserIcon, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX,
            className: T.unusualDMLabelIcon
          }),
          name: (0, l.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: I.default.Messages.MEMBER_VERIFICATION_ACCOUNT_VERIFIED
          }),
          description: a ? (0, l.jsx)(o.CheckmarkBoldIcon, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX,
            color: f.tokens.colors.INFO_POSITIVE_FOREGROUND
          }) : (0, l.jsx)(u.CloseLargeBoldIcon, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX,
            color: f.tokens.colors.INFO_DANGER_FOREGROUND
          })
        }), v !== h.UserRulesAgreementLevel.NO_GATE && (0, l.jsx)(_.UserModInfoItem, {
          icon: (0, l.jsx)(r.BookCheckIcon, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX,
            className: T.unusualDMLabelIcon
          }),
          name: (0, l.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: I.default.Messages.GUILD_MEMBER_MOD_VIEW_AGREE_TO_RULES
          }),
          description: v === h.UserRulesAgreementLevel.AGREED ? (0, l.jsx)(o.CheckmarkBoldIcon, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX,
            color: f.tokens.colors.INFO_POSITIVE_FOREGROUND
          }) : (0, l.jsx)(u.CloseLargeBoldIcon, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX,
            color: f.tokens.colors.INFO_DANGER_FOREGROUND
          })
        }), (0, l.jsx)(_.UserModInfoItem, {
          icon: (0, l.jsx)(S.default, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX
          }),
          name: (0, l.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: I.default.Messages.GUILD_MEMBER_MOD_VIEW_DISCORD_JOIN_DATE
          }),
          description: (0, l.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: x
          })
        }), (0, l.jsx)(_.UserModInfoItem, {
          icon: (0, l.jsx)(g.GuildIcon, {
            guild: n,
            size: g.GuildIcon.Sizes.SMOL,
            animate: !1,
            className: T.guildIcon
          }),
          name: (0, l.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: I.default.Messages.GUILD_MEMBER_MOD_VIEW_GUILD_JOIN_DATE
          }),
          description: (0, l.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: N
          })
        }), (0, l.jsx)(_.UserModInfoItem, {
          icon: (0, l.jsx)(c.UserPlusIcon, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX
          }),
          name: (0, l.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: I.default.Messages.GUILD_MEMBER_MOD_VIEW_INVITE_LINK_LABEL
          }),
          description: (0, l.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: (0, l.jsx)(m.default, {
              userId: t.userId,
              guildId: t.guildId,
              showInviterAsFooter: !0,
              onClickInviter: e => {
                let n = E.default.getChannelId();
                (0, C.openGuildMemberModViewSidebar)(t.guildId, e.id, null != n ? n : "")
              }
            })
          })
        })]
      })
    })
  })
}