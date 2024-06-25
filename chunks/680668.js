n.d(t, {
  Z: function() {
    return N
  }
}), n(789020);
var s = n(735250);
n(470079);
var i = n(533800),
  l = n(481060),
  a = n(358555),
  r = n(131704),
  o = n(197409),
  c = n(630388),
  u = n(267642),
  d = n(411198),
  E = n(277707),
  _ = n(358595),
  I = n(981631),
  T = n(689938),
  m = n(637091);

function N(e) {
  var t, N;
  let h, C, S, {
      onTransitionToInviteChannel: A,
      onAcceptInstantInvite: g,
      guild: p,
      invite: f,
      author: R,
      currentUserId: O
    } = e,
    M = O === R.id,
    {
      channel: x,
      approximate_member_count: v,
      approximate_presence_count: L
    } = f,
    Z = f.state === I.r2o.ACCEPTING,
    P = null != x ? (0, r.jD)(x) : null,
    D = null != p,
    j = null != P,
    U = null != P && P.isGuildVocal(),
    b = null != P && P.isGuildStageVoice(),
    y = (0, c.yE)(null !== (t = f.flags) && void 0 !== t ? t : 0, i.$.IS_GUEST_INVITE),
    B = null !== (N = null == p ? void 0 : p.hasFeature(I.oNc.HUB)) && void 0 !== N && N;
  if (null == p) {
    if (null == f.guild) return (0, s.jsx)(_.Z, {});
    p = d.Qs(f.guild);
    let e = (0, u.rF)(f.guild.premium_subscription_count, f.guild.id);
    p.premiumTier = e
  }
  let k = D ? A : g,
    G = (0, E.e)({
      isVoiceChannel: U,
      isOwnInvite: M,
      isGuest: y,
      isHubGuild: B,
      isStage: b,
      isStream: !1
    });
  return C = (0, s.jsxs)("span", {
    className: m.infoTitle,
    children: [(0, s.jsx)(o.Z.GuildName, {
      guild: p
    }), (0, s.jsx)("span", {
      className: m.infoBadge,
      children: (0, s.jsx)(a.Z, {
        guild: p,
        isBannerVisible: !1,
        disableBoostClick: !0
      })
    })]
  }), y && (S = (0, s.jsx)(l.TooltipContainer, {
    className: m.tooltipContainer,
    text: T.Z.Messages.GUEST_MEMBERSHIP_EXPLANATION,
    children: (0, s.jsx)(l.CircleInformationIcon, {
      size: "md",
      color: "currentColor",
      className: m.infoIcon
    })
  })), U ? (C = (0, s.jsx)(o.Z.Channel, {
    channel: P
  }), h = (0, s.jsxs)("span", {
    className: m.infoTitle,
    children: [T.Z.Messages.INVITE_BUTTON_BODY_IN_GUILD.format({
      guildName: p.name
    }), (0, s.jsx)("span", {
      className: m.infoBadge,
      children: (0, s.jsx)(a.Z, {
        guild: p,
        isBannerVisible: !1
      })
    })]
  })) : null != v && v >= 5 || null != L && L > 0 ? h = (0, s.jsx)(o.Z.Data, {
    members: v,
    membersOnline: L
  }) : j && (h = (0, s.jsx)(o.Z.Channel, {
    channel: P,
    guild: p
  })), (0, s.jsxs)(o.Z, {
    children: [(0, s.jsx)(o.Z.GuildSplash, {
      guild: p
    }), (0, s.jsx)(o.Z.Header, {
      text: G,
      extra: S
    }), (0, s.jsxs)(o.Z.Body, {
      children: [(0, s.jsxs)("div", {
        className: m.headerLine,
        children: [(0, s.jsx)(o.Z.Icon, {
          guild: p
        }), (0, s.jsx)(o.Z.Info, {
          title: C,
          onClick: D ? k : null,
          children: h
        })]
      }), (0, s.jsx)(o.Z.Button, {
        onClick: k,
        submitting: Z,
        color: o.Z.Button.Colors.GREEN,
        children: U ? b ? T.Z.Messages.STAGE_CHANNEL_JOIN : T.Z.Messages.INVITE_VOICE_CHANNEL_JOIN : D ? T.Z.Messages.JOINED_GUILD : T.Z.Messages.JOIN_GUILD
      })]
    }), p.hasFeature(I.oNc.HUB) && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("div", {
        className: m.separator
      }), (0, s.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: T.Z.Messages.HUB_INVITE_ANOTHER_SCHOOL_LINK.format({
          onClick: () => (0, l.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("95468"), n.e("83983")]).then(n.bind(n, 650233));
            return t => (0, s.jsx)(e, {
              ...t
            })
          })
        })
      })]
    })]
  })
}