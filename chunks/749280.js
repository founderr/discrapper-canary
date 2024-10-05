t.d(n, {
    w: function () {
        return c;
    }
});
var i = t(735250),
    a = t(470079),
    l = t(709014);
let o = {
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
    c = () => {
        let e = a.useRef(null),
            n = a.useCallback(() => {
                null != e.current && e.current.play('click');
            }, []),
            c = a.useCallback(() => {
                null != e.current && e.current.play('hover');
            }, []),
            d = a.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('hover');
            }, []);
        return {
            events: {
                onMouseEnter: c,
                onMouseLeave: d
            },
            play: n,
            Component: a.useCallback(
                (n) =>
                    (0, i.jsx)(l.L, {
                        ...n,
                        src: () => t.e('56855').then(t.t.bind(t, 206509, 19)),
                        ref: e,
                        markers: o
                    }),
                []
            )
        };
    };
