a.r(n), a.d(n, {
  default: function() {
    return D
  }
}), a(610138), a(216116), a(78328), a(815648), a(47120);
var t = a(735250),
  i = a(470079),
  l = a(392711),
  s = a.n(l),
  r = a(991637),
  c = a.n(r),
  o = a(266067),
  d = a(91192),
  u = a(209173),
  g = a(375051),
  m = a(399606),
  _ = a(481060),
  C = a(209613),
  h = a(626135),
  p = a(674588),
  x = a(463571),
  I = a(894653),
  R = a(809547),
  T = a(738130),
  A = a(34674),
  E = a(465082),
  v = a(33146),
  P = a(125909),
  N = a(190733),
  f = a(101741),
  j = a(132871),
  S = a(147890),
  O = a(166996),
  y = a(981631),
  M = a(7983),
  Z = a(878428);

function D() {
  var e;
  let n;
  let a = (0, j.useApplicationDirectoryHistory)(e => e.guildId),
    l = (0, m.e7)([I.Z], () => I.Z.getCategories()),
    r = (0, o.TH)(),
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
    [C, x] = i.useState(null != d ? Number(d) : 1),
    [E, D] = i.useState(null != c ? c : ""),
    [b, Y] = i.useState(null !== (e = Number(_)) && void 0 !== e ? e : A.MU),
    H = i.useMemo(() => null == l ? void 0 : l.find(e => e.id === b), [l, b]),
    U = i.useCallback(e => {
      Y(e.id), x(1)
    }, []),
    k = i.useCallback(e => {
      D(e), x(1), 0 === e.length && Y(A.MU)
    }, []),
    w = i.useCallback(e => {
      var n, a;
      let {
        query: t,
        categoryId: i,
        page: l
      } = e, s = new URLSearchParams(r.search);
      "" === t ? s.delete("q") : s.set("q", t), i === A.MU ? s.delete("category_id") : s.set("category_id", null !== (n = null == i ? void 0 : i.toString()) && void 0 !== n ? n : ""), 1 === l ? s.delete("page") : s.set("page", null !== (a = null == l ? void 0 : l.toString()) && void 0 !== a ? a : ""), (0, S.replaceAppDirectoryURLWith)("".concat(y.Z5c.APPLICATION_DIRECTORY_SEARCH, "?").concat(s.toString()))
    }, [r.search]),
    B = i.useMemo(() => s().debounce(w, 400), [w]);
  i.useEffect(() => {
    B({
      query: E,
      categoryId: b,
      page: C
    })
  }, [B, E, b, C]);
  let G = (0, m.e7)([R.Z], () => R.Z.getFetchState({
      query: E,
      guildId: a,
      page: C,
      categoryId: b
    })),
    F = i.useRef({
      query: "",
      guildId: void 0,
      page: void 0,
      categoryId: void 0
    }),
    V = (0, m.cj)([R.Z], () => {
      let e = R.Z.getSearchResults({
        query: E,
        guildId: a
      });
      return null != e ? {
        [A.MU]: e.totalCount,
        ...e.countsByCategory
      } : {}
    }),
    {
      pageResults: z,
      pageCount: q,
      searchResultsType: K,
      loadId: W
    } = (0, m.cj)([R.Z], () => {
      var e, n;
      let t = {
          query: E,
          guildId: a,
          page: C,
          categoryId: b
        },
        i = R.Z.getSearchResults(t);
      return null == i ? i = R.Z.getSearchResults(F.current) : F.current = t, {
        pageResults: null == i ? void 0 : i.results,
        pageCount: null !== (e = null == i ? void 0 : i.totalPages) && void 0 !== e ? e : 0,
        searchResultsType: null !== (n = null == i ? void 0 : i.type) && void 0 !== n ? n : g.c.SEARCH_RESULTS,
        loadId: null == i ? void 0 : i.loadId
      }
    }),
    J = i.useMemo(() => null == z ? void 0 : z.filter(e => !(K === g.c.SEARCH_RESULTS && e.type !== u.s.APPLICATION)), [z, K]),
    Q = i.useRef(null),
    X = (0, j.getCurrentView)(),
    $ = i.useCallback(e => {
      h.default.track(y.rMx.APP_DIRECTORY_SEARCHED, {
        search_term: E,
        num_results: e,
        current_page: null == X ? void 0 : X.type,
        result_page: C,
        category: null == H ? void 0 : H.name,
        category_id: null == H ? void 0 : H.id,
        guild_id: a
      })
    }, [null == H ? void 0 : H.id, null == H ? void 0 : H.name, C, a, E, X]),
    ee = i.useCallback(e => {
      let {
        query: n,
        page: a,
        activeCategoryId: t,
        onSuccessCallback: i,
        guildId: l,
        fetchCounts: s
      } = e;
      s && p.yC({
        query: n,
        guildId: l
      }), p.yC({
        query: n,
        guildId: l,
        options: {
          page: a,
          categoryId: t
        },
        onSuccessCallback: i
      }), Q.current = n
    }, []),
    [en] = i.useState(() => s().debounce(ee, 400, {
      leading: !1,
      trailing: !0
    })),
    ea = i.useCallback(e => {
      x(e)
    }, [x]),
    et = i.useCallback(e => {
      let {
        application: n,
        mutualGuilds: t
      } = e;
      h.default.track(y.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
        current_page: j.ApplicationDirectoryViews.SEARCH,
        application_id: n.id,
        load_id: W,
        search_term: E,
        guild_id: a,
        shown_mutual_guilds_count: t.length
      }), (0, S.goToApplication)({
        applicationId: n.id
      })
    }, [W, E, a]);
  i.useEffect(() => {
    ee({
      query: E,
      page: C,
      activeCategoryId: b,
      guildId: a,
      fetchCounts: E !== Q.current,
      onSuccessCallback: $
    })
  }, [ee, H, a, C]), i.useEffect(() => {
    en({
      query: E,
      page: C,
      activeCategoryId: b,
      guildId: a,
      fetchCounts: E !== Q.current,
      onSuccessCallback: $
    })
  }, [E, en]);
  let ei = i.useMemo(() => Object.keys(V).length > 0, [V]);
  return null != J && 0 === q || G === R.M.ERROR ? n = (0, t.jsx)(v.Z, {
    category: H,
    onViewAll: () => {
      x(1), Y(A.MU)
    }
  }) : null != J && J.length > 0 && K === g.c.SEARCH_RESULTS ? n = (0, t.jsx)(L, {
    items: J,
    pageCount: q,
    currentPage: C,
    showPrimaryCategory: b === A.MU,
    onItemClick: et,
    onChangePage: ea
  }) : null != J && J.length > 0 && K === g.c.MUSIC && (n = (0, t.jsx)(f.Z, {
    guildId: a,
    results: J
  })), (0, t.jsx)(T.Z, {
    children: (0, t.jsxs)("div", {
      className: M.page,
      children: [(0, t.jsxs)("div", {
        className: M.sidebar,
        children: [(0, t.jsx)("img", {
          src: Z,
          alt: "",
          className: M.sidebarImage
        }), (0, t.jsx)(O.Z, {
          className: M.categoryList,
          countsByCategory: ei ? V : void 0,
          currentCategoryId: b,
          onView: U
        })]
      }), (0, t.jsxs)("div", {
        className: M.content,
        children: [(0, t.jsx)(N.Z, {
          query: E,
          onChange: k
        }), (0, t.jsx)(P.Z, {
          loading: G === R.M.FETCHING,
          children: (0, t.jsx)("div", {
            className: M.contentContainer,
            children: n
          })
        })]
      })]
    })
  })
}

function L(e) {
  let {
    items: n,
    currentPage: a,
    pageCount: l,
    showPrimaryCategory: s,
    onItemClick: r,
    onChangePage: c
  } = e, o = (0, C.Z)("application-directory-search");
  return (0, t.jsxs)(i.Fragment, {
    children: [(0, t.jsx)(d.bG, {
      navigator: o,
      children: (0, t.jsx)(d.SJ, {
        children: e => {
          let {
            ref: a,
            ...i
          } = e;
          return (0, t.jsx)("ul", {
            ref: a,
            ...i,
            children: n.map(e => {
              if (e.type === u.s.APPLICATION) {
                var n;
                let a;
                let i = e.data;
                return (null === (n = i.directory_entry) || void 0 === n ? void 0 : n.short_description) != null && i.directory_entry.short_description.length > 0 ? a = i.directory_entry.short_description : null != i.description && i.description.length > 0 && (a = i.description), (0, t.jsx)(x.Z, {
                  href: y.Z5c.APPLICATION_DIRECTORY_PROFILE(i.id),
                  children: (0, t.jsx)(E.Z, {
                    className: M.listing,
                    childrenClassName: M.listingDetails,
                    application: i,
                    onView: e => {
                      let {
                        mutualGuilds: n
                      } = e;
                      return r({
                        application: i,
                        mutualGuilds: n
                      })
                    },
                    showMutualGuilds: !0,
                    showPrimaryCategory: s,
                    source: "search",
                    children: null != a ? (0, t.jsx)(_.Text, {
                      className: M.listingDescription,
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
    }), (0, t.jsx)(_.Paginator, {
      currentPage: a,
      totalCount: Math.min(7 * l, 700),
      pageSize: 7,
      onPageChange: c,
      disablePaginationGap: !0
    })]
  })
}
c().shim()