t.d(n, {
    Z: function () {
        return C;
    }
});
var i = t(200651),
    l = t(192379),
    a = t(481060),
    o = t(239091),
    r = t(823531),
    s = t(695346),
    c = t(973616),
    d = t(783097),
    u = t(176412),
    m = t(753972),
    p = t(532309),
    h = t(686356),
    f = t(413097);
function C(e) {
    var n;
    let { command: t, application: C, onClick: v, query: x, searchResultsPosition: _ } = e,
        N = s.Sb.useSetting(),
        g = l.useCallback(
            (e) => {
                if ((0, d.BQ)(C) && N) {
                    let n = C instanceof c.Z ? C : c.Z.createFromServer(C);
                    (0, o.vq)(e, (e) =>
                        (0, i.jsx)(r.Z, {
                            application: n,
                            ...e
                        })
                    );
                }
            },
            [C, N]
        ),
        { iconURL: A, name: b, description: E } = l.useMemo(() => (0, d.sl)(C, { fakeAppIconURL: f }), [C]),
        I = l.useMemo(() => {
            var e;
            let n = null !== (e = null == t ? void 0 : t.displayDescription) && void 0 !== e ? e : E;
            return null == n ? null : (0, u.ae)(n, void 0);
        }, [E, null == t ? void 0 : t.displayDescription]),
        { trackSearchResultsItemImpressionRef: j } = (0, p.Z)({
            applicationId: C.id,
            commandId: null == t ? void 0 : t.id,
            query: x,
            searchResultsPosition: _
        });
    return (0, i.jsx)(a.Clickable, {
        className: h.clickable,
        innerRef: (e) => (j.current = e),
        onClick: v,
        onContextMenu: g,
        children: (0, i.jsxs)(a.FocusBlock, {
            className: h.focusBlock,
            children: [
                (0, i.jsx)(m.Z, {
                    src: A,
                    className: h.icon,
                    'aria-hidden': !0,
                    rendersPlaceholder: !0
                }),
                (0, i.jsxs)('div', {
                    className: h.cmdDetails,
                    children: [
                        (0, i.jsx)(a.Heading, {
                            variant: 'heading-md/semibold',
                            color: 'header-primary',
                            lineClamp: 1,
                            children: null !== (n = null == t ? void 0 : t.displayName) && void 0 !== n ? n : b
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            lineClamp: 1,
                            children: I
                        })
                    ]
                }),
                null != t
                    ? (0, i.jsx)(a.Text, {
                          className: h.cmdAppName,
                          variant: 'text-sm/normal',
                          color: 'text-secondary',
                          children: b
                      })
                    : null,
                (0, i.jsx)('div', { className: h.underline })
            ]
        })
    });
}
