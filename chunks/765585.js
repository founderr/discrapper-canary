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
    let { body: n, header: r, artClassName: f, headerClassName: m, contentClassName: g, tryItText: C, dismissText: _, onTryFeature: x, onClose: v, className: I, inlineArt: b = !1, isPremiumFeature: N = !1, shouldUseHorizontalButtons: E = !1, showGIFTag: S = !1, dismissibleContent: Z, position: y = 'top', align: T = 'center', art: j, isPremiumEarlyAccess: A = !1, maxWidth: P = 280, hideDismissButton: R = !1, pointerClassName: M, dismissIconClassName: L, dismissIcon: w, onDismissIconClick: D } = e,
        O = E ? o.Button.Sizes.LARGE : o.Button.Sizes.MAX,
        [k, G] = l.useState(!1),
        { ref: U, width: B } = (0, s.Z)();
    function H(e) {
        (0, c.EW)(Z, { dismissAction: e });
    }
    return (
        l.useEffect(() => {
            var e, t;
            let n = (null !== (t = null === (e = U.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
            !k && n > P && G(!0);
        }, [k, B, U, P]),
        l.useEffect(() => {
            (0, c.kk)(Z);
        }, [Z]),
        (0, i.jsx)('div', {
            className: I,
            ref: t,
            children: (0, i.jsxs)('div', {
                className: a()(p.content, g, {
                    [p.contentNoArt]: null == f || b,
                    [p.contentPremium]: N || A
                }),
                children: [
                    null != w &&
                        (0, i.jsx)(o.Clickable, {
                            onClick: D,
                            className: L,
                            children: w
                        }),
                    (0, i.jsxs)('div', {
                        className: a()(f, b ? p.artInline : p.artAbsolute),
                        children: [S && (0, i.jsx)(u.Z, { className: p.gifTag }), j]
                    }),
                    (0, i.jsxs)('div', {
                        className: p.body,
                        children: [
                            (0, i.jsxs)(o.Heading, {
                                className: a()(N ? p.headerWithPremiumIcon : p.header, m),
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: [
                                    N && !A
                                        ? (0, i.jsx)(o.NitroWheelIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: p.premiumIcon
                                          })
                                        : null,
                                    A
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
                        ref: U,
                        className: k || !E ? p.buttonContainerVertical : p.buttonContainerHorizontal,
                        children:
                            null != x
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(o.Button, {
                                              className: p.button,
                                              size: O,
                                              onClick: (e) => {
                                                  null == v || v(e), x(e), H(d.L.PRIMARY);
                                              },
                                              color: N || A ? o.Button.Colors.BRAND_INVERTED : o.Button.Colors.WHITE,
                                              children: null != C ? C : h.intl.string(h.t.IHf1RE)
                                          }),
                                          !R &&
                                              (0, i.jsx)(o.Button, {
                                                  className: p.button,
                                                  size: O,
                                                  onClick: (e) => {
                                                      null == v || v(e), H(d.L.DISMISS);
                                                  },
                                                  color: N || A ? o.Button.Colors.WHITE : o.Button.Colors.BRAND,
                                                  look: N || A ? o.Button.Looks.LINK : o.Button.Looks.FILLED,
                                                  children: null != _ ? _ : h.intl.string(h.t.om7Ovr)
                                              })
                                      ]
                                  })
                                : (0, i.jsx)(o.Button, {
                                      className: p.button,
                                      size: o.Button.Sizes.MAX,
                                      onClick: (e) => {
                                          null == v || v(e), H(d.L.PRIMARY);
                                      },
                                      color: o.Button.Colors.WHITE,
                                      children: h.intl.string(h.t.HU2IR0)
                                  })
                    }),
                    (0, i.jsx)('div', {
                        className: a()(p.pointer, M, {
                            [p.bottomPointer]: 'top' === y,
                            [p.centerLeftPointer]: 'right' === y && 'center' === T,
                            [p.topLeftPointer]: 'right' === y && 'top' === T
                        })
                    })
                ]
            })
        })
    );
});
