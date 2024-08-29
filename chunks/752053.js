var r = n(735250);
n(470079);
var a = n(780384),
    s = n(481060),
    o = n(410030),
    i = n(689938),
    c = n(243709),
    l = n(982240),
    d = n(533854);
t.Z = (e) => {
    let { onRetry: t } = e,
        n = (0, o.ZP)();
    return (0, r.jsxs)('div', {
        className: c.wrapper,
        children: [
            (0, r.jsx)('img', {
                className: c.__invalid_loadIssueImg,
                src: (0, a.wj)(n) ? l : d,
                alt: ''
            }),
            (0, r.jsx)(s.Heading, {
                className: c.heading1,
                variant: 'heading-xl/semibold',
                children: i.Z.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-md/normal',
                children: i.Z.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
            }),
            (0, r.jsx)(s.Button, {
                className: c.reload,
                size: s.Button.Sizes.MEDIUM,
                color: s.Button.Colors.BRAND,
                onClick: t,
                children: i.Z.Messages.ERRORS_RELOAD
            })
        ]
    });
};
