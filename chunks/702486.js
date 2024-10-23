r.d(t, {
    _: function () {
        return o;
    }
});
var s = r(192379),
    n = r(772848),
    a = r(638730),
    i = r(626135);
let l = (e, t, r, s) => {
        let { scrollTop: n = 0, scrollOffset: a = 0, scrollHeight: l = 0, scrollWidth: o = 0 } = s;
        if (l > 0) {
            let s = (n + a) / l;
            s > 0 &&
                i.default.track(e, {
                    scroll_visible_percent: s,
                    source: r,
                    page_height: Math.round(l),
                    page_width: Math.round(o),
                    page_session_id: t
                });
        }
    },
    o = (e, t) => {
        let r = s.useRef(null),
            i = s.useRef((0, n.Z)()),
            o = (0, a.h)(l, 5000, [], { trailing: !0 }),
            c = s.useCallback(() => {
                var s;
                let n = null === (s = r.current) || void 0 === s ? void 0 : s.getScrollerNode();
                null != n &&
                    o(e, i.current, t, {
                        scrollTop: n.scrollTop,
                        scrollOffset: n.offsetHeight,
                        scrollHeight: n.scrollHeight,
                        scrollWidth: n.scrollWidth
                    });
            }, [o, e, t]);
        return {
            scrollerRef: r,
            scrollHandler: c,
            sessionId: i.current
        };
    };
