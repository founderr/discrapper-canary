n.d(t, {
  Z: function() {
    return m
  }
});
var s = n(735250),
  i = n(470079),
  r = n(442837),
  a = n(481060),
  l = n(388905),
  o = n(409059),
  c = n(962220),
  u = n(306453),
  d = n(108427),
  _ = n(314897),
  E = n(626135),
  I = n(587444),
  h = n(981631),
  p = n(58346),
  g = n(689938),
  f = n(331651);

function N(e, t, n) {
  e.preventDefault(), E.default.track(h.rMx.GUILD_TEMPLATE_APP_OPENED, {
    guild_template_code: t,
    guild_template_name: n.name,
    guild_template_description: n.description,
    guild_template_guild_id: n.sourceGuildId
  });
  let s = _.default.getFingerprint(),
    i = null != s ? s : _.default.getId();
  c.Z.openMobileApp(n.state === p.Rj.RESOLVED ? t : void 0, i)
}

function m(e) {
  let {
    code: t
  } = e, n = (0, r.e7)([o.Z], () => o.Z.getGuildTemplate(t));
  return (i.useEffect(() => {
    (0, d.e)("guild_template_mobile")
  }, []), null == n || n.state === p.Rj.RESOLVING) ? (0, s.jsx)(l.ZP, {
    children: (0, s.jsx)(a.Spinner, {})
  }) : n.state === p.Rj.RESOLVED ? (0, s.jsxs)(l.ZP, {
    children: [(0, s.jsx)(u.Z, {
      guildTemplate: n,
      tall: !0
    }), (0, s.jsx)(l.zx, {
      onClick: e => N(e, t, n),
      className: f.marginTop20,
      children: g.Z.Messages.GUILD_TEMPLATE_OPEN
    })]
  }) : (0, s.jsx)(I.Z, {
    text: g.Z.Messages.GUILD_TEMPLATE_MOBILE_INVALID_ERROR,
    buttonCta: g.Z.Messages.GUILD_TEMPLATE_MOBILE_INVALID_CTA,
    onClick: e => N(e, t, n)
  })
}
r.ZP.initialize()