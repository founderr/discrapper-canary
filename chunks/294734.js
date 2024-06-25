n.d(t, {
  Z: function() {
    return L
  }
});
var s = n(735250),
  i = n(470079),
  l = n(793030),
  a = n(442837),
  r = n(902704),
  o = n(692547),
  c = n(481060),
  u = n(356264),
  d = n(628238),
  E = n(25015),
  _ = n(438075),
  I = n(695346),
  T = n(592125),
  m = n(906467),
  N = n(430824),
  h = n(496675),
  C = n(699516),
  S = n(594174),
  A = n(113039),
  g = n(100604),
  p = n(694784),
  f = n(39154),
  R = n(689938),
  O = n(414700);

function M() {
  return (0, s.jsxs)("div", {
    className: O.headerContainer,
    children: [(0, s.jsx)(c.ChatArrowRightIcon, {
      size: "xs",
      className: O.headerIcon,
      color: o.Z.colors.TEXT_LOW_CONTRAST
    }), (0, s.jsx)(l.x, {
      className: O.headerText,
      variant: "text-sm/semibold",
      color: "text-low-contrast",
      children: R.Z.Messages.MESSAGE_FORWARDED
    })]
  })
}

function x(e) {
  let {
    message: t,
    snapshot: n,
    index: d
  } = e, E = i.useMemo(() => new g.r(t, n, d), [t, n, d]), _ = (0, a.e7)([T.Z, S.default, C.Z, h.Z, N.Z, u.Z], () => E.getForwardInfo(T.Z, S.default, C.Z, h.Z, N.Z, u.Z).footerInfo, [E], r.Z), I = i.useCallback(() => {
    (0, p.Z)(t)
  }, [t]);
  return null == _ ? null : (0, s.jsxs)(c.Clickable, {
    className: O.footerContainer,
    onClick: I,
    children: [null != _.originIconUrl ? (0, s.jsx)("img", {
      className: O.originIcon,
      src: _.originIconUrl,
      alt: ""
    }) : null, (0, s.jsx)(l.x, {
      className: O.footerText,
      variant: "text-sm/medium",
      color: "none",
      children: "".concat(_.originLabel, "  •  ").concat(_.timestampLabel)
    }), (0, s.jsx)(c.ChevronSmallRightIcon, {
      size: "xxs",
      color: o.Z.colors.TEXT_LOW_CONTRAST
    })]
  })
}

function v(e) {
  var t;
  let {
    message: n,
    snapshot: l,
    index: r
  } = e, o = i.useMemo(() => (0, f.Z)(n, l), [n, l]), c = I.RS.useSetting(), u = I.NA.useSetting(), N = (0, a.e7)([m.Z], () => m.Z.isDeveloper), h = (0, d.A)((null !== (t = o.editedTimestamp) && void 0 !== t ? t : o.timestamp).valueOf()), {
    content: C,
    hasSpoilerEmbeds: S
  } = (0, E.Z)(o, {
    hideSimpleEmbedContent: c && u,
    isInteracting: !1,
    formatInline: !1,
    allowList: h,
    allowHeading: h,
    allowLinks: !0,
    allowDevLinks: N,
    previewLinkTarget: !0
  }), g = (0, a.e7)([T.Z], () => T.Z.getChannel(n.channel_id)), p = I.jU.useSetting();
  return null == g ? null : (0, s.jsxs)("div", {
    className: O.container,
    children: [(0, s.jsx)("div", {
      className: O.quote
    }), (0, s.jsxs)("div", {
      className: O.content,
      children: [(0, s.jsx)(M, {}), (0, s.jsx)(A.ZP, {
        message: o,
        content: C
      }), (0, _.Z)({
        channelMessageProps: {
          message: o,
          channel: g,
          compact: p
        },
        hasSpoilerEmbeds: S,
        isInteracting: !1,
        isMessageSnapshot: !0
      }), (0, s.jsx)(x, {
        message: n,
        snapshot: l,
        index: r
      })]
    })]
  }, r)
}

function L(e) {
  let {
    message: t
  } = e;
  return (0, s.jsx)(s.Fragment, {
    children: t.messageSnapshots.map((e, n) => (0, s.jsx)(v, {
      message: t,
      snapshot: e,
      index: n
    }, n))
  })
}