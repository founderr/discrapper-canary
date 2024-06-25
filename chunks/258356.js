n.d(t, {
  X: function() {
    return I
  },
  Z: function() {
    return h
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  r = n(742593),
  a = n(390072),
  l = n(601964),
  o = n(940627),
  c = n(346656),
  u = n(230224),
  d = n(689938),
  _ = n(369912);

function E(e) {
  var t;
  let {
    guildScheduledEvent: n,
    channel: l,
    onAcceptInvite: o,
    isSubmitting: c
  } = e;
  return (0, s.jsxs)("div", {
    className: _.guildEventCard,
    children: [(0, s.jsx)(r.ZP, {
      name: n.name,
      description: null !== (t = n.description) && void 0 !== t ? t : void 0,
      headerVariant: "heading-md/medium",
      descriptionClassName: _.__invalid_channelDescription,
      guildId: n.guild_id,
      guildEvent: n,
      eventPreview: n
    }), null != l && (0, s.jsx)("div", {
      className: _.channelInfo,
      children: (0, s.jsx)(a.Z, {
        guildScheduledEvent: n,
        channel: l
      })
    }), (0, s.jsx)(i.Button, {
      className: _.acceptButton,
      color: i.Button.Colors.GREEN,
      onClick: o,
      submitting: c,
      children: d.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
    })]
  })
}

function I(e) {
  var t;
  let {
    invite: n
  } = e, r = null != n.guild ? new l.ZP(n.guild) : null;
  if (null == r) return null;
  let a = null !== (t = r.description) && void 0 !== t ? t : "";
  return (0, s.jsxs)("div", {
    className: _.guildInfoCard,
    children: [(0, s.jsx)(i.Heading, {
      className: _.presentedBy,
      variant: "text-sm/medium",
      children: d.Z.Messages.STAGE_INVITE_GUILD_HEADER
    }), (0, s.jsxs)("div", {
      className: _.guildContainer,
      children: [(0, s.jsx)(c.Z, {
        guild: r,
        active: !0,
        size: c.Z.Sizes.MEDIUM
      }), (0, s.jsxs)("div", {
        className: _.guildDetailsContanier,
        children: [(0, s.jsxs)(i.Text, {
          className: _.guildName,
          color: "header-primary",
          variant: "text-sm/medium",
          tag: "span",
          children: [r.name, (0, s.jsx)(o.Z, {
            guild: r,
            className: _.guildBadge,
            tooltipPosition: "left"
          })]
        }), (0, s.jsx)(u.V6, {
          invite: n,
          textClassName: _.guildInfoMemberCountText,
          className: _.guildInfoMemberCount
        })]
      })]
    }), a.length > 0 && (0, s.jsx)("details", {
      className: _.guildDescriptionContainer,
      children: (0, s.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: a
      })
    })]
  })
}

function h(e) {
  let {
    invite: t,
    channel: n,
    isSubmitting: i,
    onAcceptInvite: r
  } = e, {
    guild_scheduled_event: a
  } = t;
  return null != a ? (0, s.jsx)(E, {
    guildScheduledEvent: a,
    channel: n,
    isSubmitting: i,
    onAcceptInvite: r
  }) : null
}