var i = n(200651),
    l = n(192379),
    r = n(780384),
    a = n(481060),
    s = n(410030),
    o = n(367907),
    c = n(984370),
    u = n(981631),
    d = n(388032),
    h = n(991738),
    m = n(66737),
    p = n(525377);
t.Z = () => {
    let e = (0, s.ZP)();
    l.useEffect(() => {
        o.ZP.trackWithMetadata(u.rMx.GUILD_OUTAGE_VIEWED, {});
    }, []);
    let t = (0, r.wj)(e) ? m : p;
    return (0, i.jsxs)('div', {
        className: h.container,
        children: [
            (0, i.jsxs)(c.Z, {
                toolbar: (0, i.jsx)(l.Fragment, {}),
                children: [
                    (0, i.jsx)(c.Z.Icon, {
                        icon: a.TextIcon,
                        'aria-hidden': !0
                    }),
                    (0, i.jsx)(c.Z.Title, { children: d.intl.string(d.t['8LKcho']) })
                ]
            }),
            (0, i.jsxs)('div', {
                className: h.content,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        className: h.splashImage,
                        src: t
                    }),
                    (0, i.jsx)(a.Heading, {
                        className: h.splashHeader,
                        variant: 'heading-lg/medium',
                        children: d.intl.string(d.t.m9gRVF)
                    }),
                    (0, i.jsx)(a.Text, {
                        className: h.splashText,
                        variant: 'text-md/normal',
                        children: d.intl.string(d.t['wC3j5+'])
                    })
                ]
            })
        ]
    });
};
