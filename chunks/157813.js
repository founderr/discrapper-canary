n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(475179),
    u = n(871499),
    c = n(388032),
    d = n(89554);
function f(e) {
    let { className: t, isVertical: n } = e;
    return (0, r.jsxs)('div', {
        className: d.iconContainer,
        children: [
            (0, r.jsx)(o.ChevronSmallDownIcon, {
                size: 'md',
                color: 'currentColor',
                className: s()(n ? d.upCaret : d.leftCaret, t)
            }),
            (0, r.jsx)(o.GroupIcon, {
                size: 'md',
                color: 'currentColor',
                className: s()(d.members, t)
            })
        ]
    });
}
function _(e) {
    let { className: t, isVertical: n } = e;
    return (0, r.jsxs)('div', {
        className: d.iconContainer,
        children: [
            (0, r.jsx)(o.ChevronSmallDownIcon, {
                size: 'md',
                color: 'currentColor',
                className: s()(n ? d.downCaret : d.rightCaret, t)
            }),
            n &&
                (0, r.jsx)(o.GroupIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: s()(d.members, t)
                })
        ]
    });
}
function p(e) {
    let { channelId: t, className: n, isParticipantsOpen: a, isVertical: o = !1, hideTooltip: p = !1 } = e,
        h = i.useCallback(
            (e) => {
                let { className: t } = e;
                return a
                    ? (0, r.jsx)(_, {
                          className: t,
                          isVertical: o
                      })
                    : (0, r.jsx)(f, {
                          className: t,
                          isVertical: o
                      });
            },
            [a, o]
        );
    return (0, r.jsx)(u.Z, {
        label: a ? c.intl.string(c.t.QJMRUF) : c.intl.string(c.t.vZiwmJ),
        className: s()(d.participantsButton, n),
        onClick: function () {
            l.Z.toggleParticipants(t, !a);
        },
        iconComponent: h,
        shouldShowTooltip: !p
    });
}
