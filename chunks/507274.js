n.d(t, {
    M: function () {
        return u;
    },
    V: function () {
        return c;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(597442),
    s = n(84735),
    o = n(481060),
    l = n(793903);
let u = i.createContext(void 0),
    c = i.forwardRef(function (e, t) {
        let { children: n, impressionType: c, impression: d, disableTrack: f, returnRef: _, ...h } = e,
            p = i.useRef(null);
        return (
            (0, a.T)(p, { returnRef: _ }),
            i.useContext(l.Z)(
                {
                    type: c,
                    name: null == d ? void 0 : d.impressionName,
                    properties: null == d ? void 0 : d.impressionProperties
                },
                { disableTrack: f }
            ),
            i.useImperativeHandle(t, () => p.current),
            (0, r.jsx)(u.Provider, {
                value: !0,
                children: (0, r.jsx)('div', {
                    ...h,
                    ref: p,
                    role: 'dialog',
                    tabIndex: -1,
                    'aria-modal': !0,
                    children: (0, r.jsx)(o.HeadingLevel, {
                        forceLevel: 1,
                        children: (0, r.jsx)(s.J, {
                            containerRef: p,
                            children: n
                        })
                    })
                })
            })
        );
    });
