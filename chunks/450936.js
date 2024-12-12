n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(192379),
    l = n(442837),
    r = n(570140),
    a = n(911969),
    s = n(110924),
    o = n(213459),
    c = n(404295),
    d = n(812206),
    u = n(835473),
    h = n(621853),
    p = n(484459),
    m = n(973616),
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
        I = (0, s.Z)(_),
        E = (0, l.e7)([d.Z], () => d.Z.getAppIdForBotUserId(null == v ? void 0 : v.id)),
        b = (0, l.e7)([h.Z], () => {
            var e;
            return null !== v ? (null === (e = h.Z.getUserProfile(null == v ? void 0 : v.id)) || void 0 === e ? void 0 : e.application) : void 0;
        }),
        Z = null != E ? E : null == b ? void 0 : b.id;
    i.useEffect(() => {
        if (null == Z && x) {
            var e;
            (0, p.Z)(null !== (e = null == v ? void 0 : v.id) && void 0 !== e ? e : g.lds);
        }
    }, [v, Z, x]),
        i.useEffect(() => {
            (null == v ? void 0 : v.id) != null &&
                r.Z.dispatch({
                    type: 'APP_DM_OPEN',
                    botUserId: v.id
                });
        }, [null == v ? void 0 : v.id]);
    let N = (0, o.v1)(
            C,
            {
                commandTypes: [a.yU.PRIMARY_ENTRY_POINT, a.yU.CHAT, a.yU.MESSAGE, a.yU.USER]
            },
            {
                applicationId: Z,
                allowFetch: x && (null == v ? void 0 : v.id) != null,
                allowApplicationState: !0
            }
        ),
        S = N.commands.filter((e) => e.type === a.yU.PRIMARY_ENTRY_POINT && e.applicationId === Z)[0],
        T = N.commands.filter((e) => '0' !== e.id && !e.id.startsWith('-')),
        j = N.loading,
        A =
            null ===
                (t = N.descriptors.find((e) => {
                    var t;
                    return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === Z;
                })) || void 0 === t
                ? void 0
                : t.application,
        y = i.useMemo(() => (null != A ? m.ZP.createFromServer(A) : void 0), [A]),
        P = (0, u.q)(null == y && x ? Z : void 0),
        M = null !== (n = null != y ? y : P) && void 0 !== n ? n : void 0,
        R = null == M || (j && 0 === T.length);
    return {
        application: M,
        isInitialLoading: R,
        primaryEntryPointCommand: S,
        isProfileFetching: _,
        wasProfileFetching: I,
        applicationId: Z,
        channelId: C.id,
        commands: T
    };
}
