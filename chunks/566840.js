n.d(t, {
    Eg: function () {
        return o;
    },
    XL: function () {
        return u;
    }
});
var i = n(192379),
    l = n(903797),
    a = n(782690),
    r = n(731965);
let s = (0, l.Z)((e) => ({ upsellsByGuildId: {} }));
function o(e) {
    return s((t) => {
        var n;
        let i = {};
        return null == e ? i : null !== (n = t.upsellsByGuildId[e]) && void 0 !== n ? n : i;
    }, a.Z);
}
function c(e) {
    if (null == e) return !1;
    try {
        return window.getComputedStyle(e).overflow.includes('scroll');
    } catch (e) {
        return !1;
    }
}
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let i = l.current,
                a = () => {
                    requestAnimationFrame(() => {
                        var i, a, o;
                        let c = null !== (a = null === (i = l.current) || void 0 === i ? void 0 : i.getBoundingClientRect()) && void 0 !== a ? a : null;
                        (o = {
                            name: t,
                            guildId: e,
                            disabled: n,
                            boundingRect: null != c ? c : null
                        }),
                            (0, r.j)(() => {
                                s.setState((e) => {
                                    var t, n;
                                    return {
                                        upsellsByGuildId: {
                                            ...(null !== (t = e.upsellsByGuildId) && void 0 !== t ? t : {}),
                                            [o.guildId]: {
                                                ...(null !== (n = e.upsellsByGuildId[o.guildId]) && void 0 !== n ? n : {}),
                                                [o.name]: o
                                            }
                                        }
                                    };
                                });
                            });
                    });
                };
            if (null == i) return a(), () => {};
            let o = (function (e) {
                let t = e.parentNode;
                for (; null != t && t !== document.body && !c(t); ) t = t.parentNode;
                return c(t) ? t : null;
            })(i);
            return (
                a(),
                null == o || o.addEventListener('scroll', a, { passive: !0 }),
                () => {
                    null == o || o.removeEventListener('scroll', a);
                }
            );
        }, [e, t, n]),
        l
    );
}
