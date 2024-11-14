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
    S = n(981631),
    N = n(388032),
    T = n(874976);
t.Z = (0, r.memo)(function (e) {
    var t, n, l, A, b;
    let { quest: x } = e,
        [Z, L] = (0, r.useState)(!1),
        [y, O] = (0, r.useState)(24),
        [R, P] = (0, r.useState)(!1),
        j = (0, r.useRef)(null),
        D = (0, r.useRef)(null),
        M = (0, r.useRef)(null),
        w = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
        { ref: k, height: U = 0 } = (0, u.Z)(),
        G = (0, h.ZP)(),
        B = (0, I.B6)(null === (t = x.userStatus) || void 0 === t ? void 0 : t.claimedAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        V = null !== (A = null === (n = x.userStatus) || void 0 === n ? void 0 : n.claimedTier) && void 0 !== A ? A : 0,
        H = x.config.rewards[V],
        F = (null == H ? void 0 : H.type) === s.w.COLLECTIBLE,
        { product: z } = (0, p.T)(F && null != H ? H.skuId : null),
        Y = null == z ? void 0 : null === (l = z.items) || void 0 === l ? void 0 : l[0];
    (0, u.P)(j, (e) => {
        let { height: t } = e;
        if (!F || null == t || null == D.current || null == j.current || null == M.current) return;
        let n = j.current.getBoundingClientRect(),
            i = D.current.getBoundingClientRect(),
            r = M.current.getBoundingClientRect();
        O((i.top - n.top - r.height) / 2);
    });
    let W = (0, c.wj)(G),
        K = (0, r.useMemo)(() => (0, v.fh)(x, v.eC.LOGO_TYPE, 'dark'), [x]),
        q = (0, r.useMemo)(() => (0, v.fh)(x, v.eC.REWARD), [x]),
        X = Z ? U + 8 : 0,
        Q = () => {
            L(!0),
                _.default.track(S.rMx.QUEST_HOVER, {
                    quest_id: x.id,
                    ...(0, E.mH)(C.jn.TROPHY_CASE_CARD)
                });
        },
        J = () => L(!1),
        $ = (e) => {
            P(!0),
                _.default.track(S.rMx.QUEST_ASSET_LOADING_FAILURE, {
                    source: e,
                    asset_id: e,
                    quest_id: x.id
                });
        };
    return null == H || R
        ? null
        : (0, i.jsx)(d.FocusRing, {
              children: (0, i.jsxs)('div', {
                  ref: j,
                  tabIndex: 0,
                  onFocus: Q,
                  onBlur: J,
                  onMouseEnter: Q,
                  onMouseLeave: J,
                  className: a()(T.container, { [T.hovered]: Z }),
                  children: [
                      null != w &&
                          F &&
                          (0, i.jsx)('div', {
                              ref: M,
                              className: T.decoWrapper,
                              style: { top: y },
                              children: (0, i.jsx)(m.Z, {
                                  avatarDecorationOverride: Y,
                                  user: w,
                                  guildId: null
                              })
                          }),
                      q.isAnimated
                          ? (0, i.jsx)(i.Fragment, {
                                children: (0, i.jsx)(g.Z, {
                                    className: T.assetBlurred,
                                    autoPlay: !1,
                                    children: (0, i.jsx)('source', {
                                        src: q.url,
                                        type: null !== (b = q.mimetype) && void 0 !== b ? b : void 0,
                                        onError: () => $(q.url)
                                    })
                                })
                            })
                          : (0, i.jsx)('img', {
                                className: T.image,
                                src: q.url,
                                alt: x.config.messages.questName,
                                onError: () => $(q.url)
                            }),
                      (0, i.jsx)('div', {
                          className: a()(T.overlay, {
                              [T.darkThemeGradient]: W,
                              [T.lightThemeGradient]: !W
                          })
                      }),
                      (0, i.jsx)('div', {
                          ref: D,
                          className: T.logoContainer,
                          style: { transform: 'translateY(-'.concat(X, 'px)') },
                          children: (0, i.jsx)('img', {
                              className: T.logo,
                              src: K.url,
                              alt: x.config.messages.gameTitle
                          })
                      }),
                      (0, i.jsxs)('div', {
                          ref: k,
                          className: T.details,
                          children: [
                              (0, i.jsx)(d.Heading, {
                                  className: T.title,
                                  variant: 'heading-md/semibold',
                                  color: 'always-white',
                                  children: N.intl.format(N.t.EAYZAg, { questName: x.config.messages.questName })
                              }),
                              (0, i.jsx)(d.Text, {
                                  variant: 'text-sm/medium',
                                  color: W ? 'text-muted' : 'always-white',
                                  style: { opacity: W ? 1 : 0.75 },
                                  children: N.intl.format(N.t.kXVcV1, {
                                      reward: H.name,
                                      claimedDate: B
                                  })
                              })
                          ]
                      })
                  ]
              })
          });
});
