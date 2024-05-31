"use strict";
n.r(t), n("390547"), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
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
  S = n("100527"),
  p = n("963202"),
  I = n("252618"),
  g = n("440190"),
  T = n("5955"),
  A = n("121711"),
  N = n("709158"),
  v = n("703656"),
  R = n("108427"),
  O = n("706454"),
  L = n("210887"),
  M = n("480294"),
  x = n("683301"),
  P = n("430824"),
  y = n("230307"),
  D = n("502568"),
  b = n("900849"),
  U = n("879484"),
  j = n("117496"),
  G = n("296386"),
  w = n("150192"),
  k = n("769727"),
  B = n("584885"),
  F = n("59222"),
  H = n("749436"),
  V = n("26580"),
  Y = n("731455"),
  W = n("981631"),
  K = n("689938"),
  z = n("59415"),
  Q = n("368179"),
  q = n("52518");

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class X extends s.PureComponent {
  componentDidMount() {
    var e, t, n;
    let {
      isFetching: a,
      guilds: {
        gamesYouPlay: s,
        featured: l
      },
      searchRoute: i,
      currentHomepageCategoryId: r,
      mostRecentQuery: o
    } = this.props;
    if ((0, C.fetchActivityStatistics)(), (0, G.maybeFetchGuildDiscoveryCategories)(), null == x.default.getSearchIndex() && (0, _.createAlgoliaIndex)(), h.default.wait(() => {
        (0, m.markView)(W.ViewHistoryKeys.SERVER_DISCOVERY_BADGE)
      }), !a && 0 === o.length && b.trackDiscoveryViewed({
        loadId: this.loadId,
        gamesYouPlayGuilds: s.guilds,
        allGuilds: l.guilds,
        categoryId: r
      }), null != i) {
      let {
        query: e,
        offset: t,
        limit: n,
        preferredLocale: a,
        categoryId: s
      } = u.parse(i);
      (0, _.doAlgoliaSearch)(e, {
        categoryId: parseInt(s, 10),
        preferredLocale: a,
        offset: parseInt(t, 10),
        filters: {
          approximate_member_count: b.MINIMUM_MEMBER_COUNT
        },
        length: parseInt(n, 10)
      })
    } else null != r && r !== Y.DISCOVERY_ALL_CATEGORIES_ID && h.default.wait(() => (0, _.selectCategory)(r));
    let d = null !== (t = null === (e = (0, v.getHistory)().location.state) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0;
    d > 0 && (null === (n = this._scroller.current) || void 0 === n || n.scrollTo({
      to: d
    })), (0, R.trackAppUIViewed)("guild_discovery")
  }
  componentDidUpdate(e) {
    let {
      guilds: {
        gamesYouPlay: t,
        featured: n
      },
      isFetching: a,
      mostRecentQuery: s,
      currentHomepageCategoryId: l,
      currentCategoryId: i
    } = this.props;
    if (e.isFetching && !a && b.trackDiscoveryViewed({
        loadId: this.loadId,
        gamesYouPlayGuilds: t.guilds,
        allGuilds: n.guilds,
        categoryId: l
      }), e.currentCategoryId !== i) {
      var r;
      null === (r = this._scroller.current) || void 0 === r || r.scrollTo({
        to: 0
      })
    }
    e.currentCategoryId !== i && b.trackDiscoveryExited(this.loadId, Array.from(this._guildIdsSeen)), e.mostRecentQuery.length > 0 && s.length < 1 && l !== i && (0, _.selectCategory)(l)
  }
  componentWillUnmount() {
    let {
      currentCategoryId: e,
      recommendationsLoadId: t,
      recommendationsGuilds: n
    } = this.props;
    e === Y.DISCOVERY_ALL_CATEGORIES_ID ? null != n && null != t && b.trackDiscoveryExited(t, this.getOrderedGuildIdsSeen(n.map(e => e.id)), "Game Recommendations") : b.trackDiscoveryExited(this.loadId, Array.from(this._guildIdsSeen))
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
    } = this.props, l = Object.keys(s), i = e[W.GuildDiscoverySections.GAMES_YOU_PLAY];
    i.guilds = i.guilds.filter(e => !l.includes(e.id));
    let {
      loadingGuildId: r
    } = this.state;
    return t ? (0, a.jsx)(B.default, {
      loadId: this.loadId,
      title: K.default.Messages.GUILD_DISCOVERY_HEADER_GAMES_YOU_PLAY,
      guildsData: i,
      loadingGuildId: r,
      analyticsContext: b.AnalyticsContexts.RECOMMENDED,
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
      defaultLanguage: l,
      isFetchingSearch: i,
      currentCategoryId: r,
      categories: o,
      currentCategoryName: u
    } = this.props;
    U.DiscoveryTagsExperiment.trackExposure({
      location: "54961b_1"
    });
    let {
      shouldDisplayRecommendedSearchTags: d
    } = U.DiscoveryTagsExperiment.getCurrentConfig({
      location: "54961b_2"
    }, {
      autoTrackExposure: !1
    }), c = d ? r === Y.DISCOVERY_ALL_CATEGORIES_ID ? K.default.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER_TAGS : K.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER_TAGS.format({
      categoryName: u
    }) : r === Y.DISCOVERY_ALL_CATEGORIES_ID ? K.default.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : K.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
      categoryName: u
    }), f = null !== (t = null === (e = s[n]) || void 0 === e ? void 0 : e[r]) && void 0 !== t ? t : x.EMPTY_DISCOVERABLE_GUILDS_SECTION;
    return (0, a.jsx)(H.default, {
      loadId: this.loadId,
      searchResults: f,
      mostRecentQuery: n,
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
      mostRecentQuery: n,
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
    } = this.state, f = u === Y.DISCOVERY_ALL_CATEGORIES_ID ? K.default.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : K.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
      categoryName: d
    }), E = null !== (t = null === (e = s[n]) || void 0 === e ? void 0 : e[u]) && void 0 !== t ? t : x.EMPTY_DISCOVERABLE_GUILDS_SECTION;
    return (0, a.jsx)(F.default, {
      loadId: this.loadId,
      availableLanguages: l,
      defaultLanguage: i,
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
      onTagClick: (e, t) => this.handleTagSearch(e, t, b.AnalyticsContexts.SEARCH)
    })
  }
  renderRecommendedGuildsSection() {
    let {
      guilds: e,
      theme: t
    } = this.props, {
      loadingGuildId: n
    } = this.state;
    return (0, a.jsx)(B.default, {
      loadId: this.loadId,
      title: K.default.Messages.GUILD_DISCOVERY_FEATURED_HEADER,
      guildsData: e.featured,
      analyticsContext: b.AnalyticsContexts.POPULAR,
      onViewGuild: this.handleViewGuild,
      onGuildCardSeen: this.handleGuildCardSeen,
      fetchGuilds: () => (0, _.fetchFeaturedOrPopularGuilds)(0, 30),
      loadingGuildId: n,
      theme: t,
      onTagClick: (e, t) => this.handleTagSearch(e, t, b.AnalyticsContexts.POPULAR)
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
    return (0, a.jsx)(B.default, {
      loadId: this.loadId,
      title: K.default.Messages.GUILD_DISCOVERY_POPULAR_HEADER,
      guildsData: e[n],
      loadingGuildId: s,
      analyticsContext: b.AnalyticsContexts.POPULAR,
      onViewGuild: this.handleViewGuild,
      onGuildCardSeen: this.handleGuildCardSeen,
      fetchGuilds: () => (0, _.fetchPopularGuildsForCategory)(n),
      currentCategoryId: n,
      theme: t,
      onTagClick: (e, t) => this.handleTagSearch(e, t, b.AnalyticsContexts.POPULAR)
    })
  }
  render() {
    var e, t;
    let {
      currentCategoryName: n,
      mostRecentQuery: l,
      currentCategoryId: r,
      guilds: u
    } = this.props, d = l.length > 0;
    U.DiscoveryTagsExperiment.trackExposure({
      location: "54961b_3"
    });
    let {
      shouldDisplayRecommendedSearchTags: f
    } = U.DiscoveryTagsExperiment.getCurrentConfig({
      location: "54961b_4"
    }, {
      autoTrackExposure: !1
    }), h = r === Y.DISCOVERY_ALL_CATEGORIES_ID ? null === (e = u[W.GuildDiscoverySections.FEATURED]) || void 0 === e ? void 0 : e.guilds : null === (t = u[r]) || void 0 === t ? void 0 : t.guilds;
    if (r === Y.DISCORD_HUB_ID) return (0, a.jsx)(T.default, {
      loadId: this.loadId
    });
    let _ = r === Y.DISCOVERY_ALL_CATEGORIES_ID ? K.default.Messages.GUILD_DISCOVERY_HOME_TITLE : K.default.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({
      categoryName: n
    });
    return (0, a.jsxs)("div", {
      className: z.pageWrapper,
      children: [(0, a.jsx)(I.AppPageTitle, {
        subsection: d ? l : void 0,
        location: _
      }), (0, a.jsx)("div", {
        className: i()(z.dragRegion, z.pageHeaderDrag, {
          [z.searchPageDrag]: d
        })
      }), c.isMobile && (0, a.jsx)(D.default, {
        children: (0, a.jsx)(s.Fragment, {})
      }), (0, a.jsx)(E.AdvancedScrollerAuto, {
        className: z.scroller,
        ref: this._scroller,
        onScroll: this.handleScroll,
        children: (0, a.jsx)("div", {
          className: i()(z.viewWrapper, {
            [z.searchPage]: d
          }),
          children: d ? this.renderSearchResults() : (0, a.jsxs)(E.HeadingLevel, {
            forceLevel: 1,
            component: (0, a.jsxs)("div", {
              className: z.searchHeader,
              children: [(0, a.jsx)("img", {
                alt: "",
                className: z.headerImage,
                src: q
              }), (0, a.jsx)("div", {
                className: z.headerContentWrapper,
                children: (0, a.jsxs)("div", {
                  className: z.headerContent,
                  children: [(0, a.jsx)(E.Heading, {
                    variant: "heading-xl/semibold",
                    className: z.searchTitle,
                    children: r === Y.DISCOVERY_ALL_CATEGORIES_ID ? K.default.Messages.GUILD_DISCOVERY_HOME_TITLE : K.default.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({
                      categoryName: n
                    })
                  }), (0, a.jsx)(E.Text, {
                    variant: "text-md/normal",
                    className: z.searchSubtitle,
                    children: r === Y.DISCOVERY_ALL_CATEGORIES_ID && K.default.Messages.GUILD_DISCOVERY_HOME_SUBTITLE
                  }), this.renderSearchBar(), f && (0, a.jsx)(V.DiscoveryTags, {
                    hideOverflow: !0,
                    section: b.AnalyticsContexts.HEADER,
                    className: z.headerTagContainer,
                    discoveryTagStyle: V.DiscoveryTagStyle.LIGHT,
                    onTagClick: e => this.handleTagSearch(e, void 0, b.AnalyticsContexts.HEADER),
                    tags: o().chain(h).flatMap(e => e.keywords).compact().uniq().sampleSize(10).value()
                  })]
                })
              })]
            }),
            children: [(0, a.jsx)("div", {
              className: z.__invalid_featuredBody,
              children: r === Y.DISCOVERY_ALL_CATEGORIES_ID ? this.renderRecommendedGuildsSection() : this.renderPopularGuildsSection()
            }), (0, a.jsxs)("div", {
              className: z.footer,
              children: [(0, a.jsx)("img", {
                alt: "",
                src: Q,
                className: z.footerImage
              }), (0, a.jsx)(E.Heading, {
                variant: "heading-md/semibold",
                children: K.default.Messages.GUILD_DISCOVERY_CATEGORY_FOOTER_TITLE
              }), (0, a.jsx)(E.Button, {
                look: E.Button.Looks.LINK,
                color: E.Button.Colors.LINK,
                size: E.Button.Sizes.MIN,
                onClick: this.scrollToTop,
                children: K.default.Messages.GUILD_DISCOVERY_FOOTER_BODY
              })]
            })]
          })
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), Z(this, "_scroller", s.createRef()), Z(this, "_guildIdsSeen", new Set), Z(this, "loadId", (0, j.makeAnalyticsID)()), Z(this, "state", {
      animatedValue: new d.default.Value(0),
      loadingGuildId: null
    }), Z(this, "scrollToTop", () => {
      null != this._scroller.current && this._scroller.current.scrollTo({
        to: 0
      })
    }), Z(this, "handleScroll", () => {
      var e, t;
      let {
        animatedValue: n
      } = this.state, a = null !== (t = null === (e = this._scroller.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop) && void 0 !== t ? t : 0;
      n.setValue(Math.min(1, a / 200))
    }), Z(this, "handleViewGuild", async (e, t, n, a) => {
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
        } = (0, v.getHistory)();
      (0, v.replaceWith)({
        ...u,
        state: o
      }), this.setState({
        loadingGuildId: e
      });
      let d = i !== Y.DISCOVERY_ALL_CATEGORIES_ID ? i : null;
      try {
        await b.viewGuild({
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
    }), Z(this, "handleGuildCardSeen", e => {
      this._guildIdsSeen.add(e)
    }), Z(this, "handleTagSearch", (e, t, n) => {
      let {
        currentCategoryId: a,
        defaultLanguage: s
      } = this.props;
      if (null == a) return;
      let l = {
        approximate_member_count: b.MINIMUM_MEMBER_COUNT
      };
      (0, _.getSearchResultsCount)(e, l), (0, _.doAlgoliaSearch)(e, {
        filters: l,
        categoryId: a,
        preferredLocale: s.code,
        offset: 0,
        length: F.MAX_GUILDS_PER_PAGE,
        tag: !0
      }), b.trackTagSearchStarted(this.loadId, a, n, t), this.scrollToTop()
    })
  }
}
let J = f.default.connectStores([L.default, O.default, y.default, M.default, x.default, w.default, P.default], () => {
  var e;
  let t = Y.LANGUAGE_OPTIONS,
    n = O.default.locale,
    a = null !== (e = o().find(t, {
      code: n
    })) && void 0 !== e ? e : t[0],
    s = Object.keys(y.default.applicationStatistics),
    l = M.default.hasConsented(W.Consents.PERSONALIZATION) && s.length > 0,
    i = x.default.getCurrentCategoryId(),
    r = x.default.getCurrentHomepageCategoryId();
  return {
    isFetching: x.default.isFetching(),
    isFetchingSearch: x.default.isFetchingSearch(),
    guilds: x.default.getDiscoverableGuilds(),
    mostRecentQuery: x.default.getMostRecentQuery(),
    currentCategoryId: i,
    currentHomepageCategoryId: r,
    currentCategoryName: w.default.getCategoryName(i),
    categories: w.default.getDiscoveryCategories(),
    userGuilds: P.default.getGuilds(),
    theme: L.default.theme,
    mightHaveGamesYouPlay: l,
    availableLanguages: t,
    defaultLanguage: a
  }
})(X);

function $(e) {
  let {
    searchRoute: t
  } = e, {
    fetching: n,
    loadId: s,
    recommendedGuilds: l
  } = (0, f.useStateFromStoresObject)([g.default], () => ({
    recommendedGuilds: g.default.getRecommendedGuilds(),
    loadId: g.default.getLoadId(),
    fetching: g.default.isFetching()
  }));
  return (0, a.jsx)(J, {
    searchRoute: t,
    fetchingRecommendations: n,
    usingGameRecommendations: !1,
    recommendationsGuilds: l,
    recommendationsLoadId: s
  })
}
t.default = function(e) {
  let {
    searchRoute: t
  } = e, {
    guilds: n
  } = (0, p.useClanPrepilotExperimentForAllGuilds)({
    location: "guild_discovery",
    includeConverted: !0
  }), s = n.length > 0, {
    clanDiscoveryEnabled: l
  } = (0, p.useClanPilotExperiment)("guild_discovery"), i = (0, f.useStateFromStores)([x.default], () => x.default.getCurrentCategoryId()), r = (0, f.useStateFromStores)([x.default], () => x.default.getIsReady()), o = (0, N.default)(S.default.QUEST_HOME_PAGE);
  return (s || l) && (!r || i === Y.CategoryId.Clans) ? (0, a.jsx)(k.default, {}) : o && i === Y.CategoryId.Quests ? (0, a.jsx)(A.default, {}) : (0, a.jsx)($, {
    searchRoute: t
  })
}