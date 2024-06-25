n.d(t, {
  Z: function() {
    return T
  }
});
var s = n(735250),
  r = n(470079),
  i = n(442837),
  l = n(481060),
  a = n(388905),
  o = n(409059),
  u = n(962220),
  c = n(306453),
  d = n(108427),
  E = n(314897),
  _ = n(626135),
  h = n(587444),
  I = n(981631),
  N = n(58346),
  p = n(689938),
  g = n(331651);

function m(e, t, n) {
  e.preventDefault(), _.default.track(I.rMx.GUILD_TEMPLATE_APP_OPENED, {
    guild_template_code: t,
    guild_template_name: n.name,
    guild_template_description: n.description,
    guild_template_guild_id: n.sourceGuildId
  });
  let s = E.default.getFingerprint(),
    r = null != s ? s : E.default.getId();
  u.Z.openMobileApp(n.state === N.Rj.RESOLVED ? t : void 0, r)
}

function T(e) {
  let {
    code: t
  } = e, n = (0, i.e7)([o.Z], () => o.Z.getGuildTemplate(t));
  return (r.useEffect(() => {
    (0, d.e)("guild_template_mobile")
  }, []), null == n || n.state === N.Rj.RESOLVING) ? (0, s.jsx)(a.ZP, {
    children: (0, s.jsx)(l.Spinner, {})
  }) : n.state === N.Rj.RESOLVED ? (0, s.jsxs)(a.ZP, {
    children: [(0, s.jsx)(c.Z, {
      guildTemplate: n,
      tall: !0
    }), (0, s.jsx)(a.zx, {
      onClick: e => m(e, t, n),
      className: g.marginTop20,
      children: p.Z.Messages.GUILD_TEMPLATE_OPEN
    })]
  }) : (0, s.jsx)(h.Z, {
    text: p.Z.Messages.GUILD_TEMPLATE_MOBILE_INVALID_ERROR,
    buttonCta: p.Z.Messages.GUILD_TEMPLATE_MOBILE_INVALID_CTA,
    onClick: e => m(e, t, n)
  })
}
i.ZP.initialize()