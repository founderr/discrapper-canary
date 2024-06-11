"use strict";
n.r(t), n.d(t, {
  UploadIcon: function() {
    return y
  },
  default: function() {
    return P
  }
}), n("47120"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("442837"),
  l = n("481060"),
  u = n("166459"),
  d = n("95152"),
  _ = n("476326"),
  c = n("543651"),
  E = n("377171"),
  I = n("592125"),
  T = n("68588"),
  f = n("794358"),
  S = n("880008"),
  h = n("185403"),
  A = n("740727"),
  m = n("810090"),
  N = n("956664"),
  p = n("709054"),
  O = n("273031"),
  C = n("859235"),
  R = n("689938"),
  g = n("709982");
let L = ["image/jpeg", "image/png", "image/webp", "image/gif", "video/quicktime", "video/mp4"];

function v(e) {
  let {
    alt: t,
    spoiler: n,
    renderContent: s,
    size: a
  } = e, [o, l] = r.useState(!1);
  return (0, i.jsx)(T.ObscuredDisplayContext.Provider, {
    value: !n,
    children: (0, i.jsx)(T.default, {
      containerStyles: a === C.AttachmentListItemSizes.CLIP ? {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        boxShadow: "none"
      } : void 0,
      type: T.default.Types.ATTACHMENT,
      onReveal: () => l(!0),
      className: g.spoilerContainer,
      children: e => (0, i.jsxs)("div", {
        className: g.spoilerWrapper,
        children: [s(e), (0, i.jsxs)("div", {
          className: g.tags,
          children: [null != t && "" !== t ? (0, i.jsx)("span", {
            className: g.altTag,
            children: R.default.Messages.IMAGE_ALT
          }) : null, o && n ? (0, i.jsx)("span", {
            className: g.altTag,
            children: R.default.Messages.SPOILER
          }) : null]
        })]
      })
    })
  })
}

function D(e) {
  let {
    file: t,
    alt: n,
    spoiler: s,
    size: o = C.AttachmentListItemSizes.MEDIUM,
    onMouseEnter: u
  } = e, [d, _] = r.useState(), [c, E] = r.useState({
    width: 0,
    height: 0
  }), I = o === C.AttachmentListItemSizes.SMALL;
  r.useEffect(() => {
    if (null == t || !1 === L.includes(t.type)) return;
    let e = URL.createObjectURL(t);
    _(e);
    let n = new Image;
    return n.onload = () => {
      let {
        width: e,
        height: t
      } = (0, N.zoomFit)(n.width, n.height);
      E({
        width: e,
        height: t
      })
    }, n.src = e, () => {
      _(void 0), E({
        width: 0,
        height: 0
      }), URL.revokeObjectURL(e)
    }
  }, [t]);
  let T = r.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return null == d ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)("img", {
        src: d,
        className: a()(g.media, {
          [g.spoiler]: e,
          [g.imageSmall]: I
        }),
        "aria-hidden": !0,
        alt: null != n ? n : "",
        style: t ? c : {}
      })
    }, [d, I, n, c]),
    f = r.useCallback(() => {
      null != d && (0, l.openModal)(e => (0, i.jsx)(l.ModalRoot, {
        className: g.__invalid_modal,
        ...e,
        size: l.ModalSize.DYNAMIC,
        "aria-label": R.default.Messages.IMAGE,
        children: T(!1, !0)
      }))
    }, [d, T]);
  return (0, i.jsx)("div", {
    onMouseEnter: u,
    className: a()(g.mediaContainer, {
      [g.imageSmall]: I
    }),
    children: (0, i.jsx)(l.Clickable, {
      onClick: f,
      className: g.clickableMedia,
      children: (0, i.jsx)(v, {
        size: o,
        alt: n,
        spoiler: s,
        renderContent: T
      })
    })
  })
}

function M(e) {
  let {
    file: t,
    alt: n,
    spoiler: s,
    size: o = C.AttachmentListItemSizes.MEDIUM,
    onMouseEnter: l,
    onVideoLoadError: u
  } = e, [d, _] = r.useState(), c = r.useRef(null);
  return r.useEffect(() => {
    if (null == t) return;
    let e = URL.createObjectURL(t);
    return _(e), () => {
      _(void 0), URL.revokeObjectURL(e)
    }
  }, [t]), (0, i.jsx)("div", {
    onMouseEnter: l,
    className: g.mediaContainer,
    children: (0, i.jsx)(v, {
      size: o,
      alt: n,
      spoiler: s,
      renderContent: e => (0, i.jsx)(m.default, {
        ref: c,
        src: d,
        className: a()(g.media, {
          [g.spoiler]: e,
          [g.sizeClip]: o === C.AttachmentListItemSizes.CLIP
        }),
        onError: u,
        preload: "none",
        "aria-hidden": !0
      })
    })
  })
}

function y(e) {
  var t;
  let {
    upload: n,
    size: s = C.AttachmentListItemSizes.MEDIUM,
    onMouseEnter: o
  } = e, [l, u] = r.useState(!1), d = s === C.AttachmentListItemSizes.SMALL;
  return n.isImage && n.item.platform === _.UploadPlatform.WEB ? (0, i.jsx)(D, {
    file: n.item.file,
    alt: n.description,
    spoiler: n.spoiler,
    size: s,
    onMouseEnter: o
  }) : !l && n.isVideo && n.item.platform === _.UploadPlatform.WEB ? (0, i.jsx)(M, {
    file: n.item.file,
    size: s,
    alt: n.description,
    spoiler: n.spoiler,
    onMouseEnter: o,
    onVideoLoadError: () => u(!0)
  }) : (0, i.jsx)("div", {
    onMouseEnter: o,
    className: a()(g.icon, g.__invalid_imageContainer, {
      [g[null !== (t = n.classification) && void 0 !== t ? t : ""]]: !0,
      [g.imageSmall]: d
    }),
    children: (0, i.jsx)("div", {
      className: g.tags,
      children: n.spoiler ? (0, i.jsx)("span", {
        className: g.altTag,
        children: R.default.Messages.SPOILER
      }) : null
    })
  })
}

function P(e) {
  let {
    channelId: t,
    draftType: n,
    upload: s,
    keyboardModeEnabled: _,
    label: T,
    size: m = C.AttachmentListItemSizes.MEDIUM,
    canEdit: N = !0,
    hideFileName: L = !1,
    clip: v
  } = e, D = null != v, M = (m = D ? C.AttachmentListItemSizes.CLIP : m) === C.AttachmentListItemSizes.SMALL, P = (0, o.useStateFromStores)([I.default], () => {
    var e;
    return null === (e = I.default.getChannel(t)) || void 0 === e ? void 0 : e.guild_id
  }), U = e => {
    e.stopPropagation(), (0, l.openModal)(e => (0, i.jsx)(d.default, {
      ...e,
      draftType: n,
      upload: s,
      channelId: t,
      onSubmit: e => {
        let {
          name: i,
          description: r,
          spoiler: a
        } = e;
        u.default.update(t, s.id, n, {
          filename: i,
          description: r,
          spoiler: a
        })
      }
    }))
  };
  return (0, i.jsxs)(C.default, {
    actions: (0, i.jsxs)(r.Fragment, {
      children: [N ? (0, i.jsx)(O.default, {
        className: a()({
          [g.action]: M
        }),
        tooltip: D ? R.default.Messages.CLIPS_ATTACHMENT_UTILITIES_SPOILER : R.default.Messages.ATTACHMENT_UTILITIES_SPOILER,
        onClick: () => u.default.update(t, s.id, n, {
          spoiler: !s.spoiler
        }),
        children: s.spoiler ? (0, i.jsx)(S.default, {
          className: a()({
            [g.actionBarIcon]: M
          })
        }) : (0, i.jsx)(f.default, {
          className: a()({
            [g.actionBarIcon]: M
          })
        })
      }) : null, N && !D ? (0, i.jsx)(O.default, {
        className: a()({
          [g.action]: M
        }),
        tooltip: R.default.Messages.ATTACHMENT_UTILITIES_MODIFY,
        onClick: U,
        children: (0, i.jsx)(h.default, {
          className: a()({
            [g.actionBarIcon]: M
          })
        })
      }) : null, (0, i.jsx)(O.default, {
        className: a()({
          [g.action]: M
        }),
        tooltip: D ? R.default.Messages.CLIPS_ATTACHMENT_UTILITIES_REMOVE : R.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
        onClick: () => u.default.remove(t, s.id, n),
        dangerous: !0,
        children: (0, i.jsx)(A.default, {
          className: a()({
            [g.actionBarIcon]: M
          })
        })
      })]
    }),
    draftType: n,
    id: s.id,
    channelId: t,
    handleEditModal: U,
    keyboardModeEnabled: _,
    size: m,
    className: a()({
      [g.attachmentItemSmall]: M
    }),
    children: [(0, i.jsx)(y, {
      upload: s,
      size: m
    }), !L && !D && (0, i.jsx)("div", {
      className: g.filenameContainer,
      children: (0, i.jsx)(l.Text, {
        className: g.filename,
        variant: "text-sm/normal",
        children: null != T ? T : s.filename
      })
    }), D && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(c.default, {
        className: g.clipsFooter,
        createdAt: p.default.extractTimestamp(v.id),
        participantIds: v.users,
        applicationId: v.applicationId,
        title: v.name,
        guildId: P
      }), (0, i.jsx)(l.TextBadge, {
        color: E.default.BG_BRAND,
        className: g.clipsBadge,
        text: R.default.Messages.CLIP_TAG
      })]
    })]
  })
}