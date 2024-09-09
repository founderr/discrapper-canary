r.d(t, {
    _: function () {
        return l;
    }
});
var a = r(470079),
    n = r(772848),
    s = r(638730),
    i = r(626135);
let o = (e, t, r, a) => {
        let { scrollTop: n = 0, scrollOffset: s = 0, scrollHeight: o = 0, scrollWidth: l = 0 } = a;
        if (o > 0) {
            let a = (n + s) / o;
            a > 0 &&
                i.default.track(e, {
                    scroll_visible_percent: a,
                    source: r,
                    page_height: Math.round(o),
                    page_width: Math.round(l),
                    page_session_id: t
                });
        }
    },
    l = (e, t) => {
        let r = a.useRef(null),
            i = a.useRef((0, n.Z)()),
            l = (0, s.h)(o, 5000, [], { trailing: !0 }),
            c = a.useCallback(() => {
                var a;
                let n = null === (a = r.current) || void 0 === a ? void 0 : a.getScrollerNode();
                null != n &&
                    l(e, i.current, t, {
                        scrollTop: n.scrollTop,
                        scrollOffset: n.offsetHeight,
                        scrollHeight: n.scrollHeight,
                        scrollWidth: n.scrollWidth
                    });
            }, [l, e, t]);
        return {
            scrollerRef: r,
            scrollHandler: c,
            sessionId: i.current
        };
    };
