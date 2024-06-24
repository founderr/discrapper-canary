n.r(a), n.d(a, {
  default: function() {
    return D
  }
}), n(610138), n(216116), n(78328), n(815648), n(47120);
var t = n(735250),
  i = n(470079),
  l = n(392711),
  s = n.n(l),
  r = n(991637),
  c = n.n(r),
  o = n(266067),
  d = n(91192),
  u = n(209173),
  g = n(375051),
  m = n(399606),
  _ = n(481060),
  C = n(209613),
  h = n(626135),
  p = n(674588),
  x = n(463571),
  R = n(894653),
  I = n(809547),
  T = n(738130),
  E = n(34674),
  v = n(465082),
  A = n(33146),
  P = n(125909),
  f = n(190733),
  j = n(101741),
  N = n(132871),
  S = n(147890),
  y = n(166996),
  O = n(981631),
  M = n(7983),
  Z = n(878428);

function D() {
  var e;
  let a;
  let n = (0, N.useApplicationDirectoryHistory)(e => e.guildId),
    l = (0, m.e7)([R.Z], () => R.Z.getCategories()),
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
    [v, D] = i.useState(null != c ? c : ""),
    [b, Y] = i.useState(null !== (e = Number(_)) && void 0 !== e ? e : E.MU),
    H = i.useMemo(() => null == l ? void 0 : l.find(e => e.id === b), [l, b]),
    U = i.useCallback(e => {
      Y(e.id), x(1)
    }, []),
    k = i.useCallback(e => {
      D(e), x(1), 0 === e.length && Y(E.MU)
    }, []),
    w = i.useCallback(e => {
      var a, n;
      let {
        query: t,
        categoryId: i,
        page: l
      } = e, s = new URLSearchParams(r.search);
      "" === t ? s.delete("q") : s.set("q", t), i === E.MU ? s.delete("category_id") : s.set("category_id", null !== (a = null == i ? void 0 : i.toString()) && void 0 !== a ? a : ""), 1 === l ? s.delete("page") : s.set("page", null !== (n = null == l ? void 0 : l.toString()) && void 0 !== n ? n : ""), (0, S.replaceAppDirectoryURLWith)("".concat(O.Z5c.APPLICATION_DIRECTORY_SEARCH, "?").concat(s.toString()))
    }, [r.search]),
    B = i.useMemo(() => s().debounce(w, 400), [w]);
  i.useEffect(() => {
    B({
      query: v,
      categoryId: b,
      page: C
    })
  }, [B, v, b, C]);
  let G = (0, m.e7)([I.Z], () => I.Z.getFetchState({
      query: v,
      guildId: n,
      page: C,
      categoryId: b
    })),
    F = i.useRef({
      query: "",
      guildId: void 0,
      page: void 0,
      categoryId: void 0
    }),
    V = (0, m.cj)([I.Z], () => {
      let e = I.Z.getSearchResults({
        query: v,
        guildId: n
      });
      return null != e ? {
        [E.MU]: e.totalCount,
        ...e.countsByCategory
      } : {}
    }),
    {
      pageResults: z,
      pageCount: q,
      searchResultsType: K,
      loadId: W
    } = (0, m.cj)([I.Z], () => {
      var e, a;
      let t = {
          query: v,
          guildId: n,
          page: C,
          categoryId: b
        },
        i = I.Z.getSearchResults(t);
      return null == i ? i = I.Z.getSearchResults(F.current) : F.current = t, {
        pageResults: null == i ? void 0 : i.results,
        pageCount: null !== (e = null == i ? void 0 : i.totalPages) && void 0 !== e ? e : 0,
        searchResultsType: null !== (a = null == i ? void 0 : i.type) && void 0 !== a ? a : g.c.SEARCH_RESULTS,
        loadId: null == i ? void 0 : i.loadId
      }
    }),
    J = i.useMemo(() => null == z ? void 0 : z.filter(e => !(K === g.c.SEARCH_RESULTS && e.type !== u.s.APPLICATION)), [z, K]),
    Q = i.useRef(null),
    X = (0, N.getCurrentView)(),
    $ = i.useCallback(e => {
      h.default.track(O.rMx.APP_DIRECTORY_SEARCHED, {
        search_term: v,
        num_results: e,
        current_page: null == X ? void 0 : X.type,
        result_page: C,
        category: null == H ? void 0 : H.name,
        category_id: null == H ? void 0 : H.id,
        guild_id: n
      })
    }, [null == H ? void 0 : H.id, null == H ? void 0 : H.name, C, n, v, X]),
    ee = i.useCallback(e => {
      let {
        query: a,
        page: n,
        activeCategoryId: t,
        onSuccessCallback: i,
        guildId: l,
        fetchCounts: s
      } = e;
      s && p.yC({
        query: a,
        guildId: l
      }), p.yC({
        query: a,
        guildId: l,
        options: {
          page: n,
          categoryId: t
        },
        onSuccessCallback: i
      }), Q.current = a
    }, []),
    [ea] = i.useState(() => s().debounce(ee, 400, {
      leading: !1,
      trailing: !0
    })),
    en = i.useCallback(e => {
      x(e)
    }, [x]),
    et = i.useCallback(e => {
      let {
        application: a,
        mutualGuilds: t
      } = e;
      h.default.track(O.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
        current_page: N.ApplicationDirectoryViews.SEARCH,
        application_id: a.id,
        load_id: W,
        search_term: v,
        guild_id: n,
        shown_mutual_guilds_count: t.length
      }), (0, S.goToApplication)({
        applicationId: a.id
      })
    }, [W, v, n]);
  i.useEffect(() => {
    ee({
      query: v,
      page: C,
      activeCategoryId: b,
      guildId: n,
      fetchCounts: v !== Q.current,
      onSuccessCallback: $
    })
  }, [ee, H, n, C]), i.useEffect(() => {
    ea({
      query: v,
      page: C,
      activeCategoryId: b,
      guildId: n,
      fetchCounts: v !== Q.current,
      onSuccessCallback: $
    })
  }, [v, ea]);
  let ei = i.useMemo(() => Object.keys(V).length > 0, [V]);
  return null != J && 0 === q || G === I.M.ERROR ? a = (0, t.jsx)(A.Z, {
    category: H,
    onViewAll: () => {
      x(1), Y(E.MU)
    }
  }) : null != J && J.length > 0 && K === g.c.SEARCH_RESULTS ? a = (0, t.jsx)(L, {
    items: J,
    pageCount: q,
    currentPage: C,
    showPrimaryCategory: b === E.MU,
    onItemClick: et,
    onChangePage: en
  }) : null != J && J.length > 0 && K === g.c.MUSIC && (a = (0, t.jsx)(j.Z, {
    guildId: n,
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
        }), (0, t.jsx)(y.Z, {
          className: M.categoryList,
          countsByCategory: ei ? V : void 0,
          currentCategoryId: b,
          onView: U
        })]
      }), (0, t.jsxs)("div", {
        className: M.content,
        children: [(0, t.jsx)(f.Z, {
          query: v,
          onChange: k
        }), (0, t.jsx)(P.Z, {
          loading: G === I.M.FETCHING,
          children: (0, t.jsx)("div", {
            className: M.contentContainer,
            children: a
          })
        })]
      })]
    })
  })
}

function L(e) {
  let {
    items: a,
    currentPage: n,
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
            ref: n,
            ...i
          } = e;
          return (0, t.jsx)("ul", {
            ref: n,
            ...i,
            children: a.map(e => {
              if (e.type === u.s.APPLICATION) {
                var a;
                let n;
                let i = e.data;
                return (null === (a = i.directory_entry) || void 0 === a ? void 0 : a.short_description) != null && i.directory_entry.short_description.length > 0 ? n = i.directory_entry.short_description : null != i.description && i.description.length > 0 && (n = i.description), (0, t.jsx)(x.Z, {
                  href: O.Z5c.APPLICATION_DIRECTORY_PROFILE(i.id),
                  children: (0, t.jsx)(v.Z, {
                    className: M.listing,
                    childrenClassName: M.listingDetails,
                    application: i,
                    onView: e => {
                      let {
                        mutualGuilds: a
                      } = e;
                      return r({
                        application: i,
                        mutualGuilds: a
                      })
                    },
                    showMutualGuilds: !0,
                    showPrimaryCategory: s,
                    source: "search",
                    children: null != n ? (0, t.jsx)(_.Text, {
                      className: M.listingDescription,
                      variant: "text-md/normal",
                      lineClamp: 3,
                      children: n
                    }) : null
                  })
                }, i.id)
              }
            })
          })
        }
      })
    }), (0, t.jsx)(_.Paginator, {
      currentPage: n,
      totalCount: Math.min(7 * l, 700),
      pageSize: 7,
      onPageChange: c,
      disablePaginationGap: !0
    })]
  })
}
c().shim()