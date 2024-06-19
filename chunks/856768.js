t.d(n, {
  Z: function() {
    return g
  },
  q: function() {
    return C
  }
}), t(733860);
var l = t(735250),
  r = t(470079),
  i = t(120356),
  o = t.n(i),
  a = t(442837),
  s = t(481060),
  d = t(993413),
  u = t(430824),
  c = t(771845),
  h = t(346656),
  f = t(823379),
  m = t(778825),
  v = t(689938),
  x = t(583209);

function g(e) {
  let {
    guildId: n,
    className: t,
    globalOption: r,
    hideDivider: i = !1,
    onChange: a,
    renderOptionSuffix: s
  } = e;
  return (0, l.jsx)(d.Z, {
    className: o()(x.section, t),
    title: v.Z.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_TITLE,
    hideDivider: i,
    forcedDivider: !0,
    children: (0, l.jsx)(C, {
      guildId: n,
      onChange: a,
      renderOptionSuffix: s,
      globalOption: r
    })
  })
}

function C(e) {
  let {
    guildId: n,
    globalOption: t,
    onChange: i,
    renderOptionSuffix: o
  } = e, d = (0, a.e7)([m.Z], () => m.Z.showNotice()), g = (0, a.e7)([c.ZP], () => c.ZP.getFlattenedGuildIds()), C = (0, a.e7)([u.Z], () => u.Z.getGuilds()), j = r.useMemo(() => {
    let e = g.map(e => {
      let n = C[e];
      return null == n ? null : {
        label: n.name,
        value: n.id
      }
    }).filter(f.lm);
    return null != t && e.unshift(t), e
  }, [g, C, t]), p = r.useCallback(e => {
    let n = (null == e ? void 0 : e.label) === (null == t ? void 0 : t.label) && (null == e ? void 0 : e.value) === (null == t ? void 0 : t.value);
    return null == e || "" === e.value || n ? null : (0, l.jsx)(h.Z, {
      className: x.guildSelectOptionIcon,
      guild: C[e.value],
      size: h.Z.Sizes.SMOL,
      active: !0
    })
  }, [C, t]);
  return (0, l.jsx)(s.SearchableSelect, {
    isDisabled: d,
    onChange: e => {
      if ("" === e || e === (null == t ? void 0 : t.value)) {
        i(null);
        return
      }
      let n = C[e];
      null != n && i(n)
    },
    value: n,
    options: j,
    renderOptionPrefix: p,
    renderOptionSuffix: o,
    placeholder: v.Z.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_PLACEHOLDER
  })
}