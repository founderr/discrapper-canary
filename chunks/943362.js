"use strict";
n.d(t, {
  Z: function() {
    return h
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(239091),
  l = n(782568),
  u = n(364640),
  _ = n(124072),
  c = n(198620),
  d = n(746878),
  E = n(981631),
  I = n(261805),
  T = n(345116);

function h(e) {
  return {
    react(t, r, h) {
      let S = h.noStyleAndInteraction ? void 0 : async n => {
        let i = await (0, c.B_)(t.attachmentUrl);
        e.shouldStopPropagation && (null == n || n.stopPropagation()), u.Z.trackLinkClicked(i), e.shouldCloseDefaultModals && (0, o.closeAllModals)(), (0, l.Z)(i)
      }, f = h.noStyleAndInteraction ? E.dG4 : e => {
        (0, a.jW)(e, async () => {
          let {
            default: e
          } = await n.e("98466").then(n.bind(n, 151578));
          return n => (0, i.jsx)(e, {
            ...n,
            attachmentUrl: t.attachmentUrl,
            attachmentName: t.attachmentName
          })
        })
      };
      return (0, i.jsxs)(_.Z, {
        role: "link",
        href: t.attachmentUrl,
        onClick: S,
        onContextMenu: f,
        className: "attachmentLink",
        children: [(0, i.jsx)(o.AttachmentIcon, {
          size: "xs",
          className: s()(T.icon, I.icon),
          color: o.tokens.colors.MENTION_FOREGROUND
        }), (0, d.S)(t, r, h)]
      }, h.key)
    }
  }
}