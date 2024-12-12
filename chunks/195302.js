r.d(n, {
    d: function () {
        return f;
    },
    p: function () {
        return d;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(775953),
    l = r(512722),
    u = r.n(l);
let c = s.createContext(void 0);
function d(e) {
    let { children: n } = e,
        [r, i] = s.useState(null),
        o = s.useMemo(() => ({ setComponentToSnapshot: i }), [i]);
    return (0, a.jsxs)(c.Provider, {
        value: o,
        children: [
            n,
            null != r &&
                (0, a.jsx)('div', {
                    id: 'component-to-image-container',
                    style: {
                        position: 'fixed',
                        top: '-1000px',
                        right: '-1000px'
                    },
                    children: r
                })
        ]
    });
}
function f(e) {
    let { renderComponent: n, imageOptions: r } = e,
        i = s.useContext(c);
    u()(null != i, 'useComponentToImageContext must be used within a ComponentToImageProvider');
    let [a, l] = s.useState(!1);
    return {
        generatingImage: a,
        generateImage: () =>
            new Promise((e, a) => {
                l(!0);
                let s = async (n) => {
                    try {
                        let i = await (0, o.SE)(n, r);
                        u()(null != i, 'Unable to generate image'), e(i);
                    } catch (e) {
                        a(e);
                    } finally {
                        l(!1), i.setComponentToSnapshot(null);
                    }
                };
                i.setComponentToSnapshot(n({ generateImageRef: s }));
            })
    };
}
