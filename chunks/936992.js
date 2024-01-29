"use strict";
n.r(t), n.d(t, {
  GuildSelectModalHeader: function() {
    return _
  },
  GuildSelectModalBody: function() {
    return C
  },
  default: function() {
    return L
  }
}), n("808653"), n("424973"), n("222007");
var l = n("37983"),
  i = n("884691"),
  s = n("448105"),
  r = n.n(s),
  o = n("446674"),
  a = n("77078"),
  u = n("54239"),
  d = n("393414"),
  c = n("334811"),
  f = n("305961"),
  p = n("677099"),
  h = n("476263"),
  m = n("810567"),
  E = n("427459"),
  I = n("49111"),
  S = n("782340"),
  g = n("109396");

function _(e) {
  let {
    isTransfer: t = !1,
    setQuery: n,
    query: i
  } = e;
  return (0, l.jsxs)(a.ModalHeader, {
    className: g.selectHeaderContainer,
    children: [(0, l.jsx)(a.Heading, {
      className: g.selectHeader,
      variant: "heading-md/semibold",
      children: t ? S.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : S.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
    }), (0, l.jsx)(m.default, {
      size: m.default.Sizes.MEDIUM,
      placeholder: S.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      "aria-label": S.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      className: g.selectSearch,
      query: i,
      onChange: n,
      onClear: () => n("")
    })]
  })
}

function C(e) {
  let {
    isTransfer: t = !1,
    selectedSlotGuilds: n,
    onClose: i,
    onSelectGuild: s,
    query: m
  } = e, _ = (0, o.useStateFromStores)([p.default], () => p.default.getFlattenedGuildIds()), C = (0, o.useStateFromStoresArray)([f.default], () => _.reduce((e, t) => {
    let l = f.default.getGuild(t);
    return null == l || null != n && n.some(e => e.id === t) ? e : ((m.length <= 0 || r(m.toLowerCase(), null == l ? void 0 : l.name.toLowerCase())) && e.push(l), e)
  }, [])), {
    enabled: L
  } = c.default.useExperiment({
    location: "5f417c_1"
  }, {
    autoTrackExposure: !0
  });

  function R() {
    i(), (0, u.popLayer)(), (0, d.transitionTo)(I.Routes.GUILD_DISCOVERY)
  }
  return (0, l.jsxs)(l.Fragment, {
    children: [0 === C.length && (0, l.jsx)("div", {
      className: g.emptyStateWrapper,
      children: (0, l.jsx)(a.Text, {
        variant: "text-md/normal",
        children: 0 === _.length ? S.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
          publicGuildDirectoryHook: (e, t) => (0, l.jsx)(a.Clickable, {
            onClick: R,
            tag: "a",
            children: e
          }, t)
        }) : S.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
      })
    }), C.map(e => (0, l.jsxs)(a.Clickable, {
      className: g.selectGuild,
      onClick: () => {
        s(e)
      },
      children: [(0, l.jsx)(h.default, {
        className: g.selectGuildIcon,
        guild: e,
        size: h.default.Sizes.SMALL
      }), (0, l.jsxs)("div", {
        className: g.selectGuildCopy,
        children: [(0, l.jsx)(a.Text, {
          className: g.selectGuildName,
          variant: "text-md/normal",
          children: e.name
        }), L && (0, l.jsx)(a.Text, {
          className: g.selectGuildLevel,
          color: "text-muted",
          variant: "text-xs/normal",
          children: (0, E.getTierName)(e.premiumTier)
        })]
      }), L && (0, l.jsx)(a.Text, {
        className: g.selectGuildPseudoCta,
        color: "always-white",
        variant: "text-sm/medium",
        children: t ? S.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : S.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
      })]
    }, e.id))]
  })
}

function L(e) {
  let {
    onClose: t,
    onSelectGuild: n,
    transitionState: s
  } = e, [r, o] = i.useState("");
  return (0, l.jsxs)(a.ModalRoot, {
    transitionState: s,
    className: g.modal,
    size: a.ModalSize.SMALL,
    children: [(0, l.jsx)(_, {
      query: r,
      setQuery: o
    }), (0, l.jsx)(a.ModalContent, {
      className: g.modalContent,
      children: (0, l.jsx)(C, {
        onClose: t,
        onSelectGuild: n,
        query: r
      })
    }), (0, l.jsx)(a.ModalCloseButton, {
      className: g.modalCloseButton,
      onClick: t
    })]
  })
}