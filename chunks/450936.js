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
        S = (0, s.e7)([h.Z], () => {
            var e;
            return null !== C ? (null === (e = h.Z.getUserProfile(null == C ? void 0 : C.id)) || void 0 === e ? void 0 : e.application) : void 0;
        }),
        v = null != x ? x : null == S ? void 0 : S.id;
    i.useEffect(() => {
        if (null == v && g) {
            var e;
            (0, p.Z)(null !== (e = null == C ? void 0 : C.id) && void 0 !== e ? e : f.lds);
        }
    }, [C, v, g]),
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
                applicationId: v,
                allowFetch: g && (null == C ? void 0 : C.id) != null,
                allowApplicationState: !0
            }
        ),
        A = N.commands.filter((e) => e.type === l.yU.PRIMARY_ENTRY_POINT && e.applicationId === v)[0],
        Z = N.commands.filter((e) => '0' !== e.id && !e.id.startsWith('-')),
        M = N.loading,
        b =
            null ===
                (t = N.descriptors.find((e) => {
                    var t;
                    return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === v;
                })) || void 0 === t
                ? void 0
                : t.application,
        R = i.useMemo(() => (null != b ? m.Z.createFromServer(b) : void 0), [b]),
        L = (0, d.q)(null == R && g ? v : void 0),
        P = null !== (n = null != R ? R : L) && void 0 !== n ? n : void 0,
        j = null == P || (M && 0 === Z.length);
    return {
        application: P,
        isInitialLoading: j,
        primaryEntryPointCommand: A,
        isProfileFetching: I,
        wasProfileFetching: T,
        applicationId: v,
        channelId: E.id,
        commands: Z
    };
}
