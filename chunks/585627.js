r.d(n, {
    JJ: function () {
        return l;
    },
    KG: function () {
        return s;
    },
    jo: function () {
        return o;
    }
});
var i = r(47120);
var a = r(260866);
function s(e, n) {
    return new Promise((r) => {
        let i = new IntersectionObserver(
            (e) => {
                let n = 0,
                    s = null;
                for (let { isIntersecting: o, intersectionRatio: l, target: u } of e) {
                    if (o && 1 === l) {
                        i.disconnect();
                        let e = u.getAttribute(a.ie);
                        if (null != e) return r(e);
                    }
                    l > n && ((n = l), (s = u.getAttribute(a.ie)));
                }
                i.disconnect(), r(s);
            },
            { root: e }
        );
        for (let e of n) i.observe(e);
    });
}
function o(e, n) {
    return new Promise((r) => {
        let i = new IntersectionObserver(
            (e) => {
                let n = 0,
                    s = null;
                for (let o = e.length - 1; o >= 0; o--) {
                    let { isIntersecting: l, intersectionRatio: u, target: c } = e[o];
                    if (l && 1 === u) {
                        i.disconnect();
                        let e = c.getAttribute(a.ie);
                        if (null != e) return r(e);
                    }
                    u > n && ((n = u), (s = c.getAttribute(a.ie)));
                }
                i.disconnect(), r(s);
            },
            { root: e }
        );
        for (let e of n) i.observe(e);
    });
}
function l(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.5;
    return new Promise((i) => {
        let a = new IntersectionObserver(
            (e) => {
                let n = e[0];
                a.disconnect(), i(n.intersectionRatio >= r);
            },
            { root: e }
        );
        a.observe(n);
    });
}
