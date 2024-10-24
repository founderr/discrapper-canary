var r = n(200651);
n(192379);
var s = n(442837),
    a = n(780384),
    i = n(481060),
    l = n(410030),
    o = n(594174),
    c = n(689938),
    d = n(417552),
    u = n(982240),
    m = n(533854);
t.Z = (e) => {
    let { onRetry: t, errorMessage: n } = e,
        f = (0, l.ZP)(),
        p = (0, s.e7)([o.default], () => {
            let e = o.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        });
    return (0, r.jsxs)('div', {
        className: d.wrapper,
        children: [
            (0, r.jsx)('img', {
                className: d.__invalid_loadIssueImg,
                src: (0, a.wj)(f) ? u : m,
                alt: ''
            }),
            (0, r.jsx)(i.Heading, {
                className: d.heading1,
                variant: 'heading-xl/semibold',
                children: c.Z.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-md/normal',
                children: c.Z.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
            }),
            p &&
                null != n &&
                (0, r.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    children: 'staff-only debug: ' + n
                }),
            (0, r.jsx)(i.Button, {
                className: d.reload,
                size: i.Button.Sizes.MEDIUM,
                color: i.Button.Colors.BRAND,
                onClick: t,
                children: c.Z.Messages.ERRORS_RELOAD
            })
        ]
    });
};
