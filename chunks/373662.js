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
    c = n(364742),
    u = n(689938),
    d = n(589960);
function _(e) {
    let { label: t, ariaLabel: n, tooltipText: s, tooltipColor: _, icon: E, iconProps: I, onClick: m, onTooltipShow: T, onTooltipHide: h, disabled: N, dangerous: C, separator: f, sparkle: p, showNewBadge: g, buttonClassName: S, children: A, ...R } = e,
        { canShowReactionsOnMessageHover: x } = c.Z.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 });
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
                        className: a()(S, { [d.hoverBarButton]: x }),
                        onMouseEnter: s,
                        onMouseLeave: c,
                        onClick: (e) => {
                            null == _ || _(), m(e);
                        },
                        'aria-label': null != n ? n : t,
                        disabled: N,
                        dangerous: C,
                        ...R,
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
                                      className: a()(d.icon, d.buttonContent),
                                      children: A
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
                    f && (0, i.jsx)(o.Z0, {})
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
        { canShowReactionsOnMessageHover: s } = c.Z.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 });
    return (0, i.jsx)(o.ZP, {
        className: a()(n.className, d.popover, { [d.popoverReactionHoverBar]: s }),
        children: t
    });
}
