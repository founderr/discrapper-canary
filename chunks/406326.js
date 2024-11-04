n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(63063),
    s = n(981631),
    a = n(388032),
    o = n(187281);
function c(e) {
    let { searchMode: t, searchByMode: n } = e;
    return (0, i.jsxs)('header', {
        className: o.searchHeader,
        children: [
            (0, i.jsx)(u, { ...e }),
            (0, i.jsxs)(l.TabBar, {
                orientation: 'horizontal',
                className: o.searchHeaderTabList,
                selectedItem: t,
                onItemSelect: n,
                children: [
                    (0, i.jsx)(l.TabBar.Item, {
                        id: s.QIO.NEWEST,
                        children: a.intl.string(a.t.rLjqbW)
                    }),
                    (0, i.jsx)(l.TabBar.Item, {
                        id: s.QIO.OLDEST,
                        children: a.intl.string(a.t.a1BaUl)
                    }),
                    (0, i.jsx)(l.TabBar.Item, {
                        id: s.QIO.MOST_RELEVANT,
                        children: a.intl.string(a.t.FtR97u)
                    })
                ]
            })
        ]
    });
}
function u(e) {
    let t;
    let { isSearching: n, isIndexing: r, documentsIndexed: s } = e;
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
                      text: a.intl.formatToPlainString(a.t['4Y3O+P'], { count: s }),
                      children: (n) =>
                          (0, i.jsxs)('div', {
                              className: o.totalResultsWrapper,
                              ...n,
                              children: [(0, i.jsx)(d, { ...e }), t]
                          })
                  })
                : (0, i.jsx)(d, { ...e }),
            c ? null : t
        ]
    });
}
function d(e) {
    let { isSearching: t, isIndexing: n, totalResults: c } = e;
    if (t)
        return (0, i.jsx)(l.Text, {
            variant: 'text-md/normal',
            color: 'header-primary',
            children: a.intl.string(a.t.uixzLS)
        });
    if (n)
        return (0, i.jsx)(l.Text, {
            variant: 'text-md/normal',
            children: (0, i.jsx)(l.Anchor, {
                className: o.helpdeskLink,
                href: r.Z.getArticleURL(s.BhN.SEARCH_INDEXING),
                children: a.intl.string(a.t['G3EA+/'])
            })
        });
    {
        let e = c.toLocaleString();
        return (0, i.jsx)(l.Text, {
            variant: 'text-md/normal',
            color: 'header-primary',
            children: a.intl.format(a.t.ZGVL3t, { count: e })
        });
    }
}
