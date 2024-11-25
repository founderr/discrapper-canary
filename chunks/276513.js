n.d(t, {
    Q: function () {
        return _;
    }
});
var r = n(200651),
    i = n(120356),
    a = n.n(i),
    s = n(257182),
    o = n(84735),
    l = n(766646),
    u = n(993365),
    c = n(531895),
    d = n(388032),
    f = n(620797);
function _(e) {
    let { role: t = 'button', variant: n = 'default', textVariant: i = 'text-sm/medium', lineClamp: _ = 1, text: p, icon: h, iconPosition: m = 'end', external: g, focusProps: E, ...v } = e;
    function I() {
        if (null != h)
            return (0, r.jsx)(h, {
                color: 'currentColor',
                size: 'text-lg/medium' === i ? 'md' : 'sm'
            });
    }
    return (
        g && (h = s.G),
        (0, r.jsx)(o.t, {
            ...E,
            children: (0, r.jsxs)('button', {
                role: t,
                className: a()(f.linkButton, f[n]),
                ...v,
                children: [
                    null != h && 'start' === m && (0, r.jsx)(I, {}),
                    (0, r.jsx)(u.x, {
                        tag: 'span',
                        variant: i,
                        color: 'none',
                        lineClamp: _,
                        className: f.text,
                        children: p
                    }),
                    null != h && 'end' === m && (0, r.jsx)(I, {}),
                    g && (0, r.jsx)(l.n, { children: d.intl.string(c.Z.cgdAs7) })
                ]
            })
        })
    );
}
