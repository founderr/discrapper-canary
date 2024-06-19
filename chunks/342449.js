t.d(n, {
  Z: function() {
    return m
  }
}), t(47120);
var a = t(735250),
  s = t(470079),
  r = t(683860),
  l = t(481060),
  i = t(235449),
  o = t(487894),
  c = t(300234),
  d = t(689938),
  u = t(71672);
let h = new Set;

function m(e) {
  let {
    channel: n,
    startThread: t,
    goToThread: m
  } = e, {
    joinedThreadIds: f,
    unjoinedThreadIds: E
  } = (0, i.FO)(n), {
    threadIds: T,
    canLoadMore: Z,
    loading: I,
    loadMore: x
  } = (0, i.qQ)(n, r.z.LATEST_ACTIVITY, h), _ = s.useRef(null);
  (0, i.r7)();
  let v = s.useCallback(e => {
      let n = 0 === e.section ? f : 1 === e.section ? E : T;
      return (0, a.jsx)(c.Z, {
        threadId: n[e.row],
        goToThread: m
      }, "".concat(e.section, "-").concat(e.row))
    }, [T, f, E, m]),
    N = s.useCallback(e => 0 === e.section ? (0, a.jsx)(g, {
      text: d.Z.Messages.THREAD_BROWSER_JOINED_HEADER.format({
        count: f.length
      })
    }, e.section) : 1 === e.section ? (0, a.jsx)(g, {
      text: d.Z.Messages.THREAD_BROWSER_OTHER_HEADER.format({
        count: E.length
      })
    }, e.section) : (0, a.jsx)(g, {
      text: d.Z.Messages.THREAD_BROWSER_ARCHIVED_HEADER
    }, e.section), [f.length, E.length]),
    R = s.useCallback(e => 1 === e && f.length > 0 ? 64 : 2 === e && (f.length > 0 || E.length > 0) ? 64 : 32, [f.length, E.length]),
    S = s.useCallback(() => {
      var e;
      let n = null === (e = _.current) || void 0 === e ? void 0 : e.getScrollerState();
      if (null == n) return;
      let t = n.scrollTop + n.offsetHeight;
      n.scrollHeight - t < 200 && x()
    }, [x]);
  if (0 === f.length && 0 === E.length && 0 === T.length) return I ? (0, a.jsx)("div", {
    className: u.list,
    children: (0, a.jsx)(l.Spinner, {
      className: u.spinner
    })
  }) : (0, a.jsx)("div", {
    className: u.list,
    children: (0, a.jsx)(o.Z, {
      channel: n,
      header: d.Z.Messages.THREAD_BROWSER_EMPTY_STATE_HEADER,
      startThread: t
    })
  });
  return (0, a.jsx)(l.List, {
    ref: _,
    className: u.list,
    fade: !0,
    sections: [f.length, E.length, T.length],
    sectionHeight: R,
    rowHeight: 80,
    renderRow: v,
    renderSection: N,
    chunkSize: 20,
    onScroll: Z ? S : void 0
  })
}

function g(e) {
  let {
    text: n
  } = e;
  return (0, a.jsx)(l.Text, {
    color: "header-secondary",
    variant: "text-xs/bold",
    className: u.sectionHeader,
    children: n
  })
}