"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("570140"),
  o = n("45114"),
  u = n("147754"),
  d = n("306680"),
  c = n("626135"),
  f = n("597"),
  h = n("99325"),
  m = n("866112"),
  p = n("273387"),
  E = n("683818"),
  C = n("102888"),
  g = n("65839"),
  S = n("453879"),
  _ = n("408310"),
  T = n("486527"),
  I = n("981631"),
  A = n("479133");
t.default = e => {
  var t;
  let {
    channel: x,
    guild: v
  } = e, {
    currentCategoryId: N,
    directoryEntries: M,
    categoryCounts: R,
    allEntriesCount: y,
    isLoading: L
  } = (0, s.useStateFromStoresObject)([p.default], () => {
    let e = p.default.getCurrentCategoryId(x.id),
      t = p.default.getDirectoryEntries(x.id, e === T.DirectoryEntryCategories.ALL ? null : e),
      n = p.default.getDirectoryCategoryCounts(x.id),
      a = p.default.getDirectoryAllEntriesCount(x.id);
    return {
      currentCategoryId: e,
      directoryEntries: t,
      categoryCounts: n,
      allEntriesCount: a,
      isLoading: p.default.isFetching()
    }
  });
  l.useEffect(() => () => {
    let e = d.default.lastMessageId(x.id);
    null != e && r.default.wait(() => {
      (0, o.ack)(x.id, !0, !0, e)
    })
  }, [x.id]);
  let j = l.useMemo(() => null != M ? (0, S.generateDirectoryRows)(Object.values(M), N) : null, [M, N]),
    {
      mostRecentQuery: O,
      searchFetching: P,
      searchResults: D
    } = (0, s.useStateFromStoresObject)([m.default], () => {
      let {
        mostRecentQuery: e,
        fetching: t
      } = m.default.getSearchState(x.id);
      return {
        mostRecentQuery: e,
        searchFetching: t,
        searchResults: m.default.getSearchResults(x.id, e)
      }
    }),
    [b, U] = l.useState(O),
    F = "" !== O,
    {
      showHubEventsList: w
    } = u.default.useExperiment({
      guildId: null !== (t = v.id) && void 0 !== t ? t : "",
      location: "6f7fb0_1"
    }, {
      autoTrackExposure: !1
    });
  l.useEffect(() => {
    h.fetchDirectoryEntries(x.id), h.fetchDirectoryCounts(x.id), w && f.fetchDirectoryEntries(x.id), U(O)
  }, [x.id]), l.useEffect(() => {
    c.default.track(I.AnalyticEvents.GUILD_DIRECTORY_CHANNEL_VIEWED, {
      directory_channel_id: x.id,
      directory_guild_id: v.id,
      primary_category_id: N
    })
  }, [x.id, v.id, N]);
  let k = (0, E.useCanCreateOrAddGuildInDirectory)(x) ? () => {
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79764")]).then(n.bind(n, "533202"));
        return t => (0, a.jsx)(e, {
          ...t,
          directoryGuildName: v.name,
          directoryGuildId: v.id,
          directoryChannelId: x.id,
          currentCategoryId: N === T.DirectoryEntryCategories.ALL ? null : N
        })
      })
    } : void 0,
    H = e => {
      0 !== b.trim().length && e.charCode === I.KeyboardKeys.ENTER && (h.searchDirectoryEntries(x.id, b), c.default.track(I.AnalyticEvents.GUILD_DIRECTORY_SEARCH, {
        directory_channel_id: x.id,
        directory_guild_id: v.id
      }))
    },
    G = () => {
      U(""), h.clearDirectorySearch(x.id)
    };
  return F ? (0, a.jsx)(_.default, {
    searchQuery: b,
    setSearchQuery: U,
    mostRecentQuery: O,
    handleSearchKeyPress: H,
    handleClearSearch: G,
    handleCreateOrAddGuild: k,
    searchResults: D,
    searchFetching: P
  }) : null == j && null == N ? (0, a.jsx)("div", {
    className: A.pageContainer,
    children: (0, a.jsx)(i.Spinner, {
      className: A.spinner
    })
  }) : (null == j ? void 0 : j.length) === 0 && null == N ? (0, a.jsx)("div", {
    className: A.pageContainer,
    children: (0, a.jsx)(C.default, {
      guild: v,
      onAddGuild: k
    })
  }) : (0, a.jsx)(g.default, {
    channel: x,
    searchQuery: b,
    setSearchQuery: U,
    handleSearchKeyPress: H,
    handleClearSearch: G,
    handleCreateOrAddGuild: k,
    currentCategoryId: N,
    handleSelectCategory: e => {
      h.selectDirectoryCategory(x.id, e)
    },
    directoryEntries: j,
    categoryCounts: R,
    allEntriesCount: y,
    isLoading: L
  })
}