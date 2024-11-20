n.d(t, {
    j: function () {
        return l;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(709014);
let o = {
        all: {
            name: 'all',
            start: 0,
            duration: 66
        }
    },
    l = () => {
        let e = i.useRef(null),
            t = i.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            l = i.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            u = i.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('all');
            }, []);
        return {
            events: {
                onClick: t,
                onMouseEnter: l,
                onMouseLeave: u
            },
            play: t,
            Component: i.useCallback(
                (t) =>
                    (0, r.jsx)(a.L, {
                        ...t,
                        src: () => n.e('66944').then(n.t.bind(n, 166174, 19)),
                        ref: e,
                        markers: o
                    }),
                []
            )
        };
    };
