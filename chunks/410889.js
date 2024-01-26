"use strict";
n.r(t), n.d(t, {
  AttachmentUpload: function() {
    return p
  },
  default: function() {
    return g
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("477850"),
  o = n.n(r),
  u = n("77078"),
  d = n("254490"),
  c = n("945330"),
  f = n("782340"),
  m = n("713351");
let h = e => {
    let {
      filename: t
    } = e, a = (0, d.classifyFileName)(t), s = n("777483")("../images/file_icons/icon-file-".concat(a, ".svg").replace("../images/file_icons/", "./"));
    return (0, l.jsx)("img", {
      className: m.icon,
      src: s,
      alt: f.default.Messages.IMG_ALT_ATTACHMENT_FILE_TYPE.format({
        fileType: a
      }),
      title: a
    })
  },
  p = e => {
    let {
      className: t,
      filename: n,
      size: a,
      progress: s,
      onCancelUpload: r,
      onClick: d,
      onContextMenu: p
    } = e, g = 100 === s, E = !g && a > 0;
    return (0, l.jsxs)("div", {
      className: i(m.attachment, t),
      children: [(0, l.jsx)(h, {
        filename: n
      }), (0, l.jsxs)("div", {
        className: m.attachmentInner,
        children: [(0, l.jsxs)("div", {
          className: m.filenameWrapper,
          children: [(0, l.jsx)(u.Clickable, {
            className: m.filename,
            onClick: d,
            onContextMenu: p,
            children: n
          }), E ? (0, l.jsx)("div", {
            className: m.size,
            children: "— ".concat(o.filesize(a))
          }) : null]
        }), (0, l.jsx)("div", {
          className: m.progressContainer,
          children: g ? f.default.Messages.ATTACHMENT_PROCESSING : (0, l.jsx)(u.Progress, {
            className: m.progress,
            percent: s
          })
        })]
      }), g ? null : (0, l.jsx)(u.Clickable, {
        onClick: r,
        children: (0, l.jsx)(c.default, {
          className: m.cancelButton,
          width: 24,
          height: 24
        })
      })]
    })
  };
var g = e => {
  let {
    className: t,
    url: n,
    filename: s,
    size: r,
    onClick: d,
    onContextMenu: c,
    renderAdjacentContent: f
  } = e;
  return (0, l.jsxs)(a.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: i(m.attachment, m.newMosaicStyle, t),
      children: [(0, l.jsx)(h, {
        filename: s
      }), (0, l.jsxs)("div", {
        className: m.attachmentInner,
        children: [(0, l.jsx)("div", {
          className: m.filenameLinkWrapper,
          children: (0, l.jsx)(u.Anchor, {
            className: m.fileNameLink,
            href: n,
            onClick: d,
            onContextMenu: c,
            children: s
          })
        }), (0, l.jsx)("div", {
          className: m.metadata,
          children: o.filesize(r)
        })]
      })]
    }), null != f && f()]
  })
}