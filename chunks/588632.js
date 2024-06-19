t.d(n, {
  Z: function() {
    return g
  }
}), t(47120);
var l = t(735250),
  o = t(470079),
  a = t(658722),
  r = t.n(a),
  i = t(692547),
  s = t(481060),
  c = t(596454),
  d = t(987134),
  u = t(689938),
  m = t(547723);

function h(e) {
  return null != e && (null != e.id || null != e.name)
}
let v = {
  ...d.v,
  control: (e, n) => {
    let {
      isDisabled: t,
      menuIsOpen: l
    } = n;
    return {
      ...e,
      backgroundColor: "var(--input-background)",
      borderColor: "var(--input-background)",
      opacity: t ? .6 : 1,
      boxShadow: void 0,
      borderRadius: l ? "8px 8px 0 0" : "8px",
      minHeight: 40,
      transition: "border 0.15s ease",
      cursor: t ? "not-allowed" : void 0,
      pointerEvents: t ? "none" : void 0,
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
  option: (e, n) => {
    let {
      isSelected: t,
      isFocused: l
    } = n;
    return {
      ...e,
      ...t ? {
        backgroundColor: "var(--background-modifier-selected)",
        color: "var(--interactive-active)"
      } : l ? {
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
    options: n,
    value: t,
    onChange: a,
    canBeNew: g,
    memberCounts: x
  } = e, p = e => {
    e.preventDefault(), e.stopPropagation()
  }, C = o.useCallback(e => {
    var o, r, i, d;
    return (0, l.jsxs)("div", {
      className: m.selectValuePill,
      onMouseDown: p,
      children: [h(e.emoji) && (0, l.jsx)(c.Z, {
        emojiId: null === (o = e.emoji) || void 0 === o ? void 0 : o.id,
        emojiName: null === (r = e.emoji) || void 0 === r ? void 0 : r.name,
        animated: null !== (d = null === (i = e.emoji) || void 0 === i ? void 0 : i.animated) && void 0 !== d && d
      }), (0, l.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: e.title
      }), (0, l.jsx)(s.Clickable, {
        className: m.selectValuePillClose,
        onClick: () => {
          a(n.filter(n => t.includes(n.id) && n.id !== e.id))
        },
        children: (0, l.jsx)(s.CloseSmallIcon, {
          size: "md",
          color: "currentColor",
          className: m.selectValuePillCloseIcon
        })
      })]
    })
  }, [a, n, t]), f = o.useCallback(e => {
    var n, t, o, a;
    let r = null == x || null == e.roleIds ? 0 : Math.max(...e.roleIds.map(e => x[e])),
      d = null != x && r > 0;
    return (0, l.jsxs)("div", {
      className: m.selectOption,
      children: [(0, l.jsxs)("div", {
        className: m.selectOptionTitle,
        children: [h(e.emoji) && (0, l.jsx)(c.Z, {
          emojiId: null === (n = e.emoji) || void 0 === n ? void 0 : n.id,
          emojiName: null === (t = e.emoji) || void 0 === t ? void 0 : t.name,
          animated: null !== (a = null === (o = e.emoji) || void 0 === o ? void 0 : o.animated) && void 0 !== a && a
        }), (0, l.jsx)(s.Text, {
          variant: "text-sm/normal",
          children: e.title
        })]
      }), g && e.isUnseen && (0, l.jsx)(s.TextBadge, {
        color: i.Z.unsafe_rawColors.BRAND_260.css,
        text: u.Z.Messages.NEW,
        className: m.optionNewBadge
      }), d && (0, l.jsx)("div", {
        className: m.selectOptionMemberCount,
        "data-hover": !0,
        children: (0, l.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          children: u.Z.Messages.ONBOARDING_OPTION_ROLE_COUNTS.format({
            memberCount: r
          })
        })
      })]
    })
  }, [g, x]), N = o.useCallback((e, n) => {
    let {
      data: t
    } = e;
    return 0 === n.length || r()(n.toLowerCase(), t.title.toLowerCase())
  }, []);
  return (0, l.jsx)(d.Z, {
    styleOverrides: v,
    clearable: !1,
    isMulti: !0,
    options: n,
    onChange: a,
    value: t,
    closeMenuOnSelect: !1,
    multiValueRenderer: C,
    optionRenderer: f,
    filterOption: N
  })
}