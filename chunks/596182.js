"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("77078"),
  o = n("563911"),
  u = n("258078"),
  d = n("286217"),
  c = n("355263"),
  f = n("406291"),
  p = n("782340"),
  m = n("333209");

function h(e, t, n) {
  return (0, l.jsx)(d.default, {
    className: m.option,
    name: e.displayName,
    state: t,
    onClick: n
  }, e.name)
}

function E(e) {
  let {
    command: t,
    optionStates: n,
    onOptionClick: a
  } = e, {
    requiredOptions: s,
    setOptionalOptions: o,
    unsetOptionalOptions: d
  } = i.useMemo(() => {
    var e, l, i, a;
    let s = null !== (i = null === (e = t.options) || void 0 === e ? void 0 : e.filter(e => e.required)) && void 0 !== i ? i : [],
      r = null !== (a = null === (l = t.options) || void 0 === l ? void 0 : l.filter(e => !e.required)) && void 0 !== a ? a : [],
      o = r.filter(e => {
        var t;
        return null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue
      }),
      u = r.filter(e => {
        var t;
        return !(null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue)
      });
    return {
      requiredOptions: s,
      setOptionalOptions: o,
      unsetOptionalOptions: u
    }
  }, [t.options, n]), c = (0, l.jsx)("div", {
    className: m.optionalNames,
    children: d.map(e => (0, l.jsx)(r.Text, {
      variant: "text-sm/normal",
      children: e.displayName
    }, e.name))
  }), f = s.map(e => h(e, null == n ? void 0 : n[e.name], a)), E = o.length > 0 ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(r.Heading, {
      className: m.optionalHeader,
      variant: "heading-deprecated-12/semibold",
      children: p.default.Messages.COMMANDS_OPTIONAL_HEADER
    }), o.map(e => h(e, null == n ? void 0 : n[e.name], a))]
  }) : null, S = d.length > 0 ? (0, l.jsx)(r.Tooltip, {
    text: c,
    "aria-label": !1,
    delay: 200,
    children: e => (0, l.jsx)(u.default, {
      className: m.optionalCount,
      color: u.default.Colors.MUTED,
      ...e,
      children: 0 === o.length ? p.default.Messages.COMMANDS_OPTIONAL_COUNT.format({
        count: d.length
      }) : p.default.Messages.COMMANDS_OPTIONAL_COUNT_REMAINING.format({
        count: d.length
      })
    })
  }) : null;
  return (0, l.jsxs)(l.Fragment, {
    children: [f, null != E || null != S ? (0, l.jsxs)("div", {
      className: m.optionals,
      children: [E, S]
    }) : null]
  })
}

function S(e) {
  var t, n, a;
  let r, {
      command: u,
      activeOptionName: d,
      channel: p,
      showOptions: h,
      showImage: S,
      optionStates: g,
      onOptionClick: C,
      section: T,
      isSelectable: v = !0
    } = e,
    I = i.useMemo(() => {
      var e;
      return null == u ? void 0 : null === (e = u.options) || void 0 === e ? void 0 : e.find(e => e.name === d)
    }, [d, u]),
    _ = null != d ? null == g ? void 0 : g[d] : null;
  r = null != _ && (null === (t = _.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? null !== (n = _.lastValidationResult.error) && void 0 !== n ? n : "" : null;
  let y = S && null != T ? (0, c.getIconComponent)(T) : null;
  return (0, l.jsxs)("div", {
    className: s(m.wrapper, v ? null : m.disabled),
    children: [null != y ? (0, l.jsx)(y, {
      className: m.image,
      channel: p,
      section: T,
      width: 32,
      height: 32
    }) : null, (0, l.jsxs)("div", {
      className: m.infoWrapper,
      children: [(0, l.jsxs)("div", {
        className: m.usageWrapper,
        children: [(0, l.jsx)(o.AutocompleteRowHeading, {
          className: m.title,
          children: f.COMMAND_SENTINEL + u.displayName
        }), h ? (0, l.jsx)(E, {
          command: u,
          optionStates: g,
          onOptionClick: C
        }) : null]
      }), (0, l.jsx)(o.AutocompleteRowSubheading, {
        className: s(m.description, null != r ? m.error : null),
        children: null !== (a = null != r ? r : null == I ? void 0 : I.displayDescription) && void 0 !== a ? a : u.displayDescription
      })]
    }), (0, l.jsx)(o.AutocompleteRowContentSecondary, {
      className: m.source,
      children: null == T ? void 0 : T.name
    })]
  })
}