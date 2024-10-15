i.d(e, {
    j: function () {
        return a;
    }
});
var l = i(735250),
    s = i(470079),
    t = i(777207),
    r = i(529079);
function a(n) {
    let { title: e, subtitle: i, iconSrc: a, backgroundSrc: d, animatedBackgroundSrc: o, prefersReducedMotion: u = !0 } = n,
        c = s.useMemo(() => {
            let n = null != d ? d : a;
            if (null != n) return { '--custom-background-url': 'url('.concat(n.toString(), ')') };
        }, [d, a]),
        m = s.useMemo(() => {
            if (null == d) return;
            let n = { '--custom-background-static': 'url('.concat(d.toString()) };
            return !u && null != o && (n['--custom-background-animated'] = 'url('.concat(o.toString(), ')')), n;
        }, [o, d, u]);
    return (0, l.jsxs)('div', {
        className: r.wrapper,
        children: [
            (0, l.jsx)('div', {
                className: r.background,
                style: c
            }),
            (0, l.jsxs)('div', {
                className: r.content,
                children: [
                    null != a &&
                        (0, l.jsx)('div', {
                            className: r.icon,
                            children: (0, l.jsx)('img', {
                                src: a.toString(),
                                alt: ''
                            })
                        }),
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(t.x, {
                                variant: 'heading-xl/bold',
                                tag: 'div',
                                children: e
                            }),
                            null != i &&
                                (0, l.jsxs)(t.x, {
                                    variant: 'text-sm/normal',
                                    children: ['\u201C', i, '\u201D']
                                })
                        ]
                    })
                ]
            }),
            null != d
                ? (0, l.jsx)('div', {
                      className: r.image,
                      style: m
                  })
                : null
        ]
    });
}
