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
    p = n(138592);
t.Z = r.forwardRef(function (e, t) {
    let { body: n, header: l, artClassName: _, headerClassName: E, contentClassName: g, tryItText: h, dismissText: m, onTryFeature: S, onClose: I, className: v, inlineArt: C = !1, isPremiumFeature: T = !1, shouldUseHorizontalButtons: N = !1, showGIFTag: b = !1, dismissibleContent: A, position: O = 'top', align: L = 'center', art: R, isPremiumEarlyAccess: P = !1, maxWidth: y = 280, hideDismissButton: M = !1, pointerClassName: x, dismissIconClassName: Z, dismissIcon: j, onDismissIconClick: U } = e,
        D = N ? u.Button.Sizes.LARGE : u.Button.Sizes.MAX,
        [F, w] = r.useState(!1),
        { ref: G, width: k } = (0, a.Z)();
    function H(e) {
        (0, s.EW)(A, { dismissAction: e });
    }
    return (
        r.useEffect(() => {
            var e, t;
            let n = (null !== (t = null === (e = G.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
            !F && n > y && w(!0);
        }, [F, k, G, y]),
        r.useEffect(() => {
            (0, s.kk)(A);
        }, [A]),
        (0, i.jsx)('div', {
            className: v,
            ref: t,
            children: (0, i.jsxs)('div', {
                className: o()(p.content, g, {
                    [p.contentNoArt]: null == _ || C,
                    [p.contentPremium]: T || P
                }),
                children: [
                    null != j &&
                        (0, i.jsx)(u.Clickable, {
                            onClick: U,
                            className: Z,
                            children: j
                        }),
                    (0, i.jsxs)('div', {
                        className: o()(_, C ? p.artInline : p.artAbsolute),
                        children: [b && (0, i.jsx)(c.Z, { className: p.gifTag }), R]
                    }),
                    (0, i.jsxs)('div', {
                        className: p.body,
                        children: [
                            (0, i.jsxs)(u.Heading, {
                                className: o()(T ? p.headerWithPremiumIcon : p.header, E),
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: [
                                    T && !P
                                        ? (0, i.jsx)(u.NitroWheelIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: p.premiumIcon
                                          })
                                        : null,
                                    P
                                        ? (0, i.jsxs)(u.Text, {
                                              color: 'always-white',
                                              variant: 'eyebrow',
                                              className: p.earlyAccessBadgeContainer,
                                              children: [
                                                  (0, i.jsx)(u.NitroWheelIcon, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: p.earlyAccessIcon
                                                  }),
                                                  (0, i.jsx)('span', {
                                                      className: p.earlyAccessText,
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
                        className: F || !N ? p.buttonContainerVertical : p.buttonContainerHorizontal,
                        children:
                            null != S
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(u.Button, {
                                              className: p.button,
                                              size: D,
                                              onClick: (e) => {
                                                  null == I || I(e), S(e), H(d.L.PRIMARY);
                                              },
                                              color: T || P ? u.Button.Colors.BRAND_INVERTED : u.Button.Colors.WHITE,
                                              children: null != h ? h : f.intl.string(f.t.IHf1RE)
                                          }),
                                          !M &&
                                              (0, i.jsx)(u.Button, {
                                                  className: p.button,
                                                  size: D,
                                                  onClick: (e) => {
                                                      null == I || I(e), H(d.L.DISMISS);
                                                  },
                                                  color: T || P ? u.Button.Colors.WHITE : u.Button.Colors.BRAND,
                                                  look: T || P ? u.Button.Looks.LINK : u.Button.Looks.FILLED,
                                                  children: null != m ? m : f.intl.string(f.t.om7Ovr)
                                              })
                                      ]
                                  })
                                : (0, i.jsx)(u.Button, {
                                      className: p.button,
                                      size: u.Button.Sizes.MAX,
                                      onClick: (e) => {
                                          null == I || I(e), H(d.L.PRIMARY);
                                      },
                                      color: u.Button.Colors.WHITE,
                                      children: f.intl.string(f.t.HU2IR0)
                                  })
                    }),
                    (0, i.jsx)('div', {
                        className: o()(p.pointer, x, {
                            [p.bottomPointer]: 'top' === O,
                            [p.centerLeftPointer]: 'right' === O && 'center' === L,
                            [p.topLeftPointer]: 'right' === O && 'top' === L
                        })
                    })
                ]
            })
        })
    );
});
