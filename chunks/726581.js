var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(442837),
  o = n(649974),
  c = n(246946),
  u = n(594174),
  d = n(525395),
  E = n(55563),
  h = n(551428),
  _ = n(912739),
  I = n(73346),
  m = n(733789),
  T = n(4962),
  g = n(689938),
  p = n(849454);
class N extends i.Component {
  renderReasons(e, t, n) {
    return 0 === e.length && 0 === t.length ? null : (0, s.jsx)("div", {
      className: p.section,
      children: (0, s.jsxs)("div", {
        className: p.sectionContent,
        children: [e.map(e => (0, s.jsx)("div", {
          className: p.unit,
          children: (0, s.jsx)(m.Z, {
            reason: e,
            hidePersonalInformation: n
          })
        }, e.type)), t.map(e => (0, s.jsx)("div", {
          className: p.unit,
          children: (0, s.jsx)(_.Z, {
            reason: e
          })
        }, e.type))]
      })
    })
  }
  getReviewToRender() {
    let {
      storeListing: e
    } = this.props;
    return null != e.staffNotes ? {
      type: T.Z.Types.STAFF_NOTES,
      staffNotes: e.staffNotes
    } : null
  }
  render() {
    let {
      socialReasons: e,
      nonSocialReasons: t,
      storeListing: n,
      hidePersonalInformation: i,
      className: l
    } = this.props;
    if (0 === e.length && 0 === t.length && null == n.staffNotes) return null;
    let r = this.getReviewToRender();
    return (0, s.jsxs)("div", {
      className: a()(p.root, l),
      children: [(0, s.jsx)("div", {
        className: p.header,
        children: g.Z.Messages.APPLICATION_STORE_SECTION_TITLE_RECOMMENDATION
      }), this.renderReasons(e, t, i), null != r ? (0, s.jsx)(T.Z, {
        data: r,
        className: p.review
      }) : null]
    })
  }
}
t.Z = r.ZP.connectStores([E.Z, u.default, h.Z, o.Z, d.Z, c.Z], e => {
  let {
    sku: t
  } = e;
  return {
    socialReasons: (0, I.Gg)(t.id, E.Z, u.default, o.Z, d.Z),
    nonSocialReasons: (0, I.Ww)(t.id, E.Z, h.Z),
    hidePersonalInformation: c.Z.hidePersonalInformation
  }
})(N)