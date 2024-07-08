t(47120);
var i = t(735250), l = t(470079), a = t(100527), r = t(367907), s = t(906732), o = t(541099), c = t(695676), u = t(173790), d = t(361917), m = t(684256), p = t(981631), _ = t(933320);
n.Z = l.memo(l.forwardRef(function (e, n) {
    let t, {
            channel: E,
            entrypoint: A
        } = e, [N, h] = l.useState(''), f = function (e) {
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
        }(N), {analyticsLocations: C} = (0, s.ZP)(a.Z.APP_LAUNCHER);
    l.useEffect(() => {
        (0, r.yw)(p.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
            source: A,
            location: 'app_launcher'
        });
    }, [A]);
    let {
        history: I,
        setHistory: v,
        currentView: P,
        pushHistory: x,
        goBack: T
    } = function () {
        let [e, n] = l.useState([{ type: c.gc.HOME }]), t = e[e.length - 1];
        return {
            history: e,
            setHistory: n,
            currentView: t,
            pushHistory: t => {
                n([
                    ...e,
                    t
                ]);
            },
            goBack: () => {
                if (0 === e.length)
                    return;
                let t = [...e];
                t.pop(), n(t);
            }
        };
    }();
    switch (l.useEffect(() => {
            let e = Date.now();
            return () => {
                (0, r.yw)(p.rMx.APP_LAUNCHER_CLOSED, {
                    reason: o.Z.closeReason(),
                    time_spent: Date.now() - e,
                    source: A
                });
            };
        }, [A]), null == P ? void 0 : P.type) {
    case c.gc.HOME:
        t = (0, i.jsx)(d.Z, {
            setScroller: f,
            channel: E,
            entrypoint: A,
            searchQuery: N,
            setSearchQuery: h
        });
        break;
    case c.gc.LIST:
        t = (0, i.jsx)(m.Z, {
            channel: E,
            entrypoint: A,
            title: P.title,
            look: P.look,
            items: P.items,
            sectionName: P.sectionName
        });
        break;
    case c.gc.APPLICATION:
        t = (0, i.jsx)(u.Z, {
            channel: E,
            application: P.application,
            sectionName: P.sectionName
        });
        break;
    default:
        t = null;
    }
    return (0, i.jsx)('div', {
        className: _.drawerSizingWrapper,
        ref: n,
        children: (0, i.jsx)('div', {
            className: _.contentWrapper,
            children: (0, i.jsx)(c.uX.Provider, {
                value: {
                    history: I,
                    setHistory: v,
                    currentView: P,
                    pushHistory: x,
                    goBack: T
                },
                children: (0, i.jsx)(s.Gt, {
                    value: C,
                    children: t
                })
            })
        })
    });
}));
