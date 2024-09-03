var a = n(735250),
    r = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(180650),
    l = n(442837),
    c = n(481060),
    d = n(594174),
    u = n(597688),
    f = n(1870),
    p = n(884697),
    g = n(223143),
    C = n(823941),
    m = n(709999),
    _ = n(215023),
    b = n(689938),
    h = n(728097),
    x = n(367815),
    I = n(933285),
    E = n(83498);
t.Z = (e) => {
    var t, n, s, v, T, L;
    let { handleTransition: S, numVisibleItems: N } = e,
        { isFetching: O } = (0, g.Z)(),
        k = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        B = r.createRef(),
        j = (0, l.cj)([u.Z], () => ({ feature: u.Z.getCategory(i.T.THE_VAULT) })),
        Z = r.useMemo(
            () =>
                _.$O
                    .map((e) => u.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: u.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category),
            [O]
        ),
        P = r.useMemo(
            () =>
                _.yo
                    .map((e) => u.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: u.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category)
                    .sort((e, t) => {
                        let n = !!f.Z.getPurchase(e.skuId),
                            a = !!f.Z.getPurchase(t.skuId);
                        return Number(n) - Number(a);
                    }),
            [O]
        );
    return null == k
        ? null
        : (0, a.jsx)(a.Fragment, {
              children: (0, a.jsxs)('div', {
                  className: h.shop,
                  children: [
                      (0, a.jsx)('div', {
                          className: h.banner,
                          children: (0, a.jsx)('div', {
                              className: h.bannerImage,
                              style: { backgroundImage: 'url('.concat(E, ')') }
                          })
                      }),
                      (0, a.jsxs)('div', {
                          className: o()(h.content, h.mainContent),
                          children: [
                              (0, a.jsxs)('div', {
                                  className: o()(h.heroHeaderContainer),
                                  children: [
                                      (0, a.jsxs)('div', {
                                          className: o()(h.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null === (t = j.feature) || void 0 === t ? void 0 : t.unpublishedAt) != null &&
                                                  (0, a.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: b.Z.Messages.LIMITED_TIME,
                                                      className: h.limitedTimeBadge
                                                  }),
                                              (0, a.jsx)('img', {
                                                  className: h.heroHeaderLogo,
                                                  src: (0, p.uV)(null !== (L = null === (n = j.feature) || void 0 === n ? void 0 : n.logo) && void 0 !== L ? L : '', { size: C.n }),
                                                  alt: null === (s = j.feature) || void 0 === s ? void 0 : s.name
                                              }),
                                              (0, a.jsx)(c.Text, {
                                                  color: 'always-white',
                                                  variant: 'text-md/normal',
                                                  children: null === (v = j.feature) || void 0 === v ? void 0 : v.summary
                                              })
                                          ]
                                      }),
                                      (0, a.jsx)('div', {
                                          className: h.heroHeaderButtonContainer,
                                          children: (0, a.jsx)(c.Button, {
                                              className: h.heroHeaderButton,
                                              color: c.ButtonColors.WHITE,
                                              onClick: () => S(),
                                              children: b.Z.Messages.COLLECTIBLES_SHOP_THE_VAULT_COLLECTION
                                          })
                                      })
                                  ]
                              }),
                              (0, a.jsx)('div', {
                                  className: o()(h.row, h.feed, h.feedSingleRow),
                                  children: Z.map((e) => {
                                      if (null == e || null == e.category) return null;
                                      let { category: t, ...n } = e;
                                      return (0, a.jsx)(
                                          m.Z,
                                          {
                                              product: n,
                                              category: t,
                                              user: k
                                          },
                                          null == e ? void 0 : e.skuId
                                      );
                                  })
                              }),
                              (0, a.jsxs)('div', {
                                  className: o()(h.section, h.col2, h.featuredBlocksContainer),
                                  children: [
                                      (0, a.jsxs)(c.Clickable, {
                                          className: o()(h.featuredBlock),
                                          style: { backgroundImage: 'url('.concat(I, ')') },
                                          onClick: () => S(i.T.DOJO),
                                          children: [
                                              (null === (T = j.feature) || void 0 === T ? void 0 : T.unpublishedAt) != null &&
                                                  (0, a.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: b.Z.Messages.LIMITED_TIME,
                                                      className: h.featuredBlockBadge
                                                  }),
                                              (0, a.jsx)(c.Button, {
                                                  className: h.featuredBlockButton,
                                                  color: c.ButtonColors.WHITE,
                                                  onClick: () => S(i.T.DOJO),
                                                  children: b.Z.Messages.TAKE_ME_THERE
                                              })
                                          ]
                                      }),
                                      (0, a.jsxs)(c.Clickable, {
                                          className: o()(h.featuredBlock),
                                          style: { backgroundImage: 'url('.concat(x, ')') },
                                          onClick: () => S(i.T.ANIME_V2),
                                          children: [
                                              (0, a.jsx)(c.TextBadge, {
                                                  disableColor: !0,
                                                  text: b.Z.Messages.MOST_POPULAR,
                                                  className: h.featuredBlockBadge
                                              }),
                                              (0, a.jsx)(c.Button, {
                                                  className: h.featuredBlockButton,
                                                  color: c.ButtonColors.WHITE,
                                                  onClick: () => S(i.T.ANIME_V2),
                                                  children: b.Z.Messages.TAKE_ME_THERE
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              (0, a.jsxs)('div', {
                                  className: o()(h.row, h.between, h.section),
                                  children: [
                                      (0, a.jsx)(c.Heading, {
                                          variant: 'heading-lg/semibold',
                                          children: b.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                      }),
                                      (0, a.jsxs)(c.Clickable, {
                                          className: h.shopAll,
                                          onClick: () => S(),
                                          children: [
                                              (0, a.jsx)(c.ServerGridIcon, {}),
                                              (0, a.jsx)(c.Text, {
                                                  variant: 'text-sm/medium',
                                                  children: b.Z.Messages.COLLECTIBLES_SHOP_ALL
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              (0, a.jsx)('div', {
                                  className: h.feed,
                                  ref: B,
                                  children: P.slice(0, N).map((e) => {
                                      if (null == e || null == e.category) return null;
                                      let { category: t, ...n } = e;
                                      return (0, a.jsx)(
                                          m.Z,
                                          {
                                              product: n,
                                              category: t,
                                              user: k
                                          },
                                          null == e ? void 0 : e.skuId
                                      );
                                  })
                              }),
                              N >= _.iA &&
                                  (0, a.jsxs)('div', {
                                      className: h.endOfFeed,
                                      children: [
                                          (0, a.jsx)(c.Heading, {
                                              variant: 'heading-md/semibold',
                                              children: b.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_TEXT
                                          }),
                                          (0, a.jsx)(c.Button, {
                                              className: h.endOfFeedButton,
                                              onClick: () => {
                                                  S(void 0, !0);
                                              },
                                              children: (0, a.jsx)(c.Text, {
                                                  variant: 'text-md/medium',
                                                  color: 'always-white',
                                                  children: b.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_BUTTON
                                              })
                                          })
                                      ]
                                  })
                          ]
                      })
                  ]
              })
          });
};
