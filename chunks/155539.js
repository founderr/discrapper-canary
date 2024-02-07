"use strict";
t.r(A), t.d(A, {
  AttachmentsUploadComponent: function() {
    return D
  }
}), t("222007");
var a = t("37983"),
  l = t("884691"),
  n = t("414456"),
  s = t.n(n),
  r = t("77078"),
  i = t("160864"),
  o = t("966724"),
  d = t("20606"),
  u = t("191814"),
  c = t("476765"),
  f = t("857171"),
  g = t("945330"),
  C = t("903635"),
  h = t("696104"),
  T = t("949435"),
  m = t("757515"),
  U = t("527382"),
  p = t("500307"),
  I = t("782340"),
  v = t("245793");
let E = (0, c.uid)();

function q(e) {
  var A;
  let {
    upload: t,
    progress: n = 0,
    onDeleteAttachment: i
  } = e, o = l.useCallback(() => {
    null == i || i(t.id)
  }, [i, t.id]), c = n >= 1, f = n < 0, h = c || f, T = null !== (A = t.filename) && void 0 !== A ? A : t.id, U = (0, m.describeUploadProgressError)(n);
  return (0, a.jsx)(r.TooltipContainer, {
    text: U,
    children: (0, a.jsxs)("div", {
      className: s(v.attachedFileCard, {
        [v.attachedFileCardError]: f,
        [v.attachedFileCardUploading]: !h
      }),
      children: [(0, a.jsx)(C.default, {
        width: 16,
        height: 16,
        color: d.default.INTERACTIVE_MUTED
      }), (0, a.jsx)(u.default, {
        size: 10,
        horizontal: !0
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: T
      }), !h && (0, a.jsx)(r.Spinner, {
        className: v.attachedFileCardSpinner,
        type: r.Spinner.Type.SPINNING_CIRCLE
      }), h && null != i && (0, a.jsx)(r.Button, {
        "aria-label": I.default.Messages.GUILD_PRODUCT_DELETE_ATTACHMENT.format({
          attachment: T
        }),
        className: v.deleteButton,
        innerClassName: v.deleteButtonInner,
        look: r.Button.Looks.BLANK,
        size: r.Button.Sizes.NONE,
        onClick: o,
        children: (0, a.jsx)(g.default, {
          width: 12,
          height: 12,
          className: v.deleteIcon
        })
      })]
    })
  })
}

function D(e) {
  let {
    onFileAdded: A
  } = e, {
    uploads: t,
    canAttachFiles: n,
    canAttachArchives: s,
    addAttachment: d,
    deleteAttachment: c,
    fileUploadProgresses: g
  } = (0, T.useGuildProductAttachmentManagerContext)(), C = l.useRef(!1);

  function m(e) {
    try {
      for (let A of e) d({
        platform: o.UploadPlatform.WEB,
        file: A
      });
      C.current = !0
    } catch {}
  }
  return l.useEffect(() => {
    C.current && (A(), C.current = !1)
  }, [A]), (0, a.jsxs)("div", {
    className: v.container,
    children: [(0, a.jsx)(i.default, {
      className: v.uploadArea,
      title: I.default.Messages.GUILD_PRODUCT_UPLOAD_AREA_TITLE,
      description: I.default.Messages.GUILD_PRODUCT_UPLOAD_AREA_INSTRUCTIONS,
      icons: U.DEFAULT_FILE_UPLOAD_ICONS,
      onDrop: m
    }), (0, a.jsxs)(f.default, {
      className: v.addFileButtonLook,
      innerClassName: v.addFileButton,
      color: r.Button.Colors.CUSTOM,
      disabled: !n,
      "aria-label": I.default.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON,
      "aria-describedby": E,
      multiple: !0,
      onChange: function(e) {
        null != e.currentTarget.files && m(e.currentTarget.files)
      },
      children: [(0, a.jsx)(h.default, {
        color: "currentColor",
        width: 16,
        height: 16,
        className: v.addFileButtonIcon,
        "aria-hidden": !0
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: I.default.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON
      })]
    }), (0, a.jsx)(u.default, {
      size: 12
    }), (0, a.jsx)(r.Text, {
      id: E,
      color: "text-muted",
      variant: "text-xs/normal",
      children: s ? I.default.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS_ARCHIVES_ALLOWED.format({
        fileUploadLimit: p.GUILD_PRODUCT_MAX_TOTAL_ATTACHMENT_SIZE
      }) : I.default.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS.format({
        fileUploadLimit: p.GUILD_PRODUCT_MAX_TOTAL_ATTACHMENT_SIZE
      })
    }), t.length > 0 && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: v.separator
      }), (0, a.jsx)("ul", {
        className: v.attachedFilesContainer,
        "aria-label": I.default.Messages.GUILD_PRODUCT_ATTACHED_FILES_SECTION_LABEL,
        children: t.map(e => (0, a.jsx)("li", {
          children: (0, a.jsx)(q, {
            upload: e,
            onDeleteAttachment: c,
            progress: g[e.id]
          })
        }, e.id))
      })]
    })]
  })
}