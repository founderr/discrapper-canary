n.d(t, {
    s: function () {
        return r;
    }
});
var i = n(200651),
    s = n(192379),
    a = n(709014);
let l = {
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
    r = () => {
        let e = s.useRef(null),
            t = s.useCallback(() => {
                null != e.current && e.current.play('click');
            }, []),
            r = s.useCallback(() => {
                null != e.current && e.current.play('hover');
            }, []),
            o = s.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('hover');
            }, []);
        return {
            events: {
                onClick: t,
                onMouseEnter: r,
                onMouseLeave: o
            },
            play: t,
            Component: s.useCallback(
                (t) =>
                    (0, i.jsx)(a.L, {
                        ...t,
                        src: () => n.e('8631').then(n.t.bind(n, 105262, 19)),
                        ref: e,
                        markers: l
                    }),
                []
            )
        };
    };
