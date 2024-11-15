n.d(t, {
    Z: function () {
        return v;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(388905),
    o = n(409059),
    c = n(962220),
    u = n(306453),
    d = n(108427),
    h = n(314897),
    g = n(626135),
    m = n(587444),
    p = n(981631),
    f = n(58346),
    _ = n(388032),
    x = n(971436);
function E(e, t, n) {
    e.preventDefault(),
        g.default.track(p.rMx.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId
        });
    let i = h.default.getFingerprint(),
        r = null != i ? i : h.default.getId();
    c.Z.openMobileApp(n.state === f.Rj.RESOLVED ? t : void 0, r);
}
function v(e) {
    let { code: t } = e,
        n = (0, s.e7)([o.Z], () => o.Z.getGuildTemplate(t));
    return (r.useEffect(() => {
        (0, d.e)('guild_template_mobile');
    }, []),
    null == n || n.state === f.Rj.RESOLVING)
        ? (0, i.jsx)(l.ZP, { children: (0, i.jsx)(a.Spinner, {}) })
        : n.state === f.Rj.RESOLVED
          ? (0, i.jsxs)(l.ZP, {
                children: [
                    (0, i.jsx)(u.Z, {
                        guildTemplate: n,
                        tall: !0
                    }),
                    (0, i.jsx)(l.zx, {
                        onClick: (e) => E(e, t, n),
                        className: x.marginTop20,
                        children: _.intl.string(_.t['a3Gl+f'])
                    })
                ]
            })
          : (0, i.jsx)(m.Z, {
                text: _.intl.string(_.t['e/rZ2t']),
                buttonCta: _.intl.string(_.t.HAvYn5),
                onClick: (e) => E(e, t, n)
            });
}
s.ZP.initialize();
