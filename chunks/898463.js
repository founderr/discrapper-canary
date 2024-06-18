"use strict";
n.d(t, {
  Z: function() {
    return L
  },
  r: function() {
    return v
  }
}), n(47120), n(315314), n(610138), n(216116), n(78328), n(815648);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(166459),
  _ = n(95152),
  c = n(476326),
  d = n(543651),
  E = n(377171),
  I = n(592125),
  T = n(68588),
  h = n(810090),
  S = n(956664),
  f = n(709054),
  N = n(273031),
  A = n(859235),
  m = n(689938),
  O = n(709982);
let R = ["image/jpeg", "image/png", "image/webp", "image/gif", "video/quicktime", "video/mp4"];

function p(e) {
  let {
    alt: t,
    spoiler: n,
    renderContent: s,
    size: o
  } = e, [a, l] = r.useState(!1);
  return (0, i.jsx)(T.a.Provider, {
    value: !n,
    children: (0, i.jsx)(T.Z, {
      containerStyles: o === A.q.CLIP ? {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        boxShadow: "none"
      } : void 0,
      type: T.Z.Types.ATTACHMENT,
      onReveal: () => l(!0),
      className: O.spoilerContainer,
      children: e => (0, i.jsxs)("div", {
        className: O.spoilerWrapper,
        children: [s(e), (0, i.jsxs)("div", {
          className: O.tags,
          children: [null != t && "" !== t ? (0, i.jsx)("span", {
            className: O.altTag,
            children: m.Z.Messages.IMAGE_ALT
          }) : null, a && n ? (0, i.jsx)("span", {
            className: O.altTag,
            children: m.Z.Messages.SPOILER
          }) : null]
        })]
      })
    })
  })
}

function g(e) {
  let {
    file: t,
    alt: n,
    spoiler: s,
    size: a = A.q.MEDIUM,
    onMouseEnter: u
  } = e, [_, c] = r.useState(), [d, E] = r.useState({
    width: 0,
    height: 0
  }), I = a === A.q.SMALL;
  r.useEffect(() => {
    if (null == t || !1 === R.includes(t.type)) return;
    let e = URL.createObjectURL(t);
    c(e);
    let n = new Image;
    return n.onload = () => {
      let {
        width: e,
        height: t
      } = (0, S.zp)(n.width, n.height);
      E({
        width: e,
        height: t
      })
    }, n.src = e, () => {
      c(void 0), E({
        width: 0,
        height: 0
      }), URL.revokeObjectURL(e)
    }
  }, [t]);
  let T = r.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return null == _ ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)("img", {
        src: _,
        className: o()(O.media, {
          [O.spoiler]: e,
          [O.imageSmall]: I
        }),
        "aria-hidden": !0,
        alt: null != n ? n : "",
        style: t ? d : {}
      })
    }, [_, I, n, d]),
    h = r.useCallback(() => {
      if (null != _)(0, l.openModal)(e => (0, i.jsx)(l.ModalRoot, {
        className: O.__invalid_modal,
        ...e,
        size: l.ModalSize.DYNAMIC,
        "aria-label": m.Z.Messages.IMAGE,
        children: T(!1, !0)
      }))
    }, [_, T]);
  return (0, i.jsx)("div", {
    onMouseEnter: u,
    className: o()(O.mediaContainer, {
      [O.imageSmall]: I
    }),
    children: (0, i.jsx)(l.Clickable, {
      onClick: h,
      className: O.clickableMedia,
      children: (0, i.jsx)(p, {
        size: a,
        alt: n,
        spoiler: s,
        renderContent: T
      })
    })
  })
}

function C(e) {
  let {
    file: t,
    alt: n,
    spoiler: s,
    size: a = A.q.MEDIUM,
    onMouseEnter: l,
    onVideoLoadError: u
  } = e, [_, c] = r.useState(), d = r.useRef(null);
  return r.useEffect(() => {
    if (null == t) return;
    let e = URL.createObjectURL(t);
    return c(e), () => {
      c(void 0), URL.revokeObjectURL(e)
    }
  }, [t]), (0, i.jsx)("div", {
    onMouseEnter: l,
    className: O.mediaContainer,
    children: (0, i.jsx)(p, {
      size: a,
      alt: n,
      spoiler: s,
      renderContent: e => (0, i.jsx)(h.Z, {
        ref: d,
        src: _,
        className: o()(O.media, {
          [O.spoiler]: e,
          [O.sizeClip]: a === A.q.CLIP
        }),
        onError: u,
        preload: "none",
        "aria-hidden": !0
      })
    })
  })
}

function v(e) {
  var t;
  let {
    upload: n,
    size: s = A.q.MEDIUM,
    onMouseEnter: a
  } = e, [l, u] = r.useState(!1), _ = s === A.q.SMALL;
  return n.isImage && n.item.platform === c.ow.WEB ? (0, i.jsx)(g, {
    file: n.item.file,
    alt: n.description,
    spoiler: n.spoiler,
    size: s,
    onMouseEnter: a
  }) : !l && n.isVideo && n.item.platform === c.ow.WEB ? (0, i.jsx)(C, {
    file: n.item.file,
    size: s,
    alt: n.description,
    spoiler: n.spoiler,
    onMouseEnter: a,
    onVideoLoadError: () => u(!0)
  }) : (0, i.jsx)("div", {
    onMouseEnter: a,
    className: o()(O.icon, O.__invalid_imageContainer, {
      [O[null !== (t = n.classification) && void 0 !== t ? t : ""]]: !0,
      [O.imageSmall]: _
    }),
    children: (0, i.jsx)("div", {
      className: O.tags,
      children: n.spoiler ? (0, i.jsx)("span", {
        className: O.altTag,
        children: m.Z.Messages.SPOILER
      }) : null
    })
  })
}

function L(e) {
  let {
    channelId: t,
    draftType: n,
    upload: s,
    keyboardModeEnabled: c,
    label: T,
    size: h = A.q.MEDIUM,
    canEdit: S = !0,
    hideFileName: R = !1,
    clip: p
  } = e, g = null != p, C = (h = g ? A.q.CLIP : h) === A.q.SMALL, L = (0, a.e7)([I.Z], () => {
    var e;
    return null === (e = I.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id
  }), D = e => {
    e.stopPropagation(), (0, l.openModal)(e => (0, i.jsx)(_.default, {
      ...e,
      draftType: n,
      upload: s,
      channelId: t,
      onSubmit: e => {
        let {
          name: i,
          description: r,
          spoiler: o
        } = e;
        u.Z.update(t, s.id, n, {
          filename: i,
          description: r,
          spoiler: o
        })
      }
    }))
  };
  return (0, i.jsxs)(A.Z, {
    actions: (0, i.jsxs)(r.Fragment, {
      children: [S ? (0, i.jsx)(N.Z, {
        className: o()({
          [O.action]: C
        }),
        tooltip: g ? m.Z.Messages.CLIPS_ATTACHMENT_UTILITIES_SPOILER : m.Z.Messages.ATTACHMENT_UTILITIES_SPOILER,
        onClick: () => u.Z.update(t, s.id, n, {
          spoiler: !s.spoiler
        }),
        children: s.spoiler ? (0, i.jsx)(l.EyeSlashIcon, {
          size: "md",
          color: "currentColor",
          className: o()({
            [O.actionBarIcon]: C
          })
        }) : (0, i.jsx)(l.EyeIcon, {
          size: "xs",
          color: "currentColor",
          className: o()({
            [O.actionBarIcon]: C
          })
        })
      }) : null, S && !g ? (0, i.jsx)(N.Z, {
        className: o()({
          [O.action]: C
        }),
        tooltip: m.Z.Messages.ATTACHMENT_UTILITIES_MODIFY,
        onClick: D,
        children: (0, i.jsx)(l.PencilIcon, {
          size: "xs",
          color: "currentColor",
          className: o()({
            [O.actionBarIcon]: C
          })
        })
      }) : null, (0, i.jsx)(N.Z, {
        className: o()({
          [O.action]: C
        }),
        tooltip: g ? m.Z.Messages.CLIPS_ATTACHMENT_UTILITIES_REMOVE : m.Z.Messages.ATTACHMENT_UTILITIES_REMOVE,
        onClick: () => u.Z.remove(t, s.id, n),
        dangerous: !0,
        children: (0, i.jsx)(l.TrashIcon, {
          size: "md",
          color: "currentColor",
          className: o()({
            [O.actionBarIcon]: C
          })
        })
      })]
    }),
    draftType: n,
    id: s.id,
    channelId: t,
    handleEditModal: D,
    keyboardModeEnabled: c,
    size: h,
    className: o()({
      [O.attachmentItemSmall]: C
    }),
    children: [(0, i.jsx)(v, {
      upload: s,
      size: h
    }), !R && !g && (0, i.jsx)("div", {
      className: O.filenameContainer,
      children: (0, i.jsx)(l.Text, {
        className: O.filename,
        variant: "text-sm/normal",
        children: null != T ? T : s.filename
      })
    }), g && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(d.Z, {
        className: O.clipsFooter,
        createdAt: f.default.extractTimestamp(p.id),
        participantIds: p.users,
        applicationId: p.applicationId,
        title: p.name,
        guildId: L
      }), (0, i.jsx)(l.TextBadge, {
        color: E.Z.BG_BRAND,
        className: O.clipsBadge,
        text: m.Z.Messages.CLIP_TAG
      })]
    })]
  })
}