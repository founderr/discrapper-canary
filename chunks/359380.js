"use strict";
n.r(t), n("47120");
var a = n("735250"),
  i = n("470079"),
  r = n("120356"),
  s = n.n(r),
  l = n("481060"),
  o = n("90062"),
  d = n("964309"),
  c = n("898543"),
  u = n("87576"),
  f = n("308083"),
  m = n("689938"),
  h = n("418571");
let E = e => {
  let {
    title: t,
    icon: n,
    traits: r,
    interests: o,
    handleUpdate: d
  } = e, c = i.useCallback(e => {
    let t = new Set(o);
    t.delete(e), d(t)
  }, [d, o]), u = i.useCallback(e => {
    if (o.size === f.MAX_NUM_INTERESTS) return;
    let t = new Set(o);
    t.add(e), d(t)
  }, [d, o]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.Text, {
      className: h.interestsCategoryTitle,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: t
    }), (0, a.jsx)("div", {
      className: h.interestsCategory,
      children: r.map(e => {
        let t = o.has(e);
        return (0, a.jsxs)(l.Clickable, {
          className: s()(h.interestsTag, {
            [h.selected]: t
          }),
          onClick: () => t ? c(e) : u(e),
          children: [(0, a.jsx)(n, {
            className: h.utilityTagIcon
          }), (0, a.jsx)(l.Text, {
            variant: "text-xs/medium",
            color: "none",
            children: e
          })]
        }, e)
      })
    })]
  })
};
t.default = e => {
  let {
    title: t,
    description: n,
    handleUpdate: r,
    interests: s,
    requiredGameId: T
  } = e, p = i.useMemo(() => m.default.getAvailableLocales().map(e => ({
    value: e.value,
    label: e.localizedName
  })), []), _ = i.useMemo(() => Array.from(s), [s]), C = i.useMemo(() => _.filter(e => f.LANGUAGES_SET.has(e)), [_]), g = i.useCallback(e => {
    let t = _.filter(e => !f.LANGUAGES_SET.has(e));
    r(new Set([...t, ...e]))
  }, [r, _]), x = i.useMemo(() => _.filter(e => f.ALL_TRAITS_SET.has(e) || f.LANGUAGES_SET.has(e)), [_]);
  return (0, a.jsxs)("div", {
    className: h.slideContentWithSidebar,
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: h.title,
      children: t
    }), (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: h.subtitle,
      children: n
    }), (0, a.jsxs)("div", {
      className: h.content,
      children: [(0, a.jsxs)("div", {
        className: h.mainPanelContainer,
        children: [T === f.VALORANT_ID && (0, a.jsx)(E, {
          title: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
          icon: c.default,
          traits: f.VALORANT_TRAITS,
          interests: s,
          handleUpdate: r
        }), (0, a.jsx)(E, {
          title: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
          icon: o.default,
          traits: f.AGE_TRAITS,
          interests: s,
          handleUpdate: r
        }), (0, a.jsx)(E, {
          title: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
          icon: d.default,
          traits: f.IDENTITY_TRAITS,
          interests: s,
          handleUpdate: r
        }), (0, a.jsx)(l.Text, {
          className: h.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
        }), (0, a.jsx)("div", {
          className: h.languageSelect,
          children: (0, a.jsx)(l.SearchableSelect, {
            wrapperClassName: h.input,
            options: p,
            value: C,
            onChange: g,
            placeholder: m.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
            multi: !0
          })
        })]
      }), (0, a.jsx)("div", {
        className: h.fixedWidthSidebar,
        children: _.length > 0 && (0, a.jsx)(u.default, {
          traits: _,
          traitsToHighlight: x
        })
      })]
    })]
  })
}