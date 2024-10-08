n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(470079),
    s = n(442837),
    a = n(570140),
    l = n(911969),
    r = n(110924),
    o = n(499254),
    c = n(213459),
    u = n(404295),
    d = n(812206),
    h = n(835473),
    p = n(621853),
    m = n(484459),
    _ = n(973616),
    f = n(594174),
    E = n(981631);
function g(e) {
    var t, n;
    let { channel: g } = e,
        C = (0, u.bG)('useAppDMChatInputData'),
        I = i.useMemo(() => {
            if (!0 !== g.isDM()) return null;
            let e = f.default.getUser(g.getRecipientId());
            return void 0 === e || !0 !== e.bot ? null : e;
        }, [g]),
        T = (0, s.e7)([p.Z], () => {
            var e;
            return p.Z.isFetchingProfile(null !== (e = null == I ? void 0 : I.id) && void 0 !== e ? e : E.lds);
        }),
        x = (0, r.Z)(T),
        v = (0, s.e7)([d.Z], () => d.Z.getAppIdForBotUserId(null == I ? void 0 : I.id)),
        S = (0, s.e7)([p.Z], () => {
            var e;
            return null !== I ? (null === (e = p.Z.getUserProfile(null == I ? void 0 : I.id)) || void 0 === e ? void 0 : e.application) : void 0;
        }),
        N = null != v ? v : null == S ? void 0 : S.id;
    i.useEffect(() => {
        if (null == N && C) {
            var e;
            (0, m.Z)(null !== (e = null == I ? void 0 : I.id) && void 0 !== e ? e : E.lds);
        }
    }, [I, N, C]),
        i.useEffect(() => {
            (null == I ? void 0 : I.id) != null &&
                a.Z.dispatch({
                    type: 'APP_DM_OPEN',
                    botUserId: I.id
                });
        }, [null == I ? void 0 : I.id]);
    let A = (0, c.v1)(
            g,
            {
                commandTypes: [l.yU.PRIMARY_ENTRY_POINT, l.yU.CHAT, l.yU.MESSAGE, l.yU.USER]
            },
            {
                applicationId: N,
                allowFetch: C,
                allowApplicationState: !0
            }
        ),
        Z = (0, s.e7)([c.ZP], () => {
            var e, t;
            return null !== (t = null === (e = c.ZP.getApplicationState(N)) || void 0 === e ? void 0 : e.fetchState.fetching) && void 0 !== t && t;
        }),
        M = (0, r.Z)(Z),
        b = A.commands.filter((e) => e.type === l.yU.PRIMARY_ENTRY_POINT && e.applicationId === N)[0],
        R = A.commands,
        L = A.loading,
        j =
            null ===
                (t = A.descriptors.find((e) => {
                    var t;
                    return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === N;
                })) || void 0 === t
                ? void 0
                : t.application,
        P = i.useMemo(() => (null != j ? _.Z.createFromServer(j) : void 0), [j]),
        O = (0, h.q)(null == P && C ? N : void 0),
        y = null !== (n = null != P ? P : O) && void 0 !== n ? n : void 0,
        D = null == y || (L && 0 === R.length);
    return (
        i.useEffect(() => {
            !T && x && null == N && (0, o.Tv)(g.id);
        }, [T, x, N, g.id]),
        i.useEffect(() => {
            !Z && M && 0 === R.length && (0, o.Tv)(g.id);
        }, [Z, M, R, g.id]),
        i.useEffect(
            () => () => {
                (0, o.Hm)(g.id);
            },
            [g.id]
        ),
        {
            application: y,
            isInitialLoading: D,
            primaryEntryPointCommand: b
        }
    );
}
