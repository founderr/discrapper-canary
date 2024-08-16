n.d(t, {
    y: function () {
        return l;
    }
}),
    n(47120);
var r = n(470079),
    i = n(442837),
    a = n(19780),
    o = n(615830),
    s = n(630759),
    u = n(760373);
function l(e) {
    let { userId: t } = e,
        n = (0, i.e7)([a.Z], () => a.Z.getSecureFramesRosterMapEntry(t)),
        l = (0, i.e7)([o.Z], () => o.Z.getPersistentCodesEnabled()),
        [c, E] = r.useState(!0),
        [d, f] = r.useState(!1),
        [_, h] = r.useState(!1),
        y = r.useCallback(async (e, t) => {
            E(!0);
            try {
                let n = u.GB,
                    r = await (0, s.uX)(n),
                    i = await (0, s.J6)(e, t, n);
                f(r), h(i);
            } catch (e) {
                f(!1), h(!1);
            } finally {
                E(!1);
            }
        }, []);
    return (
        r.useEffect(() => {
            l && null != n ? y(t, n) : (f(!1), h(!1), E(!1));
        }, [l, n, y, t]),
        {
            loading: c,
            isCurrentUserPersistent: d,
            isOtherUserPersistent: _,
            isPersistentCode: d && _
        }
    );
}
