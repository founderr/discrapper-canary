var r = n(735250),
    i = n(470079),
    a = n(392711),
    s = n.n(a),
    o = n(792986),
    l = n(442837),
    u = n(481060),
    c = n(317381),
    d = n(966302),
    _ = n(474873),
    E = n(292959),
    f = n(944486),
    h = n(246946),
    p = n(340895),
    I = n(557177),
    m = n(918559),
    T = n(871465);
let S = {
        transform: 'scale(0.7)',
        opacity: 0
    },
    g = {
        transform: 'scale(1)',
        opacity: 1
    };
t.Z = i.memo(function () {
    let e = (0, l.Wu)([p.Z, f.Z, c.ZP], () =>
            p.Z.getIncomingCalls().filter((e) => {
                let { channel: t } = e,
                    n = c.ZP.getConnectedActivityChannelId() === t.id && f.Z.getVoiceChannelId() !== t.id && c.ZP.getActivityPanelMode() === m.Ez.PANEL;
                return f.Z.getChannelId() !== t.id || n;
            })
        ),
        t = (0, l.e7)([p.Z], () => p.Z.hasIncomingCalls()),
        n = (0, l.e7)([E.Z], () => E.Z.isSoundDisabled('call_ringing')),
        a = (0, l.e7)([h.Z], () => h.Z.disableSounds),
        A = (0, l.e7)([_.Z], () => _.Z.getSoundpack()),
        N = i.useRef(!1),
        R = (0, o.Z)(() => (A === T.YC.CLASSIC ? (0, I.tu)(500 !== s().random(1, 1000) ? 'call_ringing' : s().sample(['call_ringing_beat', 'call_ringing_snow_halation']), 'call_ringing') : (0, I.uk)('call_ringing', A)), [A]);
    return (
        i.useEffect(
            () => () => {
                R.stop();
            },
            [R]
        ),
        i.useEffect(() => {
            if (a || n) {
                N.current && (R.stop(), (N.current = !1));
                return;
            }
            t && !N.current ? (R.loop(), (N.current = !0)) : !t && N.current && (R.stop(), (N.current = !1));
        }, [n, a, t, R]),
        (0, u.useTransition)(e, {
            keys: (e) => {
                var t;
                return null === (t = e.channel) || void 0 === t ? void 0 : t.id;
            },
            enter: {
                from: S,
                to: g
            },
            leave: S,
            config: {
                mass: 1,
                tension: 500,
                friction: 18,
                clamp: !0
            }
        })((e, t) =>
            (0, r.jsx)(d.Z, {
                ...t,
                animatedStyle: e
            })
        )
    );
});
