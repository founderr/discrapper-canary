n.d(t, {
    l: function () {
        return s;
    }
});
var i = n(200651),
    o = n(192379),
    r = n(709014);
let l = {
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
    s = (e) => {
        let t = o.useRef(null),
            s = o.useRef(e);
        s.current = e;
        let a = o.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e]
            ),
            u = o.useCallback(() => {
                if (null == t.current) return;
                let n = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                t.current.play(n);
            }, [e]),
            c = o.useCallback(() => {
                if (null == t.current) return;
                let n = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                t.current.stopIfPlaying(n);
            }, [e]);
        return {
            events: {
                onClick: a,
                onMouseEnter: u,
                onMouseLeave: c
            },
            play: a,
            Component: o.useCallback(
                (e) =>
                    (0, i.jsx)(r.L, {
                        ...e,
                        src: () => n.e('68449').then(n.t.bind(n, 406785, 19)),
                        ref: t,
                        initialAnimation: s.current,
                        markers: l
                    }),
                []
            )
        };
    };
