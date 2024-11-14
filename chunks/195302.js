n.d(t, {
    d: function () {
        return c;
    },
    p: function () {
        return u;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(775953),
    s = n(512722),
    o = n.n(s);
let l = i.createContext(void 0);
function u(e) {
    let { children: t } = e,
        [n, a] = i.useState(null),
        s = i.useMemo(() => ({ setComponentToSnapshot: a }), [a]);
    return (0, r.jsxs)(l.Provider, {
        value: s,
        children: [
            t,
            null != n &&
                (0, r.jsx)('div', {
                    id: 'component-to-image-container',
                    style: {
                        position: 'fixed',
                        top: '-1000px',
                        right: '-1000px'
                    },
                    children: n
                })
        ]
    });
}
function c(e) {
    let { renderComponent: t, imageOptions: n } = e,
        r = i.useContext(l);
    o()(null != r, 'useComponentToImageContext must be used within a ComponentToImageProvider');
    let [s, u] = i.useState(!1);
    return {
        generatingImage: s,
        generateImage: () =>
            new Promise((e, i) => {
                u(!0);
                let s = async (t) => {
                    try {
                        let r = await (0, a.SE)(t, n);
                        o()(null != r, 'Unable to generate image'), e(r);
                    } catch (e) {
                        i(e);
                    } finally {
                        u(!1), r.setComponentToSnapshot(null);
                    }
                };
                r.setComponentToSnapshot(t({ generateImageRef: s }));
            })
    };
}
