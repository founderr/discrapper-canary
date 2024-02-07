"use strict";
n.r(e), n.d(e, {
  getEmbedApplication: function() {
    return S
  },
  getApplication: function() {
    return T
  },
  getCategories: function() {
    return h
  },
  getSimilarApplications: function() {
    return _
  },
  search: function() {
    return E
  },
  getCollections: function() {
    return C
  },
  fetchIntegrationApplicationIdsForMyGuilds: function() {
    return A
  }
}), n("222007");
var i = n("981980"),
  l = n("872717"),
  a = n("913144"),
  r = n("915639"),
  u = n("349503"),
  s = n("831109"),
  o = n("810047"),
  c = n("856894"),
  d = n("388647"),
  f = n("506061"),
  p = n("49111");
let I = new Map;
async function S(t) {
  var e;
  let n = Date.now(),
    r = null !== (e = I.get(t)) && void 0 !== e ? e : 0;
  if (u.default.getApplicationFetchState(t) === u.FetchState.FETCHING || u.default.isInvalidApplication(t) || n < r + 6e5) return;
  I.set(t, n), a.default.dispatch({
    type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
    applicationId: t
  });
  let s = new i.default(1e3, 5e3),
    o = (t, e) => 429 === t.status && !!(s.fails < 10) && (s.fail(() => {
      e(void 0, o)
    }), !0);
  try {
    let e = await l.default.get({
        url: p.Endpoints.APPLICATION_DIRECTORY_EMBED_APPLICATION(t),
        backoff: s,
        retries: 10,
        interceptResponse: o
      }),
      n = e.body;
    a.default.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
      application: n
    })
  } catch (e) {
    a.default.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
      applicationId: t,
      isInvalidApplication: !0
    })
  }
}
async function T(t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = Date.now(),
    i = u.default.getApplicationFetchState(t),
    s = u.default.getApplicationLastFetchTime(t),
    {
      dontRefetchMs: o
    } = e;
  if (i !== u.FetchState.FETCHING) {
    if (!(null != s && s + (null != o ? o : 6e5) > n)) {
      a.default.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
        applicationId: t
      });
      try {
        let e = await l.default.get({
          url: p.Endpoints.APPLICATION_DIRECTORY_APPLICATION(t),
          query: {
            locale: r.default.locale
          }
        });
        a.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
          application: e.body
        })
      } catch (e) {
        a.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
          applicationId: t,
          isInvalidApplication: !0
        })
      }
    }
  }
}
async function h() {
  let t = Date.now(),
    e = s.default.getLastFetchTimeMs();
  if (null != e && e + 6e5 > t) return;
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
async function _(t) {
  var e;
  let {
    applicationId: n,
    guildId: i,
    options: u
  } = t, {
    page: s
  } = null != u ? u : {}, o = Date.now(), c = d.default.getFetchState({
    applicationId: n,
    guildId: i
  }), {
    lastFetchTimeMs: f
  } = null !== (e = d.default.getSimilarApplications({
    applicationId: n,
    guildId: i
  })) && void 0 !== e ? e : {};
  if (c !== d.FetchState.FETCHING) {
    if (null == f || !(f + 6e5 > o)) {
      a.default.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS",
        applicationId: n,
        guildId: i,
        page: s
      });
      try {
        let t = await l.default.get({
          url: p.Endpoints.APPLICATION_DIRECTORY_SIMILAR(n),
          query: {
            guild_id: i,
            page: s,
            locale: r.default.locale
          }
        });
        a.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS",
          applicationId: n,
          guildId: i,
          similarApplications: t.body.applications,
          loadId: t.body.load_id,
          page: s,
          totalPages: t.body.num_pages
        })
      } catch (t) {
        a.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE",
          applicationId: n,
          guildId: i,
          page: s
        })
      }
    }
  }
}
async function E(t) {
  var e;
  let {
    query: n,
    guildId: i,
    options: u,
    onSuccessCallback: s
  } = t, {
    page: o,
    categoryId: d
  } = null != u ? u : {}, f = Date.now(), I = c.default.getFetchState({
    query: n,
    guildId: i,
    page: o,
    categoryId: d
  }), {
    lastFetchTimeMs: S
  } = null !== (e = c.default.getSearchResults({
    query: n,
    guildId: i,
    page: o,
    categoryId: d
  })) && void 0 !== e ? e : {};
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
        let t = await l.default.get({
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
            results: t.body.results,
            countsByCategory: t.body.counts_by_category,
            totalCount: t.body.result_count,
            totalPages: t.body.num_pages,
            type: t.body.type,
            loadId: t.body.load_id
          }
        }), null == s || s(t.body.result_count)
      } catch (t) {
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
async function C() {
  let {
    includesInactive: t = !1
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = Date.now(), n = o.default.getFetchState({
    includesInactive: t
  }), i = o.default.getLastFetchTimeMs({
    includesInactive: t
  });
  if (n !== o.FetchState.FETCHING) {
    if (null == i || !(i + 6e5 > e)) {
      a.default.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS",
        includesInactive: t
      });
      try {
        let e = await l.default.get({
          url: p.Endpoints.APPLICATION_DIRECTORY_COLLECTIONS,
          query: {
            includes_inactive: t,
            locale: r.default.locale
          }
        });
        a.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS",
          collections: e.body,
          includesInactive: t
        })
      } catch (e) {
        a.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE",
          includesInactive: t
        })
      }
    }
  }
}
async function A() {
  let t = Date.now(),
    e = f.default.getFetchState(),
    n = f.default.getLastFetchTimeMs(),
    i = f.default.getNextFetchRetryTimeMs();
  if (e !== f.FetchState.FETCHING && (null == n || !(n + 864e5 > t))) {
    if (null == i || !(t < i)) {
      a.default.dispatch({
        type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS"
      });
      try {
        let t = await l.default.get({
          url: p.Endpoints.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS
        });
        a.default.dispatch({
          type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS",
          guildIdToApplicationIds: t.body
        })
      } catch (e) {
        var r;
        let t = (null == e ? void 0 : e.status) === 429;
        a.default.dispatch({
          type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE",
          retryAfterSeconds: t ? null == e ? void 0 : null === (r = e.body) || void 0 === r ? void 0 : r.retry_after : void 0
        })
      }
    }
  }
}