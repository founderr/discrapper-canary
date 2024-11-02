var a = n(192379),
    i = n(451478),
    r = n(830917),
    l = n(985518);
t.Z = {
    useForumChannelSeenManager: function (e) {
        let { guildId: t, channelId: n } = e,
            s = a.useRef(null),
            o = (0, r.UU)(),
            c = !i.Z.isFocused(o);
        return (
            a.useLayoutEffect(
                () => (
                    null == s.current &&
                        ((s.current = new l.ZP({
                            guildId: t,
                            channelId: n,
                            isPaused: c,
                            windowId: o
                        })),
                        s.current.initialize()),
                    () => {
                        var e;
                        null === (e = s.current) || void 0 === e || e.terminate(), (s.current = null);
                    }
                ),
                [n, t, c, o]
            ),
            s.current
        );
    }
};
