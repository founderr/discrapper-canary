"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("793030"),
  i = n("442837"),
  r = n("902704"),
  o = n("692547"),
  u = n("255025"),
  d = n("465270"),
  c = n("481060"),
  f = n("356264"),
  E = n("628238"),
  _ = n("25015"),
  T = n("438075"),
  m = n("695346"),
  I = n("592125"),
  N = n("906467"),
  p = n("430824"),
  h = n("496675"),
  S = n("699516"),
  C = n("594174"),
  A = n("113039"),
  g = n("100604"),
  M = n("694784"),
  R = n("39154"),
  O = n("689938"),
  v = n("296854");

function x() {
  return (0, s.jsxs)("div", {
    className: v.headerContainer,
    children: [(0, s.jsx)(u.ChatArrowRightIcon, {
      width: 16,
      height: 16,
      color: o.default.colors.TEXT_LOW_CONTRAST
    }), (0, s.jsx)(l.Text, {
      className: v.headerText,
      variant: "text-sm/semibold",
      color: "text-low-contrast",
      children: O.default.Messages.MESSAGE_FORWARDED
    })]
  })
}

function L(e) {
  let {
    message: t,
    snapshot: n,
    index: u
  } = e, E = a.useMemo(() => new g.MessageForward(t, n, u), [t, n, u]), _ = (0, i.useStateFromStores)([I.default, C.default, S.default, h.default, p.default, f.default], () => E.getForwardInfo(I.default, C.default, S.default, h.default, p.default, f.default).footerInfo, [E], r.default), T = a.useCallback(() => {
    (0, M.default)(t, n)
  }, [t, n]);
  return null == _ ? null : (0, s.jsxs)(c.Clickable, {
    className: v.footerContainer,
    onClick: T,
    children: [null != _.originIconUrl ? (0, s.jsx)("img", {
      className: v.originIcon,
      src: _.originIconUrl,
      alt: ""
    }) : null, (0, s.jsx)(l.Text, {
      className: v.footerText,
      variant: "text-sm/medium",
      color: "none",
      children: "".concat(_.originLabel, "  •  ").concat(_.timestampLabel)
    }), (0, s.jsx)(d.ChevronSmallRightIcon, {
      width: 12,
      height: 12,
      color: o.default.colors.TEXT_LOW_CONTRAST
    })]
  })
}

function P(e) {
  var t;
  let {
    message: n,
    snapshot: l,
    index: r
  } = e, o = a.useMemo(() => (0, R.default)(n, l), [n, l]), u = m.InlineEmbedMedia.useSetting(), d = m.RenderEmbeds.useSetting(), c = (0, i.useStateFromStores)([N.default], () => N.default.isDeveloper), f = (0, E.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = o.editedTimestamp) && void 0 !== t ? t : o.timestamp).valueOf()), {
    content: p,
    hasSpoilerEmbeds: h
  } = (0, _.default)(o, {
    hideSimpleEmbedContent: u && d,
    isInteracting: !1,
    formatInline: !1,
    allowList: f,
    allowHeading: f,
    allowLinks: !0,
    allowDevLinks: c,
    previewLinkTarget: !0
  }), S = (0, i.useStateFromStores)([I.default], () => I.default.getChannel(n.channel_id)), C = m.MessageDisplayCompact.useSetting();
  return null == S ? null : (0, s.jsxs)("div", {
    className: v.container,
    children: [(0, s.jsx)("div", {
      className: v.quote
    }), (0, s.jsxs)("div", {
      className: v.content,
      children: [(0, s.jsx)(x, {}), (0, s.jsx)(A.default, {
        message: o,
        content: p
      }), (0, T.default)({
        channelMessageProps: {
          message: o,
          channel: S,
          compact: C
        },
        hasSpoilerEmbeds: h,
        isInteracting: !1,
        isMessageSnapshot: !0
      }), (0, s.jsx)(L, {
        message: n,
        snapshot: l,
        index: r
      })]
    })]
  }, r)
}

function D(e) {
  let {
    message: t
  } = e;
  return (0, s.jsx)(s.Fragment, {
    children: t.messageSnapshots.map((e, n) => (0, s.jsx)(P, {
      message: t,
      snapshot: e,
      index: n
    }, n))
  })
}