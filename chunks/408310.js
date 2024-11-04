var i = n(200651);
n(192379);
var l = n(481060),
    r = n(671533),
    s = n(400251),
    a = n(388032),
    o = n(904151),
    c = n(249684),
    u = n(176480);
t.Z = (e) => {
    let t,
        { searchQuery: n, setSearchQuery: d, mostRecentQuery: h, handleClearSearch: m, handleSearchKeyPress: p, handleCreateOrAddGuild: f, searchResults: g, searchFetching: C } = e;
    if (C)
        t = (0, i.jsx)('div', {
            className: o.pageContainer,
            children: (0, i.jsx)(l.Spinner, { className: o.spinner })
        });
    else if (0 === g.length) {
        let e =
            null != f
                ? a.intl.format(a.t.qWFupq, {
                      addServerHook: function (e, t) {
                          return (0, i.jsx)(
                              l.Anchor,
                              {
                                  onClick: f,
                                  children: e
                              },
                              t
                          );
                      }
                  })
                : a.intl.string(a.t.vYyEnp);
        t = (0, i.jsxs)('div', {
            className: c.emptySearchWrapper,
            children: [
                (0, i.jsx)('img', {
                    className: c.emptySearchImage,
                    alt: '',
                    src: u
                }),
                (0, i.jsx)(l.Heading, {
                    variant: 'heading-xl/semibold',
                    color: 'header-primary',
                    className: c.emptySearchTitle,
                    children: a.intl.string(a.t['6HXiuL'])
                }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    className: c.emptySearchSubtitle,
                    children: e
                })
            ]
        });
    } else
        t = (0, i.jsx)('div', {
            className: o.cardsContainer,
            children: g.map((e) => (0, i.jsx)(s.Z, { entry: e }, e.guildId))
        });
    return (0, i.jsx)('div', {
        className: o.pageContainer,
        children: (0, i.jsxs)(l.ScrollerAuto, {
            className: o.scroller,
            children: [
                (0, i.jsxs)('div', {
                    className: c.searchHeader,
                    children: [
                        (0, i.jsxs)('div', {
                            className: c.headerTitleWrapper,
                            children: [
                                (0, i.jsx)(l.Clickable, {
                                    onClick: m,
                                    className: c.arrow,
                                    children: (0, i.jsx)(r.Z, { direction: r.Z.Directions.LEFT })
                                }),
                                (0, i.jsx)(l.Heading, {
                                    variant: 'heading-xl/semibold',
                                    className: c.searchPageTitle,
                                    children: a.intl.format(a.t.UkOHRU, {
                                        numResults: g.length,
                                        query: h
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(l.SearchBox, {
                            searchTerm: n,
                            className: c.searchPageBox,
                            inputClassName: c.searchPageInput,
                            label: a.intl.string(a.t.nL2wKC),
                            placeholder: a.intl.string(a.t.nL2wKC),
                            onChange: d,
                            onClear: m,
                            onKeyPress: p,
                            cta: null != n && n.length > 0 ? a.intl.string(a.t['CU+6oK']) : null
                        })
                    ]
                }),
                t
            ]
        })
    });
};
