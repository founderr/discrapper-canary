"use strict";
s.r(t);
var a = s("652874"),
  n = s("433517"),
  l = s("710845"),
  i = s("626135"),
  r = s("630724"),
  o = s("981631");
let c = "UserFlowAnalyticsStore_current",
  d = "UserFlowAnalyticsStore";

function u(e) {
  if (e === r.FlowType.UNKNOWN) return null;
  let t = n.Storage.get("".concat(d, "-").concat(e));
  if (null == t) return null;
  let {
    version: s,
    ...a
  } = t;
  return 1 !== s ? null : a
}
new l.default("UserFlowAnalytics");
let _ = (0, a.default)((e, t) => ({
  flows: {},
  currentFlow: null,
  activeFlow: () => {
    var e;
    let s = null !== (e = t().currentFlow) && void 0 !== e ? e : n.Storage.get(c);
    if (null == s) return null;
    let {
      [s]: a
    } = t().flows, l = null != a ? a : u(s);
    return (null == l ? void 0 : l.currentStep) != null ? s : null
  }
}));

function N(e, t) {
  let {
    [e]: s, ...a
  } = _.getState().flows, n = null != s ? s : u(e);
  if ((null == n ? void 0 : n.currentStep) == null || n.currentStep !== t) _.setState({
    flows: {
      ...a,
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
  let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    a = e;
  if (e === r.FlowType.ANY) {
    var n;
    a = null !== (n = _.getState().activeFlow()) && void 0 !== n ? n : r.FlowType.UNKNOWN
  }
  let {
    [a]: l, ...i
  } = _.getState().flows, o = null != l ? l : u(a);
  if (null != o && null != o.currentStep) o.currentStep !== t && _.setState({
    flows: {
      ...i,
      [a]: {
        ...o,
        lastStep: o.currentStep,
        lastTimestamp: o.currentTimestamp,
        currentStep: t,
        currentTimestamp: new Date,
        ended: s
      }
    },
    currentFlow: a
  })
}
_.subscribe(e => {
  var t;
  if (null != e && (! function(e) {
      if (e.type === r.FlowType.UNKNOWN) return;
      let t = "".concat(d, "-").concat(e.type);
      e.ended ? (n.Storage.remove(t), n.Storage.remove(c)) : (n.Storage.set("".concat(d, "-").concat(e.type), {
        ...e,
        version: 1
      }), n.Storage.set(c, e.type))
    }(e), i.default.track(o.AnalyticEvents.NUO_TRANSITION, {
      flow_type: e.type,
      from_step: e.lastStep,
      to_step: e.currentStep,
      seconds_on_from_step: "function" != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
    }, {
      flush: !0
    }), e.ended)) {
    let t = {
      ..._.getState().flows
    };
    delete t[e.type], _.setState({
      flows: t,
      currentFlow: null
    })
  }
}, e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0);

function m() {
  return null != _.getState().activeFlow()
}
t.default = {
  flowStart: N,
  flowStepOrStart: function(e, t) {
    m() ? E(e, t) : N(e, t)
  },
  flowStep: E,
  hasActiveFlow: m
}