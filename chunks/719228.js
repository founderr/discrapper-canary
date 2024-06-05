"use strict";
t.r(l), t.d(l, {
  GuildSelectModalBody: function() {
    return x
  },
  GuildSelectModalHeader: function() {
    return E
  },
  default: function() {
    return U
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
  m = t("346656"),
  S = t("6048"),
  f = t("267642"),
  I = t("981631"),
  _ = t("689938"),
  M = t("581048");

function E(e) {
  let {
    isTransfer: l = !1,
    setQuery: t,
    query: a
  } = e;
  return (0, s.jsxs)(o.ModalHeader, {
    className: M.selectHeaderContainer,
    children: [(0, s.jsx)(o.Heading, {
      className: M.selectHeader,
      variant: "heading-md/semibold",
      children: l ? _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
    }), (0, s.jsx)(S.default, {
      size: S.default.Sizes.MEDIUM,
      placeholder: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      "aria-label": _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      className: M.selectSearch,
      query: a,
      onChange: t,
      onClear: () => t("")
    })]
  })
}

function x(e) {
  let {
    isTransfer: l = !1,
    selectedSlotGuilds: t,
    onClose: a,
    onSelectGuild: n,
    query: S
  } = e, E = (0, i.useStateFromStores)([C.default], () => C.default.getFlattenedGuildIds()), x = (0, i.useStateFromStoresArray)([c.default], () => E.reduce((e, l) => {
    let s = c.default.getGuild(l);
    return null == s || null != t && t.some(e => e.id === l) ? e : ((S.length <= 0 || r()(S.toLowerCase(), null == s ? void 0 : s.name.toLowerCase())) && e.push(s), e)
  }, []));

  function U() {
    a(), (0, d.popLayer)(), (0, u.transitionTo)(I.Routes.GUILD_DISCOVERY)
  }
  return (0, s.jsxs)(s.Fragment, {
    children: [0 === x.length && (0, s.jsx)("div", {
      className: M.emptyStateWrapper,
      children: (0, s.jsx)(o.Text, {
        variant: "text-md/normal",
        children: 0 === E.length ? _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
          publicGuildDirectoryHook: (e, l) => (0, s.jsx)(o.Clickable, {
            onClick: U,
            tag: "a",
            children: e
          }, l)
        }) : _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
      })
    }), x.map(e => (0, s.jsxs)(o.Clickable, {
      className: M.selectGuild,
      onClick: () => {
        n(e)
      },
      children: [(0, s.jsx)(m.default, {
        className: M.selectGuildIcon,
        guild: e,
        size: m.default.Sizes.SMALL
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
          children: (0, f.getTierName)(e.premiumTier)
        })]
      }), (0, s.jsx)(o.Text, {
        className: M.selectGuildPseudoCta,
        color: "always-white",
        variant: "text-sm/medium",
        children: l ? _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
      })]
    }, e.id))]
  })
}

function U(e) {
  let {
    onClose: l,
    onSelectGuild: t,
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
        onClose: l,
        onSelectGuild: t,
        query: r
      })
    }), (0, s.jsx)(o.ModalCloseButton, {
      className: M.modalCloseButton,
      onClick: l
    })]
  })
}