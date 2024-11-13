t.d(n, {
    Z: function () {
        return I;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    a = t(120356),
    r = t.n(a),
    s = t(442837),
    o = t(481060),
    c = t(11265),
    d = t(863249),
    u = t(944163),
    m = t(246364),
    x = t(571728),
    f = t(755340),
    h = t(449226),
    g = t(388032),
    v = t(176981),
    j = t(13441);
function C(e) {
    let { guild: n, isExpanded: a, emptyFormFields: r, hasTermsField: s } = e,
        c = n.hasVerificationGate(),
        [u, m] = l.useState(c),
        x = (e) => {
            e.preventDefault(), e.stopPropagation();
        },
        f = async (e) => {
            try {
                m(e), await d.ZP.enableVerificationForm(n.id, e);
            } catch {
                m(u);
            }
        },
        C = (e) => {
            e && r
                ? (0, o.openModalLazy)(async () => {
                      let { ConfirmModal: n } = await Promise.resolve().then(t.bind(t, 481060));
                      return (t) =>
                          (0, i.jsx)(n, {
                              ...t,
                              header: g.intl.string(g.t.eSlxe3),
                              cancelText: g.intl.string(g.t.BvmRe3),
                              confirmText: g.intl.string(g.t.PYcfmp),
                              onConfirm: () => f(e),
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  children: g.intl.string(g.t.uknrnp)
                              })
                          });
                  })
                : f(e);
        },
        p = () => {
            (0, o.openModalLazy)(async () => {
                let { default: e } = await Promise.all([t.e('80026'), t.e('36869')]).then(t.bind(t, 645264));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        guildId: n.id,
                        isPreview: !0
                    });
            });
        };
    return (0, i.jsxs)('div', {
        className: v.itemWrapper,
        children: [
            (0, i.jsxs)('div', {
                className: v.itemContent,
                children: [
                    (0, i.jsx)(o.Heading, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: g.intl.string(g.t.NEXim5)
                    }),
                    (a || (r && !u)) &&
                        (0, i.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: g.intl.string(g.t['7W5uVl'])
                        }),
                    !a &&
                        (0, i.jsx)('div', {
                            className: j.pillRow,
                            children:
                                s &&
                                (0, i.jsxs)(o.Text, {
                                    color: 'interactive-normal',
                                    variant: 'text-xs/medium',
                                    className: v.valuePill,
                                    children: [
                                        (0, i.jsx)(o.BookCheckIcon, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 16,
                                            height: 16
                                        }),
                                        g.intl.string(g.t.A2v22t)
                                    ]
                                })
                        })
                ]
            }),
            (0, i.jsx)('div', {
                className: j.previewAndEnable,
                children:
                    a || u || !r
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(o.Clickable, {
                                      onMouseDown: x,
                                      onMouseUp: x,
                                      onClick: (e) => {
                                          x(e), p();
                                      },
                                      children: (0, i.jsx)(o.Tooltip, {
                                          tooltipContentClassName: j.__invalid_tooltip,
                                          text: g.intl.string(g.t.SKNnqq),
                                          children: (e) =>
                                              (0, i.jsx)(o.EyeIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: j.previewIcon,
                                                  ...e
                                              })
                                      })
                                  }),
                                  (0, i.jsx)(h.Z, {
                                      checked: u,
                                      onChange: () => C(!u)
                                  })
                              ]
                          })
                        : (0, i.jsx)(o.Button, {
                              size: o.Button.Sizes.SMALL,
                              children: g.intl.string(g.t.oRs6mJ)
                          })
            })
        ]
    });
}
async function p(e, n) {
    await d.ZP.updateVerificationForm(e, n);
}
async function N(e, n) {
    await d.ZP.updateVerificationFormDescription(e, n);
}
function I(e) {
    var n, t, a;
    let { guild: o, isClanContext: h = !1, onFieldsSave: g, onDescriptionSave: I, verificationForm: T } = e,
        [F, b] = l.useState(h),
        y = l.useRef(!1),
        R = l.useCallback(() => {
            y.current = !0;
        }, []),
        w = null !== (n = (0, x.A)({ guildId: o.id })) && void 0 !== n ? n : 0,
        E = (0, s.e7)([u.Z], () => (null != T ? T : u.Z.get(o.id))),
        k = null !== (t = null == E ? void 0 : E.formFields) && void 0 !== t ? t : [];
    l.useEffect(() => {
        d.ZP.fetchVerificationForm(o.id);
    }, [o.id]);
    let M = null != E,
        L = !h;
    return (0, i.jsx)(c.Z, {
        renderHeader: L
            ? (0, i.jsx)(C, {
                  guild: o,
                  isExpanded: F,
                  emptyFormFields: (null == k ? void 0 : k.length) == null || (null == k ? void 0 : k.length) === 0,
                  hasTermsField: null == k ? void 0 : k.some((e) => e.field_type === m.QJ.TERMS)
              })
            : null,
        isExpanded: F,
        onExpand: () => b(!F),
        disableAnimation: h,
        disableBackground: !L,
        children: (0, i.jsx)('div', {
            className: r()(v.itemBodyContainer, {
                [v.noPadding]: !L,
                [j.rulesScreeningItemsNoBorder]: !L
            }),
            children:
                M &&
                (0, i.jsx)(f.Z, {
                    guild: o,
                    submittedGuildJoinRequestsCount: w,
                    formFields: k,
                    onFormFieldUpdate: R,
                    hideVerificationLevelField: !0,
                    isClanContext: h,
                    onFieldsSave: null != g ? g : p,
                    onDescriptionSave: null != I ? I : N,
                    formDescription: null !== (a = null == E ? void 0 : E.description) && void 0 !== a ? a : ''
                })
        })
    });
}
