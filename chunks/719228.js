"use strict";
l.r(t), l.d(t, {
  GuildSelectModalBody: function() {
    return x
  },
  GuildSelectModalHeader: function() {
    return E
  },
  default: function() {
    return N
  }
}), l("724458"), l("653041"), l("47120");
var s = l("735250"),
  a = l("470079"),
  n = l("658722"),
  r = l.n(n),
  i = l("442837"),
  o = l("481060"),
  d = l("37234"),
  u = l("703656"),
  c = l("430824"),
  m = l("771845"),
  C = l("346656"),
  S = l("6048"),
  I = l("267642"),
  f = l("981631"),
  _ = l("689938"),
  M = l("581048");

function E(e) {
  let {
    isTransfer: t = !1,
    setQuery: l,
    query: a
  } = e;
  return (0, s.jsxs)(o.ModalHeader, {
    className: M.selectHeaderContainer,
    children: [(0, s.jsx)(o.Heading, {
      className: M.selectHeader,
      variant: "heading-md/semibold",
      children: t ? _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
    }), (0, s.jsx)(S.default, {
      size: S.default.Sizes.MEDIUM,
      placeholder: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      "aria-label": _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      className: M.selectSearch,
      query: a,
      onChange: l,
      onClear: () => l("")
    })]
  })
}

function x(e) {
  let {
    isTransfer: t = !1,
    selectedSlotGuilds: l,
    onClose: a,
    onSelectGuild: n,
    query: S
  } = e, E = (0, i.useStateFromStores)([m.default], () => m.default.getFlattenedGuildIds()), x = (0, i.useStateFromStoresArray)([c.default], () => E.reduce((e, t) => {
    let s = c.default.getGuild(t);
    return null == s || null != l && l.some(e => e.id === t) ? e : ((S.length <= 0 || r()(S.toLowerCase(), null == s ? void 0 : s.name.toLowerCase())) && e.push(s), e)
  }, []));

  function N() {
    a(), (0, d.popLayer)(), (0, u.transitionTo)(f.Routes.GUILD_DISCOVERY)
  }
  return (0, s.jsxs)(s.Fragment, {
    children: [0 === x.length && (0, s.jsx)("div", {
      className: M.emptyStateWrapper,
      children: (0, s.jsx)(o.Text, {
        variant: "text-md/normal",
        children: 0 === E.length ? _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
          publicGuildDirectoryHook: (e, t) => (0, s.jsx)(o.Clickable, {
            onClick: N,
            tag: "a",
            children: e
          }, t)
        }) : _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
      })
    }), x.map(e => (0, s.jsxs)(o.Clickable, {
      className: M.selectGuild,
      onClick: () => {
        n(e)
      },
      children: [(0, s.jsx)(C.default, {
        className: M.selectGuildIcon,
        guild: e,
        size: C.default.Sizes.SMALL
      }), (0, s.jsxs)("div", {
        className: M.selectGuildCopy,
        children: [(0, s.jsx)(o.Text, {
          className: M.selectGuildName,
          variant: "text-md/normal",
          children: e.name
        }), (0, s.jsx)(o.Text, {
          className: M.selectGuildLevel,
          color: "text-muted",
          variant: "text-xs/normal",
          children: (0, I.getTierName)(e.premiumTier)
        })]
      }), (0, s.jsx)(o.Text, {
        className: M.selectGuildPseudoCta,
        color: "always-white",
        variant: "text-sm/medium",
        children: t ? _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
      })]
    }, e.id))]
  })
}

function N(e) {
  let {
    onClose: t,
    onSelectGuild: l,
    transitionState: n
  } = e, [r, i] = a.useState("");
  return (0, s.jsxs)(o.ModalRoot, {
    transitionState: n,
    className: M.modal,
    size: o.ModalSize.SMALL,
    children: [(0, s.jsx)(E, {
      query: r,
      setQuery: i
    }), (0, s.jsx)(o.ModalContent, {
      className: M.modalContent,
      children: (0, s.jsx)(x, {
        onClose: t,
        onSelectGuild: l,
        query: r
      })
    }), (0, s.jsx)(o.ModalCloseButton, {
      className: M.modalCloseButton,
      onClick: t
    })]
  })
}