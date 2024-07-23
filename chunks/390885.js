var o = n(652874),
  s = n(433517),
  l = n(710845),
  r = n(626135),
  a = n(630724),
  i = n(981631);
let c = 'UserFlowAnalyticsStore_current',
  u = 'UserFlowAnalyticsStore';

function d(e) {
  if (e === a.MK.UNKNOWN)
return null;
  let t = s.K.get(''.concat(u, '-').concat(e));
  if (null == t)
return null;
  let {
version: n,
...o
  } = t;
  return 1 !== n ? null : o;
}
new l.Z('UserFlowAnalytics');
let m = (0, o.Z)((e, t) => ({
  flows: {},
  currentFlow: null,
  activeFlow: () => {
var e;
let n = null !== (e = t().currentFlow) && void 0 !== e ? e : s.K.get(c);
if (null == n)
  return null;
let {
  [n]: o
} = t().flows, l = null != o ? o : d(n);
return (null == l ? void 0 : l.currentStep) != null ? n : null;
  }
}));

function f(e, t) {
  let {
[e]: n,
...o
  } = m.getState().flows, s = null != n ? n : d(e);
  if ((null == s ? void 0 : s.currentStep) == null || s.currentStep !== t)
m.setState({
  flows: {
    ...o,
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
}

function _(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
o = e;
  if (e === a.MK.ANY) {
var s;
o = null !== (s = m.getState().activeFlow()) && void 0 !== s ? s : a.MK.UNKNOWN;
  }
  let {
[o]: l,
...r
  } = m.getState().flows, i = null != l ? l : d(o);
  if (null != i && null != i.currentStep && i.currentStep !== t)
m.setState({
  flows: {
    ...r,
    [o]: {
      ...i,
      lastStep: i.currentStep,
      lastTimestamp: i.currentTimestamp,
      currentStep: t,
      currentTimestamp: new Date(),
      ended: n
    }
  },
  currentFlow: o
});
}
m.subscribe(e => {
  var t;
  if (null != e) {
if (! function(e) {
    if (e.type === a.MK.UNKNOWN)
      return;
    let t = ''.concat(u, '-').concat(e.type);
    e.ended ? (s.K.remove(t), s.K.remove(c)) : (s.K.set(''.concat(u, '-').concat(e.type), {
      ...e,
      version: 1
    }), s.K.set(c, e.type));
  }(e), r.default.track(i.rMx.NUO_TRANSITION, {
    flow_type: e.type,
    from_step: e.lastStep,
    to_step: e.currentStep,
    seconds_on_from_step: 'function' != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1000
  }, {
    flush: !0
  }), e.ended) {
  let t = {
    ...m.getState().flows
  };
  delete t[e.type], m.setState({
    flows: t,
    currentFlow: null
  });
}
  }
}, e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0);

function p() {
  return null != m.getState().activeFlow();
}
t.Z = {
  flowStart: f,
  flowStepOrStart: function(e, t) {
p() ? _(e, t) : f(e, t);
  },
  flowStep: _,
  hasActiveFlow: p
};