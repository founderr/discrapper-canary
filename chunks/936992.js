"use strict";
n.r(t), n.d(t, {
  GuildSelectModalHeader: function() {
    return _
  },
  GuildSelectModalBody: function() {
    return g
  },
  default: function() {
    return C
  }
}), n("808653"), n("424973"), n("222007");
var r = n("37983"),
  s = n("884691"),
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
  m = n("49111"),
  I = n("782340"),
  S = n("109396");

function _(e) {
  let {
    isTransfer: t = !1,
    setQuery: n,
    query: s
  } = e;
  return (0, r.jsxs)(o.ModalHeader, {
    className: S.selectHeaderContainer,
    children: [(0, r.jsx)(o.Heading, {
      className: S.selectHeader,
      variant: "heading-md/semibold",
      children: t ? I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
    }), (0, r.jsx)(p.default, {
      size: p.default.Sizes.MEDIUM,
      placeholder: I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      "aria-label": I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      className: S.selectSearch,
      query: s,
      onChange: n,
      onClear: () => n("")
    })]
  })
}

function g(e) {
  let {
    isTransfer: t = !1,
    selectedSlotGuilds: n,
    onClose: s,
    onSelectGuild: l,
    query: p
  } = e, _ = (0, a.useStateFromStores)([f.default], () => f.default.getFlattenedGuildIds()), g = (0, a.useStateFromStoresArray)([d.default], () => _.reduce((e, t) => {
    let r = d.default.getGuild(t);
    return null == r || null != n && n.some(e => e.id === t) ? e : ((p.length <= 0 || i(p.toLowerCase(), null == r ? void 0 : r.name.toLowerCase())) && e.push(r), e)
  }, []));

  function C() {
    s(), (0, u.popLayer)(), (0, c.transitionTo)(m.Routes.GUILD_DISCOVERY)
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [0 === g.length && (0, r.jsx)("div", {
      className: S.emptyStateWrapper,
      children: (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        children: 0 === _.length ? I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
          publicGuildDirectoryHook: (e, t) => (0, r.jsx)(o.Clickable, {
            onClick: C,
            tag: "a",
            children: e
          }, t)
        }) : I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
      })
    }), g.map(e => (0, r.jsxs)(o.Clickable, {
      className: S.selectGuild,
      onClick: () => {
        l(e)
      },
      children: [(0, r.jsx)(h.default, {
        className: S.selectGuildIcon,
        guild: e,
        size: h.default.Sizes.SMALL
      }), (0, r.jsxs)("div", {
        className: S.selectGuildCopy,
        children: [(0, r.jsx)(o.Text, {
          className: S.selectGuildName,
          variant: "text-md/normal",
          children: e.name
        }), (0, r.jsx)(o.Text, {
          className: S.selectGuildLevel,
          color: "text-muted",
          variant: "text-xs/normal",
          children: (0, E.getTierName)(e.premiumTier)
        })]
      }), (0, r.jsx)(o.Text, {
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
    transitionState: l
  } = e, [i, a] = s.useState("");
  return (0, r.jsxs)(o.ModalRoot, {
    transitionState: l,
    className: S.modal,
    size: o.ModalSize.SMALL,
    children: [(0, r.jsx)(_, {
      query: i,
      setQuery: a
    }), (0, r.jsx)(o.ModalContent, {
      className: S.modalContent,
      children: (0, r.jsx)(g, {
        onClose: t,
        onSelectGuild: n,
        query: i
      })
    }), (0, r.jsx)(o.ModalCloseButton, {
      className: S.modalCloseButton,
      onClick: t
    })]
  })
}