n.d(t, {
    i: function () {
        return i;
    }
});
var o,
    i,
    r = n(200651);
n(192379);
var a = n(442837),
    d = n(780384),
    c = n(481060),
    l = n(410030),
    s = n(594174),
    u = n(388032),
    f = n(259319),
    p = n(982240),
    b = n(533854);
((o = i || (i = {}))[(o.SHOP_PAGE = 0)] = 'SHOP_PAGE'), (o[(o.GIFT_MODAL = 1)] = 'GIFT_MODAL');
t.Z = (e) => {
    let { onRetry: t, errorOrigin: n, errorMessage: o } = e,
        i = (0, l.ZP)(),
        _ = (0, a.e7)([s.default], () => {
            let e = s.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        g = 1 === n ? f.giftModalContainer : f.shopPageContainer,
        h = 1 === n ? u.intl.string(u.t['+2QBZW']) : u.intl.string(u.t.LuhKs7);
    return (0, r.jsxs)('div', {
        className: g,
        children: [
            (0, r.jsx)('img', {
                className: f.__invalid_loadIssueImg,
                src: (0, d.wj)(i) ? p : b,
                alt: ''
            }),
            (0, r.jsx)(c.Heading, {
                className: f.heading1,
                variant: 'heading-xl/semibold',
                children: u.intl.string(u.t['i5SQ7+'])
            }),
            (0, r.jsx)(c.Text, {
                className: f.description,
                variant: 'text-md/normal',
                children: h
            }),
            _ &&
                null != o &&
                (0, r.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: 'staff-only debug: ' + o
                }),
            (0, r.jsx)(c.Button, {
                className: f.reload,
                size: c.Button.Sizes.MEDIUM,
                color: c.Button.Colors.BRAND,
                onClick: t,
                children: u.intl.string(u.t['+hivLS'])
            })
        ]
    });
};
