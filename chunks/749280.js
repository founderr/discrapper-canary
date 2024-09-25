n.d(t, {
    w: function () {
        return s;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(709014);
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
    s = () => {
        let e = i.useRef(null),
            t = i.useCallback(() => {
                null != e.current && e.current.play('click');
            }, []),
            s = i.useCallback(() => {
                null != e.current && e.current.play('hover');
            }, []),
            l = i.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('hover');
            }, []);
        return {
            events: {
                onMouseEnter: s,
                onMouseLeave: l
            },
            play: t,
            Component: i.useCallback(
                (t) =>
                    (0, r.jsx)(a.L, {
                        ...t,
                        src: () => n.e('56855').then(n.t.bind(n, 206509, 19)),
                        ref: e,
                        markers: o
                    }),
                []
            )
        };
    };
