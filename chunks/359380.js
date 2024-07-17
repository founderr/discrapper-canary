t(47120), t(653041);
var a = t(735250),
  r = t(470079),
  i = t(481060),
  s = t(898543),
  o = t(214715),
  l = t(18100),
  c = t(308083),
  d = t(689938),
  u = t(363778);
let m = e => {
  let {
title: n,
icon: t,
traits: s,
interests: l,
handleUpdate: d
  } = e, m = r.useCallback(e => {
let n = new Set(l);
n.delete(e), d(n);
  }, [
d,
l
  ]), C = r.useCallback(e => {
if (l.size === c.c4)
  return;
let n = new Set(l);
n.add(e), d(n);
  }, [
d,
l
  ]);
  return (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsx)(i.Text, {
    className: u.interestsCategoryTitle,
    variant: 'text-xs/semibold',
    color: 'text-muted',
    children: n
  }),
  (0, a.jsx)('div', {
    className: u.interestsCategory,
    children: s.map(e => {
      let n = l.has(e);
      return (0, a.jsx)(o.Z, {
        variant: 'text-xs/semibold',
        color: 'interactive-normal',
        icon: t,
        text: e,
        selected: n,
        onClick: n ? m : C
      }, e);
    })
  })
]
  });
};
n.Z = e => {
  let {
guildId: n,
title: t,
description: o,
handleUpdate: C,
progress: f,
interests: _,
requiredGameId: h,
optional: x = !1,
hidePreview: g = !1
  } = e, p = r.useMemo(() => {
let e = [];
return c.gh.forEach(n => e.push({
  value: n,
  label: n
})), e;
  }, []), T = r.useMemo(() => {
var e;
return null !== (e = null != _ ? _ : null == f ? void 0 : f.interests) && void 0 !== e ? e : new Set();
  }, [
_,
null == f ? void 0 : f.interests
  ]), I = r.useMemo(() => Array.from(T), [T]), E = r.useMemo(() => I.filter(e => c.gh.has(e)), [I]), b = r.useCallback(e => {
C(new Set([
  ...I.filter(e => !c.gh.has(e)),
  ...e
]));
  }, [
C,
I
  ]), N = r.useMemo(() => I.filter(e => c.WZ.has(e) || c.gh.has(e)), [I]), v = r.useCallback(e => {
let n = new Set(T);
n.delete(e), C(n);
  }, [
C,
T
  ]);
  return (0, a.jsxs)('div', {
className: u.slideContent,
children: [
  x && (0, a.jsx)(i.Text, {
    variant: 'text-sm/medium',
    color: 'header-secondary',
    className: u.optionalTag,
    children: d.Z.Messages.CLAN_SETUP_OPTIONAL
  }),
  (0, a.jsx)(i.Heading, {
    variant: 'heading-xxl/medium',
    className: u.title,
    children: t
  }),
  (0, a.jsx)(i.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    className: u.subtitle,
    children: o
  }),
  (0, a.jsxs)('div', {
    className: u.content,
    children: [
      (0, a.jsxs)('div', {
        className: u.mainPanelContainer,
        children: [
          h === c.nJ && (0, a.jsx)(m, {
            title: d.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
            icon: (0, i.makeIconCompat)(s.Z),
            traits: c.k3,
            interests: T,
            handleUpdate: C
          }),
          h === c.xn && (0, a.jsx)(m, {
            title: d.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_GENSHIN,
            icon: i.SparklesIcon,
            traits: c.hm,
            interests: T,
            handleUpdate: C
          }),
          (0, a.jsx)(m, {
            title: d.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
            icon: i.HourglassIcon,
            traits: c.jK,
            interests: T,
            handleUpdate: C
          }),
          (0, a.jsx)(m, {
            title: d.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
            icon: i.UserIcon,
            traits: c.CT,
            interests: T,
            handleUpdate: C
          }),
          (0, a.jsx)(i.Text, {
            className: u.interestsCategoryTitle,
            variant: 'text-xs/semibold',
            color: 'text-muted',
            children: d.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
          }),
          (0, a.jsx)('div', {
            className: u.languageSelect,
            children: (0, a.jsx)(i.SearchableSelect, {
              wrapperClassName: u.input,
              options: p,
              value: E,
              onChange: b,
              placeholder: d.Z.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
              multi: !0
            })
          })
        ]
      }),
      (0, a.jsx)('div', {
        className: u.fixedWidthSidebar,
        children: null != f && I.length > 0 && !g && (0, a.jsx)(l.Z, {
          guildId: n,
          progress: f,
          traitsToHighlight: N,
          maskDescription: !0,
          onTraitClick: v
        })
      })
    ]
  })
]
  });
};