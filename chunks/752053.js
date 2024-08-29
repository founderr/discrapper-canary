var a = n(735250);
n(470079);
var r = n(780384),
    s = n(481060),
    o = n(410030),
    i = n(689938),
    l = n(243709),
    c = n(982240),
    d = n(533854);
t.Z = (e) => {
    let { onRetry: t } = e,
        n = (0, o.ZP)();
    return (0, a.jsxs)('div', {
        className: l.wrapper,
        children: [
            (0, a.jsx)('img', {
                className: l.__invalid_loadIssueImg,
                src: (0, r.wj)(n) ? c : d,
                alt: ''
            }),
            (0, a.jsx)(s.Heading, {
                className: l.heading1,
                variant: 'heading-xl/semibold',
                children: i.Z.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
            }),
            (0, a.jsx)(s.Text, {
                variant: 'text-md/normal',
                children: i.Z.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
            }),
            (0, a.jsx)(s.Button, {
                className: l.reload,
                size: s.Button.Sizes.MEDIUM,
                color: s.Button.Colors.BRAND,
                onClick: t,
                children: i.Z.Messages.ERRORS_RELOAD
            })
        ]
    });
};
