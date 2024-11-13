n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
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
    let { channel: Z, guild: N } = e,
        {
            currentCategoryId: S,
            directoryEntries: T,
            categoryCounts: j,
            allEntriesCount: A,
            isLoading: y
        } = (0, a.cj)([f.Z], () => {
            let e = f.Z.getCurrentCategoryId(Z.id),
                t = f.Z.getDirectoryEntries(Z.id, e === I.AR.ALL ? null : e),
                n = f.Z.getDirectoryCategoryCounts(Z.id),
                i = f.Z.getDirectoryAllEntriesCount(Z.id);
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
            let e = d.ZP.lastMessageId(Z.id);
            if (null != e)
                s.Z.wait(() => {
                    (0, o.In)(Z.id, !0, !0, e);
                });
        },
        [Z.id]
    );
    let P = l.useMemo(() => (null != T ? (0, v.v)(Object.values(T), S) : null), [T, S]),
        {
            mostRecentQuery: M,
            searchFetching: L,
            searchResults: R
        } = (0, a.cj)([m.Z], () => {
            let { mostRecentQuery: e, fetching: t } = m.Z.getSearchState(Z.id);
            return {
                mostRecentQuery: e,
                searchFetching: t,
                searchResults: m.Z.getSearchResults(Z.id, e)
            };
        }),
        [k, O] = l.useState(M),
        D = '' !== M,
        { showHubEventsList: w } = c.Z.useExperiment(
            {
                guildId: null !== (t = N.id) && void 0 !== t ? t : '',
                location: '6f7fb0_1'
            },
            { autoTrackExposure: !1 }
        );
    l.useEffect(() => {
        p.c$(Z.id), p.YZ(Z.id), w && h.c(Z.id), O(M);
    }, [Z.id]),
        l.useEffect(() => {
            u.default.track(E.rMx.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: Z.id,
                directory_guild_id: N.id,
                primary_category_id: S
            });
        }, [Z.id, N.id, S]);
    let B = (0, g.G)(Z)
            ? () => {
                  (0, r.openModalLazy)(async () => {
                      let { default: e } = await n.e('79764').then(n.bind(n, 533202));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              directoryGuildName: N.name,
                              directoryGuildId: N.id,
                              directoryChannelId: Z.id,
                              currentCategoryId: S === I.AR.ALL ? null : S
                          });
                  });
              }
            : void 0,
        U = (e) => {
            0 !== k.trim().length &&
                e.charCode === E.yXg.ENTER &&
                (p.Rq(Z.id, k),
                u.default.track(E.rMx.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: Z.id,
                    directory_guild_id: N.id
                }));
        },
        H = () => {
            O(''), p.So(Z.id);
        };
    return D
        ? (0, i.jsx)(_.Z, {
              searchQuery: k,
              setSearchQuery: O,
              mostRecentQuery: M,
              handleSearchKeyPress: U,
              handleClearSearch: H,
              handleCreateOrAddGuild: B,
              searchResults: R,
              searchFetching: L
          })
        : null == P && null == S
          ? (0, i.jsx)('div', {
                className: b.pageContainer,
                children: (0, i.jsx)(r.Spinner, { className: b.spinner })
            })
          : (null == P ? void 0 : P.length) === 0 && null == S
            ? (0, i.jsx)('div', {
                  className: b.pageContainer,
                  children: (0, i.jsx)(C.Z, {
                      guild: N,
                      onAddGuild: B
                  })
              })
            : (0, i.jsx)(x.Z, {
                  channel: Z,
                  searchQuery: k,
                  setSearchQuery: O,
                  handleSearchKeyPress: U,
                  handleClearSearch: H,
                  handleCreateOrAddGuild: B,
                  currentCategoryId: S,
                  handleSelectCategory: (e) => {
                      p.Su(Z.id, e);
                  },
                  directoryEntries: P,
                  categoryCounts: j,
                  allEntriesCount: A,
                  isLoading: y
              });
};
