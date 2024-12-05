n.d(t, {
    j: function () {
        return u;
    }
});
var r = n(200651),
    i = n(192379),
    l = n(709014);
let a = {
        all: {
            name: 'all',
            start: 0,
            duration: 66
        }
    },
    u = () => {
        let e = i.useRef(null),
            t = i.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            u = i.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            o = i.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('all');
            }, []);
        return {
            events: {
                onClick: t,
                onMouseEnter: u,
                onMouseLeave: o
            },
            play: t,
            Component: i.useCallback(
                (t) =>
                    (0, r.jsx)(l.L, {
                        ...t,
                        src: () => n.e('66944').then(n.t.bind(n, 166174, 19)),
                        ref: e,
                        markers: a
                    }),
                []
            )
        };
    };
