"use strict";
t.r(A), t.d(A, {
  AttachmentsUploadComponent: function() {
    return q
  }
}), t("47120");
var a = t("735250"),
  l = t("470079"),
  s = t("120356"),
  r = t.n(s),
  n = t("481060"),
  i = t("205822"),
  o = t("476326"),
  d = t("377171"),
  u = t("153124"),
  c = t("350722"),
  g = t("465670"),
  f = t("210712"),
  C = t("43632"),
  h = t("587123"),
  T = t("863663"),
  U = t("731994"),
  p = t("629481"),
  m = t("689938"),
  I = t("209021");
let v = (0, u.uid)();

function E(e) {
  var A;
  let {
    upload: t,
    progress: s = 0,
    onDeleteAttachment: i
  } = e, o = l.useCallback(() => {
    null == i || i(t.id)
  }, [i, t.id]), u = s >= 1, c = s < 0, C = u || c, h = null !== (A = t.filename) && void 0 !== A ? A : t.id, U = (0, T.describeUploadProgressError)(s);
  return (0, a.jsx)(n.TooltipContainer, {
    text: U,
    children: (0, a.jsxs)("div", {
      className: r()(I.attachedFileCard, {
        [I.attachedFileCardError]: c,
        [I.attachedFileCardUploading]: !C
      }),
      children: [(0, a.jsx)(f.default, {
        width: 16,
        height: 16,
        color: d.default.INTERACTIVE_MUTED
      }), (0, a.jsx)(n.Spacer, {
        size: 10,
        horizontal: !0
      }), (0, a.jsx)(n.Text, {
        variant: "text-sm/normal",
        children: h
      }), !C && (0, a.jsx)(n.Spinner, {
        className: I.attachedFileCardSpinner,
        type: n.Spinner.Type.SPINNING_CIRCLE
      }), C && null != i && (0, a.jsx)(n.Button, {
        "aria-label": m.default.Messages.GUILD_PRODUCT_DELETE_ATTACHMENT.format({
          attachment: h
        }),
        className: I.deleteButton,
        innerClassName: I.deleteButtonInner,
        look: n.Button.Looks.BLANK,
        size: n.Button.Sizes.NONE,
        onClick: o,
        children: (0, a.jsx)(g.default, {
          width: 12,
          height: 12,
          className: I.__invalid_deleteIcon
        })
      })]
    })
  })
}

function q(e) {
  let {
    onFileAdded: A
  } = e, {
    uploads: t,
    canAttachFiles: s,
    canAttachArchives: r,
    addAttachment: d,
    deleteAttachment: u,
    fileUploadProgresses: g
  } = (0, h.useGuildProductAttachmentManagerContext)(), f = l.useRef(!1);

  function T(e) {
    try {
      for (let A of e) d({
        platform: o.UploadPlatform.WEB,
        file: A
      });
      f.current = !0
    } catch {}
  }
  return l.useEffect(() => {
    f.current && (A(), f.current = !1)
  }, [A]), (0, a.jsxs)("div", {
    className: I.container,
    children: [(0, a.jsx)(i.default, {
      className: I.uploadArea,
      title: m.default.Messages.GUILD_PRODUCT_UPLOAD_AREA_TITLE,
      description: m.default.Messages.GUILD_PRODUCT_UPLOAD_AREA_INSTRUCTIONS,
      icons: U.DEFAULT_FILE_UPLOAD_ICONS,
      onDrop: T
    }), (0, a.jsxs)(c.default, {
      className: I.addFileButtonLook,
      innerClassName: I.addFileButton,
      color: n.Button.Colors.CUSTOM,
      disabled: !s,
      "aria-label": m.default.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON,
      "aria-describedby": v,
      multiple: !0,
      onChange: function(e) {
        null != e.currentTarget.files && T(e.currentTarget.files)
      },
      children: [(0, a.jsx)(C.default, {
        color: "currentColor",
        width: 16,
        height: 16,
        className: I.addFileButtonIcon,
        "aria-hidden": !0
      }), (0, a.jsx)(n.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: m.default.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON
      })]
    }), (0, a.jsx)(n.Spacer, {
      size: 12
    }), (0, a.jsx)(n.Text, {
      id: v,
      color: "text-muted",
      variant: "text-xs/normal",
      children: r ? m.default.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS_ARCHIVES_ALLOWED.format({
        fileUploadLimit: p.GUILD_PRODUCT_MAX_TOTAL_ATTACHMENT_SIZE
      }) : m.default.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS.format({
        fileUploadLimit: p.GUILD_PRODUCT_MAX_TOTAL_ATTACHMENT_SIZE
      })
    }), t.length > 0 && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: I.separator
      }), (0, a.jsx)("ul", {
        className: I.attachedFilesContainer,
        "aria-label": m.default.Messages.GUILD_PRODUCT_ATTACHED_FILES_SECTION_LABEL,
        children: t.map(e => (0, a.jsx)("li", {
          children: (0, a.jsx)(E, {
            upload: e,
            onDeleteAttachment: u,
            progress: g[e.id]
          })
        }, e.id))
      })]
    })]
  })
}