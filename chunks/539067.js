n.d(t, {
    y: function () {
        return u;
    }
}),
    n(47120);
var r = n(470079),
    s = n(442837),
    E = n(19780),
    i = n(615830),
    a = n(630759),
    o = n(760373);
function u(e) {
    let { userId: t } = e,
        n = (0, s.e7)([E.Z], () => E.Z.getSecureFramesRosterMapEntry(t)),
        u = (0, s.e7)([i.Z], () => i.Z.getPersistentCodesEnabled()),
        [l, c] = r.useState(!0),
        [_, d] = r.useState(!1),
        [f, S] = r.useState(!1),
        I = r.useCallback(async (e, t) => {
            c(!0);
            try {
                let n = o.GB,
                    r = await (0, a.uX)(n),
                    s = await (0, a.J6)(e, t, n);
                d(r), S(s);
            } catch (e) {
                d(!1), S(!1);
            } finally {
                c(!1);
            }
        }, []);
    return (
        r.useEffect(() => {
            u && null != n ? I(t, n) : (d(!1), S(!1), c(!1));
        }, [u, n, I, t]),
        {
            loading: l,
            isCurrentUserPersistent: _,
            isOtherUserPersistent: f,
            isPersistentCode: _ && f
        }
    );
}
