n(47120);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(579185),
    s = n(420212),
    o = n(638411);
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
    let { renderPopout: n, children: d, align: u = 'left' } = e,
        [h, p] = l.useState(!1),
        { isHovered: m, setIsHovered: f, onMouseEnter: g, onMouseLeave: C, cancelTimers: x } = (0, a.Z)(200, 300);
    function v(e) {
        'focus' !== e.type && !h && g();
    }
    function _() {
        !h && C();
    }
    function I(e) {
        x(), p(!h), (!m || h) && e();
    }
    l.useImperativeHandle(
        t,
        () => ({
            hidePopout() {
                f(!1), p(!1);
            }
        }),
        [f, p]
    );
    let E = m || h;
    return (0, i.jsx)(r.Popout, {
        animation: r.Popout.Animation.FADE,
        shouldShow: E,
        animationPosition: 'top',
        position: 'top',
        align: u,
        spacing: 16,
        onRequestClose: () => {
            f(!1), p(!1);
        },
        renderPopout: (e) =>
            (0, i.jsx)(c, {
                isHovered: E,
                onFocus: () => p(!0),
                onMouseEnter: g,
                onMouseLeave: _,
                renderPopout: n,
                ...e
            }),
        children: (e) => {
            let { onClick: t, onKeyDown: n } = e;
            return (0, i.jsx)(i.Fragment, {
                children: d({
                    onClick: (e) => I(() => t(e)),
                    onKeyDown: (e) => {
                        var t, i;
                        return (t = e), (i = n), void ((t.key === s.vn.ENTER || t.key === s.vn.SPACE) && I(() => i(t)));
                    },
                    className: o.actionBarButton,
                    onMouseEnter: v,
                    onMouseLeave: _,
                    isActive: E
                })
            });
        }
    });
});
