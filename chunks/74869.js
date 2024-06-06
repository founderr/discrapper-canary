"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("47120");
var u = n("735250"),
  r = n("470079"),
  a = n("348327"),
  s = n.n(a),
  l = n("658722"),
  i = n.n(l),
  o = n("442837"),
  d = n("481060"),
  c = n("492435"),
  f = n("353926"),
  S = n("740727"),
  E = n("499533"),
  M = n("689938");

function T(e) {
  let {
    id: t,
    experiment: n,
    currentBucket: r
  } = e;
  return (0, u.jsxs)(d.MenuItem, {
    id: t,
    label: n.title,
    action: () => (0, c.overrideBucket)(t, null),
    children: [n.buckets.map(e => (0, u.jsx)(d.MenuCheckboxItem, {
      id: "".concat(e),
      label: E.default.getExperimentBucketName(e),
      checked: e === r,
      action: () => (0, c.overrideBucket)(t, e)
    }, "".concat(e))), (0, u.jsx)(d.MenuGroup, {
      children: -1 !== r && (0, u.jsx)(d.MenuItem, {
        id: "clear-override",
        label: "Clear Override",
        color: "danger",
        icon: S.default,
        action: () => (0, c.overrideBucket)(t, null)
      })
    })]
  }, t)
}

function m() {
  let e = (0, o.useStateFromStores)([f.default, f.default], () => {
      let e = f.default.getRegisteredExperiments();
      return Object.keys(e).map(t => {
        let n = e[t],
          u = f.default.getExperimentOverrideDescriptor(t);
        return {
          id: t,
          experiment: n,
          currentBucket: null != u ? u.bucket : -1
        }
      })
    }, [], s()),
    [t, n] = r.useState(""),
    [a, l] = r.useState([]);
  r.useEffect(() => {
    if (0 === t.trim().length) {
      l(e);
      return
    }
    l(e.filter(e => i()(t, e.experiment.title.toLowerCase())))
  }, [e, t]);
  let c = r.useMemo(() => a.filter(e => {
      let {
        currentBucket: t
      } = e;
      return -1 !== t
    }), [a]),
    S = r.useMemo(() => a.filter(e => {
      let {
        currentBucket: t
      } = e;
      return -1 === t
    }), [a]),
    E = r.useMemo(() => c.map(T), [c]),
    m = r.useMemo(() => S.map(T), [S]);
  return [(0, u.jsx)(d.MenuControlItem, {
    id: "experiments-search",
    control: (e, r) => (0, u.jsx)(d.MenuSearchControl, {
      ...e,
      query: t,
      onChange: n,
      ref: r,
      placeholder: M.default.Messages.SEARCH
    })
  }, "experiments-search"), (0, u.jsx)(d.MenuSeparator, {}, "separator"), ...E, E.length > 0 ? (0, u.jsx)(d.MenuSeparator, {}, "separator-2") : null, ...m]
}