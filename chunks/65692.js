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
    s = n(250683),
    E = n(512722),
    i = n.n(E),
    a = n(442837),
    o = n(253135),
    u = n(314897),
    l = n(19780),
    c = n(760373);
function _(e) {
    let { userId: t } = e,
        n = (0, a.e7)([u.default], () => u.default.getId());
    i()(n !== t, '[useSecureFramesPairwiseFingerprint] Should not pass current user id.');
    let [E, _] = r.useState(null),
        [d, f] = r.useState(!1),
        S = (0, a.e7)([l.Z], () => l.Z.getSecureFramesRosterMapEntry(t)),
        I = (0, a.e7)([l.Z], () => l.Z.getSecureFramesRosterMapEntry(n)),
        R = r.useCallback(async (e, t, n, r) => {
            f(!0);
            let E = await (0, o.Il)(c.Xj, new Uint8Array(t), e, new Uint8Array(r), n);
            _(s.fromByteArray(E)), f(!1);
        }, []);
    return (
        r.useEffect(() => {
            null != S && null != I && R(n, I, t, S);
        }, [n, I, R, t, S]),
        r.useMemo(
            () => ({
                fingerprint: E,
                userKey: S,
                loading: d
            }),
            [E, d, S]
        )
    );
}
