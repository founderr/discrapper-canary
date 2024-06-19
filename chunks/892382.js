t.r(s), t(47120);
var r = t(735250),
  n = t(470079),
  i = t(120356),
  a = t.n(i),
  l = t(392711),
  o = t.n(l),
  d = t(442837),
  c = t(544891),
  h = t(481060),
  u = t(447543),
  m = t(225433),
  p = t(129861),
  I = t(700582),
  x = t(367907),
  T = t(210887),
  N = t(758449),
  g = t(598077),
  E = t(592125),
  v = t(246946),
  Z = t(373791),
  j = t(285952),
  C = t(626135),
  S = t(981631),
  f = t(689938),
  b = t(746582),
  M = t(5973),
  _ = t(331651);

function k(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class A extends n.PureComponent {
  render() {
    let {
      invite: e,
      hideDiscriminator: s,
      hideInviteCode: t
    } = this.props, n = new g.Z(e.inviter);
    return (0, r.jsxs)(j.Z, {
      className: a()(b.row, M.card),
      children: [(0, r.jsxs)(j.Z, {
        align: j.Z.Align.CENTER,
        className: b.userColumn,
        children: [(0, r.jsx)(I.Z, {
          user: n,
          size: h.AvatarSizes.SIZE_24,
          className: b.avatar
        }), (0, r.jsx)(p.Z, {
          user: n,
          hideDiscriminator: s,
          usernameClass: b.username,
          discriminatorClass: b.discrimClass
        })]
      }), (0, r.jsx)(j.Z, {
        align: j.Z.Align.CENTER,
        grow: 0,
        shrink: 0,
        basis: 100,
        className: b.boostZIndex,
        children: (0, r.jsx)(h.Text, {
          className: b.code,
          variant: "text-sm/normal",
          children: t ? "..." : e.code
        })
      }), (0, r.jsxs)(j.Z, {
        basis: 100,
        grow: 0,
        shrink: 0,
        align: j.Z.Align.CENTER,
        justify: j.Z.Justify.END,
        className: b.boostZIndex,
        children: [(0, r.jsx)(h.Text, {
          className: b.countdown,
          variant: "text-sm/normal",
          children: (0, r.jsx)(Z.Z, {
            deadline: e.getExpiresAt(),
            showDays: !1
          })
        }), (0, r.jsx)(m.Z, {
          className: b.revokeInvite,
          onClick: this.handleRevokeInvite
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), k(this, "handleRevokeInvite", () => {
      let {
        onRevoke: e,
        invite: s
      } = this.props;
      null != e && e(s)
    })
  }
}
class y extends n.PureComponent {
  componentDidMount() {
    let {
      channelId: e
    } = this.props;
    c.tn.get({
      url: S.ANM.INSTANT_INVITES(e),
      retries: 3,
      oldFormErrors: !0
    }).then(e => {
      let s = e.body.map(e => new N.Z({
        ...e,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: e.created_at
      }));
      this.setState({
        loading: !1,
        invites: s
      })
    }), C.default.track(S.rMx.OPEN_MODAL, {
      ...(0, x.v_)(E.Z.getChannel(e)),
      type: "Group DM Invites",
      source: "Group DM Menu"
    })
  }
  renderContent() {
    let {
      loading: e,
      invites: s
    } = this.state;
    return e || null == s ? (0, r.jsx)(h.Spinner, {
      className: _.marginTop20,
      type: h.Spinner.Type.SPINNING_CIRCLE
    }) : o().isEmpty(s) ? this.renderEmpty() : (0, r.jsxs)("div", {
      className: b.container,
      children: [this.renderHeader(), this.renderInvites()]
    })
  }
  renderEmpty() {
    return (0, r.jsxs)(h.EmptyState, {
      theme: this.props.theme,
      children: [(0, r.jsx)(h.EmptyStateImage, {
        darkSrc: t(914814),
        lightSrc: t(370392),
        width: 256,
        height: 130,
        style: {
          marginBottom: 0
        }
      }), (0, r.jsx)(h.EmptyStateText, {
        className: _.marginTop20,
        children: f.Z.Messages.NO_INVITES_CAPTION
      })]
    })
  }
  renderHeader() {
    return (0, r.jsxs)(j.Z, {
      children: [(0, r.jsx)(j.Z.Child, {
        wrap: !0,
        children: (0, r.jsx)(h.FormTitle, {
          children: f.Z.Messages.INSTANT_INVITE_INVITER
        })
      }), (0, r.jsx)(j.Z.Child, {
        wrap: !0,
        grow: 0,
        shrink: 0,
        basis: 100,
        children: (0, r.jsx)(h.FormTitle, {
          children: f.Z.Messages.INSTANT_INVITE_INVITE_CODE
        })
      }), (0, r.jsx)(j.Z.Child, {
        wrap: !0,
        grow: 0,
        shrink: 0,
        basis: 100,
        children: (0, r.jsx)(h.FormTitle, {
          className: b.alignRight,
          children: f.Z.Messages.INSTANT_INVITE_EXPIRES
        })
      })]
    })
  }
  renderInvites() {
    let {
      hideDiscriminators: e,
      hideInviteCodes: s
    } = this.props;
    return o()(this.state.invites).sortBy(e => {
      var s;
      return (null !== (s = e.inviter.username) && void 0 !== s ? s : "").toLocaleLowerCase()
    }).map(t => (0, r.jsx)(A, {
      invite: t,
      hideDiscriminator: e,
      hideInviteCode: s,
      onRevoke: this.handleRevoke
    }, t.code)).value()
  }
  render() {
    return (0, r.jsxs)(h.ModalRoot, {
      transitionState: this.props.transitionState,
      "aria-label": f.Z.Messages.INVITES,
      size: h.ModalSize.MEDIUM,
      children: [(0, r.jsxs)(h.ModalHeader, {
        direction: j.Z.Direction.VERTICAL,
        align: j.Z.Align.START,
        separator: !1,
        children: [(0, r.jsx)(h.FormTitle, {
          tag: h.FormTitleTags.H1,
          children: f.Z.Messages.INVITES
        }), (0, r.jsx)(h.FormText, {
          type: h.FormTextTypes.DESCRIPTION,
          children: f.Z.Messages.SETTINGS_INVITE_TIP_WITHOUT_CREATE
        })]
      }), (0, r.jsx)(h.ModalContent, {
        children: this.renderContent()
      }), (0, r.jsx)(h.ModalFooter, {
        children: (0, r.jsx)(h.Button, {
          onClick: this.handleClose,
          children: f.Z.Messages.DONE
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), k(this, "state", {
      loading: !0,
      invites: null
    }), k(this, "handleRevoke", e => {
      u.Z.revokeInvite(e), this.setState({
        invites: this.state.invites.filter(s => s !== e)
      })
    }), k(this, "handleClose", () => {
      let {
        onClose: e
      } = this.props;
      null == e || e()
    })
  }
}
s.default = d.ZP.connectStores([v.Z, T.Z], () => ({
  hideDiscriminators: v.Z.hidePersonalInformation,
  hideInviteCodes: v.Z.hideInstantInvites,
  theme: T.Z.theme
}))(y)