"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  },
  GuildSelector: function() {
    return g
  }
}), s("843762");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("570697"),
  u = s("305961"),
  c = s("677099"),
  S = s("476263"),
  E = s("449008"),
  T = s("424562"),
  f = s("782340"),
  m = s("714423");

function _(e) {
  let {
    guildId: t,
    className: s,
    globalOption: n,
    hideDivider: l = !1,
    onChange: r,
    renderOptionSuffix: o
  } = e;
  return (0, a.jsx)(d.default, {
    className: i(m.section, s),
    title: f.default.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_TITLE,
    hideDivider: l,
    forcedDivider: !0,
    children: (0, a.jsx)(g, {
      guildId: t,
      onChange: r,
      renderOptionSuffix: o,
      globalOption: n
    })
  })
}

function g(e) {
  let {
    guildId: t,
    globalOption: s,
    onChange: l,
    renderOptionSuffix: i
  } = e, d = (0, r.useStateFromStores)([T.default], () => T.default.showNotice()), _ = (0, r.useStateFromStores)([c.default], () => c.default.getFlattenedGuildIds()), g = (0, r.useStateFromStores)([u.default], () => u.default.getGuilds()), h = n.useMemo(() => {
    let e = _.map(e => {
      let t = g[e];
      return null == t ? null : {
        label: t.name,
        value: t.id
      }
    }).filter(E.isNotNullish);
    return null != s && e.unshift(s), e
  }, [_, g, s]), N = n.useCallback(e => {
    let t = (null == e ? void 0 : e.label) === (null == s ? void 0 : s.label) && (null == e ? void 0 : e.value) === (null == s ? void 0 : s.value);
    return null == e || "" === e.value || t ? null : (0, a.jsx)(S.default, {
      className: m.guildSelectOptionIcon,
      guild: g[e.value],
      size: S.default.Sizes.SMOL,
      active: !0
    })
  }, [g, s]);
  return (0, a.jsx)(o.SearchableSelect, {
    isDisabled: d,
    onChange: e => {
      if ("" === e || e === (null == s ? void 0 : s.value)) {
        l(null);
        return
      }
      let t = g[e];
      null != t && l(t)
    },
    value: t,
    options: h,
    renderOptionPrefix: N,
    renderOptionSuffix: i,
    placeholder: f.default.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_PLACEHOLDER
  })
}