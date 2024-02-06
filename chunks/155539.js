"use strict";
t.r(A), t.d(A, {
  AttachmentsUploadComponent: function() {
    return N
  }
}), t("222007");
var a = t("37983"),
  n = t("884691"),
  l = t("414456"),
  r = t.n(l),
  s = t("77078"),
  o = t("160864"),
  i = t("966724"),
  d = t("20606"),
  u = t("191814"),
  c = t("476765"),
  f = t("857171"),
  C = t("945330"),
  g = t("903635"),
  T = t("696104"),
  h = t("949435"),
  m = t("757515"),
  U = t("527382"),
  I = t("500307"),
  p = t("782340"),
  v = t("245793");
let E = (0, c.uid)();

function q(e) {
  var A;
  let {
    upload: t,
    progress: l = 0,
    onDeleteAttachment: o
  } = e, i = n.useCallback(() => {
    null == o || o(t.id)
  }, [o, t.id]), c = l >= 1, f = l < 0, T = c || f, h = null !== (A = t.filename) && void 0 !== A ? A : t.id, U = (0, m.describeUploadProgressError)(l);
  return (0, a.jsx)(s.TooltipContainer, {
    text: U,
    children: (0, a.jsxs)("div", {
      className: r(v.attachedFileCard, {
        [v.attachedFileCardError]: f,
        [v.attachedFileCardUploading]: !T
      }),
      children: [(0, a.jsx)(g.default, {
        width: 16,
        height: 16,
        color: d.default.INTERACTIVE_MUTED
      }), (0, a.jsx)(u.default, {
        size: 10,
        horizontal: !0
      }), (0, a.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: h
      }), !T && (0, a.jsx)(s.Spinner, {
        className: v.attachedFileCardSpinner,
        type: s.Spinner.Type.SPINNING_CIRCLE
      }), T && null != o && (0, a.jsx)(s.Button, {
        "aria-label": p.default.Messages.GUILD_PRODUCT_DELETE_ATTACHMENT.format({
          attachment: h
        }),
        className: v.deleteButton,
        innerClassName: v.deleteButtonInner,
        look: s.Button.Looks.BLANK,
        size: s.Button.Sizes.NONE,
        onClick: i,
        children: (0, a.jsx)(C.default, {
          width: 12,
          height: 12,
          className: v.deleteIcon
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
    canAttachFiles: l,
    canAttachArchives: r,
    addAttachment: d,
    deleteAttachment: c,
    fileUploadProgresses: C
  } = (0, h.useGuildProductAttachmentManagerContext)(), g = n.useRef(!1);

  function m(e) {
    try {
      for (let A of e) d({
        platform: i.UploadPlatform.WEB,
        file: A
      });
      g.current = !0
    } catch {}
  }
  return n.useEffect(() => {
    g.current && (A(), g.current = !1)
  }, [A]), (0, a.jsxs)("div", {
    className: v.container,
    children: [(0, a.jsx)(o.default, {
      className: v.uploadArea,
      title: p.default.Messages.GUILD_PRODUCT_UPLOAD_AREA_TITLE,
      description: p.default.Messages.GUILD_PRODUCT_UPLOAD_AREA_INSTRUCTIONS,
      icons: U.DEFAULT_FILE_UPLOAD_ICONS,
      onDrop: m
    }), (0, a.jsxs)(f.default, {
      className: v.addFileButtonLook,
      innerClassName: v.addFileButton,
      color: s.Button.Colors.CUSTOM,
      disabled: !l,
      "aria-label": p.default.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON,
      "aria-describedby": E,
      multiple: !0,
      onChange: function(e) {
        null != e.currentTarget.files && m(e.currentTarget.files)
      },
      children: [(0, a.jsx)(T.default, {
        color: "currentColor",
        width: 16,
        height: 16,
        className: v.addFileButtonIcon,
        "aria-hidden": !0
      }), (0, a.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: p.default.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON
      })]
    }), (0, a.jsx)(u.default, {
      size: 12
    }), (0, a.jsx)(s.Text, {
      id: E,
      color: "text-muted",
      variant: "text-xs/normal",
      children: r ? p.default.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS_ARCHIVES_ALLOWED.format({
        fileUploadLimit: I.GUILD_PRODUCT_MAX_TOTAL_ATTACHMENT_SIZE
      }) : p.default.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS.format({
        fileUploadLimit: I.GUILD_PRODUCT_MAX_TOTAL_ATTACHMENT_SIZE
      })
    }), t.length > 0 && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: v.separator
      }), (0, a.jsx)("ul", {
        className: v.attachedFilesContainer,
        "aria-label": p.default.Messages.GUILD_PRODUCT_ATTACHED_FILES_SECTION_LABEL,
        children: t.map(e => (0, a.jsx)("li", {
          children: (0, a.jsx)(q, {
            upload: e,
            onDeleteAttachment: c,
            progress: C[e.id]
          })
        }, e.id))
      })]
    })]
  })
}