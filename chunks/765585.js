n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    u = n(481060),
    a = n(393238),
    s = n(605236),
    c = n(279745),
    d = n(921944),
    f = n(388032),
    _ = n(410842);
t.Z = r.forwardRef(function (e, t) {
    let { body: n, header: l, artClassName: E, headerClassName: p, contentClassName: m, tryItText: g, dismissText: h, onTryFeature: I, onClose: S, className: C, inlineArt: T = !1, isPremiumFeature: v = !1, shouldUseHorizontalButtons: N = !1, showGIFTag: A = !1, dismissibleContent: b, position: L = 'top', align: O = 'center', art: R, isPremiumEarlyAccess: P = !1, maxWidth: y = 280, hideDismissButton: Z = !1, pointerClassName: M, dismissIconClassName: x, dismissIcon: j, onDismissIconClick: U } = e,
        D = N ? u.Button.Sizes.LARGE : u.Button.Sizes.MAX,
        [F, w] = r.useState(!1),
        { ref: G, width: H } = (0, a.Z)();
    function k(e) {
        (0, s.EW)(b, { dismissAction: e });
    }
    return (
        r.useEffect(() => {
            var e, t;
            let n = (null !== (t = null === (e = G.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
            !F && n > y && w(!0);
        }, [F, H, G, y]),
        r.useEffect(() => {
            (0, s.kk)(b);
        }, [b]),
        (0, i.jsx)('div', {
            className: C,
            ref: t,
            children: (0, i.jsxs)('div', {
                className: o()(_.content, m, {
                    [_.contentNoArt]: null == E || T,
                    [_.contentPremium]: v || P
                }),
                children: [
                    null != j &&
                        (0, i.jsx)(u.Clickable, {
                            onClick: U,
                            className: x,
                            children: j
                        }),
                    (0, i.jsxs)('div', {
                        className: o()(E, T ? _.artInline : _.artAbsolute),
                        children: [A && (0, i.jsx)(c.Z, { className: _.gifTag }), R]
                    }),
                    (0, i.jsxs)('div', {
                        className: _.body,
                        children: [
                            (0, i.jsxs)(u.Heading, {
                                className: o()(v ? _.headerWithPremiumIcon : _.header, p),
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: [
                                    v && !P
                                        ? (0, i.jsx)(u.NitroWheelIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: _.premiumIcon
                                          })
                                        : null,
                                    P
                                        ? (0, i.jsxs)(u.Text, {
                                              color: 'always-white',
                                              variant: 'eyebrow',
                                              className: _.earlyAccessBadgeContainer,
                                              children: [
                                                  (0, i.jsx)(u.NitroWheelIcon, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: _.earlyAccessIcon
                                                  }),
                                                  (0, i.jsx)('span', {
                                                      className: _.earlyAccessText,
                                                      children: f.intl.string(f.t.phHyIS)
                                                  })
                                              ]
                                          })
                                        : null,
                                    l
                                ]
                            }),
                            null == n
                                ? null
                                : 'string' == typeof n
                                  ? (0, i.jsx)(u.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'always-white',
                                        children: n
                                    })
                                  : n
                        ]
                    }),
                    (0, i.jsx)('div', {
                        ref: G,
                        className: F || !N ? _.buttonContainerVertical : _.buttonContainerHorizontal,
                        children:
                            null != I
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(u.Button, {
                                              className: _.button,
                                              size: D,
                                              onClick: (e) => {
                                                  null == S || S(e), I(e), k(d.L.PRIMARY);
                                              },
                                              color: v || P ? u.Button.Colors.BRAND_INVERTED : u.Button.Colors.WHITE,
                                              children: null != g ? g : f.intl.string(f.t.IHf1RE)
                                          }),
                                          !Z &&
                                              (0, i.jsx)(u.Button, {
                                                  className: _.button,
                                                  size: D,
                                                  onClick: (e) => {
                                                      null == S || S(e), k(d.L.DISMISS);
                                                  },
                                                  color: v || P ? u.Button.Colors.WHITE : u.Button.Colors.BRAND,
                                                  look: v || P ? u.Button.Looks.LINK : u.Button.Looks.FILLED,
                                                  children: null != h ? h : f.intl.string(f.t.om7Ovr)
                                              })
                                      ]
                                  })
                                : (0, i.jsx)(u.Button, {
                                      className: _.button,
                                      size: u.Button.Sizes.MAX,
                                      onClick: (e) => {
                                          null == S || S(e), k(d.L.PRIMARY);
                                      },
                                      color: u.Button.Colors.WHITE,
                                      children: f.intl.string(f.t.HU2IR0)
                                  })
                    }),
                    (0, i.jsx)('div', {
                        className: o()(_.pointer, M, {
                            [_.bottomPointer]: 'top' === L,
                            [_.centerLeftPointer]: 'right' === L && 'center' === O,
                            [_.topLeftPointer]: 'right' === L && 'top' === O
                        })
                    })
                ]
            })
        })
    );
});
