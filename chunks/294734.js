"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("789020");
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
  N = n("689938"),
  S = n("296854");

function C() {
  return (0, s.jsxs)("div", {
    className: S.headerContainer,
    children: [(0, s.jsx)(l.ArrowAngleRightUpIcon, {
      width: 14,
      height: 16,
      color: o.default.colors.HEADER_MUTED
    }), (0, s.jsx)(i.Text, {
      className: S.headerText,
      variant: "text-sm/semibold",
      color: "header-muted",
      children: N.default.Messages.MESSAGE_FORWARDED
    })]
  })
}

function g(e) {
  let {
    message: t,
    snapshot: n,
    index: l
  } = e, r = a.useMemo(() => new p.MessageForward(t, n, l).getForwardInfo(), [t, n, l]), c = a.useCallback(() => {
    (0, h.default)(t, n)
  }, [t, n]);
  return null == r.originLabel ? null : (0, s.jsxs)(d.Clickable, {
    className: S.footerContainer,
    onClick: c,
    children: [null != r.originIconUrl ? (0, s.jsx)("img", {
      className: S.originIcon,
      src: r.originIconUrl,
      alt: ""
    }) : null, (0, s.jsx)(i.Text, {
      className: S.footerText,
      variant: "text-sm/medium",
      color: "none",
      children: "".concat(r.originLabel, "  •  ").concat(r.timestampLabel)
    }), (0, s.jsx)(u.ChevronSmallRightIcon, {
      className: S.footerArrow,
      width: 12,
      height: 12,
      color: o.default.colors.TEXT_LOW_CONTRAST
    })]
  })
}

function A(e) {
  var t;
  let {
    message: n,
    snapshot: l,
    index: i
  } = e, o = a.useMemo(() => n.merge({
    content: l.message.content,
    channel_id: l.message.channel_id,
    attachments: l.message.attachments,
    embeds: l.message.embeds,
    flags: l.message.flags,
    components: l.message.components,
    editedTimestamp: l.message.editedTimestamp,
    timestamp: l.message.timestamp,
    reactions: [],
    messageSnapshots: []
  }), [n, l]), u = _.InlineEmbedMedia.useSetting(), d = _.RenderEmbeds.useSetting(), p = (0, r.useStateFromStores)([T.default], () => T.default.isDeveloper), h = (0, c.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = o.editedTimestamp) && void 0 !== t ? t : o.timestamp).valueOf()), {
    content: N,
    hasSpoilerEmbeds: A
  } = (0, f.default)(o, {
    hideSimpleEmbedContent: u && d,
    isInteracting: !1,
    formatInline: !1,
    allowList: h,
    allowHeading: h,
    allowLinks: !0,
    allowDevLinks: p,
    previewLinkTarget: !0
  }), M = (0, r.useStateFromStores)([m.default], () => m.default.getChannel(n.channel_id)), v = _.MessageDisplayCompact.useSetting();
  return null == M ? null : (0, s.jsxs)("div", {
    className: S.container,
    children: [(0, s.jsx)("div", {
      className: S.quote
    }), (0, s.jsxs)("div", {
      className: S.content,
      children: [(0, s.jsx)(C, {}), (0, s.jsx)(I.default, {
        message: o,
        content: N
      }), (0, E.default)({
        channelMessageProps: {
          message: o,
          channel: M,
          compact: v
        },
        hasSpoilerEmbeds: A,
        isInteracting: !1
      }), (0, s.jsx)(g, {
        message: n,
        snapshot: l,
        index: i
      })]
    })]
  }, i)
}

function M(e) {
  let {
    message: t
  } = e;
  return (0, s.jsx)(s.Fragment, {
    children: t.messageSnapshots.map((e, n) => (0, s.jsx)(A, {
      message: t,
      snapshot: e,
      index: n
    }, n))
  })
}