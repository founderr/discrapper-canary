t.d(n, {
    i: function () {
        return r;
    }
});
var i,
    r,
    o = t(200651);
t(192379);
var a = t(442837),
    l = t(780384),
    c = t(481060),
    d = t(410030),
    s = t(594174),
    u = t(388032),
    f = t(259319),
    p = t(982240),
    m = t(533854);
((i = r || (r = {}))[(i.SHOP_PAGE = 0)] = 'SHOP_PAGE'), (i[(i.GIFT_MODAL = 1)] = 'GIFT_MODAL');
n.Z = (e) => {
    let { onRetry: n, errorOrigin: t, errorMessage: i } = e,
        r = (0, d.ZP)(),
        b = (0, a.e7)([s.default], () => {
            let e = s.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        _ = 1 === t ? f.giftModalContainer : f.shopPageContainer,
        x = 1 === t ? u.intl.string(u.t['+2QBZW']) : u.intl.string(u.t.LuhKs7);
    return (0, o.jsxs)('div', {
        className: _,
        children: [
            (0, o.jsx)('img', {
                className: f.__invalid_loadIssueImg,
                src: (0, l.wj)(r) ? p : m,
                alt: ''
            }),
            (0, o.jsx)(c.Heading, {
                className: f.heading1,
                variant: 'heading-xl/semibold',
                children: u.intl.string(u.t['i5SQ7+'])
            }),
            (0, o.jsx)(c.Text, {
                className: f.description,
                variant: 'text-md/normal',
                children: x
            }),
            b &&
                null != i &&
                (0, o.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: 'staff-only debug: ' + i
                }),
            (0, o.jsx)(c.Button, {
                className: f.reload,
                size: c.Button.Sizes.MEDIUM,
                color: c.Button.Colors.BRAND,
                onClick: n,
                children: u.intl.string(u.t['+hivLS'])
            })
        ]
    });
};
