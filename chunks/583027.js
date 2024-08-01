t.d(n, {
  Mo: function() {
return o;
  },
  SC: function() {
return s;
  },
  _U: function() {
return r;
  }
}), t(47120);
var i = t(652874),
  a = t(868888);
let l = (0, i.Z)((0, a.XR)(() => ({
  commandAnalyticsContext: new Map()
})));

function o(e) {
  let {
command: n,
location: t,
sectionName: i
  } = e, {
commandAnalyticsContext: a
  } = l.getState(), o = a.get(n);
  if (null == o || o.location !== t || o.sectionName !== i) {
let e = new Map(a);
e.set(n, {
  location: t,
  sectionName: i
}), l.setState({
  commandAnalyticsContext: e
});
  }
}

function r(e) {
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