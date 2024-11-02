n.d(t, {
    $$: function () {
        return I;
    },
    P_: function () {
        return v;
    },
    ap: function () {
        return N;
    },
    ku: function () {
        return _;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(45966),
    o = n(637853),
    c = n(734893),
    d = n(621923),
    u = n(8426),
    m = n(969632),
    h = n(974513),
    g = n(290511),
    x = n(388032),
    p = n(839754);
function f(e) {
    let t,
        { title: n, description: r, icon: l, hasStarted: a, status: o, onEdit: c, extra: d } = e;
    switch (o) {
        case 'good':
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.CheckmarkLargeIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: p.checkmark
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-xs/semibold',
                        color: 'status-positive',
                        className: p.statusText,
                        children: x.intl.string(x.t.rPnzRU)
                    })
                ]
            });
            break;
        case 'warning':
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.CircleWarningIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: p.warning
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-xs/semibold',
                        color: 'status-warning',
                        className: p.statusText,
                        children: x.intl.string(x.t['yTa+dn'])
                    })
                ]
            });
            break;
        case 'required':
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.CircleWarningIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: p.danger
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-xs/semibold',
                        color: 'status-danger',
                        className: p.statusText,
                        children: x.intl.string(x.t.EkokLy)
                    })
                ]
            });
    }
    return (0, i.jsxs)('div', {
        className: p.onboardingStepContainer,
        children: [
            (0, i.jsxs)('div', {
                className: p.leftContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: p.iconContainer,
                        children: l
                    }),
                    (0, i.jsxs)('div', {
                        className: p.onboardingStepText,
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: 'heading-md/semibold',
                                children: n
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                color: a && 'required' === o ? 'status-danger' : 'text-normal',
                                children: r
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: p.rightContainer,
                children: [
                    t,
                    d,
                    a
                        ? (0, i.jsx)(s.Button, {
                              className: p.cta,
                              size: s.Button.Sizes.SMALL,
                              color: s.Button.Colors.PRIMARY,
                              look: s.Button.Looks.OUTLINED,
                              onClick: c,
                              children: x.intl.string(x.t.bt75u7)
                          })
                        : (0, i.jsxs)(s.Button, {
                              className: p.cta,
                              innerClassName: p.ctaInner,
                              size: s.Button.Sizes.SMALL,
                              color: s.Button.Colors.PRIMARY,
                              onClick: c,
                              children: [
                                  x.intl.string(x.t['0GWElZ']),
                                  (0, i.jsx)(s.ArrowSmallRightIcon, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  })
                              ]
                          })
                ]
            })
        ]
    });
}
function C(e) {
    let t = (0, l.e7)([a.Z], () => a.Z.getDefaultChannelIds(e)),
        n = r.useMemo(() => new Set(t), [t]),
        [i, s] = (0, o.VF)(e, n);
    return s.length >= g.md && i.length >= g.X;
}
function I(e) {
    let t = C(e),
        n = (0, h.O4)(e);
    return t || n;
}
function _(e) {
    var t, n, c, d;
    let { guildId: u, onEdit: m, disableGoodStatus: I } = e,
        _ = (0, l.Wu)([a.Z], () => a.Z.getDefaultChannelIds(u)),
        N = (0, l.e7)([a.Z], () => (0, o.kl)(u, a.Z.getDefaultChannelIds(u), a.Z.getOnboardingPrompts(u)).length),
        v = r.useMemo(() => new Set(_), [_]),
        [, T] = (0, o.VF)(u, v),
        j = T.length,
        E = C(u),
        S = (0, h.O4)(u),
        b = (0, l.e7)([a.Z], () => a.Z.isAdvancedMode(u));
    let R =
        ((t = E),
        (n = b),
        (c = j),
        (d = N),
        n
            ? x.intl.formatToPlainString(x.t.nHwnLC, {
                  numDefaultChannels: c,
                  numFromQuestions: d - c
              })
            : t
              ? x.intl.formatToPlainString(x.t.HxEwSk, { numDefaultChannels: c })
              : x.intl.formatToPlainString(x.t.ey3uVV, {
                    numDefaultChannels: g.md,
                    numChattableChannels: g.X
                }));
    return (0, i.jsx)(f, {
        title: b ? x.intl.string(x.t.YZookZ) : x.intl.string(x.t['4GSygo']),
        description: R,
        icon: (0, i.jsx)(s.TextIcon, {
            size: 'md',
            color: 'currentColor',
            className: p.channelIcon
        }),
        hasStarted: j > 0 || b,
        status: E || S ? (I ? 'none' : 'good') : 'required',
        onEdit: m
    });
}
function N(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: r } = e,
        c = (0, l.Wu)([a.Z], () => a.Z.getDefaultChannelIds(t)),
        d = (0, l.Wu)([a.Z], () => a.Z.getOnboardingPrompts(t)),
        u = d.length,
        [m, h] = (0, o.dF)(t, d, c),
        g = m.length,
        C = m.length + h.length,
        I = (g / C) * 100,
        _ = (0, l.e7)([a.Z], () => a.Z.isAdvancedMode(t)),
        N = u > 0,
        v = 'none';
    return (
        N && (I >= 85 && !r ? (v = 'good') : I < 85 && (v = 'warning')),
        (0, i.jsx)(f, {
            title: _ ? x.intl.string(x.t.AGjtFh) : x.intl.string(x.t.dqCzoa),
            description: x.intl.format(x.t.iuNisr, {
                numChannels: g,
                numTotalChannels: C,
                channelsHook: (e, t) =>
                    (0, i.jsx)(
                        'span',
                        {
                            style: { color: I > 85 ? 'var(--header-primary)' : 'var(--status-warning)' },
                            children: e
                        },
                        t
                    )
            }),
            icon: (0, i.jsx)(s.FriendsIcon, {
                size: 'md',
                color: 'currentColor',
                className: p.channelIcon
            }),
            hasStarted: N,
            status: v,
            onEdit: n
        })
    );
}
function v(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: o } = e,
        h = (0, l.e7)([m.Z], () => m.Z.getSettings()),
        g = (0, l.e7)([a.Z], () => a.Z.getEnabled(t)),
        { serverGuideOptional: C } = (0, d.hl)(t),
        I = (0, c.uo)(h),
        _ = h.enabled,
        N = r.useCallback(() => {
            (0, u.To)(t, !_);
        }, [t, _]),
        v = !(0, c.av)(h),
        T = 'none';
    v && (I && !o ? (T = 'good') : !I && (T = 'required'));
    let j = x.intl.string(x.t.GMOwOD);
    I ? !v && (j = x.intl.string(x.t.wHOoyM)) : (j = x.intl.string(x.t.wXFbgY));
    let E = null;
    return (
        v &&
            C &&
            g &&
            (E = (0, i.jsx)(s.Switch, {
                className: p.inlineSwitch,
                checked: _,
                onChange: N,
                disabled: !I
            })),
        (0, i.jsx)(f, {
            title: x.intl.string(x.t.mRHqsr),
            description: j,
            icon: (0, i.jsx)(s.SignPostIcon, {
                size: 'md',
                color: 'currentColor',
                className: p.channelIcon
            }),
            hasStarted: v,
            status: T,
            onEdit: n,
            extra: E
        })
    );
}
