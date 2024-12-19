var r = t(192379),
    i = t(570140),
    a = t(4646),
    c = t(258340),
    o = t(768581),
    u = t(176354);
n.Z = function (e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
        { update: t, draw: l, emit: s } = (0, c.Z)(e),
        d = r.useMemo(() => new a.ZP(), []),
        f = r.useCallback(
            (e) => {
                (e.assetMap = d), l(e);
            },
            [d, l]
        );
    return (
        r.useEffect(() => {
            async function e(e) {
                var t, r;
                let { emoji: i } = e,
                    a = null !== (t = i.id) && void 0 !== t ? t : i.name,
                    c =
                        null == i.id
                            ? u.ZP.getURL(null !== (r = i.name) && void 0 !== r ? r : i.uniqueName)
                            : o.ZP.getEmojiURL({
                                  id: i.id,
                                  animated: !1,
                                  size: 32
                              });
                await d.loadRemoteImage(a, c), s(a, n);
            }
            return i.Z.subscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e), () => i.Z.unsubscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e);
        }),
        {
            update: t,
            draw: f
        }
    );
};
