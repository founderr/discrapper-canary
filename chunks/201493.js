n(47120);
var i = n(735250),
    s = n(470079),
    a = n(442837),
    l = n(481060),
    r = n(570140),
    o = n(45114),
    c = n(147754),
    u = n(306680),
    d = n(626135),
    h = n(597),
    m = n(99325),
    p = n(866112),
    _ = n(273387),
    f = n(683818),
    E = n(102888),
    g = n(65839),
    C = n(453879),
    I = n(408310),
    T = n(486527),
    x = n(981631),
    v = n(904151);
t.Z = (e) => {
    var t;
    let { channel: S, guild: N } = e,
        {
            currentCategoryId: A,
            directoryEntries: Z,
            categoryCounts: M,
            allEntriesCount: b,
            isLoading: R
        } = (0, a.cj)([_.Z], () => {
            let e = _.Z.getCurrentCategoryId(S.id),
                t = _.Z.getDirectoryEntries(S.id, e === T.AR.ALL ? null : e),
                n = _.Z.getDirectoryCategoryCounts(S.id),
                i = _.Z.getDirectoryAllEntriesCount(S.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: n,
                allEntriesCount: i,
                isLoading: _.Z.isFetching()
            };
        });
    s.useEffect(
        () => () => {
            let e = u.ZP.lastMessageId(S.id);
            if (null != e)
                r.Z.wait(() => {
                    (0, o.In)(S.id, !0, !0, e);
                });
        },
        [S.id]
    );
    let L = s.useMemo(() => (null != Z ? (0, C.v)(Object.values(Z), A) : null), [Z, A]),
        {
            mostRecentQuery: j,
            searchFetching: O,
            searchResults: P
        } = (0, a.cj)([p.Z], () => {
            let { mostRecentQuery: e, fetching: t } = p.Z.getSearchState(S.id);
            return {
                mostRecentQuery: e,
                searchFetching: t,
                searchResults: p.Z.getSearchResults(S.id, e)
            };
        }),
        [y, D] = s.useState(j),
        k = '' !== j,
        { showHubEventsList: U } = c.Z.useExperiment(
            {
                guildId: null !== (t = N.id) && void 0 !== t ? t : '',
                location: '6f7fb0_1'
            },
            { autoTrackExposure: !1 }
        );
    s.useEffect(() => {
        m.c$(S.id), m.YZ(S.id), U && h.c(S.id), D(j);
    }, [S.id]),
        s.useEffect(() => {
            d.default.track(x.rMx.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: S.id,
                directory_guild_id: N.id,
                primary_category_id: A
            });
        }, [S.id, N.id, A]);
    let w = (0, f.G)(S)
            ? () => {
                  (0, l.openModalLazy)(async () => {
                      let { default: e } = await n.e('79764').then(n.bind(n, 533202));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              directoryGuildName: N.name,
                              directoryGuildId: N.id,
                              directoryChannelId: S.id,
                              currentCategoryId: A === T.AR.ALL ? null : A
                          });
                  });
              }
            : void 0,
        B = (e) => {
            0 !== y.trim().length &&
                e.charCode === x.yXg.ENTER &&
                (m.Rq(S.id, y),
                d.default.track(x.rMx.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: S.id,
                    directory_guild_id: N.id
                }));
        },
        H = () => {
            D(''), m.So(S.id);
        };
    return k
        ? (0, i.jsx)(I.Z, {
              searchQuery: y,
              setSearchQuery: D,
              mostRecentQuery: j,
              handleSearchKeyPress: B,
              handleClearSearch: H,
              handleCreateOrAddGuild: w,
              searchResults: P,
              searchFetching: O
          })
        : null == L && null == A
          ? (0, i.jsx)('div', {
                className: v.pageContainer,
                children: (0, i.jsx)(l.Spinner, { className: v.spinner })
            })
          : (null == L ? void 0 : L.length) === 0 && null == A
            ? (0, i.jsx)('div', {
                  className: v.pageContainer,
                  children: (0, i.jsx)(E.Z, {
                      guild: N,
                      onAddGuild: w
                  })
              })
            : (0, i.jsx)(g.Z, {
                  channel: S,
                  searchQuery: y,
                  setSearchQuery: D,
                  handleSearchKeyPress: B,
                  handleClearSearch: H,
                  handleCreateOrAddGuild: w,
                  currentCategoryId: A,
                  handleSelectCategory: (e) => {
                      m.Su(S.id, e);
                  },
                  directoryEntries: L,
                  categoryCounts: M,
                  allEntriesCount: b,
                  isLoading: R
              });
};
