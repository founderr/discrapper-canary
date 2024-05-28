"use strict";
i.r(t), i.d(t, {
  default: function() {
    return x
  }
}), i("47120");
var a = i("735250"),
  l = i("470079"),
  s = i("442837"),
  n = i("481060"),
  r = i("904245"),
  o = i("166459"),
  u = i("680287"),
  d = i("163268"),
  c = i("813197"),
  _ = i("592125"),
  f = i("703558"),
  E = i("430824"),
  m = i("375954"),
  p = i("153124"),
  A = i("403182"),
  g = i("709054"),
  T = i("127654"),
  h = i("979956"),
  O = i("228392"),
  M = i("404616"),
  I = i("470623"),
  R = i("981631"),
  C = i("231338"),
  S = i("689938"),
  L = i("250198");

function x(e) {
  var t;
  let {
    threadId: i,
    attachments: x,
    sendMessage: P,
    transitionState: v,
    onClose: U
  } = e, D = (0, p.useUID)(), b = (0, s.useStateFromStores)([_.default], () => _.default.getChannel(i), [i]), z = (0, s.useStateFromStores)([E.default], () => E.default.getGuild(null == b ? void 0 : b.getGuildId()), [b]), y = (0, s.useStateFromStores)([_.default], () => _.default.getChannel(null == b ? void 0 : b.parent_id), [b]), N = null === (t = x[0]) || void 0 === t ? void 0 : t.item, [F, k] = l.useState(null);
  l.useEffect(() => {
    null != N && (0, c.processImage)(N.file, (e, t) => k(e), C.NOOP)
  }, [N]);
  let G = null != N && null != F ? {
      src: F,
      width: M.MAX_THUMBNAIL_WIDTH,
      height: M.MAX_THUMBNAIL_HEIGHT,
      spoiler: x[0].spoiler,
      alt: x[0].description
    } : null,
    [w, B] = l.useState(!1),
    H = l.useCallback(() => {
      (0, O.trackForumAddMediaToOriginalPostClicked)({
        added: !1
      }), P(), U()
    }, [P, U]),
    $ = l.useCallback(() => {
      null != b && null != z && ((0, O.trackForumAddMediaToOriginalPostClicked)({
        added: !0
      }), ! function(e) {
        let {
          thread: t,
          attachments: i,
          setIsUploading: a,
          guild: l,
          onClose: s
        } = e, n = new u.default(R.Endpoints.MESSAGE(t.id, g.default.castChannelIdAsMessageId(t.id)), "PATCH");
        n.on("start", () => {
          a(!0)
        }), n.on("progress", e => {
          let r = (0, A.maxFileSize)(l.id);
          e.currentSize > r && (n.cancel(), a(!1), s(), (0, T.showUploadFileSizeExceededError)(t, (0, h.getWebUploadFiles)(i)))
        }), n.on("error", (e, i, l) => {
          a(!1), i === R.AbortCodes.EXPLICIT_CONTENT && (s(), r.default.sendExplicitMediaClydeError(t.id, null == l ? void 0 : l.attachments, d.TrackMediaRedactionContext.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), o.default.clearAll(t.id, f.DraftType.ChannelMessage))
        }), n.on("complete", () => {
          a(!1), s(), o.default.clearAll(t.id, f.DraftType.ChannelMessage)
        });
        let c = m.default.getMessages(t.id).get(g.default.castChannelIdAsMessageId(t.id)),
          _ = null != c ? c.attachments : [];
        n.uploadFiles(i, {
          attachments: [..._]
        }, {
          addFilesTo: "attachments"
        })
      }({
        thread: b,
        attachments: x,
        setIsUploading: B,
        guild: z,
        onClose: U
      }))
    }, [b, x, B, z, U]);
  return null == y ? null : (0, a.jsxs)(n.ModalRoot, {
    transitionState: v,
    size: n.ModalSize.SMALL,
    className: L.modalRoot,
    "aria-labelledby": D,
    children: [(0, a.jsxs)(n.ModalContent, {
      className: L.modal,
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-md/semibold",
        className: L.header,
        id: D,
        children: S.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_TITLE
      }), (0, a.jsx)(n.Text, {
        variant: "text-md/normal",
        className: L.__invalid_body,
        children: S.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DESCRIPTION
      }), (0, a.jsx)("div", {
        className: L.forumPost,
        children: (0, a.jsx)(I.ForumPostComposerStoreProvider, {
          createStore: () => (0, I.createForumPostComposerStore)(y),
          children: (0, a.jsx)(M.default, {
            threadId: i,
            goToThread: C.NOOP,
            overrideMedia: G
          })
        })
      })]
    }), (0, a.jsxs)(n.ModalFooter, {
      className: L.modalFooter,
      children: [(0, a.jsx)(n.Button, {
        look: n.Button.Looks.BLANK,
        className: L.cancelButton,
        disabled: w,
        onClick: U,
        children: S.default.Messages.CANCEL
      }), (0, a.jsx)(n.Button, {
        color: n.Button.Colors.PRIMARY,
        className: L.dontAddButton,
        disabled: w,
        onClick: H,
        children: S.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DONT_ADD
      }), (0, a.jsx)(n.Button, {
        color: n.Button.Colors.BRAND,
        className: L.__invalid_button,
        submitting: w,
        onClick: $,
        autoFocus: !0,
        children: S.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_ADD
      })]
    })]
  })
}