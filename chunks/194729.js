n(390547), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(392711),
  o = n.n(r),
  c = n(664751),
  u = n(748780),
  d = n(873546),
  E = n(442837),
  h = n(481060),
  _ = n(570140),
  I = n(212093),
  m = n(827837),
  g = n(785570),
  p = n(100527),
  T = n(963202),
  N = n(252618),
  S = n(440190),
  C = n(5955),
  A = n(121711),
  f = n(709158),
  Z = n(703656),
  v = n(108427),
  L = n(706454),
  O = n(210887),
  R = n(480294),
  x = n(683301),
  M = n(430824),
  P = n(230307),
  D = n(502568),
  b = n(900849),
  y = n(879484),
  j = n(117496),
  U = n(296386),
  G = n(150192),
  w = n(769727),
  k = n(584885),
  B = n(59222),
  H = n(749436),
  V = n(26580),
  F = n(731455),
  Y = n(981631),
  z = n(689938),
  W = n(461455),
  K = n(368179),
  q = n(52518);

function Q(e, t, n) {
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
      isFetching: i,
      guilds: {
        gamesYouPlay: s,
        featured: l
      },
      searchRoute: a,
      currentHomepageCategoryId: r,
      mostRecentQuery: o
    } = this.props;
    if ((0, m.N)(), (0, U.le)(), null == x.ZP.getSearchIndex() && (0, I.Ue)(), _.Z.wait(() => {
        (0, g.M)(Y.x8Z.SERVER_DISCOVERY_BADGE)
      }), !i && 0 === o.length && b.Zt({
        loadId: this.loadId,
        gamesYouPlayGuilds: s.guilds,
        allGuilds: l.guilds,
        categoryId: r
      }), null != a) {
      let {
        query: e,
        offset: t,
        limit: n,
        preferredLocale: i,
        categoryId: s
      } = c.parse(a);
      (0, I.bR)(e, {
        categoryId: parseInt(s, 10),
        preferredLocale: i,
        offset: parseInt(t, 10),
        filters: {
          approximate_member_count: b.sq
        },
        length: parseInt(n, 10)
      })
    } else null != r && r !== F.Hk && _.Z.wait(() => (0, I.uY)(r));
    let u = null !== (t = null === (e = (0, Z.s1)().location.state) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0;
    u > 0 && (null === (n = this._scroller.current) || void 0 === n || n.scrollTo({
      to: u
    })), (0, v.e)("guild_discovery")
  }
  componentDidUpdate(e) {
    let {
      guilds: {
        gamesYouPlay: t,
        featured: n
      },
      isFetching: i,
      mostRecentQuery: s,
      currentHomepageCategoryId: l,
      currentCategoryId: a
    } = this.props;
    if (e.isFetching && !i && b.Zt({
        loadId: this.loadId,
        gamesYouPlayGuilds: t.guilds,
        allGuilds: n.guilds,
        categoryId: l
      }), e.currentCategoryId !== a) {
      var r;
      null === (r = this._scroller.current) || void 0 === r || r.scrollTo({
        to: 0
      })
    }
    e.currentCategoryId !== a && b.Az(this.loadId, Array.from(this._guildIdsSeen)), e.mostRecentQuery.length > 0 && s.length < 1 && l !== a && (0, I.uY)(l)
  }
  componentWillUnmount() {
    let {
      currentCategoryId: e,
      recommendationsLoadId: t,
      recommendationsGuilds: n
    } = this.props;
    e === F.Hk ? null != n && null != t && b.Az(t, this.getOrderedGuildIdsSeen(n.map(e => e.id)), "Game Recommendations") : b.Az(this.loadId, Array.from(this._guildIdsSeen))
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
    } = this.props, l = Object.keys(s), a = e[Y.Lcj.GAMES_YOU_PLAY];
    a.guilds = a.guilds.filter(e => !l.includes(e.id));
    let {
      loadingGuildId: r
    } = this.state;
    return t ? (0, i.jsx)(k.Z, {
      loadId: this.loadId,
      title: z.Z.Messages.GUILD_DISCOVERY_HEADER_GAMES_YOU_PLAY,
      guildsData: a,
      loadingGuildId: r,
      analyticsContext: b.P1.RECOMMENDED,
      onViewGuild: this.handleViewGuild,
      onGuildCardSeen: this.handleGuildCardSeen,
      fetchGuilds: I.gk,
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
      isFetchingSearch: a,
      currentCategoryId: r,
      categories: o,
      currentCategoryName: c
    } = this.props;
    y.w.trackExposure({
      location: "54961b_1"
    });
    let {
      shouldDisplayRecommendedSearchTags: u
    } = y.w.getCurrentConfig({
      location: "54961b_2"
    }, {
      autoTrackExposure: !1
    }), d = u ? r === F.Hk ? z.Z.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER_TAGS : z.Z.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER_TAGS.format({
      categoryName: c
    }) : r === F.Hk ? z.Z.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : z.Z.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
      categoryName: c
    }), E = null !== (t = null === (e = s[n]) || void 0 === e ? void 0 : e[r]) && void 0 !== t ? t : x.xk;
    return (0, i.jsx)(H.Z, {
      loadId: this.loadId,
      searchResults: E,
      mostRecentQuery: n,
      isFetchingSearch: a,
      defaultLanguage: l,
      placeholder: d,
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
      defaultLanguage: a,
      isFetchingSearch: r,
      theme: o,
      currentCategoryId: c,
      currentCategoryName: u
    } = this.props, {
      loadingGuildId: d
    } = this.state, E = c === F.Hk ? z.Z.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : z.Z.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
      categoryName: u
    }), h = null !== (t = null === (e = s[n]) || void 0 === e ? void 0 : e[c]) && void 0 !== t ? t : x.xk;
    return (0, i.jsx)(B.Z, {
      loadId: this.loadId,
      availableLanguages: l,
      defaultLanguage: a,
      placeholder: E,
      isFetchingSearch: r,
      searchResults: h,
      mostRecentQuery: n,
      loadingGuildId: d,
      currentCategoryId: c,
      currentCategoryName: u,
      scroller: this._scroller.current,
      theme: o,
      onViewGuild: this.handleViewGuild,
      onGuildCardSeen: this.handleGuildCardSeen,
      onTagClick: (e, t) => this.handleTagSearch(e, t, b.P1.SEARCH)
    })
  }
  renderRecommendedGuildsSection() {
    let {
      guilds: e,
      theme: t
    } = this.props, {
      loadingGuildId: n
    } = this.state;
    return (0, i.jsx)(k.Z, {
      loadId: this.loadId,
      title: z.Z.Messages.GUILD_DISCOVERY_FEATURED_HEADER,
      guildsData: e.featured,
      analyticsContext: b.P1.POPULAR,
      onViewGuild: this.handleViewGuild,
      onGuildCardSeen: this.handleGuildCardSeen,
      fetchGuilds: () => (0, I.$z)(0, 30),
      loadingGuildId: n,
      theme: t,
      onTagClick: (e, t) => this.handleTagSearch(e, t, b.P1.POPULAR)
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
    return (0, i.jsx)(k.Z, {
      loadId: this.loadId,
      title: z.Z.Messages.GUILD_DISCOVERY_POPULAR_HEADER,
      guildsData: e[n],
      loadingGuildId: s,
      analyticsContext: b.P1.POPULAR,
      onViewGuild: this.handleViewGuild,
      onGuildCardSeen: this.handleGuildCardSeen,
      fetchGuilds: () => (0, I.K5)(n),
      currentCategoryId: n,
      theme: t,
      onTagClick: (e, t) => this.handleTagSearch(e, t, b.P1.POPULAR)
    })
  }
  render() {
    var e, t;
    let {
      currentCategoryName: n,
      mostRecentQuery: l,
      currentCategoryId: r,
      guilds: c
    } = this.props, u = l.length > 0;
    y.w.trackExposure({
      location: "54961b_3"
    });
    let {
      shouldDisplayRecommendedSearchTags: E
    } = y.w.getCurrentConfig({
      location: "54961b_4"
    }, {
      autoTrackExposure: !1
    }), _ = r === F.Hk ? null === (e = c[Y.Lcj.FEATURED]) || void 0 === e ? void 0 : e.guilds : null === (t = c[r]) || void 0 === t ? void 0 : t.guilds;
    if (r === F.U) return (0, i.jsx)(C.Z, {
      loadId: this.loadId
    });
    let I = r === F.Hk ? z.Z.Messages.GUILD_DISCOVERY_HOME_TITLE : z.Z.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({
      categoryName: n
    });
    return (0, i.jsxs)("div", {
      className: W.pageWrapper,
      children: [(0, i.jsx)(N.yY, {
        subsection: u ? l : void 0,
        location: I
      }), (0, i.jsx)("div", {
        className: a()(W.dragRegion, W.pageHeaderDrag, {
          [W.searchPageDrag]: u
        })
      }), d.tq && (0, i.jsx)(D.ZP, {
        children: (0, i.jsx)(s.Fragment, {})
      }), (0, i.jsx)(h.AdvancedScrollerAuto, {
        className: W.scroller,
        ref: this._scroller,
        onScroll: this.handleScroll,
        children: (0, i.jsx)("div", {
          className: a()(W.viewWrapper, {
            [W.searchPage]: u
          }),
          children: u ? this.renderSearchResults() : (0, i.jsxs)(h.HeadingLevel, {
            forceLevel: 1,
            component: (0, i.jsxs)("div", {
              className: W.searchHeader,
              children: [(0, i.jsx)("img", {
                alt: "",
                className: W.headerImage,
                src: q
              }), (0, i.jsx)("div", {
                className: W.headerContentWrapper,
                children: (0, i.jsxs)("div", {
                  className: W.headerContent,
                  children: [(0, i.jsx)(h.Heading, {
                    variant: "heading-xl/semibold",
                    className: W.searchTitle,
                    children: r === F.Hk ? z.Z.Messages.GUILD_DISCOVERY_HOME_TITLE : z.Z.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({
                      categoryName: n
                    })
                  }), (0, i.jsx)(h.Text, {
                    variant: "text-md/normal",
                    className: W.searchSubtitle,
                    children: r === F.Hk && z.Z.Messages.GUILD_DISCOVERY_HOME_SUBTITLE
                  }), this.renderSearchBar(), E && (0, i.jsx)(V.F, {
                    hideOverflow: !0,
                    section: b.P1.HEADER,
                    className: W.headerTagContainer,
                    discoveryTagStyle: V.B.LIGHT,
                    onTagClick: e => this.handleTagSearch(e, void 0, b.P1.HEADER),
                    tags: o().chain(_).flatMap(e => e.keywords).compact().uniq().sampleSize(10).value()
                  })]
                })
              })]
            }),
            children: [(0, i.jsx)("div", {
              className: W.__invalid_featuredBody,
              children: r === F.Hk ? this.renderRecommendedGuildsSection() : this.renderPopularGuildsSection()
            }), (0, i.jsxs)("div", {
              className: W.footer,
              children: [(0, i.jsx)("img", {
                alt: "",
                src: K,
                className: W.footerImage
              }), (0, i.jsx)(h.Heading, {
                variant: "heading-md/semibold",
                children: z.Z.Messages.GUILD_DISCOVERY_CATEGORY_FOOTER_TITLE
              }), (0, i.jsx)(h.Button, {
                look: h.Button.Looks.LINK,
                color: h.Button.Colors.LINK,
                size: h.Button.Sizes.MIN,
                onClick: this.scrollToTop,
                children: z.Z.Messages.GUILD_DISCOVERY_FOOTER_BODY
              })]
            })]
          })
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), Q(this, "_scroller", s.createRef()), Q(this, "_guildIdsSeen", new Set), Q(this, "loadId", (0, j.P)()), Q(this, "state", {
      animatedValue: new u.Z.Value(0),
      loadingGuildId: null
    }), Q(this, "scrollToTop", () => {
      null != this._scroller.current && this._scroller.current.scrollTo({
        to: 0
      })
    }), Q(this, "handleScroll", () => {
      var e, t;
      let {
        animatedValue: n
      } = this.state, i = null !== (t = null === (e = this._scroller.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop) && void 0 !== t ? t : 0;
      n.setValue(Math.min(1, i / 200))
    }), Q(this, "handleViewGuild", async (e, t, n, i) => {
      var s, l;
      let {
        currentCategoryId: a
      } = this.props, {
        loadingGuildId: r
      } = this.state;
      if (e === r) return;
      let o = null !== (l = null === (s = this._scroller.current) || void 0 === s ? void 0 : s.getScrollerState().scrollTop) && void 0 !== l ? l : 0,
        {
          location: c
        } = (0, Z.s1)();
      (0, Z.dL)({
        ...c,
        state: o
      }), this.setState({
        loadingGuildId: e
      });
      let u = a !== F.Hk ? a : null;
      try {
        await b.Lq({
          loadId: null != i ? i : this.loadId,
          guildId: e,
          index: t,
          analyticsContext: n,
          categoryId: u
        })
      } catch (e) {
        this.setState({
          loadingGuildId: null
        })
      }
    }), Q(this, "handleGuildCardSeen", e => {
      this._guildIdsSeen.add(e)
    }), Q(this, "handleTagSearch", (e, t, n) => {
      let {
        currentCategoryId: i,
        defaultLanguage: s
      } = this.props;
      if (null == i) return;
      let l = {
        approximate_member_count: b.sq
      };
      (0, I.G7)(e, l), (0, I.bR)(e, {
        filters: l,
        categoryId: i,
        preferredLocale: s.code,
        offset: 0,
        length: B.D,
        tag: !0
      }), b.j$(this.loadId, i, n, t), this.scrollToTop()
    })
  }
}
let J = E.ZP.connectStores([O.Z, L.default, P.Z, R.Z, x.ZP, G.Z, M.Z], () => {
  var e;
  let t = F.dU,
    n = L.default.locale,
    i = null !== (e = o().find(t, {
      code: n
    })) && void 0 !== e ? e : t[0],
    s = Object.keys(P.Z.applicationStatistics),
    l = R.Z.hasConsented(Y.pjP.PERSONALIZATION) && s.length > 0,
    a = x.ZP.getCurrentCategoryId(),
    r = x.ZP.getCurrentHomepageCategoryId();
  return {
    isFetching: x.ZP.isFetching(),
    isFetchingSearch: x.ZP.isFetchingSearch(),
    guilds: x.ZP.getDiscoverableGuilds(),
    mostRecentQuery: x.ZP.getMostRecentQuery(),
    currentCategoryId: a,
    currentHomepageCategoryId: r,
    currentCategoryName: G.Z.getCategoryName(a),
    categories: G.Z.getDiscoveryCategories(),
    userGuilds: M.Z.getGuilds(),
    theme: O.Z.theme,
    mightHaveGamesYouPlay: l,
    availableLanguages: t,
    defaultLanguage: i
  }
})(X);

function $(e) {
  let {
    searchRoute: t
  } = e, {
    fetching: n,
    loadId: s,
    recommendedGuilds: l
  } = (0, E.cj)([S.Z], () => ({
    recommendedGuilds: S.Z.getRecommendedGuilds(),
    loadId: S.Z.getLoadId(),
    fetching: S.Z.isFetching()
  }));
  return (0, i.jsx)(J, {
    searchRoute: t,
    fetchingRecommendations: n,
    usingGameRecommendations: !1,
    recommendationsGuilds: l,
    recommendationsLoadId: s
  })
}
t.Z = function(e) {
  let {
    searchRoute: t
  } = e, {
    guilds: n
  } = (0, T.C3)({
    location: "guild_discovery",
    includeConverted: !0
  }), s = n.length > 0, {
    clanDiscoveryEnabled: l
  } = (0, T.nk)("guild_discovery"), a = (0, E.e7)([x.ZP], () => x.ZP.getCurrentCategoryId()), r = (0, E.e7)([x.ZP], () => x.ZP.getIsReady()), o = (0, f.Z)(p.Z.QUEST_HOME_PAGE);
  return (s || l) && (!r || a === F.Gj.Clans) ? (0, i.jsx)(w.Z, {}) : o && a === F.Gj.Quests ? (0, i.jsx)(A.Z, {}) : (0, i.jsx)($, {
    searchRoute: t
  })
}