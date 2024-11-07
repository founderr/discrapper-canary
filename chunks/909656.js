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
    I = n(208567),
    _ = n(73346),
    N = n(624138),
    v = n(584825),
    T = n(723047),
    j = n(927954),
    S = n(164000),
    b = n(587431),
    E = n(293810),
    R = n(333866),
    Z = n(388032),
    A = n(677653);
let L = (0, N.Mg)(h.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);
function y() {
    return [
        {
            name: Z.intl.string(Z.t.rXqxhI),
            desc: Z.intl.string(Z.t.yQiJnZ),
            value: E.e3.SOME_CHANNELS,
            icon: g.TextIcon
        },
        {
            name: Z.intl.string(Z.t.WzC9s7),
            desc: Z.intl.string(Z.t.WmagiI),
            value: E.e3.ALL_CHANNELS,
            icon: g.KeyIcon
        }
    ];
}
function D(e) {
    let { value: t, 'aria-labelledby': n, onChange: l, disabled: a = !1 } = e,
        { ref: o, width: c } = (0, p.Z)(),
        d = (0, u.Z)(y),
        m = r.useMemo(
            () =>
                d.map((e) => ({
                    ...e,
                    icon: function () {
                        let { icon: t } = e;
                        return (0, i.jsx)('div', {
                            className: A.formatRadioIconWrapper,
                            children: (0, i.jsx)(t, { className: A.formatRadioIcon })
                        });
                    },
                    radioBarClassName: A.formatOptionRadioBar,
                    radioItemIconClassName: A.formatOptionRadioItemIcon
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
            className: s()({ [A.radioGroupHorizontal]: h }),
            radioItemClassName: A.formatOptionRadioItem,
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
        { format: s } = (0, S.Z)(n.id),
        a = (0, v.YB)(n.id),
        c = r.useCallback(() => {
            var e;
            return (null == a ? void 0 : null === (e = a.cover_image_asset) || void 0 === e ? void 0 : e.application_id) == null ? null : (0, _._W)(a.cover_image_asset.application_id, a.cover_image_asset, L);
        }, [a]),
        [u, h] = r.useState(s),
        [p, N] = r.useState(null !== (t = null == a ? void 0 : a.description) && void 0 !== t ? t : ''),
        [y, O] = r.useState(c),
        [M, P] = r.useState(null == a ? void 0 : a.store_page_guild_products_default_sort),
        [k, w] = r.useState(null == a ? void 0 : a.server_shop_tab_order),
        { loading: B, error: U, updateSubscriptionsSettings: G } = (0, v.QV)(),
        { imageCTA: F, imageAriaLabel: H, setFilename: z } = (0, j.Z)(null == a ? void 0 : a.cover_image_asset),
        V = (0, f.Dt)(),
        W = (0, f.Dt)(),
        Y = (0, f.Dt)();
    function K(e, t) {
        o()(null != e, 'Null value not allowed'), null != t && z(t.name), O(e);
    }
    let q = r.useMemo(() => {
            var e;
            return (null != p && p !== (null !== (e = null == a ? void 0 : a.description) && void 0 !== e ? e : '')) || (null == y ? void 0 : y.startsWith('data:')) === !0 || u !== s || (null == a ? void 0 : a.store_page_guild_products_default_sort) !== M || (null == a ? void 0 : a.server_shop_tab_order) !== k;
        }, [y, s, p, a, u, M, k]),
        X = null != p && '' !== p && null != y;
    r.useEffect(() => {
        var e;
        (null == a ? void 0 : null === (e = a.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null && O((0, _._W)(a.cover_image_asset.application_id, a.cover_image_asset, L));
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
                    label: Z.intl.string(Z.t.X6h2g4),
                    value: R.a3.PRODUCTS_FIRST
                },
                {
                    label: Z.intl.string(Z.t['KzCF//']),
                    value: R.a3.SUBS_FIRST
                }
            ],
            []
        );
    return (0, i.jsxs)('div', {
        className: A.container,
        children: [
            null != U &&
                (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(b.Z, { children: U.getAnyErrorMessage() }), (0, i.jsx)(g.Spacer, { size: 16 })]
                }),
            l
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)(g.FormSection, {
                              title: Z.intl.string(Z.t['PAVi+/']),
                              titleId: V,
                              disabled: Q,
                              children: [
                                  (0, i.jsx)(g.FormText, {
                                      type: g.FormText.Types.DESCRIPTION,
                                      className: A.formDescription,
                                      disabled: Q,
                                      children: Z.intl.string(Z.t.x87YqK)
                                  }),
                                  (0, i.jsx)(D, {
                                      value: u,
                                      onChange: (e) => {
                                          s !== e &&
                                              e === E.e3.ALL_CHANNELS &&
                                              (0, g.openModal)((e) =>
                                                  (0, i.jsx)(g.ConfirmModal, {
                                                      ...e,
                                                      header: Z.intl.string(Z.t.dmVoOz),
                                                      confirmText: Z.intl.string(Z.t['NX+WJC']),
                                                      confirmButtonColor: g.Button.Colors.BRAND,
                                                      children: (0, i.jsx)(g.Text, {
                                                          variant: 'text-md/normal',
                                                          children: Z.intl.string(Z.t.mtwzdH)
                                                      })
                                                  })
                                              ),
                                              h(e);
                                      },
                                      'aria-labelledby': V,
                                      disabled: Q
                                  })
                              ]
                          }),
                          (0, i.jsx)(g.FormDivider, { className: A.divider })
                      ]
                  }),
            (0, i.jsx)(g.FormSection, {
                title: Z.intl.string(Z.t['1+Ho1d']),
                titleId: W,
                disabled: Q,
                children: (0, i.jsx)(g.TextArea, {
                    placeholder: l ? Z.intl.string(Z.t.SD6LRU) : Z.intl.string(Z.t['aVhW/f']),
                    maxLength: 1500,
                    value: p,
                    rows: 2,
                    autosize: !0,
                    onChange: N,
                    'aria-labelledby': W,
                    disabled: Q
                })
            }),
            (0, i.jsx)(g.FormDivider, { className: A.divider }),
            (0, i.jsxs)(g.FormSection, {
                title: Z.intl.string(Z.t['0kpTpK']),
                disabled: Q,
                children: [
                    (0, i.jsx)(g.FormText, {
                        type: g.FormText.Types.DESCRIPTION,
                        className: A.formDescription,
                        disabled: Q,
                        children: Z.intl.string(Z.t.i2rCwc)
                    }),
                    (0, i.jsx)(I.Z, {
                        image: y,
                        hint: F,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: A.coverImageUploader,
                        iconWrapperClassName: A.coverImageUploaderIconWrapper,
                        imageClassName: A.coverImageUploaderInner,
                        iconClassName: A.coverImageUploaderIcon,
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
                          (0, i.jsx)(g.FormDivider, { className: A.divider }),
                          (0, i.jsxs)(g.FormSection, {
                              title: Z.intl.string(Z.t.aaZ9pK),
                              titleId: Y,
                              disabled: Q,
                              children: [
                                  (0, i.jsx)(g.FormText, {
                                      type: g.FormText.Types.DESCRIPTION,
                                      className: A.formDescription,
                                      disabled: Q,
                                      children: Z.intl.string(Z.t.TILN8v)
                                  }),
                                  (0, i.jsx)(g.SingleSelect, {
                                      value: M,
                                      placeholder: Z.intl.string(Z.t.XqMe3N),
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
                        (0, i.jsx)(g.FormDivider, { className: A.divider }),
                        (0, i.jsxs)(g.FormSection, {
                            title: Z.intl.string(Z.t['+dtmw8']),
                            titleId: Y,
                            disabled: Q,
                            children: [
                                (0, i.jsx)(g.FormText, {
                                    type: g.FormText.Types.DESCRIPTION,
                                    className: A.formDescription,
                                    disabled: Q,
                                    children: Z.intl.string(Z.t.n8WSWF)
                                }),
                                (0, i.jsx)(g.SingleSelect, {
                                    value: k,
                                    placeholder: Z.intl.string(Z.t.XqMe3N),
                                    options: $,
                                    onChange: (e) => w(e)
                                })
                            ]
                        })
                    ]
                }),
            (0, i.jsx)(m.W, {
                component: 'div',
                className: A.contentRegion,
                children:
                    q &&
                    (0, i.jsx)(g.SlideIn, {
                        children: (0, i.jsx)(x.Z, {
                            submitting: B,
                            disabled: !X,
                            onReset: () => {
                                var e;
                                h(s), N(null !== (e = null == a ? void 0 : a.description) && void 0 !== e ? e : ''), O(c), P(null == a ? void 0 : a.store_page_guild_products_default_sort), w(null == a ? void 0 : a.server_shop_tab_order);
                            },
                            onSave: () => {
                                o()(null != a, 'Settings must be defined');
                                let e = {};
                                p !== a.description && (e.description = p), null != y && y.startsWith('data:') && (e.cover_image = y), u !== s && (e.full_server_gate = u === E.e3.ALL_CHANNELS), M !== a.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = M), k !== a.server_shop_tab_order && (e.server_shop_tab_order = k), !d().isEmpty(e) && G(n.id, e);
                            },
                            saveButtonTooltip: X ? void 0 : Z.intl.string(Z.t['6HRvio'])
                        })
                    })
            })
        ]
    });
}
