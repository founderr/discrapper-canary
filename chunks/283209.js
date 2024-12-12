r.d(n, {
    D: function () {
        return d;
    }
});
var i = r(192379),
    a = r(995295),
    s = r(978008),
    o = r(427753),
    l = r.n(o),
    u = r(632590),
    c = [],
    d = function (e, n, r) {
        void 0 === r && (r = {});
        var o = i.useRef(null),
            d = {
                onFirstUpdate: r.onFirstUpdate,
                placement: r.placement || 'bottom',
                strategy: r.strategy || 'absolute',
                modifiers: r.modifiers || c
            },
            f = i.useState({
                styles: {
                    popper: {
                        position: d.strategy,
                        left: '0',
                        top: '0'
                    },
                    arrow: { position: 'absolute' }
                },
                attributes: {}
            }),
            _ = f[0],
            h = f[1],
            p = i.useMemo(function () {
                return {
                    name: 'updateState',
                    enabled: !0,
                    phase: 'write',
                    fn: function (e) {
                        var n = e.state,
                            r = Object.keys(n.elements);
                        a.flushSync(function () {
                            h({
                                styles: (0, u.sq)(
                                    r.map(function (e) {
                                        return [e, n.styles[e] || {}];
                                    })
                                ),
                                attributes: (0, u.sq)(
                                    r.map(function (e) {
                                        return [e, n.attributes[e]];
                                    })
                                )
                            });
                        });
                    },
                    requires: ['computeStyles']
                };
            }, []),
            m = i.useMemo(
                function () {
                    var e = {
                        onFirstUpdate: d.onFirstUpdate,
                        placement: d.placement,
                        strategy: d.strategy,
                        modifiers: [].concat(d.modifiers, [
                            p,
                            {
                                name: 'applyStyles',
                                enabled: !1
                            }
                        ])
                    };
                    return l()(o.current, e) ? o.current || e : ((o.current = e), e);
                },
                [d.onFirstUpdate, d.placement, d.strategy, d.modifiers, p]
            ),
            g = i.useRef();
        return (
            (0, u.LI)(
                function () {
                    g.current && g.current.setOptions(m);
                },
                [m]
            ),
            (0, u.LI)(
                function () {
                    if (null != e && null != n) {
                        var i = (r.createPopper || s.fi)(e, n, m);
                        return (
                            (g.current = i),
                            function () {
                                i.destroy(), (g.current = null);
                            }
                        );
                    }
                },
                [e, n, r.createPopper]
            ),
            {
                state: g.current ? g.current.state : null,
                styles: _.styles,
                attributes: _.attributes,
                update: g.current ? g.current.update : null,
                forceUpdate: g.current ? g.current.forceUpdate : null
            }
        );
    };
