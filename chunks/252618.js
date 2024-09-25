n.d(t, {
    EM: function () {
        return h;
    },
    PR: function () {
        return E;
    },
    Tt: function () {
        return I;
    },
    ZD: function () {
        return A;
    },
    yY: function () {
        return T;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(652874),
    o = n(731965);
let s = { base: n(358085).isPlatformEmbedded ? void 0 : 'Discord' },
    l = 0,
    u = {
        count: 3,
        onlyWhenBlurred: !1,
        interval: 1000
    },
    c = (0, a.Z)(() => ({
        titles: [s],
        notificationCount: void 0,
        flashQueue: []
    }));
function d(e) {
    let t, n, r;
    for (let i of e.titles) {
        if (null != t && null != n) break;
        (t = null != t ? t : i.base), (n = null != n ? n : i.location), (r = null != r ? r : i.subsection);
    }
    return [t, r, n];
}
function _(e) {
    let { notificationCount: t } = e;
    return null == t || 0 === t ? '' : t < 0 ? '\u2022 ' : '('.concat(t, ') ');
}
function E(e) {
    (0, o.j)(() => c.setState({ notificationCount: e }));
}
function f(e) {
    return (
        (0, o.j)(() =>
            c.setState((t) => ({
                titles: [e, ...t.titles]
            }))
        ),
        () => {
            (0, o.j)(() => c.setState((t) => ({ titles: t.titles.filter((t) => t !== e) })));
        }
    );
}
function h(e) {
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
        () => p(t.id)
    );
}
function p(e) {
    c.setState((t) => ({ flashQueue: t.flashQueue.filter((t) => t.id !== e) }));
}
function m() {
    c.setState({ flashQueue: [] });
}
function I(e) {
    i.useEffect(() => f(e), [...Object.values(e)]);
}
function T(e) {
    return I(e), null;
}
function g() {
    let [e, t] = c((e) => {
            let { flashQueue: t } = e,
                n = d(e)
                    .filter((e) => null != e)
                    .join(' | '),
                r = _(e);
            return [''.concat(r).concat(n), t[0]];
        }),
        [n, r] = i.useState(!1),
        a = i.useRef(0),
        o = null == t ? void 0 : t.messages[a.current % t.messages.length];
    return (
        i.useEffect(() => {
            if (null == t) {
                (a.current = 0), r(!1);
                return;
            }
            if (document.hasFocus() && t.onlyWhenBlurred) {
                p(t.id), r(!1);
                return;
            }
            let e = setInterval(() => {
                if (a.current >= t.count) {
                    p(t.id), r(!1);
                    return;
                }
                r((e) => !e || ((a.current += 1), !1));
            }, t.interval);
            return () => clearInterval(e);
        }, [t]),
        n ? o : e
    );
}
function S() {
    i.useEffect(() => {
        function e() {
            m();
        }
        return document.addEventListener('focusin', e, { capture: !0 }), () => document.removeEventListener('focusin', e, { capture: !0 });
    }, []);
}
function A() {
    let { skipsSettingDefaultPageTitle: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    S();
    let t = g();
    i.useEffect(() => {
        let n = t === s.base;
        if (!e || !n) document.title = t;
    }, [e, t]);
}
