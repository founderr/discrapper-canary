t.r(n), t.d(n, {
  default: function() {
    return E
  }
}), t(47120);
var a = t(735250),
  s = t(470079),
  l = t(481060),
  r = t(332664),
  i = t(153124),
  o = t(429506),
  c = t(981631),
  d = t(531578),
  u = t(689938),
  m = t(366588);
let x = [{
  className: m.emojiThumbsUp,
  rating: d.aZ.GOOD,
  classNameSelected: m.selected
}, {
  className: m.emojiThumbsDown,
  rating: d.aZ.BAD,
  classNameSelected: m.selected
}];

function E(e) {
  let [n, d] = s.useState(null), E = (0, i.Dt)();
  return (0, a.jsxs)(l.ModalRoot, {
    transitionState: e.transitionState,
    "aria-labelledby": E,
    children: [(0, a.jsxs)(l.ModalHeader, {
      separator: !1,
      className: m.headerContainer,
      children: [(0, a.jsx)(l.Heading, {
        id: E,
        variant: "heading-xl/extrabold",
        color: "none",
        children: u.Z.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_PROMPT
      }), (0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        className: m.ratingBody,
        children: u.Z.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_SUBHEADER
      })]
    }), (0, a.jsx)(l.ModalContent, {
      className: m.modalBody,
      children: (0, a.jsx)(r.L, {
        ratingConfigs: x,
        className: m.ratingsSelector,
        selectedRating: n,
        onChangeRating: function(n) {
          d(n), ! function(n) {
            if (null != n)(0, o.Z)({
              rating: n
            }), e.onClose(), (0, l.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([t.e("99387"), t.e("14466")]).then(t.bind(t, 729328));
              return n => (0, a.jsx)(e, {
                body: u.Z.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_CONFIRMATION,
                ...n
              })
            })
          }(n)
        }
      })
    }), (0, a.jsx)(l.ModalFooter, {
      className: m.ratingsFooter,
      children: (0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        children: u.Z.Messages.SAFETY_USER_SENTIMENT_FOOTER.format({
          safetyCenterUrl: c.EYA.SAFETY_CENTER
        })
      })
    })]
  })
}