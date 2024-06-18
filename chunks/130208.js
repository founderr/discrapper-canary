"use strict";
n.d(t, {
  g: function() {
    return I
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(112456),
  l = n.n(a),
  u = n(481060),
  _ = n(403182),
  c = n(689938),
  d = n(242206);
let E = e => {
    let {
      filename: t
    } = e, r = (0, _.uV)(t), s = n(148660)("./icon-file-".concat(r, ".svg"));
    return (0, i.jsx)("img", {
      className: d.icon,
      src: s,
      alt: c.Z.Messages.IMG_ALT_ATTACHMENT_FILE_TYPE.format({
        fileType: r
      }),
      title: r
    })
  },
  I = e => {
    let {
      className: t,
      filename: n,
      size: r,
      progress: s,
      onCancelUpload: a,
      onClick: _,
      onContextMenu: I
    } = e, T = 100 === s, h = !T && r > 0;
    return (0, i.jsxs)("div", {
      className: o()(d.attachment, t),
      children: [(0, i.jsx)(E, {
        filename: n
      }), (0, i.jsxs)("div", {
        className: d.attachmentInner,
        children: [(0, i.jsxs)("div", {
          className: d.filenameWrapper,
          children: [(0, i.jsx)(u.Clickable, {
            className: d.filename,
            onClick: _,
            onContextMenu: I,
            children: n
          }), h ? (0, i.jsx)("div", {
            className: d.size,
            children: "— ".concat(l().filesize(r))
          }) : null]
        }), (0, i.jsx)("div", {
          className: d.progressContainer,
          children: T ? c.Z.Messages.ATTACHMENT_PROCESSING : (0, i.jsx)(u.Progress, {
            className: d.progress,
            percent: s
          })
        })]
      }), T ? null : (0, i.jsx)(u.Clickable, {
        onClick: a,
        children: (0, i.jsx)(u.CloseSmallIcon, {
          size: "md",
          color: "currentColor",
          className: d.cancelButton
        })
      })]
    })
  };
t.Z = e => {
  let {
    className: t,
    url: n,
    fileName: s,
    fileSize: a,
    onClick: _,
    onContextMenu: c,
    renderAdjacentContent: I
  } = e;
  return (0, i.jsxs)(r.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: o()(d.attachment, d.newMosaicStyle, t),
      children: [(0, i.jsx)(E, {
        filename: s
      }), (0, i.jsxs)("div", {
        className: d.attachmentInner,
        children: [(0, i.jsx)("div", {
          className: d.filenameLinkWrapper,
          children: (0, i.jsx)(u.Anchor, {
            className: d.fileNameLink,
            href: n,
            onClick: _,
            onContextMenu: c,
            children: s
          })
        }), (0, i.jsx)("div", {
          className: d.metadata,
          children: l().filesize(a)
        })]
      })]
    }), null != I && I()]
  })
}