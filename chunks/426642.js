"use strict";
t.d(s, {
  d: function() {
    return i
  }
});
var n, i, l = t(735250);
t(470079);
var a = t(692547),
  r = t(481060),
  o = t(752657),
  c = t(689938),
  d = t(738714);
(n = i || (i = {}))[n.TOO_BIG = 0] = "TOO_BIG", n[n.RATE_LIMIT = 1] = "RATE_LIMIT", n[n.TOO_MANY_EMOJI = 2] = "TOO_MANY_EMOJI", n[n.TOO_MANY_ANIMATED_EMOJI = 3] = "TOO_MANY_ANIMATED_EMOJI", n[n.WRONG_TYPE = 4] = "WRONG_TYPE", n[n.RESIZE_GIF = 5] = "RESIZE_GIF";
s.Z = e => {
  let {
    error: s
  } = e, {
    type: t,
    filename: n
  } = s, {
    icon: i,
    description: u,
    color: E,
    tooltip: _
  } = {
    0: {
      icon: r.FileWarningIcon,
      description: c.Z.Messages.UPLOAD_ERROR_TOO_LARGE,
      color: a.Z.unsafe_rawColors.RED_400.css,
      tooltip: c.Z.Messages.UPLOAD_ERROR_TITLE
    },
    4: {
      icon: r.FileDenyIcon,
      description: c.Z.Messages.UPLOAD_ERROR_WRONG_TYPE,
      color: a.Z.unsafe_rawColors.RED_400.css,
      tooltip: c.Z.Messages.UPLOAD_ERROR_TITLE
    },
    5: {
      icon: o.Z,
      description: c.Z.Messages.UPLOAD_ERROR_RESIZE_GIF,
      color: a.Z.unsafe_rawColors.RED_400.css,
      tooltip: c.Z.Messages.UPLOAD_ERROR_TITLE
    },
    1: {
      icon: r.OdometerIcon,
      description: c.Z.Messages.UPLOAD_ERROR_RATE_LIMIT,
      color: a.Z.unsafe_rawColors.ORANGE_345.css,
      tooltip: c.Z.Messages.UPLOAD_ERROR_RETRY
    },
    2: {
      icon: r.CircleInformationIcon,
      description: c.Z.Messages.UPLOAD_ERROR_TOO_MANY_EMOJI,
      color: a.Z.unsafe_rawColors.RED_400.css,
      tooltip: c.Z.Messages.UPLOAD_ERROR_TITLE
    },
    3: {
      icon: r.CircleInformationIcon,
      description: c.Z.Messages.UPLOAD_ERROR_TOO_MANY_ANIMATED_EMOJI,
      color: a.Z.unsafe_rawColors.RED_400.css,
      tooltip: c.Z.Messages.UPLOAD_ERROR_TITLE
    }
  } [t];
  return (0, l.jsxs)("div", {
    className: d.emojiErrorItem,
    children: [(0, l.jsx)(i, {
      className: d.fileIcon,
      color: a.Z.unsafe_rawColors.PRIMARY_300.css
    }), (0, l.jsxs)(r.FormSection, {
      className: d.fileInfo,
      children: [(0, l.jsx)(r.FormTitle, {
        className: d.fileName,
        children: n
      }), (0, l.jsx)(r.FormText, {
        type: r.FormTextTypes.DESCRIPTION,
        children: u
      })]
    }), (0, l.jsx)(r.TooltipContainer, {
      position: "right",
      text: _,
      children: (0, l.jsx)(r.CircleExclamationPointIcon, {
        size: "custom",
        width: 20,
        height: 20,
        color: E
      })
    })]
  })
}