"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
}), s("424973"), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("446674"),
  o = s("77078"),
  d = s("679653"),
  u = s("419830"),
  c = s("233069"),
  E = s("245997"),
  _ = s("27618"),
  I = s("697218"),
  T = s("151185"),
  f = s("432153"),
  S = s("782340"),
  m = s("521180");

function N(e) {
  return String(e)
}

function g(e) {
  let {
    icon: t,
    title: s,
    subtitle: l,
    className: n
  } = e;
  return (0, a.jsxs)("div", {
    className: i(m.label, n),
    children: [t, (0, a.jsxs)("div", {
      className: m.labelText,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "none",
        className: m.labelTitle,
        children: s
      }), null != l && "" !== l ? (0, a.jsx)(o.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        className: m.labelSubtitle,
        children: l
      }) : null]
    })]
  })
}

function h() {
  return (0, a.jsx)(g, {
    icon: (0, a.jsx)(T.default, {
      className: m.labelIcon
    }),
    title: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_SELECT_CREATE_LABEL,
    className: m.createLabel
  })
}

function C(e) {
  var t;
  let {
    channelId: s
  } = e, l = (0, f.useChannelWithTemplateFallback)(s), n = (0, f.useChannelWithTemplateFallback)(null !== (t = null == l ? void 0 : l.parent_id) && void 0 !== t ? t : "");
  if (null == l) return null;
  let i = (0, u.getChannelIconComponent)(l),
    r = (0, d.computeChannelName)(l, I.default, _.default),
    o = null != n ? (0, d.computeChannelName)(n, I.default, _.default) : void 0;
  return (0, a.jsx)(g, {
    icon: null != i && (0, a.jsx)(i, {
      className: m.labelIcon
    }),
    title: r,
    subtitle: o
  })
}

function R(e) {
  let {
    value: t
  } = e;
  return null != t ? (0, a.jsx)(C, {
    channelId: t
  }) : (0, a.jsx)(h, {})
}

function x(e) {
  let {
    guildId: t,
    value: n,
    initialChannelId: i,
    omitChannelIds: u,
    "aria-labelledby": T,
    onChange: m
  } = e, g = S.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_SELECT_CREATE_LABEL, h = (0, r.useStateFromStores)([E.default], () => E.default.getCategories(t), [t]), C = (0, f.useChannelWithTemplateFallback)(null != n ? n : ""), x = l.useMemo(() => {
    let e = [{
        value: null,
        label: g
      }],
      t = !1;
    for (let s of h._categories)
      for (let {
          channel: a
        }
        of h[s.channel.id]) {
        if (!!(0, c.isGuildSelectableChannelType)(a.type) || !!(0, c.isGuildVocalChannelType)(a.type))(!(a.id !== n && (null == u ? void 0 : u.has(a.id))) || a.id === i && n !== i) && (n === a.id && (t = !0), e.push({
          value: a.id,
          label: (0, d.computeChannelName)(a, I.default, _.default)
        }))
      }
    return null != n && !t && null != C && e.push({
      value: n,
      label: C.name
    }), e
  }, [g, n, C, h, u, i]);
  return (0, a.jsx)(o.Select, {
    placeholder: S.default.Messages.CHANNEL_SELECT,
    options: x,
    select: function(e) {
      null == e ? (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("341072").then(s.bind(s, "341072"));
        return s => (0, a.jsx)(e, {
          ...s,
          guildId: t,
          onSubmit: m
        })
      }) : m(e)
    },
    isSelected: e => null != n && N(e) === N(n),
    serialize: N,
    renderOptionLabel: R,
    renderOptionValue: e => {
      let [t] = e;
      return R(t)
    },
    "aria-labelledby": T
  })
}