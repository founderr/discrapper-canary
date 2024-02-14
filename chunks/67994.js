"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("446674"),
  s = n("77078"),
  r = n("819689"),
  u = n("81594"),
  o = n("681736"),
  d = n("447435"),
  c = n("694187"),
  f = n("42203"),
  m = n("474643"),
  g = n("305961"),
  _ = n("377253"),
  h = n("476765"),
  p = n("254490"),
  E = n("412861"),
  M = n("834021"),
  x = n("867965"),
  A = n("152637"),
  S = n("578198"),
  T = n("49111"),
  v = n("843455"),
  C = n("782340"),
  O = n("106847");

function R(e) {
  var t;
  let {
    threadId: n,
    attachments: R,
    sendMessage: I,
    transitionState: b,
    onClose: L
  } = e, y = (0, h.useUID)(), F = (0, a.useStateFromStores)([f.default], () => f.default.getChannel(n), [n]), U = (0, a.useStateFromStores)([g.default], () => g.default.getGuild(null == F ? void 0 : F.getGuildId()), [F]), N = (0, a.useStateFromStores)([f.default], () => f.default.getChannel(null == F ? void 0 : F.parent_id), [F]), D = null === (t = R[0]) || void 0 === t ? void 0 : t.item, [P, j] = i.useState(null);
  i.useEffect(() => {
    null != D && (0, c.processImage)(D.file, (e, t) => j(e), v.NOOP)
  }, [D]);
  let z = null != D && null != P ? {
      src: P,
      width: A.MAX_THUMBNAIL_WIDTH,
      height: A.MAX_THUMBNAIL_HEIGHT,
      spoiler: R[0].spoiler,
      alt: R[0].description
    } : null,
    [w, G] = i.useState(!1),
    k = i.useCallback(() => {
      (0, x.trackForumAddMediaToOriginalPostClicked)({
        added: !1
      }), I(), L()
    }, [I, L]),
    B = i.useCallback(() => {
      null != F && null != U && ((0, x.trackForumAddMediaToOriginalPostClicked)({
        added: !0
      }), ! function(e) {
        let {
          thread: t,
          attachments: n,
          setIsUploading: l,
          guild: i,
          onClose: a
        } = e, s = new o.default(T.Endpoints.MESSAGE(t.id, t.id), "PATCH");
        s.on("start", () => {
          l(!0)
        }), s.on("progress", e => {
          let r = (0, p.maxFileSize)(i.id);
          e.currentSize > r && (s.cancel(), l(!1), a(), (0, E.showUploadFileSizeExceededError)(t, (0, M.getWebUploadFiles)(n)))
        }), s.on("error", (e, n, i) => {
          l(!1), n === T.AbortCodes.EXPLICIT_CONTENT && (a(), r.default.sendExplicitMediaClydeError(t.id, null == i ? void 0 : i.attachments, d.TrackMediaRedactionContext.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), u.default.clearAll(t.id, m.DraftType.ChannelMessage))
        }), s.on("complete", () => {
          l(!1), a(), u.default.clearAll(t.id, m.DraftType.ChannelMessage)
        });
        let c = _.default.getMessages(t.id).get(t.id),
          f = null != c ? c.attachments : [];
        s.uploadFiles(n, {
          attachments: [...f]
        }, {
          addFilesTo: "attachments"
        })
      }({
        thread: F,
        attachments: R,
        setIsUploading: G,
        guild: U,
        onClose: L
      }))
    }, [F, R, G, U, L]);
  return null == N ? null : (0, l.jsxs)(s.ModalRoot, {
    transitionState: b,
    size: s.ModalSize.SMALL,
    className: O.modalRoot,
    "aria-labelledby": y,
    children: [(0, l.jsxs)(s.ModalContent, {
      className: O.modal,
      children: [(0, l.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        className: O.header,
        id: y,
        children: C.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_TITLE
      }), (0, l.jsx)(s.Text, {
        variant: "text-md/normal",
        className: O.body,
        children: C.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DESCRIPTION
      }), (0, l.jsx)("div", {
        className: O.forumPost,
        children: (0, l.jsx)(S.ForumPostComposerStoreProvider, {
          createStore: () => (0, S.createForumPostComposerStore)(N),
          children: (0, l.jsx)(A.default, {
            threadId: n,
            goToThread: v.NOOP,
            overrideMedia: z
          })
        })
      })]
    }), (0, l.jsxs)(s.ModalFooter, {
      className: O.modalFooter,
      children: [(0, l.jsx)(s.Button, {
        look: s.Button.Looks.BLANK,
        className: O.cancelButton,
        disabled: w,
        onClick: L,
        children: C.default.Messages.CANCEL
      }), (0, l.jsx)(s.Button, {
        color: s.Button.Colors.PRIMARY,
        className: O.dontAddButton,
        disabled: w,
        onClick: k,
        children: C.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DONT_ADD
      }), (0, l.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        className: O.button,
        submitting: w,
        onClick: B,
        autoFocus: !0,
        children: C.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_ADD
      })]
    })]
  })
}