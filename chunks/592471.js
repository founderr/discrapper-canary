n.d(t, {
    s: function () {
        return a;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(709014);
let s = {
        hover: {
            name: 'hover',
            start: 0,
            duration: 40
        },
        click: {
            name: 'click',
            start: 50,
            duration: 65
        }
    },
    a = () => {
        let e = l.useRef(null),
            t = l.useCallback(() => {
                null != e.current && e.current.play('click');
            }, []),
            a = l.useCallback(() => {
                null != e.current && e.current.play('hover');
            }, []),
            o = l.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('hover');
            }, []);
        return {
            events: {
                onClick: t,
                onMouseEnter: a,
                onMouseLeave: o
            },
            play: t,
            Component: l.useCallback(
                (t) =>
                    (0, i.jsx)(r.L, {
                        ...t,
                        src: () => n.e('8631').then(n.t.bind(n, 105262, 19)),
                        ref: e,
                        markers: s
                    }),
                []
            )
        };
    };
