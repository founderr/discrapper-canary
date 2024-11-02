var o = n(903797),
    l = n(731965),
    s = n(433517),
    r = n(710845),
    i = n(626135),
    a = n(630724),
    c = n(981631);
let u = 'UserFlowAnalyticsStore_current',
    d = 'UserFlowAnalyticsStore';
function m(t) {
    if (t === a.MK.UNKNOWN) return null;
    let e = s.K.get(''.concat(d, '-').concat(t));
    if (null == e) return null;
    let { version: n, ...o } = e;
    return 1 !== n ? null : o;
}
new r.Z('UserFlowAnalytics');
let f = (0, o.Z)((t, e) => ({
    flows: {},
    currentFlow: null,
    activeFlow: () => {
        var t;
        let n = null !== (t = e().currentFlow) && void 0 !== t ? t : s.K.get(u);
        if (null == n) return null;
        let { [n]: o } = e().flows,
            l = null != o ? o : m(n);
        return (null == l ? void 0 : l.currentStep) != null ? n : null;
    }
}));
function _(t, e) {
    let { [t]: n, ...o } = f.getState().flows,
        s = null != n ? n : m(t);
    if ((null == s ? void 0 : s.currentStep) == null || s.currentStep !== e)
        (0, l.j)(() => {
            f.setState({
                flows: {
                    ...o,
                    [t]: {
                        type: t,
                        lastStep: null,
                        lastTimestamp: null,
                        currentStep: e,
                        currentTimestamp: new Date(),
                        skipped: !1
                    }
                },
                currentFlow: t
            });
        });
}
function p(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = t;
    if (t === a.MK.ANY) {
        var s;
        o = null !== (s = f.getState().activeFlow()) && void 0 !== s ? s : a.MK.UNKNOWN;
    }
    let { [o]: r, ...i } = f.getState().flows,
        c = null != r ? r : m(o);
    if (null != c && null != c.currentStep && c.currentStep !== e)
        (0, l.j)(() => {
            f.setState({
                flows: {
                    ...i,
                    [o]: {
                        ...c,
                        lastStep: c.currentStep,
                        lastTimestamp: c.currentTimestamp,
                        currentStep: e,
                        currentTimestamp: new Date(),
                        ended: n
                    }
                },
                currentFlow: o
            });
        });
}
f.subscribe(
    (t) => {
        var e;
        if (null != t) {
            if (
                (!(function (t) {
                    if (t.type === a.MK.UNKNOWN) return;
                    let e = ''.concat(d, '-').concat(t.type);
                    t.ended
                        ? (s.K.remove(e), s.K.remove(u))
                        : (s.K.set(''.concat(d, '-').concat(t.type), {
                              ...t,
                              version: 1
                          }),
                          s.K.set(u, t.type));
                })(t),
                i.default.track(
                    c.rMx.NUO_TRANSITION,
                    {
                        flow_type: t.type,
                        from_step: t.lastStep,
                        to_step: t.currentStep,
                        seconds_on_from_step: 'function' != typeof (null === (e = t.lastTimestamp) || void 0 === e ? void 0 : e.getTime) ? 0 : (t.currentTimestamp.getTime() - t.lastTimestamp.getTime()) / 1000
                    },
                    { flush: !0 }
                ),
                t.ended)
            ) {
                let e = { ...f.getState().flows };
                delete e[t.type],
                    (0, l.j)(() => {
                        f.setState({
                            flows: e,
                            currentFlow: null
                        });
                    });
            }
        }
    },
    (t) => (null != t.currentFlow ? t.flows[t.currentFlow] : void 0)
);
function g() {
    return null != f.getState().activeFlow();
}
e.Z = {
    flowStart: _,
    flowStepOrStart: function (t, e) {
        g() ? p(t, e) : _(t, e);
    },
    flowStep: p,
    hasActiveFlow: g
};
