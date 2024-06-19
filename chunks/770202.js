n(411104), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(442837),
  o = n(493683),
  u = n(239091),
  c = n(146773),
  d = n(201895),
  h = n(703656),
  g = n(592125),
  p = n(430824),
  m = n(496675),
  C = n(98597),
  E = n(473403),
  f = n(981631),
  _ = n(490897),
  I = n(47705);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function Z(e, t) {
  let n = t.getGuildId();
  if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
  o.Z.preload(n, t.id)
}
class S extends C.ZP {
  render() {
    let {
      channel: e,
      selected: t,
      connectChannelDropTarget: n,
      connectChannelDragSource: i,
      connectDragPreview: s,
      canReorderChannel: a
    } = this.props, o = (0, l.jsx)("li", {
      className: r()(this.getClassName(), {
        [I.disabled]: this.isDisabled()
      }),
      "data-dnd-name": e.name,
      children: (0, l.jsxs)(E.Z, {
        className: I.iconVisibility,
        channel: e,
        selected: t,
        onClick: this.handleClick,
        onMouseDown: Z,
        onContextMenu: this.handleContextMenu,
        connectDragPreview: a ? s : null,
        "aria-label": (0, d.ZP)({
          channel: e
        }),
        resolvedUnreadSetting: _.i.ONLY_MENTIONS,
        children: [this.renderInviteButton(), this.renderEditButton()]
      })
    });
    return a ? n(i(o)) : o
  }
  constructor(...e) {
    super(...e), N(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, i = p.Z.getGuild(t.getGuildId());
      null != i && (0, u.jW)(e, async () => {
        let {
          default: e
        } = await n.e("99905").then(n.bind(n, 649400));
        return n => (0, l.jsx)(e, {
          ...n,
          channel: t,
          guild: i
        })
      })
    }), N(this, "handleClick", e => {
      ! function(e) {
        let t = e.getGuildId();
        if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
        (0, h.uL)(f.Z5c.CHANNEL(t, e.id), {
          state: {
            analyticsSource: {
              page: f.ZY5.GUILD_CHANNEL,
              section: f.jXE.CHANNEL_LIST,
              object: f.qAy.CHANNEL
            }
          }
        })
      }(e)
    })
  }
}
let x = (0, c.B)(S);
t.Z = i.memo(function(e) {
  let {
    channel: t,
    guild: n,
    disableSorting: i
  } = e, s = (0, a.cj)([g.Z, m.Z], () => {
    let e = g.Z.getChannel(t.parent_id);
    return {
      canManageChannel: m.Z.can(f.Plq.MANAGE_CHANNELS, t),
      canReorderChannel: !0 !== i && null != e ? m.Z.can(f.Plq.MANAGE_CHANNELS, e) : m.Z.can(f.Plq.MANAGE_CHANNELS, n)
    }
  });
  return (0, l.jsx)(x, {
    ...s,
    ...e
  })
})