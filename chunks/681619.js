r.d(t, {
    Z: function () {
        return s;
    }
});
var a = r(735250),
    n = r(470079),
    i = r(120356),
    o = r.n(i),
    l = r(481060),
    c = r(535271);
function s(e) {
    let { columns: t, data: r, className: i, rowClassName: s, onClickRow: d, selectedRowKey: u, rowHeight: h = 40 } = e,
        m = n.useMemo(
            () =>
                t.map((e) => ({
                    renderHeader: () =>
                        (0, a.jsx)(l.Text, {
                            variant: 'text-sm/semibold',
                            children: e.key
                        }),
                    ...e
                })),
            [t]
        ),
        g = [r.length];
    return (0, a.jsx)('div', {
        className: c.tableContainer,
        children: (0, a.jsx)(l.ListThin, {
            className: o()(i),
            innerClassName: c.table,
            sections: g,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    n = o()(c.tableHeader);
                return (0, a.jsx)(
                    'div',
                    {
                        className: n,
                        children: m.map((e) => {
                            var n, i;
                            let l = o()(e.cellClassName),
                                c = { width: 'calc('.concat(null !== (i = e.cellWidth) && void 0 !== i ? i : '1fr', ' - ').concat(16, 'px)') };
                            return (0, a.jsx)(
                                'div',
                                {
                                    className: l,
                                    style: c,
                                    children: null === (n = e.renderHeader) || void 0 === n ? void 0 : n.call(e, e, r)
                                },
                                'dev-tools-th-'.concat(t, '-').concat(e.key)
                            );
                        })
                    },
                    'dev-tools-header-'.concat(t)
                );
            },
            rowHeight: h,
            renderRow: (e) => {
                let { rowIndex: t } = e,
                    n = r[t],
                    i = n.key,
                    g = o()(c.tableRow, {
                        [c.selectedTableRow]: i === u,
                        rowClassName: s
                    });
                return (0, a.jsx)(
                    l.Clickable,
                    {
                        className: g,
                        onClick: () => (null == d ? void 0 : d(n)),
                        children: m.map((e) => {
                            var r, i;
                            let l = o()(e.cellClassName),
                                c = {
                                    width: 'calc('.concat(null !== (i = e.cellWidth) && void 0 !== i ? i : '1fr', ' - ').concat(16, 'px)'),
                                    height: 'calc('.concat(h, 'px - ').concat(16, 'px)')
                                };
                            return (0, a.jsx)(
                                'div',
                                {
                                    className: l,
                                    style: c,
                                    children: null === (r = e.render) || void 0 === r ? void 0 : r.call(e, n, void 0, t)
                                },
                                'dev-tools-td-'.concat(t, '-').concat(e.key)
                            );
                        })
                    },
                    'dev-tools-tr-'.concat(t)
                );
            }
        })
    });
}
