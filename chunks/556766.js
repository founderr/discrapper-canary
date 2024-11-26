var r = n(200651),
    i = n(192379),
    a = n(392711),
    s = n.n(a),
    o = n(252759),
    l = n(442837),
    u = n(481060),
    c = n(317381),
    d = n(966302),
    f = n(474873),
    _ = n(292959),
    p = n(944486),
    h = n(246946),
    m = n(340895),
    g = n(557177),
    E = n(918559),
    v = n(871465);
let I = {
        transform: 'scale(0.7)',
        opacity: 0
    },
    T = {
        transform: 'scale(1)',
        opacity: 1
    };
t.Z = i.memo(function () {
    let e = (0, l.Wu)([m.Z, p.Z, c.ZP], () =>
            m.Z.getIncomingCalls().filter((e) => {
                let { channel: t } = e,
                    n = c.ZP.getConnectedActivityChannelId() === t.id && p.Z.getVoiceChannelId() !== t.id && c.ZP.getActivityPanelMode() === E.Ez.PANEL;
                return p.Z.getChannelId() !== t.id || n;
            })
        ),
        t = (0, l.e7)([m.Z], () => m.Z.hasIncomingCalls()),
        n = (0, l.e7)([_.Z], () => _.Z.isSoundDisabled('call_ringing')),
        a = (0, l.e7)([h.Z], () => h.Z.disableSounds),
        b = (0, l.e7)([f.Z], () => f.Z.getSoundpack()),
        S = i.useRef(!1),
        y = (0, o.Z)(() => (b === v.YC.CLASSIC ? (0, g.tu)(500 !== s().random(1, 1000) ? 'call_ringing' : s().sample(['call_ringing_beat', 'call_ringing_snow_halation']), 'call_ringing') : (0, g.uk)('call_ringing', b)), [b]);
    return (
        i.useEffect(
            () => () => {
                y.stop();
            },
            [y]
        ),
        i.useEffect(() => {
            if (a || n) {
                S.current && (y.stop(), (S.current = !1));
                return;
            }
            t && !S.current ? (y.loop(), (S.current = !0)) : !t && S.current && (y.stop(), (S.current = !1));
        }, [n, a, t, y]),
        (0, u.useTransition)(e, {
            keys: (e) => {
                var t;
                return null === (t = e.channel) || void 0 === t ? void 0 : t.id;
            },
            enter: {
                from: I,
                to: T
            },
            leave: I,
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
