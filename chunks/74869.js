n.d(t, {
  Z: function() {
    return T
  }
}), n(47120);
var r = n(735250),
  u = n(470079),
  s = n(348327),
  a = n.n(s),
  o = n(658722),
  i = n.n(o),
  l = n(442837),
  c = n(481060),
  d = n(492435),
  E = n(353926),
  M = n(499533),
  I = n(689938);

function S(e) {
  let {
    id: t,
    experiment: n,
    currentBucket: u
  } = e;
  return (0, r.jsxs)(c.MenuItem, {
    id: t,
    label: n.title,
    action: () => (0, d.rX)(t, null),
    children: [n.buckets.map(e => (0, r.jsx)(c.MenuCheckboxItem, {
      id: "".concat(e),
      label: M.Z.getExperimentBucketName(e),
      checked: e === u,
      action: () => (0, d.rX)(t, e)
    }, "".concat(e))), (0, r.jsx)(c.MenuGroup, {
      children: -1 !== u && (0, r.jsx)(c.MenuItem, {
        id: "clear-override",
        label: "Clear Override",
        color: "danger",
        icon: c.TrashIcon,
        action: () => (0, d.rX)(t, null)
      })
    })]
  }, t)
}

function T() {
  let e = (0, l.e7)([E.Z, E.Z], () => {
      let e = E.Z.getRegisteredExperiments();
      return Object.keys(e).map(t => {
        let n = e[t],
          r = E.Z.getExperimentOverrideDescriptor(t);
        return {
          id: t,
          experiment: n,
          currentBucket: null != r ? r.bucket : -1
        }
      })
    }, [], a()),
    [t, n] = u.useState(""),
    [s, o] = u.useState([]);
  u.useEffect(() => {
    if (0 === t.trim().length) {
      o(e);
      return
    }
    o(e.filter(e => i()(t, e.experiment.title.toLowerCase())))
  }, [e, t]);
  let d = u.useMemo(() => s.filter(e => {
      let {
        currentBucket: t
      } = e;
      return -1 !== t
    }), [s]),
    M = u.useMemo(() => s.filter(e => {
      let {
        currentBucket: t
      } = e;
      return -1 === t
    }), [s]),
    T = u.useMemo(() => d.map(S), [d]),
    m = u.useMemo(() => M.map(S), [M]);
  return [(0, r.jsx)(c.MenuControlItem, {
    id: "experiments-search",
    control: (e, u) => (0, r.jsx)(c.MenuSearchControl, {
      ...e,
      query: t,
      onChange: n,
      ref: u,
      placeholder: I.Z.Messages.SEARCH
    })
  }, "experiments-search"), (0, r.jsx)(c.MenuSeparator, {}, "separator"), ...T, T.length > 0 ? (0, r.jsx)(c.MenuSeparator, {}, "separator-2") : null, ...m]
}