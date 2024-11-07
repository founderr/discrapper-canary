var i = n(903797),
    l = n(731965),
    r = n(433517),
    o = n(710845),
    a = n(626135),
    s = n(630724),
    c = n(981631);
let u = 'UserFlowAnalyticsStore_current',
    d = 'UserFlowAnalyticsStore';
function _(e) {
    if (e === s.MK.UNKNOWN) return null;
    let t = r.K.get(''.concat(d, '-').concat(e));
    if (null == t) return null;
    let { version: n, ...i } = t;
    return 1 !== n ? null : i;
}
new o.Z('UserFlowAnalytics');
let m = (0, i.Z)((e, t) => ({
    flows: {},
    currentFlow: null,
    activeFlow: () => {
        var e;
        let n = null !== (e = t().currentFlow) && void 0 !== e ? e : r.K.get(u);
        if (null == n) return null;
        let { [n]: i } = t().flows,
            l = null != i ? i : _(n);
        return (null == l ? void 0 : l.currentStep) != null ? n : null;
    }
}));
function p(e, t) {
    let { [e]: n, ...i } = m.getState().flows,
        r = null != n ? n : _(e);
    if ((null == r ? void 0 : r.currentStep) == null || r.currentStep !== t)
        (0, l.j)(() => {
            m.setState({
                flows: {
                    ...i,
                    [e]: {
                        type: e,
                        lastStep: null,
                        lastTimestamp: null,
                        currentStep: t,
                        currentTimestamp: new Date(),
                        skipped: !1
                    }
                },
                currentFlow: e
            });
        });
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = e;
    if (e === s.MK.ANY) {
        var r;
        i = null !== (r = m.getState().activeFlow()) && void 0 !== r ? r : s.MK.UNKNOWN;
    }
    let { [i]: o, ...a } = m.getState().flows,
        c = null != o ? o : _(i);
    if (null != c && null != c.currentStep && c.currentStep !== t)
        (0, l.j)(() => {
            m.setState({
                flows: {
                    ...a,
                    [i]: {
                        ...c,
                        lastStep: c.currentStep,
                        lastTimestamp: c.currentTimestamp,
                        currentStep: t,
                        currentTimestamp: new Date(),
                        ended: n
                    }
                },
                currentFlow: i
            });
        });
}
m.subscribe(
    (e) => {
        var t;
        if (null != e) {
            if (
                (!(function (e) {
                    if (e.type === s.MK.UNKNOWN) return;
                    let t = ''.concat(d, '-').concat(e.type);
                    e.ended
                        ? (r.K.remove(t), r.K.remove(u))
                        : (r.K.set(''.concat(d, '-').concat(e.type), {
                              ...e,
                              version: 1
                          }),
                          r.K.set(u, e.type));
                })(e),
                a.default.track(
                    c.rMx.NUO_TRANSITION,
                    {
                        flow_type: e.type,
                        from_step: e.lastStep,
                        to_step: e.currentStep,
                        seconds_on_from_step: 'function' != typeof (null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1000
                    },
                    { flush: !0 }
                ),
                e.ended)
            ) {
                let t = { ...m.getState().flows };
                delete t[e.type],
                    (0, l.j)(() => {
                        m.setState({
                            flows: t,
                            currentFlow: null
                        });
                    });
            }
        }
    },
    (e) => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0)
);
function f() {
    return null != m.getState().activeFlow();
}
t.Z = {
    flowStart: p,
    flowStepOrStart: function (e, t) {
        f() ? I(e, t) : p(e, t);
    },
    flowStep: I,
    hasActiveFlow: f
};
