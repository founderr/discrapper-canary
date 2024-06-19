var s = n(652874),
  a = n(433517),
  l = n(710845),
  i = n(626135),
  r = n(630724),
  o = n(981631);
let c = "UserFlowAnalyticsStore_current",
  d = "UserFlowAnalyticsStore";

function u(e) {
  if (e === r.MK.UNKNOWN) return null;
  let t = a.K.get("".concat(d, "-").concat(e));
  if (null == t) return null;
  let {
    version: n,
    ...s
  } = t;
  return 1 !== n ? null : s
}
new l.Z("UserFlowAnalytics");
let _ = (0, s.Z)((e, t) => ({
  flows: {},
  currentFlow: null,
  activeFlow: () => {
    var e;
    let n = null !== (e = t().currentFlow) && void 0 !== e ? e : a.K.get(c);
    if (null == n) return null;
    let {
      [n]: s
    } = t().flows, l = null != s ? s : u(n);
    return (null == l ? void 0 : l.currentStep) != null ? n : null
  }
}));

function N(e, t) {
  let {
    [e]: n, ...s
  } = _.getState().flows, a = null != n ? n : u(e);
  if ((null == a ? void 0 : a.currentStep) == null || a.currentStep !== t) _.setState({
    flows: {
      ...s,
      [e]: {
        type: e,
        lastStep: null,
        lastTimestamp: null,
        currentStep: t,
        currentTimestamp: new Date,
        skipped: !1
      }
    },
    currentFlow: e
  })
}

function E(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    s = e;
  if (e === r.MK.ANY) {
    var a;
    s = null !== (a = _.getState().activeFlow()) && void 0 !== a ? a : r.MK.UNKNOWN
  }
  let {
    [s]: l, ...i
  } = _.getState().flows, o = null != l ? l : u(s);
  if (null != o && null != o.currentStep && o.currentStep !== t) _.setState({
    flows: {
      ...i,
      [s]: {
        ...o,
        lastStep: o.currentStep,
        lastTimestamp: o.currentTimestamp,
        currentStep: t,
        currentTimestamp: new Date,
        ended: n
      }
    },
    currentFlow: s
  })
}
_.subscribe(e => {
  var t;
  if (null != e) {
    if (! function(e) {
        if (e.type === r.MK.UNKNOWN) return;
        let t = "".concat(d, "-").concat(e.type);
        e.ended ? (a.K.remove(t), a.K.remove(c)) : (a.K.set("".concat(d, "-").concat(e.type), {
          ...e,
          version: 1
        }), a.K.set(c, e.type))
      }(e), i.default.track(o.rMx.NUO_TRANSITION, {
        flow_type: e.type,
        from_step: e.lastStep,
        to_step: e.currentStep,
        seconds_on_from_step: "function" != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
      }, {
        flush: !0
      }), e.ended) {
      let t = {
        ..._.getState().flows
      };
      delete t[e.type], _.setState({
        flows: t,
        currentFlow: null
      })
    }
  }
}, e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0);

function m() {
  return null != _.getState().activeFlow()
}
t.Z = {
  flowStart: N,
  flowStepOrStart: function(e, t) {
    m() ? E(e, t) : N(e, t)
  },
  flowStep: E,
  hasActiveFlow: m
}