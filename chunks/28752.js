n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(373793),
    s = n(481060),
    l = n(783097),
    u = n(753972),
    c = n(520315),
    d = n(688465),
    _ = n(689938),
    E = n(517066),
    f = n(554034),
    h = n(413097);
let p = 84;
function m(e) {
    let { application: t, onSelect: n, onClose: r } = e,
        { iconURL: c } = a.useMemo(
            () =>
                (0, l.sl)(t, {
                    fakeAppIconURL: h,
                    size: p
                }),
            [t]
        ),
        f = a.useMemo(
            () =>
                [
                    {
                        type: o.Y.USER_INSTALL,
                        icon: s.UserPlusIcon,
                        title: _.Z.Messages.OAUTH2_INTEGRATION_SELECT_USER,
                        subtitle: _.Z.Messages.OAUTH2_INTEGRATION_SELECT_USER_SUBTITLE,
                        beta: !1
                    },
                    {
                        type: o.Y.GUILD_INSTALL,
                        icon: s.ServerIcon,
                        title: _.Z.Messages.OAUTH2_INTEGRATION_SELECT_GUILD,
                        subtitle: _.Z.Messages.OAUTH2_INTEGRATION_SELECT_GUILD_SUBTITLE,
                        beta: !1
                    }
                ].filter((e) => {
                    var n, r;
                    return (null === (r = t.integrationTypesConfig) || void 0 === r ? void 0 : null === (n = r[e.type]) || void 0 === n ? void 0 : n.oauth2InstallParams) != null;
                }),
            [t.integrationTypesConfig]
        );
    return (0, i.jsxs)('div', {
        className: E.container,
        children: [
            (0, i.jsxs)('div', {
                className: E.header,
                children: [
                    null != r
                        ? (0, i.jsx)(s.Clickable, {
                              onClick: r,
                              className: E.closeButton,
                              'aria-label': _.Z.Messages.CLOSE,
                              children: (0, i.jsx)(s.XSmallIcon, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          })
                        : null,
                    (0, i.jsx)(u.Z, {
                        src: c,
                        className: E.appIcon,
                        rendersPlaceholder: !0
                    }),
                    (0, i.jsx)(T, { application: t }),
                    (0, i.jsx)(I, { application: t })
                ]
            }),
            (0, i.jsx)('ul', {
                className: E.rows,
                children: f.map((e) =>
                    (0, i.jsxs)(
                        s.Clickable,
                        {
                            tag: 'li',
                            className: E.row,
                            onClick: () => n(e.type),
                            children: [
                                (0, i.jsx)(e.icon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: E.leftIcon
                                }),
                                (0, i.jsxs)('div', {
                                    className: E.rowInner,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: E.rowDetails,
                                            children: [
                                                (0, i.jsx)(s.Text, {
                                                    variant: 'text-md/medium',
                                                    color: 'interactive-active',
                                                    children: e.title
                                                }),
                                                (0, i.jsx)(s.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    children: e.subtitle
                                                })
                                            ]
                                        }),
                                        e.beta && (0, i.jsx)(d.Z, {}),
                                        (0, i.jsx)(s.ChevronSmallRightIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: E.rightIcon
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
function I(e) {
    let { application: t } = e,
        n = t.description;
    return null == n || 0 === n.length
        ? null
        : (0, i.jsx)('div', {
              className: E.detailsContainer,
              children: (0, i.jsx)('div', {
                  className: E.overviewContainerNoVideo,
                  children: null != n && n.length > 0 ? (0, i.jsx)(S, { description: n }) : null
              })
          });
}
function T(e) {
    let { application: t } = e,
        n = t.name,
        r = (0, l.vJ)(t);
    return (0, i.jsxs)('div', {
        className: E.titleContainer,
        children: [
            (0, i.jsx)(s.Heading, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: n
            }),
            r
                ? (0, i.jsx)('div', {
                      className: E.partnerLabelContainer,
                      children: (0, i.jsx)(s.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: _.Z.Messages.APP_DIRECTORY_PARTNER
                      })
                  })
                : null
        ]
    });
}
let g = 3;
function S(e) {
    let { description: t } = e,
        [r, o] = a.useState(!0);
    a.useLayoutEffect(() => o(!1), []);
    let l = a.useMemo(() => {
            let { parseBioReact: e } = n(240991);
            return e(t);
        }, [t]),
        { ref: u, lineHeight: d, lineCount: h } = A(),
        p = a.useMemo(() => {
            if (null == d || null == h) return { key: 0 };
            let e = d * h;
            return {
                key: 1,
                minHeightOverride: Math.min(e, g * d),
                maxHeightOverride: e
            };
        }, [h, d]),
        {
            ref: m,
            isTransitioning: I,
            onTransitionEnd: T
        } = (0, c.Z)({
            isExpanded: r,
            ...p
        }),
        S = r || I;
    return (0, i.jsxs)('div', {
        className: E.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: m,
                className: E.overflowHidden,
                onTransitionEnd: T,
                children: (0, i.jsx)(s.Text, {
                    ref: u,
                    className: f.markup,
                    variant: 'text-sm/medium',
                    lineClamp: S ? void 0 : g,
                    style: { maxHeight: S ? void 0 : p.minHeightOverride },
                    children: l
                })
            }),
            null != h && h > g
                ? (0, i.jsxs)(s.Clickable, {
                      className: E.expandableDescriptionClickable,
                      onClick: () => o((e) => !e),
                      children: [
                          (0, i.jsx)(s.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: S ? _.Z.Messages.APP_LAUNCHER_SHOW_LESS : _.Z.Messages.APP_LAUNCHER_SHOW_MORE
                          }),
                          S
                              ? (0, i.jsx)(s.ChevronSmallUpIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.TEXT_BRAND
                                })
                              : (0, i.jsx)(s.ChevronSmallDownIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.TEXT_BRAND
                                })
                      ]
                  })
                : null
        ]
    });
}
function A() {
    let e = a.useRef(null),
        [t, n] = a.useState(null),
        [r, i] = a.useState(null);
    return (
        a.useLayoutEffect(() => {
            let t = e.current;
            if (null === t || 0 === t.clientHeight) return;
            let r = parseInt(getComputedStyle(t).lineHeight);
            if (!isNaN(r)) n(r), i(Math.floor(t.clientHeight / r));
        }, []),
        {
            ref: e,
            lineHeight: t,
            lineCount: r
        }
    );
}
