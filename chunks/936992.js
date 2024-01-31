"use strict";
n.r(t), n.d(t, {
  GuildSelectModalHeader: function() {
    return g
  },
  GuildSelectModalBody: function() {
    return _
  },
  default: function() {
    return C
  }
}), n("808653"), n("424973"), n("222007");
var l = n("37983"),
  s = n("884691"),
  i = n("448105"),
  r = n.n(i),
  o = n("446674"),
  a = n("77078"),
  u = n("54239"),
  d = n("393414"),
  c = n("305961"),
  f = n("677099"),
  p = n("476263"),
  h = n("810567"),
  m = n("427459"),
  E = n("49111"),
  I = n("782340"),
  S = n("109396");

function g(e) {
  let {
    isTransfer: t = !1,
    setQuery: n,
    query: s
  } = e;
  return (0, l.jsxs)(a.ModalHeader, {
    className: S.selectHeaderContainer,
    children: [(0, l.jsx)(a.Heading, {
      className: S.selectHeader,
      variant: "heading-md/semibold",
      children: t ? I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
    }), (0, l.jsx)(h.default, {
      size: h.default.Sizes.MEDIUM,
      placeholder: I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      "aria-label": I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      className: S.selectSearch,
      query: s,
      onChange: n,
      onClear: () => n("")
    })]
  })
}

function _(e) {
  let {
    isTransfer: t = !1,
    selectedSlotGuilds: n,
    onClose: s,
    onSelectGuild: i,
    query: h
  } = e, g = (0, o.useStateFromStores)([f.default], () => f.default.getFlattenedGuildIds()), _ = (0, o.useStateFromStoresArray)([c.default], () => g.reduce((e, t) => {
    let l = c.default.getGuild(t);
    return null == l || null != n && n.some(e => e.id === t) ? e : ((h.length <= 0 || r(h.toLowerCase(), null == l ? void 0 : l.name.toLowerCase())) && e.push(l), e)
  }, []));

  function C() {
    s(), (0, u.popLayer)(), (0, d.transitionTo)(E.Routes.GUILD_DISCOVERY)
  }
  return (0, l.jsxs)(l.Fragment, {
    children: [0 === _.length && (0, l.jsx)("div", {
      className: S.emptyStateWrapper,
      children: (0, l.jsx)(a.Text, {
        variant: "text-md/normal",
        children: 0 === g.length ? I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
          publicGuildDirectoryHook: (e, t) => (0, l.jsx)(a.Clickable, {
            onClick: C,
            tag: "a",
            children: e
          }, t)
        }) : I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
      })
    }), _.map(e => (0, l.jsxs)(a.Clickable, {
      className: S.selectGuild,
      onClick: () => {
        i(e)
      },
      children: [(0, l.jsx)(p.default, {
        className: S.selectGuildIcon,
        guild: e,
        size: p.default.Sizes.SMALL
      }), (0, l.jsxs)("div", {
        className: S.selectGuildCopy,
        children: [(0, l.jsx)(a.Text, {
          className: S.selectGuildName,
          variant: "text-md/normal",
          children: e.name
        }), (0, l.jsx)(a.Text, {
          className: S.selectGuildLevel,
          color: "text-muted",
          variant: "text-xs/normal",
          children: (0, m.getTierName)(e.premiumTier)
        })]
      }), (0, l.jsx)(a.Text, {
        className: S.selectGuildPseudoCta,
        color: "always-white",
        variant: "text-sm/medium",
        children: t ? I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
      })]
    }, e.id))]
  })
}

function C(e) {
  let {
    onClose: t,
    onSelectGuild: n,
    transitionState: i
  } = e, [r, o] = s.useState("");
  return (0, l.jsxs)(a.ModalRoot, {
    transitionState: i,
    className: S.modal,
    size: a.ModalSize.SMALL,
    children: [(0, l.jsx)(g, {
      query: r,
      setQuery: o
    }), (0, l.jsx)(a.ModalContent, {
      className: S.modalContent,
      children: (0, l.jsx)(_, {
        onClose: t,
        onSelectGuild: n,
        query: r
      })
    }), (0, l.jsx)(a.ModalCloseButton, {
      className: S.modalCloseButton,
      onClick: t
    })]
  })
}