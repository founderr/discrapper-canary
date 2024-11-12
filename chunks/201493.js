n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(570140),
    o = n(45114),
    c = n(147754),
    d = n(306680),
    u = n(626135),
    h = n(597),
    p = n(99325),
    m = n(866112),
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
    let { channel: N, guild: Z } = e,
        {
            currentCategoryId: S,
            directoryEntries: T,
            categoryCounts: j,
            allEntriesCount: A,
            isLoading: y
        } = (0, r.cj)([f.Z], () => {
            let e = f.Z.getCurrentCategoryId(N.id),
                t = f.Z.getDirectoryEntries(N.id, e === I.AR.ALL ? null : e),
                n = f.Z.getDirectoryCategoryCounts(N.id),
                i = f.Z.getDirectoryAllEntriesCount(N.id);
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
            let e = d.ZP.lastMessageId(N.id);
            if (null != e)
                s.Z.wait(() => {
                    (0, o.In)(N.id, !0, !0, e);
                });
        },
        [N.id]
    );
    let P = l.useMemo(() => (null != T ? (0, v.v)(Object.values(T), S) : null), [T, S]),
        {
            mostRecentQuery: M,
            searchFetching: R,
            searchResults: L
        } = (0, r.cj)([m.Z], () => {
            let { mostRecentQuery: e, fetching: t } = m.Z.getSearchState(N.id);
            return {
                mostRecentQuery: e,
                searchFetching: t,
                searchResults: m.Z.getSearchResults(N.id, e)
            };
        }),
        [k, O] = l.useState(M),
        D = '' !== M,
        { showHubEventsList: w } = c.Z.useExperiment(
            {
                guildId: null !== (t = Z.id) && void 0 !== t ? t : '',
                location: '6f7fb0_1'
            },
            { autoTrackExposure: !1 }
        );
    l.useEffect(() => {
        p.c$(N.id), p.YZ(N.id), w && h.c(N.id), O(M);
    }, [N.id]),
        l.useEffect(() => {
            u.default.track(E.rMx.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: N.id,
                directory_guild_id: Z.id,
                primary_category_id: S
            });
        }, [N.id, Z.id, S]);
    let B = (0, g.G)(N)
            ? () => {
                  (0, a.openModalLazy)(async () => {
                      let { default: e } = await n.e('79764').then(n.bind(n, 533202));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              directoryGuildName: Z.name,
                              directoryGuildId: Z.id,
                              directoryChannelId: N.id,
                              currentCategoryId: S === I.AR.ALL ? null : S
                          });
                  });
              }
            : void 0,
        U = (e) => {
            0 !== k.trim().length &&
                e.charCode === E.yXg.ENTER &&
                (p.Rq(N.id, k),
                u.default.track(E.rMx.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: N.id,
                    directory_guild_id: Z.id
                }));
        },
        H = () => {
            O(''), p.So(N.id);
        };
    return D
        ? (0, i.jsx)(_.Z, {
              searchQuery: k,
              setSearchQuery: O,
              mostRecentQuery: M,
              handleSearchKeyPress: U,
              handleClearSearch: H,
              handleCreateOrAddGuild: B,
              searchResults: L,
              searchFetching: R
          })
        : null == P && null == S
          ? (0, i.jsx)('div', {
                className: b.pageContainer,
                children: (0, i.jsx)(a.Spinner, { className: b.spinner })
            })
          : (null == P ? void 0 : P.length) === 0 && null == S
            ? (0, i.jsx)('div', {
                  className: b.pageContainer,
                  children: (0, i.jsx)(C.Z, {
                      guild: Z,
                      onAddGuild: B
                  })
              })
            : (0, i.jsx)(x.Z, {
                  channel: N,
                  searchQuery: k,
                  setSearchQuery: O,
                  handleSearchKeyPress: U,
                  handleClearSearch: H,
                  handleCreateOrAddGuild: B,
                  currentCategoryId: S,
                  handleSelectCategory: (e) => {
                      p.Su(N.id, e);
                  },
                  directoryEntries: P,
                  categoryCounts: j,
                  allEntriesCount: A,
                  isLoading: y
              });
};
