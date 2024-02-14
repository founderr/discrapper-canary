"use strict";
n.r(t), n.d(t, {
  handleSuccess: function() {
    return h
  },
  ExplicitMediaFalsePositiveModal: function() {
    return g
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("246111"),
  o = n("877585"),
  u = n("77078"),
  d = n("772017"),
  c = n("651693"),
  E = n("476765"),
  f = n("58608"),
  _ = n("447435"),
  T = n("612920"),
  I = n("782340"),
  m = n("833825"),
  N = n("882746");
let p = e => {
    let {
      attachment: t
    } = e, {
      url: n,
      description: l
    } = t;
    return null == n ? null : (0, s.jsx)(A, {
      url: n,
      description: l
    })
  },
  S = e => {
    var t, n, l;
    let {
      embed: a
    } = e;
    if (!T.SUPPORTED_EMBED_TYPES.has(a.type)) return null;
    let i = void 0 !== a.video && a.type !== r.MessageEmbedTypes.GIFV ? a.video.url : null !== (l = null === (t = a.thumbnail) || void 0 === t ? void 0 : t.url) && void 0 !== l ? l : null === (n = a.image) || void 0 === n ? void 0 : n.url;
    return null == i ? null : (0, s.jsx)(A, {
      url: i
    })
  },
  A = e => {
    let {
      url: t,
      description: n
    } = e, l = (0, c.isVideoUrl)(t);
    return (0, s.jsx)("div", {
      className: m.mediaContainer,
      children: l ? (0, s.jsx)(f.default, {
        className: i(m.video, m.media),
        controls: !0,
        src: t
      }) : (0, s.jsx)("img", {
        className: i(m.image, m.media),
        src: t,
        alt: n
      })
    })
  };

function C() {
  return (0, s.jsxs)("div", {
    className: i(N.toast, m.toast),
    children: [(0, s.jsx)(o.ShieldIcon, {
      color: u.tokens.colors.TEXT_BRAND
    }), (0, s.jsx)(u.Text, {
      className: N.content,
      color: "header-primary",
      variant: "text-md/normal",
      children: I.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS
    })]
  })
}

function h(e) {
  d.default.pop(), (0, u.showToast)((0, u.createToast)(I.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS, u.ToastType.CUSTOM, {
    component: (0, s.jsx)(C, {})
  })), e()
}

function g(e) {
  let {
    channelId: t,
    messageId: n,
    isReportFalsePositiveLoading: a,
    analyticsContext: i,
    attachmentPreview: r,
    embedPreview: o,
    onConfirmPress: d,
    transitionState: c,
    onClose: f
  } = e, T = (0, E.useUID)(), N = l.useCallback(() => {
    (0, _.trackMediaRedactionAction)({
      action: _.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId: t,
      messageId: n,
      context: i
    }), f()
  }, [t, n, i, f]), A = l.useCallback(() => {
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
  }, [t, n, i]), (0, s.jsxs)(u.ModalRoot, {
    transitionState: c,
    "aria-labelledby": T,
    size: u.ModalSize.SMALL,
    children: [(0, s.jsxs)(u.ModalContent, {
      children: [(0, s.jsx)(u.ModalCloseButton, {
        onClick: N,
        className: m.closeButton
      }), (0, s.jsx)(u.Heading, {
        id: T,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: m.header,
        children: I.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_HEADER
      }), (0, s.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: m.subheader,
        children: I.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_DESCRIPTION
      }), null != r && (0, s.jsx)(p, {
        attachment: r
      }), null != o && (0, s.jsx)(S, {
        embed: o
      })]
    }), (0, s.jsxs)(u.ModalFooter, {
      children: [(0, s.jsx)(u.Button, {
        className: m.button,
        disabled: a,
        submitting: a,
        size: u.Button.Sizes.MEDIUM,
        color: u.Button.Colors.BRAND,
        onClick: A,
        children: I.default.Messages.CONFIRM
      }), (0, s.jsx)(u.Button, {
        className: m.button,
        disabled: a,
        color: u.Button.Colors.TRANSPARENT,
        size: u.Button.Sizes.MEDIUM,
        onClick: N,
        children: I.default.Messages.CANCEL
      })]
    })]
  })
}