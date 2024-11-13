e.d(i, {
    j: function () {
        return o;
    }
});
var l = e(200651),
    t = e(192379),
    r = e(777207),
    s = e(529079);
function o(n) {
    let { title: i, subtitle: e, iconSrc: o, backgroundSrc: a, animatedBackgroundSrc: d, prefersReducedMotion: u = !0 } = n,
        c = t.useMemo(() => {
            let n = null != a ? a : o;
            if (null != n) return { '--custom-background-url': 'url('.concat(n.toString(), ')') };
        }, [a, o]),
        m = t.useMemo(() => {
            if (null == a) return;
            let n = { '--custom-background-static': 'url('.concat(a.toString()) };
            return !u && null != d && (n['--custom-background-animated'] = 'url('.concat(d.toString(), ')')), n;
        }, [d, a, u]);
    return (0, l.jsxs)('div', {
        className: s.wrapper,
        children: [
            (0, l.jsx)('div', {
                className: s.background,
                style: c
            }),
            (0, l.jsxs)('div', {
                className: s.content,
                children: [
                    null != o &&
                        (0, l.jsx)('div', {
                            className: s.icon,
                            children: (0, l.jsx)('img', {
                                src: o.toString(),
                                alt: ''
                            })
                        }),
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(r.x, {
                                variant: 'heading-xl/bold',
                                tag: 'div',
                                children: i
                            }),
                            null != e &&
                                (0, l.jsxs)(r.x, {
                                    variant: 'text-sm/normal',
                                    children: ['\u201C', e, '\u201D']
                                })
                        ]
                    })
                ]
            }),
            null != a
                ? (0, l.jsx)('div', {
                      className: s.image,
                      style: m
                  })
                : null
        ]
    });
}
