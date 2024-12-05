n.d(t, {
    B: function () {
        return j;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    o = n(512722),
    r = n.n(o),
    s = n(442837),
    a = n(481060),
    u = n(872810),
    c = n(594190),
    d = n(74299),
    h = n(451467),
    f = n(537413),
    p = n(989941),
    m = n(567126),
    v = n(143135),
    g = n(751571),
    E = n(361291),
    C = n(592125),
    x = n(430824),
    Z = n(131951),
    _ = n(944486),
    S = n(594174),
    I = n(449224),
    N = n(358085),
    b = n(981631),
    O = n(37113),
    y = n(761274);
function j() {
    let e = (0, s.e7)([_.Z], () => _.Z.getVoiceChannelId()),
        t = (0, s.e7)([C.Z], () => C.Z.getChannel(e), [e]),
        o = (0, s.e7)([S.default], () => {
            let e = S.default.getCurrentUser();
            return r()(null != e, 'useGoLiveImmidateAction: user cannot be undefined'), e;
        }),
        j = null == t ? void 0 : t.getGuildId(),
        T = (0, s.e7)([Z.Z], () => (0, d.Z)(Z.Z));
    async function k() {
        var e;
        return null !== (e = (await (0, m._Q)()).sort((e, t) => (0, m.ov)(t) - (0, m.ov)(e))[0]) && void 0 !== e ? e : null;
    }
    let w = l.useCallback(async () => {
        var n, i;
        if (null == t || null == e) return !1;
        let l = await k(),
            r = (0, N.isWindows)() ? (0, p.Z)(c.ZP, I.Z) : null;
        if (null == r && null == l) return !1;
        let s = null != j ? (null === (n = x.Z.getGuild(j)) || void 0 === n ? void 0 : n.premiumTier) : null,
            { preset: a, resolution: d, fps: m, soundshareEnabled: C } = E.Z.getState(),
            [_, S] = null !== (i = (0, f.Z)(a, o, s)) && void 0 !== i ? i : [O.LY.RESOLUTION_720, O.ws.FPS_30],
            b = a,
            T = d,
            w = m;
        b !== O.tI.PRESET_CUSTOM && ((T = _), (w = S)),
            !(0, h.Z)(b, T, w, o, s) && ((T = _), (w = S)),
            !(0, h.Z)(b, T, w, o, s, t) && ((b = O.tI.PRESET_VIDEO), (T = O.LY.RESOLUTION_720), (w = O.ws.FPS_30)),
            (0, u.Rc)({
                preset: b,
                resolution: T,
                frameRate: w,
                soundshareEnabled: C
            });
        let L = (0, v.Z)(r, l, c.ZP.getRunningGames()),
            A = !(0, N.isWindows)() || null == L || (null == l ? void 0 : l.id.startsWith('camera:')) || null == L ? null : L.pid,
            R = null,
            M = null;
        return (
            null == A && null != l && ((R = l.id), (M = l.name)),
            !!(Z.Z.getUseSystemScreensharePicker() || (await g.Z.hasPermission(y.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) &&
                ((0, u.WH)(j, e, {
                    pid: A,
                    sourceId: R,
                    sourceName: M,
                    audioSourceId: null,
                    sound: C,
                    previewDisabled: !0
                }),
                !0)
        );
    }, [t, j, o, e]);
    return l.useCallback(async () => {
        if (!(!T || null == e || (await w())))
            (0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('79477'), n.e('81741')]).then(n.bind(n, 60594));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        selectSource: !1,
                        guildId: j,
                        analyticsLocation: b.Sbl.UNLOCKED_OVERLAY
                    });
            });
    }, [T, w, j, e]);
}
