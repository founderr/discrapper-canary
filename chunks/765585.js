n(47120);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(481060),
    a = n(393238),
    s = n(605236),
    c = n(279745),
    d = n(921944),
    f = n(388032),
    _ = n(410842);
t.Z = r.forwardRef(function (e, t) {
    let { body: n, header: o, artClassName: p, headerClassName: g, contentClassName: E, tryItText: m, dismissText: I, onTryFeature: h, onClose: C, className: S, inlineArt: T = !1, isPremiumFeature: v = !1, shouldUseHorizontalButtons: b = !1, showGIFTag: N = !1, dismissibleContent: A, position: O = 'top', align: L = 'center', art: P, isPremiumEarlyAccess: R = !1, maxWidth: M = 280, hideDismissButton: y = !1, pointerClassName: x, dismissIconClassName: Z, dismissIcon: j, onDismissIconClick: U } = e,
        D = b ? u.Button.Sizes.LARGE : u.Button.Sizes.MAX,
        [F, w] = r.useState(!1),
        { ref: G, width: k } = (0, a.Z)();
    function B(e) {
        (0, s.EW)(A, { dismissAction: e });
    }
    return (
        r.useEffect(() => {
            var e, t;
            let n = (null !== (t = null === (e = G.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
            !F && n > M && w(!0);
        }, [F, k, G, M]),
        r.useEffect(() => {
            (0, s.kk)(A);
        }, [A]),
        (0, i.jsx)('div', {
            className: S,
            ref: t,
            children: (0, i.jsxs)('div', {
                className: l()(_.content, E, {
                    [_.contentNoArt]: null == p || T,
                    [_.contentPremium]: v || R
                }),
                children: [
                    null != j &&
                        (0, i.jsx)(u.Clickable, {
                            onClick: U,
                            className: Z,
                            children: j
                        }),
                    (0, i.jsxs)('div', {
                        className: l()(p, T ? _.artInline : _.artAbsolute),
                        children: [N && (0, i.jsx)(c.Z, { className: _.gifTag }), P]
                    }),
                    (0, i.jsxs)('div', {
                        className: _.body,
                        children: [
                            (0, i.jsxs)(u.Heading, {
                                className: l()(v ? _.headerWithPremiumIcon : _.header, g),
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: [
                                    v && !R
                                        ? (0, i.jsx)(u.NitroWheelIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: _.premiumIcon
                                          })
                                        : null,
                                    R
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
                                    o
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
                        className: F || !b ? _.buttonContainerVertical : _.buttonContainerHorizontal,
                        children:
                            null != h
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(u.Button, {
                                              className: _.button,
                                              size: D,
                                              onClick: (e) => {
                                                  null == C || C(e), h(e), B(d.L.PRIMARY);
                                              },
                                              color: v || R ? u.Button.Colors.BRAND_INVERTED : u.Button.Colors.WHITE,
                                              children: null != m ? m : f.intl.string(f.t.IHf1RE)
                                          }),
                                          !y &&
                                              (0, i.jsx)(u.Button, {
                                                  className: _.button,
                                                  size: D,
                                                  onClick: (e) => {
                                                      null == C || C(e), B(d.L.DISMISS);
                                                  },
                                                  color: v || R ? u.Button.Colors.WHITE : u.Button.Colors.BRAND,
                                                  look: v || R ? u.Button.Looks.LINK : u.Button.Looks.FILLED,
                                                  children: null != I ? I : f.intl.string(f.t.om7Ovr)
                                              })
                                      ]
                                  })
                                : (0, i.jsx)(u.Button, {
                                      className: _.button,
                                      size: u.Button.Sizes.MAX,
                                      onClick: (e) => {
                                          null == C || C(e), B(d.L.PRIMARY);
                                      },
                                      color: u.Button.Colors.WHITE,
                                      children: f.intl.string(f.t.HU2IR0)
                                  })
                    }),
                    (0, i.jsx)('div', {
                        className: l()(_.pointer, x, {
                            [_.bottomPointer]: 'top' === O,
                            [_.centerLeftPointer]: 'right' === O && 'center' === L,
                            [_.topLeftPointer]: 'right' === O && 'top' === L
                        })
                    })
                ]
            })
        })
    );
});
