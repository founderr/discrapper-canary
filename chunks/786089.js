n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(887003),
    o = n(442837),
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
    S = n(685613),
    N = n(981631),
    T = n(388032),
    A = n(874976);
t.Z = (0, r.memo)(function (e) {
    var t, n, l, b, x;
    let { quest: Z } = e,
        [L, y] = (0, r.useState)(!1),
        [O, R] = (0, r.useState)(24),
        [P, j] = (0, r.useState)(!1),
        D = (0, r.useRef)(null),
        M = (0, r.useRef)(null),
        w = (0, r.useRef)(null),
        k = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
        { ref: U, height: G = 0 } = (0, u.Z)(),
        B = (0, h.ZP)(),
        V = (0, I.B6)(null === (t = Z.userStatus) || void 0 === t ? void 0 : t.claimedAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        H = null !== (b = null === (n = Z.userStatus) || void 0 === n ? void 0 : n.claimedTier) && void 0 !== b ? b : 0,
        F = Z.config.rewards[H],
        z = (null == F ? void 0 : F.type) === s.w.COLLECTIBLE,
        { product: Y } = (0, p.T)(z && null != F ? F.skuId : null),
        W = null == Y ? void 0 : null === (l = Y.items) || void 0 === l ? void 0 : l[0];
    (0, u.P)(D, (e) => {
        let { height: t } = e;
        if (!z || null == t || null == M.current || null == D.current || null == w.current) return;
        let n = D.current.getBoundingClientRect(),
            i = M.current.getBoundingClientRect(),
            r = w.current.getBoundingClientRect();
        R((i.top - n.top - r.height) / 2);
    });
    let K = (0, c.wj)(B),
        q = (0, r.useMemo)(() => null != Z.config.cosponsorMetadata, [Z]),
        X = (0, r.useMemo)(() => (0, v.fh)(Z, v.eC.REWARD), [Z]),
        Q = L ? G + 8 : 0,
        J = () => {
            y(!0),
                _.default.track(N.rMx.QUEST_HOVER, {
                    quest_id: Z.id,
                    ...(0, E.mH)(C.jn.TROPHY_CASE_CARD)
                });
        },
        $ = () => y(!1),
        ee = (e) => {
            j(!0),
                _.default.track(N.rMx.QUEST_ASSET_LOADING_FAILURE, {
                    source: e,
                    asset_id: e,
                    quest_id: Z.id
                });
        };
    return null == F || P
        ? null
        : (0, i.jsx)(d.FocusRing, {
              children: (0, i.jsxs)('div', {
                  ref: D,
                  tabIndex: 0,
                  onFocus: J,
                  onBlur: $,
                  onMouseEnter: J,
                  onMouseLeave: $,
                  className: a()(A.container, { [A.hovered]: L }),
                  children: [
                      null != k &&
                          z &&
                          (0, i.jsx)('div', {
                              ref: w,
                              className: A.decoWrapper,
                              style: { top: O },
                              children: (0, i.jsx)(m.Z, {
                                  avatarDecorationOverride: W,
                                  user: k,
                                  guildId: null
                              })
                          }),
                      X.isAnimated
                          ? (0, i.jsx)(i.Fragment, {
                                children: (0, i.jsx)(g.Z, {
                                    className: A.assetBlurred,
                                    autoPlay: !1,
                                    children: (0, i.jsx)('source', {
                                        src: X.url,
                                        type: null !== (x = X.mimetype) && void 0 !== x ? x : void 0,
                                        onError: () => ee(X.url)
                                    })
                                })
                            })
                          : (0, i.jsx)('img', {
                                className: A.image,
                                src: X.url,
                                alt: Z.config.messages.questName,
                                onError: () => ee(X.url)
                            }),
                      (0, i.jsx)('div', {
                          className: a()(A.overlay, {
                              [A.darkThemeGradient]: K,
                              [A.lightThemeGradient]: !K
                          })
                      }),
                      (0, i.jsx)('div', {
                          ref: M,
                          className: A.logoContainer,
                          style: { transform: 'translateY(-'.concat(Q, 'px)') },
                          children: (0, i.jsx)(S.ZP, {
                              logotypeClassName: a()(A.logo, { [A.logoWithCosponsor]: q }),
                              quest: Z,
                              withGameTile: !1
                          })
                      }),
                      (0, i.jsxs)('div', {
                          ref: U,
                          className: A.details,
                          children: [
                              (0, i.jsx)(d.Heading, {
                                  className: A.title,
                                  variant: 'heading-md/semibold',
                                  color: 'always-white',
                                  children: T.intl.format(T.t.EAYZAg, { questName: Z.config.messages.questName })
                              }),
                              (0, i.jsx)(d.Text, {
                                  variant: 'text-sm/medium',
                                  color: K ? 'text-muted' : 'always-white',
                                  style: { opacity: K ? 1 : 0.75 },
                                  children: T.intl.format(T.t.kXVcV1, {
                                      reward: F.name,
                                      claimedDate: V
                                  })
                              })
                          ]
                      })
                  ]
              })
          });
});
