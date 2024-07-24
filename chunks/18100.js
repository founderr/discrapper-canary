t.d(n, {
  Z: function() {
return h;
  }
}), t(47120);
var a = t(735250),
  r = t(470079),
  i = t(120356),
  s = t.n(i),
  o = t(442837),
  l = t(481060),
  c = t(231467),
  d = t(430824),
  u = t(214715),
  m = t(308083),
  f = t(689938),
  _ = t(376851);

function C(e) {
  let {
trait: n,
selected: t,
onClick: i
  } = e, [o, l] = r.useState(!1), c = r.useCallback(() => l(!0), []), d = r.useCallback(() => l(!1), []);
  return (0, a.jsx)(u.Z, {
variant: 'text-xs/semibold',
color: o ? 'text-muted' : 'interactive-active',
className: s()(_.trait, {
  [_.strikethrough]: o
}),
text: n,
selected: t,
onMouseEnter: t ? c : void 0,
onMouseLeave: t ? d : void 0,
onClick: t ? i : void 0
  }, n);
}

function h(e) {
  var n;
  let {
guildId: t,
progress: i,
traitsToHighlight: u,
maskDescription: h,
maskTraits: x,
onTraitClick: g
  } = e, p = (0, o.e7)([d.Z], () => d.Z.getGuild(t)), {
interests: T,
description: E,
playstyle: I,
wildcardDescriptors: b,
brandPrimaryColor: N
  } = i, v = (0, l.useToken)(l.tokens.colors.TEXT_BRAND), y = Array.from(T), S = r.useMemo(() => null != u ? new Set(u) : new Set(), [u]);
  return (0, a.jsxs)('div', {
children: [
  (0, a.jsxs)('div', {
    className: s()(_.description, h ? _.descriptionBorderMask : void 0),
    children: [
      (0, a.jsx)('div', {
        className: h ? _.descriptionMask : void 0
      }),
      (0, a.jsx)(l.Heading, {
        variant: 'heading-md/medium',
        color: 'header-primary',
        lineClamp: 1,
        children: null == p ? void 0 : p.name
      }),
      (0, a.jsxs)('div', {
        className: _.clanInfoRow,
        children: [
          (0, a.jsx)(l.Text, {
            variant: 'text-xxs/normal',
            className: _.clanInfoItem,
            children: (0, a.jsx)('span', {
              role: 'img',
              'aria-label': f.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
              children: '\uD83C\uDFAE'
            })
          }),
          (0, a.jsx)(l.Text, {
            variant: 'text-xs/normal',
            color: 'text-secondary',
            className: _.clanInfoItem,
            children: null !== (n = (0, m.mv)(I)) && void 0 !== n ? n : f.Z.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
          }),
          null != p && (0, a.jsx)(c.cS, {
            wildcardDescriptors: b,
            primaryColor: null != N ? N : v.hex()
          })
        ]
      }),
      (0, a.jsx)(l.Text, {
        variant: 'text-xs/medium',
        color: 'header-secondary',
        className: _.descriptionText,
        children: (null == E ? void 0 : E.length) > 0 ? E : f.Z.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER
      })
    ]
  }),
  (0, a.jsxs)('div', {
    className: s()(_.tagsContainer, x ? _.traitsBorderMask : void 0),
    children: [
      (0, a.jsx)('div', {
        className: x ? _.traitsMask : void 0
      }),
      (0, a.jsxs)('div', {
        className: _.tagsCount,
        children: [
          (0, a.jsx)(l.TagsIcon, {
            size: 'xxs',
            className: _.tags
          }),
          (0, a.jsx)(l.Text, {
            variant: 'text-xs/semibold',
            color: 'text-muted',
            children: f.Z.Messages.CLAN_SETUP_NUM_TRAITS.format({
              n: y.length
            })
          })
        ]
      }),
      (0, a.jsx)('div', {
        className: _.traits,
        children: y.map(e => (0, a.jsx)(C, {
          trait: e,
          selected: S.has(e),
          onClick: g
        }, e))
      })
    ]
  })
]
  });
}