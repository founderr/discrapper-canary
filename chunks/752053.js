t.d(n, {
    i: function () {
        return i;
    }
});
var o,
    i,
    r = t(200651);
t(192379);
var a = t(442837),
    c = t(780384),
    d = t(481060),
    l = t(410030),
    s = t(594174),
    u = t(388032),
    f = t(417552),
    p = t(982240),
    b = t(533854);
((o = i || (i = {}))[(o.SHOP_PAGE = 0)] = 'SHOP_PAGE'), (o[(o.GIFT_MODAL = 1)] = 'GIFT_MODAL');
n.Z = (e) => {
    let { onRetry: n, errorOrigin: t, errorMessage: o } = e,
        i = (0, l.ZP)(),
        _ = (0, a.e7)([s.default], () => {
            let e = s.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        g = 1 === t ? f.giftModalContainer : f.shopPageContainer,
        h = 1 === t ? u.intl.string(u.t['+2QBZW']) : u.intl.string(u.t.LuhKs7);
    return (0, r.jsxs)('div', {
        className: g,
        children: [
            (0, r.jsx)('img', {
                className: f.__invalid_loadIssueImg,
                src: (0, c.wj)(i) ? p : b,
                alt: ''
            }),
            (0, r.jsx)(d.Heading, {
                className: f.heading1,
                variant: 'heading-xl/semibold',
                children: u.intl.string(u.t['i5SQ7+'])
            }),
            (0, r.jsx)(d.Text, {
                className: f.description,
                variant: 'text-md/normal',
                children: h
            }),
            _ &&
                null != o &&
                (0, r.jsx)(d.Text, {
                    variant: 'text-md/normal',
                    children: 'staff-only debug: ' + o
                }),
            (0, r.jsx)(d.Button, {
                className: f.reload,
                size: d.Button.Sizes.MEDIUM,
                color: d.Button.Colors.BRAND,
                onClick: n,
                children: u.intl.string(u.t['+hivLS'])
            })
        ]
    });
};
