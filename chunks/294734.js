"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
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
  c = n("356264"),
  f = n("628238"),
  E = n("25015"),
  _ = n("438075"),
  m = n("695346"),
  T = n("592125"),
  I = n("906467"),
  p = n("430824"),
  h = n("496675"),
  N = n("699516"),
  S = n("594174"),
  C = n("113039"),
  g = n("100604"),
  A = n("694784"),
  M = n("39154"),
  R = n("689938"),
  v = n("296854");

function O() {
  return (0, s.jsxs)("div", {
    className: v.headerContainer,
    children: [(0, s.jsx)(l.ArrowAngleRightUpIcon, {
      width: 14,
      height: 16,
      color: o.default.colors.TEXT_LOW_CONTRAST
    }), (0, s.jsx)(i.Text, {
      className: v.headerText,
      variant: "text-sm/semibold",
      color: "text-low-contrast",
      children: R.default.Messages.MESSAGE_FORWARDED
    })]
  })
}

function x(e) {
  let {
    message: t,
    snapshot: n,
    index: l
  } = e, f = a.useMemo(() => new g.MessageForward(t, n, l), [t, n, l]), E = (0, r.useStateFromStores)([T.default, S.default, N.default, h.default, p.default, c.default], () => f.getForwardInfo(T.default, S.default, N.default, h.default, p.default, c.default)), _ = a.useCallback(() => {
    (0, A.default)(t, n)
  }, [t, n]), m = E.footerInfo;
  return null == m ? null : (0, s.jsxs)(d.Clickable, {
    className: v.footerContainer,
    onClick: _,
    children: [null != m.originIconUrl ? (0, s.jsx)("img", {
      className: v.originIcon,
      src: m.originIconUrl,
      alt: ""
    }) : null, (0, s.jsx)(i.Text, {
      className: v.footerText,
      variant: "text-sm/medium",
      color: "none",
      children: "".concat(m.originLabel, "  •  ").concat(m.timestampLabel)
    }), (0, s.jsx)(u.ChevronSmallRightIcon, {
      width: 12,
      height: 12,
      color: o.default.colors.TEXT_LOW_CONTRAST
    })]
  })
}

function L(e) {
  var t;
  let {
    message: n,
    snapshot: l,
    index: i
  } = e, o = a.useMemo(() => (0, M.default)(n, l), [n, l]), u = m.InlineEmbedMedia.useSetting(), d = m.RenderEmbeds.useSetting(), c = (0, r.useStateFromStores)([I.default], () => I.default.isDeveloper), p = (0, f.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = o.editedTimestamp) && void 0 !== t ? t : o.timestamp).valueOf()), {
    content: h,
    hasSpoilerEmbeds: N
  } = (0, E.default)(o, {
    hideSimpleEmbedContent: u && d,
    isInteracting: !1,
    formatInline: !1,
    allowList: p,
    allowHeading: p,
    allowLinks: !0,
    allowDevLinks: c,
    previewLinkTarget: !0
  }), S = (0, r.useStateFromStores)([T.default], () => T.default.getChannel(n.channel_id)), g = m.MessageDisplayCompact.useSetting();
  return null == S ? null : (0, s.jsxs)("div", {
    className: v.container,
    children: [(0, s.jsx)("div", {
      className: v.quote
    }), (0, s.jsxs)("div", {
      className: v.content,
      children: [(0, s.jsx)(O, {}), (0, s.jsx)(C.default, {
        message: o,
        content: h
      }), (0, _.default)({
        channelMessageProps: {
          message: o,
          channel: S,
          compact: g
        },
        hasSpoilerEmbeds: N,
        isInteracting: !1
      }), (0, s.jsx)(x, {
        message: n,
        snapshot: l,
        index: i
      })]
    })]
  }, i)
}

function D(e) {
  let {
    message: t
  } = e;
  return (0, s.jsx)(s.Fragment, {
    children: t.messageSnapshots.map((e, n) => (0, s.jsx)(L, {
      message: t,
      snapshot: e,
      index: n
    }, n))
  })
}