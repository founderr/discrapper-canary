n(47120);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(579185),
    s = n(420212),
    o = n(285403);
function c(e) {
    let { renderPopout: t, onMouseEnter: n, onMouseLeave: r, closePopout: a, isHovered: s, ...o } = e;
    return (
        l.useEffect(() => {
            !s && a();
        }, [a, s]),
        (0, i.jsx)('div', {
            onMouseEnter: n,
            onMouseLeave: r,
            children: t({
                closePopout: a,
                ...o
            })
        })
    );
}
t.Z = l.forwardRef(function (e, t) {
    let { renderPopout: n, children: u } = e,
        [d, h] = l.useState(!1),
        { isHovered: m, setIsHovered: p, onMouseEnter: f, onMouseLeave: g, cancelTimers: C } = (0, a.Z)(200, 300);
    function x(e) {
        'focus' !== e.type && !d && f();
    }
    function v() {
        !d && g();
    }
    function _(e) {
        C(), h(!d), (!m || d) && e();
    }
    l.useImperativeHandle(
        t,
        () => ({
            hidePopout() {
                p(!1), h(!1);
            }
        }),
        [p, h]
    );
    let I = m || d;
    return (0, i.jsx)(r.Popout, {
        animation: r.Popout.Animation.FADE,
        shouldShow: I,
        animationPosition: 'top',
        position: 'top',
        align: 'left',
        spacing: 16,
        onRequestClose: () => {
            p(!1), h(!1);
        },
        renderPopout: (e) =>
            (0, i.jsx)(c, {
                isHovered: I,
                onFocus: () => h(!0),
                onMouseEnter: f,
                onMouseLeave: v,
                renderPopout: n,
                ...e
            }),
        children: (e) => {
            let { onClick: t, onKeyDown: n } = e;
            return (0, i.jsx)(i.Fragment, {
                children: u({
                    onClick: (e) => _(() => t(e)),
                    onKeyDown: (e) => {
                        var t, i;
                        return (t = e), (i = n), void ((t.key === s.vn.ENTER || t.key === s.vn.SPACE) && _(() => i(t)));
                    },
                    className: o.actionBarButton,
                    onMouseEnter: x,
                    onMouseLeave: v,
                    isActive: I
                })
            });
        }
    });
});
