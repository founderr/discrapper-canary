var a = r(735250);
r(470079);
var n = r(780384),
    s = r(481060),
    i = r(410030),
    o = r(689938),
    l = r(243709),
    c = r(982240),
    d = r(533854);
t.Z = (e) => {
    let { onRetry: t } = e,
        r = (0, i.ZP)();
    return (0, a.jsxs)('div', {
        className: l.wrapper,
        children: [
            (0, a.jsx)('img', {
                className: l.__invalid_loadIssueImg,
                src: (0, n.wj)(r) ? c : d,
                alt: ''
            }),
            (0, a.jsx)(s.Heading, {
                className: l.heading1,
                variant: 'heading-xl/semibold',
                children: o.Z.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
            }),
            (0, a.jsx)(s.Text, {
                variant: 'text-md/normal',
                children: o.Z.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
            }),
            (0, a.jsx)(s.Button, {
                className: l.reload,
                size: s.Button.Sizes.MEDIUM,
                color: s.Button.Colors.BRAND,
                onClick: t,
                children: o.Z.Messages.ERRORS_RELOAD
            })
        ]
    });
};
