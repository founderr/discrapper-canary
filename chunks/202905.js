n.d(t, {
    r: function () {
        return g;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(793030),
    s = n(442837),
    a = n(481060),
    o = n(944163),
    c = n(894376),
    d = n(999382),
    u = n(548522),
    m = n(388032),
    h = n(229311);
function g() {
    let e = (0, s.e7)([d.Z], () => d.Z.getProps().guild),
        t = r.useCallback(() => {
            if (null != e)
                (0, a.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([n.e('80026'), n.e('36869')]).then(n.bind(n, 645264));
                    return (n) =>
                        (0, i.jsx)(t, {
                            ...n,
                            guildId: e.id,
                            isPreview: !0
                        });
                });
        }, [e]),
        g = (0, s.e7)([o.Z], () => o.Z.get(null == e ? void 0 : e.id)),
        x = (0, s.e7)([c.Z], () => c.Z.pendingVerificationFields);
    if (null == e) return null;
    let p = null != x ? x : null == g ? void 0 : g.formFields;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(l.X6, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: m.intl.string(m.t.AHJddH)
            }),
            (0, i.jsx)(l.xv, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: h.applicationBody,
                children: m.intl.string(m.t.Z7TCtb)
            }),
            (0, i.jsx)(a.LinkButton, {
                text: m.intl.string(m.t.SKNnqq),
                icon: a.WindowLaunchIcon,
                variant: 'primary',
                onClick: t
            }),
            (0, i.jsx)('div', {
                className: h.form,
                children:
                    null != p
                        ? (0, i.jsx)(u.y, {
                              guild: e,
                              formFields: p
                          })
                        : (0, i.jsx)(a.Spinner, {})
            })
        ]
    });
}
