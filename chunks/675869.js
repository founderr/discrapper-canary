"use strict";
a.r(t), a.d(t, {
  default: function() {
    return M
  }
}), a("610138"), a("216116"), a("78328"), a("815648"), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("392711"),
  i = a.n(s),
  r = a("991637"),
  c = a.n(r),
  u = a("613828"),
  o = a("924826"),
  d = a("209173"),
  m = a("375051"),
  g = a("399606"),
  p = a("481060"),
  _ = a("209613"),
  f = a("626135"),
  h = a("674588"),
  C = a("463571"),
  R = a("894653"),
  I = a("809547"),
  x = a("738130"),
  A = a("34674"),
  T = a("465082"),
  E = a("33146"),
  v = a("125909"),
  P = a("190733"),
  S = a("101741"),
  N = a("132871"),
  y = a("147890"),
  j = a("166996"),
  O = a("981631"),
  D = a("341101"),
  L = a("878428");

function M() {
  var e;
  let t;
  let a = (0, N.useApplicationDirectoryHistory)(e => e.guildId),
    s = (0, g.useStateFromStores)([R.default], () => R.default.getCategories()),
    r = (0, u.useLocation)(),
    {
      queryParam: c,
      pageParam: o,
      categoryIdParam: p
    } = n.useMemo(() => {
      let e = new URLSearchParams(r.search);
      return {
        queryParam: e.get("q"),
        pageParam: e.get("page"),
        categoryIdParam: e.get("category_id")
      }
    }, []),
    [_, C] = n.useState(null != o ? Number(o) : 1),
    [T, M] = n.useState(null != c ? c : ""),
    [Y, H] = n.useState(null !== (e = Number(p)) && void 0 !== e ? e : A.ALL_CATEGORY_ID),
    k = n.useMemo(() => null == s ? void 0 : s.find(e => e.id === Y), [s, Y]),
    U = n.useCallback(e => {
      H(e.id), C(1)
    }, []),
    F = n.useCallback(e => {
      M(e), C(1), 0 === e.length && H(A.ALL_CATEGORY_ID)
    }, []),
    w = n.useCallback(e => {
      var t, a;
      let {
        query: l,
        categoryId: n,
        page: s
      } = e, i = new URLSearchParams(r.search);
      "" === l ? i.delete("q") : i.set("q", l), n === A.ALL_CATEGORY_ID ? i.delete("category_id") : i.set("category_id", null !== (t = null == n ? void 0 : n.toString()) && void 0 !== t ? t : ""), 1 === s ? i.delete("page") : i.set("page", null !== (a = null == s ? void 0 : s.toString()) && void 0 !== a ? a : ""), (0, y.replaceAppDirectoryURLWith)("".concat(O.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(i.toString()))
    }, [r.search]),
    G = n.useMemo(() => i().debounce(w, 400), [w]);
  n.useEffect(() => {
    G({
      query: T,
      categoryId: Y,
      page: _
    })
  }, [G, T, Y, _]);
  let B = (0, g.useStateFromStores)([I.default], () => I.default.getFetchState({
      query: T,
      guildId: a,
      page: _,
      categoryId: Y
    })),
    V = n.useRef({
      query: "",
      guildId: void 0,
      page: void 0,
      categoryId: void 0
    }),
    z = (0, g.useStateFromStoresObject)([I.default], () => {
      let e = I.default.getSearchResults({
        query: T,
        guildId: a
      });
      return null != e ? {
        [A.ALL_CATEGORY_ID]: e.totalCount,
        ...e.countsByCategory
      } : {}
    }),
    {
      pageResults: K,
      pageCount: q,
      searchResultsType: W,
      loadId: J
    } = (0, g.useStateFromStoresObject)([I.default], () => {
      var e, t;
      let l = {
          query: T,
          guildId: a,
          page: _,
          categoryId: Y
        },
        n = I.default.getSearchResults(l);
      return null == n ? n = I.default.getSearchResults(V.current) : V.current = l, {
        pageResults: null == n ? void 0 : n.results,
        pageCount: null !== (e = null == n ? void 0 : n.totalPages) && void 0 !== e ? e : 0,
        searchResultsType: null !== (t = null == n ? void 0 : n.type) && void 0 !== t ? t : m.ApplicationDirectorySearchType.SEARCH_RESULTS,
        loadId: null == n ? void 0 : n.loadId
      }
    }),
    Q = n.useMemo(() => null == K ? void 0 : K.filter(e => !(W === m.ApplicationDirectorySearchType.SEARCH_RESULTS && e.type !== d.ApplicationDirectorySearchResultType.APPLICATION)), [K, W]),
    X = n.useRef(null),
    Z = (0, N.getCurrentView)(),
    $ = n.useCallback(e => {
      f.default.track(O.AnalyticEvents.APP_DIRECTORY_SEARCHED, {
        search_term: T,
        num_results: e,
        current_page: null == Z ? void 0 : Z.type,
        result_page: _,
        category: null == k ? void 0 : k.name,
        category_id: null == k ? void 0 : k.id,
        guild_id: a
      })
    }, [null == k ? void 0 : k.id, null == k ? void 0 : k.name, _, a, T, Z]),
    ee = n.useCallback(e => {
      let {
        query: t,
        page: a,
        activeCategoryId: l,
        onSuccessCallback: n,
        guildId: s,
        fetchCounts: i
      } = e;
      i && h.search({
        query: t,
        guildId: s
      }), h.search({
        query: t,
        guildId: s,
        options: {
          page: a,
          categoryId: l
        },
        onSuccessCallback: n
      }), X.current = t
    }, []),
    [et] = n.useState(() => i().debounce(ee, 400, {
      leading: !1,
      trailing: !0
    })),
    ea = n.useCallback(e => {
      C(e)
    }, [C]),
    el = n.useCallback(e => {
      let {
        application: t,
        mutualGuilds: l
      } = e;
      f.default.track(O.AnalyticEvents.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
        current_page: N.ApplicationDirectoryViews.SEARCH,
        application_id: t.id,
        load_id: J,
        search_term: T,
        guild_id: a,
        shown_mutual_guilds_count: l.length
      }), (0, y.goToApplication)({
        applicationId: t.id
      })
    }, [J, T, a]);
  n.useEffect(() => {
    ee({
      query: T,
      page: _,
      activeCategoryId: Y,
      guildId: a,
      fetchCounts: T !== X.current,
      onSuccessCallback: $
    })
  }, [ee, k, a, _]), n.useEffect(() => {
    et({
      query: T,
      page: _,
      activeCategoryId: Y,
      guildId: a,
      fetchCounts: T !== X.current,
      onSuccessCallback: $
    })
  }, [T, et]);
  let en = n.useMemo(() => Object.keys(z).length > 0, [z]);
  return null != Q && 0 === q || B === I.FetchState.ERROR ? t = (0, l.jsx)(E.default, {
    category: k,
    onViewAll: () => {
      C(1), H(A.ALL_CATEGORY_ID)
    }
  }) : null != Q && Q.length > 0 && W === m.ApplicationDirectorySearchType.SEARCH_RESULTS ? t = (0, l.jsx)(b, {
    items: Q,
    pageCount: q,
    currentPage: _,
    showPrimaryCategory: Y === A.ALL_CATEGORY_ID,
    onItemClick: el,
    onChangePage: ea
  }) : null != Q && Q.length > 0 && W === m.ApplicationDirectorySearchType.MUSIC && (t = (0, l.jsx)(S.default, {
    guildId: a,
    results: Q
  })), (0, l.jsx)(x.default, {
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
          countsByCategory: en ? z : void 0,
          currentCategoryId: Y,
          onView: U
        })]
      }), (0, l.jsxs)("div", {
        className: D.content,
        children: [(0, l.jsx)(P.default, {
          query: T,
          onChange: F
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

function b(e) {
  let {
    items: t,
    currentPage: a,
    pageCount: s,
    showPrimaryCategory: i,
    onItemClick: r,
    onChangePage: c
  } = e, u = (0, _.default)("application-directory-search");
  return (0, l.jsxs)(n.Fragment, {
    children: [(0, l.jsx)(o.ListNavigatorProvider, {
      navigator: u,
      children: (0, l.jsx)(o.ListNavigatorContainer, {
        children: e => {
          let {
            ref: a,
            ...n
          } = e;
          return (0, l.jsx)("ul", {
            ref: a,
            ...n,
            children: t.map(e => {
              if (e.type === d.ApplicationDirectorySearchResultType.APPLICATION) {
                var t;
                let a;
                let n = e.data;
                return (null === (t = n.directory_entry) || void 0 === t ? void 0 : t.short_description) != null && n.directory_entry.short_description.length > 0 ? a = n.directory_entry.short_description : null != n.description && n.description.length > 0 && (a = n.description), (0, l.jsx)(C.default, {
                  href: O.Routes.APPLICATION_DIRECTORY_PROFILE(n.id),
                  children: (0, l.jsx)(T.default, {
                    className: D.listing,
                    childrenClassName: D.listingDetails,
                    application: n,
                    onView: e => {
                      let {
                        mutualGuilds: t
                      } = e;
                      return r({
                        application: n,
                        mutualGuilds: t
                      })
                    },
                    showMutualGuilds: !0,
                    showPrimaryCategory: i,
                    source: "search",
                    children: null != a ? (0, l.jsx)(p.Text, {
                      className: D.listingDescription,
                      variant: "text-md/normal",
                      lineClamp: 3,
                      children: a
                    }) : null
                  })
                }, n.id)
              }
            })
          })
        }
      })
    }), (0, l.jsx)(p.Paginator, {
      currentPage: a,
      totalCount: Math.min(7 * s, 700),
      pageSize: 7,
      onPageChange: c,
      disablePaginationGap: !0
    })]
  })
}
c().shim()