n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(399606),
    o = n(481060),
    c = n(112724),
    u = n(430824),
    d = n(496675),
    h = n(768581),
    m = n(400251),
    p = n(486527),
    f = n(981631),
    g = n(388032),
    C = n(904151),
    x = n(489766),
    v = n(584354),
    _ = n(725060);
let I = (0, c.Z)((e) => {
    let { searchQuery: t, setSearchQuery: n, handleClearSearch: l, handleSearchKeyPress: r, width: s } = e,
        c = null != s && s <= 800;
    return (0, i.jsxs)('div', {
        className: x.header,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: x.headerImage,
                src: c ? _ : v
            }),
            (0, i.jsx)('div', {
                className: x.headerContentWrapper,
                children: (0, i.jsxs)('div', {
                    className: a()(x.headerContent, { [x.headerContentSmall]: c }),
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-xl/semibold',
                            className: x.searchTitle,
                            children: g.intl.string(g.t.IT7qoK)
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            className: x.searchSubtitle,
                            children: g.intl.string(g.t['5PoYtr'])
                        }),
                        (0, i.jsx)(o.SearchBox, {
                            searchTerm: t,
                            className: x.searchBox,
                            inputClassName: x.searchBoxInput,
                            closeIconClassName: x.closeIcon,
                            searchIconClassName: x.searchIcon,
                            label: g.intl.string(g.t.nL2wKC),
                            placeholder: g.intl.string(g.t.nL2wKC),
                            onChange: n,
                            onClear: l,
                            onKeyPress: r,
                            cta: null != t && t.length > 0 ? g.intl.string(g.t['CU+6oK']) : null
                        })
                    ]
                })
            })
        ]
    });
});
function E(e) {
    let { guild: t, directoryEntries: n, handleCreateOrAddGuild: l, isLoading: r } = e,
        c = (0, s.e7)([d.Z], () => d.Z.can(f.Plq.ADMINISTRATOR, t)),
        u = [];
    null != n &&
        n.forEach((e) => {
            u = u.concat(e.entries);
        }),
        u.sort((e, t) => {
            var n, i;
            return (null !== (n = t.approximateMemberCount) && void 0 !== n ? n : 0) - (null !== (i = e.approximateMemberCount) && void 0 !== i ? i : 0);
        });
    let p = h.ZP.getGuildSplashURL({
        id: t.id,
        splash: t.splash
    });
    return (0, i.jsx)('div', {
        className: C.pageContainer,
        children: (0, i.jsxs)(o.AdvancedScrollerAuto, {
            className: C.scroller,
            children: [
                (0, i.jsxs)('div', {
                    className: x.header,
                    children: [
                        null != p
                            ? (0, i.jsx)('img', {
                                  alt: '',
                                  className: a()(x.headerImage, x.headerImageSimple),
                                  src: p
                              })
                            : null,
                        (0, i.jsx)('div', { className: x.headerImageBG }),
                        (0, i.jsx)('div', {
                            className: x.headerContentWrapper,
                            children: (0, i.jsx)('div', {
                                className: a()(x.headerContent, x.headerContentSmall),
                                children: (0, i.jsx)(o.Heading, {
                                    variant: 'heading-xl/semibold',
                                    color: 'always-white',
                                    children: g.intl.format(g.t.WphZ6e, { categoryName: 'Midjourney' })
                                })
                            })
                        })
                    ]
                }),
                r && null == n
                    ? (0, i.jsx)(o.Spinner, { className: C.spinner })
                    : (0, i.jsxs)('div', {
                          className: C.cardsContainer,
                          children: [u.map((e) => (0, i.jsx)(m.Z, { entry: e }, e.guildId)), c && null != l ? (0, i.jsx)(m.m, { onClick: l }) : null]
                      })
            ]
        })
    });
}
t.Z = (e) => {
    let { channel: t, directoryEntries: n, handleCreateOrAddGuild: r, searchQuery: a, setSearchQuery: c, handleClearSearch: d, handleSearchKeyPress: h, currentCategoryId: v, handleSelectCategory: _, categoryCounts: b, allEntriesCount: S, isLoading: Z } = e,
        T = (0, s.e7)([u.Z], () => u.Z.getGuild(t.getGuildId()));
    return null != T && T.hasFeature(f.oNc.SHARD)
        ? (0, i.jsx)(E, {
              guild: T,
              directoryEntries: n,
              handleCreateOrAddGuild: r,
              isLoading: Z
          })
        : (0, i.jsx)('div', {
              className: C.pageContainer,
              children: (0, i.jsxs)(o.AdvancedScrollerAuto, {
                  className: C.scroller,
                  children: [
                      (0, i.jsx)(I, {
                          searchQuery: a,
                          setSearchQuery: c,
                          handleClearSearch: d,
                          handleSearchKeyPress: h
                      }),
                      (0, i.jsx)(o.AdvancedScrollerThin, {
                          orientation: 'horizontal',
                          children: (0, i.jsxs)(o.TabBar, {
                              className: x.tabBar,
                              type: 'top',
                              look: 'brand',
                              selectedItem: v,
                              onItemSelect: (e) => {
                                  _(e);
                              },
                              children: [
                                  (0, i.jsx)(
                                      o.TabBar.Item,
                                      {
                                          className: x.tabBarItem,
                                          id: p.AR.ALL,
                                          children: ''.concat(g.intl.string(g.t.hEAa2d), ' (').concat(S, ')')
                                      },
                                      p.AR.ALL
                                  ),
                                  (0, p.b7)(t.id).map((e) => {
                                      let { value: t, label: n } = e;
                                      return (0, i.jsx)(
                                          o.TabBar.Item,
                                          {
                                              className: x.tabBarItem,
                                              id: t,
                                              children: ''.concat(n, ' ').concat(null != b[t] ? '('.concat(b[t], ')') : '')
                                          },
                                          t
                                      );
                                  })
                              ]
                          })
                      }),
                      Z && null == n
                          ? (0, i.jsx)(o.Spinner, { className: C.spinner })
                          : null == n
                            ? void 0
                            : n.map((e, t) =>
                                  (0, i.jsxs)(
                                      l.Fragment,
                                      {
                                          children: [
                                              void 0 !== e.header
                                                  ? (0, i.jsx)(o.Text, {
                                                        variant: 'text-md/semibold',
                                                        className: x.sectionHeader,
                                                        children: e.header
                                                    })
                                                  : null,
                                              (0, i.jsxs)('div', {
                                                  className: C.cardsContainer,
                                                  children: [e.entries.map((e) => (0, i.jsx)(m.Z, { entry: e }, e.guildId)), e.appendEndCard && null != r ? (0, i.jsx)(m.m, { onClick: r }) : null]
                                              })
                                          ]
                                      },
                                      t
                                  )
                              )
                  ]
              })
          });
};
