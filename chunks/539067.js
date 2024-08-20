n.d(t, {
    y: function () {
        return l;
    }
}),
    n(47120);
var r = n(470079),
    E = n(442837),
    i = n(19780),
    s = n(615830),
    u = n(630759),
    a = n(760373);
function l(e) {
    let { userId: t } = e,
        n = (0, E.e7)([i.Z], () => i.Z.getSecureFramesRosterMapEntry(t)),
        l = (0, E.e7)([s.Z], () => s.Z.getPersistentCodesEnabled()),
        [o, c] = r.useState(!0),
        [_, d] = r.useState(!1),
        [f, S] = r.useState(!1),
        I = r.useCallback(async (e, t) => {
            c(!0);
            try {
                let n = a.GB,
                    r = await (0, u.uX)(n),
                    E = await (0, u.J6)(e, t, n);
                d(r), S(E);
            } catch (e) {
                d(!1), S(!1);
            } finally {
                c(!1);
            }
        }, []);
    return (
        r.useEffect(() => {
            l && null != n ? I(t, n) : (d(!1), S(!1), c(!1));
        }, [l, n, I, t]),
        {
            loading: o,
            isCurrentUserKeyPersistent: _,
            isOtherUserKeyPersistent: f
        }
    );
}
