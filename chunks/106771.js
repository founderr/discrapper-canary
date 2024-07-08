t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(735250), l = t(470079), a = t(481060), r = t(783097), s = t(753972), o = t(875164), c = t(413097);
function u(e) {
    var n;
    let {
            command: t,
            application: u,
            onClick: d
        } = e, {
            iconURL: m,
            name: _,
            description: p
        } = l.useMemo(() => (0, r.sl)(u, {
            botIconFirst: !0,
            fakeAppIconURL: c
        }), [u]);
    return (0, i.jsxs)(a.Clickable, {
        className: o.container,
        onClick: d,
        children: [
            null != m && (0, i.jsx)(s.Z, {
                src: m,
                className: o.icon,
                'aria-hidden': !0
            }),
            (0, i.jsxs)('div', {
                className: o.cmdDetails,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        lineClamp: 1,
                        children: null !== (n = null == t ? void 0 : t.displayName) && void 0 !== n ? n : _
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        lineClamp: 1,
                        children: p
                    })
                ]
            }),
            null != t ? (0, i.jsx)(a.Text, {
                className: o.cmdAppName,
                variant: 'text-sm/normal',
                color: 'text-secondary',
                children: _
            }) : null,
            (0, i.jsx)('div', { className: o.underline })
        ]
    });
}
