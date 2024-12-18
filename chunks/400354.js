n.d(e, {
    l: function () {
        return o;
    }
});
var r = n(200651),
    i = n(192379),
    l = n(709014);
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
    o = (t) => {
        let e = i.useRef(null),
            o = i.useRef(t);
        o.current = t;
        let u = i.useMemo(
                () => () => {
                    null != e.current && e.current.play(t);
                },
                [t]
            ),
            s = i.useCallback(() => {
                if (null == e.current) return;
                let n = 'deafen' === t ? 'hover_undeafened' : 'hover_deafened';
                e.current.play(n);
            }, [t]),
            c = i.useCallback(() => {
                if (null == e.current) return;
                let n = 'deafen' === t ? 'hover_undeafened' : 'hover_deafened';
                e.current.stopIfPlaying(n);
            }, [t]);
        return {
            events: {
                onClick: u,
                onMouseEnter: s,
                onMouseLeave: c
            },
            play: u,
            Component: i.useCallback(
                (t) =>
                    (0, r.jsx)(l.L, {
                        ...t,
                        src: () => n.e('68449').then(n.t.bind(n, 406785, 19)),
                        ref: e,
                        initialAnimation: o.current,
                        markers: a
                    }),
                []
            )
        };
    };
