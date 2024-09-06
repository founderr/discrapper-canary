n.d(t, {
    w: function () {
        return r;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(709014);
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
                onMouseEnter: r,
                onMouseLeave: o
            },
            play: t,
            Component: s.useCallback(
                (t) =>
                    (0, i.jsx)(a.L, {
                        ...t,
                        src: () => n.e('56855').then(n.t.bind(n, 206509, 19)),
                        ref: e,
                        markers: l
                    }),
                []
            )
        };
    };
