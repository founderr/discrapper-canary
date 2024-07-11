t.d(n, {
    Z: function () {
        return u;
    }
});
var i, l, r = t(735250), a = t(470079), s = t(481060), o = t(689938), c = t(21172);
function u(e) {
    let {
        title: n,
        buttonType: t,
        onClickViewButton: i
    } = e;
    return (0, r.jsxs)('div', {
        className: c.header,
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: n
            }),
            null != t && null != i && (0, r.jsx)(s.Clickable, {
                className: c.viewMore,
                onClick: i,
                'aria-label': o.Z.Messages.APP_LAUNCHER_VIEW_MORE_ROW_ARIA_LABEL.format({ title: n }),
                children: (0, r.jsx)(s.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-brand',
                    children: 0 === t ? o.Z.Messages.APP_LAUNCHER_VIEW_MORE_ROW : o.Z.Messages.APP_LAUNCHER_VIEW_LESS_ROW
                })
            })
        ]
    });
}
(i = l || (l = {}))[i.VIEW_MORE = 0] = 'VIEW_MORE', i[i.VIEW_LESS = 1] = 'VIEW_LESS', u.buttonTypes = l, u.Loading = function () {
    let e = a.useMemo(() => ({ width: ''.concat(10 + 20 * Math.random(), '%') }), []);
    return (0, r.jsx)('div', {
        className: c.loadingHeader,
        style: e,
        children: (0, r.jsx)(s.Text, {
            className: c.hidden,
            variant: 'text-md/medium',
            color: 'header-primary',
            children: '_'
        })
    });
};
