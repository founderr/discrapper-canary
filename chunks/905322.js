e.d(i, {
    j: function () {
        return a;
    }
});
var t = e(200651),
    l = e(192379),
    r = e(777207),
    s = e(529079);
function a(n) {
    let { title: i, subtitle: e, iconSrc: a, backgroundSrc: o, animatedBackgroundSrc: d, prefersReducedMotion: u = !0 } = n,
        c = l.useMemo(() => {
            let n = null != o ? o : a;
            if (null != n) return { '--custom-background-url': 'url('.concat(n.toString(), ')') };
        }, [o, a]),
        m = l.useMemo(() => {
            if (null == o) return;
            let n = { '--custom-background-static': 'url('.concat(o.toString()) };
            return !u && null != d && (n['--custom-background-animated'] = 'url('.concat(d.toString(), ')')), n;
        }, [d, o, u]);
    return (0, t.jsxs)('div', {
        className: s.wrapper,
        children: [
            (0, t.jsx)('div', {
                className: s.background,
                style: c
            }),
            (0, t.jsxs)('div', {
                className: s.content,
                children: [
                    null != a &&
                        (0, t.jsx)('div', {
                            className: s.icon,
                            children: (0, t.jsx)('img', {
                                src: a.toString(),
                                alt: ''
                            })
                        }),
                    (0, t.jsxs)('div', {
                        children: [
                            (0, t.jsx)(r.x, {
                                variant: 'heading-xl/bold',
                                tag: 'div',
                                children: i
                            }),
                            null != e &&
                                (0, t.jsxs)(r.x, {
                                    variant: 'text-sm/normal',
                                    children: ['\u201C', e, '\u201D']
                                })
                        ]
                    })
                ]
            }),
            null != o
                ? (0, t.jsx)('div', {
                      className: s.image,
                      style: m
                  })
                : null
        ]
    });
}
