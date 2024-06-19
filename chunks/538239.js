n.r(t), n.d(t, {
  activityInviteKey: function() {
    return v
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(512722),
  a = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(904245),
  u = n(654030),
  d = n(744061),
  h = n(367907),
  m = n(728345),
  p = n(812206),
  E = n(541716),
  g = n(752305),
  f = n(893718),
  C = n(957730),
  _ = n(789407),
  I = n(300429),
  x = n(838440),
  T = n(981631),
  N = n(689938),
  Z = n(915301);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let v = "ActivityInvite";
class A extends i.PureComponent {
  componentDidMount() {
    this.fetchApplication()
  }
  componentDidUpdate(e) {
    let {
      activity: t
    } = this.props;
    t.application_id !== e.activity.application_id && this.fetchApplication()
  }
  fetchApplication() {
    let {
      activity: e,
      application: t
    } = this.props;
    null != e.application_id && null == t && m.Z.fetchApplication(e.application_id)
  }
  renderTitle() {
    let {
      activity: e
    } = this.props;
    switch (e.type) {
      case T.IIU.LISTENING:
        return N.Z.Messages.INVITE_EMBED_LISTENING_INVITE;
      case T.IIU.PLAYING:
      case T.IIU.STREAMING:
      default:
        return N.Z.Messages.INVITE_EMBED_GAME_INVITE
    }
  }
  render() {
    let {
      textValue: e,
      richValue: t,
      textFocused: n,
      contentWarningProps: i
    } = this.state, {
      activity: s,
      analyticsLocations: r,
      channel: c,
      activityActionType: h,
      cooldown: m,
      application: p,
      transitionState: g,
      onClose: C
    } = this.props, _ = m > 0, I = _ ? N.Z.Messages.CHANNEL_SLOWMODE_COOLDOWN.format({
      seconds: Math.round((m + 1e3) / 1e3)
    }) : null;
    return (0, l.jsxs)(o.ModalRoot, {
      size: o.ModalSize.SMALL,
      transitionState: g,
      "aria-label": this.renderTitle(),
      children: [(0, l.jsx)(o.ModalHeader, {
        separator: !1,
        children: (0, l.jsx)(o.Heading, {
          variant: "heading-lg/semibold",
          children: this.renderTitle()
        })
      }), (0, l.jsxs)(o.ModalContent, {
        children: [(0, l.jsx)("div", {
          className: Z.subHeader,
          children: N.Z.Messages.MESSAGE_PREVIEW
        }), (0, l.jsx)(u.Z, {
          activityActionType: h,
          activity: s,
          className: Z.preview,
          application: p,
          partyId: null != s.party ? s.party.id : null,
          isPreview: !0,
          analyticsLocations: r
        }), (0, l.jsx)("div", {
          className: Z.subHeader,
          children: N.Z.Messages.ADD_A_COMMENT_OPTIONAL
        }), (0, l.jsx)(o.Popout, {
          position: "top",
          onRequestClose: () => {
            var e;
            null == i || null === (e = i.onCancel) || void 0 === e || e.call(i), this.setState({
              contentWarningProps: null
            })
          },
          shouldShow: null != i,
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return a()(null != i, "ActivityInvite.render - renderPopout: contentWarningProps cannot be null"), (0, l.jsx)(d.Z, {
              onClose: t,
              ...i
            })
          },
          children: () => (0, l.jsx)(f.Z, {
            className: Z.textArea,
            textValue: e,
            richValue: t,
            focused: n,
            channel: c,
            onChange: this.handleTextChange,
            onSubmit: this.handleShare,
            type: E.I.FORM,
            parentModalKey: v,
            disableThemedBackground: !0
          })
        })]
      }), (0, l.jsxs)(o.ModalFooter, {
        children: [(0, l.jsx)(o.Tooltip, {
          text: I,
          children: e => (0, l.jsx)("div", {
            ...e,
            children: (0, l.jsx)(o.Button, {
              disabled: _,
              onClick: this.handleShare,
              children: N.Z.Messages.INVITE_EMBED_SEND_INVITE
            })
          })
        }), (0, l.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          onClick: C,
          children: N.Z.Messages.CANCEL
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), S(this, "state", {
      ...(0, g.H2)(),
      textFocused: !0,
      contentWarningProps: null
    }), S(this, "trackInvite", e => {
      if (null != e && e.ok) {
        let {
          activity: t,
          channel: n,
          activityActionType: l
        } = this.props, i = "";
        switch (l) {
          case T.mFx.JOIN:
            i = "Invite to Join";
            break;
          case T.mFx.LISTEN:
            i = "Invite to Listen";
            break;
          case T.mFx.WATCH:
            i = "Invite to Watch"
        }
        return h.ZP.trackWithMetadata(T.rMx.INVITE_SENT, {
          location: "Channel Text Area - ".concat(i),
          invite_type: t.type === T.IIU.LISTENING ? T.dAT.SPOTIFY : T.dAT.APPLICATION,
          application_id: t.application_id,
          guild_id: n.getGuildId(),
          channel_id: n.id,
          message_id: null != e ? e.body.id : null
        }), Promise.resolve()
      }
    }), S(this, "handleTextChange", (e, t, n) => {
      this.setState({
        textValue: t,
        richValue: n
      })
    }), S(this, "handleShare", () => {
      let {
        channel: e,
        activity: t,
        activityActionType: n,
        cooldown: l,
        onClose: i
      } = this.props, {
        textValue: s,
        contentWarningProps: a
      } = this.state;
      if (l > 0) return Promise.resolve({
        shouldClear: !1,
        shouldRefocus: !0
      });
      let r = C.ZP.parse(e, s),
        o = {
          activity: t,
          type: n
        };
      return null != a ? (this.setState({
        contentWarningProps: null
      }), c.Z.sendMessage(e.id, r, !0, {
        activityAction: o
      }).then(e => this.trackInvite(e)), i(), Promise.resolve({
        shouldClear: !0,
        shouldRefocus: !0
      })) : (0, x.v)({
        openWarningPopout: e => this.setState({
          contentWarningProps: e
        }),
        type: E.I.FORM,
        content: s,
        channel: e
      }).then(t => {
        let {
          valid: n
        } = t;
        return n ? (c.Z.sendMessage(e.id, r, !0, {
          activityAction: o
        }).then(e => this.trackInvite(e)), i(), {
          shouldClear: !1,
          shouldRefocus: !1
        }) : {
          shouldClear: !1,
          shouldRefocus: !1
        }
      })
    })
  }
}
t.default = r.ZP.connectStores([I.Z, p.Z], e => {
  let {
    channel: t,
    activity: n
  } = e;
  return {
    cooldown: I.Z.getSlowmodeCooldownGuess(t.id),
    application: null != n.application_id ? p.Z.getApplication(n.application_id) : _.r9
  }
})(A)