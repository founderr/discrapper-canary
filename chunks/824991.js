"use strict";
n.r(t), n.d(t, {
  ClanUpsellButton: function() {
    return g
  },
  ClanUpsellMessage: function() {
    return C
  },
  ClanUpsellTitle: function() {
    return m
  },
  default: function() {
    return E
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("658252"),
  i = n("481060"),
  r = n("428695"),
  o = n("725568"),
  u = n("603839"),
  d = n("308083"),
  c = n("981631"),
  f = n("921944"),
  h = n("689938"),
  p = n("422906");

function m(e) {
  let {
    title: t
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: p.inviteContainer,
      children: [(0, l.jsx)(s.EnvelopeIcon, {
        color: "currentColor",
        height: 12,
        width: 12,
        className: p.envelope
      }), (0, l.jsx)(i.Text, {
        variant: "text-xs/bold",
        className: p.invite,
        children: h.default.Messages.CLAN_UPSELL_INVITE
      })]
    }), (0, l.jsx)(i.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      className: p.title,
      children: t
    })]
  })
}

function C(e) {
  let {
    defaultGameId: t
  } = e;
  return (0, l.jsx)(i.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: p.message,
    children: t === d.GENSHIN_ID ? h.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_GENSHIN_MESSAGE : t === d.VALORANT_ID ? h.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_VALORANT_MESSAGE : null
  })
}

function g(e) {
  let {
    onClick: t
  } = e;
  return (0, l.jsx)(i.Button, {
    fullWidth: !0,
    look: i.ButtonLooks.FILLED,
    size: i.ButtonSizes.SMALL,
    color: i.ButtonColors.BRAND_NEW,
    className: p.button,
    onClick: t,
    children: (0, l.jsx)(i.Text, {
      variant: "text-sm/semibold",
      color: "always-white",
      children: h.default.Messages.CHECK_IT_OUT
    })
  })
}

function E(e) {
  let {
    guild: t,
    markAsDismissed: n,
    defaultGameId: s
  } = e, i = a.useCallback(() => (0, l.jsx)(C, {
    defaultGameId: s
  }), [s]), E = a.useCallback(() => (0, l.jsx)(m, {
    title: h.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_TITLE
  }), []), S = a.useCallback(() => {
    n(f.ContentDismissActionType.TAKE_ACTION), (0, o.openFullScreenLayer)(e => {
      let {
        closeLayer: n
      } = e;
      return (0, l.jsx)(u.default, {
        onClose: n,
        guildId: t.id,
        gameId: s
      })
    }, {
      layerKey: d.CLAN_SETUP_MODAL_LAYER_KEY
    })
  }, [s, t.id, n]), _ = a.useCallback(() => (0, l.jsx)(g, {
    onClick: S
  }), [S]);
  return (0, l.jsx)(r.default, {
    className: p.notice,
    guild: t,
    onDismissed: () => n(f.ContentDismissActionType.UNKNOWN),
    title: E,
    message: i,
    cta: _,
    trackingSource: c.ChannelNoticeCtaSources.CLAN_ADMIN_UPSELL,
    type: c.ChannelNoticeTypes.CLAN_ADMIN_UPSELL
  })
}