"use strict";
n.r(t), n.d(t, {
  ExplicitMediaFalsePositiveModal: function() {
    return A
  },
  handleSuccess: function() {
    return C
  }
});
var s = n("735250"),
  l = n("470079"),
  a = n("803997"),
  i = n.n(a),
  r = n("470167"),
  o = n("481060"),
  u = n("572691"),
  d = n("118139"),
  c = n("584656"),
  E = n("153124"),
  f = n("810090"),
  _ = n("163268"),
  T = n("719548"),
  I = n("689938"),
  m = n("937510");
let N = e => {
    let {
      attachment: t
    } = e, {
      url: n,
      description: l
    } = t;
    return null == n ? null : (0, s.jsx)(S, {
      url: n,
      description: l
    })
  },
  p = e => {
    var t, n, l;
    let {
      embed: a
    } = e;
    if (!T.SUPPORTED_EMBED_TYPES.has(a.type)) return null;
    let i = void 0 !== a.video && a.type !== r.MessageEmbedTypes.GIFV ? a.video.url : null !== (l = null === (t = a.thumbnail) || void 0 === t ? void 0 : t.url) && void 0 !== l ? l : null === (n = a.image) || void 0 === n ? void 0 : n.url;
    return null == i ? null : (0, s.jsx)(S, {
      url: i
    })
  },
  S = e => {
    let {
      url: t,
      description: n
    } = e, l = (0, d.isVideoUrl)(t);
    return (0, s.jsx)("div", {
      className: m.mediaContainer,
      children: l ? (0, s.jsx)(f.default, {
        className: i()(m.video, m.media),
        controls: !0,
        src: t
      }) : (0, s.jsx)("img", {
        className: i()(m.image, m.media),
        src: t,
        alt: n
      })
    })
  };

function C(e) {
  u.default.pop(), (0, c.showSafetyToast)({
    id: "explicit-media-false-positive-modal",
    text: I.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS
  }), e()
}

function A(e) {
  let {
    channelId: t,
    messageId: n,
    isReportFalsePositiveLoading: a,
    analyticsContext: i,
    attachmentPreview: r,
    embedPreview: u,
    onConfirmPress: d,
    transitionState: c,
    onClose: f
  } = e, T = (0, E.useUID)(), S = l.useCallback(() => {
    (0, _.trackMediaRedactionAction)({
      action: _.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId: t,
      messageId: n,
      context: i
    }), f()
  }, [t, n, i, f]), C = l.useCallback(() => {
    null == d || d(), (0, _.trackMediaRedactionAction)({
      action: _.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
      channelId: t,
      messageId: n,
      context: i
    })
  }, [t, n, i, d]);
  return l.useEffect(() => {
    (0, _.trackMediaRedactionAction)({
      action: _.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
      channelId: t,
      messageId: n,
      context: i
    })
  }, [t, n, i]), (0, s.jsxs)(o.ModalRoot, {
    transitionState: c,
    "aria-labelledby": T,
    size: o.ModalSize.SMALL,
    children: [(0, s.jsxs)(o.ModalContent, {
      children: [(0, s.jsx)(o.ModalCloseButton, {
        onClick: S,
        className: m.closeButton
      }), (0, s.jsx)(o.Heading, {
        id: T,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: m.header,
        children: I.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_HEADER
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: m.subheader,
        children: I.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_DESCRIPTION
      }), null != r && (0, s.jsx)(N, {
        attachment: r
      }), null != u && (0, s.jsx)(p, {
        embed: u
      })]
    }), (0, s.jsxs)(o.ModalFooter, {
      children: [(0, s.jsx)(o.Button, {
        className: m.button,
        disabled: a,
        submitting: a,
        size: o.Button.Sizes.MEDIUM,
        color: o.Button.Colors.BRAND,
        onClick: C,
        children: I.default.Messages.CONFIRM
      }), (0, s.jsx)(o.Button, {
        className: m.button,
        disabled: a,
        color: o.Button.Colors.TRANSPARENT,
        size: o.Button.Sizes.MEDIUM,
        onClick: S,
        children: I.default.Messages.CANCEL
      })]
    })]
  })
}