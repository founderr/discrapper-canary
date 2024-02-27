"use strict";
n.r(t), n.d(t, {
  fetchDirectoryEntries: function() {
    return f
  },
  fetchDirectoryCounts: function() {
    return h
  },
  addDirectoryGuildEntry: function() {
    return m
  },
  removeDirectoryGuildEntry: function() {
    return p
  },
  searchDirectoryEntries: function() {
    return E
  },
  clearDirectorySearch: function() {
    return g
  },
  updateDirectoryEntry: function() {
    return S
  },
  selectDirectoryCategory: function() {
    return C
  },
  fetchGuildEntriesForIds: function() {
    return _
  }
});
var l = n("483366"),
  a = n.n(l),
  s = n("759843"),
  i = n("872717"),
  r = n("913144"),
  u = n("840707"),
  o = n("393467"),
  d = n("730647"),
  c = n("49111");
let f = a(async (e, t) => {
    try {
      r.default.dispatch({
        type: "GUILD_DIRECTORY_FETCH_START"
      });
      let n = await i.default.get({
        url: c.Endpoints.DIRECTORY_CHANNEL_ENTRIES(e),
        query: {
          category_id: t
        }
      });
      r.default.dispatch({
        type: "GUILD_DIRECTORY_FETCH_SUCCESS",
        channelId: e,
        entries: n.body
      })
    } catch (e) {
      r.default.dispatch({
        type: "GUILD_DIRECTORY_FETCH_FAILURE"
      })
    }
  }, 200),
  h = a(async e => {
    try {
      let t = await i.default.get({
        url: c.Endpoints.DIRECTORY_CHANNEL_CATEGORY_COUNTS(e)
      });
      r.default.dispatch({
        type: "GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS",
        channelId: e,
        counts: t.body
      })
    } catch (e) {}
  }, 200);
async function m(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.DirectoryEntryCategories.UNCATEGORIZED,
    a = await u.default.post({
      url: c.Endpoints.DIRECTORY_CHANNEL_ENTRY(e, t),
      body: {
        description: n,
        primary_category_id: l
      },
      trackedActionData: {
        event: s.NetworkActionNames.DIRECTORY_GUILD_ENTRY_CREATE,
        properties: {
          directory_channel_id: e,
          guild_id: t,
          primary_category_id: l
        }
      }
    });
  r.default.dispatch({
    type: "GUILD_DIRECTORY_ENTRY_CREATE",
    channelId: e,
    entry: a.body
  })
}

function p(e, t) {
  u.default.delete({
    url: c.Endpoints.DIRECTORY_CHANNEL_ENTRY(e, t),
    trackedActionData: {
      event: s.NetworkActionNames.DIRECTORY_GUILD_ENTRY_DELETE,
      properties: {
        directory_channel_id: e,
        guild_id: t
      }
    }
  }), r.default.dispatch({
    type: "GUILD_DIRECTORY_ENTRY_DELETE",
    channelId: e,
    guildId: t
  })
}
let E = a(async (e, t) => {
    let n = o.default.shouldFetch(e, t);
    if (!n) {
      r.default.dispatch({
        type: "GUILD_DIRECTORY_CACHED_SEARCH",
        channelId: e,
        query: t
      });
      return
    }
    try {
      r.default.dispatch({
        type: "GUILD_DIRECTORY_SEARCH_START",
        channelId: e,
        query: t
      });
      let n = await i.default.get({
        url: c.Endpoints.DIRECTORY_ENTRIES_SEARCH(e),
        query: {
          query: t
        }
      });
      r.default.dispatch({
        type: "GUILD_DIRECTORY_SEARCH_SUCCESS",
        channelId: e,
        query: t,
        results: n.body
      })
    } catch (e) {
      r.default.dispatch({
        type: "GUILD_DIRECTORY_FETCH_FAILURE"
      })
    }
  }, 200),
  g = e => {
    r.default.dispatch({
      type: "GUILD_DIRECTORY_SEARCH_CLEAR",
      channelId: e
    })
  },
  S = async function(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.DirectoryEntryCategories.UNCATEGORIZED,
      a = await i.default.patch({
        url: c.Endpoints.DIRECTORY_CHANNEL_ENTRY(e, t),
        body: {
          description: n,
          primary_category_id: l
        }
      });
    r.default.dispatch({
      type: "GUILD_DIRECTORY_ENTRY_UPDATE",
      channelId: e,
      entry: a.body
    })
  }, C = (e, t) => {
    r.default.dispatch({
      type: "GUILD_DIRECTORY_CATEGORY_SELECT",
      channelId: e,
      categoryId: t
    })
  }, _ = async (e, t) => {
    try {
      let n = await i.default.get({
        url: c.Endpoints.DIRECTORY_CHANNEL_LIST_BY_ID(e),
        query: {
          entity_ids: t
        }
      });
      r.default.dispatch({
        type: "GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS",
        channelId: e,
        entries: n.body
      })
    } catch (e) {}
  }