"use strict";
n.r(t), n.d(t, {
  ClanUpsellButton: function() {
    return S
  },
  ClanUpsellMessage: function() {
    return E
  },
  ClanUpsellTitle: function() {
    return g
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
  u = n("725568"),
  d = n("970606"),
  c = n("603839"),
  f = n("308083"),
  h = n("981631"),
  p = n("921944"),
  m = n("689938"),
  C = n("422906");

function g(e) {
  let {
    title: t
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: C.inviteContainer,
      children: [(0, l.jsx)(s.EnvelopeIcon, {
        color: "currentColor",
        height: 12,
        width: 12,
        className: C.envelope
      }), (0, l.jsx)(i.Text, {
        variant: "text-xs/bold",
        className: C.invite,
        children: m.default.Messages.CLAN_UPSELL_INVITE
      })]
    }), (0, l.jsx)(i.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      className: C.title,
      children: t
    })]
  })
}

function E(e) {
  let {
    defaultGameId: t
  } = e;
  return (0, l.jsx)(i.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: C.message,
    children: t === f.GENSHIN_ID ? m.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_GENSHIN_MESSAGE : t === f.VALORANT_ID ? m.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_VALORANT_MESSAGE : null
  })
}

function S(e) {
  let {
    onClick: t
  } = e;
  return (0, l.jsx)(i.Button, {
    fullWidth: !0,
    look: i.ButtonLooks.FILLED,
    size: i.ButtonSizes.SMALL,
    color: i.ButtonColors.BRAND_NEW,
    className: C.button,
    onClick: t,
    children: (0, l.jsx)(i.Text, {
      variant: "text-sm/semibold",
      color: "always-white",
      children: m.default.Messages.CHECK_IT_OUT
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
      location: r.default.GUILD_CHANNEL_LIST
    })
  }, []);
  let i = a.useCallback(() => (0, l.jsx)(E, {
      defaultGameId: s
    }), [s]),
    _ = a.useCallback(() => (0, l.jsx)(g, {
      title: m.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_TITLE
    }), []),
    I = a.useCallback(() => {
      (0, d.trackClanAdminInviteClicked)({
        guildId: t.id,
        location: r.default.GUILD_CHANNEL_LIST
      }), n(p.ContentDismissActionType.TAKE_ACTION), (0, u.openFullScreenLayer)(e => {
        let {
          closeLayer: n
        } = e;
        return (0, l.jsx)(c.default, {
          onClose: n,
          guildId: t.id,
          gameId: s
        })
      }, {
        layerKey: f.CLAN_SETUP_MODAL_LAYER_KEY
      })
    }, [s, t.id, n]),
    N = a.useCallback(() => (0, l.jsx)(S, {
      onClick: I
    }), [I]);
  return (0, l.jsx)(o.default, {
    className: C.notice,
    guild: t,
    onDismissed: () => n(p.ContentDismissActionType.UNKNOWN),
    title: _,
    message: i,
    cta: N,
    trackingSource: h.ChannelNoticeCtaSources.CLAN_ADMIN_UPSELL,
    type: h.ChannelNoticeTypes.CLAN_ADMIN_UPSELL
  })
}