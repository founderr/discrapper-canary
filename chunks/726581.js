var n = t(735250),
  r = t(470079),
  i = t(120356),
  a = t.n(i),
  l = t(442837),
  o = t(649974),
  c = t(246946),
  u = t(594174),
  I = t(525395),
  T = t(55563),
  d = t(551428),
  _ = t(912739),
  E = t(73346),
  S = t(733789),
  O = t(4962),
  A = t(689938),
  N = t(849454);
class R extends r.Component {
  renderReasons(e, s, t) {
    return 0 === e.length && 0 === s.length ? null : (0, n.jsx)("div", {
      className: N.section,
      children: (0, n.jsxs)("div", {
        className: N.sectionContent,
        children: [e.map(e => (0, n.jsx)("div", {
          className: N.unit,
          children: (0, n.jsx)(S.Z, {
            reason: e,
            hidePersonalInformation: t
          })
        }, e.type)), s.map(e => (0, n.jsx)("div", {
          className: N.unit,
          children: (0, n.jsx)(_.Z, {
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
      type: O.Z.Types.STAFF_NOTES,
      staffNotes: e.staffNotes
    } : null
  }
  render() {
    let {
      socialReasons: e,
      nonSocialReasons: s,
      storeListing: t,
      hidePersonalInformation: r,
      className: i
    } = this.props;
    if (0 === e.length && 0 === s.length && null == t.staffNotes) return null;
    let l = this.getReviewToRender();
    return (0, n.jsxs)("div", {
      className: a()(N.root, i),
      children: [(0, n.jsx)("div", {
        className: N.header,
        children: A.Z.Messages.APPLICATION_STORE_SECTION_TITLE_RECOMMENDATION
      }), this.renderReasons(e, s, r), null != l ? (0, n.jsx)(O.Z, {
        data: l,
        className: N.review
      }) : null]
    })
  }
}
s.Z = l.ZP.connectStores([T.Z, u.default, d.Z, o.Z, I.Z, c.Z], e => {
  let {
    sku: s
  } = e;
  return {
    socialReasons: (0, E.Gg)(s.id, T.Z, u.default, o.Z, I.Z),
    nonSocialReasons: (0, E.Ww)(s.id, T.Z, d.Z),
    hidePersonalInformation: c.Z.hidePersonalInformation
  }
})(R)