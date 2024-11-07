n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(63063),
    a = n(981631),
    s = n(388032),
    o = n(267187);
function c(e) {
    let { searchMode: t, searchByMode: n } = e;
    return (0, i.jsxs)('header', {
        className: o.searchHeader,
        children: [
            (0, i.jsx)(d, { ...e }),
            (0, i.jsxs)(l.TabBar, {
                orientation: 'horizontal',
                className: o.searchHeaderTabList,
                selectedItem: t,
                onItemSelect: n,
                children: [
                    (0, i.jsx)(l.TabBar.Item, {
                        id: a.QIO.NEWEST,
                        children: s.intl.string(s.t.rLjqbW)
                    }),
                    (0, i.jsx)(l.TabBar.Item, {
                        id: a.QIO.OLDEST,
                        children: s.intl.string(s.t.a1BaUl)
                    }),
                    (0, i.jsx)(l.TabBar.Item, {
                        id: a.QIO.MOST_RELEVANT,
                        children: s.intl.string(s.t.FtR97u)
                    })
                ]
            })
        ]
    });
}
function d(e) {
    let t;
    let { isSearching: n, isIndexing: r, documentsIndexed: a } = e;
    (r || n) &&
        (t = (0, i.jsx)('div', {
            className: o.spinnerWrapper,
            children: (0, i.jsx)(l.Spinner, {
                type: l.Spinner.Type.SPINNING_CIRCLE,
                className: o.spinner,
                itemClassName: o.spinnerPath
            })
        }));
    let c = r && !n;
    return (0, i.jsxs)('div', {
        className: o.totalResults,
        role: 'status',
        children: [
            c
                ? (0, i.jsx)(l.Tooltip, {
                      text: s.intl.formatToPlainString(s.t['4Y3O+P'], { count: a }),
                      children: (n) =>
                          (0, i.jsxs)('div', {
                              className: o.totalResultsWrapper,
                              ...n,
                              children: [(0, i.jsx)(u, { ...e }), t]
                          })
                  })
                : (0, i.jsx)(u, { ...e }),
            c ? null : t
        ]
    });
}
function u(e) {
    let { isSearching: t, isIndexing: n, totalResults: c } = e;
    if (t)
        return (0, i.jsx)(l.Text, {
            variant: 'text-md/normal',
            color: 'header-primary',
            children: s.intl.string(s.t.uixzLS)
        });
    if (n)
        return (0, i.jsx)(l.Text, {
            variant: 'text-md/normal',
            children: (0, i.jsx)(l.Anchor, {
                className: o.helpdeskLink,
                href: r.Z.getArticleURL(a.BhN.SEARCH_INDEXING),
                children: s.intl.string(s.t['G3EA+/'])
            })
        });
    {
        let e = c.toLocaleString();
        return (0, i.jsx)(l.Text, {
            variant: 'text-md/normal',
            color: 'header-primary',
            children: s.intl.format(s.t.ZGVL3t, { count: e })
        });
    }
}
