e.d(t, {
    tS: function () {
        return s;
    },
    x3: function () {
        return d;
    }
}), e(47120);
var r = e(735250), i = e(470079), u = e(442837), o = e(846519), E = e(481060), l = e(607070), a = e(706454), c = e(506071), T = e(561308), _ = e(377329);
function s(n, t) {
    let [e, r] = i.useState(Date.now()), E = (0, c.n)(), a = (0, u.e7)([l.Z], () => l.Z.useReducedMotion), _ = i.useMemo(() => {
            let {hours: t} = (0, T.JY)(n, e);
            return t > 0 ? 300000 : 1000;
        }, [
            n,
            e
        ]);
    return i.useEffect(() => {
        let n = new o.Xp();
        return n.start(_, () => {
            r(Date.now());
        }), (!E || a && !t) && n.stop(), () => n.stop();
    }, [
        _,
        E,
        a,
        t
    ]), e;
}
let d = n => {
    let {
            entry: t,
            inline: e = !1,
            textColor: u,
            hovered: o = !1
        } = n, l = s(t, o), a = i.useMemo(() => (0, T.T_)(t, l), [
            t,
            l
        ]);
    return (0, r.jsx)(E.Text, {
        className: e ? _.inlineTimestamp : void 0,
        variant: 'text-xs/normal',
        tabularNumbers: !0,
        color: u,
        children: a
    });
};
t.ZP = n => {
    let {
            entry: t,
            textColor: e,
            hovered: i = !1
        } = n, o = (0, T.kr)(t), l = (0, u.e7)([a.default], () => a.default.locale);
    return o ? (0, r.jsx)(d, {
        entry: t,
        textColor: e,
        hovered: i
    }) : (0, r.jsx)(E.Text, {
        variant: 'text-xs/normal',
        color: e,
        lineClamp: 1,
        children: (0, T.GL)(t, l)
    });
};
