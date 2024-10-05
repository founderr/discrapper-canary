n(47120);
var i = n(735250),
    s = n(470079),
    a = n(481060),
    l = n(579185),
    r = n(420212),
    o = n(285403);
function c(e) {
    let { renderPopout: t, onMouseEnter: n, onMouseLeave: a, closePopout: l, isHovered: r, ...o } = e;
    return (
        s.useEffect(() => {
            !r && l();
        }, [l, r]),
        (0, i.jsx)('div', {
            onMouseEnter: n,
            onMouseLeave: a,
            children: t({
                closePopout: l,
                ...o
            })
        })
    );
}
t.Z = s.forwardRef(function (e, t) {
    let { renderPopout: n, children: u } = e,
        [d, h] = s.useState(!1),
        { isHovered: p, setIsHovered: m, onMouseEnter: _, onMouseLeave: f, cancelTimers: E } = (0, l.Z)(200, 300);
    function g(e) {
        'focus' !== e.type && !d && _();
    }
    function C() {
        !d && f();
    }
    function I(e) {
        E(), h(!d), (!p || d) && e();
    }
    s.useImperativeHandle(
        t,
        () => ({
            hidePopout() {
                m(!1), h(!1);
            }
        }),
        [m, h]
    );
    let T = p || d;
    return (0, i.jsx)(a.Popout, {
        animation: a.Popout.Animation.FADE,
        shouldShow: T,
        animationPosition: 'top',
        position: 'top',
        align: 'left',
        spacing: 16,
        onRequestClose: () => {
            m(!1), h(!1);
        },
        renderPopout: (e) =>
            (0, i.jsx)(c, {
                isHovered: T,
                onFocus: () => h(!0),
                onMouseEnter: _,
                onMouseLeave: C,
                renderPopout: n,
                ...e
            }),
        children: (e) => {
            let { onClick: t, onKeyDown: n } = e;
            return (0, i.jsx)(i.Fragment, {
                children: u({
                    onClick: (e) => I(() => t(e)),
                    onKeyDown: (e) => {
                        var t, i;
                        return (t = e), (i = n), void ((t.key === r.vn.ENTER || t.key === r.vn.SPACE) && I(() => i(t)));
                    },
                    className: o.actionBarButton,
                    onMouseEnter: g,
                    onMouseLeave: C,
                    isActive: T
                })
            });
        }
    });
});
