n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(392711),
    d = n.n(c),
    u = n(75124),
    m = n(215569),
    h = n(477690),
    g = n(481060),
    x = n(852860),
    p = n(393238),
    f = n(313201),
    C = n(345861),
    _ = n(208567),
    v = n(73346),
    I = n(624138),
    N = n(584825),
    T = n(723047),
    j = n(927954),
    b = n(164000),
    S = n(587431),
    E = n(293810),
    R = n(333866),
    y = n(388032),
    Z = n(848720);
let A = (0, I.Mg)(h.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);
function L() {
    return [
        {
            name: y.intl.string(y.t.rXqxhI),
            desc: y.intl.string(y.t.yQiJnZ),
            value: E.e3.SOME_CHANNELS,
            icon: g.TextIcon
        },
        {
            name: y.intl.string(y.t.WzC9s7),
            desc: y.intl.string(y.t.WmagiI),
            value: E.e3.ALL_CHANNELS,
            icon: g.KeyIcon
        }
    ];
}
function D(e) {
    let { value: t, 'aria-labelledby': n, onChange: l, disabled: a = !1 } = e,
        { ref: o, width: c } = (0, p.Z)(),
        d = (0, u.Z)(L),
        m = r.useMemo(
            () =>
                d.map((e) => ({
                    ...e,
                    icon: function () {
                        let { icon: t } = e;
                        return (0, i.jsx)('div', {
                            className: Z.formatRadioIconWrapper,
                            children: (0, i.jsx)(t, { className: Z.formatRadioIcon })
                        });
                    },
                    radioBarClassName: Z.formatOptionRadioBar,
                    radioItemIconClassName: Z.formatOptionRadioItemIcon
                })),
            [d]
        ),
        h = null != c && c >= 400;
    return (0, i.jsx)('div', {
        ref: o,
        children: (0, i.jsx)(g.RadioGroup, {
            options: m,
            value: t,
            orientation: h ? 'horizontal' : 'vertical',
            size: g.RadioGroup.Sizes.NONE,
            className: s()({ [Z.radioGroupHorizontal]: h }),
            radioItemClassName: Z.formatOptionRadioItem,
            onChange: (e) => {
                let { value: t } = e;
                return l(t);
            },
            'aria-labelledby': n,
            disabled: a
        })
    });
}
function O(e) {
    var t;
    let { guild: n, isGuildProducts: l = !1 } = e,
        { format: s } = (0, b.Z)(n.id),
        a = (0, N.YB)(n.id),
        c = r.useCallback(() => {
            var e;
            return (null == a ? void 0 : null === (e = a.cover_image_asset) || void 0 === e ? void 0 : e.application_id) == null ? null : (0, v._W)(a.cover_image_asset.application_id, a.cover_image_asset, A);
        }, [a]),
        [u, h] = r.useState(s),
        [p, I] = r.useState(null !== (t = null == a ? void 0 : a.description) && void 0 !== t ? t : ''),
        [L, O] = r.useState(c),
        [k, P] = r.useState(null == a ? void 0 : a.store_page_guild_products_default_sort),
        [M, w] = r.useState(null == a ? void 0 : a.server_shop_tab_order),
        { loading: B, error: U, updateSubscriptionsSettings: G } = (0, N.QV)(),
        { imageCTA: F, imageAriaLabel: H, setFilename: z } = (0, j.Z)(null == a ? void 0 : a.cover_image_asset),
        W = (0, f.Dt)(),
        V = (0, f.Dt)(),
        Y = (0, f.Dt)();
    function K(e, t) {
        o()(null != e, 'Null value not allowed'), null != t && z(t.name), O(e);
    }
    let q = r.useMemo(() => {
            var e;
            return (null != p && p !== (null !== (e = null == a ? void 0 : a.description) && void 0 !== e ? e : '')) || (null == L ? void 0 : L.startsWith('data:')) === !0 || u !== s || (null == a ? void 0 : a.store_page_guild_products_default_sort) !== k || (null == a ? void 0 : a.server_shop_tab_order) !== M;
        }, [L, s, p, a, u, k, M]),
        X = null != p && '' !== p && null != L;
    r.useEffect(() => {
        var e;
        (null == a ? void 0 : null === (e = a.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null && O((0, v._W)(a.cover_image_asset.application_id, a.cover_image_asset, A));
    }, [null == a ? void 0 : a.cover_image_asset]);
    let Q = (0, T.mY)(),
        J = r.useMemo(
            () =>
                R.kL.map((e) => ({
                    label: (0, R.eJ)(e),
                    value: e
                })),
            []
        ),
        $ = r.useMemo(
            () => [
                {
                    label: y.intl.string(y.t.X6h2g4),
                    value: R.a3.PRODUCTS_FIRST
                },
                {
                    label: y.intl.string(y.t['KzCF//']),
                    value: R.a3.SUBS_FIRST
                }
            ],
            []
        );
    return (0, i.jsxs)('div', {
        className: Z.container,
        children: [
            null != U &&
                (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(S.Z, { children: U.getAnyErrorMessage() }), (0, i.jsx)(g.Spacer, { size: 16 })]
                }),
            l
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)(g.FormSection, {
                              title: y.intl.string(y.t['PAVi+/']),
                              titleId: W,
                              disabled: Q,
                              children: [
                                  (0, i.jsx)(g.FormText, {
                                      type: g.FormText.Types.DESCRIPTION,
                                      className: Z.formDescription,
                                      disabled: Q,
                                      children: y.intl.string(y.t.x87YqK)
                                  }),
                                  (0, i.jsx)(D, {
                                      value: u,
                                      onChange: (e) => {
                                          s !== e &&
                                              e === E.e3.ALL_CHANNELS &&
                                              (0, g.openModal)((e) =>
                                                  (0, i.jsx)(g.ConfirmModal, {
                                                      ...e,
                                                      header: y.intl.string(y.t.dmVoOz),
                                                      confirmText: y.intl.string(y.t['NX+WJC']),
                                                      confirmButtonColor: g.Button.Colors.BRAND,
                                                      children: (0, i.jsx)(g.Text, {
                                                          variant: 'text-md/normal',
                                                          children: y.intl.string(y.t.mtwzdH)
                                                      })
                                                  })
                                              ),
                                              h(e);
                                      },
                                      'aria-labelledby': W,
                                      disabled: Q
                                  })
                              ]
                          }),
                          (0, i.jsx)(g.FormDivider, { className: Z.divider })
                      ]
                  }),
            (0, i.jsx)(g.FormSection, {
                title: y.intl.string(y.t['1+Ho1d']),
                titleId: V,
                disabled: Q,
                children: (0, i.jsx)(g.TextArea, {
                    placeholder: l ? y.intl.string(y.t.SD6LRU) : y.intl.string(y.t['aVhW/f']),
                    maxLength: 1500,
                    value: p,
                    rows: 2,
                    autosize: !0,
                    onChange: I,
                    'aria-labelledby': V,
                    disabled: Q
                })
            }),
            (0, i.jsx)(g.FormDivider, { className: Z.divider }),
            (0, i.jsxs)(g.FormSection, {
                title: y.intl.string(y.t['0kpTpK']),
                disabled: Q,
                children: [
                    (0, i.jsx)(g.FormText, {
                        type: g.FormText.Types.DESCRIPTION,
                        className: Z.formDescription,
                        disabled: Q,
                        children: y.intl.string(y.t.i2rCwc)
                    }),
                    (0, i.jsx)(_.Z, {
                        image: L,
                        hint: F,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: Z.coverImageUploader,
                        iconWrapperClassName: Z.coverImageUploaderIconWrapper,
                        imageClassName: Z.coverImageUploaderInner,
                        iconClassName: Z.coverImageUploaderIcon,
                        onChange: K,
                        'aria-label': H,
                        disabled: Q
                    }),
                    (0, i.jsx)(g.Spacer, { size: 16 }),
                    (0, i.jsx)(C.Z, {
                        onChange: K,
                        buttonCTA: F,
                        'aria-label': H,
                        disabled: Q,
                        look: g.Button.Looks.OUTLINED,
                        color: g.Button.Colors.PRIMARY
                    })
                ]
            }),
            l
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.FormDivider, { className: Z.divider }),
                          (0, i.jsxs)(g.FormSection, {
                              title: y.intl.string(y.t.aaZ9pK),
                              titleId: Y,
                              disabled: Q,
                              children: [
                                  (0, i.jsx)(g.FormText, {
                                      type: g.FormText.Types.DESCRIPTION,
                                      className: Z.formDescription,
                                      disabled: Q,
                                      children: y.intl.string(y.t.TILN8v)
                                  }),
                                  (0, i.jsx)(g.SingleSelect, {
                                      value: k,
                                      placeholder: y.intl.string(y.t.XqMe3N),
                                      options: J,
                                      onChange: (e) => P(e)
                                  })
                              ]
                          })
                      ]
                  })
                : null,
            $.length > 0 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(g.FormDivider, { className: Z.divider }),
                        (0, i.jsxs)(g.FormSection, {
                            title: y.intl.string(y.t['+dtmw8']),
                            titleId: Y,
                            disabled: Q,
                            children: [
                                (0, i.jsx)(g.FormText, {
                                    type: g.FormText.Types.DESCRIPTION,
                                    className: Z.formDescription,
                                    disabled: Q,
                                    children: y.intl.string(y.t.n8WSWF)
                                }),
                                (0, i.jsx)(g.SingleSelect, {
                                    value: M,
                                    placeholder: y.intl.string(y.t.XqMe3N),
                                    options: $,
                                    onChange: (e) => w(e)
                                })
                            ]
                        })
                    ]
                }),
            (0, i.jsx)(m.W, {
                component: 'div',
                className: Z.contentRegion,
                children:
                    q &&
                    (0, i.jsx)(g.SlideIn, {
                        children: (0, i.jsx)(x.Z, {
                            submitting: B,
                            disabled: !X,
                            onReset: () => {
                                var e;
                                h(s), I(null !== (e = null == a ? void 0 : a.description) && void 0 !== e ? e : ''), O(c), P(null == a ? void 0 : a.store_page_guild_products_default_sort), w(null == a ? void 0 : a.server_shop_tab_order);
                            },
                            onSave: () => {
                                o()(null != a, 'Settings must be defined');
                                let e = {};
                                p !== a.description && (e.description = p), null != L && L.startsWith('data:') && (e.cover_image = L), u !== s && (e.full_server_gate = u === E.e3.ALL_CHANNELS), k !== a.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = k), M !== a.server_shop_tab_order && (e.server_shop_tab_order = M), !d().isEmpty(e) && G(n.id, e);
                            },
                            saveButtonTooltip: X ? void 0 : y.intl.string(y.t['6HRvio'])
                        })
                    })
            })
        ]
    });
}
