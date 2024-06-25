n.d(t, {
  To: function() {
    return E
  },
  Xu: function() {
    return f
  },
  YV: function() {
    return m
  },
  ZP: function() {
    return _
  },
  aF: function() {
    return C
  }
});
var l = n(735250),
  i = n(470079),
  s = n(481060),
  r = n(100527),
  a = n(428695),
  o = n(703656),
  u = n(970606),
  c = n(308083),
  d = n(981631),
  h = n(921944),
  p = n(689938),
  g = n(228741);

function m() {
  return (0, l.jsxs)("div", {
    className: g.inviteContainer,
    children: [(0, l.jsx)(s.EnvelopeIcon, {
      size: "xxs",
      color: "currentColor",
      className: g.envelope
    }), (0, l.jsx)(s.Text, {
      variant: "text-xs/bold",
      className: g.invite,
      children: p.Z.Messages.CLAN_UPSELL_INVITE
    })]
  })
}

function C(e) {
  let {
    title: t
  } = e;
  return (0, l.jsx)(l.Fragment, {
    children: (0, l.jsx)(s.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      className: g.title,
      children: t
    })
  })
}

function E(e) {
  let {
    message: t
  } = e;
  return (0, l.jsx)(s.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: g.message,
    children: t
  })
}

function f(e) {
  let {
    onClick: t
  } = e;
  return (0, l.jsx)(s.Button, {
    fullWidth: !0,
    look: s.ButtonLooks.FILLED,
    size: s.ButtonSizes.SMALL,
    color: s.ButtonColors.BRAND,
    className: g.button,
    onClick: t,
    children: (0, l.jsx)(s.Text, {
      variant: "text-sm/semibold",
      color: "always-white",
      children: p.Z.Messages.CHECK_IT_OUT
    })
  })
}

function _(e) {
  let {
    guild: t,
    markAsDismissed: n,
    defaultGameId: s
  } = e;
  i.useEffect(() => {
    (0, u.TE)({
      guildId: t.id,
      location: r.Z.GUILD_CHANNEL_LIST
    })
  }, [t.id]);
  let m = s === c.xn ? p.Z.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_GENSHIN_TITLE : s === c.nJ ? p.Z.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_VALORANT_TITLE : p.Z.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_TITLE,
    _ = i.useCallback(() => (0, l.jsx)(E, {
      message: p.Z.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_MESSAGE
    }), []),
    I = i.useCallback(() => (0, l.jsx)(C, {
      title: m
    }), [m]),
    N = i.useCallback(() => {
      (0, u._9)({
        guildId: t.id,
        location: r.Z.GUILD_CHANNEL_LIST
      }), (0, o.uL)(d.Z5c.GUILD_DISCOVERY)
    }, [t.id]),
    Z = i.useCallback(() => (0, l.jsx)(f, {
      onClick: N
    }), [N]);
  return (0, l.jsx)(a.Z, {
    className: g.notice,
    guild: t,
    onDismissed: () => n(h.L.DISMISS),
    title: I,
    message: _,
    cta: Z,
    trackingSource: d.PsQ.CLAN_ADMIN_UPSELL,
    type: d.vID.CLAN_ADMIN_UPSELL
  })
}