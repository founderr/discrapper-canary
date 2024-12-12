n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(887003),
    s = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(393238),
    h = n(410030),
    m = n(204418),
    p = n(583434),
    g = n(70097),
    f = n(594174),
    _ = n(626135),
    E = n(617136),
    I = n(113434),
    C = n(497505),
    v = n(475595),
    S = n(352084),
    N = n(685613),
    T = n(981631),
    b = n(388032),
    A = n(625844);
t.Z = (0, r.memo)(function (e) {
    var t, n, l, x, Z;
    let { quest: L } = e,
        [P, y] = (0, r.useState)(!1),
        [O, R] = (0, r.useState)(24),
        [j, D] = (0, r.useState)(!1),
        M = (0, r.useRef)(null),
        w = (0, r.useRef)(null),
        k = (0, r.useRef)(null),
        U = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        { ref: G, height: B = 0 } = (0, u.Z)(),
        H = (0, h.ZP)(),
        V = (0, I.B6)(null === (t = L.userStatus) || void 0 === t ? void 0 : t.claimedAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        F = null !== (x = null === (n = L.userStatus) || void 0 === n ? void 0 : n.claimedTier) && void 0 !== x ? x : 0,
        z = L.config.rewards[F],
        Y = (null == z ? void 0 : z.type) === o.w.COLLECTIBLE,
        W = (null == z ? void 0 : z.type) === o.w.FRACTIONAL_PREMIUM,
        { product: K } = (0, p.T)(Y && null != z ? z.skuId : null),
        q = null == K ? void 0 : null === (l = K.items) || void 0 === l ? void 0 : l[0];
    (0, u.P)(M, (e) => {
        let { height: t } = e;
        if (!Y || null == t || null == w.current || null == M.current || null == k.current) return;
        let n = M.current.getBoundingClientRect(),
            i = w.current.getBoundingClientRect(),
            r = k.current.getBoundingClientRect();
        R((i.top - n.top - r.height) / 2);
    });
    let X = (0, c.wj)(H),
        Q = (0, r.useMemo)(() => null != L.config.cosponsorMetadata, [L]),
        J = (0, r.useMemo)(() => (0, v.fh)(L, v.eC.REWARD), [L]),
        $ = P ? B + 8 : 0,
        ee = () => {
            y(!0),
                _.default.track(T.rMx.QUEST_HOVER, {
                    quest_id: L.id,
                    ...(0, E.mH)(C.jn.TROPHY_CASE_CARD)
                });
        },
        et = () => y(!1),
        en = (e) => {
            D(!0),
                _.default.track(T.rMx.QUEST_ASSET_LOADING_FAILURE, {
                    source: e,
                    asset_id: e,
                    quest_id: L.id
                });
        };
    return null == z || j
        ? null
        : (0, i.jsx)(d.FocusRing, {
              children: (0, i.jsxs)('div', {
                  ref: M,
                  tabIndex: 0,
                  onFocus: ee,
                  onBlur: et,
                  onMouseEnter: ee,
                  onMouseLeave: et,
                  className: a()(A.container, { [A.hovered]: P }),
                  children: [
                      null != U &&
                          Y &&
                          (0, i.jsx)('div', {
                              ref: k,
                              className: A.decoWrapper,
                              style: { top: O },
                              children: (0, i.jsx)(m.Z, {
                                  avatarDecorationOverride: q,
                                  user: U,
                                  guildId: null
                              })
                          }),
                      W
                          ? (0, i.jsx)(S.Z, { className: A.image })
                          : J.isAnimated
                            ? (0, i.jsx)(i.Fragment, {
                                  children: (0, i.jsx)(g.Z, {
                                      className: A.assetBlurred,
                                      autoPlay: !1,
                                      children: (0, i.jsx)('source', {
                                          src: J.url,
                                          type: null !== (Z = J.mimetype) && void 0 !== Z ? Z : void 0,
                                          onError: () => en(J.url)
                                      })
                                  })
                              })
                            : (0, i.jsx)('img', {
                                  className: A.image,
                                  src: J.url,
                                  alt: L.config.messages.questName,
                                  onError: () => en(J.url)
                              }),
                      (0, i.jsx)('div', {
                          className: a()(A.overlay, {
                              [A.darkThemeGradient]: X,
                              [A.lightThemeGradient]: !X
                          })
                      }),
                      (0, i.jsx)('div', {
                          ref: w,
                          className: A.logoContainer,
                          style: { transform: 'translateY(-'.concat($, 'px)') },
                          children: (0, i.jsx)(N.ZP, {
                              logotypeClassName: a()(A.logo, { [A.logoWithCosponsor]: Q }),
                              quest: L,
                              withGameTile: !1
                          })
                      }),
                      (0, i.jsxs)('div', {
                          ref: G,
                          className: A.details,
                          children: [
                              (0, i.jsx)(d.Heading, {
                                  className: A.title,
                                  variant: 'heading-md/semibold',
                                  color: 'always-white',
                                  children: b.intl.format(b.t.EAYZAg, { questName: L.config.messages.questName })
                              }),
                              (0, i.jsx)(d.Text, {
                                  variant: 'text-sm/medium',
                                  color: X ? 'text-muted' : 'always-white',
                                  style: { opacity: X ? 1 : 0.75 },
                                  children: b.intl.format(b.t.kXVcV1, {
                                      reward: z.name,
                                      claimedDate: V
                                  })
                              })
                          ]
                      })
                  ]
              })
          });
});
