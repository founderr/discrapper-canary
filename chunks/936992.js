"use strict";
n.r(t), n.d(t, {
  GuildSelectModalHeader: function() {
    return S
  },
  GuildSelectModalBody: function() {
    return g
  },
  default: function() {
    return C
  }
}), n("808653"), n("424973"), n("222007");
var s = n("37983"),
  r = n("884691"),
  l = n("448105"),
  i = n.n(l),
  a = n("446674"),
  o = n("77078"),
  u = n("54239"),
  c = n("393414"),
  d = n("305961"),
  f = n("677099"),
  h = n("476263"),
  p = n("810567"),
  E = n("427459"),
  _ = n("49111"),
  m = n("782340"),
  I = n("109396");

function S(e) {
  let {
    isTransfer: t = !1,
    setQuery: n,
    query: r
  } = e;
  return (0, s.jsxs)(o.ModalHeader, {
    className: I.selectHeaderContainer,
    children: [(0, s.jsx)(o.Heading, {
      className: I.selectHeader,
      variant: "heading-md/semibold",
      children: t ? m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
    }), (0, s.jsx)(p.default, {
      size: p.default.Sizes.MEDIUM,
      placeholder: m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      "aria-label": m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      className: I.selectSearch,
      query: r,
      onChange: n,
      onClear: () => n("")
    })]
  })
}

function g(e) {
  let {
    isTransfer: t = !1,
    selectedSlotGuilds: n,
    onClose: r,
    onSelectGuild: l,
    query: p
  } = e, S = (0, a.useStateFromStores)([f.default], () => f.default.getFlattenedGuildIds()), g = (0, a.useStateFromStoresArray)([d.default], () => S.reduce((e, t) => {
    let s = d.default.getGuild(t);
    return null == s || null != n && n.some(e => e.id === t) ? e : ((p.length <= 0 || i(p.toLowerCase(), null == s ? void 0 : s.name.toLowerCase())) && e.push(s), e)
  }, []));

  function C() {
    r(), (0, u.popLayer)(), (0, c.transitionTo)(_.Routes.GUILD_DISCOVERY)
  }
  return (0, s.jsxs)(s.Fragment, {
    children: [0 === g.length && (0, s.jsx)("div", {
      className: I.emptyStateWrapper,
      children: (0, s.jsx)(o.Text, {
        variant: "text-md/normal",
        children: 0 === S.length ? m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
          publicGuildDirectoryHook: (e, t) => (0, s.jsx)(o.Clickable, {
            onClick: C,
            tag: "a",
            children: e
          }, t)
        }) : m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
      })
    }), g.map(e => (0, s.jsxs)(o.Clickable, {
      className: I.selectGuild,
      onClick: () => {
        l(e)
      },
      children: [(0, s.jsx)(h.default, {
        className: I.selectGuildIcon,
        guild: e,
        size: h.default.Sizes.SMALL
      }), (0, s.jsxs)("div", {
        className: I.selectGuildCopy,
        children: [(0, s.jsx)(o.Text, {
          className: I.selectGuildName,
          variant: "text-md/normal",
          children: e.name
        }), (0, s.jsx)(o.Text, {
          className: I.selectGuildLevel,
          color: "text-muted",
          variant: "text-xs/normal",
          children: (0, E.getTierName)(e.premiumTier)
        })]
      }), (0, s.jsx)(o.Text, {
        className: I.selectGuildPseudoCta,
        color: "always-white",
        variant: "text-sm/medium",
        children: t ? m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
      })]
    }, e.id))]
  })
}

function C(e) {
  let {
    onClose: t,
    onSelectGuild: n,
    transitionState: l
  } = e, [i, a] = r.useState("");
  return (0, s.jsxs)(o.ModalRoot, {
    transitionState: l,
    className: I.modal,
    size: o.ModalSize.SMALL,
    children: [(0, s.jsx)(S, {
      query: i,
      setQuery: a
    }), (0, s.jsx)(o.ModalContent, {
      className: I.modalContent,
      children: (0, s.jsx)(g, {
        onClose: t,
        onSelectGuild: n,
        query: i
      })
    }), (0, s.jsx)(o.ModalCloseButton, {
      className: I.modalCloseButton,
      onClick: t
    })]
  })
}