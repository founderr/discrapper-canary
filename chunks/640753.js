n(47120);
var i = n(735250),
    s = n(470079),
    o = n(442837),
    a = n(570140),
    l = n(607070),
    r = n(222677),
    c = n(695346),
    d = n(960020),
    u = n(347904),
    h = n(620652),
    m = n(815605),
    p = n(37741),
    f = n(403969);
t.Z = s.memo(function (e) {
    let { channelId: t, messageId: n, emoji: g, useChatFontScaling: _, color: T, count: v } = e,
        E = (0, o.e7)([d.Z], () => d.Z.getEffectForEmojiId(t, n, g)),
        b = _ ? f : p,
        I = s.useMemo(
            () =>
                (0, m.Zn)(g, T, t, {
                    key: E,
                    messageId: n
                }),
            [T, E, g, t, n]
        ),
        [C, S] = s.useState(!1),
        R = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        x = c.Yk.useSetting(),
        N = s.useCallback(() => {
            a.Z.dispatch({
                type: 'BURST_REACTION_EFFECT_CLEAR',
                channelId: t,
                messageId: n,
                emoji: g
            });
        }, [g, t, n]);
    return (s.useEffect(() => {
        let e = () => {
            if (C) return;
            let e = (0, u.vJ)(''.concat(Date.now()).concat(t).concat(n).concat(g.name)) % 10;
            (e += v > 4 ? 4 : v - 1) > 7 &&
                (S(!0),
                (0, r.T6)({
                    channelId: t,
                    messageId: n,
                    emoji: g,
                    key: d.I.RANDOM
                }));
        };
        if (C || (R && !x) || !x) return;
        e();
        let i = setInterval(e, 5000);
        return () => {
            clearInterval(i);
        };
    }, [x, t, v, g, g.name, C, n, R]),
    null == E)
        ? null
        : (0, i.jsx)(h.Z, {
              className: b.effect,
              effect: I,
              onComplete: N
          });
});
