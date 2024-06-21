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
  E = n(930282),
  _ = n(25015),
  I = n(438075),
  T = n(695346),
  N = n(592125),
  m = n(906467),
  h = n(430824),
  C = n(496675),
  S = n(699516),
  A = n(594174),
  p = n(100604),
  g = n(694784),
  f = n(39154),
  O = n(689938),
  R = n(414700);

function M() {
  return (0, s.jsxs)("div", {
    className: R.headerContainer,
    children: [(0, s.jsx)(c.ChatArrowRightIcon, {
      size: "xs",
      className: R.headerIcon,
      color: o.Z.colors.TEXT_LOW_CONTRAST
    }), (0, s.jsx)(l.x, {
      className: R.headerText,
      variant: "text-sm/semibold",
      color: "text-low-contrast",
      children: O.Z.Messages.MESSAGE_FORWARDED
    })]
  })
}

function x(e) {
  let {
    message: t,
    snapshot: n,
    index: d
  } = e, E = i.useMemo(() => new p.r(t, n, d), [t, n, d]), _ = (0, a.e7)([N.Z, A.default, S.Z, C.Z, h.Z, u.Z], () => E.getForwardInfo(N.Z, A.default, S.Z, C.Z, h.Z, u.Z).footerInfo, [E], r.Z), I = i.useCallback(() => {
    (0, g.Z)(t)
  }, [t]);
  return null == _ ? null : (0, s.jsxs)(c.Clickable, {
    className: R.footerContainer,
    onClick: I,
    children: [null != _.originIconUrl ? (0, s.jsx)("img", {
      className: R.originIcon,
      src: _.originIconUrl,
      alt: ""
    }) : null, (0, s.jsx)(l.x, {
      className: R.footerText,
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
  } = e, o = i.useMemo(() => (0, f.Z)(n, l), [n, l]), c = T.RS.useSetting(), u = T.NA.useSetting(), h = (0, a.e7)([m.Z], () => m.Z.isDeveloper), C = (0, d.A)((null !== (t = o.editedTimestamp) && void 0 !== t ? t : o.timestamp).valueOf()), {
    content: S,
    hasSpoilerEmbeds: A
  } = (0, _.Z)(o, {
    hideSimpleEmbedContent: c && u,
    isInteracting: !1,
    formatInline: !1,
    allowList: C,
    allowHeading: C,
    allowLinks: !0,
    allowDevLinks: h,
    previewLinkTarget: !0
  }), p = (0, a.e7)([N.Z], () => N.Z.getChannel(n.channel_id)), g = T.jU.useSetting();
  return null == p ? null : (0, s.jsxs)("div", {
    className: R.container,
    children: [(0, s.jsx)("div", {
      className: R.quote
    }), (0, s.jsxs)("div", {
      className: R.content,
      children: [(0, s.jsx)(M, {}), (0, s.jsx)(E.ZP, {
        message: o,
        content: S
      }), (0, I.Z)({
        channelMessageProps: {
          message: o,
          channel: p,
          compact: g
        },
        hasSpoilerEmbeds: A,
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