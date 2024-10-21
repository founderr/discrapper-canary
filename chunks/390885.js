var s = n(903797),
    o = n(731965),
    l = n(433517),
    r = n(710845),
    a = n(626135),
    c = n(630724),
    i = n(981631);
let u = 'UserFlowAnalyticsStore_current',
    d = 'UserFlowAnalyticsStore';
function m(e) {
    if (e === c.MK.UNKNOWN) return null;
    let t = l.K.get(''.concat(d, '-').concat(e));
    if (null == t) return null;
    let { version: n, ...s } = t;
    return 1 !== n ? null : s;
}
new r.Z('UserFlowAnalytics');
let _ = (0, s.Z)((e, t) => ({
    flows: {},
    currentFlow: null,
    activeFlow: () => {
        var e;
        let n = null !== (e = t().currentFlow) && void 0 !== e ? e : l.K.get(u);
        if (null == n) return null;
        let { [n]: s } = t().flows,
            o = null != s ? s : m(n);
        return (null == o ? void 0 : o.currentStep) != null ? n : null;
    }
}));
function f(e, t) {
    let { [e]: n, ...s } = _.getState().flows,
        l = null != n ? n : m(e);
    if ((null == l ? void 0 : l.currentStep) == null || l.currentStep !== t)
        (0, o.j)(() => {
            _.setState({
                flows: {
                    ...s,
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
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = e;
    if (e === c.MK.ANY) {
        var l;
        s = null !== (l = _.getState().activeFlow()) && void 0 !== l ? l : c.MK.UNKNOWN;
    }
    let { [s]: r, ...a } = _.getState().flows,
        i = null != r ? r : m(s);
    if (null != i && null != i.currentStep && i.currentStep !== t)
        (0, o.j)(() => {
            _.setState({
                flows: {
                    ...a,
                    [s]: {
                        ...i,
                        lastStep: i.currentStep,
                        lastTimestamp: i.currentTimestamp,
                        currentStep: t,
                        currentTimestamp: new Date(),
                        ended: n
                    }
                },
                currentFlow: s
            });
        });
}
_.subscribe(
    (e) => {
        var t;
        if (null != e) {
            if (
                (!(function (e) {
                    if (e.type === c.MK.UNKNOWN) return;
                    let t = ''.concat(d, '-').concat(e.type);
                    e.ended
                        ? (l.K.remove(t), l.K.remove(u))
                        : (l.K.set(''.concat(d, '-').concat(e.type), {
                              ...e,
                              version: 1
                          }),
                          l.K.set(u, e.type));
                })(e),
                a.default.track(
                    i.rMx.NUO_TRANSITION,
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
                let t = { ..._.getState().flows };
                delete t[e.type],
                    (0, o.j)(() => {
                        _.setState({
                            flows: t,
                            currentFlow: null
                        });
                    });
            }
        }
    },
    (e) => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0)
);
function N() {
    return null != _.getState().activeFlow();
}
t.Z = {
    flowStart: f,
    flowStepOrStart: function (e, t) {
        N() ? C(e, t) : f(e, t);
    },
    flowStep: C,
    hasActiveFlow: N
};
