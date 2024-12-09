n.d(t, {
    r: function () {
        return u;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(793030),
    s = n(442837),
    a = n(481060),
    o = n(999382),
    c = n(388032),
    d = n(229311);
function u() {
    let e = (0, s.e7)([o.Z], () => {
            var e;
            return null === (e = o.Z.getProps().guild) || void 0 === e ? void 0 : e.id;
        }),
        t = r.useCallback(() => {
            if (null != e)
                (0, a.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([n.e('80026'), n.e('36869')]).then(n.bind(n, 645264));
                    return (n) =>
                        (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            isPreview: !0
                        });
                });
        }, [e]),
        u = r.useMemo(
            () => [
                {
                    text: c.intl.string(c.t.EOwiEh),
                    onClick: () => null
                },
                {
                    text: c.intl.string(c.t.jqrNDg),
                    onClick: () => null
                },
                {
                    text: c.intl.string(c.t.I5q8vr),
                    onClick: () => null
                }
            ],
            []
        );
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(l.X6, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: c.intl.string(c.t.AHJddH)
            }),
            (0, i.jsx)(l.xv, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: d.applicationBody,
                children: c.intl.string(c.t.Z7TCtb)
            }),
            (0, i.jsx)(a.LinkButton, {
                text: c.intl.string(c.t.SKNnqq),
                icon: a.WindowLaunchIcon,
                variant: 'primary',
                onClick: t
            }),
            (0, i.jsx)(l.X6, {
                variant: 'text-xs/bold',
                color: 'text-muted',
                className: d.examplesHeader,
                children: c.intl.string(c.t.ID04cH)
            }),
            (0, i.jsx)('div', {
                className: d.examples,
                children: u.map((e) =>
                    (0, i.jsx)(
                        a.Clickable,
                        {
                            className: d.pill,
                            onClick: e.onClick,
                            children: (0, i.jsx)(l.xv, {
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: e.text
                            })
                        },
                        e.text
                    )
                )
            })
        ]
    });
}
