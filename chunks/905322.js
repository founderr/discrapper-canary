e.d(i, {
    j: function () {
        return d;
    }
});
var l = e(200651),
    t = e(192379),
    r = e(777207),
    s = e(422235);
function d(n) {
    let { title: i, subtitle: e, iconSrc: d, backgroundSrc: u, animatedBackgroundSrc: a, prefersReducedMotion: o = !0 } = n,
        c = t.useMemo(() => {
            let n = null != u ? u : d;
            if (null != n) return { '--custom-background-url': 'url('.concat(n.toString(), ')') };
        }, [u, d]),
        m = t.useMemo(() => {
            if (null == u) return;
            let n = { '--custom-background-static': 'url('.concat(u.toString()) };
            return !o && null != a && (n['--custom-background-animated'] = 'url('.concat(a.toString(), ')')), n;
        }, [a, u, o]);
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
                    null != d &&
                        (0, l.jsx)('div', {
                            className: s.icon,
                            children: (0, l.jsx)('img', {
                                src: d.toString(),
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
            null != u
                ? (0, l.jsx)('div', {
                      className: s.image,
                      style: m
                  })
                : null
        ]
    });
}
