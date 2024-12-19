var i = t(192379),
    r = t(570140),
    a = t(4646),
    c = t(258340),
    o = t(768581),
    u = t(176354);
n.Z = function (e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
        { update: t, draw: l, emit: s } = (0, c.Z)(e),
        d = i.useMemo(() => new a.ZP(), []),
        f = i.useCallback(
            (e) => {
                (e.assetMap = d), l(e);
            },
            [d, l]
        );
    return (
        i.useEffect(() => {
            async function e(e) {
                var t, i;
                let { emoji: r } = e,
                    a = null !== (t = r.id) && void 0 !== t ? t : r.name,
                    c =
                        null == r.id
                            ? u.ZP.getURL(null !== (i = r.name) && void 0 !== i ? i : r.uniqueName)
                            : o.ZP.getEmojiURL({
                                  id: r.id,
                                  animated: !1,
                                  size: 32
                              });
                await d.loadRemoteImage(a, c), s(a, n);
            }
            return r.Z.subscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e), () => r.Z.unsubscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e);
        }),
        {
            update: t,
            draw: f
        }
    );
};
