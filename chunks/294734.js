"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("59262"),
  i = n("793030"),
  r = n("442837"),
  o = n("692547"),
  u = n("465270"),
  d = n("481060"),
  c = n("628238"),
  f = n("25015"),
  E = n("438075"),
  _ = n("695346"),
  m = n("592125"),
  T = n("906467"),
  I = n("113039"),
  p = n("100604"),
  h = n("694784"),
  N = n("39154"),
  S = n("689938"),
  C = n("296854");

function g() {
  return (0, s.jsxs)("div", {
    className: C.headerContainer,
    children: [(0, s.jsx)(l.ArrowAngleRightUpIcon, {
      width: 14,
      height: 16,
      color: o.default.colors.HEADER_MUTED
    }), (0, s.jsx)(i.Text, {
      className: C.headerText,
      variant: "text-sm/semibold",
      color: "header-muted",
      children: S.default.Messages.MESSAGE_FORWARDED
    })]
  })
}

function A(e) {
  let {
    message: t,
    snapshot: n,
    index: l
  } = e, r = a.useMemo(() => new p.MessageForward(t, n, l).getForwardInfo(), [t, n, l]), c = a.useCallback(() => {
    (0, h.default)(t, n)
  }, [t, n]);
  return null == r.originLabel ? null : (0, s.jsxs)(d.Clickable, {
    className: C.footerContainer,
    onClick: c,
    children: [null != r.originIconUrl ? (0, s.jsx)("img", {
      className: C.originIcon,
      src: r.originIconUrl,
      alt: ""
    }) : null, (0, s.jsx)(i.Text, {
      className: C.footerText,
      variant: "text-sm/medium",
      color: "none",
      children: "".concat(r.originLabel, "  •  ").concat(r.timestampLabel)
    }), (0, s.jsx)(u.ChevronSmallRightIcon, {
      width: 12,
      height: 12,
      color: o.default.colors.TEXT_LOW_CONTRAST
    })]
  })
}

function M(e) {
  var t;
  let {
    message: n,
    snapshot: l,
    index: i
  } = e, o = a.useMemo(() => (0, N.default)(n, l), [n, l]), u = _.InlineEmbedMedia.useSetting(), d = _.RenderEmbeds.useSetting(), p = (0, r.useStateFromStores)([T.default], () => T.default.isDeveloper), h = (0, c.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = o.editedTimestamp) && void 0 !== t ? t : o.timestamp).valueOf()), {
    content: S,
    hasSpoilerEmbeds: M
  } = (0, f.default)(o, {
    hideSimpleEmbedContent: u && d,
    isInteracting: !1,
    formatInline: !1,
    allowList: h,
    allowHeading: h,
    allowLinks: !0,
    allowDevLinks: p,
    previewLinkTarget: !0
  }), v = (0, r.useStateFromStores)([m.default], () => m.default.getChannel(n.channel_id)), R = _.MessageDisplayCompact.useSetting();
  return null == v ? null : (0, s.jsxs)("div", {
    className: C.container,
    children: [(0, s.jsx)("div", {
      className: C.quote
    }), (0, s.jsxs)("div", {
      className: C.content,
      children: [(0, s.jsx)(g, {}), (0, s.jsx)(I.default, {
        message: o,
        content: S
      }), (0, E.default)({
        channelMessageProps: {
          message: o,
          channel: v,
          compact: R
        },
        hasSpoilerEmbeds: M,
        isInteracting: !1
      }), (0, s.jsx)(A, {
        message: n,
        snapshot: l,
        index: i
      })]
    })]
  }, i)
}

function v(e) {
  let {
    message: t
  } = e;
  return (0, s.jsx)(s.Fragment, {
    children: t.messageSnapshots.map((e, n) => (0, s.jsx)(M, {
      message: t,
      snapshot: e,
      index: n
    }, n))
  })
}