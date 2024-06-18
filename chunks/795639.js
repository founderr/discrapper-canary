"use strict";
n.d(t, {
  _: function() {
    return A
  }
});
var s = n(735250),
  l = n(470079),
  a = n(120356),
  r = n.n(a),
  i = n(512722),
  o = n.n(i),
  c = n(399606),
  d = n(481060),
  u = n(166459),
  m = n(607070),
  h = n(541716),
  g = n(273031),
  x = n(859235),
  _ = n(470623),
  E = n(983200),
  f = n(153124),
  C = n(350722),
  T = n(810090),
  N = n(127654),
  I = n(124252),
  S = n(689938),
  p = n(382170);
let v = [{
    name: "Media Post Thumbnail",
    extensions: ["jpg", "jpeg", "png", "gif", "webp"]
  }],
  M = (0, f.hQ)();

function j(e) {
  let {
    mediaAttachments: t,
    containerWidth: n,
    containerHeight: l
  } = e, a = (0, E.tu)({
    numAttachments: t.length,
    containerWidth: n,
    containerHeight: l
  });
  return (0, s.jsx)(s.Fragment, {
    children: t.map((e, t) => {
      var n;
      return (0, s.jsx)("div", {
        style: a[t],
        children: !0 === e.isVideo ? (0, s.jsx)(T.Z, {
          src: e.src,
          className: p.thumbnail,
          "aria-hidden": !0
        }) : (0, s.jsx)("img", {
          src: e.src,
          className: p.thumbnail,
          "aria-hidden": !0,
          alt: null !== (n = null == e ? void 0 : e.alt) && void 0 !== n ? n : ""
        })
      }, e.src)
    })
  })
}
let A = e => {
  var t;
  let {
    parentChannel: a
  } = e, {
    textAreaState: i
  } = (0, _.xH)(e => {
    let {
      textAreaState: t
    } = e;
    return {
      textAreaState: t
    }
  }), E = (0, c.e7)([m.Z], () => m.Z.keyboardModeEnabled), f = (0, I.Z)(a, null === (t = i.textValue) || void 0 === t ? void 0 : t.trim()), T = l.useMemo(() => f.find(e => e.isThumbnail), [f]), A = null != f && f.length > 0, R = l.useMemo(() => {
    let e = (null == f ? void 0 : f.length) > 1 ? 1.15 : 1;
    return {
      width: 153 * e,
      height: 86 * e
    }
  }, [f]), O = l.useCallback(e => {
    null != T && u.Z.remove(a.id, T.id, h.I.CREATE_FORUM_POST.drafts.type), (0, N.d)(e.currentTarget.files, a, h.I.CREATE_FORUM_POST.drafts.type, {
      requireConfirm: !0,
      isThumbnail: !0
    }), e.currentTarget.value = null
  }, [a, T]), b = e => {
    if (e.stopPropagation(), (null == T ? void 0 : T.upload) != null)(0, d.openModalLazy)(async () => {
      let e = T.upload;
      o()(null != e, "upload should not be null");
      let {
        default: t
      } = await Promise.resolve().then(n.bind(n, 95152));
      return n => (0, s.jsx)(t, {
        ...n,
        upload: e,
        channelId: a.id,
        draftType: h.I.CREATE_FORUM_POST.drafts.type,
        onSubmit: t => {
          let {
            name: n,
            description: s,
            spoiler: l
          } = t;
          u.Z.update(a.id, e.id, h.I.CREATE_FORUM_POST.drafts.type, {
            filename: n,
            description: s,
            spoiler: l
          })
        },
        disableSpoiler: !0
      })
    })
  }, Z = (0, s.jsx)(C.Z, {
    color: d.ButtonColors.CUSTOM,
    className: r()(p.uploadFileInputContainer),
    innerClassName: p.uploadThumbnailContainer,
    onChange: O,
    multiple: !1,
    "aria-hidden": !0,
    filters: v,
    "aria-describedby": M,
    "aria-label": A ? S.Z.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL : S.Z.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL,
    children: A ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(j, {
        mediaAttachments: f,
        containerWidth: R.width,
        containerHeight: R.height
      }), (0, s.jsxs)("div", {
        className: r()(p.changeThumbnailLabelContainer, {
          [p.changeThumbnailLabelOverflow]: (null == f ? void 0 : f.length) > 2
        }),
        children: [(0, s.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "header-secondary",
          children: S.Z.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL
        }), null == T && (0, s.jsx)(d.PencilIcon, {
          size: "xs",
          color: "currentColor",
          className: p.editIcon
        })]
      })]
    }) : (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(d.ImagePlusIcon, {
        size: "custom",
        width: 39,
        height: 39,
        color: "currentColor",
        className: p.uploadIcon
      }), (0, s.jsx)(d.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: S.Z.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL
      })]
    })
  });
  return (0, s.jsx)("div", {
    className: p.thumbnailContainer,
    style: R,
    children: null != T ? (0, s.jsx)(x.Z, {
      actions: (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(g.Z, {
          className: p.action,
          tooltip: S.Z.Messages.ATTACHMENT_UTILITIES_MODIFY,
          onClick: b,
          children: (0, s.jsx)(d.PencilIcon, {
            size: "xs",
            color: "currentColor"
          })
        }), (0, s.jsx)(g.Z, {
          className: p.action,
          tooltip: S.Z.Messages.ATTACHMENT_UTILITIES_REMOVE,
          onClick: () => u.Z.remove(a.id, T.id, h.I.CREATE_FORUM_POST.drafts.type),
          dangerous: !0,
          children: (0, s.jsx)(d.TrashIcon, {
            size: "md",
            color: "currentColor"
          })
        })]
      }),
      draftType: h.I.CREATE_FORUM_POST.drafts.type,
      id: T.id,
      channelId: a.id,
      handleEditModal: b,
      keyboardModeEnabled: E,
      size: x.q.SMALL,
      className: p.attachmentListItem,
      children: Z
    }) : (0, s.jsx)(s.Fragment, {
      children: Z
    })
  })
}