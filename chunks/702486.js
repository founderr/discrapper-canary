n.d(t, {
    _: function () {
        return o;
    }
});
var r = n(192379),
    a = n(772848),
    s = n(638730),
    i = n(626135);
let l = (e, t, n, r) => {
        let { scrollTop: a = 0, scrollOffset: s = 0, scrollHeight: l = 0, scrollWidth: o = 0 } = r;
        if (l > 0) {
            let r = (a + s) / l;
            r > 0 &&
                i.default.track(e, {
                    scroll_visible_percent: r,
                    source: n,
                    page_height: Math.round(l),
                    page_width: Math.round(o),
                    page_session_id: t
                });
        }
    },
    o = (e, t) => {
        let n = r.useRef(null),
            i = r.useRef((0, a.Z)()),
            o = (0, s.h)(l, 5000, [], { trailing: !0 }),
            c = r.useCallback(() => {
                var r;
                let a = null === (r = n.current) || void 0 === r ? void 0 : r.getScrollerNode();
                null != a &&
                    o(e, i.current, t, {
                        scrollTop: a.scrollTop,
                        scrollOffset: a.offsetHeight,
                        scrollHeight: a.scrollHeight,
                        scrollWidth: a.scrollWidth
                    });
            }, [o, e, t]);
        return {
            scrollerRef: n,
            scrollHandler: c,
            sessionId: i.current
        };
    };
