n.d(t, {
    Es: function () {
        return d;
    },
    Eu: function () {
        return m;
    },
    bt: function () {
        return h;
    }
}),
    n(47120),
    n(653041);
var i = n(192379),
    l = n(392711),
    r = n(442837),
    s = n(413523),
    a = n(314897),
    o = n(878884),
    c = n(19780),
    u = n(979651);
function d(e, t) {
    let n = (0, r.e7)([o.Z, c.Z], () => (e === c.Z.getChannelId() ? o.Z.getDesyncedVoiceStates() : null));
    return i.useMemo(
        () =>
            (function (e, t) {
                if (null == e || 0 === e.length) return t;
                let n = [],
                    i = new Set();
                for (let e of t) n.push(e), i.add(e.user.id);
                return (
                    e.forEach((e) => {
                        n.splice(
                            (0, l.sortedIndexBy)(n, e, (e) => {
                                let { comparator: t } = e;
                                return t;
                            }),
                            0,
                            e
                        );
                    }),
                    n
                );
            })(n, t),
        [n, t]
    );
}
function h(e, t) {
    var n;
    let a = ((n = e), (0, r.e7)([o.Z, c.Z], () => (n === c.Z.getChannelId() ? o.Z.getDesyncedParticipants() : null)));
    return i.useMemo(
        () =>
            (function (e, t) {
                if (null == e || 0 === e.length) return t;
                let n = [...t];
                return (
                    e.forEach((e) => {
                        n.splice(
                            (0, l.sortedIndexBy)(n, e, (e) => (0, s.Yr)(e)),
                            0,
                            e
                        );
                    }),
                    n
                );
            })(a, t),
        [a, t]
    );
}
function m(e, t) {
    let n = (0, r.e7)([a.default], () => a.default.getId() === t),
        l = (0, r.e7)([c.Z], () => c.Z.getChannelId()),
        s = i.useRef(null),
        [o, d] = i.useState(!1),
        [h, m] = i.useState(!1),
        p = (0, r.e7)([c.Z, u.Z], () => null != t && null != e && c.Z.getChannelId() === e && null != u.Z.isInChannel(e, t) && c.Z.isUserConnected(t)),
        f = (0, r.e7)([c.Z, u.Z], () => null != t && null != e && c.Z.getChannelId() === e && null != u.Z.isInChannel(e, t) && !c.Z.isUserConnected(t));
    return (
        i.useEffect(() => {
            p && m(!0);
        }, [p]),
        i.useEffect(() => {
            l !== e && m(!1);
        }, [e, l]),
        i.useEffect(
            () => (
                f && null == s.current
                    ? (s.current = setTimeout(() => {
                          (s.current = null), d(!0);
                      }, 250))
                    : (clearTimeout(s.current), (s.current = null), d(!1)),
                () => {
                    clearTimeout(s.current), (s.current = null);
                }
            ),
            [f]
        ),
        !n && h && o
    );
}
