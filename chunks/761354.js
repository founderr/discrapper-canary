"use strict";
a.r(t), a.d(t, {
  UploadIcon: function() {
    return U
  },
  default: function() {
    return D
  }
}), a("222007"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
var l = a("37983"),
  s = a("884691"),
  n = a("414456"),
  i = a.n(n),
  r = a("446674"),
  o = a("77078"),
  d = a("81594"),
  u = a("467339"),
  c = a("966724"),
  m = a("411723"),
  h = a("20606"),
  p = a("42203"),
  f = a("505684"),
  g = a("462579"),
  v = a("867544"),
  M = a("987772"),
  x = a("228220"),
  E = a("956089"),
  I = a("58608"),
  L = a("103603"),
  A = a("299039"),
  S = a("9560"),
  T = a("271972"),
  j = a("782340"),
  C = a("454101");
let N = ["image/jpeg", "image/png", "image/webp", "image/gif", "video/quicktime", "video/mp4"];

function _(e) {
  let {
    alt: t,
    spoiler: a,
    renderContent: n,
    size: i
  } = e, [r, o] = s.useState(!1);
  return (0, l.jsx)(f.ObscuredDisplayContext.Provider, {
    value: !a,
    children: (0, l.jsx)(f.default, {
      containerStyles: i === T.AttachmentListItemSizes.CLIP ? {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        boxShadow: "none"
      } : void 0,
      type: f.default.Types.ATTACHMENT,
      onReveal: () => o(!0),
      className: C.spoilerContainer,
      children: e => (0, l.jsxs)("div", {
        className: C.spoilerWrapper,
        children: [n(e), (0, l.jsxs)("div", {
          className: C.tags,
          children: [null != t && "" !== t ? (0, l.jsx)("span", {
            className: C.altTag,
            children: j.default.Messages.IMAGE_ALT
          }) : null, r && a ? (0, l.jsx)("span", {
            className: C.altTag,
            children: j.default.Messages.SPOILER
          }) : null]
        })]
      })
    })
  })
}

function b(e) {
  let {
    file: t,
    alt: a,
    spoiler: n,
    size: r = T.AttachmentListItemSizes.MEDIUM,
    onMouseEnter: d
  } = e, [u, c] = s.useState(), [m, h] = s.useState({
    width: 0,
    height: 0
  }), p = r === T.AttachmentListItemSizes.SMALL;
  s.useEffect(() => {
    if (null == t || !1 === N.includes(t.type)) return;
    let e = URL.createObjectURL(t);
    c(e);
    let a = new Image;
    return a.onload = () => {
      let {
        width: e,
        height: t
      } = (0, L.zoomFit)(a.width, a.height);
      h({
        width: e,
        height: t
      })
    }, a.src = e, () => {
      c(void 0), h({
        width: 0,
        height: 0
      }), URL.revokeObjectURL(e)
    }
  }, [t]);
  let f = s.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return null == u ? (0, l.jsx)(l.Fragment, {}) : (0, l.jsx)("img", {
        src: u,
        className: i(C.media, {
          [C.spoiler]: e,
          [C.imageSmall]: p
        }),
        "aria-hidden": !0,
        alt: null != a ? a : "",
        style: t ? m : {}
      })
    }, [u, p, a, m]),
    g = s.useCallback(() => {
      null != u && (0, o.openModal)(e => (0, l.jsx)(o.ModalRoot, {
        className: C.modal,
        ...e,
        size: o.ModalSize.DYNAMIC,
        "aria-label": j.default.Messages.IMAGE,
        children: f(!1, !0)
      }))
    }, [u, f]);
  return (0, l.jsx)("div", {
    onMouseEnter: d,
    className: i(C.mediaContainer, {
      [C.imageSmall]: p
    }),
    children: (0, l.jsx)(o.Clickable, {
      onClick: g,
      className: C.clickableMedia,
      children: (0, l.jsx)(_, {
        size: r,
        alt: a,
        spoiler: n,
        renderContent: f
      })
    })
  })
}

function R(e) {
  let {
    file: t,
    alt: a,
    spoiler: n,
    size: r = T.AttachmentListItemSizes.MEDIUM,
    onMouseEnter: o,
    onVideoLoadError: d
  } = e, [u, c] = s.useState(), m = s.useRef(null);
  return s.useEffect(() => {
    if (null == t) return;
    let e = URL.createObjectURL(t);
    return c(e), () => {
      c(void 0), URL.revokeObjectURL(e)
    }
  }, [t]), (0, l.jsx)("div", {
    onMouseEnter: o,
    className: C.mediaContainer,
    children: (0, l.jsx)(_, {
      size: r,
      alt: a,
      spoiler: n,
      renderContent: e => (0, l.jsx)(I.default, {
        ref: m,
        src: u,
        className: i(C.media, {
          [C.spoiler]: e,
          [C.sizeClip]: r === T.AttachmentListItemSizes.CLIP
        }),
        onError: d,
        preload: "none",
        "aria-hidden": !0
      })
    })
  })
}

function U(e) {
  var t;
  let {
    upload: a,
    size: n = T.AttachmentListItemSizes.MEDIUM,
    onMouseEnter: r
  } = e, [o, d] = s.useState(!1), u = n === T.AttachmentListItemSizes.SMALL;
  return a.isImage && a.item.platform === c.UploadPlatform.WEB ? (0, l.jsx)(b, {
    file: a.item.file,
    alt: a.description,
    spoiler: a.spoiler,
    size: n,
    onMouseEnter: r
  }) : !o && a.isVideo && a.item.platform === c.UploadPlatform.WEB ? (0, l.jsx)(R, {
    file: a.item.file,
    size: n,
    alt: a.description,
    spoiler: a.spoiler,
    onMouseEnter: r,
    onVideoLoadError: () => d(!0)
  }) : (0, l.jsx)("div", {
    onMouseEnter: r,
    className: i(C.icon, C.imageContainer, {
      [C[null !== (t = a.classification) && void 0 !== t ? t : ""]]: !0,
      [C.imageSmall]: u
    }),
    children: (0, l.jsx)("div", {
      className: C.tags,
      children: a.spoiler ? (0, l.jsx)("span", {
        className: C.altTag,
        children: j.default.Messages.SPOILER
      }) : null
    })
  })
}

function D(e) {
  let {
    channelId: t,
    draftType: a,
    upload: n,
    keyboardModeEnabled: c,
    label: f,
    size: I = T.AttachmentListItemSizes.MEDIUM,
    canEdit: L = !0,
    hideFileName: N = !1,
    clip: _
  } = e, b = null != _;
  I = b ? T.AttachmentListItemSizes.CLIP : I;
  let R = I === T.AttachmentListItemSizes.SMALL,
    D = (0, r.useStateFromStores)([p.default], () => {
      var e;
      return null === (e = p.default.getChannel(t)) || void 0 === e ? void 0 : e.guild_id
    }),
    y = e => {
      e.stopPropagation(), (0, o.openModal)(e => (0, l.jsx)(u.default, {
        ...e,
        draftType: a,
        upload: n,
        channelId: t,
        onSubmit: e => {
          let {
            name: l,
            description: s,
            spoiler: i
          } = e;
          d.default.update(t, n.id, a, {
            filename: l,
            description: s,
            spoiler: i
          })
        }
      }))
    };
  return (0, l.jsxs)(T.default, {
    actions: (0, l.jsxs)(s.Fragment, {
      children: [L ? (0, l.jsx)(S.default, {
        className: i({
          [C.action]: R
        }),
        tooltip: b ? j.default.Messages.CLIPS_ATTACHMENT_UTILITIES_SPOILER : j.default.Messages.ATTACHMENT_UTILITIES_SPOILER,
        onClick: () => d.default.update(t, n.id, a, {
          spoiler: !n.spoiler
        }),
        children: n.spoiler ? (0, l.jsx)(v.default, {
          className: i({
            [C.actionBarIcon]: R
          })
        }) : (0, l.jsx)(g.default, {
          className: i({
            [C.actionBarIcon]: R
          })
        })
      }) : null, L && !b ? (0, l.jsx)(S.default, {
        className: i({
          [C.action]: R
        }),
        tooltip: j.default.Messages.ATTACHMENT_UTILITIES_MODIFY,
        onClick: y,
        children: (0, l.jsx)(M.default, {
          className: i({
            [C.actionBarIcon]: R
          })
        })
      }) : null, (0, l.jsx)(S.default, {
        className: i({
          [C.action]: R
        }),
        tooltip: b ? j.default.Messages.CLIPS_ATTACHMENT_UTILITIES_REMOVE : j.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
        onClick: () => d.default.remove(t, n.id, a),
        dangerous: !0,
        children: (0, l.jsx)(x.default, {
          className: i({
            [C.actionBarIcon]: R
          })
        })
      })]
    }),
    draftType: a,
    id: n.id,
    channelId: t,
    handleEditModal: y,
    keyboardModeEnabled: c,
    size: I,
    className: i({
      [C.attachmentItemSmall]: R
    }),
    children: [(0, l.jsx)(U, {
      upload: n,
      size: I
    }), !N && !b && (0, l.jsx)("div", {
      className: C.filenameContainer,
      children: (0, l.jsx)(o.Text, {
        className: C.filename,
        variant: "text-sm/normal",
        children: null != f ? f : n.filename
      })
    }), b && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(m.default, {
        className: C.clipsFooter,
        createdAt: A.default.extractTimestamp(_.id),
        participantIds: _.users,
        applicationId: _.applicationId,
        title: _.name,
        guildId: D
      }), (0, l.jsx)(E.TextBadge, {
        color: h.default.BRAND,
        className: C.clipsBadge,
        text: j.default.Messages.CLIP_TAG
      })]
    })]
  })
}