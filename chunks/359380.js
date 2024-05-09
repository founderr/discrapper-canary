"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  E = s.n(i),
  l = s("481060"),
  _ = s("90062"),
  r = s("964309"),
  u = s("898543"),
  o = s("87576"),
  T = s("308083"),
  d = s("689938"),
  A = s("418571");
let I = e => {
  let {
    title: t,
    icon: s,
    traits: i,
    interests: _,
    handleUpdate: r
  } = e, u = n.useCallback(e => {
    let t = new Set(_);
    t.delete(e), r(t)
  }, [r, _]), o = n.useCallback(e => {
    if (_.size === T.MAX_NUM_INTERESTS) return;
    let t = new Set(_);
    t.add(e), r(t)
  }, [r, _]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.Text, {
      className: A.interestsCategoryTitle,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: t
    }), (0, a.jsx)("div", {
      className: A.interestsCategory,
      children: i.map(e => {
        let t = _.has(e);
        return (0, a.jsxs)(l.Clickable, {
          className: E()(A.interestsTag, A.selectableOption, {
            [A.selectedOption]: t
          }),
          onClick: () => t ? u(e) : o(e),
          children: [(0, a.jsx)(s, {
            className: A.utilityTagIcon
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
    description: s,
    handleUpdate: i,
    interests: E,
    requiredGameId: L,
    optional: c = !1,
    hidePreview: N = !1
  } = e, S = n.useMemo(() => d.default.getAvailableLocales().map(e => ({
    value: e.localizedName,
    label: e.localizedName
  })), []), g = n.useMemo(() => Array.from(E), [E]), D = n.useMemo(() => g.filter(e => T.LANGUAGES_SET.has(e)), [g]), C = n.useCallback(e => {
    let t = g.filter(e => !T.LANGUAGES_SET.has(e));
    i(new Set([...t, ...e]))
  }, [i, g]), f = n.useMemo(() => g.filter(e => T.ALL_TRAITS_SET.has(e) || T.LANGUAGES_SET.has(e)), [g]);
  return (0, a.jsxs)("div", {
    className: A.slideContent,
    children: [c && (0, a.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      className: A.optionalTag,
      children: d.default.Messages.CLAN_SETUP_OPTIONAL
    }), (0, a.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: A.title,
      children: t
    }), (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: A.subtitle,
      children: s
    }), (0, a.jsxs)("div", {
      className: A.content,
      children: [(0, a.jsxs)("div", {
        className: A.mainPanelContainer,
        children: [L === T.VALORANT_ID && (0, a.jsx)(I, {
          title: d.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
          icon: u.default,
          traits: T.VALORANT_TRAITS,
          interests: E,
          handleUpdate: i
        }), (0, a.jsx)(I, {
          title: d.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
          icon: _.default,
          traits: T.AGE_TRAITS,
          interests: E,
          handleUpdate: i
        }), (0, a.jsx)(I, {
          title: d.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
          icon: r.default,
          traits: T.IDENTITY_TRAITS,
          interests: E,
          handleUpdate: i
        }), (0, a.jsx)(l.Text, {
          className: A.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: d.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
        }), (0, a.jsx)("div", {
          className: A.languageSelect,
          children: (0, a.jsx)(l.SearchableSelect, {
            wrapperClassName: A.input,
            options: S,
            value: D,
            onChange: C,
            placeholder: d.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
            multi: !0
          })
        })]
      }), (0, a.jsx)("div", {
        className: A.fixedWidthSidebar,
        children: g.length > 0 && !N && (0, a.jsx)(o.default, {
          traits: g,
          traitsToHighlight: f
        })
      })]
    })]
  })
}