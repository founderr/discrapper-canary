n.d(t, {
    Fe: function () {
        return A;
    },
    Ih: function () {
        return S;
    },
    Lz: function () {
        return v;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(442837),
    o = n(846519),
    s = n(110924),
    l = n(314897),
    u = n(70956),
    c = n(51144),
    d = n(768419),
    _ = n(300020),
    E = n(456190),
    f = n(239470),
    h = n(894344),
    p = n(203777),
    m = n(616922);
let I = 30 * u.Z.Millis.SECOND;
function T(e) {
    let { currentUserTrackId: t, syncingWithUser: n, syncingWithParty: r } = e,
        [a, l] = i.useState(!1),
        [u] = i.useState(() => new o.V7()),
        c = (0, s.Z)(t);
    i.useEffect(() => {
        a && (t !== c || n || r) && (l(!1), u.stop());
    }, [t, c, n, r, a, u]);
    let d = i.useCallback(() => {
            l(!0), u.start(I, () => l(!1));
        }, [u]),
        _ = i.useCallback(() => {
            l(!1), u.stop();
        }, [u]);
    return (
        i.useEffect(() => () => u.stop(), [u]),
        {
            loading: a,
            startLoading: d,
            clearLoading: _
        }
    );
}
function g(e, t) {
    return (0, a.cj)([d.Z, l.default], () => (0, f.Z)(d.Z, l.default, t, e), [e, t]);
}
function S(e, t, n) {
    let r = g(e, t),
        { notPlayable: a, isCurrentUser: o, playingSameTrack: s } = r,
        { loading: l, startLoading: u, clearLoading: c } = T(r),
        d = i.useCallback(() => {
            u(), (0, p.Z)(r, m.kG.USER_ACTIVITY_PLAY, n).catch(c);
        }, [r, n, u, c]);
    return {
        label: (0, _.Z)(r, m.kG.USER_ACTIVITY_PLAY),
        tooltip: (0, E.Z)(r, m.kG.USER_ACTIVITY_PLAY),
        disabled: !l && (o || a || s),
        loading: l,
        onClick: d,
        spotifyData: r
    };
}
function A(e, t, n, r) {
    let a = null != r ? r : c.ZP.getName(t),
        o = g(e, t),
        { syncingWithUser: s, syncingWithParty: l, isCurrentUser: u } = o,
        { loading: d, startLoading: f, clearLoading: p } = T(o),
        I = i.useCallback(() => {
            f(), (0, h.Z)(o, m.kG.USER_ACTIVITY_SYNC, n).catch(p);
        }, [o, n, f, p]);
    return {
        label: (0, _.Z)(o, m.kG.USER_ACTIVITY_SYNC),
        tooltip: (0, E.Z)(o, m.kG.USER_ACTIVITY_SYNC, a),
        disabled: !d && (u || s || l),
        loading: d,
        onClick: I,
        spotifyData: o
    };
}
function v(e, t, n) {
    let r = g(e, t),
        { notPlayable: a, syncingWithUser: o, syncingWithParty: s, isCurrentUser: l } = r,
        { loading: u, startLoading: c, clearLoading: d } = T(r),
        f = i.useCallback(() => {
            c(), (0, h.Z)(r, m.kG.EMBED_SYNC, n).catch(d);
        }, [r, n, c, d]);
    return {
        label: (0, _.Z)(r, m.kG.EMBED_SYNC),
        tooltip: (0, E.Z)(r, m.kG.EMBED_SYNC),
        disabled: !u && (l || o || s || a),
        loading: u,
        onClick: f,
        spotifyData: r
    };
}
