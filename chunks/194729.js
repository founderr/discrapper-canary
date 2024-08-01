n(390547), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(392711),
  o = n.n(l),
  c = n(664751),
  d = n(748780),
  u = n(873546),
  _ = n(442837),
  h = n(481060),
  E = n(570140),
  I = n(212093),
  m = n(827837),
  g = n(785570),
  p = n(963202),
  T = n(252618),
  S = n(440190),
  f = n(665149),
  C = n(5955),
  N = n(121711),
  A = n(709158),
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
  k = n(584885),
  w = n(59222),
  B = n(749436),
  H = n(26580),
  V = n(731455),
  F = n(981631),
  Y = n(46140),
  W = n(689938),
  z = n(468918),
  K = n(368179),
  q = n(52518);

function Q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class X extends s.PureComponent {
  componentDidMount() {
var e, t, n;
let {
  isFetching: i,
  guilds: {
    gamesYouPlay: s,
    featured: a
  },
  searchRoute: r,
  currentHomepageCategoryId: l,
  mostRecentQuery: o
} = this.props;
if ((0, m.N)(), (0, j.le)(), null == x.ZP.getSearchIndex() && (0, I.Ue)(), E.Z.wait(() => {
    (0, g.M)(F.x8Z.SERVER_DISCOVERY_BADGE);
  }), !i && 0 === o.length && M.Zt({
    loadId: this.loadId,
    gamesYouPlayGuilds: s.guilds,
    allGuilds: a.guilds,
    categoryId: l
  }), null != r) {
  let {
    query: e,
    offset: t,
    limit: n,
    preferredLocale: i,
    categoryId: s
  } = c.parse(r);
  (0, I.bR)(e, {
    categoryId: parseInt(s, 10),
    preferredLocale: i,
    offset: parseInt(t, 10),
    filters: {
      approximate_member_count: M.sq
    },
    length: parseInt(n, 10)
  });
} else
  null != l && l !== V.Hk && E.Z.wait(() => (0, I.uY)(l));
let d = null !== (t = null === (e = (0, v.s1)().location.state) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0;
d > 0 && (null === (n = this._scroller.current) || void 0 === n || n.scrollTo({
  to: d
})), (0, Z.e)('guild_discovery');
  }
  componentDidUpdate(e) {
let {
  guilds: {
    gamesYouPlay: t,
    featured: n
  },
  isFetching: i,
  mostRecentQuery: s,
  currentHomepageCategoryId: a,
  currentCategoryId: r
} = this.props;
if (e.isFetching && !i && M.Zt({
    loadId: this.loadId,
    gamesYouPlayGuilds: t.guilds,
    allGuilds: n.guilds,
    categoryId: a
  }), e.currentCategoryId !== r) {
  var l;
  null === (l = this._scroller.current) || void 0 === l || l.scrollTo({
    to: 0
  });
}
e.currentCategoryId !== r && M.Az(this.loadId, Array.from(this._guildIdsSeen)), e.mostRecentQuery.length > 0 && s.length < 1 && a !== r && (0, I.uY)(a);
  }
  componentWillUnmount() {
let {
  currentCategoryId: e,
  recommendationsLoadId: t,
  recommendationsGuilds: n
} = this.props;
e === V.Hk ? null != n && null != t && M.Az(t, this.getOrderedGuildIdsSeen(n.map(e => e.id)), 'Game Recommendations') : M.Az(this.loadId, Array.from(this._guildIdsSeen));
  }
  getOrderedGuildIdsSeen(e) {
return e.filter(e => this._guildIdsSeen.has(e));
  }
  renderGamesYouPlay() {
let {
  guilds: e,
  mightHaveGamesYouPlay: t,
  theme: n,
  userGuilds: s
} = this.props, a = Object.keys(s), r = e[F.Lcj.GAMES_YOU_PLAY];
r.guilds = r.guilds.filter(e => !a.includes(e.id));
let {
  loadingGuildId: l
} = this.state;
return t ? (0, i.jsx)(k.Z, {
  loadId: this.loadId,
  title: W.Z.Messages.GUILD_DISCOVERY_HEADER_GAMES_YOU_PLAY,
  guildsData: r,
  loadingGuildId: l,
  analyticsContext: M.P1.RECOMMENDED,
  onViewGuild: this.handleViewGuild,
  onGuildCardSeen: this.handleGuildCardSeen,
  fetchGuilds: I.gk,
  theme: n
}) : null;
  }
  renderSearchBar() {
var e, t;
let {
  mostRecentQuery: n,
  guilds: {
    search: s
  },
  defaultLanguage: a,
  isFetchingSearch: r,
  currentCategoryId: l,
  categories: o,
  currentCategoryName: c
} = this.props;
D.w.trackExposure({
  location: '54961b_1'
});
let {
  shouldDisplayRecommendedSearchTags: d
} = D.w.getCurrentConfig({
  location: '54961b_2'
}, {
  autoTrackExposure: !1
}), u = d ? l === V.Hk ? W.Z.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER_TAGS : W.Z.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER_TAGS.format({
  categoryName: c
}) : l === V.Hk ? W.Z.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : W.Z.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
  categoryName: c
}), _ = null !== (t = null === (e = s[n]) || void 0 === e ? void 0 : e[l]) && void 0 !== t ? t : x.xk;
return (0, i.jsx)(B.Z, {
  loadId: this.loadId,
  searchResults: _,
  mostRecentQuery: n,
  isFetchingSearch: r,
  defaultLanguage: a,
  placeholder: u,
  currentCategoryId: l,
  categories: o
});
  }
  renderSearchResults() {
var e, t;
let {
  mostRecentQuery: n,
  guilds: {
    search: s
  },
  availableLanguages: a,
  defaultLanguage: r,
  isFetchingSearch: l,
  theme: o,
  currentCategoryId: c,
  currentCategoryName: d
} = this.props, {
  loadingGuildId: u
} = this.state, _ = c === V.Hk ? W.Z.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : W.Z.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
  categoryName: d
}), h = null !== (t = null === (e = s[n]) || void 0 === e ? void 0 : e[c]) && void 0 !== t ? t : x.xk;
return (0, i.jsx)(w.Z, {
  loadId: this.loadId,
  availableLanguages: a,
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
let {
  guilds: e,
  theme: t
} = this.props, {
  loadingGuildId: n
} = this.state;
return (0, i.jsx)(k.Z, {
  loadId: this.loadId,
  title: W.Z.Messages.GUILD_DISCOVERY_FEATURED_HEADER,
  guildsData: e.featured,
  analyticsContext: M.P1.POPULAR,
  onViewGuild: this.handleViewGuild,
  onGuildCardSeen: this.handleGuildCardSeen,
  fetchGuilds: () => (0, I.$z)(0, 30),
  loadingGuildId: n,
  theme: t,
  onTagClick: (e, t) => this.handleTagSearch(e, t, M.P1.POPULAR)
});
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
  title: W.Z.Messages.GUILD_DISCOVERY_POPULAR_HEADER,
  guildsData: e[n],
  loadingGuildId: s,
  analyticsContext: M.P1.POPULAR,
  onViewGuild: this.handleViewGuild,
  onGuildCardSeen: this.handleGuildCardSeen,
  fetchGuilds: () => (0, I.K5)(n),
  currentCategoryId: n,
  theme: t,
  onTagClick: (e, t) => this.handleTagSearch(e, t, M.P1.POPULAR)
});
  }
  render() {
var e, t;
let {
  currentCategoryName: n,
  mostRecentQuery: a,
  currentCategoryId: l,
  guilds: c
} = this.props, d = a.length > 0;
D.w.trackExposure({
  location: '54961b_3'
});
let {
  shouldDisplayRecommendedSearchTags: _
} = D.w.getCurrentConfig({
  location: '54961b_4'
}, {
  autoTrackExposure: !1
}), E = l === V.Hk ? null === (e = c[F.Lcj.FEATURED]) || void 0 === e ? void 0 : e.guilds : null === (t = c[l]) || void 0 === t ? void 0 : t.guilds;
if (l === V.U)
  return (0, i.jsx)(C.Z, {
    loadId: this.loadId
  });
let I = l === V.Hk ? W.Z.Messages.GUILD_DISCOVERY_HOME_TITLE : W.Z.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({
  categoryName: n
});
return (0, i.jsxs)('div', {
  className: z.pageWrapper,
  children: [
    (0, i.jsx)(T.yY, {
      subsection: d ? a : void 0,
      location: I
    }),
    (0, i.jsx)('div', {
      className: r()(z.dragRegion, z.pageHeaderDrag, {
        [z.searchPageDrag]: d
      })
    }),
    u.tq && (0, i.jsx)(f.ZP, {
      children: (0, i.jsx)(s.Fragment, {})
    }),
    (0, i.jsx)(h.AdvancedScrollerAuto, {
      className: z.scroller,
      ref: this._scroller,
      onScroll: this.handleScroll,
      children: (0, i.jsx)('div', {
        className: r()(z.viewWrapper, {
          [z.searchPage]: d
        }),
        children: d ? this.renderSearchResults() : (0, i.jsxs)(h.HeadingLevel, {
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
                      children: l === V.Hk ? W.Z.Messages.GUILD_DISCOVERY_HOME_TITLE : W.Z.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({
                        categoryName: n
                      })
                    }),
                    (0, i.jsx)(h.Text, {
                      variant: 'text-md/normal',
                      className: z.searchSubtitle,
                      children: l === V.Hk && W.Z.Messages.GUILD_DISCOVERY_HOME_SUBTITLE
                    }),
                    this.renderSearchBar(),
                    _ && (0, i.jsx)(H.F, {
                      hideOverflow: !0,
                      section: M.P1.HEADER,
                      className: z.headerTagContainer,
                      discoveryTagStyle: H.B.LIGHT,
                      onTagClick: e => this.handleTagSearch(e, void 0, M.P1.HEADER),
                      tags: o().chain(E).flatMap(e => e.keywords).compact().uniq().sampleSize(10).value()
                    })
                  ]
                })
              })
            ]
          }),
          children: [
            (0, i.jsx)('div', {
              className: z.__invalid_featuredBody,
              children: l === V.Hk ? this.renderRecommendedGuildsSection() : this.renderPopularGuildsSection()
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
super(...e), Q(this, '_scroller', s.createRef()), Q(this, '_guildIdsSeen', new Set()), Q(this, 'loadId', (0, y.P)()), Q(this, 'state', {
  animatedValue: new d.Z.Value(0),
  loadingGuildId: null
}), Q(this, 'scrollToTop', () => {
  null != this._scroller.current && this._scroller.current.scrollTo({
    to: 0
  });
}), Q(this, 'handleScroll', () => {
  var e, t;
  let {
    animatedValue: n
  } = this.state, i = null !== (t = null === (e = this._scroller.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop) && void 0 !== t ? t : 0;
  n.setValue(Math.min(1, i / 200));
}), Q(this, 'handleViewGuild', async (e, t, n, i) => {
  var s, a;
  let {
    currentCategoryId: r
  } = this.props, {
    loadingGuildId: l
  } = this.state;
  if (e === l)
    return;
  let o = null !== (a = null === (s = this._scroller.current) || void 0 === s ? void 0 : s.getScrollerState().scrollTop) && void 0 !== a ? a : 0,
    {
      location: c
    } = (0, v.s1)();
  (0, v.dL)({
    ...c,
    state: o
  }), this.setState({
    loadingGuildId: e
  });
  let d = r !== V.Hk ? r : null;
  try {
    await M.Lq({
      loadId: null != i ? i : this.loadId,
      guildId: e,
      index: t,
      analyticsContext: n,
      categoryId: d
    });
  } catch (e) {
    this.setState({
      loadingGuildId: null
    });
  }
}), Q(this, 'handleGuildCardSeen', e => {
  this._guildIdsSeen.add(e);
}), Q(this, 'handleTagSearch', (e, t, n) => {
  let {
    currentCategoryId: i,
    defaultLanguage: s
  } = this.props;
  if (null == i)
    return;
  let a = {
    approximate_member_count: M.sq
  };
  (0, I.G7)(e, a), (0, I.bR)(e, {
    filters: a,
    categoryId: i,
    preferredLocale: s.code,
    offset: 0,
    length: w.D,
    tag: !0
  }), M.j$(this.loadId, i, n, t), this.scrollToTop();
});
  }
}
let J = _.ZP.connectStores([
  O.Z,
  L.default,
  P.Z,
  R.Z,
  x.ZP,
  U.Z,
  b.Z
], () => {
  var e;
  let t = V.dU,
n = L.default.locale,
i = null !== (e = o().find(t, {
  code: n
})) && void 0 !== e ? e : t[0],
s = Object.keys(P.Z.applicationStatistics),
a = R.Z.hasConsented(F.pjP.PERSONALIZATION) && s.length > 0,
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
mightHaveGamesYouPlay: a,
availableLanguages: t,
defaultLanguage: i
  };
})(X);

function $(e) {
  let {
searchRoute: t
  } = e, {
fetching: n,
loadId: s,
recommendedGuilds: a
  } = (0, _.cj)([S.Z], () => ({
recommendedGuilds: S.Z.getRecommendedGuilds(),
loadId: S.Z.getLoadId(),
fetching: S.Z.isFetching()
  }));
  return (0, i.jsx)(J, {
searchRoute: t,
fetchingRecommendations: n,
usingGameRecommendations: !1,
recommendationsGuilds: a,
recommendationsLoadId: s
  });
}
t.Z = function(e) {
  let {
searchRoute: t
  } = e, {
guilds: n
  } = (0, p.C3)({
location: 'guild_discovery',
includeConverted: !0
  }), s = n.length > 0, {
clanDiscoveryEnabled: a
  } = (0, p.nk)('guild_discovery'), r = (0, _.e7)([x.ZP], () => x.ZP.getCurrentCategoryId()), l = (0, _.e7)([x.ZP], () => x.ZP.getIsReady()), o = (0, A.Z)(Y.dr.QUEST_HOME_DESKTOP);
  return (s || a) && (!l || r === V.Gj.Clans) ? (0, i.jsx)(G.Z, {}) : o && r === V.Gj.Quests ? (0, i.jsx)(N.Z, {}) : (0, i.jsx)($, {
searchRoute: t
  });
};