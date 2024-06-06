"use strict";
i.r(t), i.d(t, {
  default: function() {
    return P
  }
}), i("47120");
var l = i("735250"),
  a = i("470079"),
  s = i("442837"),
  n = i("481060"),
  o = i("904245"),
  r = i("166459"),
  d = i("680287"),
  u = i("163268"),
  c = i("813197"),
  _ = i("592125"),
  f = i("703558"),
  m = i("430824"),
  E = i("375954"),
  p = i("153124"),
  A = i("403182"),
  T = i("709054"),
  g = i("127654"),
  h = i("979956"),
  O = i("228392"),
  M = i("404616"),
  I = i("470623"),
  R = i("981631"),
  C = i("231338"),
  S = i("689938"),
  L = i("250198");

function P(e) {
  var t;
  let {
    threadId: i,
    attachments: P,
    sendMessage: x,
    transitionState: U,
    onClose: v
  } = e, D = (0, p.useUID)(), z = (0, s.useStateFromStores)([_.default], () => _.default.getChannel(i), [i]), y = (0, s.useStateFromStores)([m.default], () => m.default.getGuild(null == z ? void 0 : z.getGuildId()), [z]), b = (0, s.useStateFromStores)([_.default], () => _.default.getChannel(null == z ? void 0 : z.parent_id), [z]), N = null === (t = P[0]) || void 0 === t ? void 0 : t.item, [F, k] = a.useState(null);
  a.useEffect(() => {
    null != N && (0, c.processImage)(N.file, (e, t) => k(e), C.NOOP)
  }, [N]);
  let G = null != N && null != F ? {
      src: F,
      width: M.MAX_THUMBNAIL_WIDTH,
      height: M.MAX_THUMBNAIL_HEIGHT,
      spoiler: P[0].spoiler,
      alt: P[0].description
    } : null,
    [w, B] = a.useState(!1),
    H = a.useCallback(() => {
      (0, O.trackForumAddMediaToOriginalPostClicked)({
        added: !1
      }), x(), v()
    }, [x, v]),
    $ = a.useCallback(() => {
      null != z && null != y && ((0, O.trackForumAddMediaToOriginalPostClicked)({
        added: !0
      }), ! function(e) {
        let {
          thread: t,
          attachments: i,
          setIsUploading: l,
          guild: a,
          onClose: s
        } = e, n = new d.default(R.Endpoints.MESSAGE(t.id, T.default.castChannelIdAsMessageId(t.id)), "PATCH");
        n.on("start", () => {
          l(!0)
        }), n.on("progress", e => {
          let o = (0, A.maxFileSize)(a.id);
          e.currentSize > o && (n.cancel(), l(!1), s(), (0, g.showUploadFileSizeExceededError)(t, (0, h.getWebUploadFiles)(i)))
        }), n.on("error", (e, i, a) => {
          l(!1), i === R.AbortCodes.EXPLICIT_CONTENT && (s(), o.default.sendExplicitMediaClydeError(t.id, null == a ? void 0 : a.attachments, u.TrackMediaRedactionContext.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), r.default.clearAll(t.id, f.DraftType.ChannelMessage))
        }), n.on("complete", () => {
          l(!1), s(), r.default.clearAll(t.id, f.DraftType.ChannelMessage)
        });
        let c = E.default.getMessages(t.id).get(T.default.castChannelIdAsMessageId(t.id)),
          _ = null != c ? c.attachments : [];
        n.uploadFiles(i, {
          attachments: [..._]
        }, {
          addFilesTo: "attachments"
        })
      }({
        thread: z,
        attachments: P,
        setIsUploading: B,
        guild: y,
        onClose: v
      }))
    }, [z, P, B, y, v]);
  return null == b ? null : (0, l.jsxs)(n.ModalRoot, {
    transitionState: U,
    size: n.ModalSize.SMALL,
    className: L.modalRoot,
    "aria-labelledby": D,
    children: [(0, l.jsxs)(n.ModalContent, {
      className: L.modal,
      children: [(0, l.jsx)(n.Heading, {
        variant: "heading-md/semibold",
        className: L.header,
        id: D,
        children: S.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_TITLE
      }), (0, l.jsx)(n.Text, {
        variant: "text-md/normal",
        className: L.__invalid_body,
        children: S.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DESCRIPTION
      }), (0, l.jsx)("div", {
        className: L.forumPost,
        children: (0, l.jsx)(I.ForumPostComposerStoreProvider, {
          createStore: () => (0, I.createForumPostComposerStore)(b),
          children: (0, l.jsx)(M.default, {
            threadId: i,
            goToThread: C.NOOP,
            overrideMedia: G
          })
        })
      })]
    }), (0, l.jsxs)(n.ModalFooter, {
      className: L.modalFooter,
      children: [(0, l.jsx)(n.Button, {
        look: n.Button.Looks.BLANK,
        className: L.cancelButton,
        disabled: w,
        onClick: v,
        children: S.default.Messages.CANCEL
      }), (0, l.jsx)(n.Button, {
        color: n.Button.Colors.PRIMARY,
        className: L.dontAddButton,
        disabled: w,
        onClick: H,
        children: S.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DONT_ADD
      }), (0, l.jsx)(n.Button, {
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