n.d(t, {
    Z: function () {
        return N;
    }
});
var s = n(735250),
    r = n(470079),
    i = n(442837),
    a = n(481060),
    o = n(388905),
    l = n(409059),
    c = n(962220),
    u = n(306453),
    d = n(108427),
    _ = n(314897),
    h = n(626135),
    E = n(587444),
    p = n(981631),
    g = n(58346),
    m = n(689938),
    f = n(113207);
function I(e, t, n) {
    e.preventDefault(),
        h.default.track(p.rMx.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId
        });
    let s = _.default.getFingerprint(),
        r = null != s ? s : _.default.getId();
    c.Z.openMobileApp(n.state === g.Rj.RESOLVED ? t : void 0, r);
}
function N(e) {
    let { code: t } = e,
        n = (0, i.e7)([l.Z], () => l.Z.getGuildTemplate(t));
    return (r.useEffect(() => {
        (0, d.e)('guild_template_mobile');
    }, []),
    null == n || n.state === g.Rj.RESOLVING)
        ? (0, s.jsx)(o.ZP, { children: (0, s.jsx)(a.Spinner, {}) })
        : n.state === g.Rj.RESOLVED
          ? (0, s.jsxs)(o.ZP, {
                children: [
                    (0, s.jsx)(u.Z, {
                        guildTemplate: n,
                        tall: !0
                    }),
                    (0, s.jsx)(o.zx, {
                        onClick: (e) => I(e, t, n),
                        className: f.marginTop20,
                        children: m.Z.Messages.GUILD_TEMPLATE_OPEN
                    })
                ]
            })
          : (0, s.jsx)(E.Z, {
                text: m.Z.Messages.GUILD_TEMPLATE_MOBILE_INVALID_ERROR,
                buttonCta: m.Z.Messages.GUILD_TEMPLATE_MOBILE_INVALID_CTA,
                onClick: (e) => I(e, t, n)
            });
}
i.ZP.initialize();
