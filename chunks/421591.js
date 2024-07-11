t(47120), t(852437);
var i = t(735250), l = t(470079), r = t(481060), a = t(100527), s = t(367907), o = t(906732), c = t(541099), u = t(695676), d = t(173790), m = t(361917), p = t(684256), _ = t(314734), E = t(981631), h = t(933320);
let A = {
        width: _.Gy,
        height: _.lv
    }, N = { height: _.lv };
function f(e) {
    let {children: n} = e, [t, r] = l.useState([{ type: u.gc.HOME }]), [a, s] = l.useState({}), o = t[t.length - 1], c = l.useCallback(e => {
            r(n => [
                ...n,
                e
            ]);
        }, []), d = l.useCallback(() => {
            let e = null;
            r(n => n.length <= 1 ? n : (e = n[n.length - 1], n.slice(0, -1))), s(n => null == e ? n : {
                ...n,
                [e.type]: e
            });
        }, []), m = l.useCallback(e => {
            var n;
            return null !== (n = t.findLast(n => n.type === e)) && void 0 !== n ? n : a[e];
        }, [
            t,
            a
        ]);
    return (0, i.jsx)(u.uX.Provider, {
        value: {
            history: t,
            discard: a,
            currentView: o,
            pushHistory: c,
            goBack: d,
            getMostRecentHistoryItemByType: m
        },
        children: n
    });
}
function C(e) {
    let {
            channel: n,
            entrypoint: t
        } = e, [a, s] = l.useState(''), o = function (e) {
            let [n, t] = l.useState(null), i = l.useRef(0);
            return l.useEffect(() => {
                null == n || n.scrollTo(0, 0);
            }, [
                n,
                e
            ]), l.useEffect(() => {
                if (null != n)
                    return n.scrollTo(0, i.current), n.addEventListener('scroll', e), () => {
                        n.removeEventListener('scroll', e, !1);
                    };
                function e() {
                    if (null != n)
                        i.current = n.scrollTop;
                }
            }, [n]), t;
        }(a), {
            currentView: c,
            getMostRecentHistoryItemByType: E
        } = (0, u.hH)();
    if (null == c)
        return null;
    let A = E(u.gc.LIST), f = E(u.gc.APPLICATION);
    return (0, i.jsxs)(r.Slides, {
        activeSlide: c.type,
        width: _.Gy,
        children: [
            (0, i.jsx)(r.Slide, {
                id: u.gc.HOME,
                children: (0, i.jsx)('div', {
                    className: h.slideContent,
                    style: N,
                    children: (0, i.jsx)(m.Z, {
                        setScroller: o,
                        channel: n,
                        entrypoint: t,
                        searchQuery: a,
                        setSearchQuery: s
                    })
                })
            }),
            (0, i.jsx)(r.Slide, {
                id: u.gc.LIST,
                children: (0, i.jsx)('div', {
                    className: h.slideContent,
                    style: N,
                    children: null != A && (0, i.jsx)(p.Z, {
                        channel: n,
                        entrypoint: t,
                        title: A.title,
                        look: A.look,
                        items: A.items,
                        sectionName: A.sectionName
                    })
                })
            }),
            (0, i.jsx)(r.Slide, {
                id: u.gc.APPLICATION,
                children: (0, i.jsx)('div', {
                    className: h.slideContent,
                    style: N,
                    children: null != f && (0, i.jsx)(d.Z, {
                        channel: n,
                        application: f.application,
                        sectionName: f.sectionName
                    })
                })
            })
        ]
    });
}
n.Z = l.memo(l.forwardRef(function (e, n) {
    let {
            channel: t,
            entrypoint: r
        } = e, {analyticsLocations: u} = (0, o.ZP)(a.Z.APP_LAUNCHER);
    return l.useEffect(() => {
        (0, s.yw)(E.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
            source: r,
            location: 'app_launcher'
        });
    }, [r]), l.useEffect(() => {
        let e = Date.now();
        return () => {
            (0, s.yw)(E.rMx.APP_LAUNCHER_CLOSED, {
                reason: c.Z.closeReason(),
                time_spent: Date.now() - e,
                source: r
            });
        };
    }, [r]), (0, i.jsx)('div', {
        className: h.drawerSizingWrapper,
        ref: n,
        style: A,
        children: (0, i.jsx)('div', {
            className: h.contentWrapper,
            children: (0, i.jsx)(o.Gt, {
                value: u,
                children: (0, i.jsx)(f, {
                    children: (0, i.jsx)(C, {
                        channel: t,
                        entrypoint: r
                    })
                })
            })
        })
    });
}));
