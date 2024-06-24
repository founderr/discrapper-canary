n.d(t, {
  Z: function() {
    return _
  }
}), n(47120);
var r = n(735250),
  u = n(470079),
  l = n(348327),
  a = n.n(l),
  i = n(658722),
  s = n.n(i),
  o = n(442837),
  c = n(481060),
  d = n(492435),
  E = n(353926),
  I = n(499533),
  T = n(689938);

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
      label: I.Z.getExperimentBucketName(e),
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

function _() {
  let e = (0, o.e7)([E.Z, E.Z], () => {
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
    [l, i] = u.useState([]);
  u.useEffect(() => {
    if (0 === t.trim().length) {
      i(e);
      return
    }
    i(e.filter(e => s()(t, e.experiment.title.toLowerCase())))
  }, [e, t]);
  let d = u.useMemo(() => l.filter(e => {
      let {
        currentBucket: t
      } = e;
      return -1 !== t
    }), [l]),
    I = u.useMemo(() => l.filter(e => {
      let {
        currentBucket: t
      } = e;
      return -1 === t
    }), [l]),
    _ = u.useMemo(() => d.map(S), [d]),
    M = u.useMemo(() => I.map(S), [I]);
  return [(0, r.jsx)(c.MenuControlItem, {
    id: "experiments-search",
    control: (e, u) => (0, r.jsx)(c.MenuSearchControl, {
      ...e,
      query: t,
      onChange: n,
      ref: u,
      placeholder: T.Z.Messages.SEARCH
    })
  }, "experiments-search"), (0, r.jsx)(c.MenuSeparator, {}, "separator"), ..._, _.length > 0 ? (0, r.jsx)(c.MenuSeparator, {}, "separator-2") : null, ...M]
}