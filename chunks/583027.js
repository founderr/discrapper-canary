t.d(n, {
  Mo: function() {
return r;
  },
  SC: function() {
return s;
  },
  _U: function() {
return o;
  }
}), t(47120);
var i = t(652874),
  a = t(868888);
let l = (0, i.Z)((0, a.XR)(() => ({
  commandAnalyticsContext: new Map()
})));

function r(e) {
  let {
command: n,
location: t,
sectionName: i
  } = e, {
commandAnalyticsContext: a
  } = l.getState(), r = a.get(n);
  if (null == r || r.location !== t || r.sectionName !== i) {
let e = new Map(a);
e.set(n, {
  location: t,
  sectionName: i
}), l.setState({
  commandAnalyticsContext: e
});
  }
}

function o(e) {
  let {
commandAnalyticsContext: n
  } = l.getState();
  return n.get(e);
}

function s(e) {
  let {
commandAnalyticsContext: n
  } = l.getState();
  if (n.has(e)) {
let t = new Map(n);
t.delete(e), l.setState({
  commandAnalyticsContext: t
});
  }
}