"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var r = n("37983"),
  s = n("884691"),
  o = n("414456"),
  a = n.n(o),
  l = n("77078"),
  u = n("782340"),
  i = n("708914");
class d extends s.PureComponent {
  render() {
    var e;
    let {
      title: t,
      actionText: n,
      children: o,
      error: d,
      isLoading: c,
      maxLength: _,
      transitionState: E,
      helpMessage: f,
      retryPrompt: A,
      retrySuccessMessage: I
    } = this.props, {
      code: R,
      errorMessage: N,
      retrySuccess: p
    } = this.state, S = s.Children.count(o) > 0 ? (0, r.jsx)(l.Card, {
      type: l.Card.Types.WARNING,
      className: i.card,
      children: (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        children: o
      })
    }) : null, T = null != A ? (0, r.jsxs)(l.Text, {
      className: a(i.submitText, i.spacing),
      variant: "text-sm/normal",
      children: [(0, r.jsx)("br", {}), (0, r.jsx)(l.Clickable, {
        className: a(i.spacing, i.link),
        onClick: this.handleRetry,
        children: (0, r.jsx)(l.Anchor, {
          children: A
        })
      })]
    }) : null, C = p ? (0, r.jsx)(l.Card, {
      type: l.Card.Types.SUCCESS,
      className: i.card,
      children: (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        children: I
      })
    }) : null;
    return (0, r.jsx)(l.ModalRoot, {
      transitionState: E,
      children: (0, r.jsxs)("form", {
        onSubmit: this.handleSubmit,
        children: [(0, r.jsx)(l.ModalHeader, {
          separator: !1,
          children: (0, r.jsx)(l.Heading, {
            variant: "heading-lg/semibold",
            children: t
          })
        }), (0, r.jsxs)(l.ModalContent, {
          children: [null != f ? (0, r.jsx)(l.Text, {
            color: "text-normal",
            variant: "text-md/normal",
            className: i.spacing,
            children: f
          }) : null, S, C, (0, r.jsxs)(l.FormItem, {
            title: this.getLabelText(),
            className: i.spacing,
            children: [(0, r.jsx)(l.TextInput, {
              inputRef: this.setRef,
              onChange: this.handleCodeChange,
              placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
              maxLength: null != _ ? _ : 10,
              value: R,
              autoComplete: "one-time-code",
              autoFocus: !0
            }), this.errorPresent() ? (0, r.jsx)(l.Text, {
              color: "text-danger",
              variant: "text-xs/normal",
              className: i.error,
              children: null != d ? d : N
            }) : null, T]
          })]
        }), (0, r.jsxs)(l.ModalFooter, {
          children: [(0, r.jsx)(l.Button, {
            type: "submit",
            disabled: c || 0 === R.length,
            children: null != n ? n : u.default.Messages.CONFIRM
          }), (0, r.jsx)(l.Button, {
            onClick: this.handleCancel,
            disabled: c,
            look: l.Button.Looks.LINK,
            color: l.Button.Colors.PRIMARY,
            children: u.default.Messages.CANCEL
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      code: "",
      errorMessage: "",
      retrySuccess: !1
    }, this.setRef = e => {
      this._input = e
    }, this.getLabelText = () => {
      var e;
      return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : u.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : u.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
      var e;
      return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
      let {
        onRetry: e
      } = this.props;
      null == e || e().then(() => this.setState({
        retrySuccess: !0
      }))
    }, this.handleSubmit = e => {
      e.preventDefault();
      let {
        handleSubmit: t,
        onError: n
      } = this.props;
      t(this.state.code).catch(e => {
        null != e.body && (null == n || n(e.body), e.body.message && this.setState({
          errorMessage: e.body.message
        }))
      })
    }, this.handleCancel = () => {
      let {
        onClose: e,
        handleEarlyClose: t
      } = this.props;
      e(), null == t || t()
    }, this.handleCodeChange = e => {
      this.setState({
        code: e
      })
    }
  }
}
d.defaultProps = {
  btnClass: "",
  isLoading: !1,
  disallowBackupCodes: !1,
  error: null,
  forceNoPlaceholder: !1
};
var c = d