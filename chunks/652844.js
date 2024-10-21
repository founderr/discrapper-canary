n.d(t, {
    O: function () {
        return r;
    }
});
var i = n(200651),
    s = n(192379),
    a = n(709014);
let l = {
        mute: {
            name: 'mute',
            start: 0,
            duration: 70
        },
        unmute: {
            name: 'unmute',
            start: 100,
            duration: 70
        },
        hover_unmuted: {
            name: 'hover_unmuted',
            start: 180,
            duration: 40
        },
        hover_muted: {
            name: 'hover_muted',
            start: 240,
            duration: 40
        }
    },
    r = (e) => {
        let t = s.useRef(null),
            r = s.useRef(e);
        r.current = e;
        let o = s.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e]
            ),
            c = s.useCallback(() => {
                if (null == t.current) return;
                let n = 'mute' === e ? 'hover_unmuted' : 'hover_muted';
                t.current.play(n);
            }, [e]),
            u = s.useCallback(() => {
                if (null == t.current) return;
                let n = 'mute' === e ? 'hover_unmuted' : 'hover_muted';
                t.current.stopIfPlaying(n);
            }, [e]);
        return {
            events: {
                onClick: o,
                onMouseEnter: c,
                onMouseLeave: u
            },
            play: o,
            Component: s.useCallback(
                (e) =>
                    (0, i.jsx)(a.L, {
                        ...e,
                        src: () => n.e('410').then(n.t.bind(n, 992285, 19)),
                        ref: t,
                        initialAnimation: r.current,
                        markers: l
                    }),
                []
            )
        };
    };
