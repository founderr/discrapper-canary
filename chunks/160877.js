n.d(t, {
  $: function() {
    return p
  },
  s: function() {
    return A
  }
});
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(470167),
  o = n(481060),
  c = n(572691),
  u = n(406432),
  d = n(584656),
  E = n(153124),
  _ = n(810090),
  I = n(163268),
  T = n(719548),
  N = n(689938),
  m = n(344898);
let h = e => {
    let {
      attachment: t
    } = e, {
      url: n,
      description: i
    } = t;
    return null == n ? null : (0, s.jsx)(S, {
      url: n,
      description: i
    })
  },
  C = e => {
    var t, n, i;
    let {
      embed: l
    } = e;
    if (!T.n2.has(l.type)) return null;
    let a = void 0 !== l.video && l.type !== r.h.GIFV ? l.video.url : null !== (i = null === (t = l.thumbnail) || void 0 === t ? void 0 : t.url) && void 0 !== i ? i : null === (n = l.image) || void 0 === n ? void 0 : n.url;
    return null == a ? null : (0, s.jsx)(S, {
      url: a
    })
  },
  S = e => {
    let {
      url: t,
      description: n
    } = e, i = (0, u.cb)(t);
    return (0, s.jsx)("div", {
      className: m.mediaContainer,
      children: i ? (0, s.jsx)(_.Z, {
        className: a()(m.video, m.media),
        controls: !0,
        src: t
      }) : (0, s.jsx)("img", {
        className: a()(m.image, m.media),
        src: t,
        alt: n
      })
    })
  };

function A(e) {
  c.Z.pop(), (0, d.t)({
    id: "explicit-media-false-positive-modal",
    text: N.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS
  }), e()
}

function p(e) {
  let {
    channelId: t,
    messageId: n,
    isReportFalsePositiveLoading: l,
    analyticsContext: a,
    attachmentPreview: r,
    embedPreview: c,
    onConfirmPress: u,
    transitionState: d,
    onClose: _
  } = e, T = (0, E.Dt)(), S = i.useCallback(() => {
    (0, I.aP)({
      action: I.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId: t,
      messageId: n,
      context: a
    }), _()
  }, [t, n, a, _]), A = i.useCallback(() => {
    null == u || u(), (0, I.aP)({
      action: I.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
      channelId: t,
      messageId: n,
      context: a
    })
  }, [t, n, a, u]);
  return i.useEffect(() => {
    (0, I.aP)({
      action: I.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
      channelId: t,
      messageId: n,
      context: a
    })
  }, [t, n, a]), (0, s.jsxs)(o.ModalRoot, {
    transitionState: d,
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
        children: N.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_HEADER
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: m.subheader,
        children: N.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_DESCRIPTION
      }), null != r && (0, s.jsx)(h, {
        attachment: r
      }), null != c && (0, s.jsx)(C, {
        embed: c
      })]
    }), (0, s.jsxs)(o.ModalFooter, {
      children: [(0, s.jsx)(o.Button, {
        className: m.button,
        disabled: l,
        submitting: l,
        size: o.Button.Sizes.MEDIUM,
        color: o.Button.Colors.BRAND,
        onClick: A,
        children: N.Z.Messages.CONFIRM
      }), (0, s.jsx)(o.Button, {
        className: m.button,
        disabled: l,
        color: o.Button.Colors.TRANSPARENT,
        size: o.Button.Sizes.MEDIUM,
        onClick: S,
        children: N.Z.Messages.CANCEL
      })]
    })]
  })
}