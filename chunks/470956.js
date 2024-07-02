n.d(t, {
    Es: function () {
        return E;
    },
    Eu: function () {
        return I;
    },
    Yp: function () {
        return _;
    },
    bt: function () {
        return f;
    }
}), n(47120);
var r = n(470079), o = n(392711), l = n(442837), u = n(413523), i = n(314897), a = n(878884), c = n(19780), s = n(979651), d = n(413402);
function E(e, t) {
    let n = (0, d.M)(), u = (0, l.e7)([a.Z], () => n ? a.Z.getDesyncedVoiceStates(e) : null);
    return r.useMemo(() => function (e, t) {
        if (!(0, d.i)() || null == e || 0 === e.length)
            return t;
        let n = null != t ? [...t] : [];
        return e.forEach(e => {
            n.splice((0, o.sortedIndexBy)(n, e, e => {
                let {comparator: t} = e;
                return t;
            }), 0, e);
        }), n;
    }(u, t), [
        u,
        t
    ]);
}
function f(e, t) {
    let n = function (e) {
        let t = (0, d.M)();
        return (0, l.e7)([a.Z], () => t ? a.Z.getDesyncedParticipants(e) : null);
    }(e);
    return r.useMemo(() => function (e, t) {
        if (!(0, d.i)() || null == e || 0 === e.length)
            return t;
        let n = [...t];
        return e.forEach(e => {
            n.splice((0, o.sortedIndexBy)(n, e, e => (0, u.Yr)(e)), 0, e);
        }), n;
    }(n, t), [
        n,
        t
    ]);
}
function _(e, t) {
    let n = (0, d.M)(), o = (0, l.e7)([a.Z], () => n ? a.Z.getDesyncedUserIds(e) : null);
    return r.useMemo(() => {
        let e = new Set();
        return t.forEach(t => e.add(t)), null == o || o.forEach(t => e.add(t)), e;
    }, [
        o,
        t
    ]);
}
function I(e, t) {
    let n = (0, d.M)(), o = (0, l.e7)([i.default], () => i.default.getId() === t), u = (0, l.e7)([c.Z], () => c.Z.getChannelId()), a = r.useRef(null), [E, f] = r.useState(!1), [_, I] = r.useState(!1), C = (0, l.e7)([
            c.Z,
            s.Z
        ], () => null != t && null != e && c.Z.getChannelId() === e && null != s.Z.isInChannel(e, t) && c.Z.isUserConnected(t)), h = (0, l.e7)([
            c.Z,
            s.Z
        ], () => null != t && null != e && c.Z.getChannelId() === e && null != s.Z.isInChannel(e, t) && !c.Z.isUserConnected(t));
    return r.useEffect(() => {
        C && I(!0);
    }, [C]), r.useEffect(() => {
        u !== e && I(!1);
    }, [
        e,
        u
    ]), r.useEffect(() => (h && null == a.current ? a.current = setTimeout(() => {
        a.current = null, f(!0);
    }, 250) : (clearTimeout(a.current), a.current = null, f(!1)), () => {
        clearTimeout(a.current), a.current = null;
    }), [h]), n && !o && _ && E;
}
