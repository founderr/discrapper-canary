"use strict";
n.r(t), n.d(t, {
  GuildSelectModalHeader: function() {
    return I
  },
  GuildSelectModalBody: function() {
    return C
  },
  default: function() {
    return g
  }
}), n("808653"), n("424973"), n("222007");
var s = n("37983"),
  a = n("884691"),
  r = n("448105"),
  i = n.n(r),
  l = n("446674"),
  o = n("77078"),
  u = n("54239"),
  d = n("393414"),
  c = n("305961"),
  f = n("677099"),
  _ = n("476263"),
  E = n("810567"),
  h = n("427459"),
  m = n("49111"),
  p = n("782340"),
  S = n("198591");

function I(e) {
  let {
    isTransfer: t = !1,
    setQuery: n,
    query: a
  } = e;
  return (0, s.jsxs)(o.ModalHeader, {
    className: S.selectHeaderContainer,
    children: [(0, s.jsx)(o.Heading, {
      className: S.selectHeader,
      variant: "heading-md/semibold",
      children: t ? p.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : p.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
    }), (0, s.jsx)(E.default, {
      size: E.default.Sizes.MEDIUM,
      placeholder: p.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      "aria-label": p.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      className: S.selectSearch,
      query: a,
      onChange: n,
      onClear: () => n("")
    })]
  })
}

function C(e) {
  let {
    isTransfer: t = !1,
    selectedSlotGuilds: n,
    onClose: a,
    onSelectGuild: r,
    query: E
  } = e, I = (0, l.useStateFromStores)([f.default], () => f.default.getFlattenedGuildIds()), C = (0, l.useStateFromStoresArray)([c.default], () => I.reduce((e, t) => {
    let s = c.default.getGuild(t);
    return null == s || null != n && n.some(e => e.id === t) ? e : ((E.length <= 0 || i(E.toLowerCase(), null == s ? void 0 : s.name.toLowerCase())) && e.push(s), e)
  }, []));

  function g() {
    a(), (0, u.popLayer)(), (0, d.transitionTo)(m.Routes.GUILD_DISCOVERY)
  }
  return (0, s.jsxs)(s.Fragment, {
    children: [0 === C.length && (0, s.jsx)("div", {
      className: S.emptyStateWrapper,
      children: (0, s.jsx)(o.Text, {
        variant: "text-md/normal",
        children: 0 === I.length ? p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
          publicGuildDirectoryHook: (e, t) => (0, s.jsx)(o.Clickable, {
            onClick: g,
            tag: "a",
            children: e
          }, t)
        }) : p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
      })
    }), C.map(e => (0, s.jsxs)(o.Clickable, {
      className: S.selectGuild,
      onClick: () => {
        r(e)
      },
      children: [(0, s.jsx)(_.default, {
        className: S.selectGuildIcon,
        guild: e,
        size: _.default.Sizes.SMALL
      }), (0, s.jsxs)("div", {
        className: S.selectGuildCopy,
        children: [(0, s.jsx)(o.Text, {
          className: S.selectGuildName,
          variant: "text-md/normal",
          children: e.name
        }), (0, s.jsx)(o.Text, {
          className: S.selectGuildLevel,
          color: "text-muted",
          variant: "text-xs/normal",
          children: (0, h.getTierName)(e.premiumTier)
        })]
      }), (0, s.jsx)(o.Text, {
        className: S.selectGuildPseudoCta,
        color: "always-white",
        variant: "text-sm/medium",
        children: t ? p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
      })]
    }, e.id))]
  })
}

function g(e) {
  let {
    onClose: t,
    onSelectGuild: n,
    transitionState: r
  } = e, [i, l] = a.useState("");
  return (0, s.jsxs)(o.ModalRoot, {
    transitionState: r,
    className: S.modal,
    size: o.ModalSize.SMALL,
    children: [(0, s.jsx)(I, {
      query: i,
      setQuery: l
    }), (0, s.jsx)(o.ModalContent, {
      className: S.modalContent,
      children: (0, s.jsx)(C, {
        onClose: t,
        onSelectGuild: n,
        query: i
      })
    }), (0, s.jsx)(o.ModalCloseButton, {
      className: S.modalCloseButton,
      onClick: t
    })]
  })
}