n.d(t, {
  X: function() {
    return h
  },
  Z: function() {
    return I
  }
});
var s = n(735250);
n(470079);
var r = n(481060),
  i = n(742593),
  l = n(390072),
  a = n(601964),
  o = n(940627),
  c = n(346656),
  u = n(230224),
  d = n(689938),
  E = n(369912);

function _(e) {
  var t;
  let {
    guildScheduledEvent: n,
    channel: a,
    onAcceptInvite: o,
    isSubmitting: c
  } = e;
  return (0, s.jsxs)("div", {
    className: E.guildEventCard,
    children: [(0, s.jsx)(i.ZP, {
      name: n.name,
      description: null !== (t = n.description) && void 0 !== t ? t : void 0,
      headerVariant: "heading-md/medium",
      descriptionClassName: E.__invalid_channelDescription,
      guildId: n.guild_id,
      guildEvent: n,
      eventPreview: n
    }), null != a && (0, s.jsx)("div", {
      className: E.channelInfo,
      children: (0, s.jsx)(l.Z, {
        guildScheduledEvent: n,
        channel: a
      })
    }), (0, s.jsx)(r.Button, {
      className: E.acceptButton,
      color: r.Button.Colors.GREEN,
      onClick: o,
      submitting: c,
      children: d.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
    })]
  })
}

function h(e) {
  var t;
  let {
    invite: n
  } = e, i = null != n.guild ? new a.ZP(n.guild) : null;
  if (null == i) return null;
  let l = null !== (t = i.description) && void 0 !== t ? t : "";
  return (0, s.jsxs)("div", {
    className: E.guildInfoCard,
    children: [(0, s.jsx)(r.Heading, {
      className: E.presentedBy,
      variant: "text-sm/medium",
      children: d.Z.Messages.STAGE_INVITE_GUILD_HEADER
    }), (0, s.jsxs)("div", {
      className: E.guildContainer,
      children: [(0, s.jsx)(c.Z, {
        guild: i,
        active: !0,
        size: c.Z.Sizes.MEDIUM
      }), (0, s.jsxs)("div", {
        className: E.guildDetailsContanier,
        children: [(0, s.jsxs)(r.Text, {
          className: E.guildName,
          color: "header-primary",
          variant: "text-sm/medium",
          tag: "span",
          children: [i.name, (0, s.jsx)(o.Z, {
            guild: i,
            className: E.guildBadge,
            tooltipPosition: "left"
          })]
        }), (0, s.jsx)(u.V6, {
          invite: n,
          textClassName: E.guildInfoMemberCountText,
          className: E.guildInfoMemberCount
        })]
      })]
    }), l.length > 0 && (0, s.jsx)("details", {
      className: E.guildDescriptionContainer,
      children: (0, s.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: l
      })
    })]
  })
}

function I(e) {
  let {
    invite: t,
    channel: n,
    isSubmitting: r,
    onAcceptInvite: i
  } = e, {
    guild_scheduled_event: l
  } = t;
  return null != l ? (0, s.jsx)(_, {
    guildScheduledEvent: l,
    channel: n,
    isSubmitting: r,
    onAcceptInvite: i
  }) : null
}