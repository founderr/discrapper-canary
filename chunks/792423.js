t.d(s, {
  Z: function() {
    return E
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(481060),
  l = t(401190),
  r = t(689938),
  o = t(248669);

function c(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class E extends i.PureComponent {
  renderErrorMessage() {
    let {
      hasError: e
    } = this.state;
    return e ? (0, n.jsx)("div", {
      className: o.error,
      children: r.Z.Messages.HYPESQUAD_LEAVE_ERROR
    }) : null
  }
  render() {
    let {
      isRequestPending: e
    } = this.state, {
      isHypeSquadOnlineMember: s
    } = this.props;
    return s ? (0, n.jsxs)("div", {
      className: o.leaveActionWrapper,
      children: [this.renderErrorMessage(), (0, n.jsxs)(a.Text, {
        variant: "text-sm/normal",
        children: [r.Z.Messages.HYPESQUAD_LEAVE_PROMPT, (0, n.jsx)(a.Button, {
          className: o.leaveButton,
          color: a.Button.Colors.LINK,
          look: a.Button.Looks.LINK,
          onClick: this.handleLeaveHypeSquadClick,
          size: a.Button.Sizes.NONE,
          submitting: e,
          children: r.Z.Messages.HYPESQUAD_LEAVE_ACTION
        })]
      })]
    }) : null
  }
  constructor(...e) {
    super(...e), c(this, "state", {
      isRequestPending: !1,
      hasError: !1
    }), c(this, "handleLeaveHypeSquadError", () => {
      this.setState({
        hasError: !0
      })
    }), c(this, "handleLeaveHypeSquadClick", () => {
      this.setState({
        isRequestPending: !0
      }, () => {
        l.Z.leaveHypeSquadOnline().then(() => {
          this.setState({
            isRequestPending: !1
          })
        }).catch(() => {
          this.setState({
            hasError: !0,
            isRequestPending: !1
          })
        })
      })
    })
  }
}