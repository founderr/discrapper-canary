i.d(e, {
    j: function () {
        return a;
    }
});
var l = i(735250),
    t = i(470079),
    r = i(777207),
    s = i(529079);
function a(n) {
    let { title: e, subtitle: i, iconSrc: a, backgroundSrc: d, animatedBackgroundSrc: o, prefersReducedMotion: u = !0 } = n,
        c = t.useMemo(() => {
            let n = null != d ? d : a;
            if (null != n) return { '--custom-background-url': 'url('.concat(n.toString(), ')') };
        }, [d, a]),
        p = t.useMemo(() => {
            if (null == d) return;
            let n = { '--custom-background-static': 'url('.concat(d.toString()) };
            return !u && null != o && (n['--custom-background-animated'] = 'url('.concat(o.toString(), ')')), n;
        }, [o, d, u]);
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
                                children: e
                            }),
                            null != i &&
                                (0, l.jsxs)(r.x, {
                                    variant: 'text-sm/normal',
                                    children: ['\u201C', i, '\u201D']
                                })
                        ]
                    })
                ]
            }),
            null != d
                ? (0, l.jsx)('div', {
                      className: s.image,
                      style: p
                  })
                : null
        ]
    });
}
