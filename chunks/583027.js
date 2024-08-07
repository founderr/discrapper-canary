t.d(n, {
  Mo: function() {
return o;
  },
  SC: function() {
return c;
  },
  _U: function() {
return s;
  }
}), t(47120);
var i = t(652874),
  a = t(868888),
  l = t(731965);
let r = (0, i.Z)((0, a.XR)(() => ({
  commandAnalyticsContext: new Map()
})));

function o(e) {
  let {
command: n,
location: t,
sectionName: i
  } = e, {
commandAnalyticsContext: a
  } = r.getState(), o = a.get(n);
  if (null == o || o.location !== t || o.sectionName !== i) {
let e = new Map(a);
e.set(n, {
  location: t,
  sectionName: i
}), (0, l.j)(() => r.setState({
  commandAnalyticsContext: e
}));
  }
}

function s(e) {
  let {
commandAnalyticsContext: n
  } = r.getState();
  return n.get(e);
}

function c(e) {
  let {
commandAnalyticsContext: n
  } = r.getState();
  if (n.has(e)) {
let t = new Map(n);
t.delete(e), (0, l.j)(() => r.setState({
  commandAnalyticsContext: t
}));
  }
}