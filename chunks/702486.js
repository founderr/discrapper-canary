n.d(t, {
    _: function () {
        return o;
    }
});
var r = n(192379),
    a = n(772848),
    i = n(638730),
    l = n(626135);
let s = (e, t, n, r) => {
        let { scrollTop: a = 0, scrollOffset: i = 0, scrollHeight: s = 0, scrollWidth: o = 0 } = r;
        if (s > 0) {
            let r = (a + i) / s;
            r > 0 &&
                l.default.track(e, {
                    scroll_visible_percent: r,
                    source: n,
                    page_height: Math.round(s),
                    page_width: Math.round(o),
                    page_session_id: t
                });
        }
    },
    o = (e, t) => {
        let n = r.useRef(null),
            l = r.useRef((0, a.Z)()),
            o = (0, i.h)(s, 5000, [], { trailing: !0 }),
            c = r.useCallback(() => {
                var r;
                let a = null === (r = n.current) || void 0 === r ? void 0 : r.getScrollerNode();
                null != a &&
                    o(e, l.current, t, {
                        scrollTop: a.scrollTop,
                        scrollOffset: a.offsetHeight,
                        scrollHeight: a.scrollHeight,
                        scrollWidth: a.scrollWidth
                    });
            }, [o, e, t]);
        return {
            scrollerRef: n,
            scrollHandler: c,
            sessionId: l.current
        };
    };
