n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(192379),
    l = n(442837),
    r = n(570140),
    s = n(911969),
    a = n(110924),
    o = n(213459),
    c = n(404295),
    u = n(812206),
    d = n(835473),
    h = n(621853),
    m = n(484459),
    p = n(973616),
    f = n(594174),
    g = n(981631);
function C(e) {
    var t, n;
    let { channel: C } = e,
        x = (0, c.bG)('useAppDMChatInputData'),
        v = i.useMemo(() => {
            if (!0 !== C.isDM()) return null;
            let e = f.default.getUser(C.getRecipientId());
            return void 0 === e || !0 !== e.bot ? null : e;
        }, [C]),
        _ = (0, l.e7)([h.Z], () => {
            var e;
            return h.Z.isFetchingProfile(null !== (e = null == v ? void 0 : v.id) && void 0 !== e ? e : g.lds);
        }),
        I = (0, a.Z)(_),
        E = (0, l.e7)([u.Z], () => u.Z.getAppIdForBotUserId(null == v ? void 0 : v.id)),
        b = (0, l.e7)([h.Z], () => {
            var e;
            return null !== v ? (null === (e = h.Z.getUserProfile(null == v ? void 0 : v.id)) || void 0 === e ? void 0 : e.application) : void 0;
        }),
        S = null != E ? E : null == b ? void 0 : b.id;
    i.useEffect(() => {
        if (null == S && x) {
            var e;
            (0, m.Z)(null !== (e = null == v ? void 0 : v.id) && void 0 !== e ? e : g.lds);
        }
    }, [v, S, x]),
        i.useEffect(() => {
            (null == v ? void 0 : v.id) != null &&
                r.Z.dispatch({
                    type: 'APP_DM_OPEN',
                    botUserId: v.id
                });
        }, [null == v ? void 0 : v.id]);
    let Z = (0, o.v1)(
            C,
            {
                commandTypes: [s.yU.PRIMARY_ENTRY_POINT, s.yU.CHAT, s.yU.MESSAGE, s.yU.USER]
            },
            {
                applicationId: S,
                allowFetch: x && (null == v ? void 0 : v.id) != null,
                allowApplicationState: !0
            }
        ),
        T = Z.commands.filter((e) => e.type === s.yU.PRIMARY_ENTRY_POINT && e.applicationId === S)[0],
        N = Z.commands.filter((e) => '0' !== e.id && !e.id.startsWith('-')),
        j = Z.loading,
        A =
            null ===
                (t = Z.descriptors.find((e) => {
                    var t;
                    return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === S;
                })) || void 0 === t
                ? void 0
                : t.application,
        y = i.useMemo(() => (null != A ? p.Z.createFromServer(A) : void 0), [A]),
        P = (0, d.q)(null == y && x ? S : void 0),
        M = null !== (n = null != y ? y : P) && void 0 !== n ? n : void 0,
        R = null == M || (j && 0 === N.length);
    return {
        application: M,
        isInitialLoading: R,
        primaryEntryPointCommand: T,
        isProfileFetching: _,
        wasProfileFetching: I,
        applicationId: S,
        channelId: C.id,
        commands: N
    };
}
