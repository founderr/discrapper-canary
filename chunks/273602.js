"use strict";
l.r(t), l.d(t, {
  default: function() {
    return R
  }
}), l("47120");
var i = l("735250"),
  n = l("470079"),
  a = l("442837"),
  s = l("481060"),
  r = l("904245"),
  o = l("166459"),
  u = l("680287"),
  d = l("163268"),
  c = l("813197"),
  f = l("592125"),
  m = l("703558"),
  _ = l("430824"),
  p = l("375954"),
  E = l("153124"),
  M = l("403182"),
  g = l("709054"),
  h = l("127654"),
  A = l("979956"),
  x = l("228392"),
  T = l("404616"),
  I = l("470623"),
  C = l("981631"),
  O = l("231338"),
  L = l("689938"),
  S = l("250198");

function R(e) {
  var t;
  let {
    threadId: l,
    attachments: R,
    sendMessage: v,
    transitionState: P,
    onClose: b
  } = e, U = (0, E.useUID)(), y = (0, a.useStateFromStores)([f.default], () => f.default.getChannel(l), [l]), D = (0, a.useStateFromStores)([_.default], () => _.default.getGuild(null == y ? void 0 : y.getGuildId()), [y]), z = (0, a.useStateFromStores)([f.default], () => f.default.getChannel(null == y ? void 0 : y.parent_id), [y]), N = null === (t = R[0]) || void 0 === t ? void 0 : t.item, [F, j] = n.useState(null);
  n.useEffect(() => {
    null != N && (0, c.processImage)(N.file, (e, t) => j(e), O.NOOP)
  }, [N]);
  let w = null != N && null != F ? {
      src: F,
      width: T.MAX_THUMBNAIL_WIDTH,
      height: T.MAX_THUMBNAIL_HEIGHT,
      spoiler: R[0].spoiler,
      alt: R[0].description
    } : null,
    [k, G] = n.useState(!1),
    B = n.useCallback(() => {
      (0, x.trackForumAddMediaToOriginalPostClicked)({
        added: !1
      }), v(), b()
    }, [v, b]),
    H = n.useCallback(() => {
      null != y && null != D && ((0, x.trackForumAddMediaToOriginalPostClicked)({
        added: !0
      }), ! function(e) {
        let {
          thread: t,
          attachments: l,
          setIsUploading: i,
          guild: n,
          onClose: a
        } = e, s = new u.default(C.Endpoints.MESSAGE(t.id, g.default.castChannelIdAsMessageId(t.id)), "PATCH");
        s.on("start", () => {
          i(!0)
        }), s.on("progress", e => {
          let r = (0, M.maxFileSize)(n.id);
          e.currentSize > r && (s.cancel(), i(!1), a(), (0, h.showUploadFileSizeExceededError)(t, (0, A.getWebUploadFiles)(l)))
        }), s.on("error", (e, l, n) => {
          i(!1), l === C.AbortCodes.EXPLICIT_CONTENT && (a(), r.default.sendExplicitMediaClydeError(t.id, null == n ? void 0 : n.attachments, d.TrackMediaRedactionContext.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), o.default.clearAll(t.id, m.DraftType.ChannelMessage))
        }), s.on("complete", () => {
          i(!1), a(), o.default.clearAll(t.id, m.DraftType.ChannelMessage)
        });
        let c = p.default.getMessages(t.id).get(g.default.castChannelIdAsMessageId(t.id)),
          f = null != c ? c.attachments : [];
        s.uploadFiles(l, {
          attachments: [...f]
        }, {
          addFilesTo: "attachments"
        })
      }({
        thread: y,
        attachments: R,
        setIsUploading: G,
        guild: D,
        onClose: b
      }))
    }, [y, R, G, D, b]);
  return null == z ? null : (0, i.jsxs)(s.ModalRoot, {
    transitionState: P,
    size: s.ModalSize.SMALL,
    className: S.modalRoot,
    "aria-labelledby": U,
    children: [(0, i.jsxs)(s.ModalContent, {
      className: S.modal,
      children: [(0, i.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        className: S.header,
        id: U,
        children: L.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_TITLE
      }), (0, i.jsx)(s.Text, {
        variant: "text-md/normal",
        className: S.__invalid_body,
        children: L.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DESCRIPTION
      }), (0, i.jsx)("div", {
        className: S.forumPost,
        children: (0, i.jsx)(I.ForumPostComposerStoreProvider, {
          createStore: () => (0, I.createForumPostComposerStore)(z),
          children: (0, i.jsx)(T.default, {
            threadId: l,
            goToThread: O.NOOP,
            overrideMedia: w
          })
        })
      })]
    }), (0, i.jsxs)(s.ModalFooter, {
      className: S.modalFooter,
      children: [(0, i.jsx)(s.Button, {
        look: s.Button.Looks.BLANK,
        className: S.cancelButton,
        disabled: k,
        onClick: b,
        children: L.default.Messages.CANCEL
      }), (0, i.jsx)(s.Button, {
        color: s.Button.Colors.PRIMARY,
        className: S.dontAddButton,
        disabled: k,
        onClick: B,
        children: L.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DONT_ADD
      }), (0, i.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        className: S.__invalid_button,
        submitting: k,
        onClick: H,
        autoFocus: !0,
        children: L.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_ADD
      })]
    })]
  })
}