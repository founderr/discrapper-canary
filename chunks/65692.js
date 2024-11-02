n.d(t, {
    q: function () {
        return S;
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
var r = n(192379),
    l = n(250683),
    i = n(512722),
    u = n.n(i),
    s = n(442837),
    o = n(253135),
    a = n(314897),
    c = n(131951),
    d = n(19780),
    f = n(760373),
    E = n(65154);
function S(e) {
    let { userId: t } = e,
        n = (0, s.e7)([a.default], () => a.default.getId());
    u()(n !== t, '[useSecureFramesPairwiseFingerprint] Should not pass current user id.');
    let [i, S] = r.useState(null),
        [_, g] = r.useState(!1),
        m = (0, s.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(t)),
        h = (0, s.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(n)),
        R = r.useCallback((e) => {
            S(l.fromByteArray(e)), g(!1);
        }, []),
        I = r.useCallback(
            async (e, t, n, r) => {
                if (c.Z.supports(E.AN.MLS_PAIRWISE_FINGERPRINTS)) {
                    var l;
                    null === (l = d.Z.getRTCConnection()) ||
                        void 0 === l ||
                        l.getMLSPairwiseFingerprint(f.Xj, n, (e) => {
                            R(new Uint8Array(e));
                        });
                } else R(await (0, o.Il)(f.Xj, new Uint8Array(t), e, new Uint8Array(r), n));
            },
            [R]
        ),
        C = r.useRef(null);
    return (
        r.useEffect(() => {
            null != m && null != h && null == C.current && (g(!0), (C.current = setTimeout(() => I(n, h, t, m), 0)));
            let e = C.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, [n, h, I, t, m]),
        r.useMemo(
            () => ({
                fingerprint: i,
                userKey: m,
                loading: _
            }),
            [i, _, m]
        )
    );
}
