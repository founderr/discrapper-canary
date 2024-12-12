r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(192379);
let a = Object.freeze({
    scrollTop: 0,
    scrollLeft: 0,
    scrollHeight: 0,
    scrollWidth: 0,
    offsetHeight: 0,
    offsetWidth: 0,
    dirty: 2
});
function s() {
    let e = (0, i.useRef)(null),
        n = (0, i.useRef)(a),
        r = (0, i.useCallback)(() => {
            let { current: r } = e,
                { dirty: i } = n.current;
            if (null == r || 0 === i) return n.current;
            if (1 === i) {
                let { scrollTop: e, scrollLeft: i } = r;
                n.current = {
                    ...n.current,
                    scrollTop: e,
                    scrollLeft: i,
                    dirty: 0
                };
            } else {
                let { scrollTop: e, scrollLeft: i, scrollHeight: a, scrollWidth: s, offsetHeight: o, offsetWidth: l } = r;
                n.current = {
                    scrollTop: e,
                    scrollLeft: i,
                    scrollHeight: a,
                    scrollWidth: s,
                    offsetHeight: o,
                    offsetWidth: l,
                    dirty: 0
                };
            }
            return n.current;
        }, []);
    return {
        scrollerRef: e,
        scrollerState: n,
        getScrollerState: r
    };
}
