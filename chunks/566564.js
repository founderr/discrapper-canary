n(47120), n(653041);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(180650),
    o = n(442837),
    c = n(481060),
    d = n(580747),
    u = n(594174),
    m = n(960048),
    h = n(381585),
    p = n(597688),
    f = n(606414),
    g = n(744112),
    C = n(223143),
    v = n(937510),
    b = n(752053),
    x = n(38900),
    _ = n(709999),
    k = n(953655),
    I = n(580914),
    E = n(957058),
    S = n(215023),
    j = n(388032),
    T = n(218142);
t.Z = (e) => {
    var t;
    let { handleTransition: n, numVisibleItems: i } = e,
        { categories: N, isFetchingCategories: B, fetchCategoriesError: L, fetchPurchasesError: y, claimError: P, refreshCategories: Z } = (0, C.ZP)({ location: 'CollectiblesFeedShop' }),
        O = null !== (t = null != L ? L : y) && void 0 !== t ? t : P,
        w = Array.from(N.values()),
        A = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        R = (0, f.c)('CollectiblesFeedShop') && null != p.Z.getCategory(s.T.ROBERT),
        H = a.createRef(),
        F = (0, g.b)('Collectibles Shop Button'),
        V = (0, d.Z)('shop_disable_cache'),
        D = (0, d.Z)('shop_include_unpublished'),
        M = (0, E.u)(),
        W = w[0],
        U = [w[1], p.Z.getCategory(R ? s.T.ROBERT : s.T.ANIME_V2)],
        G = a.useCallback(() => {
            Z();
        }, [Z]),
        z = a.useMemo(() => M(S.yo), [B, M]),
        $ = (0, v.l)(z);
    if (null == A) return null;
    if (null != O) {
        let e = [];
        null != L ? e.push('shop load fetch categories error: '.concat(O.message)) : null != y ? e.push('shop load fetch purchase error: '.concat(O.message)) : e.push('shop load claim error: '.concat(O.message)),
            m.Z.captureMessage(e.join('\n'), {
                tags: {
                    isStaff: A.isStaff().toString(),
                    preloadEnabled: F.toString(),
                    disableCache: V.toString(),
                    includeUnpublished: D.toString()
                }
            });
    }
    return null != L
        ? (0, r.jsx)(b.Z, {
              onRetry: G,
              errorOrigin: b.i.SHOP_PAGE,
              errorMessage: L.message
          })
        : (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)('div', {
                  className: T.shop,
                  children: (0, r.jsxs)('div', {
                      className: l()(T.content, T.mainContent),
                      children: [
                          (0, r.jsx)(I.Z, {
                              isLoading: B,
                              handleTransition: n,
                              category: W
                          }),
                          (0, r.jsx)(k.Z, {
                              isLoading: B,
                              handleTransition: n,
                              categories: U
                          }),
                          (0, r.jsxs)('div', {
                              className: l()(T.row, T.between, T.section, T.popularPicksSection),
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: T.popularPicksHeader,
                                      children: [
                                          (0, r.jsx)(c.Heading, {
                                              variant: 'heading-lg/semibold',
                                              children: j.intl.string(j.t.ivaAAw)
                                          }),
                                          (0, r.jsxs)(c.Clickable, {
                                              className: T.shopAll,
                                              onClick: () => n('shop all top'),
                                              children: [
                                                  (0, r.jsx)(c.ServerGridIcon, {}),
                                                  (0, r.jsx)(c.Text, {
                                                      variant: 'text-sm/medium',
                                                      children: j.intl.string(j.t.xFcotb)
                                                  })
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)('div', {
                                      className: T.feed,
                                      ref: H,
                                      children: B
                                          ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(x.K, {}, t + 1)) })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: $.slice(0, i).map((e, t) => {
                                                    let n = p.Z.getCategoryForProduct(e.skuId);
                                                    return null == e || null == n
                                                        ? null
                                                        : (0, r.jsx)(
                                                              h.k0,
                                                              {
                                                                  newValue: {
                                                                      tilePosition: t,
                                                                      pageSection: 'popular picks',
                                                                      categoryPosition: 2
                                                                  },
                                                                  children: (0, r.jsx)(
                                                                      _.Z,
                                                                      {
                                                                          product: e,
                                                                          category: n,
                                                                          user: A,
                                                                          isInFeedView: !0
                                                                      },
                                                                      e.skuId
                                                                  )
                                                              },
                                                              null == e ? void 0 : e.skuId
                                                          );
                                                })
                                            })
                                  })
                              ]
                          }),
                          i >= S.iA &&
                              (0, r.jsxs)('div', {
                                  className: T.endOfFeed,
                                  children: [
                                      (0, r.jsx)(c.Heading, {
                                          variant: 'heading-md/semibold',
                                          children: j.intl.string(j.t.Yr70c3)
                                      }),
                                      (0, r.jsx)(c.Button, {
                                          className: T.endOfFeedButton,
                                          onClick: () => {
                                              n('shop all bottom', void 0, !0);
                                          },
                                          children: (0, r.jsx)(c.Text, {
                                              variant: 'text-md/medium',
                                              color: 'always-white',
                                              children: j.intl.string(j.t.AfrvRE)
                                          })
                                      })
                                  ]
                              })
                      ]
                  })
              })
          });
};
