n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(192379),
    s = n(442837),
    a = n(570140),
    l = n(911969),
    r = n(110924),
    o = n(213459),
    c = n(404295),
    u = n(812206),
    d = n(835473),
    h = n(621853),
    p = n(484459),
    m = n(973616),
    _ = n(594174),
    f = n(981631);
function E(e) {
    var t, n;
    let { channel: E } = e,
        g = (0, c.bG)('useAppDMChatInputData'),
        C = i.useMemo(() => {
            if (!0 !== E.isDM()) return null;
            let e = _.default.getUser(E.getRecipientId());
            return void 0 === e || !0 !== e.bot ? null : e;
        }, [E]),
        I = (0, s.e7)([h.Z], () => {
            var e;
            return h.Z.isFetchingProfile(null !== (e = null == C ? void 0 : C.id) && void 0 !== e ? e : f.lds);
        }),
        T = (0, r.Z)(I),
        x = (0, s.e7)([u.Z], () => u.Z.getAppIdForBotUserId(null == C ? void 0 : C.id)),
        v = (0, s.e7)([h.Z], () => {
            var e;
            return null !== C ? (null === (e = h.Z.getUserProfile(null == C ? void 0 : C.id)) || void 0 === e ? void 0 : e.application) : void 0;
        }),
        S = null != x ? x : null == v ? void 0 : v.id;
    i.useEffect(() => {
        if (null == S && g) {
            var e;
            (0, p.Z)(null !== (e = null == C ? void 0 : C.id) && void 0 !== e ? e : f.lds);
        }
    }, [C, S, g]),
        i.useEffect(() => {
            (null == C ? void 0 : C.id) != null &&
                a.Z.dispatch({
                    type: 'APP_DM_OPEN',
                    botUserId: C.id
                });
        }, [null == C ? void 0 : C.id]);
    let N = (0, o.v1)(
            E,
            {
                commandTypes: [l.yU.PRIMARY_ENTRY_POINT, l.yU.CHAT, l.yU.MESSAGE, l.yU.USER]
            },
            {
                applicationId: S,
                allowFetch: g && (null == C ? void 0 : C.id) != null,
                allowApplicationState: !0
            }
        ),
        A = (0, s.e7)([o.ZP], () => {
            var e, t;
            return null !== (t = null === (e = o.ZP.getApplicationState(S)) || void 0 === e ? void 0 : e.fetchState.fetching) && void 0 !== t && t;
        }),
        Z = (0, r.Z)(A),
        M = N.commands.filter((e) => e.type === l.yU.PRIMARY_ENTRY_POINT && e.applicationId === S)[0],
        b = N.commands.filter((e) => '0' !== e.id && !e.id.startsWith('-')),
        R = N.loading,
        L =
            null ===
                (t = N.descriptors.find((e) => {
                    var t;
                    return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === S;
                })) || void 0 === t
                ? void 0
                : t.application,
        j = i.useMemo(() => (null != L ? m.Z.createFromServer(L) : void 0), [L]),
        P = (0, d.q)(null == j && g ? S : void 0),
        O = null !== (n = null != j ? j : P) && void 0 !== n ? n : void 0,
        y = null == O || (R && 0 === b.length);
    return {
        application: O,
        isInitialLoading: y,
        primaryEntryPointCommand: M,
        isProfileFetching: I,
        wasProfileFetching: T,
        applicationId: S,
        channelId: E.id,
        isFetchingApplicationIndex: A,
        wasFetchingApplicationIndex: Z,
        commands: b
    };
}
