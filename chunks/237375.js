"use strict";
n.d(t, {
  Z: function() {
    return f
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(508688),
  u = n(154921),
  _ = n(987826),
  c = n(826298),
  d = n(665692),
  E = n(689938),
  I = n(675070);

function T(e, t, n) {
  return (0, i.jsx)(_.Z, {
    className: I.option,
    name: e.displayName,
    state: t,
    onClick: n
  }, e.name)
}

function h(e) {
  let {
    command: t,
    optionStates: n,
    onOptionClick: s
  } = e, {
    requiredOptions: o,
    setOptionalOptions: l,
    unsetOptionalOptions: _
  } = r.useMemo(() => {
    var e, i, r, s;
    let o = null !== (r = null === (e = t.options) || void 0 === e ? void 0 : e.filter(e => e.required)) && void 0 !== r ? r : [],
      a = null !== (s = null === (i = t.options) || void 0 === i ? void 0 : i.filter(e => !e.required)) && void 0 !== s ? s : [],
      l = a.filter(e => {
        var t;
        return null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue
      });
    return {
      requiredOptions: o,
      setOptionalOptions: l,
      unsetOptionalOptions: a.filter(e => {
        var t;
        return !(null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue)
      })
    }
  }, [t.options, n]), c = (0, i.jsx)("div", {
    className: I.optionalNames,
    children: _.map(e => (0, i.jsx)(a.Text, {
      variant: "text-sm/normal",
      children: e.displayName
    }, e.name))
  }), d = o.map(e => T(e, null == n ? void 0 : n[e.name], s)), h = l.length > 0 ? (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.Heading, {
      className: I.optionalHeader,
      variant: "heading-deprecated-12/semibold",
      children: E.Z.Messages.COMMANDS_OPTIONAL_HEADER
    }), l.map(e => T(e, null == n ? void 0 : n[e.name], s))]
  }) : null, f = _.length > 0 ? (0, i.jsx)(a.Tooltip, {
    text: c,
    "aria-label": !1,
    delay: 200,
    children: e => (0, i.jsx)(u.Z, {
      className: I.optionalCount,
      color: u.Z.Colors.MUTED,
      ...e,
      children: 0 === l.length ? E.Z.Messages.COMMANDS_OPTIONAL_COUNT.format({
        count: _.length
      }) : E.Z.Messages.COMMANDS_OPTIONAL_COUNT_REMAINING.format({
        count: _.length
      })
    })
  }) : null;
  return (0, i.jsxs)(i.Fragment, {
    children: [d, null != h || null != f ? (0, i.jsxs)("div", {
      className: I.optionals,
      children: [h, f]
    }) : null]
  })
}

function f(e) {
  var t, n, s;
  let a, {
      command: u,
      activeOptionName: _,
      channel: E,
      showOptions: T,
      showImage: f,
      optionStates: S,
      onOptionClick: A,
      section: N,
      isSelectable: m = !0
    } = e,
    O = r.useMemo(() => {
      var e;
      return null == u ? void 0 : null === (e = u.options) || void 0 === e ? void 0 : e.find(e => e.name === _)
    }, [_, u]),
    R = null != _ ? null == S ? void 0 : S[_] : null;
  a = null != R && (null === (t = R.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? null !== (n = R.lastValidationResult.error) && void 0 !== n ? n : "" : null;
  let p = f && null != N ? (0, c.ky)(N) : null;
  return (0, i.jsxs)("div", {
    className: o()(I.wrapper, m ? null : I.disabled),
    children: [null != p ? (0, i.jsx)(p, {
      className: I.image,
      channel: E,
      section: N,
      width: 32,
      height: 32
    }) : null, (0, i.jsxs)("div", {
      className: I.infoWrapper,
      children: [(0, i.jsxs)("div", {
        className: I.usageWrapper,
        children: [(0, i.jsx)(l.BR, {
          className: I.title,
          children: d.GI + u.displayName
        }), T ? (0, i.jsx)(h, {
          command: u,
          optionStates: S,
          onOptionClick: A
        }) : null]
      }), (0, i.jsx)(l.wL, {
        className: o()(I.description, null != a ? I.error : null),
        children: null !== (s = null != a ? a : null == O ? void 0 : O.displayDescription) && void 0 !== s ? s : u.displayDescription
      })]
    }), (0, i.jsx)(l.dY, {
      className: I.source,
      children: null == N ? void 0 : N.name
    })]
  })
}