t.d(n, {
    j: function () {
        return r;
    }
});
var a = t(735250),
    i = t(470079),
    l = t(777207),
    s = t(529079);
function r(e) {
    let { title: n, subtitle: t, iconSrc: r, backgroundSrc: o, animatedBackgroundSrc: d, prefersReducedMotion: c = !0 } = e,
        u = i.useMemo(() => {
            let e = null != o ? o : r;
            if (null != e) return { '--custom-background-url': 'url('.concat(e.toString(), ')') };
        }, [o, r]),
        p = i.useMemo(() => {
            if (null == o) return;
            let e = { '--custom-background-static': 'url('.concat(o.toString()) };
            return !c && null != d && (e['--custom-background-animated'] = 'url('.concat(d.toString(), ')')), e;
        }, [d, o, c]);
    return (0, a.jsxs)('div', {
        className: s.wrapper,
        children: [
            (0, a.jsx)('div', {
                className: s.background,
                style: u
            }),
            (0, a.jsxs)('div', {
                className: s.content,
                children: [
                    null != r &&
                        (0, a.jsx)('div', {
                            className: s.icon,
                            children: (0, a.jsx)('img', {
                                src: r.toString(),
                                alt: ''
                            })
                        }),
                    (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsx)(l.x, {
                                variant: 'heading-xl/bold',
                                tag: 'div',
                                children: n
                            }),
                            null != t &&
                                (0, a.jsxs)(l.x, {
                                    variant: 'text-sm/normal',
                                    children: ['\u201C', t, '\u201D']
                                })
                        ]
                    })
                ]
            }),
            null != o
                ? (0, a.jsx)('div', {
                      className: s.image,
                      style: p
                  })
                : null
        ]
    });
}
