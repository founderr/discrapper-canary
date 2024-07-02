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
var r = n(470079), o = n(392711), i = n(442837), l = n(413523), u = n(314897), a = n(878884), c = n(19780), s = n(979651), d = n(413402);
function E(e, t) {
    let n = (0, d.M)(), l = (0, i.e7)([a.Z], () => n ? a.Z.getDesyncedVoiceStates(e) : null);
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
    }(l, t), [
        l,
        t
    ]);
}
function f(e, t) {
    let n = function (e) {
        let t = (0, d.M)();
        return (0, i.e7)([a.Z], () => t ? a.Z.getDesyncedParticipants(e) : null);
    }(e);
    return r.useMemo(() => function (e, t) {
        if (!(0, d.i)() || null == e || 0 === e.length)
            return t;
        let n = [...t];
        return e.forEach(e => {
            n.splice((0, o.sortedIndexBy)(n, e, e => (0, l.Yr)(e)), 0, e);
        }), n;
    }(n, t), [
        n,
        t
    ]);
}
function _(e, t) {
    let n = (0, d.M)(), o = (0, i.e7)([a.Z], () => n ? a.Z.getDesyncedUserIds(e) : null);
    return r.useMemo(() => {
        let e = new Set();
        return t.forEach(t => e.add(t)), null == o || o.forEach(t => e.add(t)), e;
    }, [
        o,
        t
    ]);
}
function I(e, t) {
    let n = (0, d.M)(), [o, l] = r.useState(!1), a = (0, i.e7)([u.default], () => u.default.getId() === t), E = (0, i.e7)([
            c.Z,
            s.Z
        ], () => null != t && null != e && c.Z.getChannelId() === e && null != s.Z.isInChannel(e, t) && c.Z.isUserConnected(t)), f = (0, i.e7)([
            c.Z,
            s.Z
        ], () => null != t && null != e && c.Z.getChannelId() === e && null != s.Z.isInChannel(e, t) && !c.Z.isUserConnected(t));
    return r.useEffect(() => {
        E && l(!0);
    }, [E]), n && !a && o && f;
}
