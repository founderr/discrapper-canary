t.d(A, {
  s: function() {
    return v
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  s = t(120356),
  r = t.n(s),
  l = t(481060),
  o = t(205822),
  i = t(476326),
  d = t(377171),
  c = t(153124),
  u = t(350722),
  C = t(587123),
  g = t(863663),
  T = t(731994),
  U = t(629481),
  m = t(689938),
  I = t(740419);
let h = (0, c.hQ)();

function p(e) {
  var A;
  let {
    upload: t,
    progress: s = 0,
    onDeleteAttachment: o
  } = e, i = a.useCallback(() => {
    null == o || o(t.id)
  }, [o, t.id]), c = s >= 1, u = s < 0, C = c || u, T = null !== (A = t.filename) && void 0 !== A ? A : t.id, U = (0, g.kg)(s);
  return (0, n.jsx)(l.TooltipContainer, {
    text: U,
    children: (0, n.jsxs)("div", {
      className: r()(I.attachedFileCard, {
        [I.attachedFileCardError]: u,
        [I.attachedFileCardUploading]: !C
      }),
      children: [(0, n.jsx)(l.ImageFileIcon, {
        size: "xs",
        color: d.Z.INTERACTIVE_MUTED
      }), (0, n.jsx)(l.Spacer, {
        size: 10,
        horizontal: !0
      }), (0, n.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: T
      }), !C && (0, n.jsx)(l.Spinner, {
        className: I.attachedFileCardSpinner,
        type: l.Spinner.Type.SPINNING_CIRCLE
      }), C && null != o && (0, n.jsx)(l.Button, {
        "aria-label": m.Z.Messages.GUILD_PRODUCT_DELETE_ATTACHMENT.format({
          attachment: T
        }),
        className: I.deleteButton,
        innerClassName: I.deleteButtonInner,
        look: l.Button.Looks.BLANK,
        size: l.Button.Sizes.NONE,
        onClick: i,
        children: (0, n.jsx)(l.CloseSmallIcon, {
          size: "xxs",
          color: "currentColor",
          className: I.__invalid_deleteIcon
        })
      })]
    })
  })
}

function v(e) {
  let {
    onFileAdded: A
  } = e, {
    uploads: t,
    canAttachFiles: s,
    canAttachArchives: r,
    addAttachment: d,
    deleteAttachment: c,
    fileUploadProgresses: g
  } = (0, C.P)(), v = a.useRef(!1);

  function q(e) {
    try {
      for (let A of e) d({
        platform: i.ow.WEB,
        file: A
      });
      v.current = !0
    } catch {}
  }
  return a.useEffect(() => {
    v.current && (A(), v.current = !1)
  }, [A]), (0, n.jsxs)("div", {
    className: I.container,
    children: [(0, n.jsx)(o.Z, {
      className: I.uploadArea,
      title: m.Z.Messages.GUILD_PRODUCT_UPLOAD_AREA_TITLE,
      description: m.Z.Messages.GUILD_PRODUCT_UPLOAD_AREA_INSTRUCTIONS,
      icons: T.J6,
      onDrop: q
    }), (0, n.jsxs)(u.Z, {
      className: I.addFileButtonLook,
      innerClassName: I.addFileButton,
      color: l.Button.Colors.CUSTOM,
      disabled: !s,
      "aria-label": m.Z.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON,
      "aria-describedby": h,
      multiple: !0,
      onChange: function(e) {
        null != e.currentTarget.files && q(e.currentTarget.files)
      },
      children: [(0, n.jsx)(l.ImageFileUpIcon, {
        size: "xs",
        color: "currentColor",
        className: I.addFileButtonIcon,
        "aria-hidden": !0
      }), (0, n.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: m.Z.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON
      })]
    }), (0, n.jsx)(l.Spacer, {
      size: 12
    }), (0, n.jsx)(l.Text, {
      id: h,
      color: "text-muted",
      variant: "text-xs/normal",
      children: r ? m.Z.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS_ARCHIVES_ALLOWED.format({
        fileUploadLimit: U.TR
      }) : m.Z.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS.format({
        fileUploadLimit: U.TR
      })
    }), t.length > 0 && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: I.separator
      }), (0, n.jsx)("ul", {
        className: I.attachedFilesContainer,
        "aria-label": m.Z.Messages.GUILD_PRODUCT_ATTACHED_FILES_SECTION_LABEL,
        children: t.map(e => (0, n.jsx)("li", {
          children: (0, n.jsx)(p, {
            upload: e,
            onDeleteAttachment: c,
            progress: g[e.id]
          })
        }, e.id))
      })]
    })]
  })
}