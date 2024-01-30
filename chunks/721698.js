"use strict";
x.r(t), x.d(t, {
  getEmbedApplication: function() {
    return l
  },
  getApplication: function() {
    return _
  },
  getCategories: function() {
    return f
  },
  getSimilarApplications: function() {
    return I
  },
  search: function() {
    return u
  },
  getCollections: function() {
    return h
  },
  fetchIntegrationApplicationIdsForMyGuilds: function() {
    return w
  }
}), x("222007");
var s = x("981980"),
  a = x("872717"),
  o = x("913144"),
  y = x("915639"),
  d = x("349503"),
  k = x("831109"),
  p = x("810047"),
  e = x("856894"),
  r = x("388647"),
  n = x("506061"),
  m = x("49111");
let c = new Map;
async function l(i) {
  var t;
  let x = Date.now(),
    y = null !== (t = c.get(i)) && void 0 !== t ? t : 0;
  if (d.default.getApplicationFetchState(i) === d.FetchState.FETCHING || d.default.isInvalidApplication(i) || x < y + 6e5) return;
  c.set(i, x), o.default.dispatch({
    type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
    applicationId: i
  });
  let k = new s.default(1e3, 5e3),
    p = (i, t) => 429 === i.status && !!(k.fails < 10) && (k.fail(() => {
      t(void 0, p)
    }), !0);
  try {
    let t = await a.default.get({
        url: m.Endpoints.APPLICATION_DIRECTORY_EMBED_APPLICATION(i),
        backoff: k,
        retries: 10,
        interceptResponse: p
      }),
      x = t.body;
    o.default.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
      application: x
    })
  } catch (t) {
    o.default.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
      applicationId: i,
      isInvalidApplication: !0
    })
  }
}
async function _(i) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    x = Date.now(),
    s = d.default.getApplicationFetchState(i),
    k = d.default.getApplicationLastFetchTime(i),
    {
      dontRefetchMs: p
    } = t;
  if (s !== d.FetchState.FETCHING) {
    if (!(null != k && k + (null != p ? p : 6e5) > x)) {
      o.default.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
        applicationId: i
      });
      try {
        let t = await a.default.get({
          url: m.Endpoints.APPLICATION_DIRECTORY_APPLICATION(i),
          query: {
            locale: y.default.locale
          }
        });
        o.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
          application: t.body
        })
      } catch (t) {
        o.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
          applicationId: i,
          isInvalidApplication: !0
        })
      }
    }
  }
}
async function f() {
  let i = Date.now(),
    t = k.default.getLastFetchTimeMs();
  if (null != t && t + 6e5 > i) return;
  let x = await a.default.get({
    url: m.Endpoints.APPLICATION_DIRECTORY_CATEGORIES,
    query: {
      locale: y.default.locale
    }
  });
  o.default.dispatch({
    type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS",
    categories: x.body
  })
}
async function I(i) {
  var t;
  let {
    applicationId: x,
    guildId: s,
    options: d
  } = i, {
    page: k
  } = null != d ? d : {}, p = Date.now(), e = r.default.getFetchState({
    applicationId: x,
    guildId: s
  }), {
    lastFetchTimeMs: n
  } = null !== (t = r.default.getSimilarApplications({
    applicationId: x,
    guildId: s
  })) && void 0 !== t ? t : {};
  if (e !== r.FetchState.FETCHING) {
    if (null == n || !(n + 6e5 > p)) {
      o.default.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS",
        applicationId: x,
        guildId: s,
        page: k
      });
      try {
        let i = await a.default.get({
          url: m.Endpoints.APPLICATION_DIRECTORY_SIMILAR(x),
          query: {
            guild_id: s,
            page: k,
            locale: y.default.locale
          }
        });
        o.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS",
          applicationId: x,
          guildId: s,
          similarApplications: i.body.applications,
          loadId: i.body.load_id,
          page: k,
          totalPages: i.body.num_pages
        })
      } catch (i) {
        o.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE",
          applicationId: x,
          guildId: s,
          page: k
        })
      }
    }
  }
}
async function u(i) {
  var t;
  let {
    query: x,
    guildId: s,
    options: d,
    onSuccessCallback: k
  } = i, {
    page: p,
    categoryId: r
  } = null != d ? d : {}, n = Date.now(), c = e.default.getFetchState({
    query: x,
    guildId: s,
    page: p,
    categoryId: r
  }), {
    lastFetchTimeMs: l
  } = null !== (t = e.default.getSearchResults({
    query: x,
    guildId: s,
    page: p,
    categoryId: r
  })) && void 0 !== t ? t : {};
  if (c !== e.FetchState.FETCHING) {
    if (null == l || !(l + 6e5 > n)) {
      o.default.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_SEARCH",
        query: x,
        guildId: s,
        page: p,
        categoryId: r
      });
      try {
        let i = await a.default.get({
          url: m.Endpoints.APPLICATION_DIRECTORY_SEARCH,
          query: {
            query: x,
            guild_id: s,
            page: p,
            category_id: r,
            locale: y.default.locale
          }
        });
        o.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS",
          query: x,
          guildId: s,
          page: p,
          categoryId: r,
          result: {
            results: i.body.results,
            countsByCategory: i.body.counts_by_category,
            totalCount: i.body.result_count,
            totalPages: i.body.num_pages,
            type: i.body.type,
            loadId: i.body.load_id
          }
        }), null == k || k(i.body.result_count)
      } catch (i) {
        o.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE",
          query: x,
          guildId: s,
          page: p,
          categoryId: r
        })
      }
    }
  }
}
async function h() {
  let {
    includesInactive: i = !1
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = Date.now(), x = p.default.getFetchState({
    includesInactive: i
  }), s = p.default.getLastFetchTimeMs({
    includesInactive: i
  });
  if (x !== p.FetchState.FETCHING) {
    if (null == s || !(s + 6e5 > t)) {
      o.default.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS",
        includesInactive: i
      });
      try {
        let t = await a.default.get({
          url: m.Endpoints.APPLICATION_DIRECTORY_COLLECTIONS,
          query: {
            includes_inactive: i,
            locale: y.default.locale
          }
        });
        o.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS",
          collections: t.body,
          includesInactive: i
        })
      } catch (t) {
        o.default.dispatch({
          type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE",
          includesInactive: i
        })
      }
    }
  }
}
async function w() {
  let i = Date.now(),
    t = n.default.getFetchState(),
    x = n.default.getLastFetchTimeMs(),
    s = n.default.getNextFetchRetryTimeMs();
  if (t !== n.FetchState.FETCHING && (null == x || !(x + 864e5 > i))) {
    if (null == s || !(i < s)) {
      o.default.dispatch({
        type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS"
      });
      try {
        let i = await a.default.get({
          url: m.Endpoints.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS
        });
        o.default.dispatch({
          type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS",
          guildIdToApplicationIds: i.body
        })
      } catch (t) {
        var y;
        let i = (null == t ? void 0 : t.status) === 429;
        o.default.dispatch({
          type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE",
          retryAfterSeconds: i ? null == t ? void 0 : null === (y = t.body) || void 0 === y ? void 0 : y.retry_after : void 0
        })
      }
    }
  }
}