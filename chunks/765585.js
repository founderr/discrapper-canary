n(47120);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(393238),
    c = n(605236),
    u = n(279745),
    d = n(921944),
    h = n(689938),
    p = n(138592);
t.Z = l.forwardRef(function (e, t) {
    let { body: n, header: r, artClassName: f, headerClassName: m, contentClassName: _, tryItText: g, dismissText: C, onTryFeature: I, onClose: E, className: N, inlineArt: S = !1, isPremiumFeature: x = !1, shouldUseHorizontalButtons: v = !1, showGIFTag: T = !1, dismissibleContent: Z, position: A = 'top', align: b = 'center', art: R, isPremiumEarlyAccess: M = !1, maxWidth: L = 280, hideDismissButton: P = !1, pointerClassName: y, dismissIconClassName: O, dismissIcon: j, onDismissIconClick: D } = e,
        w = v ? s.Button.Sizes.LARGE : s.Button.Sizes.MAX,
        [G, U] = l.useState(!1),
        { ref: k, width: B } = (0, o.Z)();
    function V(e) {
        (0, c.EW)(Z, { dismissAction: e });
    }
    return (
        l.useEffect(() => {
            var e, t;
            let n = (null !== (t = null === (e = k.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
            !G && n > L && U(!0);
        }, [G, B, k, L]),
        l.useEffect(() => {
            (0, c.kk)(Z);
        }, [Z]),
        (0, i.jsx)('div', {
            className: N,
            ref: t,
            children: (0, i.jsxs)('div', {
                className: a()(p.content, _, {
                    [p.contentNoArt]: null == f || S,
                    [p.contentPremium]: x || M
                }),
                children: [
                    null != j &&
                        (0, i.jsx)(s.Clickable, {
                            onClick: D,
                            className: O,
                            children: j
                        }),
                    (0, i.jsxs)('div', {
                        className: a()(f, S ? p.artInline : p.artAbsolute),
                        children: [T && (0, i.jsx)(u.Z, { className: p.gifTag }), R]
                    }),
                    (0, i.jsxs)('div', {
                        className: p.body,
                        children: [
                            (0, i.jsxs)(s.Heading, {
                                className: a()(x ? p.headerWithPremiumIcon : p.header, m),
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: [
                                    x && !M
                                        ? (0, i.jsx)(s.NitroWheelIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: p.premiumIcon
                                          })
                                        : null,
                                    M
                                        ? (0, i.jsxs)(s.Text, {
                                              color: 'always-white',
                                              variant: 'eyebrow',
                                              className: p.earlyAccessBadgeContainer,
                                              children: [
                                                  (0, i.jsx)(s.NitroWheelIcon, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: p.earlyAccessIcon
                                                  }),
                                                  (0, i.jsx)('span', {
                                                      className: p.earlyAccessText,
                                                      children: h.Z.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
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
                                  ? (0, i.jsx)(s.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'always-white',
                                        children: n
                                    })
                                  : n
                        ]
                    }),
                    (0, i.jsx)('div', {
                        ref: k,
                        className: G || !v ? p.buttonContainerVertical : p.buttonContainerHorizontal,
                        children:
                            null != I
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(s.Button, {
                                              className: p.button,
                                              size: w,
                                              onClick: (e) => {
                                                  null == E || E(e), I(e), V(d.L.PRIMARY);
                                              },
                                              color: x || M ? s.Button.Colors.BRAND_INVERTED : s.Button.Colors.WHITE,
                                              children: null != g ? g : h.Z.Messages.EDUCATION_NEW_FEATURE_TRY_IT
                                          }),
                                          !P &&
                                              (0, i.jsx)(s.Button, {
                                                  className: p.button,
                                                  size: w,
                                                  onClick: (e) => {
                                                      null == E || E(e), V(d.L.DISMISS);
                                                  },
                                                  color: x || M ? s.Button.Colors.WHITE : s.Button.Colors.BRAND,
                                                  look: x || M ? s.Button.Looks.LINK : s.Button.Looks.FILLED,
                                                  children: null != C ? C : h.Z.Messages.EDUCATION_NEW_FEATURE_DISMISS
                                              })
                                      ]
                                  })
                                : (0, i.jsx)(s.Button, {
                                      className: p.button,
                                      size: s.Button.Sizes.MAX,
                                      onClick: (e) => {
                                          null == E || E(e), V(d.L.PRIMARY);
                                      },
                                      color: s.Button.Colors.WHITE,
                                      children: h.Z.Messages.EDUCATION_NEW_FEATURE_CONFIRM
                                  })
                    }),
                    (0, i.jsx)('div', {
                        className: a()(p.pointer, y, {
                            [p.bottomPointer]: 'top' === A,
                            [p.centerLeftPointer]: 'right' === A && 'center' === b,
                            [p.topLeftPointer]: 'right' === A && 'top' === b
                        })
                    })
                ]
            })
        })
    );
});
