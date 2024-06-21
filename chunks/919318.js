l.d(n, {
  ZP: function() {
    return y
  }
}), l(47120);
var a = l(735250),
  i = l(470079),
  s = l(120356),
  r = l.n(s),
  t = l(442837),
  d = l(481060),
  c = l(904245),
  o = l(368844),
  u = l(73315),
  h = l(454585),
  m = l(406432),
  g = l(169525),
  x = l(524444),
  Z = l(703656),
  C = l(6025),
  v = l(695346),
  f = l(592125),
  I = l(984933),
  j = l(375954),
  N = l(496675),
  p = l(451478),
  E = l(768581),
  _ = l(526120),
  b = l(689981),
  M = l(825334),
  A = l(981631),
  S = l(689938),
  T = l(747401),
  R = l(25450),
  P = l(931057);

function L(e) {
  let n, l, {
      firstMedia: i,
      channelId: s
    } = e,
    d = (0, t.e7)([f.Z], () => f.Z.getChannel(s)),
    [c, o] = (0, g.hL)({
      media: i,
      channel: d
    }),
    h = (0, g.MC)(o),
    Z = (0, t.e7)([p.Z], () => p.Z.isFocused()),
    C = (0, m.d$)(i.src),
    I = v.QK.useSetting(),
    {
      src: j,
      width: N,
      height: E,
      alt: _
    } = i;
  return E > N ? l = 72 : n = 72, (0, a.jsxs)("div", {
    className: T.media,
    children: [(0, x.Yi)({
      src: j,
      maxHeight: n,
      maxWidth: l,
      width: N,
      height: E,
      alt: null != _ && c && null != h ? h : _,
      autoPlay: I,
      animated: C && !c && Z,
      containerClassName: T.thumbnailContainer,
      imageClassName: r()({
        [T.obscured]: c
      }),
      renderForwardComponent: A.VqG
    }), c && (0, a.jsx)(u.Z, {
      obscureReason: o,
      iconClassname: T.obscuredTag
    })]
  })
}

function H(e) {
  let {
    resource: n
  } = e, l = (0, t.e7)([f.Z], () => f.Z.getChannel(n.channelId)), s = (0, t.e7)([j.Z], () => j.Z.getMessages(n.channelId)), u = (0, t.e7)([N.Z], () => N.Z.can(A.Plq.VIEW_CHANNEL, l)), m = s.first(), g = (0, b.Z)(m), x = (0, o.zy)(m, !1), Z = (null == x ? void 0 : x.length) > 0 ? x[0] : null, v = null != l && null == s.first() && !s.loadingMore && !s.ready && !s.hasFetched && u;
  i.useEffect(() => {
    v && c.Z.fetchMessages({
      channelId: n.channelId,
      after: n.channelId,
      limit: 5
    })
  }, [n.channelId, v]);
  if (null == l || null == l.guild_id) return null;
  let I = E.ZP.getResourceChannelIconURL({
      channelId: l.id,
      icon: n.icon
    }),
    p = null == n.description || 0 === n.description.length;
  return (0, a.jsxs)(d.Clickable, {
    className: T.row,
    onClick: e => {
      null != l && (e.shiftKey ? (0, _.C3)(l.guild_id, l.id) : C.Z.openResourceChannelAsSidebar({
        guildId: l.guild_id,
        channelId: l.id
      }))
    },
    children: [(0, a.jsxs)("div", {
      className: T.content,
      children: [(0, a.jsx)(d.Text, {
        className: T.title,
        variant: "text-md/bold",
        color: "header-primary",
        children: n.title
      }), p && null != g && (0, a.jsx)(d.Text, {
        className: T.messageContent,
        variant: "text-sm/normal",
        color: "header-secondary",
        lineClamp: 3,
        children: h.Z.parse(g, !0, {
          guildId: l.guild_id,
          channelId: l.id
        })
      }), !p && (0, a.jsx)(d.Text, {
        className: r()(T.messageContent, R.markup),
        variant: "text-sm/normal",
        color: "header-secondary",
        lineClamp: 3,
        children: h.Z.parse(n.description, !0, {
          guildId: l.guild_id,
          channelId: l.id
        })
      })]
    }), null != n.icon && null != I ? (0, a.jsx)("div", {
      className: T.media,
      children: (0, a.jsx)("img", {
        src: I,
        className: T.__invalid_thumbnail,
        width: 72,
        height: 72,
        alt: "",
        "aria-hidden": !0
      })
    }) : null, null == I && null != Z ? (0, a.jsx)(L, {
      firstMedia: Z,
      channelId: n.channelId
    }) : null]
  })
}

function y(e) {
  let {
    guild: n,
    isNewMember: l
  } = e, i = (0, M.Z)(n.id);
  if (0 === i.length) return l ? null : (0, a.jsxs)("div", {
    className: T.emptyContainer,
    children: [(0, a.jsx)(d.Heading, {
      variant: "heading-xl/bold",
      color: "header-primary",
      children: S.Z.Messages.MEMBER_ACTION_COMPLETE_EMPTY_STATE
    }), (0, a.jsx)("img", {
      className: T.emptyStateImage,
      src: P,
      alt: ""
    }), (0, a.jsx)(d.Button, {
      className: T.emptyStateButton,
      onClick: () => {
        let e = I.ZP.getDefaultChannel(n.id);
        null != e && (0, Z.uL)(A.Z5c.CHANNEL(n.id, e.id))
      },
      fullWidth: !0,
      children: S.Z.Messages.MEMBER_ACTION_COMPLETE_EMPTY_STATE_CTA
    })]
  });
  return (0, a.jsxs)("div", {
    className: T.container,
    children: [(0, a.jsx)(d.Heading, {
      variant: "heading-lg/bold",
      color: "header-primary",
      children: S.Z.Messages.GUILD_HOME_RESOURCES
    }), i.map(e => (0, a.jsx)(H, {
      resource: e
    }, e.channelId))]
  })
}