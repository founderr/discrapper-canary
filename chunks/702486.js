n.d(t, {
    _: function () {
        return l;
    }
});
var r = n(470079),
    s = n(772848),
    a = n(638730),
    i = n(626135);
let o = (e, t, n, r) => {
        let { scrollTop: s = 0, scrollOffset: a = 0, scrollHeight: o = 0, scrollWidth: l = 0 } = r;
        if (o > 0) {
            let r = (s + a) / o;
            r > 0 &&
                i.default.track(e, {
                    scroll_visible_percent: r,
                    source: n,
                    page_height: Math.round(o),
                    page_width: Math.round(l),
                    page_session_id: t
                });
        }
    },
    l = (e, t) => {
        let n = r.useRef(null),
            i = r.useRef((0, s.Z)()),
            l = (0, a.h)(o, 5000, [], { trailing: !0 }),
            c = r.useCallback(() => {
                var r;
                let s = null === (r = n.current) || void 0 === r ? void 0 : r.getScrollerNode();
                null != s &&
                    l(e, i.current, t, {
                        scrollTop: s.scrollTop,
                        scrollOffset: s.offsetHeight,
                        scrollHeight: s.scrollHeight,
                        scrollWidth: s.scrollWidth
                    });
            }, [l, e, t]);
        return {
            scrollerRef: n,
            scrollHandler: c,
            sessionId: i.current
        };
    };
