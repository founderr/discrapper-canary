n.d(t, {
  Z: function() {
    return I
  }
}), n(47120);
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(481060),
  r = n(454585),
  o = n(529815),
  c = n(702346),
  u = n(553385),
  d = n(981631),
  E = n(689938),
  _ = n(362136);

function I(e) {
  let {
    message: t,
    channel: i,
    compact: r
  } = e, o = null != t.embeds && t.embeds.length > 0;
  return (0, s.jsxs)("div", {
    children: [(0, s.jsx)(c.Z, {
      className: l()(_.mainContainer, {
        [_.compact]: r
      }),
      icon: n(570111),
      compact: r,
      children: (0, s.jsx)("div", {
        className: l()(_.__invalid_content, {
          [_.compact]: r
        }),
        children: (0, s.jsx)("div", {
          className: l()(_.__invalid_messageContent, {
            [_.compact]: r
          }),
          children: t.content
        })
      })
    }), (0, s.jsx)("div", {
      className: l()(_.__invalid_embedContent, {
        [_.compact]: r
      }),
      children: (0, s.jsx)(T, {
        message: t
      })
    }), (0, s.jsx)("div", {
      className: _.actions,
      children: (0, s.jsx)(a.Button, {
        color: a.Button.Colors.PRIMARY,
        onClick: () => {
          o ? (0, u.z$)(t) : (0, u.XP)(i.guild_id, i.id, t.id)
        },
        children: E.Z.Messages.SYSTEM_MESSAGE_GET_GAMING_STATS
      })
    })]
  })
}

function T(e) {
  var t;
  let {
    message: n
  } = e, [i] = null !== (t = n.embeds) && void 0 !== t ? t : [];
  return null == i ? null : (0, s.jsx)(o.ZP, {
    className: _.embed,
    embed: i,
    renderTitle: (e, t) => r.Z.parseEmbedTitle(t, !0, {
      channelId: n.channel_id
    }),
    renderDescription: (e, t, s) => r.Z.parse(t, !0, {
      channelId: n.channel_id
    }),
    autoPlayGif: !1,
    renderImageComponent: d.VqG,
    renderVideoComponent: d.VqG,
    renderLinkComponent: d.VqG,
    renderForwardComponent: d.VqG
  })
}