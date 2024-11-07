n.d(t, {
    Z: function () {
        return y;
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
    u = n(442837),
    m = n(692547),
    h = n(215569),
    g = n(481060),
    x = n(484614),
    p = n(852860),
    f = n(782568),
    C = n(367907),
    I = n(674180),
    _ = n(999382),
    N = n(626135),
    v = n(730647),
    T = n(584825),
    j = n(981631),
    S = n(388032),
    b = n(199430);
let E = [14361481, 12200937, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 13064760, 13058360, 12401000, 12933021, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236],
    R = /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
    Z = E[4],
    A = (e) => {
        var t, n;
        let { guild: l, canEnable: a } = e,
            c = (0, T.YB)(l.id),
            { loading: u, updateSubscriptionsSettings: _ } = (0, T.QV)(),
            [v, A] = r.useState(l.hasFeature(j.oNc.CREATOR_STORE_PAGE)),
            [L, y] = r.useState(null !== (t = null == c ? void 0 : c.store_page_primary_color) && void 0 !== t ? t : Z),
            [D, O] = r.useState(null == c ? void 0 : c.store_page_trailer_url),
            M = null == D || null != D.match(R),
            [P, k] = r.useState(null !== (n = null == c ? void 0 : c.store_page_show_subscriber_count) && void 0 !== n && n),
            w = r.useRef(null == c ? void 0 : c.store_page_slug).current,
            B = v !== l.hasFeature(j.oNc.CREATOR_STORE_PAGE) || ((null == c ? void 0 : c.store_page_primary_color) == null && L !== Z) || ((null == c ? void 0 : c.store_page_primary_color) != null && L !== (null == c ? void 0 : c.store_page_primary_color)) || D !== (null == c ? void 0 : c.store_page_trailer_url) || (null != P && P !== (null == c ? void 0 : c.store_page_show_subscriber_count)),
            U = async () => {
                o()(null != c, 'Settings must be defined');
                let e = {};
                v !== l.hasFeature(j.oNc.CREATOR_STORE_PAGE) && (e.store_page_enabled = v),
                    (((null == c ? void 0 : c.store_page_primary_color) == null && L !== Z) || ((null == c ? void 0 : c.store_page_primary_color) != null && L !== (null == c ? void 0 : c.store_page_primary_color))) && (e.store_page_primary_color = L),
                    D !== (null == c ? void 0 : c.store_page_trailer_url) && (e.store_page_trailer_url = D),
                    P !== (null == c ? void 0 : c.store_page_show_subscriber_count) && (e.store_page_show_subscriber_count = P),
                    !d().isEmpty(e) &&
                        (await _(l.id, e),
                        'store_page_enabled' in e &&
                            N.default.track(j.rMx.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED, {
                                enabled: v,
                                ...(0, C.hH)(l.id)
                            }));
            },
            G = j.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(w),
            F = null != D && D === (null == c ? void 0 : c.store_page_trailer_url),
            { shouldRestrictUpdatingCreatorMonetizationSettings: H } = (0, I.gX)(l.id),
            z = H || !M;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(g.FormTitle, {
                    tag: 'h1',
                    children: S.intl.string(S.t.N6Tg9P)
                }),
                (0, i.jsx)(g.FormText, {
                    type: g.FormText.Types.DESCRIPTION,
                    children: S.intl.string(S.t['uU/69/'])
                }),
                (0, i.jsx)(g.FormSwitch, {
                    className: b.enableSwitch,
                    value: v,
                    disabled: H || (!v && !a),
                    tooltipNote: v || a ? void 0 : S.intl.string(S.t.mIgfEh),
                    hideBorder: !0,
                    onChange: (e) => A(e),
                    children: (0, i.jsx)(g.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: S.intl.string(S.t.lwvl1t)
                    })
                }),
                (0, i.jsxs)(g.FormItem, {
                    title: S.intl.string(S.t.N46WOj),
                    disabled: H,
                    children: [
                        (0, i.jsx)(x.Z, {
                            value: G,
                            className: s()({ [b.disabled]: H })
                        }),
                        (0, i.jsx)(g.Button, {
                            onClick: () => (0, f.Z)(G),
                            className: b.openPageButton,
                            disabled: H,
                            children: S.intl.string(S.t.CaOYqa)
                        })
                    ]
                }),
                (0, i.jsx)(g.FormDivider, { className: b.divider }),
                (0, i.jsxs)(g.FormItem, {
                    title: S.intl.string(S.t.W39uIC),
                    disabled: H,
                    children: [
                        (0, i.jsx)(g.FormText, {
                            disabled: H,
                            children: S.intl.string(S.t.B6XtEx)
                        }),
                        (0, i.jsxs)('div', {
                            className: b.accentColorContainer,
                            children: [
                                (0, i.jsx)(g.Button, {
                                    onClick: () => null,
                                    color: g.Button.Colors.CUSTOM,
                                    style: { backgroundColor: '#'.concat(L.toString(16).padStart(6, '0')) },
                                    className: b.buttonPreview,
                                    disabled: H,
                                    children: S.intl.string(S.t.l6iM39)
                                }),
                                (0, i.jsx)(g.ColorPicker, {
                                    colors: E,
                                    customColor: null,
                                    defaultColor: Z,
                                    value: L,
                                    onChange: (e) => y(e),
                                    renderDefaultButton: () => null,
                                    renderCustomButton: () => null,
                                    colorContainerClassName: b.hideColorButtons,
                                    disabled: H
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(g.FormDivider, { className: b.divider }),
                (0, i.jsxs)(g.FormItem, {
                    title: S.intl.string(S.t.k2yRvb),
                    disabled: H,
                    children: [
                        (0, i.jsx)(g.FormText, {
                            disabled: H,
                            children: S.intl.string(S.t['amd99/'])
                        }),
                        (0, i.jsx)(g.TextInput, {
                            value: null != D ? D : void 0,
                            onChange: (e) => O('' === e ? null : e),
                            error: M ? null : S.intl.string(S.t['1kL79f']),
                            placeholder: S.intl.string(S.t['+I4gdX']),
                            className: b.trailerInputWrapper,
                            inputClassName: s()(b.trailerInput, {
                                [b.error]: !M,
                                [b.trailerInputWithCheckmark]: F || !M
                            }),
                            prefixElement:
                                M &&
                                F &&
                                (0, i.jsx)(g.CircleCheckIcon, {
                                    size: 'md',
                                    color: m.Z.unsafe_rawColors.BRAND_500.css,
                                    secondaryColor: m.Z.unsafe_rawColors.WHITE_500.css,
                                    className: b.inputCheckmark
                                }),
                            disabled: H
                        })
                    ]
                }),
                (0, i.jsx)(g.FormDivider, { className: b.divider }),
                (0, i.jsxs)(g.FormItem, {
                    title: S.intl.string(S.t.AU2HU1),
                    disabled: H,
                    children: [
                        (0, i.jsx)(g.FormText, {
                            disabled: H,
                            children: S.intl.string(S.t.iWBt3d)
                        }),
                        (0, i.jsx)(g.FormSwitch, {
                            className: b.premiumMemberCountSwitchContainer,
                            value: P,
                            hideBorder: !0,
                            onChange: (e) => k(e),
                            disabled: H,
                            children: (0, i.jsxs)('div', {
                                className: b.iconSwitchLabel,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: b.iconContainer,
                                        children: (0, i.jsx)(g.UserIcon, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 28,
                                            height: 28,
                                            className: b.premiumMemberCountIcon
                                        })
                                    }),
                                    (0, i.jsxs)('div', {
                                        children: [
                                            (0, i.jsx)(g.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: S.intl.string(S.t.hJsAPj)
                                            }),
                                            (0, i.jsx)(g.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'header-secondary',
                                                children: S.intl.string(S.t.hn65ER)
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, i.jsx)(h.W, {
                    component: 'div',
                    className: b.contentRegion,
                    children:
                        B &&
                        (0, i.jsx)(g.SlideIn, {
                            children: (0, i.jsx)(p.Z, {
                                submitting: u,
                                onReset: () => {
                                    var e, t;
                                    A(l.hasFeature(j.oNc.CREATOR_STORE_PAGE)), y(null !== (e = null == c ? void 0 : c.store_page_primary_color) && void 0 !== e ? e : Z), O(null == c ? void 0 : c.store_page_trailer_url), k(null !== (t = null == c ? void 0 : c.store_page_show_subscriber_count) && void 0 !== t && t);
                                },
                                onSave: U,
                                disabled: z
                            })
                        })
                })
            ]
        });
    };
function L() {
    let e = (0, u.e7)([_.Z], () => _.Z.getGuild()),
        t = (0, v.f)(),
        n = (0, T.qi)(null == e ? void 0 : e.id).some((e) => e.published);
    return null != e && t
        ? (0, i.jsx)(A, {
              guild: e,
              canEnable: n
          })
        : (0, i.jsx)(g.Spinner, {});
}
function y() {
    let e = (0, u.e7)([_.Z], () => _.Z.getGuild());
    return (0, i.jsx)(v.l, {
        guildId: null == e ? void 0 : e.id,
        refetchOnMount: !0,
        children: (0, i.jsx)(L, {})
    });
}
