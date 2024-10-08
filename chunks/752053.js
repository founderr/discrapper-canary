var a = r(735250);
r(470079);
var n = r(442837),
    s = r(780384),
    i = r(481060),
    o = r(410030),
    l = r(594174),
    c = r(689938),
    d = r(417552),
    u = r(982240),
    f = r(533854);
t.Z = (e) => {
    let { onRetry: t, errorMessage: r } = e,
        p = (0, o.ZP)(),
        m = (0, n.e7)([l.default], () => {
            let e = l.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        });
    return (0, a.jsxs)('div', {
        className: d.wrapper,
        children: [
            (0, a.jsx)('img', {
                className: d.__invalid_loadIssueImg,
                src: (0, s.wj)(p) ? u : f,
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
            m &&
                null != r &&
                (0, a.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    children: 'staff-only debug: ' + r
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
