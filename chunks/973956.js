"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("424973"), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("679653"),
  u = s("419830"),
  c = s("233069"),
  E = s("245997"),
  _ = s("27618"),
  T = s("697218"),
  I = s("151185"),
  S = s("432153"),
  N = s("782340"),
  f = s("490984");

function g(e) {
  return String(e)
}

function A(e) {
  let {
    icon: t,
    title: s,
    subtitle: n,
    className: l
  } = e;
  return (0, a.jsxs)("div", {
    className: i(f.label, l),
    children: [t, (0, a.jsxs)("div", {
      className: f.labelText,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "none",
        className: f.labelTitle,
        children: s
      }), null != n && "" !== n ? (0, a.jsx)(o.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        className: f.labelSubtitle,
        children: n
      }) : null]
    })]
  })
}

function L() {
  return (0, a.jsx)(A, {
    icon: (0, a.jsx)(I.default, {
      className: f.labelIcon
    }),
    title: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_SELECT_CREATE_LABEL,
    className: f.createLabel
  })
}

function m(e) {
  var t;
  let {
    channelId: s
  } = e, n = (0, S.useChannelWithTemplateFallback)(s), l = (0, S.useChannelWithTemplateFallback)(null !== (t = null == n ? void 0 : n.parent_id) && void 0 !== t ? t : "");
  if (null == n) return null;
  let i = (0, u.getChannelIconComponent)(n),
    r = (0, d.computeChannelName)(n, T.default, _.default),
    o = null != l ? (0, d.computeChannelName)(l, T.default, _.default) : void 0;
  return (0, a.jsx)(A, {
    icon: null != i && (0, a.jsx)(i, {
      className: f.labelIcon
    }),
    title: r,
    subtitle: o
  })
}

function C(e) {
  let {
    value: t
  } = e;
  return null != t ? (0, a.jsx)(m, {
    channelId: t
  }) : (0, a.jsx)(L, {})
}

function O(e) {
  let {
    guildId: t,
    value: l,
    initialChannelId: i,
    omitChannelIds: u,
    "aria-labelledby": I,
    onChange: f
  } = e, A = N.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_SELECT_CREATE_LABEL, L = (0, r.useStateFromStores)([E.default], () => E.default.getCategories(t), [t]), m = (0, S.useChannelWithTemplateFallback)(null != l ? l : ""), O = n.useMemo(() => {
    let e = [{
        value: null,
        label: A
      }],
      t = !1;
    for (let s of L._categories)
      for (let {
          channel: a
        }
        of L[s.channel.id]) {
        if (!!(0, c.isGuildSelectableChannelType)(a.type) || !!(0, c.isGuildVocalChannelType)(a.type))(!(a.id !== l && (null == u ? void 0 : u.has(a.id))) || a.id === i && l !== i) && (l === a.id && (t = !0), e.push({
          value: a.id,
          label: (0, d.computeChannelName)(a, T.default, _.default)
        }))
      }
    return null != l && !t && null != m && e.push({
      value: l,
      label: m.name
    }), e
  }, [A, l, m, L, u, i]);
  return (0, a.jsx)(o.Select, {
    placeholder: N.default.Messages.CHANNEL_SELECT,
    options: O,
    select: function(e) {
      null == e ? (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("341072").then(s.bind(s, "341072"));
        return s => (0, a.jsx)(e, {
          ...s,
          guildId: t,
          onSubmit: f
        })
      }) : f(e)
    },
    isSelected: e => null != l && g(e) === g(l),
    serialize: g,
    renderOptionLabel: C,
    renderOptionValue: e => {
      let [t] = e;
      return C(t)
    },
    "aria-labelledby": I
  })
}