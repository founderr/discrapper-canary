t.d(n, {
    i: function () {
        return l;
    }
});
var i,
    l,
    r = t(200651);
t(192379);
var a = t(442837),
    s = t(780384),
    o = t(481060),
    d = t(410030),
    c = t(594174),
    u = t(388032),
    h = t(259319),
    m = t(982240),
    x = t(533854);
((i = l || (l = {}))[(i.SHOP_PAGE = 0)] = 'SHOP_PAGE'), (i[(i.GIFT_MODAL = 1)] = 'GIFT_MODAL');
n.Z = (e) => {
    let { onRetry: n, errorOrigin: t, errorMessage: i } = e,
        l = (0, d.ZP)(),
        f = (0, a.e7)([c.default], () => {
            let e = c.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        v = 1 === t ? h.giftModalContainer : h.shopPageContainer,
        p = 1 === t ? u.intl.string(u.t['+2QBZW']) : u.intl.string(u.t.LuhKs7);
    return (0, r.jsxs)('div', {
        className: v,
        children: [
            (0, r.jsx)('img', {
                className: h.__invalid_loadIssueImg,
                src: (0, s.wj)(l) ? m : x,
                alt: ''
            }),
            (0, r.jsx)(o.Heading, {
                className: h.heading1,
                variant: 'heading-xl/semibold',
                children: u.intl.string(u.t['i5SQ7+'])
            }),
            (0, r.jsx)(o.Text, {
                className: h.description,
                variant: 'text-md/normal',
                children: p
            }),
            f &&
                null != i &&
                (0, r.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    children: 'staff-only debug: ' + i
                }),
            (0, r.jsx)(o.Button, {
                className: h.reload,
                size: o.Button.Sizes.MEDIUM,
                color: o.Button.Colors.BRAND,
                onClick: n,
                children: u.intl.string(u.t['+hivLS'])
            })
        ]
    });
};
