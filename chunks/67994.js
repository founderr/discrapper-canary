"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  i = n("446674"),
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
  E = n("299039"),
  M = n("412861"),
  x = n("834021"),
  A = n("867965"),
  S = n("152637"),
  T = n("578198"),
  v = n("49111"),
  C = n("843455"),
  I = n("782340"),
  O = n("106847");

function R(e) {
  var t;
  let {
    threadId: n,
    attachments: R,
    sendMessage: b,
    transitionState: L,
    onClose: y
  } = e, F = (0, h.useUID)(), U = (0, i.useStateFromStores)([f.default], () => f.default.getChannel(n), [n]), N = (0, i.useStateFromStores)([g.default], () => g.default.getGuild(null == U ? void 0 : U.getGuildId()), [U]), D = (0, i.useStateFromStores)([f.default], () => f.default.getChannel(null == U ? void 0 : U.parent_id), [U]), P = null === (t = R[0]) || void 0 === t ? void 0 : t.item, [j, z] = a.useState(null);
  a.useEffect(() => {
    null != P && (0, c.processImage)(P.file, (e, t) => z(e), C.NOOP)
  }, [P]);
  let w = null != P && null != j ? {
      src: j,
      width: S.MAX_THUMBNAIL_WIDTH,
      height: S.MAX_THUMBNAIL_HEIGHT,
      spoiler: R[0].spoiler,
      alt: R[0].description
    } : null,
    [G, k] = a.useState(!1),
    B = a.useCallback(() => {
      (0, A.trackForumAddMediaToOriginalPostClicked)({
        added: !1
      }), b(), y()
    }, [b, y]),
    q = a.useCallback(() => {
      null != U && null != N && ((0, A.trackForumAddMediaToOriginalPostClicked)({
        added: !0
      }), ! function(e) {
        let {
          thread: t,
          attachments: n,
          setIsUploading: l,
          guild: a,
          onClose: i
        } = e, s = new o.default(v.Endpoints.MESSAGE(t.id, E.default.castChannelIdAsMessageId(t.id)), "PATCH");
        s.on("start", () => {
          l(!0)
        }), s.on("progress", e => {
          let r = (0, p.maxFileSize)(a.id);
          e.currentSize > r && (s.cancel(), l(!1), i(), (0, M.showUploadFileSizeExceededError)(t, (0, x.getWebUploadFiles)(n)))
        }), s.on("error", (e, n, a) => {
          l(!1), n === v.AbortCodes.EXPLICIT_CONTENT && (i(), r.default.sendExplicitMediaClydeError(t.id, null == a ? void 0 : a.attachments, d.TrackMediaRedactionContext.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), u.default.clearAll(t.id, m.DraftType.ChannelMessage))
        }), s.on("complete", () => {
          l(!1), i(), u.default.clearAll(t.id, m.DraftType.ChannelMessage)
        });
        let c = _.default.getMessages(t.id).get(E.default.castChannelIdAsMessageId(t.id)),
          f = null != c ? c.attachments : [];
        s.uploadFiles(n, {
          attachments: [...f]
        }, {
          addFilesTo: "attachments"
        })
      }({
        thread: U,
        attachments: R,
        setIsUploading: k,
        guild: N,
        onClose: y
      }))
    }, [U, R, k, N, y]);
  return null == D ? null : (0, l.jsxs)(s.ModalRoot, {
    transitionState: L,
    size: s.ModalSize.SMALL,
    className: O.modalRoot,
    "aria-labelledby": F,
    children: [(0, l.jsxs)(s.ModalContent, {
      className: O.modal,
      children: [(0, l.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        className: O.header,
        id: F,
        children: I.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_TITLE
      }), (0, l.jsx)(s.Text, {
        variant: "text-md/normal",
        className: O.body,
        children: I.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DESCRIPTION
      }), (0, l.jsx)("div", {
        className: O.forumPost,
        children: (0, l.jsx)(T.ForumPostComposerStoreProvider, {
          createStore: () => (0, T.createForumPostComposerStore)(D),
          children: (0, l.jsx)(S.default, {
            threadId: n,
            goToThread: C.NOOP,
            overrideMedia: w
          })
        })
      })]
    }), (0, l.jsxs)(s.ModalFooter, {
      className: O.modalFooter,
      children: [(0, l.jsx)(s.Button, {
        look: s.Button.Looks.BLANK,
        className: O.cancelButton,
        disabled: G,
        onClick: y,
        children: I.default.Messages.CANCEL
      }), (0, l.jsx)(s.Button, {
        color: s.Button.Colors.PRIMARY,
        className: O.dontAddButton,
        disabled: G,
        onClick: B,
        children: I.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DONT_ADD
      }), (0, l.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        className: O.button,
        submitting: G,
        onClick: q,
        autoFocus: !0,
        children: I.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_ADD
      })]
    })]
  })
}