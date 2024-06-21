n(47120);
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(481060),
  r = n(570140),
  o = n(45114),
  c = n(147754),
  u = n(306680),
  d = n(626135),
  h = n(597),
  m = n(99325),
  p = n(866112),
  E = n(273387),
  g = n(683818),
  f = n(102888),
  C = n(65839),
  _ = n(453879),
  I = n(408310),
  x = n(486527),
  T = n(981631),
  N = n(509616);
t.Z = e => {
  var t;
  let {
    channel: Z,
    guild: S
  } = e, {
    currentCategoryId: v,
    directoryEntries: A,
    categoryCounts: M,
    allEntriesCount: R,
    isLoading: j
  } = (0, s.cj)([E.Z], () => {
    let e = E.Z.getCurrentCategoryId(Z.id),
      t = E.Z.getDirectoryEntries(Z.id, e === x.AR.ALL ? null : e),
      n = E.Z.getDirectoryCategoryCounts(Z.id),
      l = E.Z.getDirectoryAllEntriesCount(Z.id);
    return {
      currentCategoryId: e,
      directoryEntries: t,
      categoryCounts: n,
      allEntriesCount: l,
      isLoading: E.Z.isFetching()
    }
  });
  i.useEffect(() => () => {
    let e = u.ZP.lastMessageId(Z.id);
    if (null != e) r.Z.wait(() => {
      (0, o.In)(Z.id, !0, !0, e)
    })
  }, [Z.id]);
  let L = i.useMemo(() => null != A ? (0, _.v)(Object.values(A), v) : null, [A, v]),
    {
      mostRecentQuery: O,
      searchFetching: P,
      searchResults: b
    } = (0, s.cj)([p.Z], () => {
      let {
        mostRecentQuery: e,
        fetching: t
      } = p.Z.getSearchState(Z.id);
      return {
        mostRecentQuery: e,
        searchFetching: t,
        searchResults: p.Z.getSearchResults(Z.id, e)
      }
    }),
    [y, D] = i.useState(O),
    U = "" !== O,
    {
      showHubEventsList: k
    } = c.Z.useExperiment({
      guildId: null !== (t = S.id) && void 0 !== t ? t : "",
      location: "6f7fb0_1"
    }, {
      autoTrackExposure: !1
    });
  i.useEffect(() => {
    m.c$(Z.id), m.YZ(Z.id), k && h.c(Z.id), D(O)
  }, [Z.id]), i.useEffect(() => {
    d.default.track(T.rMx.GUILD_DIRECTORY_CHANNEL_VIEWED, {
      directory_channel_id: Z.id,
      directory_guild_id: S.id,
      primary_category_id: v
    })
  }, [Z.id, S.id, v]);
  let w = (0, g.G)(Z) ? () => {
      (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79764")]).then(n.bind(n, 533202));
        return t => (0, l.jsx)(e, {
          ...t,
          directoryGuildName: S.name,
          directoryGuildId: S.id,
          directoryChannelId: Z.id,
          currentCategoryId: v === x.AR.ALL ? null : v
        })
      })
    } : void 0,
    H = e => {
      0 !== y.trim().length && e.charCode === T.yXg.ENTER && (m.Rq(Z.id, y), d.default.track(T.rMx.GUILD_DIRECTORY_SEARCH, {
        directory_channel_id: Z.id,
        directory_guild_id: S.id
      }))
    },
    B = () => {
      D(""), m.So(Z.id)
    };
  return U ? (0, l.jsx)(I.Z, {
    searchQuery: y,
    setSearchQuery: D,
    mostRecentQuery: O,
    handleSearchKeyPress: H,
    handleClearSearch: B,
    handleCreateOrAddGuild: w,
    searchResults: b,
    searchFetching: P
  }) : null == L && null == v ? (0, l.jsx)("div", {
    className: N.pageContainer,
    children: (0, l.jsx)(a.Spinner, {
      className: N.spinner
    })
  }) : (null == L ? void 0 : L.length) === 0 && null == v ? (0, l.jsx)("div", {
    className: N.pageContainer,
    children: (0, l.jsx)(f.Z, {
      guild: S,
      onAddGuild: w
    })
  }) : (0, l.jsx)(C.Z, {
    channel: Z,
    searchQuery: y,
    setSearchQuery: D,
    handleSearchKeyPress: H,
    handleClearSearch: B,
    handleCreateOrAddGuild: w,
    currentCategoryId: v,
    handleSelectCategory: e => {
      m.Su(Z.id, e)
    },
    directoryEntries: L,
    categoryCounts: M,
    allEntriesCount: R,
    isLoading: j
  })
}