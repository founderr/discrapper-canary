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
    s = n(120356),
    a = n.n(s),
    r = n(481060),
    l = n(377171),
    o = n(951394),
    c = n(407477),
    u = n(689938),
    d = n(189265);
function _(e) {
    let { label: t, ariaLabel: n, tooltipText: s, tooltipColor: _, icon: E, iconProps: I, onClick: m, onTooltipShow: T, onTooltipHide: h, disabled: N, dangerous: f, separator: C, sparkle: p, showNewBadge: g, buttonClassName: A, children: S, ...x } = e,
        { canShowReactionsOnMessageHover: R } = c.ZP.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 });
    return (0, i.jsx)(r.Tooltip, {
        text: null != s ? s : t,
        color: null != _ ? _ : r.TooltipColors.PRIMARY,
        'aria-label': t,
        onTooltipShow: T,
        onTooltipHide: h,
        hideOnClick: !0,
        tooltipClassName: d.tooltip,
        children: (e) => {
            let { onMouseEnter: s, onMouseLeave: c, onClick: _ } = e;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)(o.zx, {
                        className: a()(A, { [d.hoverBarButton]: R }),
                        onMouseEnter: s,
                        onMouseLeave: c,
                        onClick: (e) => {
                            null == _ || _(), m(e);
                        },
                        'aria-label': null != n ? n : t,
                        disabled: N,
                        dangerous: f,
                        ...x,
                        children: [
                            null != E
                                ? (0, i.jsx)(E, {
                                      className: d.icon,
                                      color: 'currentColor',
                                      ...I
                                  })
                                : null,
                            null != S
                                ? (0, i.jsx)('div', {
                                      className: a()(d.icon, d.buttonContent),
                                      children: S
                                  })
                                : null,
                            p && (0, i.jsx)(r.LottieSparkle, {}),
                            g &&
                                (0, i.jsx)(r.TextBadge, {
                                    text: u.Z.Messages.NEW,
                                    color: l.Z.BG_BRAND,
                                    className: d.newBadge
                                })
                        ]
                    }),
                    C && (0, i.jsx)(o.Z0, {})
                ]
            });
        }
    });
}
function E(e) {
    let { className: t } = e;
    return (0, i.jsx)('div', { className: a()(d.separator, t) });
}
function I(e) {
    let { children: t, ...n } = e,
        { canShowReactionsOnMessageHover: s } = c.ZP.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 });
    return (0, i.jsx)(o.ZP, {
        className: a()(n.className, d.popover, { [d.popoverReactionHoverBar]: s }),
        children: t
    });
}
