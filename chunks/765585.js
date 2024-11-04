n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(481060),
    s = n(393238),
    c = n(605236),
    u = n(279745),
    d = n(921944),
    h = n(388032),
    p = n(138592);
t.Z = l.forwardRef(function (e, t) {
    let { body: n, header: r, artClassName: f, headerClassName: m, contentClassName: g, tryItText: C, dismissText: _, onTryFeature: x, onClose: v, className: I, inlineArt: b = !1, isPremiumFeature: S = !1, shouldUseHorizontalButtons: Z = !1, showGIFTag: N = !1, dismissibleContent: E, position: y = 'top', align: j = 'center', art: T, isPremiumEarlyAccess: P = !1, maxWidth: A = 280, hideDismissButton: M = !1, pointerClassName: w, dismissIconClassName: L, dismissIcon: R, onDismissIconClick: D } = e,
        O = Z ? o.Button.Sizes.LARGE : o.Button.Sizes.MAX,
        [k, U] = l.useState(!1),
        { ref: G, width: B } = (0, s.Z)();
    function V(e) {
        (0, c.EW)(E, { dismissAction: e });
    }
    return (
        l.useEffect(() => {
            var e, t;
            let n = (null !== (t = null === (e = G.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
            !k && n > A && U(!0);
        }, [k, B, G, A]),
        l.useEffect(() => {
            (0, c.kk)(E);
        }, [E]),
        (0, i.jsx)('div', {
            className: I,
            ref: t,
            children: (0, i.jsxs)('div', {
                className: a()(p.content, g, {
                    [p.contentNoArt]: null == f || b,
                    [p.contentPremium]: S || P
                }),
                children: [
                    null != R &&
                        (0, i.jsx)(o.Clickable, {
                            onClick: D,
                            className: L,
                            children: R
                        }),
                    (0, i.jsxs)('div', {
                        className: a()(f, b ? p.artInline : p.artAbsolute),
                        children: [N && (0, i.jsx)(u.Z, { className: p.gifTag }), T]
                    }),
                    (0, i.jsxs)('div', {
                        className: p.body,
                        children: [
                            (0, i.jsxs)(o.Heading, {
                                className: a()(S ? p.headerWithPremiumIcon : p.header, m),
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: [
                                    S && !P
                                        ? (0, i.jsx)(o.NitroWheelIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: p.premiumIcon
                                          })
                                        : null,
                                    P
                                        ? (0, i.jsxs)(o.Text, {
                                              color: 'always-white',
                                              variant: 'eyebrow',
                                              className: p.earlyAccessBadgeContainer,
                                              children: [
                                                  (0, i.jsx)(o.NitroWheelIcon, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: p.earlyAccessIcon
                                                  }),
                                                  (0, i.jsx)('span', {
                                                      className: p.earlyAccessText,
                                                      children: h.intl.string(h.t.phHyIS)
                                                  })
                                              ]
                                          })
                                        : null,
                                    r
                                ]
                            }),
                            null == n
                                ? null
                                : 'string' == typeof n
                                  ? (0, i.jsx)(o.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'always-white',
                                        children: n
                                    })
                                  : n
                        ]
                    }),
                    (0, i.jsx)('div', {
                        ref: G,
                        className: k || !Z ? p.buttonContainerVertical : p.buttonContainerHorizontal,
                        children:
                            null != x
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(o.Button, {
                                              className: p.button,
                                              size: O,
                                              onClick: (e) => {
                                                  null == v || v(e), x(e), V(d.L.PRIMARY);
                                              },
                                              color: S || P ? o.Button.Colors.BRAND_INVERTED : o.Button.Colors.WHITE,
                                              children: null != C ? C : h.intl.string(h.t.IHf1RE)
                                          }),
                                          !M &&
                                              (0, i.jsx)(o.Button, {
                                                  className: p.button,
                                                  size: O,
                                                  onClick: (e) => {
                                                      null == v || v(e), V(d.L.DISMISS);
                                                  },
                                                  color: S || P ? o.Button.Colors.WHITE : o.Button.Colors.BRAND,
                                                  look: S || P ? o.Button.Looks.LINK : o.Button.Looks.FILLED,
                                                  children: null != _ ? _ : h.intl.string(h.t.om7Ovr)
                                              })
                                      ]
                                  })
                                : (0, i.jsx)(o.Button, {
                                      className: p.button,
                                      size: o.Button.Sizes.MAX,
                                      onClick: (e) => {
                                          null == v || v(e), V(d.L.PRIMARY);
                                      },
                                      color: o.Button.Colors.WHITE,
                                      children: h.intl.string(h.t.HU2IR0)
                                  })
                    }),
                    (0, i.jsx)('div', {
                        className: a()(p.pointer, w, {
                            [p.bottomPointer]: 'top' === y,
                            [p.centerLeftPointer]: 'right' === y && 'center' === j,
                            [p.topLeftPointer]: 'right' === y && 'top' === j
                        })
                    })
                ]
            })
        })
    );
});
