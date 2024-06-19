n.r(t), n(47120), n(724458);
var l = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  i = n(442837),
  o = n(481060),
  d = n(570140),
  h = n(528963),
  c = n(933557),
  u = n(471445),
  g = n(592125),
  m = n(984933),
  p = n(430824),
  O = n(496675),
  M = n(699516),
  x = n(944486),
  L = n(594174),
  _ = n(346656),
  C = n(153124),
  b = n(626135),
  N = n(709054),
  F = n(981631),
  Z = n(689938),
  j = n(582692);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class f extends s.PureComponent {
  componentDidMount() {
    b.default.track(F.rMx.OPEN_MODAL, {
      type: "Follow Channel Modal",
      num_guild_permissions: Object.keys(this.props.guilds).length,
      location: "Chat Input Blocker - Follow Channel"
    })
  }
  getDefaultChannelId(e) {
    let t = e.find(e => {
        let {
          channel: t
        } = e;
        return "general" === (0, c.F6)(t, L.default, M.Z)
      }),
      n = null != t ? t : e[0];
    return null != n ? n.channel.id : null
  }
  renderFooter() {
    let {
      selectedGuildId: e,
      selectedChannelId: t,
      submitting: n
    } = this.state, {
      onClose: a
    } = this.props;
    return (0, l.jsxs)(s.Fragment, {
      children: [(0, l.jsx)(o.Button, {
        submitting: n,
        onClick: this.handleFollow,
        disabled: null == e || null == t,
        children: Z.Z.Messages.FOLLOW
      }), (0, l.jsx)(o.Button, {
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.PRIMARY,
        onClick: a,
        children: Z.Z.Messages.CANCEL
      })]
    })
  }
  renderForm() {
    let {
      guilds: e
    } = this.props, {
      channels: t,
      selectedGuildId: n,
      selectedChannelId: a,
      errorMessage: r
    } = this.state, i = N.default.keys(e).map(t => {
      let {
        guild: n
      } = e[t];
      return {
        value: t,
        label: n.toString(),
        guild: n
      }
    }), d = t.map(e => {
      let {
        channel: t,
        category: n
      } = e;
      return {
        value: t.id,
        label: (0, c.F6)(t, L.default, M.Z),
        channel: t,
        category: n
      }
    }), h = 0 === i.length, g = h ? Z.Z.Messages.FOLLOW_MODAL_HINT_NO_PERMS : Z.Z.Messages.FOLLOW_MODAL_HINT;
    return (0, l.jsxs)(s.Fragment, {
      children: [(0, l.jsx)(o.FormItem, {
        className: j.bottomMargin,
        title: Z.Z.Messages.FORM_LABEL_SEND_TO,
        children: (0, l.jsx)(o.SearchableSelect, {
          value: n,
          options: i,
          isDisabled: h,
          onChange: this.handleGuildSelect,
          renderOptionPrefix: e => (function(e) {
            if (null == e) return null;
            let {
              guild: t
            } = e;
            return (0, l.jsx)(_.Z, {
              guild: t,
              size: _.Z.Sizes.MINI
            })
          })(e)
        })
      }), (0, l.jsx)(o.FormItem, {
        className: j.bottomMargin,
        title: Z.Z.Messages.FORM_LABEL_SELECT_CHANNEL,
        children: (0, l.jsx)(o.SearchableSelect, {
          value: a,
          options: d,
          isDisabled: 0 === d.length,
          onChange: this.handleChannelSelect,
          renderOptionPrefix: e => (function(e) {
            if (null == e) return null;
            let {
              channel: t
            } = e, n = (0, u.KS)(t);
            return null != n && (0, l.jsx)(n, {
              size: "xs",
              color: "currentColor",
              className: j.icon
            })
          })(e)
        })
      }), (0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: h || null != r ? "text-danger" : "text-muted",
        className: j.bottomMargin,
        children: null != r ? r : g
      })]
    })
  }
  renderBody() {
    let {
      channel: {
        nsfw: e
      }
    } = this.props;
    return (0, l.jsxs)("div", {
      className: j.body,
      children: [(0, l.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        id: this.state.headerId,
        children: Z.Z.Messages.FOLLOW_MODAL_TITLE
      }), (0, l.jsx)(o.Text, {
        color: "text-muted",
        className: r()(j.topMargin, {
          [j.formMargin]: !e
        }),
        variant: "text-sm/normal",
        children: Z.Z.Messages.FOLLOW_MODAL_BODY
      }), e ? (0, l.jsx)(o.Text, {
        className: r()(j.formMargin, j.topMargin),
        color: "text-danger",
        variant: "text-sm/normal",
        children: Z.Z.Messages.FOLLOW_MODAL_WARNING
      }) : null]
    })
  }
  renderHeader() {
    var e;
    let {
      guildToFollow: t,
      channelNameToFollow: n,
      channel: s
    } = this.props, a = null !== (e = (0, u.KS)(s)) && void 0 !== e ? e : o.AnnouncementsIcon;
    return (0, l.jsxs)(o.ModalHeader, {
      className: j.header,
      children: [(0, l.jsx)(_.Z, {
        guild: t,
        size: _.Z.Sizes.LARGE
      }), (0, l.jsx)("div", {
        className: j.channelContainer,
        children: (0, l.jsxs)("div", {
          className: j.channel,
          children: [(0, l.jsx)(a, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: j.channelIcon
          }), (0, l.jsx)(o.Text, {
            variant: "text-md/medium",
            className: j.channelName,
            children: n
          })]
        })
      })]
    })
  }
  render() {
    let {
      transitionState: e
    } = this.props;
    return (0, l.jsxs)(o.ModalRoot, {
      transitionState: e,
      "aria-labelledby": this.state.headerId,
      children: [this.renderHeader(), (0, l.jsxs)(o.ModalContent, {
        className: j.content,
        children: [this.renderBody(), this.renderForm()]
      }), (0, l.jsx)(o.ModalFooter, {
        children: this.renderFooter()
      })]
    })
  }
  constructor(e) {
    super(e), S(this, "handleGuildSelect", e => {
      let {
        guilds: t
      } = this.props, {
        selectedGuildId: n
      } = this.state, l = t[e].channels, s = this.getDefaultChannelId(l);
      n !== e && this.setState({
        selectedGuildId: e,
        selectedChannelId: s,
        channels: l
      })
    }), S(this, "handleChannelSelect", e => {
      this.setState({
        selectedChannelId: e
      })
    }), S(this, "handleFollow", () => {
      let {
        channel: e,
        onClose: t
      } = this.props, {
        selectedChannelId: s,
        selectedGuildId: a
      } = this.state;
      null != s && (this.setState({
        submitting: !0
      }), h.Z.createChannelFollower(s, e.id).then(() => {
        d.Z.dispatch({
          type: "CHANNEL_FOLLOWER_CREATED",
          channelId: s,
          guildId: a
        }), t(), (0, o.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("14760")]).then(n.bind(n, 897140));
          return t => (0, l.jsx)(e, {
            ...t
          })
        })
      }).catch(e => {
        e.body.code === F.evJ.TOO_MANY_WEBHOOKS ? this.setState({
          errorMessage: Z.Z.Messages.FOLLOW_MODAL_TOO_MANY_WEBHOOKS,
          submitting: !1
        }) : this.setState({
          errorMessage: Z.Z.Messages.FOLLOW_MODAL_FAIL,
          submitting: !1
        })
      }))
    });
    let {
      guilds: t,
      lastChannelFollowingDestination: s
    } = e, {
      guildId: a,
      channelId: r
    } = s;
    this.state = {
      selectedGuildId: a,
      selectedChannelId: r,
      channels: null != a && null != t[a] ? t[a].channels : [],
      errorMessage: null,
      submitting: !1,
      headerId: (0, C.hQ)("modal")
    }
  }
}
t.default = i.ZP.connectStores([p.Z, g.Z, m.ZP, O.Z, x.Z], e => {
  let {
    channel: t
  } = e, n = p.Z.getGuild(t.guild_id), l = Object.values(p.Z.getGuilds()).reduce((e, t) => {
    let n = m.ZP.getChannels(t.id).SELECTABLE.map(e => e.channel).filter(e => e.type === F.d4z.GUILD_TEXT && O.Z.can(F.Plq.MANAGE_WEBHOOKS, e)).map(e => {
      let t = g.Z.getChannel(e.parent_id);
      return {
        channel: e,
        category: null != t ? t.name : null
      }
    });
    return n.length > 0 && (e[t.id] = {
      guild: t,
      channels: n
    }), e
  }, {}), s = x.Z.getLastChannelFollowingDestination();
  return {
    guildToFollow: n,
    channelNameToFollow: t.name,
    guilds: l,
    lastChannelFollowingDestination: null != s ? s : {}
  }
}, {
  forwardRef: !0
})(f)