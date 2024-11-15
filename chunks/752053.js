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
    s = t(481060),
    c = t(410030),
    d = t(594174),
    u = t(388032),
    p = t(480621),
    f = t(982240),
    m = t(533854);
((i = r || (r = {}))[(i.SHOP_PAGE = 0)] = 'SHOP_PAGE'), (i[(i.GIFT_MODAL = 1)] = 'GIFT_MODAL');
n.Z = (e) => {
    let { onRetry: n, errorOrigin: t, errorMessage: i } = e,
        r = (0, c.ZP)(),
        b = (0, a.e7)([d.default], () => {
            let e = d.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        h = 1 === t ? p.giftModalContainer : p.shopPageContainer,
        g = 1 === t ? u.intl.string(u.t['+2QBZW']) : u.intl.string(u.t.LuhKs7);
    return (0, o.jsxs)('div', {
        className: h,
        children: [
            (0, o.jsx)('img', {
                className: p.__invalid_loadIssueImg,
                src: (0, l.wj)(r) ? f : m,
                alt: ''
            }),
            (0, o.jsx)(s.Heading, {
                className: p.heading1,
                variant: 'heading-xl/semibold',
                children: u.intl.string(u.t['i5SQ7+'])
            }),
            (0, o.jsx)(s.Text, {
                className: p.description,
                variant: 'text-md/normal',
                children: g
            }),
            b &&
                null != i &&
                (0, o.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    children: 'staff-only debug: ' + i
                }),
            (0, o.jsx)(s.Button, {
                className: p.reload,
                size: s.Button.Sizes.MEDIUM,
                color: s.Button.Colors.BRAND,
                onClick: n,
                children: u.intl.string(u.t['+hivLS'])
            })
        ]
    });
};
