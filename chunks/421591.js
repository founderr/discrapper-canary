t(47120), t(852437);
var i = t(735250), l = t(470079), a = t(481060), s = t(100527), r = t(367907), o = t(906732), c = t(541099), u = t(695676), d = t(173790), m = t(361917), p = t(684256), _ = t(314734), E = t(981631), A = t(933320);
let h = {
        width: _.Gy,
        height: _.lv
    }, N = { height: _.lv };
function f(e) {
    let {children: n} = e, [t, a] = l.useState([{ type: u.gc.HOME }]), [s, r] = l.useState({}), o = t[t.length - 1], c = l.useCallback(e => {
            a(n => [
                ...n,
                e
            ]);
        }, []), d = l.useCallback(() => {
            let e = null;
            a(n => n.length <= 1 ? n : (e = n[n.length - 1], n.slice(0, -1))), r(n => null == e ? n : {
                ...n,
                [e.type]: e
            });
        }, []), m = l.useCallback(e => {
            var n;
            return null !== (n = t.findLast(n => n.type === e)) && void 0 !== n ? n : s[e];
        }, [
            t,
            s
        ]);
    return (0, i.jsx)(u.uX.Provider, {
        value: {
            history: t,
            discard: s,
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
        } = e, [s, r] = l.useState(''), o = function (e) {
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
        }(s), {
            currentView: c,
            getMostRecentHistoryItemByType: E
        } = (0, u.hH)();
    if (null == c)
        return null;
    let h = E(u.gc.LIST), f = E(u.gc.APPLICATION);
    return (0, i.jsxs)(a.Slides, {
        activeSlide: c.type,
        width: _.Gy,
        children: [
            (0, i.jsx)(a.Slide, {
                id: u.gc.HOME,
                children: (0, i.jsx)('div', {
                    className: A.slideContent,
                    style: N,
                    children: (0, i.jsx)(m.Z, {
                        setScroller: o,
                        channel: n,
                        entrypoint: t,
                        searchQuery: s,
                        setSearchQuery: r
                    })
                })
            }),
            (0, i.jsx)(a.Slide, {
                id: u.gc.LIST,
                children: (0, i.jsx)('div', {
                    className: A.slideContent,
                    style: N,
                    children: null != h && (0, i.jsx)(p.Z, {
                        channel: n,
                        entrypoint: t,
                        title: h.title,
                        look: h.look,
                        items: h.items,
                        sectionName: h.sectionName
                    })
                })
            }),
            (0, i.jsx)(a.Slide, {
                id: u.gc.APPLICATION,
                children: (0, i.jsx)('div', {
                    className: A.slideContent,
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
            entrypoint: a
        } = e, {analyticsLocations: u} = (0, o.ZP)(s.Z.APP_LAUNCHER);
    return l.useEffect(() => {
        (0, r.yw)(E.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
            source: a,
            location: 'app_launcher'
        });
    }, [a]), l.useEffect(() => {
        let e = Date.now();
        return () => {
            (0, r.yw)(E.rMx.APP_LAUNCHER_CLOSED, {
                reason: c.Z.closeReason(),
                time_spent: Date.now() - e,
                source: a
            });
        };
    }, [a]), (0, i.jsx)('div', {
        className: A.drawerSizingWrapper,
        ref: n,
        style: h,
        children: (0, i.jsx)('div', {
            className: A.contentWrapper,
            children: (0, i.jsx)(o.Gt, {
                value: u,
                children: (0, i.jsx)(f, {
                    children: (0, i.jsx)(C, {
                        channel: t,
                        entrypoint: a
                    })
                })
            })
        })
    });
}));
