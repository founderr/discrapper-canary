"use strict";
t.r(A), t.d(A, {
  AttachmentsUploadComponent: function() {
    return N
  }
}), t("47120");
var a = t("735250"),
  l = t("470079"),
  s = t("120356"),
  n = t.n(s),
  r = t("481060"),
  o = t("205822"),
  i = t("476326"),
  d = t("377171"),
  u = t("682864"),
  c = t("153124"),
  C = t("350722"),
  f = t("465670"),
  g = t("210712"),
  T = t("43632"),
  U = t("587123"),
  h = t("863663"),
  m = t("731994"),
  I = t("629481"),
  v = t("689938"),
  p = t("209021");
let E = (0, c.uid)();

function q(e) {
  var A;
  let {
    upload: t,
    progress: s = 0,
    onDeleteAttachment: o
  } = e, i = l.useCallback(() => {
    null == o || o(t.id)
  }, [o, t.id]), c = s >= 1, C = s < 0, T = c || C, U = null !== (A = t.filename) && void 0 !== A ? A : t.id, m = (0, h.describeUploadProgressError)(s);
  return (0, a.jsx)(r.TooltipContainer, {
    text: m,
    children: (0, a.jsxs)("div", {
      className: n()(p.attachedFileCard, {
        [p.attachedFileCardError]: C,
        [p.attachedFileCardUploading]: !T
      }),
      children: [(0, a.jsx)(g.default, {
        width: 16,
        height: 16,
        color: d.default.INTERACTIVE_MUTED
      }), (0, a.jsx)(u.default, {
        size: 10,
        horizontal: !0
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: U
      }), !T && (0, a.jsx)(r.Spinner, {
        className: p.attachedFileCardSpinner,
        type: r.Spinner.Type.SPINNING_CIRCLE
      }), T && null != o && (0, a.jsx)(r.Button, {
        "aria-label": v.default.Messages.GUILD_PRODUCT_DELETE_ATTACHMENT.format({
          attachment: U
        }),
        className: p.deleteButton,
        innerClassName: p.deleteButtonInner,
        look: r.Button.Looks.BLANK,
        size: r.Button.Sizes.NONE,
        onClick: i,
        children: (0, a.jsx)(f.default, {
          width: 12,
          height: 12,
          className: p.__invalid_deleteIcon
        })
      })]
    })
  })
}

function N(e) {
  let {
    onFileAdded: A
  } = e, {
    uploads: t,
    canAttachFiles: s,
    canAttachArchives: n,
    addAttachment: d,
    deleteAttachment: c,
    fileUploadProgresses: f
  } = (0, U.useGuildProductAttachmentManagerContext)(), g = l.useRef(!1);

  function h(e) {
    try {
      for (let A of e) d({
        platform: i.UploadPlatform.WEB,
        file: A
      });
      g.current = !0
    } catch {}
  }
  return l.useEffect(() => {
    g.current && (A(), g.current = !1)
  }, [A]), (0, a.jsxs)("div", {
    className: p.container,
    children: [(0, a.jsx)(o.default, {
      className: p.uploadArea,
      title: v.default.Messages.GUILD_PRODUCT_UPLOAD_AREA_TITLE,
      description: v.default.Messages.GUILD_PRODUCT_UPLOAD_AREA_INSTRUCTIONS,
      icons: m.DEFAULT_FILE_UPLOAD_ICONS,
      onDrop: h
    }), (0, a.jsxs)(C.default, {
      className: p.addFileButtonLook,
      innerClassName: p.addFileButton,
      color: r.Button.Colors.CUSTOM,
      disabled: !s,
      "aria-label": v.default.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON,
      "aria-describedby": E,
      multiple: !0,
      onChange: function(e) {
        null != e.currentTarget.files && h(e.currentTarget.files)
      },
      children: [(0, a.jsx)(T.default, {
        color: "currentColor",
        width: 16,
        height: 16,
        className: p.addFileButtonIcon,
        "aria-hidden": !0
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: v.default.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON
      })]
    }), (0, a.jsx)(u.default, {
      size: 12
    }), (0, a.jsx)(r.Text, {
      id: E,
      color: "text-muted",
      variant: "text-xs/normal",
      children: n ? v.default.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS_ARCHIVES_ALLOWED.format({
        fileUploadLimit: I.GUILD_PRODUCT_MAX_TOTAL_ATTACHMENT_SIZE
      }) : v.default.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS.format({
        fileUploadLimit: I.GUILD_PRODUCT_MAX_TOTAL_ATTACHMENT_SIZE
      })
    }), t.length > 0 && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: p.separator
      }), (0, a.jsx)("ul", {
        className: p.attachedFilesContainer,
        "aria-label": v.default.Messages.GUILD_PRODUCT_ATTACHED_FILES_SECTION_LABEL,
        children: t.map(e => (0, a.jsx)("li", {
          children: (0, a.jsx)(q, {
            upload: e,
            onDeleteAttachment: c,
            progress: f[e.id]
          })
        }, e.id))
      })]
    })]
  })
}