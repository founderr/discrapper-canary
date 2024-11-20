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
    N = n(981631),
    T = n(388032),
    S = n(874976);
t.Z = (0, r.memo)(function (e) {
    var t, n, l, A, x;
    let { quest: b } = e,
        [Z, L] = (0, r.useState)(!1),
        [y, O] = (0, r.useState)(24),
        [P, R] = (0, r.useState)(!1),
        j = (0, r.useRef)(null),
        D = (0, r.useRef)(null),
        M = (0, r.useRef)(null),
        w = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
        { ref: k, height: U = 0 } = (0, u.Z)(),
        G = (0, h.ZP)(),
        B = (0, I.B6)(null === (t = b.userStatus) || void 0 === t ? void 0 : t.claimedAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        H = null !== (A = null === (n = b.userStatus) || void 0 === n ? void 0 : n.claimedTier) && void 0 !== A ? A : 0,
        V = b.config.rewards[H],
        F = (null == V ? void 0 : V.type) === s.w.COLLECTIBLE,
        { product: z } = (0, p.T)(F && null != V ? V.skuId : null),
        W = null == z ? void 0 : null === (l = z.items) || void 0 === l ? void 0 : l[0];
    (0, u.P)(j, (e) => {
        let { height: t } = e;
        if (!F || null == t || null == D.current || null == j.current || null == M.current) return;
        let n = j.current.getBoundingClientRect(),
            i = D.current.getBoundingClientRect(),
            r = M.current.getBoundingClientRect();
        O((i.top - n.top - r.height) / 2);
    });
    let Y = (0, c.wj)(G),
        K = (0, r.useMemo)(() => (0, v.fh)(b, v.eC.LOGO_TYPE, 'dark'), [b]),
        q = (0, r.useMemo)(() => (0, v.fh)(b, v.eC.REWARD), [b]),
        X = Z ? U + 8 : 0,
        Q = () => {
            L(!0),
                _.default.track(N.rMx.QUEST_HOVER, {
                    quest_id: b.id,
                    ...(0, E.mH)(C.jn.TROPHY_CASE_CARD)
                });
        },
        J = () => L(!1),
        $ = (e) => {
            R(!0),
                _.default.track(N.rMx.QUEST_ASSET_LOADING_FAILURE, {
                    source: e,
                    asset_id: e,
                    quest_id: b.id
                });
        };
    return null == V || P
        ? null
        : (0, i.jsx)(d.FocusRing, {
              children: (0, i.jsxs)('div', {
                  ref: j,
                  tabIndex: 0,
                  onFocus: Q,
                  onBlur: J,
                  onMouseEnter: Q,
                  onMouseLeave: J,
                  className: a()(S.container, { [S.hovered]: Z }),
                  children: [
                      null != w &&
                          F &&
                          (0, i.jsx)('div', {
                              ref: M,
                              className: S.decoWrapper,
                              style: { top: y },
                              children: (0, i.jsx)(m.Z, {
                                  avatarDecorationOverride: W,
                                  user: w,
                                  guildId: null
                              })
                          }),
                      q.isAnimated
                          ? (0, i.jsx)(i.Fragment, {
                                children: (0, i.jsx)(g.Z, {
                                    className: S.assetBlurred,
                                    autoPlay: !1,
                                    children: (0, i.jsx)('source', {
                                        src: q.url,
                                        type: null !== (x = q.mimetype) && void 0 !== x ? x : void 0,
                                        onError: () => $(q.url)
                                    })
                                })
                            })
                          : (0, i.jsx)('img', {
                                className: S.image,
                                src: q.url,
                                alt: b.config.messages.questName,
                                onError: () => $(q.url)
                            }),
                      (0, i.jsx)('div', {
                          className: a()(S.overlay, {
                              [S.darkThemeGradient]: Y,
                              [S.lightThemeGradient]: !Y
                          })
                      }),
                      (0, i.jsx)('div', {
                          ref: D,
                          className: S.logoContainer,
                          style: { transform: 'translateY(-'.concat(X, 'px)') },
                          children: (0, i.jsx)('img', {
                              className: S.logo,
                              src: K.url,
                              alt: b.config.messages.gameTitle
                          })
                      }),
                      (0, i.jsxs)('div', {
                          ref: k,
                          className: S.details,
                          children: [
                              (0, i.jsx)(d.Heading, {
                                  className: S.title,
                                  variant: 'heading-md/semibold',
                                  color: 'always-white',
                                  children: T.intl.format(T.t.EAYZAg, { questName: b.config.messages.questName })
                              }),
                              (0, i.jsx)(d.Text, {
                                  variant: 'text-sm/medium',
                                  color: Y ? 'text-muted' : 'always-white',
                                  style: { opacity: Y ? 1 : 0.75 },
                                  children: T.intl.format(T.t.kXVcV1, {
                                      reward: V.name,
                                      claimedDate: B
                                  })
                              })
                          ]
                      })
                  ]
              })
          });
});
