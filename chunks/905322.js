e.d(i, {
    j: function () {
        return a;
    }
});
var l = e(200651),
    t = e(192379),
    r = e(777207),
    s = e(529079);
function a(n) {
    let { title: i, subtitle: e, iconSrc: a, backgroundSrc: o, animatedBackgroundSrc: d, prefersReducedMotion: u = !0 } = n,
        c = t.useMemo(() => {
            let n = null != o ? o : a;
            if (null != n) return { '--custom-background-url': 'url('.concat(n.toString(), ')') };
        }, [o, a]),
        m = t.useMemo(() => {
            if (null == o) return;
            let n = { '--custom-background-static': 'url('.concat(o.toString()) };
            return !u && null != d && (n['--custom-background-animated'] = 'url('.concat(d.toString(), ')')), n;
        }, [d, o, u]);
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
                    null != a &&
                        (0, l.jsx)('div', {
                            className: s.icon,
                            children: (0, l.jsx)('img', {
                                src: a.toString(),
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
            null != o
                ? (0, l.jsx)('div', {
                      className: s.image,
                      style: m
                  })
                : null
        ]
    });
}
