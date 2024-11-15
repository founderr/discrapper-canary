n.d(t, {
    EM: function () {
        return f;
    },
    PR: function () {
        return d;
    },
    Tt: function () {
        return p;
    },
    ZD: function () {
        return m;
    },
    yY: function () {
        return h;
    }
}),
    n(47120);
var r = n(192379),
    i = n(976649),
    a = n(454000),
    s = n(731965);
let o = { base: n(358085).isPlatformEmbedded ? void 0 : 'Discord' },
    l = 0,
    u = {
        count: 3,
        onlyWhenBlurred: !1,
        interval: 1000
    },
    c = (0, a.F)(() => ({
        titles: [o],
        notificationCount: void 0,
        flashQueue: []
    }));
function d(e) {
    (0, s.j)(() => c.setState({ notificationCount: e }));
}
function f(e) {
    let t = {
        ...u,
        ...e,
        id: l++
    };
    return (
        (t.count = Math.max(t.count, t.messages.length)),
        c.setState((e) => ({
            flashQueue: [...e.flashQueue, t]
        })),
        () => _(t.id)
    );
}
function _(e) {
    c.setState((t) => ({ flashQueue: t.flashQueue.filter((t) => t.id !== e) }));
}
function p(e) {
    r.useEffect(() => {
        var t;
        return (
            (t = e),
            (0, s.j)(() =>
                c.setState((e) => ({
                    titles: [t, ...e.titles]
                }))
            ),
            () => {
                (0, s.j)(() => c.setState((e) => ({ titles: e.titles.filter((e) => e !== t) })));
            }
        );
    }, [...Object.values(e)]);
}
function h(e) {
    return p(e), null;
}
function m() {
    let { skipsSettingDefaultPageTitle: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    r.useEffect(() => {
        function e() {
            c.setState({ flashQueue: [] });
        }
        return document.addEventListener('focusin', e, { capture: !0 }), () => document.removeEventListener('focusin', e, { capture: !0 });
    }, []);
    let t = (function () {
        let [e, t] = c((e) => {
                let { flashQueue: t } = e,
                    n = (function (e) {
                        let t, n, r;
                        for (let i of e.titles) {
                            if (null != t && null != n) break;
                            (t = null != t ? t : i.base), (n = null != n ? n : i.location), (r = null != r ? r : i.subsection);
                        }
                        return [t, r, n];
                    })(e)
                        .filter((e) => null != e)
                        .join(' | '),
                    r = (function (e) {
                        let { notificationCount: t } = e;
                        return null == t || 0 === t ? '' : t < 0 ? '\u2022 ' : '('.concat(t, ') ');
                    })(e);
                return [''.concat(r).concat(n), t[0]];
            }, i.X),
            [n, a] = r.useState(!1),
            s = r.useRef(0),
            o = null == t ? void 0 : t.messages[s.current % t.messages.length];
        return (
            r.useEffect(() => {
                if (null == t) {
                    (s.current = 0), a(!1);
                    return;
                }
                if (document.hasFocus() && t.onlyWhenBlurred) {
                    _(t.id), a(!1);
                    return;
                }
                let e = setInterval(() => {
                    if (s.current >= t.count) {
                        _(t.id), a(!1);
                        return;
                    }
                    a((e) => !e || ((s.current += 1), !1));
                }, t.interval);
                return () => clearInterval(e);
            }, [t]),
            n ? o : e
        );
    })();
    r.useEffect(() => {
        let n = t === o.base;
        if (!e || !n) document.title = t;
    }, [e, t]);
}
