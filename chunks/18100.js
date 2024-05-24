"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
}), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("900015"),
  o = a("442837"),
  c = a("481060"),
  d = a("231467"),
  u = a("430824"),
  f = a("214715"),
  m = a("308083"),
  h = a("689938"),
  E = a("455658");

function p(e) {
  let {
    trait: t,
    selected: a,
    onClick: s
  } = e, [l, o] = r.useState(!1), c = r.useCallback(() => o(!0), []), d = r.useCallback(() => o(!1), []);
  return (0, n.jsx)(f.default, {
    variant: "text-xs/semibold",
    color: l ? "text-muted" : "interactive-active",
    className: i()(E.trait, {
      [E.strikethrough]: l
    }),
    text: t,
    selected: a,
    onMouseEnter: a ? c : void 0,
    onMouseLeave: a ? d : void 0,
    onClick: a ? s : void 0
  }, t)
}

function C(e) {
  var t;
  let {
    guildId: a,
    progress: s,
    traitsToHighlight: f,
    maskDescription: C,
    maskTraits: T,
    onTraitClick: _
  } = e, x = (0, o.useStateFromStores)([u.default], () => u.default.getGuild(a)), {
    interests: g,
    description: N,
    playstyle: I,
    wildcardDescriptors: v,
    brandPrimaryColor: A
  } = s, S = (0, c.useToken)(c.tokens.colors.TEXT_BRAND), L = Array.from(g), R = r.useMemo(() => null != f ? new Set(f) : new Set, [f]);
  return (0, n.jsxs)("div", {
    children: [(0, n.jsxs)("div", {
      className: i()(E.description, C ? E.descriptionBorderMask : void 0),
      children: [(0, n.jsx)("div", {
        className: C ? E.descriptionMask : void 0
      }), (0, n.jsx)(c.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        lineClamp: 1,
        children: null == x ? void 0 : x.name
      }), (0, n.jsxs)("div", {
        className: E.clanInfoRow,
        children: [(0, n.jsx)(c.Text, {
          variant: "text-xxs/normal",
          className: E.clanInfoItem,
          children: (0, n.jsx)("span", {
            role: "img",
            "aria-label": h.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
            children: "\uD83C\uDFAE"
          })
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          className: E.clanInfoItem,
          children: null !== (t = (0, m.getPlaystyleTitle)(I)) && void 0 !== t ? t : h.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
        }), null != x && (0, n.jsx)(d.Wildcards, {
          wildcardDescriptors: v,
          primaryColor: null != A ? A : S.hex()
        })]
      }), (0, n.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: E.descriptionText,
        children: (null == N ? void 0 : N.length) > 0 ? N : h.default.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER
      })]
    }), (0, n.jsxs)("div", {
      className: i()(E.tagsContainer, T ? E.traitsBorderMask : void 0),
      children: [(0, n.jsx)("div", {
        className: T ? E.traitsMask : void 0
      }), (0, n.jsxs)("div", {
        className: E.tagsCount,
        children: [(0, n.jsx)(l.TagsIcon, {
          height: 12,
          width: 12,
          className: E.tags
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: h.default.Messages.CLAN_SETUP_NUM_TRAITS.format({
            n: L.length
          })
        })]
      }), (0, n.jsx)("div", {
        className: E.traits,
        children: L.map(e => (0, n.jsx)(p, {
          trait: e,
          selected: R.has(e),
          onClick: _
        }, e))
      })]
    })]
  })
}