"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("120356"),
  i = n.n(s),
  l = n("900015"),
  o = n("442837"),
  c = n("481060"),
  d = n("231467"),
  u = n("430824"),
  f = n("214715"),
  m = n("308083"),
  h = n("689938"),
  E = n("455658");

function p(e) {
  let {
    trait: t,
    selected: n,
    onClick: s
  } = e, [l, o] = r.useState(!1), c = r.useCallback(() => o(!0), []), d = r.useCallback(() => o(!1), []);
  return (0, a.jsx)(f.default, {
    variant: "text-xs/semibold",
    color: l ? "text-muted" : "interactive-active",
    className: i()(E.trait, {
      [E.strikethrough]: l
    }),
    text: t,
    selected: n,
    onMouseEnter: n ? c : void 0,
    onMouseLeave: n ? d : void 0,
    onClick: n ? s : void 0
  }, t)
}

function C(e) {
  var t;
  let {
    guildId: n,
    progress: s,
    traitsToHighlight: f,
    maskDescription: C,
    maskTraits: T,
    onTraitClick: _
  } = e, x = (0, o.useStateFromStores)([u.default], () => u.default.getGuild(n)), {
    interests: g,
    description: I,
    playstyle: N,
    wildcardDescriptors: v,
    brandPrimaryColor: A
  } = s, S = (0, c.useToken)(c.tokens.colors.TEXT_BRAND), L = Array.from(g), R = r.useMemo(() => null != f ? new Set(f) : new Set, [f]);
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)("div", {
      className: i()(E.description, C ? E.descriptionBorderMask : void 0),
      children: [(0, a.jsx)("div", {
        className: C ? E.descriptionMask : void 0
      }), (0, a.jsx)(c.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        lineClamp: 1,
        children: null == x ? void 0 : x.name
      }), (0, a.jsxs)("div", {
        className: E.clanInfoRow,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-xxs/normal",
          className: E.clanInfoItem,
          children: (0, a.jsx)("span", {
            role: "img",
            "aria-label": h.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
            children: "\uD83C\uDFAE"
          })
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          className: E.clanInfoItem,
          children: null !== (t = (0, m.getPlaystyleTitle)(N)) && void 0 !== t ? t : h.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
        }), null != x && (0, a.jsx)(d.Wildcards, {
          wildcardDescriptors: v,
          primaryColor: null != A ? A : S.hex()
        })]
      }), (0, a.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: E.descriptionText,
        children: (null == I ? void 0 : I.length) > 0 ? I : h.default.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER
      })]
    }), (0, a.jsxs)("div", {
      className: i()(E.tagsContainer, T ? E.traitsBorderMask : void 0),
      children: [(0, a.jsx)("div", {
        className: T ? E.traitsMask : void 0
      }), (0, a.jsxs)("div", {
        className: E.tagsCount,
        children: [(0, a.jsx)(l.TagsIcon, {
          height: 12,
          width: 12,
          className: E.tags
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: h.default.Messages.CLAN_SETUP_NUM_TRAITS.format({
            n: L.length
          })
        })]
      }), (0, a.jsx)("div", {
        className: E.traits,
        children: L.map(e => (0, a.jsx)(p, {
          trait: e,
          selected: R.has(e),
          onClick: _
        }, e))
      })]
    })]
  })
}