"use strict";
n.r(t), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("120356"),
  i = n.n(s),
  l = n("481060"),
  o = n("90062"),
  c = n("964309"),
  d = n("898543"),
  u = n("87576"),
  f = n("308083"),
  m = n("689938"),
  h = n("661926");
let p = e => {
  let {
    title: t,
    icon: n,
    traits: s,
    interests: o,
    handleUpdate: c
  } = e, d = r.useCallback(e => {
    let t = new Set(o);
    t.delete(e), c(t)
  }, [c, o]), u = r.useCallback(e => {
    if (o.size === f.MAX_NUM_INTERESTS) return;
    let t = new Set(o);
    t.add(e), c(t)
  }, [c, o]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.Text, {
      className: h.interestsCategoryTitle,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: t
    }), (0, a.jsx)("div", {
      className: h.interestsCategory,
      children: s.map(e => {
        let t = o.has(e);
        return (0, a.jsxs)(l.Clickable, {
          className: i()(h.interestsTag, h.selectableOption, {
            [h.selectedOption]: t
          }),
          onClick: () => t ? d(e) : u(e),
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
    handleUpdate: s,
    interests: i,
    requiredGameId: E,
    optional: T = !1,
    hidePreview: C = !1
  } = e, x = r.useMemo(() => m.default.getAvailableLocales().map(e => ({
    value: e.localizedName,
    label: e.localizedName
  })), []), _ = r.useMemo(() => Array.from(i), [i]), g = r.useMemo(() => _.filter(e => f.LANGUAGES_SET.has(e)), [_]), I = r.useCallback(e => {
    let t = _.filter(e => !f.LANGUAGES_SET.has(e));
    s(new Set([...t, ...e]))
  }, [s, _]), N = r.useMemo(() => _.filter(e => f.ALL_TRAITS_SET.has(e) || f.LANGUAGES_SET.has(e)), [_]);
  return (0, a.jsxs)("div", {
    className: h.slideContent,
    children: [T && (0, a.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      className: h.optionalTag,
      children: m.default.Messages.CLAN_SETUP_OPTIONAL
    }), (0, a.jsx)(l.Heading, {
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
        children: [E === f.VALORANT_ID && (0, a.jsx)(p, {
          title: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
          icon: d.default,
          traits: f.VALORANT_TRAITS,
          interests: i,
          handleUpdate: s
        }), (0, a.jsx)(p, {
          title: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
          icon: o.default,
          traits: f.AGE_TRAITS,
          interests: i,
          handleUpdate: s
        }), (0, a.jsx)(p, {
          title: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
          icon: c.default,
          traits: f.IDENTITY_TRAITS,
          interests: i,
          handleUpdate: s
        }), (0, a.jsx)(l.Text, {
          className: h.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
        }), (0, a.jsx)("div", {
          className: h.languageSelect,
          children: (0, a.jsx)(l.SearchableSelect, {
            wrapperClassName: h.input,
            options: x,
            value: g,
            onChange: I,
            placeholder: m.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
            multi: !0
          })
        })]
      }), (0, a.jsx)("div", {
        className: h.fixedWidthSidebar,
        children: _.length > 0 && !C && (0, a.jsx)(u.default, {
          traits: _,
          traitsToHighlight: N
        })
      })]
    })]
  })
}