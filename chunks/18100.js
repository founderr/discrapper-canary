"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
}), a("47120");
var n = a("735250"),
  r = a("470079"),
  i = a("120356"),
  s = a.n(i),
  l = a("900015"),
  o = a("442837"),
  d = a("481060"),
  c = a("231467"),
  u = a("430824"),
  f = a("214715"),
  m = a("308083"),
  E = a("689938"),
  h = a("455658");

function T(e) {
  let {
    trait: t,
    selected: a,
    onClick: i
  } = e, [l, o] = r.useState(!1), d = r.useCallback(() => o(!0), []), c = r.useCallback(() => o(!1), []);
  return (0, n.jsx)(f.default, {
    variant: "text-xs/semibold",
    color: l ? "text-muted" : "interactive-active",
    className: s()(h.trait, {
      [h.strikethrough]: l
    }),
    text: t,
    selected: a,
    onMouseEnter: a ? d : void 0,
    onMouseLeave: a ? c : void 0,
    onClick: a ? i : void 0
  }, t)
}

function _(e) {
  var t;
  let {
    guildId: a,
    progress: i,
    traitsToHighlight: f,
    maskDescription: _,
    maskTraits: C,
    onTraitClick: x
  } = e, p = (0, o.useStateFromStores)([u.default], () => u.default.getGuild(a)), {
    interests: I,
    description: g,
    playstyle: N,
    wildcardDescriptors: A,
    brandPrimaryColor: v
  } = i, S = (0, d.useToken)(d.tokens.colors.TEXT_BRAND), R = Array.from(I), L = r.useMemo(() => null != f ? new Set(f) : new Set, [f]);
  return (0, n.jsxs)("div", {
    children: [(0, n.jsxs)("div", {
      className: s()(h.description, _ ? h.descriptionBorderMask : void 0),
      children: [(0, n.jsx)("div", {
        className: _ ? h.descriptionMask : void 0
      }), (0, n.jsx)(d.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        lineClamp: 1,
        children: null == p ? void 0 : p.name
      }), (0, n.jsxs)("div", {
        className: h.clanInfoRow,
        children: [(0, n.jsx)(d.Text, {
          variant: "text-xxs/normal",
          className: h.clanInfoItem,
          children: (0, n.jsx)("span", {
            role: "img",
            "aria-label": E.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
            children: "\uD83C\uDFAE"
          })
        }), (0, n.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          className: h.clanInfoItem,
          children: null !== (t = (0, m.getPlaystyleTitle)(N)) && void 0 !== t ? t : E.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
        }), null != p && (0, n.jsx)(c.Wildcards, {
          wildcardDescriptors: A,
          primaryColor: null != v ? v : S.hex()
        })]
      }), (0, n.jsx)(d.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: h.descriptionText,
        children: (null == g ? void 0 : g.length) > 0 ? g : E.default.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER
      })]
    }), (0, n.jsxs)("div", {
      className: s()(h.tagsContainer, C ? h.traitsBorderMask : void 0),
      children: [(0, n.jsx)("div", {
        className: C ? h.traitsMask : void 0
      }), (0, n.jsxs)("div", {
        className: h.tagsCount,
        children: [(0, n.jsx)(l.TagsIcon, {
          height: 12,
          width: 12,
          className: h.tags
        }), (0, n.jsx)(d.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: E.default.Messages.CLAN_SETUP_NUM_TRAITS.format({
            n: R.length
          })
        })]
      }), (0, n.jsx)("div", {
        className: h.traits,
        children: R.map(e => (0, n.jsx)(T, {
          trait: e,
          selected: L.has(e),
          onClick: x
        }, e))
      })]
    })]
  })
}