n.d(t, {
    z: function () {
        return f;
    }
});
var i = n(200651),
    o = n(192379),
    l = n(120356),
    r = n.n(l),
    s = n(752877),
    a = n(481060),
    u = n(110924),
    c = n(752802),
    d = n(340101),
    h = n(228680);
let f = 8,
    p = (e) => {
        let { participant: t, width: n, locked: o, widgetId: l, pinned: r } = e;
        return (0, i.jsx)(
            c.Z,
            {
                participant: t,
                width: n,
                locked: o,
                widgetId: l,
                pinned: r
            },
            t.user.id
        );
    },
    m = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    };
t.Z = o.memo(function (e) {
    let { widgetId: t, tileWidth: n, layout: o, locked: l, streamParticipants: c, participantsVersion: v, pinned: g } = e,
        E = (9 / 16) * n,
        x = c.map((e) => ({
            participant: e,
            key: e.user.id,
            width: n,
            locked: l,
            widgetId: t,
            height: E,
            pinned: g
        })),
        C = (0, u.Z)(n),
        Z = o === d.C5.VERTICAL,
        _ = 0,
        I = 0,
        S = (0, a.useTransition)(
            Z
                ? x.map((e, t) => ({
                      ...e,
                      y: (_ += e.height + (t > 0 ? f : 0)) - e.height,
                      x: 0
                  }))
                : x.map((e, t) => ({
                      ...e,
                      x: (I += e.width + (t > 0 ? f : 0)) - e.width,
                      y: 0
                  })),
            {
                key: (e) => e.key,
                from: {
                    height: 0,
                    opacity: 0
                },
                leave: {
                    height: 0,
                    opacity: 0
                },
                enter: (e) => {
                    let { x: t, y: n, width: i, height: o } = e;
                    return {
                        x: t,
                        y: n,
                        width: i,
                        height: o,
                        opacity: 1
                    };
                },
                update: (e) => {
                    let { x: t, y: n, width: i, height: o } = e;
                    return {
                        x: t,
                        y: n,
                        width: i,
                        height: o
                    };
                },
                config: m,
                trail: n !== C ? 0 : 100
            },
            n !== C ? 'animate-never' : 'respect-motion-settings'
        );
    return (0, i.jsx)('div', {
        className: r()({
            [h.gridContainer]: !0,
            [h.vertical]: Z,
            [h.horizontal]: !Z
        }),
        style: Z ? { height: _ } : { width: I },
        children: S((e, t, o, l) =>
            (0, i.jsx)(s.animated.div, {
                className: h.gridItem,
                style: Object.assign({}, e, {
                    width: n,
                    height: E,
                    zIndex: x.length - l
                }),
                children: p(t)
            })
        )
    });
});
