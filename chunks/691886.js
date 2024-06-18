"use strict";
t.d(s, {
  Z: function() {
    return L
  }
}), t(653041), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(442837),
  o = t(481060),
  c = t(933557),
  d = t(471445),
  u = t(131704),
  E = t(324067),
  _ = t(699516),
  I = t(594174),
  T = t(303737),
  N = t(981631),
  m = t(689938),
  S = t(652144);

function h(e) {
  return String(e)
}

function g(e) {
  let {
    icon: s,
    title: t,
    subtitle: i,
    className: l
  } = e;
  return (0, n.jsxs)("div", {
    className: a()(S.label, l),
    children: [s, (0, n.jsxs)("div", {
      className: S.labelText,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "none",
        className: S.labelTitle,
        children: t
      }), null != i && "" !== i ? (0, n.jsx)(o.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        className: S.labelSubtitle,
        children: i
      }) : null]
    })]
  })
}

function C() {
  return (0, n.jsx)(g, {
    icon: (0, n.jsx)(o.PlusSmallIcon, {
      size: "md",
      color: "currentColor",
      className: S.labelIcon
    }),
    title: m.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_SELECT_CREATE_LABEL,
    className: S.createLabel
  })
}

function x(e) {
  var s;
  let {
    channelId: t
  } = e, i = (0, T.m7)(t), l = (0, T.m7)(null !== (s = null == i ? void 0 : i.parent_id) && void 0 !== s ? s : N.lds);
  if (null == i) return null;
  let a = (0, d.KS)(i),
    r = (0, c.F6)(i, I.default, _.Z),
    o = null != l ? (0, c.F6)(l, I.default, _.Z) : void 0;
  return (0, n.jsx)(g, {
    icon: null != a && (0, n.jsx)(a, {
      className: S.labelIcon
    }),
    title: r,
    subtitle: o
  })
}

function R(e) {
  let {
    value: s
  } = e;
  return null != s ? (0, n.jsx)(x, {
    channelId: s
  }) : (0, n.jsx)(C, {})
}

function L(e) {
  let {
    guildId: s,
    value: l,
    initialChannelId: a,
    omitChannelIds: d,
    "aria-labelledby": S,
    onChange: g
  } = e, C = m.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_SELECT_CREATE_LABEL, x = (0, r.e7)([E.Z], () => E.Z.getCategories(s), [s]), L = (0, T.m7)(null != l ? l : N.lds), O = i.useMemo(() => {
    let e = [{
        value: null,
        label: C
      }],
      s = !1;
    for (let t of x._categories)
      for (let {
          channel: n
        }
        of x[t.channel.id]) {
        if (!!(0, u.r8)(n.type) || !!(0, u.bw)(n.type))(!(n.id !== l && (null == d ? void 0 : d.has(n.id))) || n.id === a && l !== a) && (l === n.id && (s = !0), e.push({
          value: n.id,
          label: (0, c.F6)(n, I.default, _.Z)
        }))
      }
    return null != l && !s && null != L && e.push({
      value: l,
      label: L.name
    }), e
  }, [C, l, L, x, d, a]);
  return (0, n.jsx)(o.Select, {
    placeholder: m.Z.Messages.CHANNEL_SELECT,
    options: O,
    select: function(e) {
      null == e ? (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("7590"), t.e("45094"), t.e("61214")]).then(t.bind(t, 797671));
        return t => (0, n.jsx)(e, {
          ...t,
          guildId: s,
          onSubmit: g
        })
      }) : g(e)
    },
    isSelected: e => null != l && h(e) === h(l),
    serialize: h,
    renderOptionLabel: R,
    renderOptionValue: e => {
      let [s] = e;
      return R(s)
    },
    "aria-labelledby": S
  })
}