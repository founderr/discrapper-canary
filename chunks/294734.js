"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
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
  E = n("25015"),
  f = n("438075"),
  _ = n("695346"),
  T = n("592125"),
  m = n("906467"),
  I = n("113039"),
  N = n("100604"),
  p = n("694784"),
  S = n("39154"),
  C = n("689938"),
  A = n("296854");

function h() {
  return (0, s.jsxs)("div", {
    className: A.headerContainer,
    children: [(0, s.jsx)(l.ArrowAngleRightUpIcon, {
      width: 14,
      height: 16,
      color: o.default.colors.HEADER_MUTED
    }), (0, s.jsx)(i.Text, {
      className: A.headerText,
      variant: "text-sm/semibold",
      color: "header-muted",
      children: C.default.Messages.MESSAGE_FORWARDED
    })]
  })
}

function g(e) {
  let {
    message: t,
    snapshot: n,
    index: l
  } = e, r = a.useMemo(() => new N.MessageForward(t, n, l).getForwardInfo(), [t, n, l]), c = a.useCallback(() => {
    (0, p.default)(t, n)
  }, [t, n]);
  return null == r.originLabel ? null : (0, s.jsxs)(d.Clickable, {
    className: A.footerContainer,
    onClick: c,
    children: [null != r.originIconUrl ? (0, s.jsx)("img", {
      className: A.originIcon,
      src: r.originIconUrl,
      alt: ""
    }) : null, (0, s.jsx)(i.Text, {
      className: A.footerText,
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
  } = e, o = a.useMemo(() => (0, S.default)(n, l), [n, l]), u = _.InlineEmbedMedia.useSetting(), d = _.RenderEmbeds.useSetting(), N = (0, r.useStateFromStores)([m.default], () => m.default.isDeveloper), p = (0, c.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = o.editedTimestamp) && void 0 !== t ? t : o.timestamp).valueOf()), {
    content: C,
    hasSpoilerEmbeds: M
  } = (0, E.default)(o, {
    hideSimpleEmbedContent: u && d,
    isInteracting: !1,
    formatInline: !1,
    allowList: p,
    allowHeading: p,
    allowLinks: !0,
    allowDevLinks: N,
    previewLinkTarget: !0
  }), O = (0, r.useStateFromStores)([T.default], () => T.default.getChannel(n.channel_id)), R = _.MessageDisplayCompact.useSetting();
  return null == O ? null : (0, s.jsxs)("div", {
    className: A.container,
    children: [(0, s.jsx)("div", {
      className: A.quote
    }), (0, s.jsxs)("div", {
      className: A.content,
      children: [(0, s.jsx)(h, {}), (0, s.jsx)(I.default, {
        message: o,
        content: C
      }), (0, f.default)({
        channelMessageProps: {
          message: o,
          channel: O,
          compact: R
        },
        hasSpoilerEmbeds: M,
        isInteracting: !1
      }), (0, s.jsx)(g, {
        message: n,
        snapshot: l,
        index: i
      })]
    })]
  }, i)
}

function O(e) {
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