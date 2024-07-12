t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(735250), l = t(470079), r = t(481060), a = t(783097), s = t(753972), o = t(532309), c = t(875164), u = t(413097);
function d(e) {
    var n;
    let {
            command: t,
            application: d,
            onClick: m,
            query: p,
            searchResultsPosition: _
        } = e, {
            iconURL: E,
            name: h,
            description: A
        } = l.useMemo(() => (0, a.sl)(d, {
            botIconFirst: !0,
            fakeAppIconURL: u
        }), [d]), {trackSearchResultsItemImpressionRef: f} = (0, o.Z)({
            applicationId: d.id,
            commandId: null == t ? void 0 : t.id,
            query: p,
            searchResultsPosition: _
        });
    return (0, i.jsxs)(r.Clickable, {
        innerRef: e => f.current = e,
        className: c.container,
        onClick: m,
        children: [
            (0, i.jsx)(s.Z, {
                src: E,
                className: c.icon,
                'aria-hidden': !0,
                rendersPlaceholder: !0
            }),
            (0, i.jsxs)('div', {
                className: c.cmdDetails,
                children: [
                    (0, i.jsx)(r.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        lineClamp: 1,
                        children: null !== (n = null == t ? void 0 : t.displayName) && void 0 !== n ? n : h
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        lineClamp: 1,
                        children: A
                    })
                ]
            }),
            null != t ? (0, i.jsx)(r.Text, {
                className: c.cmdAppName,
                variant: 'text-sm/normal',
                color: 'text-secondary',
                children: h
            }) : null,
            (0, i.jsx)('div', { className: c.underline })
        ]
    });
}
