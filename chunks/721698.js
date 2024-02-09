"use strict";
n.r(t), n.d(t, {
  getEmbedApplication: function() {
    return S
  },
  getApplication: function() {
    return h
  },
  getCategories: function() {
    return _
  },
  getSimilarApplications: function() {
    return T
  },
  search: function() {
    return C
  },
  getCollections: function() {
    return E
  },
  fetchIntegrationApplicationIdsForMyGuilds: function() {
    return A
  }
}), n("222007");
var i = n("981980"),
  l = n("872717"),
  a = n("913144"),
  r = n("915639"),
  s = n("349503"),
  u = n("831109"),
  o = n("810047"),
  c = n("856894"),
  d = n("388647"),
  f = n("506061"),
  p = n("49111");
let I = new Map;
async function S(e) {
  var t;
  let n = Date.now(),
    r = null !== (t = I.get(e)) && void 0 !== t ? t : 0;
  if (s.default.getApplicationFetchState(e) === s.FetchState.FETCHING || s.default.isInvalidApplication(e) || n < r + 6e5) return;
  I.set(e, n), a.default.dispatch({
    type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
    applicationId: e
  });
  let u = new i.default(1e3, 5e3),
    o = (e, t) => 429 === e.status && !!(u.fails < 10) && (u.fail(() => {
      t(void 0, o)
    }), !0);
  try {
    let t = await l.default.get({
        url: p.Endpoints.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
        backoff: u,
        retries: 10,
        interceptResponse: o
      }),
      n = t.body;
    a.default.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
      application: n
    })
  } catch (t) {
    a.default.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
      applicationId: e,
      isInvalidApplication: !0
    })
  }
}
async function h(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = Date.now(),
    i = s.default.getApplicationFetchState(e),
    u = s.default.getApplicationLastFetchTime(e),
    {
      dontRefetchMs: o
    } = t;
  if (i !== s.FetchState.FETCHING) {
    if (!(null != u && u + (null != o ? o : 6e5) > n)) {
      a.default.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
        applicationId: e
      });
      try {
        let t = await l.default.get({
          url: p.Endpoints.APPLICATION_DIRECTORY_APPLICATION(e),
          query: {
            locale: r.default.locale
          }
        });
        a.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
          application: t.body
        })
      } catch (t) {
        a.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
          applicationId: e,
          isInvalidApplication: !0
        })
      }
    }
  }
}
async function _() {
  let e = Date.now(),
    t = u.default.getLastFetchTimeMs();
  if (null != t && t + 6e5 > e) return;
  let n = await l.default.get({
    url: p.Endpoints.APPLICATION_DIRECTORY_CATEGORIES,
    query: {
      locale: r.default.locale
    }
  });
  a.default.dispatch({
    type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS",
    categories: n.body
  })
}
async function T(e) {
  var t;
  let {
    applicationId: n,
    guildId: i,
    options: s
  } = e, {
    page: u
  } = null != s ? s : {}, o = Date.now(), c = d.default.getFetchState({
    applicationId: n,
    guildId: i
  }), {
    lastFetchTimeMs: f
  } = null !== (t = d.default.getSimilarApplications({
    applicationId: n,
    guildId: i
  })) && void 0 !== t ? t : {};
  if (c !== d.FetchState.FETCHING) {
    if (null == f || !(f + 6e5 > o)) {
      a.default.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS",
        applicationId: n,
        guildId: i,
        page: u
      });
      try {
        let e = await l.default.get({
          url: p.Endpoints.APPLICATION_DIRECTORY_SIMILAR(n),
          query: {
            guild_id: i,
            page: u,
            locale: r.default.locale
          }
        });
        a.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS",
          applicationId: n,
          guildId: i,
          similarApplications: e.body.applications,
          loadId: e.body.load_id,
          page: u,
          totalPages: e.body.num_pages
        })
      } catch (e) {
        a.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE",
          applicationId: n,
          guildId: i,
          page: u
        })
      }
    }
  }
}
async function C(e) {
  var t;
  let {
    query: n,
    guildId: i,
    options: s,
    onSuccessCallback: u
  } = e, {
    page: o,
    categoryId: d
  } = null != s ? s : {}, f = Date.now(), I = c.default.getFetchState({
    query: n,
    guildId: i,
    page: o,
    categoryId: d
  }), {
    lastFetchTimeMs: S
  } = null !== (t = c.default.getSearchResults({
    query: n,
    guildId: i,
    page: o,
    categoryId: d
  })) && void 0 !== t ? t : {};
  if (I !== c.FetchState.FETCHING) {
    if (null == S || !(S + 6e5 > f)) {
      a.default.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_SEARCH",
        query: n,
        guildId: i,
        page: o,
        categoryId: d
      });
      try {
        let e = await l.default.get({
          url: p.Endpoints.APPLICATION_DIRECTORY_SEARCH,
          query: {
            query: n,
            guild_id: i,
            page: o,
            category_id: d,
            locale: r.default.locale
          }
        });
        a.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS",
          query: n,
          guildId: i,
          page: o,
          categoryId: d,
          result: {
            results: e.body.results,
            countsByCategory: e.body.counts_by_category,
            totalCount: e.body.result_count,
            totalPages: e.body.num_pages,
            type: e.body.type,
            loadId: e.body.load_id
          }
        }), null == u || u(e.body.result_count)
      } catch (e) {
        a.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE",
          query: n,
          guildId: i,
          page: o,
          categoryId: d
        })
      }
    }
  }
}
async function E() {
  let {
    includesInactive: e = !1
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = Date.now(), n = o.default.getFetchState({
    includesInactive: e
  }), i = o.default.getLastFetchTimeMs({
    includesInactive: e
  });
  if (n !== o.FetchState.FETCHING) {
    if (null == i || !(i + 6e5 > t)) {
      a.default.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS",
        includesInactive: e
      });
      try {
        let t = await l.default.get({
          url: p.Endpoints.APPLICATION_DIRECTORY_COLLECTIONS,
          query: {
            includes_inactive: e,
            locale: r.default.locale
          }
        });
        a.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS",
          collections: t.body,
          includesInactive: e
        })
      } catch (t) {
        a.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE",
          includesInactive: e
        })
      }
    }
  }
}
async function A() {
  let e = Date.now(),
    t = f.default.getFetchState(),
    n = f.default.getLastFetchTimeMs(),
    i = f.default.getNextFetchRetryTimeMs();
  if (t !== f.FetchState.FETCHING && (null == n || !(n + 864e5 > e))) {
    if (null == i || !(e < i)) {
      a.default.dispatch({
        type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS"
      });
      try {
        let e = await l.default.get({
          url: p.Endpoints.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS
        });
        a.default.dispatch({
          type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS",
          guildIdToApplicationIds: e.body
        })
      } catch (t) {
        var r;
        let e = (null == t ? void 0 : t.status) === 429;
        a.default.dispatch({
          type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE",
          retryAfterSeconds: e ? null == t ? void 0 : null === (r = t.body) || void 0 === r ? void 0 : r.retry_after : void 0
        })
      }
    }
  }
}