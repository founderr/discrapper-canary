n.d(t, {
    _: function () {
        return o;
    }
});
var r = n(192379),
    s = n(772848),
    a = n(638730),
    i = n(626135);
let l = (e, t, n, r) => {
        let { scrollTop: s = 0, scrollOffset: a = 0, scrollHeight: l = 0, scrollWidth: o = 0 } = r;
        if (l > 0) {
            let r = (s + a) / l;
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
            i = r.useRef((0, s.Z)()),
            o = (0, a.h)(l, 5000, [], { trailing: !0 }),
            c = r.useCallback(() => {
                var r;
                let s = null === (r = n.current) || void 0 === r ? void 0 : r.getScrollerNode();
                null != s &&
                    o(e, i.current, t, {
                        scrollTop: s.scrollTop,
                        scrollOffset: s.offsetHeight,
                        scrollHeight: s.scrollHeight,
                        scrollWidth: s.scrollWidth
                    });
            }, [o, e, t]);
        return {
            scrollerRef: n,
            scrollHandler: c,
            sessionId: i.current
        };
    };
