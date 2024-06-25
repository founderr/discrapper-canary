n.d(t, {
  Z: function() {
    return R
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(717881),
  u = n(58540),
  d = n(850827),
  h = n(258609),
  m = n(199902),
  E = n(314897),
  p = n(430824),
  g = n(496675),
  f = n(158776),
  C = n(979651),
  _ = n(387204),
  I = n(626135),
  x = n(382182),
  T = n(687516),
  N = n(718805),
  Z = n(871118),
  S = n(981631),
  v = n(689938),
  A = n(143046);
class M extends i.PureComponent {
  componentDidMount() {
    let {
      user: e,
      streamApplication: t
    } = this.props;
    I.default.track(S.rMx.OPEN_POPOUT, {
      type: "Stream Preview",
      other_user_id: e.id,
      application_id: null != t ? t.id : null,
      application_name: null != t ? t.name : null,
      game_id: null != t ? t.id : null,
      is_streaming: !0
    })
  }
  renderPreview(e) {
    let {
      onWatch: t,
      activeStream: n,
      currentUserId: i,
      canWatch: s,
      unavailableReason: a
    } = this.props;
    return (0, l.jsxs)(o.Clickable, {
      onClick: t,
      className: A.previewContainer,
      children: [(0, l.jsx)(Z.Z, {
        className: A.previewImage,
        stream: e
      }), s ? (0, l.jsx)("div", {
        className: A.previewHover,
        children: (0, l.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "none",
          className: A.white,
          children: (0, N.Z)(e, n, i, a)
        })
      }) : null]
    })
  }
  render() {
    let {
      activity: e,
      user: t,
      stream: n,
      previewIsOpen: i
    } = this.props;
    return null == n ? null : (0, l.jsx)("div", {
      className: a()(A.streamPreviewWrapper, {
        [A.mounted]: i
      }),
      children: (0, l.jsxs)("div", {
        className: A.streamPreview,
        children: [this.renderPreview(n), (0, l.jsxs)("div", {
          className: A.body,
          children: [null != e ? (0, l.jsx)(c.Z, {
            hideHeader: !0,
            type: c.P.STREAM_PREVIEW,
            activity: e,
            user: t,
            guildId: n.guildId,
            channelId: n.channelId,
            analyticsParams: {
              location: {
                page: S.ZY5.GO_LIVE_MODAL,
                section: S.jXE.STREAM_VIEWER_POPOUT
              }
            }
          }) : (0, l.jsx)(d.Z, {
            type: c.P.STREAM_PREVIEW,
            applicationStream: n,
            user: t,
            guildId: n.guildId,
            channelId: n.channelId,
            className: A.activityActions,
            color: A.watchButton
          }), (0, l.jsx)(_.Z, {
            type: _.Z.Types.INLINE,
            className: A.protip,
            children: __OVERLAY__ ? v.Z.Messages.WATCH_STREAM_IN_APP : v.Z.Messages.WATCH_STREAM_TIP
          })]
        })]
      })
    })
  }
}

function R(e) {
  let {
    user: t,
    channel: n,
    ...s
  } = e, [a, o] = (0, r.Wu)([C.Z, p.Z, g.Z, h.Z], () => (0, x.p9)(n, C.Z, p.Z, g.Z, h.Z)), c = (0, r.e7)([m.Z], () => m.Z.getStreamForUser(t.id, n.getGuildId())), d = (0, r.e7)([m.Z], () => m.Z.getActiveStreamForApplicationStream(c)), _ = (0, r.e7)([E.default], () => E.default.getId()), I = (0, T.Cf)(c), N = (0, r.e7)([f.Z], () => (0, T.Um)(c, f.Z)), Z = i.useMemo(() => ({
    [n.guild_id]: [t.id]
  }), [n.guild_id, t.id]);
  return (0, u.$)(Z), (0, l.jsx)(M, {
    ...s,
    canWatch: a,
    unavailableReason: o,
    user: t,
    streamApplication: I,
    stream: c,
    activeStream: d,
    currentUserId: _,
    activity: N
  })
}