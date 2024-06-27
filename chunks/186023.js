"use strict";
n(47120), n(653041);
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(367907),
  a = n(153124),
  l = n(82554),
  u = n(185625),
  _ = n(255514),
  c = n(981631),
  d = n(875081);
t.Z = e => {
  let {
    reportType: t,
    menu: n,
    modalProps: E,
    onSubmit: I,
    onNavigate: T,
    emailToken: h,
    isAuthenticated: f = !0
  } = e, S = (0, a.Dt)(), {
    nodes: A,
    root_node_id: N,
    success_node_id: m,
    fail_node_id: O
  } = n, [R, p] = r.useState(N), [g, C] = r.useState(void 0), [v, L] = r.useState(void 0), [D, M] = r.useState([]), [P, y] = r.useState(void 0), U = e => {
    var n;
    let {
      destination: i
    } = e, [, r] = i, s = A[r];
    if (s.elements.some(e => "skip" === e.type) && (null === (n = s.button) || void 0 === n ? void 0 : n.type) === "next") return U({
      ...e,
      destination: ["", s.button.target]
    });
    if (M([...D, e]), null != s.key && (null == T || T(s.key)), C(void 0), L(void 0), t.name === l.b.MESSAGE || t.name === l.b.FIRST_DM) {
      let e = t.record.id;
      o.ZP.trackWithMetadata(c.rMx.IAR_NAVIGATE, {
        message_id: e,
        content_type: t.name,
        report_sub_type: s.report_type,
        current_node: A[R].id,
        next_node: s.id
      })
    }
    p(r)
  }, b = async e => {
    var i;
    let r = f ? await (0, u.ZD)(n, t, [...D, e]) : await (0, u.fw)(n, t, [...D, e], h),
      s = null == r ? void 0 : null === (i = r.body) || void 0 === i ? void 0 : i.report_id;
    null != s && y(s), null == I || I(s)
  }, G = () => {
    var e, n;
    if (D.length < 1) return;
    let i = [...D],
      r = i.pop(),
      s = null !== (n = null == r ? void 0 : r.nodeRef) && void 0 !== n ? n : N;
    if (t.name === l.b.MESSAGE || t.name === l.b.FIRST_DM) {
      let e = t.record.id;
      o.ZP.trackWithMetadata(c.rMx.IAR_NAVIGATE, {
        message_id: e,
        content_type: t.name,
        report_sub_type: A[s].report_type,
        current_node: A[R].id,
        next_node: A[s].id
      })
    }
    C(null == r ? void 0 : null === (e = r.multiSelect) || void 0 === e ? void 0 : e.state), L(null == r ? void 0 : r.textInput), p(s), M(i), null == T || T("..")
  }, w = [], B = [];
  for (let e in A) {
    var x, k;
    let t = A[e];
    if (t.id !== m && t.id !== O && t.id !== N) {
      if (t.key.endsWith("_SUBMIT")) {
        B.push(t);
        continue
      }
      if (w.push(t), (null === (x = t.button) || void 0 === x ? void 0 : x.type) === "next") {
        let e = null === (k = t.button) || void 0 === k ? void 0 : k.target,
          n = w.indexOf(A[e]); - 1 !== n && (w.splice(n, 1), w.push(A[e]))
      }
    }
  }
  let V = [A[N], ...w, ...B, A[m], A[O]];
  return (0, i.jsx)(s.ModalRoot, {
    transitionState: E.transitionState,
    "aria-labelledby": S,
    children: (0, i.jsx)(s.Slides, {
      width: 440,
      activeSlide: R,
      centered: !1,
      children: V.map(e => (0, i.jsx)(s.Slide, {
        id: e.id,
        children: (0, i.jsx)("div", {
          className: d.slideContainer,
          children: (0, i.jsx)(_.Z, {
            node: e,
            reportType: t,
            history: D,
            onModalClose: E.onClose,
            onSelectChild: U,
            onNavigateBack: G,
            multiSelect: g,
            textInput: v,
            successNodeId: m,
            failNodeId: O,
            onSubmit: b,
            reportId: P
          })
        })
      }, e.id))
    })
  })
}