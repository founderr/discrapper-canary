s.d(t, {
    _: function () {
        return o;
    }
});
var a = s(192379),
    r = s(772848),
    n = s(638730),
    i = s(626135);
let l = (e, t, s, a) => {
        let { scrollTop: r = 0, scrollOffset: n = 0, scrollHeight: l = 0, scrollWidth: o = 0 } = a;
        if (l > 0) {
            let a = (r + n) / l;
            a > 0 &&
                i.default.track(e, {
                    scroll_visible_percent: a,
                    source: s,
                    page_height: Math.round(l),
                    page_width: Math.round(o),
                    page_session_id: t
                });
        }
    },
    o = (e, t) => {
        let s = a.useRef(null),
            i = a.useRef((0, r.Z)()),
            o = (0, n.h)(l, 5000, [], { trailing: !0 }),
            c = a.useCallback(() => {
                var a;
                let r = null === (a = s.current) || void 0 === a ? void 0 : a.getScrollerNode();
                null != r &&
                    o(e, i.current, t, {
                        scrollTop: r.scrollTop,
                        scrollOffset: r.offsetHeight,
                        scrollHeight: r.scrollHeight,
                        scrollWidth: r.scrollWidth
                    });
            }, [o, e, t]);
        return {
            scrollerRef: s,
            scrollHandler: c,
            sessionId: i.current
        };
    };
