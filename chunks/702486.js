n.d(t, {
    _: function () {
        return c;
    }
});
var r = n(470079),
    a = n(772848),
    s = n(638730),
    o = n(626135);
let i = (e, t, n, r) => {
        let { scrollTop: a = 0, scrollOffset: s = 0, scrollHeight: i = 0, scrollWidth: c = 0 } = r;
        if (i > 0) {
            let r = (a + s) / i;
            r > 0 &&
                o.default.track(e, {
                    scroll_visible_percent: r,
                    source: n,
                    page_height: Math.round(i),
                    page_width: Math.round(c),
                    page_session_id: t
                });
        }
    },
    c = (e, t) => {
        let n = r.useRef(null),
            o = r.useRef((0, a.Z)()),
            c = (0, s.h)(i, 5000, [], { trailing: !0 }),
            l = r.useCallback(() => {
                var r;
                let a = null === (r = n.current) || void 0 === r ? void 0 : r.getScrollerNode();
                null != a &&
                    c(e, o.current, t, {
                        scrollTop: a.scrollTop,
                        scrollOffset: a.offsetHeight,
                        scrollHeight: a.scrollHeight,
                        scrollWidth: a.scrollWidth
                    });
            }, [c, e, t]);
        return {
            scrollerRef: n,
            scrollHandler: l,
            sessionId: o.current
        };
    };
