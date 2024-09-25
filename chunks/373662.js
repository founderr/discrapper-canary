n.d(t, {
    ZP: function () {
        return f;
    },
    fO: function () {
        return E;
    },
    sF: function () {
        return _;
    }
});
var r = n(735250),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(377171),
    l = n(951394),
    u = n(407477),
    c = n(689938),
    d = n(189265);
function _(e) {
    let { label: t, ariaLabel: n, tooltipText: i, tooltipColor: _, icon: E, iconProps: f, onClick: h, onTooltipShow: p, onTooltipHide: m, disabled: I, dangerous: T, separator: g, sparkle: S, showNewBadge: A, buttonClassName: v, children: N, ...O } = e,
        { canShowReactionsOnMessageHover: R } = u.ZP.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 });
    return (0, r.jsx)(o.Tooltip, {
        text: null != i ? i : t,
        color: null != _ ? _ : o.TooltipColors.PRIMARY,
        'aria-label': t,
        onTooltipShow: p,
        onTooltipHide: m,
        hideOnClick: !0,
        tooltipClassName: d.tooltip,
        children: (e) => {
            let { onMouseEnter: i, onMouseLeave: u, onClick: _ } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(l.zx, {
                        className: a()(v, { [d.hoverBarButton]: R }),
                        onMouseEnter: i,
                        onMouseLeave: u,
                        onClick: (e) => {
                            null == _ || _(), h(e);
                        },
                        'aria-label': null != n ? n : t,
                        disabled: I,
                        dangerous: T,
                        ...O,
                        children: [
                            null != E
                                ? (0, r.jsx)(E, {
                                      className: d.icon,
                                      color: 'currentColor',
                                      ...f
                                  })
                                : null,
                            null != N
                                ? (0, r.jsx)('div', {
                                      className: a()(d.icon, d.buttonContent),
                                      children: N
                                  })
                                : null,
                            S && (0, r.jsx)(o.LottieSparkle, {}),
                            A &&
                                (0, r.jsx)(o.TextBadge, {
                                    text: c.Z.Messages.NEW,
                                    color: s.Z.BG_BRAND,
                                    className: d.newBadge
                                })
                        ]
                    }),
                    g && (0, r.jsx)(l.Z0, {})
                ]
            });
        }
    });
}
function E(e) {
    let { className: t } = e;
    return (0, r.jsx)('div', { className: a()(d.separator, t) });
}
function f(e) {
    let { children: t, ...n } = e,
        { canShowReactionsOnMessageHover: i } = u.ZP.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 });
    return (0, r.jsx)(l.ZP, {
        className: a()(n.className, d.popover, { [d.popoverReactionHoverBar]: i }),
        children: t
    });
}
