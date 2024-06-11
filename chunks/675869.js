"use strict";
a.r(t), a.d(t, {
  default: function() {
    return M
  }
}), a("610138"), a("216116"), a("78328"), a("815648"), a("47120");
var l = a("735250"),
  i = a("470079"),
  n = a("392711"),
  s = a.n(n),
  r = a("991637"),
  c = a.n(r),
  u = a("613828"),
  d = a("924826"),
  o = a("209173"),
  g = a("375051"),
  m = a("399606"),
  _ = a("481060"),
  p = a("209613"),
  C = a("626135"),
  h = a("674588"),
  f = a("463571"),
  A = a("894653"),
  I = a("809547"),
  R = a("738130"),
  T = a("34674"),
  x = a("465082"),
  E = a("33146"),
  v = a("125909"),
  S = a("190733"),
  P = a("101741"),
  y = a("132871"),
  N = a("147890"),
  j = a("166996"),
  O = a("981631"),
  D = a("341101"),
  L = a("878428");

function M() {
  var e;
  let t;
  let a = (0, y.useApplicationDirectoryHistory)(e => e.guildId),
    n = (0, m.useStateFromStores)([A.default], () => A.default.getCategories()),
    r = (0, u.useLocation)(),
    {
      queryParam: c,
      pageParam: d,
      categoryIdParam: _
    } = i.useMemo(() => {
      let e = new URLSearchParams(r.search);
      return {
        queryParam: e.get("q"),
        pageParam: e.get("page"),
        categoryIdParam: e.get("category_id")
      }
    }, []),
    [p, f] = i.useState(null != d ? Number(d) : 1),
    [x, M] = i.useState(null != c ? c : ""),
    [b, H] = i.useState(null !== (e = Number(_)) && void 0 !== e ? e : T.ALL_CATEGORY_ID),
    k = i.useMemo(() => null == n ? void 0 : n.find(e => e.id === b), [n, b]),
    U = i.useCallback(e => {
      H(e.id), f(1)
    }, []),
    G = i.useCallback(e => {
      M(e), f(1), 0 === e.length && H(T.ALL_CATEGORY_ID)
    }, []),
    F = i.useCallback(e => {
      var t, a;
      let {
        query: l,
        categoryId: i,
        page: n
      } = e, s = new URLSearchParams(r.search);
      "" === l ? s.delete("q") : s.set("q", l), i === T.ALL_CATEGORY_ID ? s.delete("category_id") : s.set("category_id", null !== (t = null == i ? void 0 : i.toString()) && void 0 !== t ? t : ""), 1 === n ? s.delete("page") : s.set("page", null !== (a = null == n ? void 0 : n.toString()) && void 0 !== a ? a : ""), (0, N.replaceAppDirectoryURLWith)("".concat(O.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(s.toString()))
    }, [r.search]),
    w = i.useMemo(() => s().debounce(F, 400), [F]);
  i.useEffect(() => {
    w({
      query: x,
      categoryId: b,
      page: p
    })
  }, [w, x, b, p]);
  let B = (0, m.useStateFromStores)([I.default], () => I.default.getFetchState({
      query: x,
      guildId: a,
      page: p,
      categoryId: b
    })),
    V = i.useRef({
      query: "",
      guildId: void 0,
      page: void 0,
      categoryId: void 0
    }),
    z = (0, m.useStateFromStoresObject)([I.default], () => {
      let e = I.default.getSearchResults({
        query: x,
        guildId: a
      });
      return null != e ? {
        [T.ALL_CATEGORY_ID]: e.totalCount,
        ...e.countsByCategory
      } : {}
    }),
    {
      pageResults: K,
      pageCount: q,
      searchResultsType: W,
      loadId: J
    } = (0, m.useStateFromStoresObject)([I.default], () => {
      var e, t;
      let l = {
          query: x,
          guildId: a,
          page: p,
          categoryId: b
        },
        i = I.default.getSearchResults(l);
      return null == i ? i = I.default.getSearchResults(V.current) : V.current = l, {
        pageResults: null == i ? void 0 : i.results,
        pageCount: null !== (e = null == i ? void 0 : i.totalPages) && void 0 !== e ? e : 0,
        searchResultsType: null !== (t = null == i ? void 0 : i.type) && void 0 !== t ? t : g.ApplicationDirectorySearchType.SEARCH_RESULTS,
        loadId: null == i ? void 0 : i.loadId
      }
    }),
    Q = i.useMemo(() => null == K ? void 0 : K.filter(e => !(W === g.ApplicationDirectorySearchType.SEARCH_RESULTS && e.type !== o.ApplicationDirectorySearchResultType.APPLICATION)), [K, W]),
    X = i.useRef(null),
    Z = (0, y.getCurrentView)(),
    $ = i.useCallback(e => {
      C.default.track(O.AnalyticEvents.APP_DIRECTORY_SEARCHED, {
        search_term: x,
        num_results: e,
        current_page: null == Z ? void 0 : Z.type,
        result_page: p,
        category: null == k ? void 0 : k.name,
        category_id: null == k ? void 0 : k.id,
        guild_id: a
      })
    }, [null == k ? void 0 : k.id, null == k ? void 0 : k.name, p, a, x, Z]),
    ee = i.useCallback(e => {
      let {
        query: t,
        page: a,
        activeCategoryId: l,
        onSuccessCallback: i,
        guildId: n,
        fetchCounts: s
      } = e;
      s && h.search({
        query: t,
        guildId: n
      }), h.search({
        query: t,
        guildId: n,
        options: {
          page: a,
          categoryId: l
        },
        onSuccessCallback: i
      }), X.current = t
    }, []),
    [et] = i.useState(() => s().debounce(ee, 400, {
      leading: !1,
      trailing: !0
    })),
    ea = i.useCallback(e => {
      f(e)
    }, [f]),
    el = i.useCallback(e => {
      let {
        application: t,
        mutualGuilds: l
      } = e;
      C.default.track(O.AnalyticEvents.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
        current_page: y.ApplicationDirectoryViews.SEARCH,
        application_id: t.id,
        load_id: J,
        search_term: x,
        guild_id: a,
        shown_mutual_guilds_count: l.length
      }), (0, N.goToApplication)({
        applicationId: t.id
      })
    }, [J, x, a]);
  i.useEffect(() => {
    ee({
      query: x,
      page: p,
      activeCategoryId: b,
      guildId: a,
      fetchCounts: x !== X.current,
      onSuccessCallback: $
    })
  }, [ee, k, a, p]), i.useEffect(() => {
    et({
      query: x,
      page: p,
      activeCategoryId: b,
      guildId: a,
      fetchCounts: x !== X.current,
      onSuccessCallback: $
    })
  }, [x, et]);
  let ei = i.useMemo(() => Object.keys(z).length > 0, [z]);
  return null != Q && 0 === q || B === I.FetchState.ERROR ? t = (0, l.jsx)(E.default, {
    category: k,
    onViewAll: () => {
      f(1), H(T.ALL_CATEGORY_ID)
    }
  }) : null != Q && Q.length > 0 && W === g.ApplicationDirectorySearchType.SEARCH_RESULTS ? t = (0, l.jsx)(Y, {
    items: Q,
    pageCount: q,
    currentPage: p,
    showPrimaryCategory: b === T.ALL_CATEGORY_ID,
    onItemClick: el,
    onChangePage: ea
  }) : null != Q && Q.length > 0 && W === g.ApplicationDirectorySearchType.MUSIC && (t = (0, l.jsx)(P.default, {
    guildId: a,
    results: Q
  })), (0, l.jsx)(R.default, {
    children: (0, l.jsxs)("div", {
      className: D.page,
      children: [(0, l.jsxs)("div", {
        className: D.sidebar,
        children: [(0, l.jsx)("img", {
          src: L,
          alt: "",
          className: D.sidebarImage
        }), (0, l.jsx)(j.default, {
          className: D.categoryList,
          countsByCategory: ei ? z : void 0,
          currentCategoryId: b,
          onView: U
        })]
      }), (0, l.jsxs)("div", {
        className: D.content,
        children: [(0, l.jsx)(S.default, {
          query: x,
          onChange: G
        }), (0, l.jsx)(v.default, {
          loading: B === I.FetchState.FETCHING,
          children: (0, l.jsx)("div", {
            className: D.contentContainer,
            children: t
          })
        })]
      })]
    })
  })
}

function Y(e) {
  let {
    items: t,
    currentPage: a,
    pageCount: n,
    showPrimaryCategory: s,
    onItemClick: r,
    onChangePage: c
  } = e, u = (0, p.default)("application-directory-search");
  return (0, l.jsxs)(i.Fragment, {
    children: [(0, l.jsx)(d.ListNavigatorProvider, {
      navigator: u,
      children: (0, l.jsx)(d.ListNavigatorContainer, {
        children: e => {
          let {
            ref: a,
            ...i
          } = e;
          return (0, l.jsx)("ul", {
            ref: a,
            ...i,
            children: t.map(e => {
              if (e.type === o.ApplicationDirectorySearchResultType.APPLICATION) {
                var t;
                let a;
                let i = e.data;
                return (null === (t = i.directory_entry) || void 0 === t ? void 0 : t.short_description) != null && i.directory_entry.short_description.length > 0 ? a = i.directory_entry.short_description : null != i.description && i.description.length > 0 && (a = i.description), (0, l.jsx)(f.default, {
                  href: O.Routes.APPLICATION_DIRECTORY_PROFILE(i.id),
                  children: (0, l.jsx)(x.default, {
                    className: D.listing,
                    childrenClassName: D.listingDetails,
                    application: i,
                    onView: e => {
                      let {
                        mutualGuilds: t
                      } = e;
                      return r({
                        application: i,
                        mutualGuilds: t
                      })
                    },
                    showMutualGuilds: !0,
                    showPrimaryCategory: s,
                    source: "search",
                    children: null != a ? (0, l.jsx)(_.Text, {
                      className: D.listingDescription,
                      variant: "text-md/normal",
                      lineClamp: 3,
                      children: a
                    }) : null
                  })
                }, i.id)
              }
            })
          })
        }
      })
    }), (0, l.jsx)(_.Paginator, {
      currentPage: a,
      totalCount: Math.min(7 * n, 700),
      pageSize: 7,
      onPageChange: c,
      disablePaginationGap: !0
    })]
  })
}
c().shim()