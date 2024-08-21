n.d(t, {
    y: function () {
        return a;
    }
}),
    n(47120);
var r = n(470079),
    l = n(442837),
    i = n(19780),
    u = n(615830),
    s = n(630759),
    o = n(760373);
function a(e) {
    let { userId: t } = e,
        n = (0, l.e7)([i.Z], () => i.Z.getSecureFramesRosterMapEntry(t)),
        a = (0, l.e7)([u.Z], () => u.Z.getPersistentCodesEnabled()),
        [c, d] = r.useState(!0),
        [E, f] = r.useState(!1),
        [_, S] = r.useState(!1),
        I = r.useCallback(async (e, t) => {
            d(!0);
            try {
                let n = o.GB,
                    r = await (0, s.uX)(n),
                    l = await (0, s.J6)(e, t, n);
                f(r), S(l);
            } catch (e) {
                f(!1), S(!1);
            } finally {
                d(!1);
            }
        }, []);
    return (
        r.useEffect(() => {
            a && null != n ? I(t, n) : (f(!1), S(!1), d(!1));
        }, [a, n, I, t]),
        {
            loading: c,
            isCurrentUserKeyPersistent: E,
            isOtherUserKeyPersistent: _
        }
    );
}
