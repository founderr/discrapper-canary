n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250), a = n(470079), s = n(442837), l = n(481060), r = n(607070), o = n(887699);
function c(e) {
    let {
            title: t,
            children: n,
            scrollIntoView: c = !1,
            headingColor: d = 'header-secondary'
        } = e, u = (0, s.e7)([r.Z], () => r.Z.useReducedMotion), h = a.useRef(null);
    return a.useEffect(() => {
        let e = h.current;
        if (null == e)
            return;
        let t = requestAnimationFrame(() => {
            e.scrollIntoView({ behavior: u ? 'auto' : 'smooth' });
        });
        return () => cancelAnimationFrame(t);
    }, [u]), (0, i.jsxs)('section', {
        ref: c ? h : void 0,
        className: o.section,
        children: [
            (0, i.jsx)(l.Heading, {
                variant: 'text-xs/semibold',
                color: d,
                children: t
            }),
            n
        ]
    });
}
