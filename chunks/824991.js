"use strict";
n.r(t), n.d(t, {
  ClanUpsellButton: function() {
    return E
  },
  ClanUpsellMessage: function() {
    return g
  },
  ClanUpsellTitle: function() {
    return C
  },
  default: function() {
    return _
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("658252"),
  i = n("481060"),
  r = n("100527"),
  o = n("428695"),
  u = n("703656"),
  d = n("970606"),
  c = n("308083"),
  f = n("981631"),
  h = n("921944"),
  p = n("689938"),
  m = n("207030");

function C(e) {
  let {
    title: t
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: m.inviteContainer,
      children: [(0, l.jsx)(s.EnvelopeIcon, {
        color: "currentColor",
        height: 12,
        width: 12,
        className: m.envelope
      }), (0, l.jsx)(i.Text, {
        variant: "text-xs/bold",
        className: m.invite,
        children: p.default.Messages.CLAN_UPSELL_INVITE
      })]
    }), (0, l.jsx)(i.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      className: m.title,
      children: t
    })]
  })
}

function g() {
  return (0, l.jsx)(i.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: m.message,
    children: p.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_MESSAGE
  })
}

function E(e) {
  let {
    onClick: t
  } = e;
  return (0, l.jsx)(i.Button, {
    fullWidth: !0,
    look: i.ButtonLooks.FILLED,
    size: i.ButtonSizes.SMALL,
    color: i.ButtonColors.BRAND_NEW,
    className: m.button,
    onClick: t,
    children: (0, l.jsx)(i.Text, {
      variant: "text-sm/semibold",
      color: "always-white",
      children: p.default.Messages.CHECK_IT_OUT
    })
  })
}

function _(e) {
  let {
    guild: t,
    markAsDismissed: n,
    defaultGameId: s
  } = e;
  a.useEffect(() => {
    (0, d.trackClanAdminInviteViewed)({
      guildId: t.id,
      location: r.default.GUILD_CHANNEL_LIST
    })
  }, [t.id]);
  let i = s === c.GENSHIN_ID ? p.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_GENSHIN_TITLE : s === c.VALORANT_ID ? p.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_VALORANT_TITLE : p.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_TITLE,
    _ = a.useCallback(() => (0, l.jsx)(g, {}), []),
    I = a.useCallback(() => (0, l.jsx)(C, {
      title: i
    }), [i]),
    S = a.useCallback(() => {
      (0, d.trackClanAdminInviteClicked)({
        guildId: t.id,
        location: r.default.GUILD_CHANNEL_LIST
      }), (0, u.transitionTo)(f.Routes.GUILD_DISCOVERY)
    }, [t.id]),
    N = a.useCallback(() => (0, l.jsx)(E, {
      onClick: S
    }), [S]);
  return (0, l.jsx)(o.default, {
    className: m.notice,
    guild: t,
    onDismissed: () => n(h.ContentDismissActionType.DISMISS),
    title: I,
    message: _,
    cta: N,
    trackingSource: f.ChannelNoticeCtaSources.CLAN_ADMIN_UPSELL,
    type: f.ChannelNoticeTypes.CLAN_ADMIN_UPSELL
  })
}