"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("789020");
var s = n("735250"),
  a = n("470079"),
  l = n("59262"),
  i = n("793030"),
  r = n("442837"),
  o = n("692547"),
  u = n("481060"),
  d = n("336197"),
  c = n("628238"),
  f = n("25015"),
  E = n("438075"),
  _ = n("695346"),
  m = n("592125"),
  T = n("906467"),
  I = n("113039"),
  p = n("900849"),
  h = n("100604"),
  N = n("618685"),
  S = n("981631"),
  C = n("689938"),
  g = n("296854");

function A() {
  return (0, s.jsxs)("div", {
    className: g.headerContainer,
    children: [(0, s.jsx)(l.ArrowAngleRightUpIcon, {
      width: 14,
      height: 16,
      color: o.default.colors.HEADER_MUTED
    }), (0, s.jsx)(i.Text, {
      className: g.headerText,
      variant: "text-sm/semibold",
      color: "header-muted",
      children: C.default.Messages.MESSAGE_FORWARDED
    })]
  })
}

function M(e) {
  let {
    message: t,
    snapshot: n,
    index: l
  } = e, r = a.useMemo(() => new h.MessageForward(t, n, l).getForwardInfo(), [t, n, l]), o = (0, N.default)(n), c = a.useCallback(async () => {
    var e, t;
    let s = n.message.channel_id,
      a = m.default.getChannel(s);
    if (null == a && null != n.guild) try {
      await p.startLurking(n.guild.id, {}, {
        channelId: s
      })
    } catch {}
    let l = null !== (t = null == a ? void 0 : a.guild_id) && void 0 !== t ? t : null === (e = n.guild) || void 0 === e ? void 0 : e.id;
    null != l && (0, d.default)(S.Routes.CHANNEL(l, s))
  }, [n]);
  return (0, s.jsxs)("div", {
    className: g.footerContainer,
    children: [null != r.originLabel ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-low-contrast",
        children: r.originLabel
      }), (0, s.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-low-contrast",
        children: "•"
      })]
    }) : null, (0, s.jsx)(i.Text, {
      variant: "text-sm/medium",
      color: "text-low-contrast",
      children: r.timestampLabel
    }), o ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-low-contrast",
        children: "•"
      }), (0, s.jsx)(u.Clickable, {
        onClick: c,
        children: (0, s.jsx)(i.Text, {
          className: g.cta,
          variant: "text-sm/medium",
          color: "text-link",
          children: C.default.Messages.MESSAGE_FORWARD_ORIGINAL_MESSAGE
        })
      })]
    }) : null]
  })
}

function R(e) {
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
    hasSpoilerEmbeds: S
  } = (0, f.default)(o, {
    hideSimpleEmbedContent: u && d,
    isInteracting: !1,
    formatInline: !1,
    allowList: h,
    allowHeading: h,
    allowLinks: !0,
    allowDevLinks: p,
    previewLinkTarget: !0
  }), C = (0, r.useStateFromStores)([m.default], () => m.default.getChannel(n.channel_id)), R = _.MessageDisplayCompact.useSetting();
  return null == C ? null : (0, s.jsxs)("div", {
    className: g.container,
    children: [(0, s.jsx)("div", {
      className: g.quote
    }), (0, s.jsxs)("div", {
      className: g.content,
      children: [(0, s.jsx)(A, {}), (0, s.jsx)(I.default, {
        message: o,
        content: N
      }), (0, E.default)({
        channelMessageProps: {
          message: o,
          channel: C,
          compact: R
        },
        hasSpoilerEmbeds: S,
        isInteracting: !1
      }), (0, s.jsx)(M, {
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
    children: t.messageSnapshots.map((e, n) => (0, s.jsx)(R, {
      message: t,
      snapshot: e,
      index: n
    }, n))
  })
}