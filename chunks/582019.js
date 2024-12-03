n.d(t, {
    j: function () {
        return o;
    }
});
var r = n(200651),
    l = n(192379),
    i = n(709014);
let a = {
        all: {
            name: 'all',
            start: 0,
            duration: 66
        }
    },
    o = () => {
        let e = l.useRef(null),
            t = l.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            o = l.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            u = l.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('all');
            }, []);
        return {
            events: {
                onClick: t,
                onMouseEnter: o,
                onMouseLeave: u
            },
            play: t,
            Component: l.useCallback(
                (t) =>
                    (0, r.jsx)(i.L, {
                        ...t,
                        src: () => n.e('66944').then(n.t.bind(n, 166174, 19)),
                        ref: e,
                        markers: a
                    }),
                []
            )
        };
    };
