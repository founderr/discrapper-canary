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
    g = n(403969);
t.Z = s.memo(function (e) {
    let { channelId: t, messageId: n, emoji: f, useChatFontScaling: _, color: T, count: v, emojiSize: E } = e,
        b = (0, o.e7)([d.Z], () => d.Z.getEffectForEmojiId(t, n, f)),
        I = _ ? g : p,
        R = s.useMemo(
            () =>
                (0, m.Zn)(f, T, t, {
                    key: b,
                    messageId: n
                }),
            [T, b, f, t, n]
        ),
        [S, C] = s.useState(!1),
        x = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        N = c.Yk.useSetting(),
        O = s.useCallback(() => {
            a.Z.dispatch({
                type: 'BURST_REACTION_EFFECT_CLEAR',
                channelId: t,
                messageId: n,
                emoji: f
            });
        }, [f, t, n]);
    return (s.useEffect(() => {
        let e = () => {
            if (S) return;
            let e = (0, u.vJ)(''.concat(Date.now()).concat(t).concat(n).concat(f.name)) % 10;
            (e += v > 4 ? 4 : v - 1) > 7 &&
                (C(!0),
                (0, r.T6)({
                    channelId: t,
                    messageId: n,
                    emoji: f,
                    key: d.I.RANDOM
                }));
        };
        if (S || (x && !N) || !N) return;
        e();
        let i = setInterval(e, 5000);
        return () => {
            clearInterval(i);
        };
    }, [N, t, v, f, f.name, S, n, x]),
    null == b)
        ? null
        : (0, i.jsx)(h.Z, {
              className: I.effect,
              effect: R,
              onComplete: O,
              emojiSize: E
          });
});
