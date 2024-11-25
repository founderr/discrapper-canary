n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(153867),
    o = n(706454),
    c = n(388032),
    d = n(808463),
    u = n(444675);
t.Z = r.ZP.connectStores([o.default], () => ({ currentLocale: o.default.locale }))(function (e) {
    let [t, r] = s.useState(e.currentLocale),
        [o] = s.useState(() =>
            (0, c.getAvailableLocales)().map((e) => {
                let t;
                try {
                    t = n(621287)('./'.concat(e.value, '.png'));
                } catch (e) {
                    t = n(1474);
                }
                return {
                    ...e,
                    name: (0, i.jsxs)('div', {
                        className: d.option,
                        children: [
                            (0, i.jsx)('span', {
                                className: d.localeName,
                                children: e.name
                            }),
                            (0, i.jsx)('span', {
                                className: d.localizedName,
                                children: c.intl.string(e.localizedName)
                            }),
                            (0, i.jsx)('div', {
                                className: d.flag,
                                'aria-hidden': !0,
                                children: (0, i.jsx)('img', {
                                    alt: '',
                                    src: t,
                                    className: d.flagImage
                                })
                            })
                        ]
                    })
                };
            })
        ),
        m = s.useCallback((e) => {
            let { value: t } = e;
            r(t), u.nextTick(() => a.ZP.updateLocale(t));
        }, []);
    return (0, i.jsx)(l.FormSection, {
        tag: l.FormTitleTags.H1,
        title: c.intl.string(c.t.IHMsPj),
        children: (0, i.jsx)(l.FormSection, {
            children: (0, i.jsx)(l.FormItem, {
                title: c.intl.string(c.t['mx+sp6']),
                children: (0, i.jsx)(l.RadioGroup, {
                    onChange: m,
                    options: o,
                    value: t
                })
            })
        })
    });
});
