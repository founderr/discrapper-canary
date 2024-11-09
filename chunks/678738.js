n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(607070),
    c = n(830900);
function d(e) {
    let { children: t, heading: n, subheading: a, className: d, scrollIntoView: f = !1, headingColor: _ = 'header-secondary' } = e,
        h = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        p = i.useRef(null);
    return (
        i.useEffect(() => {
            let e = p.current;
            if (null == e) return;
            let t = requestAnimationFrame(() => {
                e.scrollIntoView({ behavior: h ? 'auto' : 'smooth' });
            });
            return () => cancelAnimationFrame(t);
        }, [h]),
        (0, r.jsxs)('section', {
            ref: f ? p : void 0,
            className: s()(c.section, d),
            children: [
                null != n &&
                    (0, r.jsxs)('div', {
                        className: c.headings,
                        children: [
                            (0, r.jsx)(l.Heading, {
                                variant: 'text-xs/semibold',
                                color: _,
                                children: n
                            }),
                            null != a &&
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-xs/normal',
                                    children: a
                                })
                        ]
                    }),
                t
            ]
        })
    );
}
