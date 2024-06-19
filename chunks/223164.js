s.r(a), s.d(a, {
  default: function() {
    return C
  }
});
var n = s(735250),
  t = s(470079),
  o = s(120356),
  r = s.n(o),
  i = s(481060),
  l = s(454585),
  c = s(153124),
  d = s(585483),
  h = s(981631),
  u = s(689938),
  p = s(796300),
  x = s(622322);

function C(e) {
  let {
    channel: a,
    isFromComposer: s,
    transitionState: o,
    onClose: C
  } = e, M = (0, c.Dt)();
  return t.useEffect(() => () => {
    s && d.S.dispatch(h.CkL.FOCUS_COMPOSER_TITLE)
  }, [s]), (0, n.jsxs)(i.ModalRoot, {
    transitionState: o,
    "aria-labelledby": M,
    size: i.ModalSize.DYNAMIC,
    className: p.container,
    children: [(0, n.jsxs)(i.ModalHeader, {
      className: p.header,
      separator: !1,
      children: [(0, n.jsx)(i.BookCheckIcon, {
        size: "custom",
        color: "currentColor",
        className: p.rulesIcon,
        width: 24,
        height: 24
      }), (0, n.jsx)(i.Heading, {
        variant: "heading-lg/extrabold",
        children: u.Z.Messages.FORUM_POST_GUIDELINES_TITLE
      })]
    }), (0, n.jsx)(i.ModalContent, {
      children: (0, n.jsx)(i.Text, {
        className: r()(p.content, x.markup),
        variant: "text-sm/normal",
        color: "header-secondary",
        children: (0, n.jsx)("div", {
          children: l.Z.parseForumPostGuidelines(a.topic, !0, {
            channelId: a.id,
            allowHeading: !0,
            allowList: !0
          })
        })
      })
    }), (0, n.jsx)(i.ModalFooter, {
      children: (0, n.jsx)(i.Button, {
        onClick: C,
        children: u.Z.Messages.GOT_IT
      })
    })]
  })
}