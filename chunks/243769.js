n(47120), n(653041);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(692547),
  o = n(481060),
  c = n(620662),
  u = n(994339),
  d = n(503438),
  E = n(484459),
  _ = n(598077),
  I = n(63063),
  T = n(153066),
  N = n(51144),
  m = n(285952),
  h = n(936195),
  C = n(409216),
  S = n(981631),
  A = n(616922),
  p = n(689938),
  g = n(956630);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class O extends i.PureComponent {
  render() {
    let {
      member: e,
      className: t,
      guildId: n
    } = this.props;
    return (0, s.jsx)(o.Popout, {
      renderPopout: this.renderUserPopout,
      position: "left",
      preload: () => (0, E.W)(e.user.id, e.user.getAvatarURL(n, 80), {
        guildId: n
      }),
      children: i => {
        var l;
        return (0, s.jsx)(o.Tooltip, {
          text: e.unknownUser ? null : null !== (l = e.nick) && void 0 !== l ? l : N.ZP.getName(e.user),
          children: l => (0, s.jsx)(o.Clickable, {
            className: e.unknownUser ? g.partyMember : g.partyMemberKnown,
            ...l,
            ...i,
            children: (0, s.jsx)(o.Avatar, {
              src: e.user.getAvatarURL(n, 24),
              size: o.AvatarSizes.SIZE_24,
              className: a()(g.partyAvatar, t),
              "aria-label": e.user.username
            })
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), f(this, "renderUserPopout", e => {
      let {
        renderUserPopout: t,
        member: n
      } = this.props;
      return n.unknownUser ? null : t(n.user, e)
    })
  }
}
class R extends i.PureComponent {
  isDeadInvite() {
    let {
      isPreview: e,
      message: t,
      activity: n,
      applicationId: s
    } = this.props;
    return !e && !(null != t && (0, u.Z)(n, t, s))
  }
  getPartySize() {
    let {
      activity: e
    } = this.props;
    return null == e || null == e.party || null == e.party.size || e.party.size.length < 2 ? [-1, -1] : e.party.size
  }
  getActionableMode() {
    return [S.mFx.LISTEN, S.mFx].includes(this.props.activityActionType) || this.props.isPreview || this.canJoin() ? "Actionable" : "NotActionable"
  }
  isInParty() {
    let {
      activity: e,
      myPartyId: t,
      isPreview: n
    } = this.props;
    return !n && null != e && null != e.party && t === e.party.id
  }
  isPartyFull() {
    let [e, t] = this.getPartySize();
    return e > -1 && e >= t
  }
  hasPartySize() {
    let [e, t] = this.getPartySize();
    return e > -1 && t > -1
  }
  isActionType(e) {
    return this.props.activityActionType === e
  }
  canJoin() {
    let {
      activity: e,
      isPreview: t,
      isGameLaunchable: n,
      isInBrowser: s
    } = this.props;
    return !!t || !(this.isDeadInvite() || !this.isActionType(S.mFx.JOIN) || !(0, c.Z)(e, S.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull() || s || !n || this.isInParty()) && !0
  }
  canSendInvite() {
    let {
      activity: e,
      isPreview: t
    } = this.props;
    return !!t || !(this.isDeadInvite() || !this.isActionType(S.mFx.JOIN_REQUEST) || !(0, c.Z)(e, S.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull()) && !0
  }
  canSync() {
    let {
      activity: e,
      isPreview: t,
      isSyncable: n,
      isInBrowser: s
    } = this.props;
    return !!t || !(!this.isActionType(S.mFx.LISTEN) && !this.isActionType(S.mFx.WATCH) || this.isDeadInvite() || !(0, c.Z)(e, S.xjy.SYNC) || s || !n || this.isInParty()) && !0
  }
  getHelpdeskArticleURL() {
    let {
      partyId: e
    } = this.props;
    return null != e && (0, A.Ps)(e) ? S.BhN.SPOTIFY_CONNECTION : S.BhN.RICH_PRESENCE_INTRODUCTION
  }
  renderHeaderText() {
    let {
      activityActionType: e,
      name: t
    } = this.props;
    switch (e) {
      case S.mFx.LISTEN:
        return p.Z.Messages.INVITE_EMBED_INVITE_TO_LISTEN.format({
          name: t
        });
      case S.mFx.WATCH:
        return p.Z.Messages.INVITE_EMBED_INVITE_TO_WATCH.format({
          name: t
        });
      case S.mFx.JOIN:
        return p.Z.Messages.INVITE_EMBED_INVITE_TO_JOIN_GROUP;
      case S.mFx.JOIN_REQUEST:
      default:
        return p.Z.Messages.INVITE_EMBED_ASK_TO_JOIN
    }
  }
  renderPartyStatus() {
    let {
      activityActionType: e,
      isGameLaunchable: t,
      isSyncable: n,
      isPreview: i,
      isInBrowser: l,
      name: a,
      activity: r
    } = this.props, [c, u] = this.getPartySize();
    if (this.isDeadInvite()) switch (e) {
      case S.mFx.LISTEN:
        return p.Z.Messages.INVITE_EMBED_LISTEN_HAS_ENDED;
      case S.mFx.WATCH:
        return p.Z.Messages.INVITE_EMBED_WATCH_HAS_ENDED;
      case S.mFx.JOIN:
      case S.mFx.JOIN_REQUEST:
      default:
        return p.Z.Messages.INVITE_EMBED_GAME_HAS_ENDED
    }
    if (l && !i && e === S.mFx.JOIN) return p.Z.Messages.INVITE_EMBED_JOIN_VIA_DESKTOP_APP;
    if (this.isActionType(S.mFx.LISTEN) || this.isActionType(S.mFx.WATCH)) return null != r && null != r.details && null != r.state && (0, d.Z)(r) ? [(0, s.jsx)("div", {
      className: g.details,
      children: (0, s.jsx)(o.Anchor, {
        className: g.textLink,
        onClick: this.handleOpenSpotifyTrack,
        children: r.details
      })
    }, "details"), (0, s.jsx)("div", {
      className: g.state,
      children: p.Z.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
        artists: r.state,
        artistsHook: (e, t) => null != r.state ? (0, s.jsx)(h.Z, {
          artists: r.state,
          linkClassName: g.textLink,
          canOpen: null != r.sync_id,
          onOpenSpotifyArtist: this.handleOpenSpotifyArtist
        }, t) : null
      })
    }, "state")] : this.isActionType(S.mFx.LISTEN) ? p.Z.Messages.USER_ACTIVITY_LISTEN_ALONG : p.Z.Messages.USER_ACTIVITY_WATCH_ALONG;
    return this.isActionType(S.mFx.JOIN_REQUEST) ? this.isPartyFull() ? p.Z.Messages.INVITE_EMBED_FULL_GROUP : p.Z.Messages.INVITE_EMBED_NUM_OPEN_SLOTS.format({
      number: u - c
    }) : this.isInParty() ? p.Z.Messages.INVITE_EMBED_IN_GROUP : t || n || i ? this.isPartyFull() ? p.Z.Messages.INVITE_EMBED_FULL_GROUP : this.hasPartySize() ? p.Z.Messages.INVITE_EMBED_NUM_OPEN_SLOTS.format({
      number: u - c
    }) : p.Z.Messages.JOIN : p.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({
      name: a
    })
  }
  renderActionButton() {
    let {
      isInBrowser: e,
      isPreview: t,
      isGameLaunchable: n,
      isSender: i,
      partyId: l,
      activity: a,
      message: r,
      renderSpotifyJoinButton: c,
      renderCustomButton: u
    } = this.props, d = {
      className: g.actionButton,
      size: o.Button.Sizes.SMALL
    }, E = null != u ? u(d) : null;
    return null != E ? E : !this.isDeadInvite() && this.isActionType(S.mFx.LISTEN) && null != l && null != r && null != a && (0, A.Ps)(l) ? c({
      ...d,
      activity: a,
      user: r.author
    }) : (0, s.jsx)(o.Button, {
      ...d,
      ...(() => {
        if (!t && e && !this.isDeadInvite()) return {
          children: p.Z.Messages.USER_ACTIVITY_ACTION_DOWNLOAD_APP,
          onClick: this.handleDownloadApp
        };
        if (this.canJoin()) return {
          children: p.Z.Messages.JOIN,
          onClick: this.handleJoin
        };
        if (this.canSync()) return {
          children: p.Z.Messages.JOIN,
          onClick: this.handleSync
        };
        if (this.canSendInvite()) return {
          children: p.Z.Messages.INVITE_EMBED_INVITE_TO_JOIN,
          onClick: this.handleInvite,
          disabled: i
        };
        return {
          children: this.isActionType(S.mFx.JOIN_REQUEST) ? p.Z.Messages.INVITE_EMBED_INVITE_TO_JOIN : p.Z.Messages.JOIN,
          disabled: !0
        }
      })(),
      color: (e || n) && !this.isDeadInvite() ? o.Button.Colors.GREEN : o.Button.Colors.PRIMARY,
      submitting: this.props.isLoading
    })
  }
  renderMoreUsers(e, t, n) {
    return (0, s.jsx)("div", {
      className: g.moreUsers,
      children: e
    }, n)
  }
  renderParty() {
    let {
      partyId: e,
      partyMembers: t,
      hideParty: n,
      guildId: i
    } = this.props, [l, a] = this.getPartySize(), r = this.hasPartySize() || this.isActionType(S.mFx.LISTEN) || this.isActionType(S.mFx.WATCH);
    if (null == e || this.isDeadInvite() || !r || n) return null;
    let o = [...t],
      c = Math.min(l, 6);
    for (; o.length < c;) o.push({
      user: new _.Z({
        discriminator: "0005"
      }),
      unknownUser: !0
    });
    let u = Math.min(a, 106);
    for (; o.length < u;) o.push(null);
    return (0, s.jsx)(C.Z, {
      guildId: i,
      className: g.partyMembers,
      users: o,
      max: a > 0 ? Math.min(a, 6) : 6,
      renderUser: this.renderUser,
      renderMoreUsers: this.renderMoreUsers
    })
  }
  render() {
    let {
      className: e,
      coverImage: t,
      name: n,
      activity: i
    } = this.props, l = this.isActionType(S.mFx.JOIN) || this.isActionType(S.mFx.JOIN_REQUEST), c = this.isDeadInvite(), u = null;
    null == t || null == i || l ? !l && c && (u = (0, s.jsx)("div", {
      className: g.artworkSpotifySessionEnded
    })) : u = (0, s.jsx)("img", {
      alt: "",
      src: t,
      className: (0, T.l)(g, "artwork", this.getActionableMode())
    });
    let E = null != i && null != u && null != i.assets && null != i.assets.large_text && "" !== i.assets.large_text && !c && (0, d.Z)(i) ? i.assets.large_text : null,
      _ = null != E ? (0, s.jsx)(o.Tooltip, {
        text: E,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, s.jsx)(o.Anchor, {
            onClick: this.handleOpenSpotifyAlbum,
            onMouseEnter: t,
            onMouseLeave: n,
            children: u
          })
        }
      }) : u;
    return (0, s.jsxs)("div", {
      className: a()(g.invite, e),
      children: [(0, s.jsx)("div", {
        className: g.coverImageWrapper,
        children: (0, s.jsx)("div", {
          className: a()((0, T.l)(g, "coverImage", this.getActionableMode()), null != u ? g.blurred : null),
          style: {
            backgroundImage: null != t ? "url('".concat(t, "')") : void 0
          }
        })
      }), (0, s.jsxs)(m.Z, {
        className: g.fullHeight,
        children: [(0, s.jsxs)(m.Z, {
          direction: m.Z.Direction.VERTICAL,
          children: [(0, s.jsx)("div", {
            className: g.header,
            children: this.renderHeaderText()
          }), (0, s.jsx)(m.Z.Child, {
            className: g.partyStatus,
            children: this.renderPartyStatus()
          }), (0, s.jsxs)(m.Z, {
            align: m.Z.Align.END,
            children: [(0, s.jsxs)(m.Z, {
              align: m.Z.Align.CENTER,
              className: g.actionAndParty,
              basis: 0,
              style: {
                marginRight: 0
              },
              children: [this.renderActionButton(), this.renderParty()]
            }), null == u && l ? (0, s.jsx)("div", {
              className: g.name,
              children: n
            }) : null]
          })]
        }), _]
      }), (0, s.jsx)(o.Anchor, {
        href: I.Z.getArticleURL(this.getHelpdeskArticleURL()),
        className: g.helpIcon,
        children: (0, s.jsx)(o.CircleQuestionIcon, {
          color: r.Z.unsafe_rawColors.PRIMARY_300.css,
          size: "xxs"
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), f(this, "handleJoin", () => {
      let {
        onJoin: e
      } = this.props;
      null == e || e()
    }), f(this, "handleInvite", () => {
      let {
        onInvite: e
      } = this.props;
      null == e || e()
    }), f(this, "handleSync", () => {
      let {
        onSync: e
      } = this.props;
      null == e || e()
    }), f(this, "handleDownloadApp", () => {
      let {
        onDownloadApp: e
      } = this.props;
      null == e || e()
    }), f(this, "handleOpenSpotifyTrack", () => {
      let {
        activity: e,
        onOpenSpotifyTrack: t
      } = this.props;
      null != e && (null == t || t(e))
    }), f(this, "handleOpenSpotifyArtist", e => {
      let {
        activity: t,
        onOpenSpotifyArtist: n,
        message: s
      } = this.props;
      null != t && null != s && (null == n || n(t, s.author.id, e))
    }), f(this, "handleOpenSpotifyAlbum", () => {
      let {
        activity: e,
        onOpenSpotifyAlbum: t,
        message: n
      } = this.props;
      null != e && null != n && (null == t || t(e, n.author.id))
    }), f(this, "renderUser", (e, t, n) => {
      let {
        renderUserPopout: i,
        guildId: l
      } = this.props;
      return null != e ? (0, s.jsx)(O, {
        member: e,
        renderUserPopout: i,
        className: t,
        guildId: l
      }, n) : (0, s.jsx)("div", {
        className: a()(g.partyMemberEmpty, t)
      }, n)
    })
  }
}
t.Z = R