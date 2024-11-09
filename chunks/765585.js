t(47120);
var i = t(200651),
    r = t(192379),
    l = t(120356),
    o = t.n(l),
    u = t(481060),
    a = t(393238),
    s = t(605236),
    c = t(279745),
    d = t(921944),
    f = t(388032),
    p = t(138592);
n.Z = r.forwardRef(function (e, n) {
    let { body: t, header: l, artClassName: _, headerClassName: m, contentClassName: g, tryItText: E, dismissText: h, onTryFeature: I, onClose: S, className: v, inlineArt: C = !1, isPremiumFeature: T = !1, shouldUseHorizontalButtons: N = !1, showGIFTag: b = !1, dismissibleContent: A, position: O = 'top', align: P = 'center', art: R, isPremiumEarlyAccess: x = !1, maxWidth: L = 280, hideDismissButton: y = !1, pointerClassName: M, dismissIconClassName: Z, dismissIcon: j, onDismissIconClick: D } = e,
        U = N ? u.Button.Sizes.LARGE : u.Button.Sizes.MAX,
        [w, F] = r.useState(!1),
        { ref: G, width: k } = (0, a.Z)();
    function H(e) {
        (0, s.EW)(A, { dismissAction: e });
    }
    return (
        r.useEffect(() => {
            var e, n;
            let t = (null !== (n = null === (e = G.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== n ? n : 0) + 64;
            !w && t > L && F(!0);
        }, [w, k, G, L]),
        r.useEffect(() => {
            (0, s.kk)(A);
        }, [A]),
        (0, i.jsx)('div', {
            className: v,
            ref: n,
            children: (0, i.jsxs)('div', {
                className: o()(p.content, g, {
                    [p.contentNoArt]: null == _ || C,
                    [p.contentPremium]: T || x
                }),
                children: [
                    null != j &&
                        (0, i.jsx)(u.Clickable, {
                            onClick: D,
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
                                className: o()(T ? p.headerWithPremiumIcon : p.header, m),
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: [
                                    T && !x
                                        ? (0, i.jsx)(u.NitroWheelIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: p.premiumIcon
                                          })
                                        : null,
                                    x
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
                            null == t
                                ? null
                                : 'string' == typeof t
                                  ? (0, i.jsx)(u.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'always-white',
                                        children: t
                                    })
                                  : t
                        ]
                    }),
                    (0, i.jsx)('div', {
                        ref: G,
                        className: w || !N ? p.buttonContainerVertical : p.buttonContainerHorizontal,
                        children:
                            null != I
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(u.Button, {
                                              className: p.button,
                                              size: U,
                                              onClick: (e) => {
                                                  null == S || S(e), I(e), H(d.L.PRIMARY);
                                              },
                                              color: T || x ? u.Button.Colors.BRAND_INVERTED : u.Button.Colors.WHITE,
                                              children: null != E ? E : f.intl.string(f.t.IHf1RE)
                                          }),
                                          !y &&
                                              (0, i.jsx)(u.Button, {
                                                  className: p.button,
                                                  size: U,
                                                  onClick: (e) => {
                                                      null == S || S(e), H(d.L.DISMISS);
                                                  },
                                                  color: T || x ? u.Button.Colors.WHITE : u.Button.Colors.BRAND,
                                                  look: T || x ? u.Button.Looks.LINK : u.Button.Looks.FILLED,
                                                  children: null != h ? h : f.intl.string(f.t.om7Ovr)
                                              })
                                      ]
                                  })
                                : (0, i.jsx)(u.Button, {
                                      className: p.button,
                                      size: u.Button.Sizes.MAX,
                                      onClick: (e) => {
                                          null == S || S(e), H(d.L.PRIMARY);
                                      },
                                      color: u.Button.Colors.WHITE,
                                      children: f.intl.string(f.t.HU2IR0)
                                  })
                    }),
                    (0, i.jsx)('div', {
                        className: o()(p.pointer, M, {
                            [p.bottomPointer]: 'top' === O,
                            [p.centerLeftPointer]: 'right' === O && 'center' === P,
                            [p.topLeftPointer]: 'right' === O && 'top' === P
                        })
                    })
                ]
            })
        })
    );
});
