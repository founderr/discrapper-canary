n(411104);
var s, i, l = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  o = n(442837),
  c = n(481060),
  u = n(700582),
  d = n(451478),
  E = n(689938),
  h = n(379555);
(i = s || (s = {}))[i.STAFF_NOTES = 1] = "STAFF_NOTES";
let _ = o.ZP.connectStores([d.Z], () => ({
    animate: d.Z.isFocused()
  }))(e => {
    let {
      user: t,
      className: n,
      animate: s
    } = e;
    return (0, l.jsxs)("div", {
      className: r()(h.staffReviewHeader, n),
      children: [(0, l.jsx)(u.Z, {
        size: c.AvatarSizes.SIZE_32,
        user: t,
        animate: s
      }), (0, l.jsxs)("div", {
        className: h.headerText,
        children: [(0, l.jsx)("div", {
          className: h.label,
          children: E.Z.Messages.APPLICATION_STORE_STAFF_PICK
        }), (0, l.jsx)("div", {
          className: h.username,
          children: t.username
        })]
      })]
    })
  }),
  I = e => {
    let {
      data: t,
      className: n
    } = e;
    if (1 === t.type) {
      if (null == t.staffNotes) return null;
      let {
        user: e,
        content: s
      } = t.staffNotes;
      return null == e ? null : (0, l.jsxs)("div", {
        className: n,
        children: [(0, l.jsx)(_, {
          user: e,
          className: h.header
        }), (0, l.jsx)("div", {
          className: h.notes,
          children: s
        })]
      })
    }
    throw Error("Unknown type")
  };
I.Types = s, t.Z = I