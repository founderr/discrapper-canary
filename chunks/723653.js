"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
});
var s = a("37983"),
  l = a("884691"),
  i = a("414456"),
  n = a.n(i),
  o = a("246111"),
  d = a("77078"),
  r = a("772017"),
  c = a("651693"),
  u = a("476765"),
  E = a("58608"),
  _ = a("695681"),
  M = a("457971"),
  T = a("447435"),
  C = a("908480"),
  R = a("39393"),
  A = a("612920"),
  I = a("782340"),
  f = a("629325");
let N = e => {
    let {
      attachment: t
    } = e, {
      url: a,
      description: l
    } = t;
    return null == a ? null : (0, s.jsx)(O, {
      url: a,
      description: l
    })
  },
  S = e => {
    var t, a, l;
    let {
      embed: i
    } = e;
    if (!A.SUPPORTED_EMBED_TYPES.has(i.type)) return null;
    let n = void 0 !== i.video && i.type !== o.MessageEmbedTypes.GIFV ? i.video.url : null !== (l = null === (t = i.thumbnail) || void 0 === t ? void 0 : t.url) && void 0 !== l ? l : null === (a = i.image) || void 0 === a ? void 0 : a.url;
    return null == n ? null : (0, s.jsx)(O, {
      url: n
    })
  },
  O = e => {
    let {
      url: t,
      description: a
    } = e, l = (0, c.isVideoUrl)(t);
    return (0, s.jsx)("div", {
      className: f.mediaContainer,
      children: l ? (0, s.jsx)(E.default, {
        className: n(f.video, f.media),
        controls: !0,
        src: t
      }) : (0, s.jsx)("img", {
        className: n(f.image, f.media),
        src: t,
        alt: a
      })
    })
  };

function h(e) {
  let {
    channelId: t,
    messageId: a,
    attachmentId: i,
    embedId: n,
    transitionState: o,
    onClose: c
  } = e, E = (0, u.useUID)(), A = (0, M.useIsEligibleForExplicitMediaRedaction)(), O = (0, R.useExplicitMediaAttachmentsForMessage)(t, a, i), h = (0, R.useExplicitMediaEmbedsForMessage)(t, a, n), m = l.useCallback(() => {
    r.default.pop(), (0, d.showToast)((0, d.createToast)(I.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS, d.ToastType.CUSTOM)), c()
  }, [c]), {
    reportFalsePositive: g,
    isReportFalsePositiveLoading: L
  } = (0, C.useExplicitMediaActions)({
    onSuccess: m,
    onError: () => {
      (0, d.showToast)((0, d.createToast)(I.default.Messages.ERROR_GENERIC_TITLE, d.ToastType.FAILURE))
    },
    report: () => {
      (0, _.reportFalsePositive)(t, a, O.map(e => e.id), h.map(e => e.id))
    }
  }), p = () => {
    (0, T.trackMediaRedactionAction)({
      action: T.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId: t,
      messageId: a
    }), c()
  }, D = A && (O.length > 0 || h.length > 0);
  return l.useEffect(() => {
    D && (0, T.trackMediaRedactionAction)({
      action: T.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
      channelId: t,
      messageId: a
    })
  }, [t, a, D]), !D && p(), (0, s.jsxs)(d.ModalRoot, {
    transitionState: o,
    "aria-labelledby": E,
    size: d.ModalSize.SMALL,
    children: [(0, s.jsxs)(d.ModalContent, {
      children: [(0, s.jsx)(d.ModalCloseButton, {
        onClick: p,
        className: f.closeButton
      }), (0, s.jsx)(d.Heading, {
        id: E,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: f.header,
        children: I.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_HEADER
      }), (0, s.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: f.subheader,
        children: I.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_DESCRIPTION
      }), 1 === O.length && 0 === h.length ? (0, s.jsx)(N, {
        attachment: O[0]
      }) : null, 1 === h.length && 0 === O.length ? (0, s.jsx)(S, {
        embed: h[0]
      }) : null]
    }), (0, s.jsxs)(d.ModalFooter, {
      children: [(0, s.jsx)(d.Button, {
        className: f.button,
        disabled: L,
        submitting: L,
        size: d.Button.Sizes.MEDIUM,
        color: d.Button.Colors.BRAND,
        onClick: () => {
          g(), (0, T.trackMediaRedactionAction)({
            action: T.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
            channelId: t,
            messageId: a
          })
        },
        children: I.default.Messages.CONFIRM
      }), (0, s.jsx)(d.Button, {
        className: f.button,
        disabled: L,
        color: d.Button.Colors.TRANSPARENT,
        size: d.Button.Sizes.MEDIUM,
        onClick: p,
        children: I.default.Messages.CANCEL
      })]
    })]
  })
}