t(411104);
var n, r, i = t(735250);
t(470079);
var a = t(120356),
  l = t.n(a),
  o = t(442837),
  c = t(481060),
  u = t(700582),
  I = t(451478),
  T = t(689938),
  d = t(379555);
(r = n || (n = {}))[r.STAFF_NOTES = 1] = "STAFF_NOTES";
let _ = o.ZP.connectStores([I.Z], () => ({
    animate: I.Z.isFocused()
  }))(e => {
    let {
      user: s,
      className: t,
      animate: n
    } = e;
    return (0, i.jsxs)("div", {
      className: l()(d.staffReviewHeader, t),
      children: [(0, i.jsx)(u.Z, {
        size: c.AvatarSizes.SIZE_32,
        user: s,
        animate: n
      }), (0, i.jsxs)("div", {
        className: d.headerText,
        children: [(0, i.jsx)("div", {
          className: d.label,
          children: T.Z.Messages.APPLICATION_STORE_STAFF_PICK
        }), (0, i.jsx)("div", {
          className: d.username,
          children: s.username
        })]
      })]
    })
  }),
  E = e => {
    let {
      data: s,
      className: t
    } = e;
    if (1 === s.type) {
      if (null == s.staffNotes) return null;
      let {
        user: e,
        content: n
      } = s.staffNotes;
      return null == e ? null : (0, i.jsxs)("div", {
        className: t,
        children: [(0, i.jsx)(_, {
          user: e,
          className: d.header
        }), (0, i.jsx)("div", {
          className: d.notes,
          children: n
        })]
      })
    }
    throw Error("Unknown type")
  };
E.Types = n, s.Z = E