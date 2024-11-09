n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(373793),
    s = n(481060),
    o = n(783097),
    l = n(753972),
    u = n(520315),
    c = n(688465),
    d = n(388032),
    f = n(517066),
    _ = n(554034),
    h = n(413097);
function p(e) {
    let { application: t, onSelect: n, onClose: u } = e,
        { iconURL: _ } = i.useMemo(
            () =>
                (0, o.sl)(t, {
                    fakeAppIconURL: h,
                    size: 84
                }),
            [t]
        ),
        p = i.useMemo(
            () =>
                [
                    {
                        type: a.Y.USER_INSTALL,
                        icon: s.UserPlusIcon,
                        title: d.intl.string(d.t.aCg60N),
                        subtitle: d.intl.string(d.t.YeiIUV),
                        beta: !1
                    },
                    {
                        type: a.Y.GUILD_INSTALL,
                        icon: s.ServerIcon,
                        title: d.intl.string(d.t.E64YCw),
                        subtitle: d.intl.string(d.t.bbtoKi),
                        beta: !1
                    }
                ].filter((e) => {
                    var n, r;
                    return (null === (r = t.integrationTypesConfig) || void 0 === r ? void 0 : null === (n = r[e.type]) || void 0 === n ? void 0 : n.oauth2InstallParams) != null;
                }),
            [t.integrationTypesConfig]
        );
    return (0, r.jsxs)('div', {
        className: f.container,
        children: [
            (0, r.jsxs)('div', {
                className: f.header,
                children: [
                    null != u
                        ? (0, r.jsx)(s.Clickable, {
                              onClick: u,
                              className: f.closeButton,
                              'aria-label': d.intl.string(d.t.cpT0Cg),
                              children: (0, r.jsx)(s.XSmallIcon, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          })
                        : null,
                    (0, r.jsx)(l.Z, {
                        src: _,
                        className: f.appIcon,
                        rendersPlaceholder: !0
                    }),
                    (0, r.jsx)(g, { application: t }),
                    (0, r.jsx)(m, { application: t })
                ]
            }),
            (0, r.jsx)('ul', {
                className: f.rows,
                children: p.map((e) =>
                    (0, r.jsxs)(
                        s.Clickable,
                        {
                            tag: 'li',
                            className: f.row,
                            onClick: () => n(e.type),
                            children: [
                                (0, r.jsx)(e.icon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: f.leftIcon
                                }),
                                (0, r.jsxs)('div', {
                                    className: f.rowInner,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: f.rowDetails,
                                            children: [
                                                (0, r.jsx)(s.Text, {
                                                    variant: 'text-md/medium',
                                                    color: 'interactive-active',
                                                    children: e.title
                                                }),
                                                (0, r.jsx)(s.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    children: e.subtitle
                                                })
                                            ]
                                        }),
                                        e.beta && (0, r.jsx)(c.Z, {}),
                                        (0, r.jsx)(s.ChevronSmallRightIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: f.rightIcon
                                        })
                                    ]
                                })
                            ]
                        },
                        e.type
                    )
                )
            })
        ]
    });
}
function m(e) {
    let { application: t } = e,
        n = t.description;
    return null == n || 0 === n.length
        ? null
        : (0, r.jsx)('div', {
              className: f.detailsContainer,
              children: (0, r.jsx)('div', {
                  className: f.overviewContainerNoVideo,
                  children: null != n && n.length > 0 ? (0, r.jsx)(E, { description: n }) : null
              })
          });
}
function g(e) {
    let { application: t } = e,
        n = t.name,
        i = (0, o.vJ)(t);
    return (0, r.jsxs)('div', {
        className: f.titleContainer,
        children: [
            (0, r.jsx)(s.Heading, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: n
            }),
            i
                ? (0, r.jsx)('div', {
                      className: f.partnerLabelContainer,
                      children: (0, r.jsx)(s.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: d.intl.string(d.t.LO4f0N)
                      })
                  })
                : null
        ]
    });
}
function E(e) {
    let { description: t } = e,
        [a, o] = i.useState(!0);
    i.useLayoutEffect(() => o(!1), []);
    let l = i.useMemo(() => {
            let { parseBioReact: e } = n(240991);
            return e(t);
        }, [t]),
        {
            ref: c,
            lineHeight: h,
            lineCount: p
        } = (function () {
            let e = i.useRef(null),
                [t, n] = i.useState(null),
                [r, a] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    let t = e.current;
                    if (null === t || 0 === t.clientHeight) return;
                    let r = parseInt(getComputedStyle(t).lineHeight);
                    if (!isNaN(r)) n(r), a(Math.floor(t.clientHeight / r));
                }, []),
                {
                    ref: e,
                    lineHeight: t,
                    lineCount: r
                }
            );
        })(),
        m = i.useMemo(() => {
            if (null == h || null == p) return { key: 0 };
            let e = h * p;
            return {
                key: 1,
                minHeightOverride: Math.min(e, 3 * h),
                maxHeightOverride: e
            };
        }, [p, h]),
        {
            ref: g,
            isTransitioning: E,
            onTransitionEnd: v
        } = (0, u.Z)({
            isExpanded: a,
            ...m
        }),
        I = a || E;
    return (0, r.jsxs)('div', {
        className: f.descriptionContainer,
        children: [
            (0, r.jsx)('div', {
                ref: g,
                className: f.overflowHidden,
                onTransitionEnd: v,
                children: (0, r.jsx)(s.Text, {
                    ref: c,
                    className: _.markup,
                    variant: 'text-sm/medium',
                    lineClamp: I ? void 0 : 3,
                    style: { maxHeight: I ? void 0 : m.minHeightOverride },
                    children: l
                })
            }),
            null != p && p > 3
                ? (0, r.jsxs)(s.Clickable, {
                      className: f.expandableDescriptionClickable,
                      onClick: () => o((e) => !e),
                      children: [
                          (0, r.jsx)(s.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: I ? d.intl.string(d.t.u4YJ8v) : d.intl.string(d.t['N/tajI'])
                          }),
                          I
                              ? (0, r.jsx)(s.ChevronSmallUpIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.TEXT_BRAND
                                })
                              : (0, r.jsx)(s.ChevronSmallDownIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.TEXT_BRAND
                                })
                      ]
                  })
                : null
        ]
    });
}
