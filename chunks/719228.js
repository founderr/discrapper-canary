"use strict";
t.r(l), t.d(l, {
  GuildSelectModalBody: function() {
    return E
  },
  GuildSelectModalHeader: function() {
    return M
  },
  default: function() {
    return x
  }
}), t("724458"), t("653041"), t("47120");
var s = t("735250"),
  a = t("470079"),
  n = t("658722"),
  r = t.n(n),
  i = t("442837"),
  o = t("481060"),
  d = t("37234"),
  u = t("703656"),
  c = t("430824"),
  C = t("771845"),
  S = t("346656"),
  m = t("267642"),
  I = t("981631"),
  f = t("689938"),
  _ = t("581048");

function M(e) {
  let {
    isTransfer: l = !1,
    setQuery: t,
    query: a
  } = e;
  return (0, s.jsxs)(o.ModalHeader, {
    className: _.selectHeaderContainer,
    children: [(0, s.jsx)(o.Heading, {
      className: _.selectHeader,
      variant: "heading-md/semibold",
      children: l ? f.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : f.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
    }), (0, s.jsx)(o.SearchBar, {
      size: o.SearchBar.Sizes.MEDIUM,
      placeholder: f.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      "aria-label": f.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      className: _.selectSearch,
      query: a,
      onChange: t,
      onClear: () => t("")
    })]
  })
}

function E(e) {
  let {
    isTransfer: l = !1,
    selectedSlotGuilds: t,
    onClose: a,
    onSelectGuild: n,
    query: M
  } = e, E = (0, i.useStateFromStores)([C.default], () => C.default.getFlattenedGuildIds()), x = (0, i.useStateFromStoresArray)([c.default], () => E.reduce((e, l) => {
    let s = c.default.getGuild(l);
    return null == s || null != t && t.some(e => e.id === l) ? e : ((M.length <= 0 || r()(M.toLowerCase(), null == s ? void 0 : s.name.toLowerCase())) && e.push(s), e)
  }, []));

  function U() {
    a(), (0, d.popLayer)(), (0, u.transitionTo)(I.Routes.GUILD_DISCOVERY)
  }
  return (0, s.jsxs)(s.Fragment, {
    children: [0 === x.length && (0, s.jsx)("div", {
      className: _.emptyStateWrapper,
      children: (0, s.jsx)(o.Text, {
        variant: "text-md/normal",
        children: 0 === E.length ? f.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
          publicGuildDirectoryHook: (e, l) => (0, s.jsx)(o.Clickable, {
            onClick: U,
            tag: "a",
            children: e
          }, l)
        }) : f.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
      })
    }), x.map(e => (0, s.jsxs)(o.Clickable, {
      className: _.selectGuild,
      onClick: () => {
        n(e)
      },
      children: [(0, s.jsx)(S.default, {
        className: _.selectGuildIcon,
        guild: e,
        size: S.default.Sizes.SMALL
      }), (0, s.jsxs)("div", {
        className: _.selectGuildCopy,
        children: [(0, s.jsx)(o.Text, {
          className: _.selectGuildName,
          variant: "text-md/normal",
          children: e.name
        }), (0, s.jsx)(o.Text, {
          className: _.selectGuildLevel,
          color: "text-muted",
          variant: "text-xs/normal",
          children: (0, m.getTierName)(e.premiumTier)
        })]
      }), (0, s.jsx)(o.Text, {
        className: _.selectGuildPseudoCta,
        color: "always-white",
        variant: "text-sm/medium",
        children: l ? f.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : f.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
      })]
    }, e.id))]
  })
}

function x(e) {
  let {
    onClose: l,
    onSelectGuild: t,
    transitionState: n
  } = e, [r, i] = a.useState("");
  return (0, s.jsxs)(o.ModalRoot, {
    transitionState: n,
    className: _.modal,
    size: o.ModalSize.SMALL,
    children: [(0, s.jsx)(M, {
      query: r,
      setQuery: i
    }), (0, s.jsx)(o.ModalContent, {
      className: _.modalContent,
      children: (0, s.jsx)(E, {
        onClose: l,
        onSelectGuild: t,
        query: r
      })
    }), (0, s.jsx)(o.ModalCloseButton, {
      className: _.modalCloseButton,
      onClick: l
    })]
  })
}