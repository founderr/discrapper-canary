"use strict";
n.r(t), n("390547"), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("392711"),
  o = n.n(r),
  u = n("664751"),
  d = n("748780"),
  c = n("873546"),
  f = n("442837"),
  E = n("481060"),
  h = n("570140"),
  _ = n("212093"),
  C = n("827837"),
  m = n("785570"),
  S = n("963202"),
  p = n("252618"),
  g = n("440190"),
  I = n("5955"),
  T = n("703656"),
  A = n("108427"),
  N = n("706454"),
  v = n("210887"),
  R = n("480294"),
  O = n("683301"),
  L = n("430824"),
  M = n("230307"),
  y = n("502568"),
  P = n("900849"),
  x = n("879484"),
  D = n("117496"),
  b = n("296386"),
  U = n("150192"),
  j = n("769727"),
  G = n("584885"),
  k = n("59222"),
  w = n("749436"),
  F = n("26580"),
  B = n("731455"),
  H = n("981631"),
  V = n("689938"),
  Y = n("715412"),
  W = n("368179"),
  K = n("52518");

function z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class q extends s.PureComponent {
  componentDidMount() {
    var e, t, n;
    let {
      isFetching: a,
      guilds: {
        gamesYouPlay: s,
        featured: i
      },
      searchRoute: l,
      currentHomepageCategoryId: r,
      mostRecentQuery: o
    } = this.props;
    if ((0, C.fetchActivityStatistics)(), (0, b.maybeFetchGuildDiscoveryCategories)(), null == O.default.getSearchIndex() && (0, _.createAlgoliaIndex)(), h.default.wait(() => {
        (0, m.markView)(H.ViewHistoryKeys.SERVER_DISCOVERY_BADGE)
      }), !a && 0 === o.length && P.trackDiscoveryViewed({
        loadId: this.loadId,
        gamesYouPlayGuilds: s.guilds,
        allGuilds: i.guilds,
        categoryId: r
      }), null != l) {
      let {
        query: e,
        offset: t,
        limit: n,
        preferredLocale: a,
        categoryId: s
      } = u.parse(l);
      (0, _.doAlgoliaSearch)(e, {
        categoryId: parseInt(s, 10),
        preferredLocale: a,
        offset: parseInt(t, 10),
        filters: {
          approximate_member_count: P.MINIMUM_MEMBER_COUNT
        },
        length: parseInt(n, 10)
      })
    } else null != r && r !== B.DISCOVERY_ALL_CATEGORIES_ID && h.default.wait(() => (0, _.selectCategory)(r));
    let d = null !== (t = null === (e = (0, T.getHistory)().location.state) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0;
    d > 0 && (null === (n = this._scroller.current) || void 0 === n || n.scrollTo({
      to: d
    })), (0, A.trackAppUIViewed)("guild_discovery")
  }
  componentDidUpdate(e) {
    let {
      guilds: {
        gamesYouPlay: t,
        featured: n
      },
      isFetching: a,
      mostRecentQuery: s,
      currentHomepageCategoryId: i,
      currentCategoryId: l
    } = this.props;
    if (e.isFetching && !a && P.trackDiscoveryViewed({
        loadId: this.loadId,
        gamesYouPlayGuilds: t.guilds,
        allGuilds: n.guilds,
        categoryId: i
      }), e.currentCategoryId !== l) {
      var r;
      null === (r = this._scroller.current) || void 0 === r || r.scrollTo({
        to: 0
      })
    }
    e.currentCategoryId !== l && P.trackDiscoveryExited(this.loadId, Array.from(this._guildIdsSeen)), e.mostRecentQuery.length > 0 && s.length < 1 && i !== l && (0, _.selectCategory)(i)
  }
  componentWillUnmount() {
    let {
      currentCategoryId: e,
      recommendationsLoadId: t,
      recommendationsGuilds: n
    } = this.props;
    e === B.DISCOVERY_ALL_CATEGORIES_ID ? null != n && null != t && P.trackDiscoveryExited(t, this.getOrderedGuildIdsSeen(n.map(e => e.id)), "Game Recommendations") : P.trackDiscoveryExited(this.loadId, Array.from(this._guildIdsSeen))
  }
  getOrderedGuildIdsSeen(e) {
    return e.filter(e => this._guildIdsSeen.has(e))
  }
  renderGamesYouPlay() {
    let {
      guilds: e,
      mightHaveGamesYouPlay: t,
      theme: n,
      userGuilds: s
    } = this.props, i = Object.keys(s), l = e[H.GuildDiscoverySections.GAMES_YOU_PLAY];
    l.guilds = l.guilds.filter(e => !i.includes(e.id));
    let {
      loadingGuildId: r
    } = this.state;
    return t ? (0, a.jsx)(G.default, {
      loadId: this.loadId,
      title: V.default.Messages.GUILD_DISCOVERY_HEADER_GAMES_YOU_PLAY,
      guildsData: l,
      loadingGuildId: r,
      analyticsContext: P.AnalyticsContexts.RECOMMENDED,
      onViewGuild: this.handleViewGuild,
      onGuildCardSeen: this.handleGuildCardSeen,
      fetchGuilds: _.fetchGamesYouPlayGuilds,
      theme: n
    }) : null
  }
  renderSearchBar() {
    var e, t;
    let {
      mostRecentQuery: n,
      guilds: {
        search: s
      },
      defaultLanguage: i,
      isFetchingSearch: l,
      currentCategoryId: r,
      categories: o,
      currentCategoryName: u
    } = this.props;
    x.DiscoveryTagsExperiment.trackExposure({
      location: "54961b_1"
    });
    let {
      shouldDisplayRecommendedSearchTags: d
    } = x.DiscoveryTagsExperiment.getCurrentConfig({
      location: "54961b_2"
    }, {
      autoTrackExposure: !1
    }), c = d ? r === B.DISCOVERY_ALL_CATEGORIES_ID ? V.default.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER_TAGS : V.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER_TAGS.format({
      categoryName: u
    }) : r === B.DISCOVERY_ALL_CATEGORIES_ID ? V.default.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : V.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
      categoryName: u
    }), f = null !== (t = null === (e = s[n]) || void 0 === e ? void 0 : e[r]) && void 0 !== t ? t : O.EMPTY_DISCOVERABLE_GUILDS_SECTION;
    return (0, a.jsx)(w.default, {
      loadId: this.loadId,
      searchResults: f,
      mostRecentQuery: n,
      isFetchingSearch: l,
      defaultLanguage: i,
      placeholder: c,
      currentCategoryId: r,
      categories: o
    })
  }
  renderSearchResults() {
    var e, t;
    let {
      mostRecentQuery: n,
      guilds: {
        search: s
      },
      availableLanguages: i,
      defaultLanguage: l,
      isFetchingSearch: r,
      theme: o,
      currentCategoryId: u,
      currentCategoryName: d
    } = this.props, {
      loadingGuildId: c
    } = this.state, f = u === B.DISCOVERY_ALL_CATEGORIES_ID ? V.default.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : V.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
      categoryName: d
    }), E = null !== (t = null === (e = s[n]) || void 0 === e ? void 0 : e[u]) && void 0 !== t ? t : O.EMPTY_DISCOVERABLE_GUILDS_SECTION;
    return (0, a.jsx)(k.default, {
      loadId: this.loadId,
      availableLanguages: i,
      defaultLanguage: l,
      placeholder: f,
      isFetchingSearch: r,
      searchResults: E,
      mostRecentQuery: n,
      loadingGuildId: c,
      currentCategoryId: u,
      currentCategoryName: d,
      scroller: this._scroller.current,
      theme: o,
      onViewGuild: this.handleViewGuild,
      onGuildCardSeen: this.handleGuildCardSeen,
      onTagClick: (e, t) => this.handleTagSearch(e, t, P.AnalyticsContexts.SEARCH)
    })
  }
  renderRecommendedGuildsSection() {
    let {
      guilds: e,
      theme: t
    } = this.props, {
      loadingGuildId: n
    } = this.state;
    return (0, a.jsx)(G.default, {
      loadId: this.loadId,
      title: V.default.Messages.GUILD_DISCOVERY_FEATURED_HEADER,
      guildsData: e.featured,
      analyticsContext: P.AnalyticsContexts.POPULAR,
      onViewGuild: this.handleViewGuild,
      onGuildCardSeen: this.handleGuildCardSeen,
      fetchGuilds: () => (0, _.fetchFeaturedOrPopularGuilds)(0, 30),
      loadingGuildId: n,
      theme: t,
      onTagClick: (e, t) => this.handleTagSearch(e, t, P.AnalyticsContexts.POPULAR)
    })
  }
  renderPopularGuildsSection() {
    let {
      guilds: e,
      theme: t,
      currentCategoryId: n
    } = this.props, {
      loadingGuildId: s
    } = this.state;
    return (0, a.jsx)(G.default, {
      loadId: this.loadId,
      title: V.default.Messages.GUILD_DISCOVERY_POPULAR_HEADER,
      guildsData: e[n],
      loadingGuildId: s,
      analyticsContext: P.AnalyticsContexts.POPULAR,
      onViewGuild: this.handleViewGuild,
      onGuildCardSeen: this.handleGuildCardSeen,
      fetchGuilds: () => (0, _.fetchPopularGuildsForCategory)(n),
      currentCategoryId: n,
      theme: t,
      onTagClick: (e, t) => this.handleTagSearch(e, t, P.AnalyticsContexts.POPULAR)
    })
  }
  render() {
    var e, t;
    let {
      currentCategoryName: n,
      mostRecentQuery: i,
      currentCategoryId: r,
      guilds: u
    } = this.props, d = i.length > 0;
    x.DiscoveryTagsExperiment.trackExposure({
      location: "54961b_3"
    });
    let {
      shouldDisplayRecommendedSearchTags: f
    } = x.DiscoveryTagsExperiment.getCurrentConfig({
      location: "54961b_4"
    }, {
      autoTrackExposure: !1
    }), h = r === B.DISCOVERY_ALL_CATEGORIES_ID ? null === (e = u[H.GuildDiscoverySections.FEATURED]) || void 0 === e ? void 0 : e.guilds : null === (t = u[r]) || void 0 === t ? void 0 : t.guilds;
    if (r === B.DISCORD_HUB_ID) return (0, a.jsx)(I.default, {
      loadId: this.loadId
    });
    let _ = r === B.DISCOVERY_ALL_CATEGORIES_ID ? V.default.Messages.GUILD_DISCOVERY_HOME_TITLE : V.default.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({
      categoryName: n
    });
    return (0, a.jsxs)("div", {
      className: Y.pageWrapper,
      children: [(0, a.jsx)(p.AppPageTitle, {
        subsection: d ? i : void 0,
        location: _
      }), (0, a.jsx)("div", {
        className: l()(Y.dragRegion, Y.pageHeaderDrag, {
          [Y.searchPageDrag]: d
        })
      }), c.isMobile && (0, a.jsx)(y.default, {
        children: (0, a.jsx)(s.Fragment, {})
      }), (0, a.jsx)(E.AdvancedScrollerAuto, {
        className: Y.scroller,
        ref: this._scroller,
        onScroll: this.handleScroll,
        children: (0, a.jsx)("div", {
          className: l()(Y.viewWrapper, {
            [Y.searchPage]: d
          }),
          children: d ? this.renderSearchResults() : (0, a.jsxs)(E.HeadingLevel, {
            forceLevel: 1,
            component: (0, a.jsxs)("div", {
              className: Y.searchHeader,
              children: [(0, a.jsx)("img", {
                alt: "",
                className: Y.headerImage,
                src: K
              }), (0, a.jsx)("div", {
                className: Y.headerContentWrapper,
                children: (0, a.jsxs)("div", {
                  className: Y.headerContent,
                  children: [(0, a.jsx)(E.Heading, {
                    variant: "heading-xl/semibold",
                    className: Y.searchTitle,
                    children: r === B.DISCOVERY_ALL_CATEGORIES_ID ? V.default.Messages.GUILD_DISCOVERY_HOME_TITLE : V.default.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({
                      categoryName: n
                    })
                  }), (0, a.jsx)(E.Text, {
                    variant: "text-md/normal",
                    className: Y.searchSubtitle,
                    children: r === B.DISCOVERY_ALL_CATEGORIES_ID && V.default.Messages.GUILD_DISCOVERY_HOME_SUBTITLE
                  }), this.renderSearchBar(), f && (0, a.jsx)(F.DiscoveryTags, {
                    hideOverflow: !0,
                    section: P.AnalyticsContexts.HEADER,
                    className: Y.headerTagContainer,
                    discoveryTagStyle: F.DiscoveryTagStyle.LIGHT,
                    onTagClick: e => this.handleTagSearch(e, void 0, P.AnalyticsContexts.HEADER),
                    tags: o().chain(h).flatMap(e => e.keywords).compact().uniq().sampleSize(10).value()
                  })]
                })
              })]
            }),
            children: [(0, a.jsx)("div", {
              className: Y.__invalid_featuredBody,
              children: r === B.DISCOVERY_ALL_CATEGORIES_ID ? this.renderRecommendedGuildsSection() : this.renderPopularGuildsSection()
            }), (0, a.jsxs)("div", {
              className: Y.footer,
              children: [(0, a.jsx)("img", {
                alt: "",
                src: W,
                className: Y.footerImage
              }), (0, a.jsx)(E.Heading, {
                variant: "heading-md/semibold",
                children: V.default.Messages.GUILD_DISCOVERY_CATEGORY_FOOTER_TITLE
              }), (0, a.jsx)(E.Button, {
                look: E.Button.Looks.LINK,
                color: E.Button.Colors.LINK,
                size: E.Button.Sizes.MIN,
                onClick: this.scrollToTop,
                children: V.default.Messages.GUILD_DISCOVERY_FOOTER_BODY
              })]
            })]
          })
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), z(this, "_scroller", s.createRef()), z(this, "_guildIdsSeen", new Set), z(this, "loadId", (0, D.makeAnalyticsID)()), z(this, "state", {
      animatedValue: new d.default.Value(0),
      loadingGuildId: null
    }), z(this, "scrollToTop", () => {
      null != this._scroller.current && this._scroller.current.scrollTo({
        to: 0
      })
    }), z(this, "handleScroll", () => {
      var e, t;
      let {
        animatedValue: n
      } = this.state, a = null !== (t = null === (e = this._scroller.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop) && void 0 !== t ? t : 0;
      n.setValue(Math.min(1, a / 200))
    }), z(this, "handleViewGuild", async (e, t, n, a) => {
      var s, i;
      let {
        currentCategoryId: l
      } = this.props, {
        loadingGuildId: r
      } = this.state;
      if (e === r) return;
      let o = null !== (i = null === (s = this._scroller.current) || void 0 === s ? void 0 : s.getScrollerState().scrollTop) && void 0 !== i ? i : 0,
        {
          location: u
        } = (0, T.getHistory)();
      (0, T.replaceWith)({
        ...u,
        state: o
      }), this.setState({
        loadingGuildId: e
      });
      let d = l !== B.DISCOVERY_ALL_CATEGORIES_ID ? l : null;
      try {
        await P.viewGuild({
          loadId: null != a ? a : this.loadId,
          guildId: e,
          index: t,
          analyticsContext: n,
          categoryId: d
        })
      } catch (e) {
        this.setState({
          loadingGuildId: null
        })
      }
    }), z(this, "handleGuildCardSeen", e => {
      this._guildIdsSeen.add(e)
    }), z(this, "handleTagSearch", (e, t, n) => {
      let {
        currentCategoryId: a,
        defaultLanguage: s
      } = this.props;
      if (null == a) return;
      let i = {
        approximate_member_count: P.MINIMUM_MEMBER_COUNT
      };
      (0, _.getSearchResultsCount)(e, i), (0, _.doAlgoliaSearch)(e, {
        filters: i,
        categoryId: a,
        preferredLocale: s.code,
        offset: 0,
        length: k.MAX_GUILDS_PER_PAGE,
        tag: !0
      }), P.trackTagSearchStarted(this.loadId, a, n, t), this.scrollToTop()
    })
  }
}
let Q = f.default.connectStores([v.default, N.default, M.default, R.default, O.default, U.default, L.default], () => {
  var e;
  let t = B.LANGUAGE_OPTIONS,
    n = N.default.locale,
    a = null !== (e = o().find(t, {
      code: n
    })) && void 0 !== e ? e : t[0],
    s = Object.keys(M.default.applicationStatistics),
    i = R.default.hasConsented(H.Consents.PERSONALIZATION) && s.length > 0,
    l = O.default.getCurrentCategoryId(),
    r = O.default.getCurrentHomepageCategoryId();
  return {
    isFetching: O.default.isFetching(),
    isFetchingSearch: O.default.isFetchingSearch(),
    guilds: O.default.getDiscoverableGuilds(),
    mostRecentQuery: O.default.getMostRecentQuery(),
    currentCategoryId: l,
    currentHomepageCategoryId: r,
    currentCategoryName: U.default.getCategoryName(l),
    categories: U.default.getDiscoveryCategories(),
    userGuilds: L.default.getGuilds(),
    theme: v.default.theme,
    mightHaveGamesYouPlay: i,
    availableLanguages: t,
    defaultLanguage: a
  }
})(q);

function Z(e) {
  let {
    searchRoute: t
  } = e, {
    fetching: n,
    loadId: s,
    recommendedGuilds: i
  } = (0, f.useStateFromStoresObject)([g.default], () => ({
    recommendedGuilds: g.default.getRecommendedGuilds(),
    loadId: g.default.getLoadId(),
    fetching: g.default.isFetching()
  }));
  return (0, a.jsx)(Q, {
    searchRoute: t,
    fetchingRecommendations: n,
    usingGameRecommendations: !1,
    recommendationsGuilds: i,
    recommendationsLoadId: s
  })
}
t.default = function(e) {
  let {
    searchRoute: t
  } = e, n = (0, f.useStateFromStoresArray)([L.default], () => Object.values(L.default.getGuilds())), s = (0, S.useAnyClanPrepilotExperimentEnabled)(n, "guild_discovery"), {
    clanDiscoveryEnabled: i
  } = (0, S.useClanPilotExperiment)("guild_discovery"), l = (0, f.useStateFromStores)([O.default], () => O.default.getCurrentCategoryId()), r = (0, f.useStateFromStores)([O.default], () => O.default.getIsReady());
  return (s || i) && (!r || l === B.CategoryId.Clans) ? (0, a.jsx)(j.default, {}) : (0, a.jsx)(Z, {
    searchRoute: t
  })
}