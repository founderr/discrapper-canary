n(390547), n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(664751),
    d = n(748780),
    u = n(873546),
    _ = n(442837),
    h = n(481060),
    E = n(570140),
    m = n(212093),
    I = n(827837),
    g = n(785570),
    p = n(963202),
    T = n(252618),
    f = n(440190),
    S = n(665149),
    C = n(5955),
    N = n(918701),
    A = n(121711),
    v = n(703656),
    Z = n(108427),
    L = n(706454),
    O = n(210887),
    R = n(480294),
    x = n(683301),
    b = n(430824),
    P = n(230307),
    M = n(900849),
    D = n(879484),
    y = n(117496),
    j = n(296386),
    U = n(150192),
    G = n(769727),
    w = n(229765),
    k = n(584885),
    B = n(59222),
    H = n(749436),
    V = n(26580),
    F = n(731455),
    Y = n(981631),
    W = n(689938),
    z = n(745322),
    K = n(368179),
    q = n(52518);
function Q(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class X extends a.PureComponent {
    componentDidMount() {
        var e, t, n;
        let {
            isFetching: i,
            guilds: { gamesYouPlay: a, featured: s },
            searchRoute: r,
            currentHomepageCategoryId: l,
            currentCategoryId: o,
            mostRecentQuery: d
        } = this.props;
        if (
            ((0, I.N)(),
            (0, j.le)(),
            null == x.ZP.getSearchIndex() && (0, m.Ue)(),
            E.Z.wait(() => {
                (0, g.M)(Y.x8Z.SERVER_DISCOVERY_BADGE);
            }),
            !i &&
                0 === d.length &&
                M.Zt({
                    loadId: this.loadId,
                    gamesYouPlayGuilds: a.guilds,
                    allGuilds: s.guilds,
                    categoryId: o
                }),
            null != r)
        ) {
            let { query: e, offset: t, limit: n, preferredLocale: i, categoryId: a } = c.parse(r);
            (0, m.bR)(e, {
                categoryId: parseInt(a, 10),
                preferredLocale: i,
                offset: parseInt(t, 10),
                filters: { approximate_member_count: M.sq },
                length: parseInt(n, 10)
            });
        } else null != l && l !== F.Hk && E.Z.wait(() => (0, m.uY)(l));
        let u = null !== (t = null === (e = (0, v.s1)().location.state) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0;
        u > 0 && (null === (n = this._scroller.current) || void 0 === n || n.scrollTo({ to: u })), (0, Z.e)('guild_discovery');
    }
    componentDidUpdate(e) {
        let {
            guilds: { gamesYouPlay: t, featured: n },
            isFetching: i,
            mostRecentQuery: a,
            currentHomepageCategoryId: s,
            currentCategoryId: r
        } = this.props;
        if (
            (e.isFetching &&
                !i &&
                M.Zt({
                    loadId: this.loadId,
                    gamesYouPlayGuilds: t.guilds,
                    allGuilds: n.guilds,
                    categoryId: r
                }),
            e.currentCategoryId !== r)
        ) {
            var l;
            null === (l = this._scroller.current) || void 0 === l || l.scrollTo({ to: 0 });
        }
        e.currentCategoryId !== r && M.Az(this.loadId, Array.from(this._guildIdsSeen)), e.mostRecentQuery.length > 0 && a.length < 1 && s !== r && (0, m.uY)(null != s ? s : F.Hk);
    }
    componentWillUnmount() {
        let { currentCategoryId: e, recommendationsLoadId: t, recommendationsGuilds: n } = this.props;
        e === F.Hk ? null != n && null != t && M.Az(t, this.getOrderedGuildIdsSeen(n.map((e) => e.id)), 'Game Recommendations') : M.Az(this.loadId, Array.from(this._guildIdsSeen));
    }
    getOrderedGuildIdsSeen(e) {
        return e.filter((e) => this._guildIdsSeen.has(e));
    }
    renderGamesYouPlay() {
        let { guilds: e, mightHaveGamesYouPlay: t, theme: n, userGuilds: a } = this.props,
            s = Object.keys(a),
            r = e[Y.Lcj.GAMES_YOU_PLAY];
        r.guilds = r.guilds.filter((e) => !s.includes(e.id));
        let { loadingGuildId: l } = this.state;
        return t
            ? (0, i.jsx)(k.Z, {
                  loadId: this.loadId,
                  title: W.Z.Messages.GUILD_DISCOVERY_HEADER_GAMES_YOU_PLAY,
                  guildsData: r,
                  loadingGuildId: l,
                  analyticsContext: M.P1.RECOMMENDED,
                  onViewGuild: this.handleViewGuild,
                  onGuildCardSeen: this.handleGuildCardSeen,
                  fetchGuilds: m.gk,
                  theme: n
              })
            : null;
    }
    renderSearchBar() {
        var e, t;
        let {
            mostRecentQuery: n,
            guilds: { search: a },
            defaultLanguage: s,
            isFetchingSearch: r,
            currentCategoryId: l,
            categories: o,
            currentCategoryName: c
        } = this.props;
        D.w.trackExposure({ location: '54961b_1' });
        let { shouldDisplayRecommendedSearchTags: d } = D.w.getCurrentConfig({ location: '54961b_2' }, { autoTrackExposure: !1 }),
            u = d ? (l === F.Hk ? W.Z.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER_TAGS : W.Z.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER_TAGS.format({ categoryName: c })) : l === F.Hk ? W.Z.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : W.Z.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({ categoryName: c }),
            _ = null !== (t = null === (e = a[n]) || void 0 === e ? void 0 : e[l]) && void 0 !== t ? t : x.xk;
        return (0, i.jsx)(H.Z, {
            loadId: this.loadId,
            searchResults: _,
            mostRecentQuery: n,
            isFetchingSearch: r,
            defaultLanguage: s,
            placeholder: u,
            currentCategoryId: l,
            categories: o
        });
    }
    renderSearchResults() {
        var e, t;
        let {
                mostRecentQuery: n,
                guilds: { search: a },
                availableLanguages: s,
                defaultLanguage: r,
                isFetchingSearch: l,
                theme: o,
                currentCategoryId: c,
                currentCategoryName: d
            } = this.props,
            { loadingGuildId: u } = this.state,
            _ = c === F.Hk ? W.Z.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : W.Z.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({ categoryName: d }),
            h = null !== (t = null === (e = a[n]) || void 0 === e ? void 0 : e[c]) && void 0 !== t ? t : x.xk;
        return (0, i.jsx)(B.Z, {
            loadId: this.loadId,
            availableLanguages: s,
            defaultLanguage: r,
            placeholder: _,
            isFetchingSearch: l,
            searchResults: h,
            mostRecentQuery: n,
            loadingGuildId: u,
            currentCategoryId: c,
            currentCategoryName: d,
            scroller: this._scroller.current,
            theme: o,
            onViewGuild: this.handleViewGuild,
            onGuildCardSeen: this.handleGuildCardSeen,
            onTagClick: (e, t) => this.handleTagSearch(e, t, M.P1.SEARCH)
        });
    }
    renderRecommendedGuildsSection() {
        let { guilds: e, theme: t } = this.props,
            { loadingGuildId: n } = this.state;
        return (0, i.jsx)(k.Z, {
            loadId: this.loadId,
            title: W.Z.Messages.GUILD_DISCOVERY_FEATURED_HEADER,
            guildsData: e.featured,
            analyticsContext: M.P1.POPULAR,
            onViewGuild: this.handleViewGuild,
            onGuildCardSeen: this.handleGuildCardSeen,
            fetchGuilds: () => (0, m.$z)(0, 30),
            loadingGuildId: n,
            theme: t,
            onTagClick: (e, t) => this.handleTagSearch(e, t, M.P1.POPULAR)
        });
    }
    renderPopularGuildsSection() {
        let { guilds: e, theme: t, currentCategoryId: n } = this.props,
            { loadingGuildId: a } = this.state;
        return (0, i.jsx)(k.Z, {
            loadId: this.loadId,
            title: W.Z.Messages.GUILD_DISCOVERY_POPULAR_HEADER,
            guildsData: e[n],
            loadingGuildId: a,
            analyticsContext: M.P1.POPULAR,
            onViewGuild: this.handleViewGuild,
            onGuildCardSeen: this.handleGuildCardSeen,
            fetchGuilds: () => (0, m.K5)(n),
            currentCategoryId: n,
            theme: t,
            onTagClick: (e, t) => this.handleTagSearch(e, t, M.P1.POPULAR)
        });
    }
    _getLoadTestQuery() {
        let { currentCategoryName: e, mostRecentQuery: t } = this.props;
        return t.length > 0 ? t : e;
    }
    render() {
        var e, t;
        let { currentCategoryName: n, mostRecentQuery: s, currentCategoryId: l, guilds: c } = this.props,
            d = s.length > 0;
        D.w.trackExposure({ location: '54961b_3' });
        let { shouldDisplayRecommendedSearchTags: _ } = D.w.getCurrentConfig({ location: '54961b_4' }, { autoTrackExposure: !1 }),
            E = l === F.Hk ? (null === (e = c[Y.Lcj.FEATURED]) || void 0 === e ? void 0 : e.guilds) : null === (t = c[l]) || void 0 === t ? void 0 : t.guilds;
        if (l === F.U) return (0, i.jsx)(C.Z, { loadId: this.loadId });
        let m = l === F.Hk ? W.Z.Messages.GUILD_DISCOVERY_HOME_TITLE : W.Z.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({ categoryName: n });
        return (0, i.jsxs)('div', {
            className: z.pageWrapper,
            children: [
                (0, i.jsx)(w.KY, {
                    location: 'guild_discovery',
                    query: this._getLoadTestQuery()
                }),
                (0, i.jsx)(T.yY, {
                    subsection: d ? s : void 0,
                    location: m
                }),
                (0, i.jsx)('div', { className: r()(z.dragRegion, z.pageHeaderDrag, { [z.searchPageDrag]: d }) }),
                u.tq && (0, i.jsx)(S.ZP, { children: (0, i.jsx)(a.Fragment, {}) }),
                (0, i.jsx)(h.AdvancedScrollerAuto, {
                    className: z.scroller,
                    ref: this._scroller,
                    onScroll: this.handleScroll,
                    children: (0, i.jsx)('div', {
                        className: r()(z.viewWrapper, { [z.searchPage]: d }),
                        children: d
                            ? this.renderSearchResults()
                            : (0, i.jsxs)(h.HeadingLevel, {
                                  forceLevel: 1,
                                  component: (0, i.jsxs)('div', {
                                      className: z.searchHeader,
                                      children: [
                                          (0, i.jsx)('img', {
                                              alt: '',
                                              className: z.headerImage,
                                              src: q
                                          }),
                                          (0, i.jsx)('div', {
                                              className: z.headerContentWrapper,
                                              children: (0, i.jsxs)('div', {
                                                  className: z.headerContent,
                                                  children: [
                                                      (0, i.jsx)(h.Heading, {
                                                          variant: 'heading-xl/semibold',
                                                          className: z.searchTitle,
                                                          children: l === F.Hk ? W.Z.Messages.GUILD_DISCOVERY_HOME_TITLE : W.Z.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({ categoryName: n })
                                                      }),
                                                      (0, i.jsx)(h.Text, {
                                                          variant: 'text-md/normal',
                                                          className: z.searchSubtitle,
                                                          children: l === F.Hk && W.Z.Messages.GUILD_DISCOVERY_HOME_SUBTITLE
                                                      }),
                                                      this.renderSearchBar(),
                                                      _ &&
                                                          (0, i.jsx)(V.F, {
                                                              hideOverflow: !0,
                                                              section: M.P1.HEADER,
                                                              className: z.headerTagContainer,
                                                              discoveryTagStyle: V.B.LIGHT,
                                                              onTagClick: (e) => this.handleTagSearch(e, void 0, M.P1.HEADER),
                                                              tags: o()
                                                                  .chain(E)
                                                                  .flatMap((e) => e.keywords)
                                                                  .compact()
                                                                  .uniq()
                                                                  .sampleSize(10)
                                                                  .value()
                                                          })
                                                  ]
                                              })
                                          })
                                      ]
                                  }),
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: z.__invalid_featuredBody,
                                          children: l === F.Hk ? this.renderRecommendedGuildsSection() : this.renderPopularGuildsSection()
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: z.footer,
                                          children: [
                                              (0, i.jsx)('img', {
                                                  alt: '',
                                                  src: K,
                                                  className: z.footerImage
                                              }),
                                              (0, i.jsx)(h.Heading, {
                                                  variant: 'heading-md/semibold',
                                                  children: W.Z.Messages.GUILD_DISCOVERY_CATEGORY_FOOTER_TITLE
                                              }),
                                              (0, i.jsx)(h.Button, {
                                                  look: h.Button.Looks.LINK,
                                                  color: h.Button.Colors.LINK,
                                                  size: h.Button.Sizes.MIN,
                                                  onClick: this.scrollToTop,
                                                  children: W.Z.Messages.GUILD_DISCOVERY_FOOTER_BODY
                                              })
                                          ]
                                      })
                                  ]
                              })
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            Q(this, '_scroller', a.createRef()),
            Q(this, '_guildIdsSeen', new Set()),
            Q(this, 'loadId', (0, y.P)()),
            Q(this, 'state', {
                animatedValue: new d.Z.Value(0),
                loadingGuildId: null
            }),
            Q(this, 'scrollToTop', () => {
                null != this._scroller.current && this._scroller.current.scrollTo({ to: 0 });
            }),
            Q(this, 'handleScroll', () => {
                var e, t;
                let { animatedValue: n } = this.state,
                    i = null !== (t = null === (e = this._scroller.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop) && void 0 !== t ? t : 0;
                n.setValue(Math.min(1, i / 200));
            }),
            Q(this, 'handleViewGuild', async (e, t, n, i) => {
                var a, s;
                let { currentCategoryId: r } = this.props,
                    { loadingGuildId: l } = this.state;
                if (e === l) return;
                let o = null !== (s = null === (a = this._scroller.current) || void 0 === a ? void 0 : a.getScrollerState().scrollTop) && void 0 !== s ? s : 0,
                    { location: c } = (0, v.s1)();
                (0, v.dL)({
                    ...c,
                    state: o
                }),
                    this.setState({ loadingGuildId: e });
                let d = r !== F.Hk ? r : null;
                try {
                    await M.Lq({
                        loadId: null != i ? i : this.loadId,
                        guildId: e,
                        index: t,
                        analyticsContext: n,
                        categoryId: d
                    });
                } catch (e) {
                    this.setState({ loadingGuildId: null });
                }
            }),
            Q(this, 'handleGuildCardSeen', (e) => {
                this._guildIdsSeen.add(e);
            }),
            Q(this, 'handleTagSearch', (e, t, n) => {
                let { currentCategoryId: i, defaultLanguage: a } = this.props;
                if (null == i) return;
                let s = { approximate_member_count: M.sq };
                (0, m.G7)(e, s),
                    (0, m.bR)(e, {
                        filters: s,
                        categoryId: i,
                        preferredLocale: a.code,
                        offset: 0,
                        length: B.D,
                        tag: !0
                    }),
                    M.j$(this.loadId, i, n, t),
                    this.scrollToTop();
            });
    }
}
let J = _.ZP.connectStores([O.Z, L.default, P.Z, R.Z, x.ZP, U.Z, b.Z], () => {
    var e;
    let t = F.dU,
        n = L.default.locale,
        i = null !== (e = o().find(t, { code: n })) && void 0 !== e ? e : t[0],
        a = Object.keys(P.Z.applicationStatistics),
        s = R.Z.hasConsented(Y.pjP.PERSONALIZATION) && a.length > 0,
        r = x.ZP.getCurrentCategoryId(),
        l = x.ZP.getCurrentHomepageCategoryId();
    return {
        isFetching: x.ZP.isFetching(),
        isFetchingSearch: x.ZP.isFetchingSearch(),
        guilds: x.ZP.getDiscoverableGuilds(),
        mostRecentQuery: x.ZP.getMostRecentQuery(),
        currentCategoryId: r,
        currentHomepageCategoryId: l,
        currentCategoryName: U.Z.getCategoryName(r),
        categories: U.Z.getDiscoveryCategories(),
        userGuilds: b.Z.getGuilds(),
        theme: O.Z.theme,
        mightHaveGamesYouPlay: s,
        availableLanguages: t,
        defaultLanguage: i
    };
})(X);
function $(e) {
    let { searchRoute: t } = e,
        {
            fetching: n,
            loadId: a,
            recommendedGuilds: s
        } = (0, _.cj)([f.Z], () => ({
            recommendedGuilds: f.Z.getRecommendedGuilds(),
            loadId: f.Z.getLoadId(),
            fetching: f.Z.isFetching()
        }));
    return (0, i.jsx)(J, {
        searchRoute: t,
        fetchingRecommendations: n,
        usingGameRecommendations: !1,
        recommendationsGuilds: s,
        recommendationsLoadId: a
    });
}
t.Z = function (e) {
    let { searchRoute: t } = e,
        { guilds: n } = (0, p.C3)({
            location: 'guild_discovery',
            includeConverted: !0
        }),
        s = n.length > 0,
        { clanDiscoveryEnabled: r } = (0, p.nk)('guild_discovery'),
        l = (0, _.e7)([x.ZP], () => x.ZP.getCurrentCategoryId()),
        o = (0, _.e7)([x.ZP], () => x.ZP.getIsReady()),
        c = (0, N.XT)();
    return (a.useEffect(() => {
        c && (0, m.uY)(F.Gj.Quests);
    }, [c]),
    (s || r) && (!o || l === F.Gj.Clans))
        ? (0, i.jsx)(G.Z, {})
        : l === F.Gj.Quests
          ? (0, i.jsx)(A.Z, {})
          : (0, i.jsx)($, { searchRoute: t });
};
