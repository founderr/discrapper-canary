var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(570140),
    l = n(607070),
    u = n(222677),
    c = n(695346),
    d = n(960020),
    _ = n(347904),
    E = n(620652),
    f = n(815605),
    h = n(37741),
    p = n(403969);
function m(e) {
    let { channelId: t, messageId: n, emoji: r, useChatFontScaling: m, color: I, count: T } = e,
        g = (0, o.e7)([d.Z], () => d.Z.getEffectForEmojiId(t, n, r)),
        S = m ? p : h,
        A = a.useMemo(
            () =>
                (0, f.Zn)(r, I, t, {
                    key: g,
                    messageId: n
                }),
            [I, g, r, t, n]
        ),
        [v, N] = a.useState(!1),
        O = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        R = c.Yk.useSetting(),
        C = a.useCallback(() => {
            s.Z.dispatch({
                type: 'BURST_REACTION_EFFECT_CLEAR',
                channelId: t,
                messageId: n,
                emoji: r
            });
        }, [r, t, n]);
    return (a.useEffect(() => {
        let e = () => {
            if (v) return;
            let e = (0, _.vJ)(''.concat(Date.now()).concat(t).concat(n).concat(r.name)) % 10;
            (e += T > 4 ? 4 : T - 1) > 7 &&
                (N(!0),
                (0, u.T6)({
                    channelId: t,
                    messageId: n,
                    emoji: r,
                    key: d.I.RANDOM
                }));
        };
        if (v || (O && !R) || !R) return;
        e();
        let i = setInterval(e, 5000);
        return () => {
            clearInterval(i);
        };
    }, [R, t, T, r, r.name, v, n, O]),
    null == g)
        ? null
        : (0, i.jsx)(E.Z, {
              className: S.effect,
              effect: A,
              onComplete: C
          });
}
t.Z = a.memo(m);
