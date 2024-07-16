n.d(t, {
  Ez: function() {
return _;
  },
  Ps: function() {
return o;
  },
  Xo: function() {
return c;
  },
  dT: function() {
return u;
  },
  dw: function() {
return l;
  },
  k$: function() {
return d;
  }
}), n(47120);
var r = n(652874),
  i = n(990547);
let a = Object.freeze({
debugTrackedData: null,
impressions: []
  }),
  s = (0, r.Z)(e => a),
  o = e => {
s.setState(t => ({
  impressions: [
    ...t.impressions,
    e
  ]
}));
  },
  l = e => {
s.setState(t => ({
  impressions: t.impressions.filter(t => t.sequenceId !== e.sequenceId)
}));
  },
  u = (e, t) => {
s.setState(() => ({
  debugTrackedData: {
    name: e,
    ...t
  }
}));
  },
  c = s;

function d() {
  let e = {};
  return s.getState().impressions.forEach(t => {
t.type === i.ImpressionTypes.PAGE ? e.page = t.name : e.section = t.name;
  }), e;
}

function _() {
  return s.getState().impressions;
}