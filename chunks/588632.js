"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
}), l("47120");
var a = l("735250"),
  n = l("470079"),
  o = l("658722"),
  r = l.n(o),
  i = l("692547"),
  s = l("481060"),
  u = l("596454"),
  d = l("987134"),
  c = l("465670"),
  m = l("689938"),
  f = l("133504");

function h(e) {
  return null != e && (null != e.id || null != e.name)
}
let v = {
  ...d.DEFAULT_SELECT_STYLES,
  control: (e, t) => {
    let {
      isDisabled: l,
      menuIsOpen: a
    } = t;
    return {
      ...e,
      backgroundColor: "var(--input-background)",
      borderColor: "var(--input-background)",
      opacity: l ? .6 : 1,
      boxShadow: void 0,
      borderRadius: a ? "8px 8px 0 0" : "8px",
      minHeight: 40,
      transition: "border 0.15s ease",
      cursor: l ? "not-allowed" : void 0,
      pointerEvents: l ? "none" : void 0,
      "&:hover": {
        borderColor: "var(--input-background)"
      }
    }
  },
  valueContainer: e => ({
    ...e,
    padding: "8px",
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    cursor: "text"
  }),
  indicatorsContainer: e => ({
    ...e,
    alignItems: "flex-start",
    paddingTop: 4
  }),
  option: (e, t) => {
    let {
      isSelected: l,
      isFocused: a
    } = t;
    return {
      ...e,
      ...l ? {
        backgroundColor: "var(--background-modifier-selected)",
        color: "var(--interactive-active)"
      } : a ? {
        backgroundColor: "var(--background-modifier-hover)",
        color: "var(--interactive-hover)"
      } : {
        backgroundColor: "transparent",
        color: "var(--interactive-normal)"
      },
      cursor: "pointer",
      display: "flex",
      padding: 12,
      alignItems: "center",
      minHeight: 40,
      "&:active": {
        backgroundColor: "var(--background-modifier-selected)",
        color: "var(--interactive-active)"
      },
      "&:hover [data-hover=true]": {
        opacity: 1
      }
    }
  }
};

function g(e) {
  let {
    options: t,
    value: l,
    onChange: o,
    canBeNew: g,
    memberCounts: x
  } = e, p = e => {
    e.preventDefault(), e.stopPropagation()
  }, C = n.useCallback(e => {
    var n, r, i, d;
    return (0, a.jsxs)("div", {
      className: f.selectValuePill,
      onMouseDown: p,
      children: [h(e.emoji) && (0, a.jsx)(u.default, {
        emojiId: null === (n = e.emoji) || void 0 === n ? void 0 : n.id,
        emojiName: null === (r = e.emoji) || void 0 === r ? void 0 : r.name,
        animated: null !== (d = null === (i = e.emoji) || void 0 === i ? void 0 : i.animated) && void 0 !== d && d
      }), (0, a.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: e.title
      }), (0, a.jsx)(s.Clickable, {
        className: f.selectValuePillClose,
        onClick: () => {
          o(t.filter(t => l.includes(t.id) && t.id !== e.id))
        },
        children: (0, a.jsx)(c.default, {
          className: f.selectValuePillCloseIcon
        })
      })]
    })
  }, [o, t, l]), N = n.useCallback(e => {
    var t, l, n, o;
    let r = null == x || null == e.roleIds ? 0 : Math.max(...e.roleIds.map(e => x[e])),
      d = null != x && r > 0;
    return (0, a.jsxs)("div", {
      className: f.selectOption,
      children: [(0, a.jsxs)("div", {
        className: f.selectOptionTitle,
        children: [h(e.emoji) && (0, a.jsx)(u.default, {
          emojiId: null === (t = e.emoji) || void 0 === t ? void 0 : t.id,
          emojiName: null === (l = e.emoji) || void 0 === l ? void 0 : l.name,
          animated: null !== (o = null === (n = e.emoji) || void 0 === n ? void 0 : n.animated) && void 0 !== o && o
        }), (0, a.jsx)(s.Text, {
          variant: "text-sm/normal",
          children: e.title
        })]
      }), g && e.isUnseen && (0, a.jsx)(s.TextBadge, {
        color: i.default.unsafe_rawColors.BRAND_260.css,
        text: m.default.Messages.NEW,
        className: f.optionNewBadge
      }), d && (0, a.jsx)("div", {
        className: f.selectOptionMemberCount,
        "data-hover": !0,
        children: (0, a.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          children: m.default.Messages.ONBOARDING_OPTION_ROLE_COUNTS.format({
            memberCount: r
          })
        })
      })]
    })
  }, [g, x]), j = n.useCallback((e, t) => {
    let {
      data: l
    } = e;
    return 0 === t.length || r()(t.toLowerCase(), l.title.toLowerCase())
  }, []);
  return (0, a.jsx)(d.default, {
    styleOverrides: v,
    clearable: !1,
    isMulti: !0,
    options: t,
    onChange: o,
    value: l,
    closeMenuOnSelect: !1,
    multiValueRenderer: C,
    optionRenderer: N,
    filterOption: j
  })
}