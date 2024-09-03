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
    I = n(933285);
t.Z = (e) => {
    var t, n, s, E, v, T, L, S;
    let { handleTransition: N, numVisibleItems: O } = e,
        { isFetching: k } = (0, g.Z)(),
        B = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        j = r.createRef(),
        Z = (0, l.cj)([u.Z], () => ({ feature: u.Z.getCategory(i.T.THE_VAULT) })),
        P = r.useMemo(
            () =>
                _.$O
                    .map((e) => u.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: u.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category),
            [k]
        ),
        A = r.useMemo(
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
            [k]
        );
    return null == B
        ? null
        : (0, a.jsx)(a.Fragment, {
              children: (0, a.jsxs)('div', {
                  className: h.shop,
                  children: [
                      (0, a.jsx)('div', {
                          className: h.banner,
                          children: (0, a.jsx)('div', {
                              className: h.bannerImage,
                              style: { backgroundImage: 'url('.concat((0, p.uV)(null !== (L = null === (t = Z.feature) || void 0 === t ? void 0 : t.banner) && void 0 !== L ? L : '', { size: 2048 }), ')') }
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
                                              (null === (n = Z.feature) || void 0 === n ? void 0 : n.unpublishedAt) != null &&
                                                  (0, a.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: b.Z.Messages.LIMITED_TIME,
                                                      className: h.limitedTimeBadge
                                                  }),
                                              (0, a.jsx)('img', {
                                                  className: h.heroHeaderLogo,
                                                  src: (0, p.uV)(null !== (S = null === (s = Z.feature) || void 0 === s ? void 0 : s.logo) && void 0 !== S ? S : '', { size: C.n }),
                                                  alt: null === (E = Z.feature) || void 0 === E ? void 0 : E.name
                                              }),
                                              (0, a.jsx)(c.Text, {
                                                  color: 'always-white',
                                                  variant: 'text-md/normal',
                                                  children: null === (v = Z.feature) || void 0 === v ? void 0 : v.summary
                                              })
                                          ]
                                      }),
                                      (0, a.jsx)('div', {
                                          className: h.heroHeaderButtonContainer,
                                          children: (0, a.jsx)(c.Button, {
                                              className: h.heroHeaderButton,
                                              color: c.ButtonColors.WHITE,
                                              onClick: () => N(),
                                              children: b.Z.Messages.COLLECTIBLES_SHOP_THE_VAULT_COLLECTION
                                          })
                                      })
                                  ]
                              }),
                              (0, a.jsx)('div', {
                                  className: o()(h.row, h.feed, h.feedSingleRow),
                                  children: P.map((e) => {
                                      if (null == e || null == e.category) return null;
                                      let { category: t, ...n } = e;
                                      return (0, a.jsx)(
                                          m.Z,
                                          {
                                              product: n,
                                              category: t,
                                              user: B
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
                                          onClick: () => N(i.T.DOJO),
                                          children: [
                                              (null === (T = Z.feature) || void 0 === T ? void 0 : T.unpublishedAt) != null &&
                                                  (0, a.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: b.Z.Messages.LIMITED_TIME,
                                                      className: h.featuredBlockBadge
                                                  }),
                                              (0, a.jsx)(c.Button, {
                                                  className: h.featuredBlockButton,
                                                  color: c.ButtonColors.WHITE,
                                                  onClick: () => N(i.T.DOJO),
                                                  children: b.Z.Messages.TAKE_ME_THERE
                                              })
                                          ]
                                      }),
                                      (0, a.jsxs)(c.Clickable, {
                                          className: o()(h.featuredBlock),
                                          style: { backgroundImage: 'url('.concat(x, ')') },
                                          onClick: () => N(i.T.ANIME_V2),
                                          children: [
                                              (0, a.jsx)(c.TextBadge, {
                                                  disableColor: !0,
                                                  text: b.Z.Messages.MOST_POPULAR,
                                                  className: h.featuredBlockBadge
                                              }),
                                              (0, a.jsx)(c.Button, {
                                                  className: h.featuredBlockButton,
                                                  color: c.ButtonColors.WHITE,
                                                  onClick: () => N(i.T.ANIME_V2),
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
                                          onClick: () => N(),
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
                                  ref: j,
                                  children: A.slice(0, O).map((e) => {
                                      if (null == e || null == e.category) return null;
                                      let { category: t, ...n } = e;
                                      return (0, a.jsx)(
                                          m.Z,
                                          {
                                              product: n,
                                              category: t,
                                              user: B
                                          },
                                          null == e ? void 0 : e.skuId
                                      );
                                  })
                              }),
                              O >= _.iA &&
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
                                                  N(void 0, !0);
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
