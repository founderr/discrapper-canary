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
    g = n(606414),
    f = n(744112),
    C = n(223143),
    v = n(937510),
    b = n(752053),
    x = n(38900),
    _ = n(709999),
    k = n(953655),
    I = n(580914),
    S = n(957058),
    j = n(215023),
    E = n(388032),
    T = n(218142);
t.Z = (e) => {
    var t;
    let { handleTransition: n, numVisibleItems: i } = e,
        { categories: N, isFetchingCategories: B, fetchCategoriesError: y, fetchPurchasesError: L, claimError: P, refreshCategories: Z } = (0, C.ZP)({ location: 'CollectiblesFeedShop' }),
        O = null !== (t = null != y ? y : L) && void 0 !== t ? t : P,
        w = Array.from(N.values()),
        R = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        A = (0, g.c)('CollectiblesFeedShop') && null != p.Z.getCategory(s.T.ROBERT),
        F = a.createRef(),
        H = (0, f.b)('Collectibles Shop Button'),
        D = (0, d.Z)('shop_disable_cache'),
        V = (0, d.Z)('shop_include_unpublished'),
        M = (0, S.u)(),
        W = w[0],
        U = [w[1], p.Z.getCategory(A ? s.T.ROBERT : s.T.ANIME_V2)],
        G = a.useCallback(() => {
            Z();
        }, [Z]),
        z = a.useMemo(() => M(j.yo), [B, M]),
        $ = (0, v.l)(z);
    if (null == R) return null;
    if (null != O) {
        let e = [];
        null != y ? e.push('shop load fetch categories error: '.concat(O.message)) : null != L ? e.push('shop load fetch purchase error: '.concat(O.message)) : e.push('shop load claim error: '.concat(O.message)),
            m.Z.captureMessage(e.join('\n'), {
                tags: {
                    isStaff: R.isStaff().toString(),
                    preloadEnabled: H.toString(),
                    disableCache: D.toString(),
                    includeUnpublished: V.toString()
                }
            });
    }
    return null != y
        ? (0, r.jsx)(b.Z, {
              onRetry: G,
              errorOrigin: b.i.SHOP_PAGE,
              errorMessage: y.message
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
                                              children: E.intl.string(E.t.ivaAAw)
                                          }),
                                          (0, r.jsxs)(c.Clickable, {
                                              className: T.shopAll,
                                              onClick: () => n('shop all top'),
                                              children: [
                                                  (0, r.jsx)(c.ServerGridIcon, {}),
                                                  (0, r.jsx)(c.Text, {
                                                      variant: 'text-sm/medium',
                                                      children: E.intl.string(E.t.xFcotb)
                                                  })
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)('div', {
                                      className: T.feed,
                                      ref: F,
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
                                                                          user: R,
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
                          i >= j.iA &&
                              (0, r.jsxs)('div', {
                                  className: T.endOfFeed,
                                  children: [
                                      (0, r.jsx)(c.Heading, {
                                          variant: 'heading-md/semibold',
                                          children: E.intl.string(E.t.Yr70c3)
                                      }),
                                      (0, r.jsx)(c.Button, {
                                          className: T.endOfFeedButton,
                                          onClick: () => {
                                              n('shop all bottom', void 0, !0);
                                          },
                                          children: (0, r.jsx)(c.Text, {
                                              variant: 'text-md/medium',
                                              color: 'always-white',
                                              children: E.intl.string(E.t.AfrvRE)
                                          })
                                      })
                                  ]
                              })
                      ]
                  })
              })
          });
};
