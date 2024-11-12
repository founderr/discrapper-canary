n.d(t, {
    Fe: function () {
        return b;
    },
    Ih: function () {
        return I;
    },
    Lz: function () {
        return S;
    }
}),
    n(47120);
var r = n(192379),
    i = n(442837),
    a = n(846519),
    s = n(110924),
    o = n(314897),
    l = n(70956),
    u = n(51144),
    c = n(768419),
    d = n(300020),
    f = n(456190),
    _ = n(239470),
    p = n(894344),
    h = n(203777),
    m = n(616922);
let g = 30 * l.Z.Millis.SECOND;
function E(e) {
    let { currentUserTrackId: t, syncingWithUser: n, syncingWithParty: i } = e,
        [o, l] = r.useState(!1),
        [u] = r.useState(() => new a.V7()),
        c = (0, s.Z)(t);
    r.useEffect(() => {
        o && (t !== c || n || i) && (l(!1), u.stop());
    }, [t, c, n, i, o, u]);
    let d = r.useCallback(() => {
            l(!0), u.start(g, () => l(!1));
        }, [u]),
        f = r.useCallback(() => {
            l(!1), u.stop();
        }, [u]);
    return (
        r.useEffect(() => () => u.stop(), [u]),
        {
            loading: o,
            startLoading: d,
            clearLoading: f
        }
    );
}
function v(e, t) {
    return (0, i.cj)([c.Z, o.default], () => (0, _.Z)(c.Z, o.default, t, e), [e, t]);
}
function I(e, t, n) {
    let i = v(e, t),
        { notPlayable: a, isCurrentUser: s, playingSameTrack: o } = i,
        { loading: l, startLoading: u, clearLoading: c } = E(i),
        _ = r.useCallback(() => {
            u(), (0, h.Z)(i, m.kG.USER_ACTIVITY_PLAY, n).catch(c);
        }, [i, n, u, c]);
    return {
        label: (0, d.Z)(i, m.kG.USER_ACTIVITY_PLAY),
        tooltip: (0, f.Z)(i, m.kG.USER_ACTIVITY_PLAY),
        disabled: !l && (s || a || o),
        loading: l,
        onClick: _,
        spotifyData: i
    };
}
function b(e, t, n, i) {
    let a = null != i ? i : u.ZP.getName(t),
        s = v(e, t),
        { notPlayable: o, syncingWithUser: l, syncingWithParty: c, isCurrentUser: _ } = s,
        { loading: h, startLoading: g, clearLoading: I } = E(s),
        b = r.useCallback(() => {
            g(), (0, p.Z)(s, m.kG.USER_ACTIVITY_SYNC, n).catch(I);
        }, [s, n, g, I]);
    return {
        label: (0, d.Z)(s, m.kG.USER_ACTIVITY_SYNC),
        tooltip: (0, f.Z)(s, m.kG.USER_ACTIVITY_SYNC, a),
        disabled: !h && (o || _ || l || c),
        loading: h,
        onClick: b,
        spotifyData: s
    };
}
function S(e, t, n) {
    let i = v(e, t),
        { notPlayable: a, syncingWithUser: s, syncingWithParty: o, isCurrentUser: l } = i,
        { loading: u, startLoading: c, clearLoading: _ } = E(i),
        h = r.useCallback(() => {
            c(), (0, p.Z)(i, m.kG.EMBED_SYNC, n).catch(_);
        }, [i, n, c, _]);
    return {
        label: (0, d.Z)(i, m.kG.EMBED_SYNC),
        tooltip: (0, f.Z)(i, m.kG.EMBED_SYNC),
        disabled: !u && (l || s || o || a),
        loading: u,
        onClick: h,
        spotifyData: i
    };
}
