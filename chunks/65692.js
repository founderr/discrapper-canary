n.d(t, {
    q: function () {
        return _;
    }
}),
    n(47120),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817);
var r = n(470079),
    E = n(250683),
    i = n(512722),
    s = n.n(i),
    u = n(442837),
    a = n(253135),
    l = n(314897),
    o = n(19780),
    c = n(760373);
function _(e) {
    let { userId: t } = e,
        n = (0, u.e7)([l.default], () => l.default.getId());
    s()(n !== t, '[useSecureFramesPairwiseFingerprint] Should not pass current user id.');
    let [i, _] = r.useState(null),
        [d, f] = r.useState(!1),
        S = (0, u.e7)([o.Z], () => o.Z.getSecureFramesRosterMapEntry(t)),
        I = (0, u.e7)([o.Z], () => o.Z.getSecureFramesRosterMapEntry(n)),
        R = r.useCallback(async (e, t, n, r) => {
            f(!0);
            let i = await (0, a.Il)(c.Xj, new Uint8Array(t), e, new Uint8Array(r), n);
            _(E.fromByteArray(i)), f(!1);
        }, []);
    return (
        r.useEffect(() => {
            null != S && null != I && R(n, I, t, S);
        }, [n, I, R, t, S]),
        r.useMemo(
            () => ({
                fingerprint: i,
                userKey: S,
                loading: d
            }),
            [i, d, S]
        )
    );
}
