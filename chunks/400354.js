n.d(t, {
    l: function () {
        return a;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(709014);
let o = {
        deafen: {
            name: 'deafen',
            start: 0,
            duration: 70
        },
        undeafen: {
            name: 'undeafen',
            start: 110,
            duration: 70
        },
        hover_undeafened: {
            name: 'hover_undeafened',
            start: 200,
            duration: 70
        },
        hover_deafened: {
            name: 'hover_deafened',
            start: 300,
            duration: 70
        }
    },
    a = (e) => {
        let t = r.useRef(null),
            a = r.useRef(e);
        a.current = e;
        let s = r.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e]
            ),
            u = r.useCallback(() => {
                if (null == t.current) return;
                let n = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                t.current.play(n);
            }, [e]),
            c = r.useCallback(() => {
                if (null == t.current) return;
                let n = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                t.current.stopIfPlaying(n);
            }, [e]);
        return {
            events: {
                onClick: s,
                onMouseEnter: u,
                onMouseLeave: c
            },
            play: s,
            Component: r.useCallback(
                (e) =>
                    (0, i.jsx)(l.L, {
                        ...e,
                        src: () => n.e('68449').then(n.t.bind(n, 406785, 19)),
                        ref: t,
                        initialAnimation: a.current,
                        markers: o
                    }),
                []
            )
        };
    };
