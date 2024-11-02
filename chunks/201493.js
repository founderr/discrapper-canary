n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(570140),
    o = n(45114),
    c = n(147754),
    u = n(306680),
    d = n(626135),
    h = n(597),
    m = n(99325),
    p = n(866112),
    f = n(273387),
    g = n(683818),
    C = n(102888),
    x = n(65839),
    v = n(453879),
    _ = n(408310),
    I = n(486527),
    E = n(981631),
    b = n(904151);
t.Z = (e) => {
    var t;
    let { channel: S, guild: Z } = e,
        {
            currentCategoryId: T,
            directoryEntries: N,
            categoryCounts: j,
            allEntriesCount: A,
            isLoading: y
        } = (0, r.cj)([f.Z], () => {
            let e = f.Z.getCurrentCategoryId(S.id),
                t = f.Z.getDirectoryEntries(S.id, e === I.AR.ALL ? null : e),
                n = f.Z.getDirectoryCategoryCounts(S.id),
                i = f.Z.getDirectoryAllEntriesCount(S.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: n,
                allEntriesCount: i,
                isLoading: f.Z.isFetching()
            };
        });
    l.useEffect(
        () => () => {
            let e = u.ZP.lastMessageId(S.id);
            if (null != e)
                s.Z.wait(() => {
                    (0, o.In)(S.id, !0, !0, e);
                });
        },
        [S.id]
    );
    let P = l.useMemo(() => (null != N ? (0, v.v)(Object.values(N), T) : null), [N, T]),
        {
            mostRecentQuery: M,
            searchFetching: R,
            searchResults: L
        } = (0, r.cj)([p.Z], () => {
            let { mostRecentQuery: e, fetching: t } = p.Z.getSearchState(S.id);
            return {
                mostRecentQuery: e,
                searchFetching: t,
                searchResults: p.Z.getSearchResults(S.id, e)
            };
        }),
        [k, O] = l.useState(M),
        w = '' !== M,
        { showHubEventsList: D } = c.Z.useExperiment(
            {
                guildId: null !== (t = Z.id) && void 0 !== t ? t : '',
                location: '6f7fb0_1'
            },
            { autoTrackExposure: !1 }
        );
    l.useEffect(() => {
        m.c$(S.id), m.YZ(S.id), D && h.c(S.id), O(M);
    }, [S.id]),
        l.useEffect(() => {
            d.default.track(E.rMx.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: S.id,
                directory_guild_id: Z.id,
                primary_category_id: T
            });
        }, [S.id, Z.id, T]);
    let U = (0, g.G)(S)
            ? () => {
                  (0, a.openModalLazy)(async () => {
                      let { default: e } = await n.e('79764').then(n.bind(n, 533202));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              directoryGuildName: Z.name,
                              directoryGuildId: Z.id,
                              directoryChannelId: S.id,
                              currentCategoryId: T === I.AR.ALL ? null : T
                          });
                  });
              }
            : void 0,
        B = (e) => {
            0 !== k.trim().length &&
                e.charCode === E.yXg.ENTER &&
                (m.Rq(S.id, k),
                d.default.track(E.rMx.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: S.id,
                    directory_guild_id: Z.id
                }));
        },
        H = () => {
            O(''), m.So(S.id);
        };
    return w
        ? (0, i.jsx)(_.Z, {
              searchQuery: k,
              setSearchQuery: O,
              mostRecentQuery: M,
              handleSearchKeyPress: B,
              handleClearSearch: H,
              handleCreateOrAddGuild: U,
              searchResults: L,
              searchFetching: R
          })
        : null == P && null == T
          ? (0, i.jsx)('div', {
                className: b.pageContainer,
                children: (0, i.jsx)(a.Spinner, { className: b.spinner })
            })
          : (null == P ? void 0 : P.length) === 0 && null == T
            ? (0, i.jsx)('div', {
                  className: b.pageContainer,
                  children: (0, i.jsx)(C.Z, {
                      guild: Z,
                      onAddGuild: U
                  })
              })
            : (0, i.jsx)(x.Z, {
                  channel: S,
                  searchQuery: k,
                  setSearchQuery: O,
                  handleSearchKeyPress: B,
                  handleClearSearch: H,
                  handleCreateOrAddGuild: U,
                  currentCategoryId: T,
                  handleSelectCategory: (e) => {
                      m.Su(S.id, e);
                  },
                  directoryEntries: P,
                  categoryCounts: j,
                  allEntriesCount: A,
                  isLoading: y
              });
};
