s.r(t), s(47120);
var a = s(735250),
  n = s(470079),
  l = s(512722),
  o = s.n(l),
  i = s(442837),
  r = s(481060),
  u = s(596454),
  c = s(410575),
  S = s(907040),
  d = s(246133),
  h = s(695346),
  m = s(293273),
  T = s(594174),
  p = s(401227),
  g = s(626135),
  f = s(51144),
  C = s(720449),
  A = s(875425),
  O = s(981631),
  M = s(185923),
  _ = s(689938),
  j = s(814157);

function N(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let U = Object.values(A.F).filter(e => "number" == typeof e).sort((e, t) => e - t);

function x(e) {
  return (0, a.jsxs)("div", {
    className: j.statusOptionItem,
    children: [(0, a.jsx)(r.Status, {
      status: e.value,
      size: 10,
      className: j.statusIcon
    }), e.label]
  })
}
let v = [{
  key: 1,
  value: r.StatusTypes.ONLINE,
  label: (0, f.u5)(r.StatusTypes.ONLINE)
}, {
  key: 2,
  value: r.StatusTypes.IDLE,
  label: (0, f.u5)(r.StatusTypes.IDLE)
}, {
  key: 3,
  value: r.StatusTypes.DND,
  label: (0, f.u5)(r.StatusTypes.DND)
}, {
  key: 4,
  value: r.StatusTypes.INVISIBLE,
  label: (0, f.u5)(r.StatusTypes.INVISIBLE)
}];
class D extends n.PureComponent {
  componentDidMount() {
    let {
      sourceAnalyticsLocations: e,
      sourceAnalyticsContext: t
    } = this.props;
    g.default.track(O.rMx.OPEN_MODAL, {
      source: null == t ? void 0 : t.location,
      type: O.jXE.CUSTOM_STATUS_MODAL,
      load_id: null == t ? void 0 : t.loadId,
      location_stack: e
    })
  }
  get clearAfterOptions() {
    return [{
      key: 1,
      value: A.F.TODAY,
      label: _.Z.Messages.CUSTOM_STATUS_TODAY
    }, {
      key: 2,
      value: A.F.HOURS_4,
      label: _.Z.Messages.CUSTOM_STATUS_HOURS.format({
        hours: 4
      })
    }, {
      key: 3,
      value: A.F.HOURS_1,
      label: _.Z.Messages.CUSTOM_STATUS_HOURS.format({
        hours: 1
      })
    }, {
      key: 4,
      value: A.F.MINUTES_30,
      label: _.Z.Messages.CUSTOM_STATUS_MINUTES.format({
        minutes: 30
      })
    }, {
      key: 5,
      value: null,
      label: _.Z.Messages.CUSTOM_STATUS_DONT_CLEAR
    }]
  }
  get analyticsLocation() {
    return {
      page: O.ZY5.CUSTOM_STATUS_MODAL
    }
  }
  getEmojiButtonRenderer() {
    let {
      emojiInfo: e
    } = this.state;
    return null == e ? null : () => (0, a.jsx)(u.Z, {
      className: j.emoji,
      emojiId: e.id,
      emojiName: e.name,
      animated: !!e.animated
    })
  }
  renderCustomStatusInput() {
    let {
      user: e
    } = this.props, {
      text: t,
      emojiInfo: s
    } = this.state;
    return (0, a.jsx)(r.FormSection, {
      className: j.formGroup,
      title: _.Z.Messages.CUSTOM_STATUS_MODAL_BODY.format({
        username: e.username
      }),
      children: (0, a.jsxs)("div", {
        className: j.inputContainer,
        children: [(0, a.jsx)("div", {
          className: j.emojiButtonContainer,
          children: (0, a.jsx)(r.Popout, {
            renderPopout: this.renderEmojiPicker,
            position: "left",
            animation: r.Popout.Animation.NONE,
            align: "top",
            children: (e, t) => {
              let {
                isShown: s
              } = t;
              return (0, a.jsx)(p.Z, {
                ...e,
                active: s,
                className: j.emojiButton,
                tabIndex: 0,
                renderButtonContents: this.getEmojiButtonRenderer()
              })
            }
          })
        }), (0, a.jsx)(r.TextInput, {
          maxLength: A.s,
          value: t,
          inputClassName: j.input,
          placeholder: _.Z.Messages.CUSTOM_STATUS_MODAL_PLACEHOLDER,
          onChange: this.handleStatusChange,
          onKeyPress: this.handleKeyPress,
          autoFocus: !0
        }), t.length > 0 || null != s ? (0, a.jsx)(r.Button, {
          focusProps: {
            offset: {
              top: 8,
              bottom: 8,
              left: -2,
              right: -2
            }
          },
          className: j.clearButton,
          onClick: this.handleClearStatus,
          look: r.Button.Looks.BLANK,
          size: r.Button.Sizes.NONE,
          children: (0, a.jsx)(r.CircleXIcon, {
            size: "md",
            color: "currentColor",
            className: j.clearIcon
          })
        }) : null]
      })
    })
  }
  renderClearAfter() {
    let {
      clearAfter: e
    } = this.state;
    return (0, a.jsx)(r.FormSection, {
      className: j.formGroup,
      title: _.Z.Messages.CUSTOM_STATUS_CLEAR_AFTER,
      children: (0, a.jsx)(r.SingleSelect, {
        placeholder: _.Z.Messages.CUSTOM_STATUS_CLEAR_AFTER,
        maxVisibleItems: 5,
        value: e,
        options: this.clearAfterOptions,
        onChange: this.handleChangeClearAfter
      })
    })
  }
  renderStatusInput() {
    let {
      status: e
    } = this.state;
    return (0, a.jsx)(r.FormSection, {
      className: j.formGroup,
      title: _.Z.Messages.CUSTOM_STATUS_STATUS_TITLE,
      children: (0, a.jsx)(r.SingleSelect, {
        maxVisibleItems: 4,
        value: e,
        options: v,
        onChange: this.handleChangeStatus,
        renderOptionLabel: x
      })
    })
  }
  render() {
    let {
      transitionState: e,
      onClose: t
    } = this.props;
    return (0, a.jsx)(c.Z, {
      ...this.analyticsLocation,
      children: (0, a.jsxs)(r.ModalRoot, {
        transitionState: e,
        className: j.modalRoot,
        "aria-label": _.Z.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS,
        children: [(0, a.jsxs)(r.ModalHeader, {
          separator: !1,
          className: j.headerContainer,
          children: [(0, a.jsx)("div", {
            className: j.art
          }), (0, a.jsx)("div", {
            className: j.header,
            children: (0, a.jsx)(r.H, {
              className: j.headerText,
              children: _.Z.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS
            })
          }), (0, a.jsx)(r.ModalCloseButton, {
            onClick: t,
            className: j.modalCloseButton
          })]
        }), (0, a.jsxs)(r.ModalContent, {
          children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, a.jsx)(r.FormDivider, {
            className: j.formDivider
          }), this.renderStatusInput()]
        }), (0, a.jsxs)(r.ModalFooter, {
          children: [(0, a.jsx)(r.Button, {
            onClick: this.handleSubmit,
            children: _.Z.Messages.SAVE
          }), (0, a.jsx)(r.Button, {
            onClick: t,
            look: r.Button.Looks.LINK,
            color: j.cancelButton,
            children: _.Z.Messages.CANCEL
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), N(this, "state", {
      emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
      text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : "",
      clearAfter: function() {
        var e, t, s;
        let a = h.Ok.getSetting();
        if (null == a || "" === a.expiresAtMs) return A.F.TODAY;
        let n = Number(a.expiresAtMs);
        if (isNaN(n)) return A.F.TODAY;
        let l = new Date,
          o = new Date(n);
        if (t = l, s = o, t.getFullYear() !== s.getFullYear() || t.getMonth() !== s.getMonth() || t.getDate() !== s.getDate()) return A.F.TODAY;
        let i = Number(n) - Date.now();
        return null !== (e = U.find(e => i <= e)) && void 0 !== e ? e : A.F.TODAY
      }(),
      status: function() {
        let e = h.co.getSetting();
        return v.some(t => t.value === e) ? e : r.StatusTypes.ONLINE
      }()
    }), N(this, "handleClearStatus", () => {
      this.setState({
        emojiInfo: null,
        text: ""
      })
    }), N(this, "handleSubmit", e => {
      e.preventDefault(), this.handleSaveStatus()
    }), N(this, "handleStatusChange", e => {
      this.setState({
        text: e
      })
    }), N(this, "handleEmojiChange", e => {
      if (null == e) return;
      let t = null != e.id ? {
        id: e.id,
        name: e.name,
        animated: e.animated
      } : {
        id: null,
        name: e.optionallyDiverseSequence,
        animated: !1
      };
      this.setState({
        emojiInfo: t
      })
    }), N(this, "handleChangeClearAfter", e => {
      this.setState({
        clearAfter: e
      })
    }), N(this, "handleChangeStatus", e => {
      this.setState({
        status: e
      })
    }), N(this, "handleSaveStatus", () => {
      let {
        sourceAnalyticsContext: e,
        onClose: t
      } = this.props, {
        emojiInfo: s,
        text: a,
        clearAfter: n,
        status: l
      } = this.state, o = h.co.getSetting();
      o !== l && (0, d.Z)(l, o, e), (0, C.Z)(a, s, n, e), t()
    }), N(this, "handleKeyPress", e => {
      e.which === O.yXg.ENTER && this.handleSaveStatus()
    }), N(this, "renderEmojiPicker", e => {
      let {
        closePopout: t
      } = e, {
        onClose: s
      } = this.props;
      return (0, a.jsx)(S.Z, {
        closePopout: t,
        onSelectEmoji: (e, s) => {
          this.handleEmojiChange(e), s && t()
        },
        pickerIntention: M.Hz.STATUS,
        onNavigateAway: s
      })
    })
  }
}
t.default = i.ZP.connectStores([m.Z, T.default], () => {
  let e = T.default.getCurrentUser();
  return o()(null != e, "CustomStatusModal: user cannot be null"), {
    customStatus: m.Z.getCustomStatusActivity(),
    user: e
  }
}, {
  forwardRef: !0
})(D)