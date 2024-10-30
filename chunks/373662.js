n.d(t, {
    ZP: function () {
        return I;
    },
    fO: function () {
        return E;
    },
    sF: function () {
        return _;
    }
});
var i = n(200651),
    a = n(120356),
    s = n.n(a),
    r = n(481060),
    l = n(377171),
    o = n(951394),
    c = n(407477),
    u = n(689938),
    d = n(189265);
function _(e) {
    let { label: t, ariaLabel: n, tooltipText: a, tooltipColor: _, icon: E, iconProps: I, onClick: m, onTooltipShow: f, onTooltipHide: h, disabled: T, dangerous: N, separator: p, sparkle: C, showNewBadge: g, buttonClassName: S, children: A, ...x } = e,
        { canShowReactionsOnMessageHover: R } = c.ZP.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 });
    return (
        c.Xb.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 }),
        (0, i.jsx)(r.Tooltip, {
            text: null != a ? a : t,
            color: null != _ ? _ : r.TooltipColors.PRIMARY,
            'aria-label': t,
            onTooltipShow: f,
            onTooltipHide: h,
            hideOnClick: !0,
            tooltipClassName: d.tooltip,
            children: (e) => {
                let { onMouseEnter: a, onMouseLeave: c, onClick: _ } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(o.zx, {
                            className: s()(S, { [d.hoverBarButton]: R }),
                            onMouseEnter: a,
                            onMouseLeave: c,
                            onClick: (e) => {
                                null == _ || _(), m(e);
                            },
                            'aria-label': null != n ? n : t,
                            disabled: T,
                            dangerous: N,
                            ...x,
                            children: [
                                null != E
                                    ? (0, i.jsx)(E, {
                                          className: d.icon,
                                          color: 'currentColor',
                                          ...I
                                      })
                                    : null,
                                null != A
                                    ? (0, i.jsx)('div', {
                                          className: s()(d.icon, d.buttonContent),
                                          children: A
                                      })
                                    : null,
                                C && (0, i.jsx)(r.LottieSparkle, {}),
                                g &&
                                    (0, i.jsx)(r.TextBadge, {
                                        text: u.Z.Messages.NEW,
                                        color: l.Z.BG_BRAND,
                                        className: d.newBadge
                                    })
                            ]
                        }),
                        p && (0, i.jsx)(o.Z0, {})
                    ]
                });
            }
        })
    );
}
function E(e) {
    let { className: t } = e;
    return (0, i.jsx)('div', { className: s()(d.separator, t) });
}
function I(e) {
    let { children: t, ...n } = e,
        { canShowReactionsOnMessageHover: a } = c.ZP.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 });
    return (
        c.Xb.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 }),
        (0, i.jsx)(o.ZP, {
            className: s()(n.className, d.popover, { [d.popoverReactionHoverBar]: a }),
            children: t
        })
    );
}
