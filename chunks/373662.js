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
var i = n(735250),
    a = n(120356),
    s = n.n(a),
    l = n(481060),
    r = n(377171),
    o = n(951394),
    c = n(407477),
    d = n(689938),
    u = n(189265);
function _(e) {
    let { label: t, ariaLabel: n, tooltipText: a, tooltipColor: _, icon: E, iconProps: I, onClick: m, onTooltipShow: T, onTooltipHide: N, disabled: h, dangerous: C, separator: p, sparkle: f, showNewBadge: g, buttonClassName: A, children: S, ...M } = e,
        { canShowReactionsOnMessageHover: O } = c.ZP.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 });
    return (0, i.jsx)(l.Tooltip, {
        text: null != a ? a : t,
        color: null != _ ? _ : l.TooltipColors.PRIMARY,
        'aria-label': t,
        onTooltipShow: T,
        onTooltipHide: N,
        hideOnClick: !0,
        tooltipClassName: u.tooltip,
        children: (e) => {
            let { onMouseEnter: a, onMouseLeave: c, onClick: _ } = e;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)(o.zx, {
                        className: s()(A, { [u.hoverBarButton]: O }),
                        onMouseEnter: a,
                        onMouseLeave: c,
                        onClick: (e) => {
                            null == _ || _(), m(e);
                        },
                        'aria-label': null != n ? n : t,
                        disabled: h,
                        dangerous: C,
                        ...M,
                        children: [
                            null != E
                                ? (0, i.jsx)(E, {
                                      className: u.icon,
                                      color: 'currentColor',
                                      ...I
                                  })
                                : null,
                            null != S
                                ? (0, i.jsx)('div', {
                                      className: s()(u.icon, u.buttonContent),
                                      children: S
                                  })
                                : null,
                            f && (0, i.jsx)(l.LottieSparkle, {}),
                            g &&
                                (0, i.jsx)(l.TextBadge, {
                                    text: d.Z.Messages.NEW,
                                    color: r.Z.BG_BRAND,
                                    className: u.newBadge
                                })
                        ]
                    }),
                    p && (0, i.jsx)(o.Z0, {})
                ]
            });
        }
    });
}
function E(e) {
    let { className: t } = e;
    return (0, i.jsx)('div', { className: s()(u.separator, t) });
}
function I(e) {
    let { children: t, ...n } = e,
        { canShowReactionsOnMessageHover: a } = c.ZP.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 });
    return (0, i.jsx)(o.ZP, {
        className: s()(n.className, u.popover, { [u.popoverReactionHoverBar]: a }),
        children: t
    });
}
