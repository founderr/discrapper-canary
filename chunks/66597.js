n.d(t, {
    R: function () {
        return d;
    },
    n: function () {
        return c;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079);
let o = 'data-focus-blocked',
    s = 0;
function l() {
    return s++;
}
function u(e) {
    return document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => (e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP) });
}
function c(e, t) {
    let [n] = a.useState(() => l()),
        r = ''.concat(o, '-').concat(n);
    a.useLayoutEffect(() => {
        if (t) {
            let t = e.current;
            if (null != t) {
                let e = u(t),
                    n = e.currentNode;
                for (; null !== n; ) {
                    let t = n,
                        i = t.tabIndex;
                    (t.tabIndex = -1), t.setAttribute(r, String(i)), (n = e.nextNode());
                }
                return () => {
                    t.querySelectorAll('['.concat(r, ']')).forEach((e) => {
                        let t = e.getAttribute(r);
                        if (null != t) {
                            let n = parseInt(t, 10);
                            e.tabIndex = n;
                        }
                    });
                };
            }
        }
    }, [t]);
}
function d(e) {
    let { children: t, className: n, enabled: r = !0 } = e,
        o = a.useRef(null);
    return (
        c(o, r),
        (0, i.jsx)('div', {
            ref: o,
            className: n,
            children: t
        })
    );
}
