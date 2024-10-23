var s = r(200651);
r(192379);
var n = r(442837),
    a = r(780384),
    i = r(481060),
    l = r(410030),
    o = r(594174),
    c = r(689938),
    d = r(417552),
    u = r(982240),
    m = r(533854);
t.Z = (e) => {
    let { onRetry: t, errorMessage: r } = e,
        f = (0, l.ZP)(),
        p = (0, n.e7)([o.default], () => {
            let e = o.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        });
    return (0, s.jsxs)('div', {
        className: d.wrapper,
        children: [
            (0, s.jsx)('img', {
                className: d.__invalid_loadIssueImg,
                src: (0, a.wj)(f) ? u : m,
                alt: ''
            }),
            (0, s.jsx)(i.Heading, {
                className: d.heading1,
                variant: 'heading-xl/semibold',
                children: c.Z.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
            }),
            (0, s.jsx)(i.Text, {
                variant: 'text-md/normal',
                children: c.Z.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
            }),
            p &&
                null != r &&
                (0, s.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    children: 'staff-only debug: ' + r
                }),
            (0, s.jsx)(i.Button, {
                className: d.reload,
                size: i.Button.Sizes.MEDIUM,
                color: i.Button.Colors.BRAND,
                onClick: t,
                children: c.Z.Messages.ERRORS_RELOAD
            })
        ]
    });
};
