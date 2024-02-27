"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("913144"),
  u = n("267363"),
  o = n("27978"),
  d = n("660478"),
  c = n("599110"),
  f = n("15433"),
  h = n("71102"),
  m = n("393467"),
  p = n("209397"),
  E = n("187163"),
  g = n("132615"),
  S = n("663685"),
  C = n("516056"),
  _ = n("30176"),
  I = n("730647"),
  T = n("49111"),
  v = n("794260"),
  x = e => {
    var t;
    let {
      channel: x,
      guild: N
    } = e, {
      currentCategoryId: A,
      directoryEntries: M,
      categoryCounts: R,
      allEntriesCount: j,
      isLoading: L
    } = (0, s.useStateFromStoresObject)([p.default], () => {
      let e = p.default.getCurrentCategoryId(x.id),
        t = p.default.getDirectoryEntries(x.id, e === I.DirectoryEntryCategories.ALL ? null : e),
        n = p.default.getDirectoryCategoryCounts(x.id),
        l = p.default.getDirectoryAllEntriesCount(x.id),
        a = p.default.isFetching();
      return {
        currentCategoryId: e,
        directoryEntries: t,
        categoryCounts: n,
        allEntriesCount: l,
        isLoading: a
      }
    });
    a.useEffect(() => () => {
      let e = d.default.lastMessageId(x.id);
      null != e && r.default.wait(() => {
        (0, u.ack)(x.id, !0, !0, e)
      })
    }, [x.id]);
    let y = a.useMemo(() => null != M ? (0, C.generateDirectoryRows)(Object.values(M), A) : null, [M, A]),
      {
        mostRecentQuery: O,
        searchFetching: P,
        searchResults: b
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
      [D, U] = a.useState(O),
      w = "" !== O,
      {
        showHubEventsList: F
      } = o.default.useExperiment({
        guildId: null !== (t = N.id) && void 0 !== t ? t : "",
        location: "6f7fb0_1"
      }, {
        autoTrackExposure: !1
      });
    a.useEffect(() => {
      h.fetchDirectoryEntries(x.id), h.fetchDirectoryCounts(x.id), F && f.fetchDirectoryEntries(x.id), U(O)
    }, [x.id]), a.useEffect(() => {
      c.default.track(T.AnalyticEvents.GUILD_DIRECTORY_CHANNEL_VIEWED, {
        directory_channel_id: x.id,
        directory_guild_id: N.id,
        primary_category_id: A
      })
    }, [x.id, N.id, A]);
    let k = (0, E.useCanCreateOrAddGuildInDirectory)(x),
      B = k ? () => {
        (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("467085").then(n.bind(n, "467085"));
          return t => (0, l.jsx)(e, {
            ...t,
            directoryGuildName: N.name,
            directoryGuildId: N.id,
            directoryChannelId: x.id,
            currentCategoryId: A === I.DirectoryEntryCategories.ALL ? null : A
          })
        })
      } : void 0,
      V = e => {
        0 !== D.trim().length && e.charCode === T.KeyboardKeys.ENTER && (h.searchDirectoryEntries(x.id, D), c.default.track(T.AnalyticEvents.GUILD_DIRECTORY_SEARCH, {
          directory_channel_id: x.id,
          directory_guild_id: N.id
        }))
      },
      G = () => {
        U(""), h.clearDirectorySearch(x.id)
      };
    return w ? (0, l.jsx)(_.default, {
      searchQuery: D,
      setSearchQuery: U,
      mostRecentQuery: O,
      handleSearchKeyPress: V,
      handleClearSearch: G,
      handleCreateOrAddGuild: B,
      searchResults: b,
      searchFetching: P
    }) : null == y && null == A ? (0, l.jsx)("div", {
      className: v.pageContainer,
      children: (0, l.jsx)(i.Spinner, {
        className: v.spinner
      })
    }) : (null == y ? void 0 : y.length) === 0 && null == A ? (0, l.jsx)("div", {
      className: v.pageContainer,
      children: (0, l.jsx)(g.default, {
        guild: N,
        onAddGuild: B
      })
    }) : (0, l.jsx)(S.default, {
      channel: x,
      searchQuery: D,
      setSearchQuery: U,
      handleSearchKeyPress: V,
      handleClearSearch: G,
      handleCreateOrAddGuild: B,
      currentCategoryId: A,
      handleSelectCategory: e => {
        h.selectDirectoryCategory(x.id, e)
      },
      directoryEntries: y,
      categoryCounts: R,
      allEntriesCount: j,
      isLoading: L
    })
  }