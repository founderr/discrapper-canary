"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("59262"),
  i = n("793030"),
  r = n("442837"),
  o = n("902704"),
  u = n("692547"),
  d = n("465270"),
  c = n("481060"),
  f = n("356264"),
  E = n("628238"),
  _ = n("25015"),
  m = n("438075"),
  T = n("695346"),
  I = n("592125"),
  p = n("906467"),
  h = n("430824"),
  N = n("496675"),
  S = n("699516"),
  C = n("594174"),
  g = n("113039"),
  A = n("100604"),
  M = n("694784"),
  R = n("39154"),
  v = n("689938"),
  O = n("296854");

function x() {
  return (0, s.jsxs)("div", {
    className: O.headerContainer,
    children: [(0, s.jsx)(l.ArrowAngleRightUpIcon, {
      width: 14,
      height: 16,
      color: u.default.colors.TEXT_LOW_CONTRAST
    }), (0, s.jsx)(i.Text, {
      className: O.headerText,
      variant: "text-sm/semibold",
      color: "text-low-contrast",
      children: v.default.Messages.MESSAGE_FORWARDED
    })]
  })
}

function L(e) {
  let {
    message: t,
    snapshot: n,
    index: l
  } = e, E = a.useMemo(() => new A.MessageForward(t, n, l), [t, n, l]), _ = (0, r.useStateFromStores)([I.default, C.default, S.default, N.default, h.default, f.default], () => E.getForwardInfo(I.default, C.default, S.default, N.default, h.default, f.default).footerInfo, [E], o.default), m = a.useCallback(() => {
    (0, M.default)(t, n)
  }, [t, n]);
  return null == _ ? null : (0, s.jsxs)(c.Clickable, {
    className: O.footerContainer,
    onClick: m,
    children: [null != _.originIconUrl ? (0, s.jsx)("img", {
      className: O.originIcon,
      src: _.originIconUrl,
      alt: ""
    }) : null, (0, s.jsx)(i.Text, {
      className: O.footerText,
      variant: "text-sm/medium",
      color: "none",
      children: "".concat(_.originLabel, "  •  ").concat(_.timestampLabel)
    }), (0, s.jsx)(d.ChevronSmallRightIcon, {
      width: 12,
      height: 12,
      color: u.default.colors.TEXT_LOW_CONTRAST
    })]
  })
}

function D(e) {
  var t;
  let {
    message: n,
    snapshot: l,
    index: i
  } = e, o = a.useMemo(() => (0, R.default)(n, l), [n, l]), u = T.InlineEmbedMedia.useSetting(), d = T.RenderEmbeds.useSetting(), c = (0, r.useStateFromStores)([p.default], () => p.default.isDeveloper), f = (0, E.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = o.editedTimestamp) && void 0 !== t ? t : o.timestamp).valueOf()), {
    content: h,
    hasSpoilerEmbeds: N
  } = (0, _.default)(o, {
    hideSimpleEmbedContent: u && d,
    isInteracting: !1,
    formatInline: !1,
    allowList: f,
    allowHeading: f,
    allowLinks: !0,
    allowDevLinks: c,
    previewLinkTarget: !0
  }), S = (0, r.useStateFromStores)([I.default], () => I.default.getChannel(n.channel_id)), C = T.MessageDisplayCompact.useSetting();
  return null == S ? null : (0, s.jsxs)("div", {
    className: O.container,
    children: [(0, s.jsx)("div", {
      className: O.quote
    }), (0, s.jsxs)("div", {
      className: O.content,
      children: [(0, s.jsx)(x, {}), (0, s.jsx)(g.default, {
        message: o,
        content: h
      }), (0, m.default)({
        channelMessageProps: {
          message: o,
          channel: S,
          compact: C
        },
        hasSpoilerEmbeds: N,
        isInteracting: !1
      }), (0, s.jsx)(L, {
        message: n,
        snapshot: l,
        index: i
      })]
    })]
  }, i)
}

function P(e) {
  let {
    message: t
  } = e;
  return (0, s.jsx)(s.Fragment, {
    children: t.messageSnapshots.map((e, n) => (0, s.jsx)(D, {
      message: t,
      snapshot: e,
      index: n
    }, n))
  })
}