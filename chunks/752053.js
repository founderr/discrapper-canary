var a = s(200651);
s(192379);
var r = s(442837),
    n = s(780384),
    i = s(481060),
    l = s(410030),
    o = s(594174),
    c = s(689938),
    d = s(417552),
    u = s(982240),
    m = s(533854);
t.Z = (e) => {
    let { onRetry: t, errorMessage: s } = e,
        C = (0, l.ZP)(),
        f = (0, r.e7)([o.default], () => {
            let e = o.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        });
    return (0, a.jsxs)('div', {
        className: d.wrapper,
        children: [
            (0, a.jsx)('img', {
                className: d.__invalid_loadIssueImg,
                src: (0, n.wj)(C) ? u : m,
                alt: ''
            }),
            (0, a.jsx)(i.Heading, {
                className: d.heading1,
                variant: 'heading-xl/semibold',
                children: c.Z.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
            }),
            (0, a.jsx)(i.Text, {
                variant: 'text-md/normal',
                children: c.Z.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
            }),
            f &&
                null != s &&
                (0, a.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    children: 'staff-only debug: ' + s
                }),
            (0, a.jsx)(i.Button, {
                className: d.reload,
                size: i.Button.Sizes.MEDIUM,
                color: i.Button.Colors.BRAND,
                onClick: t,
                children: c.Z.Messages.ERRORS_RELOAD
            })
        ]
    });
};
