n(47120);
var i = n(200651),
    o = n(192379),
    s = n(442837),
    a = n(570140),
    l = n(607070),
    r = n(222677),
    c = n(695346),
    d = n(960020),
    u = n(347904),
    h = n(620652),
    m = n(815605),
    p = n(376705),
    f = n(950810);
t.Z = o.memo(function (e) {
    let { channelId: t, messageId: n, emoji: g, useChatFontScaling: v, color: b, count: T, emojiSize: x } = e,
        _ = (0, s.e7)([d.Z], () => d.Z.getEffectForEmojiId(t, n, g)),
        S = v ? f : p,
        C = o.useMemo(
            () =>
                (0, m.Zn)(g, b, t, {
                    key: _,
                    messageId: n
                }),
            [b, _, g, t, n]
        ),
        [I, j] = o.useState(!1),
        E = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        R = c.Yk.useSetting(),
        N = o.useCallback(() => {
            a.Z.dispatch({
                type: 'BURST_REACTION_EFFECT_CLEAR',
                channelId: t,
                messageId: n,
                emoji: g
            });
        }, [g, t, n]);
    return (o.useEffect(() => {
        let e = () => {
            if (I) return;
            let e = (0, u.vJ)(''.concat(Date.now()).concat(t).concat(n).concat(g.name)) % 10;
            (e += T > 4 ? 4 : T - 1) > 7 &&
                (j(!0),
                (0, r.T6)({
                    channelId: t,
                    messageId: n,
                    emoji: g,
                    key: d.I.RANDOM
                }));
        };
        if (I || (E && !R) || !R) return;
        e();
        let i = setInterval(e, 5000);
        return () => {
            clearInterval(i);
        };
    }, [R, t, T, g, g.name, I, n, E]),
    null == _)
        ? null
        : (0, i.jsx)(h.Z, {
              className: S.effect,
              effect: C,
              onComplete: N,
              emojiSize: x
          });
});
