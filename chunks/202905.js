n.d(t, {
    r: function () {
        return h;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(793030),
    s = n(442837),
    a = n(481060),
    o = n(944163),
    c = n(999382),
    d = n(548522),
    u = n(388032),
    m = n(229311);
function h(e) {
    let { pendingFields: t } = e,
        h = (0, s.e7)([c.Z], () => c.Z.getProps().guild),
        g = r.useCallback(() => {
            if (null != h)
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('80026'), n.e('36869')]).then(n.bind(n, 645264));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            guildId: h.id,
                            isPreview: !0
                        });
                });
        }, [h]),
        x = (0, s.e7)([o.Z], () => o.Z.get(null == h ? void 0 : h.id));
    if (null == h) return null;
    let p = null != t ? t : null == x ? void 0 : x.formFields;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(l.X6, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: u.intl.string(u.t.AHJddH)
            }),
            (0, i.jsx)(l.xv, {
                tag: 'p',
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: m.applicationBody,
                children: u.intl.string(u.t.Z7TCtb)
            }),
            (0, i.jsx)(a.LinkButton, {
                text: u.intl.string(u.t.SKNnqq),
                icon: a.WindowLaunchIcon,
                variant: 'primary',
                onClick: g
            }),
            (0, i.jsx)('div', {
                className: m.form,
                children:
                    null != p
                        ? (0, i.jsx)(d.y, {
                              guild: h,
                              formFields: p
                          })
                        : (0, i.jsx)(a.Spinner, {})
            })
        ]
    });
}
