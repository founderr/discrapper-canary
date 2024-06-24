t.d(n, {
  Z: function() {
    return f
  }
}), t(47120);
var a = t(735250),
  r = t(470079),
  s = t(120356),
  i = t.n(s),
  l = t(442837),
  o = t(481060),
  c = t(231467),
  d = t(430824),
  u = t(214715),
  m = t(308083),
  h = t(689938),
  C = t(309479);

function x(e) {
  let {
    trait: n,
    selected: t,
    onClick: s
  } = e, [l, o] = r.useState(!1), c = r.useCallback(() => o(!0), []), d = r.useCallback(() => o(!1), []);
  return (0, a.jsx)(u.Z, {
    variant: "text-xs/semibold",
    color: l ? "text-muted" : "interactive-active",
    className: i()(C.trait, {
      [C.strikethrough]: l
    }),
    text: n,
    selected: t,
    onMouseEnter: t ? c : void 0,
    onMouseLeave: t ? d : void 0,
    onClick: t ? s : void 0
  }, n)
}

function f(e) {
  var n;
  let {
    guildId: t,
    progress: s,
    traitsToHighlight: u,
    maskDescription: f,
    maskTraits: E,
    onTraitClick: T
  } = e, _ = (0, l.e7)([d.Z], () => d.Z.getGuild(t)), {
    interests: I,
    description: g,
    playstyle: p,
    wildcardDescriptors: N,
    brandPrimaryColor: v
  } = s, y = (0, o.useToken)(o.tokens.colors.TEXT_BRAND), S = Array.from(I), A = r.useMemo(() => null != u ? new Set(u) : new Set, [u]);
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)("div", {
      className: i()(C.description, f ? C.descriptionBorderMask : void 0),
      children: [(0, a.jsx)("div", {
        className: f ? C.descriptionMask : void 0
      }), (0, a.jsx)(o.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        lineClamp: 1,
        children: null == _ ? void 0 : _.name
      }), (0, a.jsxs)("div", {
        className: C.clanInfoRow,
        children: [(0, a.jsx)(o.Text, {
          variant: "text-xxs/normal",
          className: C.clanInfoItem,
          children: (0, a.jsx)("span", {
            role: "img",
            "aria-label": h.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
            children: "\uD83C\uDFAE"
          })
        }), (0, a.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          className: C.clanInfoItem,
          children: null !== (n = (0, m.mv)(p)) && void 0 !== n ? n : h.Z.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
        }), null != _ && (0, a.jsx)(c.cS, {
          wildcardDescriptors: N,
          primaryColor: null != v ? v : y.hex()
        })]
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: C.descriptionText,
        children: (null == g ? void 0 : g.length) > 0 ? g : h.Z.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER
      })]
    }), (0, a.jsxs)("div", {
      className: i()(C.tagsContainer, E ? C.traitsBorderMask : void 0),
      children: [(0, a.jsx)("div", {
        className: E ? C.traitsMask : void 0
      }), (0, a.jsxs)("div", {
        className: C.tagsCount,
        children: [(0, a.jsx)(o.TagsIcon, {
          size: "xxs",
          className: C.tags
        }), (0, a.jsx)(o.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: h.Z.Messages.CLAN_SETUP_NUM_TRAITS.format({
            n: S.length
          })
        })]
      }), (0, a.jsx)("div", {
        className: C.traits,
        children: S.map(e => (0, a.jsx)(x, {
          trait: e,
          selected: A.has(e),
          onClick: T
        }, e))
      })]
    })]
  })
}