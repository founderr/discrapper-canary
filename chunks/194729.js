"use strict";
a.r(t), a("390547"), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("392711"),
  o = a.n(r),
  u = a("664751"),
  d = a("748780"),
  c = a("873546"),
  f = a("442837"),
  E = a("481060"),
  h = a("570140"),
  _ = a("212093"),
  C = a("827837"),
  m = a("785570"),
  S = a("252618"),
  I = a("440190"),
  p = a("5955"),
  T = a("703656"),
  g = a("108427"),
  A = a("706454"),
  N = a("210887"),
  v = a("480294"),
  R = a("683301"),
  O = a("430824"),
  L = a("230307"),
  M = a("502568"),
  P = a("900849"),
  x = a("2485"),
  y = a("879484"),
  D = a("117496"),
  b = a("296386"),
  U = a("150192"),
  j = a("769727"),
  G = a("584885"),
  w = a("59222"),
  k = a("749436"),
  F = a("26580"),
  H = a("731455"),
  B = a("981631"),
  V = a("689938"),
  Y = a("613776"),
  W = a("368179"),
  K = a("52518");

function z(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class q extends s.PureComponent {
  componentDidMount() {
    var e, t, a;
    let {
      isFetching: n,
      guilds: {
        gamesYouPlay: s,
        featured: l
      },
      searchRoute: i,
      currentHomepageCategoryId: r,
      mostRecentQuery: o
    } = this.props;
    if ((0, C.fetchActivityStatistics)(), (0, b.maybeFetchGuildDiscoveryCategories)(), null == R.default.getSearchIndex() && (0, _.createAlgoliaIndex)(), h.default.wait(() => {
        (0, m.markView)(B.ViewHistoryKeys.SERVER_DISCOVERY_BADGE)
      }), !n && 0 === o.length && P.trackDiscoveryViewed({
        loadId: this.loadId,
        gamesYouPlayGuilds: s.guilds,
        allGuilds: l.guilds,
        categoryId: r
      }), null != i) {
      let {
        query: e,
        offset: t,
        limit: a,
        preferredLocale: n,
        categoryId: s
      } = u.parse(i);
      (0, _.doAlgoliaSearch)(e, {
        categoryId: parseInt(s, 10),
        preferredLocale: n,
        offset: parseInt(t, 10),
        filters: {
          approximate_member_count: P.MINIMUM_MEMBER_COUNT
        },
        length: parseInt(a, 10)
      })
    } else null != r && r !== H.DISCOVERY_ALL_CATEGORIES_ID && h.default.wait(() => (0, _.selectCategory)(r));
    let d = null !== (t = null === (e = (0, T.getHistory)().location.state) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0;
    d > 0 && (null === (a = this._scroller.current) || void 0 === a || a.scrollTo({
      to: d
    })), (0, g.trackAppUIViewed)("guild_discovery")
  }
  componentDidUpdate(e) {
    let {
      guilds: {
        gamesYouPlay: t,
        featured: a
      },
      isFetching: n,
      mostRecentQuery: s,
      currentHomepageCategoryId: l,
      currentCategoryId: i
    } = this.props;
    if (e.isFetching && !n && P.trackDiscoveryViewed({
        loadId: this.loadId,
        gamesYouPlayGuilds: t.guilds,
        allGuilds: a.guilds,
        categoryId: l
      }), e.currentCategoryId !== i) {
      var r;
      null === (r = this._scroller.current) || void 0 === r || r.scrollTo({
        to: 0
      })
    }
    e.currentCategoryId !== i && P.trackDiscoveryExited(this.loadId, Array.from(this._guildIdsSeen)), e.mostRecentQuery.length > 0 && s.length < 1 && l !== i && (0, _.selectCategory)(l)
  }
  componentWillUnmount() {
    let {
      currentCategoryId: e,
      recommendationsLoadId: t,
      recommendationsGuilds: a
    } = this.props;
    e === H.DISCOVERY_ALL_CATEGORIES_ID ? null != a && null != t && P.trackDiscoveryExited(t, this.getOrderedGuildIdsSeen(a.map(e => e.id)), "Game Recommendations") : P.trackDiscoveryExited(this.loadId, Array.from(this._guildIdsSeen))
  }
  getOrderedGuildIdsSeen(e) {
    return e.filter(e => this._guildIdsSeen.has(e))
  }
  renderGamesYouPlay() {
    let {
      guilds: e,
      mightHaveGamesYouPlay: t,
      theme: a,
      userGuilds: s
    } = this.props, l = Object.keys(s), i = e[B.GuildDiscoverySections.GAMES_YOU_PLAY];
    i.guilds = i.guilds.filter(e => !l.includes(e.id));
    let {
      loadingGuildId: r
    } = this.state;
    return t ? (0, n.jsx)(G.default, {
      loadId: this.loadId,
      title: V.default.Messages.GUILD_DISCOVERY_HEADER_GAMES_YOU_PLAY,
      guildsData: i,
      loadingGuildId: r,
      analyticsContext: P.AnalyticsContexts.RECOMMENDED,
      onViewGuild: this.handleViewGuild,
      onGuildCardSeen: this.handleGuildCardSeen,
      fetchGuilds: _.fetchGamesYouPlayGuilds,
      theme: a
    }) : null
  }
  renderSearchBar() {
    var e, t;
    let {
      mostRecentQuery: a,
      guilds: {
        search: s
      },
      defaultLanguage: l,
      isFetchingSearch: i,
      currentCategoryId: r,
      categories: o,
      currentCategoryName: u
    } = this.props;
    y.DiscoveryTagsExperiment.trackExposure({
      location: "54961b_1"
    });
    let {
      shouldDisplayRecommendedSearchTags: d
    } = y.DiscoveryTagsExperiment.getCurrentConfig({
      location: "54961b_2"
    }, {
      autoTrackExposure: !1
    }), c = d ? r === H.DISCOVERY_ALL_CATEGORIES_ID ? V.default.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER_TAGS : V.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER_TAGS.format({
      categoryName: u
    }) : r === H.DISCOVERY_ALL_CATEGORIES_ID ? V.default.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : V.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
      categoryName: u
    }), f = null !== (t = null === (e = s[a]) || void 0 === e ? void 0 : e[r]) && void 0 !== t ? t : R.EMPTY_DISCOVERABLE_GUILDS_SECTION;
    return (0, n.jsx)(k.default, {
      loadId: this.loadId,
      searchResults: f,
      mostRecentQuery: a,
      isFetchingSearch: i,
      defaultLanguage: l,
      placeholder: c,
      currentCategoryId: r,
      categories: o
    })
  }
  renderSearchResults() {
    var e, t;
    let {
      mostRecentQuery: a,
      guilds: {
        search: s
      },
      availableLanguages: l,
      defaultLanguage: i,
      isFetchingSearch: r,
      theme: o,
      currentCategoryId: u,
      currentCategoryName: d
    } = this.props, {
      loadingGuildId: c
    } = this.state, f = u === H.DISCOVERY_ALL_CATEGORIES_ID ? V.default.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : V.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
      categoryName: d
    }), E = null !== (t = null === (e = s[a]) || void 0 === e ? void 0 : e[u]) && void 0 !== t ? t : R.EMPTY_DISCOVERABLE_GUILDS_SECTION;
    return (0, n.jsx)(w.default, {
      loadId: this.loadId,
      availableLanguages: l,
      defaultLanguage: i,
      placeholder: f,
      isFetchingSearch: r,
      searchResults: E,
      mostRecentQuery: a,
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
      loadingGuildId: a
    } = this.state;
    return (0, n.jsx)(G.default, {
      loadId: this.loadId,
      title: V.default.Messages.GUILD_DISCOVERY_FEATURED_HEADER,
      guildsData: e.featured,
      analyticsContext: P.AnalyticsContexts.POPULAR,
      onViewGuild: this.handleViewGuild,
      onGuildCardSeen: this.handleGuildCardSeen,
      fetchGuilds: () => (0, _.fetchFeaturedOrPopularGuilds)(0, 30),
      loadingGuildId: a,
      theme: t,
      onTagClick: (e, t) => this.handleTagSearch(e, t, P.AnalyticsContexts.POPULAR)
    })
  }
  renderPopularGuildsSection() {
    let {
      guilds: e,
      theme: t,
      currentCategoryId: a
    } = this.props, {
      loadingGuildId: s
    } = this.state;
    return (0, n.jsx)(G.default, {
      loadId: this.loadId,
      title: V.default.Messages.GUILD_DISCOVERY_POPULAR_HEADER,
      guildsData: e[a],
      loadingGuildId: s,
      analyticsContext: P.AnalyticsContexts.POPULAR,
      onViewGuild: this.handleViewGuild,
      onGuildCardSeen: this.handleGuildCardSeen,
      fetchGuilds: () => (0, _.fetchPopularGuildsForCategory)(a),
      currentCategoryId: a,
      theme: t,
      onTagClick: (e, t) => this.handleTagSearch(e, t, P.AnalyticsContexts.POPULAR)
    })
  }
  render() {
    var e, t;
    let {
      currentCategoryName: a,
      mostRecentQuery: l,
      currentCategoryId: r,
      guilds: u
    } = this.props, d = l.length > 0;
    y.DiscoveryTagsExperiment.trackExposure({
      location: "54961b_3"
    });
    let {
      shouldDisplayRecommendedSearchTags: f
    } = y.DiscoveryTagsExperiment.getCurrentConfig({
      location: "54961b_4"
    }, {
      autoTrackExposure: !1
    }), h = r === H.DISCOVERY_ALL_CATEGORIES_ID ? null === (e = u[B.GuildDiscoverySections.FEATURED]) || void 0 === e ? void 0 : e.guilds : null === (t = u[r]) || void 0 === t ? void 0 : t.guilds;
    if (r === H.DISCORD_HUB_ID) return (0, n.jsx)(p.default, {
      loadId: this.loadId
    });
    let _ = r === H.DISCOVERY_ALL_CATEGORIES_ID ? V.default.Messages.GUILD_DISCOVERY_HOME_TITLE : V.default.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({
      categoryName: a
    });
    return (0, n.jsxs)("div", {
      className: Y.pageWrapper,
      children: [(0, n.jsx)(S.AppPageTitle, {
        subsection: d ? l : void 0,
        location: _
      }), (0, n.jsx)("div", {
        className: i()(Y.dragRegion, Y.pageHeaderDrag, {
          [Y.searchPageDrag]: d
        })
      }), c.isMobile && (0, n.jsx)(M.default, {
        children: (0, n.jsx)(s.Fragment, {})
      }), (0, n.jsx)(E.AdvancedScrollerAuto, {
        className: Y.scroller,
        ref: this._scroller,
        onScroll: this.handleScroll,
        children: (0, n.jsx)("div", {
          className: i()(Y.viewWrapper, {
            [Y.searchPage]: d
          }),
          children: d ? this.renderSearchResults() : (0, n.jsxs)(E.HeadingLevel, {
            forceLevel: 1,
            component: (0, n.jsxs)("div", {
              className: Y.searchHeader,
              children: [(0, n.jsx)("img", {
                alt: "",
                className: Y.headerImage,
                src: K
              }), (0, n.jsx)("div", {
                className: Y.headerContentWrapper,
                children: (0, n.jsxs)("div", {
                  className: Y.headerContent,
                  children: [(0, n.jsx)(E.Heading, {
                    variant: "heading-xl/semibold",
                    className: Y.searchTitle,
                    children: r === H.DISCOVERY_ALL_CATEGORIES_ID ? V.default.Messages.GUILD_DISCOVERY_HOME_TITLE : V.default.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({
                      categoryName: a
                    })
                  }), (0, n.jsx)(E.Text, {
                    variant: "text-md/normal",
                    className: Y.searchSubtitle,
                    children: r === H.DISCOVERY_ALL_CATEGORIES_ID && V.default.Messages.GUILD_DISCOVERY_HOME_SUBTITLE
                  }), this.renderSearchBar(), f && (0, n.jsx)(F.DiscoveryTags, {
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
            children: [(0, n.jsx)("div", {
              className: Y.__invalid_featuredBody,
              children: r === H.DISCOVERY_ALL_CATEGORIES_ID ? this.renderRecommendedGuildsSection() : this.renderPopularGuildsSection()
            }), (0, n.jsxs)("div", {
              className: Y.footer,
              children: [(0, n.jsx)("img", {
                alt: "",
                src: W,
                className: Y.footerImage
              }), (0, n.jsx)(E.Heading, {
                variant: "heading-md/semibold",
                children: V.default.Messages.GUILD_DISCOVERY_CATEGORY_FOOTER_TITLE
              }), (0, n.jsx)(E.Button, {
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
        animatedValue: a
      } = this.state, n = null !== (t = null === (e = this._scroller.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop) && void 0 !== t ? t : 0;
      a.setValue(Math.min(1, n / 200))
    }), z(this, "handleViewGuild", async (e, t, a, n) => {
      var s, l;
      let {
        currentCategoryId: i
      } = this.props, {
        loadingGuildId: r
      } = this.state;
      if (e === r) return;
      let o = null !== (l = null === (s = this._scroller.current) || void 0 === s ? void 0 : s.getScrollerState().scrollTop) && void 0 !== l ? l : 0,
        {
          location: u
        } = (0, T.getHistory)();
      (0, T.replaceWith)({
        ...u,
        state: o
      }), this.setState({
        loadingGuildId: e
      });
      let d = i !== H.DISCOVERY_ALL_CATEGORIES_ID ? i : null;
      try {
        await P.viewGuild({
          loadId: null != n ? n : this.loadId,
          guildId: e,
          index: t,
          analyticsContext: a,
          categoryId: d
        })
      } catch (e) {
        this.setState({
          loadingGuildId: null
        })
      }
    }), z(this, "handleGuildCardSeen", e => {
      this._guildIdsSeen.add(e)
    }), z(this, "handleTagSearch", (e, t, a) => {
      let {
        currentCategoryId: n,
        defaultLanguage: s
      } = this.props;
      if (null == n) return;
      let l = {
        approximate_member_count: P.MINIMUM_MEMBER_COUNT
      };
      (0, _.getSearchResultsCount)(e, l), (0, _.doAlgoliaSearch)(e, {
        filters: l,
        categoryId: n,
        preferredLocale: s.code,
        offset: 0,
        length: w.MAX_GUILDS_PER_PAGE,
        tag: !0
      }), P.trackTagSearchStarted(this.loadId, n, a, t), this.scrollToTop()
    })
  }
}
let Q = f.default.connectStores([N.default, A.default, L.default, v.default, R.default, U.default, O.default], () => {
  var e;
  let t = H.LANGUAGE_OPTIONS,
    a = A.default.locale,
    n = null !== (e = o().find(t, {
      code: a
    })) && void 0 !== e ? e : t[0],
    s = Object.keys(L.default.applicationStatistics),
    l = v.default.hasConsented(B.Consents.PERSONALIZATION) && s.length > 0,
    i = R.default.getCurrentCategoryId(),
    r = R.default.getCurrentHomepageCategoryId();
  return {
    isFetching: R.default.isFetching(),
    isFetchingSearch: R.default.isFetchingSearch(),
    guilds: R.default.getDiscoverableGuilds(),
    mostRecentQuery: R.default.getMostRecentQuery(),
    currentCategoryId: i,
    currentHomepageCategoryId: r,
    currentCategoryName: U.default.getCategoryName(i),
    categories: U.default.getDiscoveryCategories(),
    userGuilds: O.default.getGuilds(),
    theme: N.default.theme,
    mightHaveGamesYouPlay: l,
    availableLanguages: t,
    defaultLanguage: n
  }
})(q);

function Z(e) {
  let {
    searchRoute: t
  } = e, {
    fetching: a,
    loadId: s,
    recommendedGuilds: l
  } = (0, f.useStateFromStoresObject)([I.default], () => ({
    recommendedGuilds: I.default.getRecommendedGuilds(),
    loadId: I.default.getLoadId(),
    fetching: I.default.isFetching()
  }));
  return (0, n.jsx)(Q, {
    searchRoute: t,
    fetchingRecommendations: a,
    usingGameRecommendations: !1,
    recommendationsGuilds: l,
    recommendationsLoadId: s
  })
}
t.default = function(e) {
  let {
    searchRoute: t
  } = e, a = (0, x.useClanDiscoveryExperimentEnabled)("guild_discovery"), s = (0, f.useStateFromStores)([R.default], () => R.default.getCurrentCategoryId()), l = (0, f.useStateFromStores)([R.default], () => R.default.getIsReady());
  return a && (!l || s === H.CategoryId.Clans) ? (0, n.jsx)(j.default, {}) : (0, n.jsx)(Z, {
    searchRoute: t
  })
}