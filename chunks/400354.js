n.d(t, {
    l: function () {
        return o;
    }
});
var r = n(200651),
    l = n(192379),
    i = n(709014);
let a = {
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
    o = (e) => {
        let t = l.useRef(null),
            o = l.useRef(e);
        o.current = e;
        let u = l.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e]
            ),
            c = l.useCallback(() => {
                if (null == t.current) return;
                let n = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                t.current.play(n);
            }, [e]),
            s = l.useCallback(() => {
                if (null == t.current) return;
                let n = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                t.current.stopIfPlaying(n);
            }, [e]);
        return {
            events: {
                onClick: u,
                onMouseEnter: c,
                onMouseLeave: s
            },
            play: u,
            Component: l.useCallback(
                (e) =>
                    (0, r.jsx)(i.L, {
                        ...e,
                        src: () => n.e('68449').then(n.t.bind(n, 406785, 19)),
                        ref: t,
                        initialAnimation: o.current,
                        markers: a
                    }),
                []
            )
        };
    };
