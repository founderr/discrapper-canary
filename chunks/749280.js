n.d(t, {
    w: function () {
        return r;
    }
});
var o = n(735250),
    a = n(470079),
    i = n(709014);
let l = {
        hover: {
            name: 'hover',
            start: 0,
            duration: 59
        },
        click: {
            name: 'click',
            start: 68,
            duration: 26
        }
    },
    r = () => {
        let e = a.useRef(null),
            t = a.useCallback(() => {
                null != e.current && e.current.play('click');
            }, []),
            r = a.useCallback(() => {
                null != e.current && e.current.play('hover');
            }, []),
            c = a.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('hover');
            }, []);
        return {
            events: {
                onMouseEnter: r,
                onMouseLeave: c
            },
            play: t,
            Component: a.useCallback(
                (t) =>
                    (0, o.jsx)(i.L, {
                        ...t,
                        src: () => n.e('56855').then(n.t.bind(n, 206509, 19)),
                        ref: e,
                        markers: l
                    }),
                []
            )
        };
    };
