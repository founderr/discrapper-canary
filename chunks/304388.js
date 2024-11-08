n(47120);
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(579185),
    s = n(420212),
    o = n(41721);
function c(e) {
    let { renderPopout: t, onMouseEnter: n, onMouseLeave: a, closePopout: r, isHovered: s, ...o } = e;
    return (
        l.useEffect(() => {
            !s && r();
        }, [r, s]),
        (0, i.jsx)('div', {
            onMouseEnter: n,
            onMouseLeave: a,
            children: t({
                closePopout: r,
                ...o
            })
        })
    );
}
t.Z = l.forwardRef(function (e, t) {
    let { renderPopout: n, children: d } = e,
        [u, h] = l.useState(!1),
        { isHovered: p, setIsHovered: m, onMouseEnter: f, onMouseLeave: g, cancelTimers: C } = (0, r.Z)(200, 300);
    function x(e) {
        'focus' !== e.type && !u && f();
    }
    function v() {
        !u && g();
    }
    function _(e) {
        C(), h(!u), (!p || u) && e();
    }
    l.useImperativeHandle(
        t,
        () => ({
            hidePopout() {
                m(!1), h(!1);
            }
        }),
        [m, h]
    );
    let I = p || u;
    return (0, i.jsx)(a.Popout, {
        animation: a.Popout.Animation.FADE,
        shouldShow: I,
        animationPosition: 'top',
        position: 'top',
        align: 'left',
        spacing: 16,
        onRequestClose: () => {
            m(!1), h(!1);
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
                children: d({
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
