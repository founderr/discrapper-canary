l.d(n, {
    j: function () {
        return r;
    }
});
var i = l(735250),
    t = l(470079),
    s = l(777207),
    a = l(393713);
function r(e) {
    let { title: n, subtitle: l, iconSrc: r, backgroundSrc: o, animatedBackgroundSrc: d, prefersReducedMotion: u = !0 } = e,
        c = t.useMemo(() => {
            let e = null != o ? o : r;
            if (null != e) return { '--custom-background-url': 'url('.concat(e.toString(), ')') };
        }, [o, r]),
        m = t.useMemo(() => {
            if (null == o) return;
            let e = { '--custom-background-static': 'url('.concat(o.toString()) };
            return !u && null != d && (e['--custom-background-animated'] = 'url('.concat(d.toString(), ')')), e;
        }, [d, o, u]);
    return (0, i.jsxs)('div', {
        className: a.wrapper,
        children: [
            (0, i.jsx)('div', {
                className: a.background,
                style: c
            }),
            (0, i.jsxs)('div', {
                className: a.content,
                children: [
                    null != r &&
                        (0, i.jsx)('div', {
                            className: a.icon,
                            children: (0, i.jsx)('img', {
                                src: r.toString(),
                                alt: ''
                            })
                        }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(s.x, {
                                variant: 'heading-xl/bold',
                                tag: 'div',
                                children: n
                            }),
                            null != l &&
                                (0, i.jsxs)(s.x, {
                                    variant: 'text-sm/normal',
                                    children: ['\u201C', l, '\u201D']
                                })
                        ]
                    })
                ]
            }),
            null != o
                ? (0, i.jsx)('div', {
                      className: a.image,
                      style: m
                  })
                : null
        ]
    });
}
