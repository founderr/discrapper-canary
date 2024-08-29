n.d(t, {
    _: function () {
        return l;
    }
});
var a = n(470079),
    r = n(772848),
    s = n(638730),
    o = n(626135);
let i = (e, t, n, a) => {
        let { scrollTop: r = 0, scrollOffset: s = 0, scrollHeight: i = 0, scrollWidth: l = 0 } = a;
        if (i > 0) {
            let a = (r + s) / i;
            a > 0 &&
                o.default.track(e, {
                    scroll_visible_percent: a,
                    source: n,
                    page_height: Math.round(i),
                    page_width: Math.round(l),
                    page_session_id: t
                });
        }
    },
    l = (e, t) => {
        let n = a.useRef(null),
            o = a.useRef((0, r.Z)()),
            l = (0, s.h)(i, 5000, [], { trailing: !0 }),
            c = a.useCallback(() => {
                var a;
                let r = null === (a = n.current) || void 0 === a ? void 0 : a.getScrollerNode();
                null != r &&
                    l(e, o.current, t, {
                        scrollTop: r.scrollTop,
                        scrollOffset: r.offsetHeight,
                        scrollHeight: r.scrollHeight,
                        scrollWidth: r.scrollWidth
                    });
            }, [l, e, t]);
        return {
            scrollerRef: n,
            scrollHandler: c,
            sessionId: o.current
        };
    };
