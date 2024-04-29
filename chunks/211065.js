"use strict";
a.r(t), a("47120");
var s = a("735250"),
  l = a("470079"),
  n = a("512722"),
  u = a.n(n),
  r = a("442837"),
  i = a("481060"),
  o = a("596454"),
  S = a("410575"),
  d = a("907040"),
  c = a("246133"),
  h = a("695346"),
  m = a("293273"),
  f = a("594174"),
  T = a("401227"),
  p = a("696202"),
  A = a("626135"),
  C = a("51144"),
  g = a("720449"),
  _ = a("875425"),
  M = a("981631"),
  O = a("185923"),
  N = a("689938"),
  j = a("307912");

function U(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let x = Object.values(_.ClearAfterValues).filter(e => "number" == typeof e).sort((e, t) => e - t);

function v(e) {
  return (0, s.jsxs)("div", {
    className: j.statusOptionItem,
    children: [(0, s.jsx)(i.Status, {
      status: e.value,
      size: 10,
      className: j.statusIcon
    }), e.label]
  })
}
let E = [{
  key: 1,
  value: i.StatusTypes.ONLINE,
  label: (0, C.humanizeStatus)(i.StatusTypes.ONLINE)
}, {
  key: 2,
  value: i.StatusTypes.IDLE,
  label: (0, C.humanizeStatus)(i.StatusTypes.IDLE)
}, {
  key: 3,
  value: i.StatusTypes.DND,
  label: (0, C.humanizeStatus)(i.StatusTypes.DND)
}, {
  key: 4,
  value: i.StatusTypes.INVISIBLE,
  label: (0, C.humanizeStatus)(i.StatusTypes.INVISIBLE)
}];
class D extends l.PureComponent {
  componentDidMount() {
    let {
      sourceAnalyticsContext: e
    } = this.props;
    A.default.track(M.AnalyticEvents.OPEN_MODAL, {
      source: e.location,
      type: M.AnalyticsSections.CUSTOM_STATUS_MODAL,
      load_id: e.loadId
    })
  }
  get clearAfterOptions() {
    return [{
      key: 1,
      value: _.ClearAfterValues.TODAY,
      label: N.default.Messages.CUSTOM_STATUS_TODAY
    }, {
      key: 2,
      value: _.ClearAfterValues.HOURS_4,
      label: N.default.Messages.CUSTOM_STATUS_HOURS.format({
        hours: 4
      })
    }, {
      key: 3,
      value: _.ClearAfterValues.HOURS_1,
      label: N.default.Messages.CUSTOM_STATUS_HOURS.format({
        hours: 1
      })
    }, {
      key: 4,
      value: _.ClearAfterValues.MINUTES_30,
      label: N.default.Messages.CUSTOM_STATUS_MINUTES.format({
        minutes: 30
      })
    }, {
      key: 5,
      value: null,
      label: N.default.Messages.CUSTOM_STATUS_DONT_CLEAR
    }]
  }
  get analyticsLocation() {
    return {
      page: M.AnalyticsPages.CUSTOM_STATUS_MODAL
    }
  }
  getEmojiButtonRenderer() {
    let {
      emojiInfo: e
    } = this.state;
    return null == e ? null : () => (0, s.jsx)(o.default, {
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
      emojiInfo: a
    } = this.state;
    return (0, s.jsx)(i.FormSection, {
      className: j.formGroup,
      title: N.default.Messages.CUSTOM_STATUS_MODAL_BODY.format({
        username: e.username
      }),
      children: (0, s.jsxs)("div", {
        className: j.inputContainer,
        children: [(0, s.jsx)("div", {
          className: j.emojiButtonContainer,
          children: (0, s.jsx)(i.Popout, {
            renderPopout: this.renderEmojiPicker,
            position: "left",
            animation: i.Popout.Animation.NONE,
            align: "top",
            children: (e, t) => {
              let {
                isShown: a
              } = t;
              return (0, s.jsx)(T.default, {
                ...e,
                active: a,
                className: j.emojiButton,
                tabIndex: 0,
                renderButtonContents: this.getEmojiButtonRenderer()
              })
            }
          })
        }), (0, s.jsx)(i.TextInput, {
          maxLength: _.STATUS_MAX_LENGTH,
          value: t,
          inputClassName: j.input,
          placeholder: N.default.Messages.CUSTOM_STATUS_MODAL_PLACEHOLDER,
          onChange: this.handleStatusChange,
          onKeyPress: this.handleKeyPress,
          autoFocus: !0
        }), t.length > 0 || null != a ? (0, s.jsx)(i.Button, {
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
          look: i.Button.Looks.BLANK,
          size: i.Button.Sizes.NONE,
          children: (0, s.jsx)(p.default, {
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
    return (0, s.jsx)(i.FormSection, {
      className: j.formGroup,
      title: N.default.Messages.CUSTOM_STATUS_CLEAR_AFTER,
      children: (0, s.jsx)(i.SingleSelect, {
        placeholder: N.default.Messages.CUSTOM_STATUS_CLEAR_AFTER,
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
    return (0, s.jsx)(i.FormSection, {
      className: j.formGroup,
      title: N.default.Messages.CUSTOM_STATUS_STATUS_TITLE,
      children: (0, s.jsx)(i.SingleSelect, {
        maxVisibleItems: 4,
        value: e,
        options: E,
        onChange: this.handleChangeStatus,
        renderOptionLabel: v
      })
    })
  }
  render() {
    let {
      transitionState: e,
      onClose: t
    } = this.props;
    return (0, s.jsx)(S.default, {
      ...this.analyticsLocation,
      children: (0, s.jsxs)(i.ModalRoot, {
        transitionState: e,
        className: j.modalRoot,
        "aria-label": N.default.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS,
        children: [(0, s.jsxs)(i.ModalHeader, {
          separator: !1,
          className: j.headerContainer,
          children: [(0, s.jsx)("div", {
            className: j.art
          }), (0, s.jsx)("div", {
            className: j.header,
            children: (0, s.jsx)(i.H, {
              className: j.headerText,
              children: N.default.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS
            })
          }), (0, s.jsx)(i.ModalCloseButton, {
            onClick: t,
            className: j.modalCloseButton
          })]
        }), (0, s.jsxs)(i.ModalContent, {
          children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, s.jsx)(i.FormDivider, {
            className: j.formDivider
          }), this.renderStatusInput()]
        }), (0, s.jsxs)(i.ModalFooter, {
          children: [(0, s.jsx)(i.Button, {
            onClick: this.handleSubmit,
            children: N.default.Messages.SAVE
          }), (0, s.jsx)(i.Button, {
            onClick: t,
            look: i.Button.Looks.LINK,
            color: j.cancelButton,
            children: N.default.Messages.CANCEL
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), U(this, "state", {
      emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
      text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : "",
      clearAfter: function() {
        var e, t, a;
        let s = h.CustomStatusSetting.getSetting();
        if (null == s || "" === s.expiresAtMs) return _.ClearAfterValues.TODAY;
        let l = Number(s.expiresAtMs);
        if (isNaN(l)) return _.ClearAfterValues.TODAY;
        let n = new Date,
          u = new Date(l);
        if (t = n, a = u, t.getFullYear() !== a.getFullYear() || t.getMonth() !== a.getMonth() || t.getDate() !== a.getDate()) return _.ClearAfterValues.TODAY;
        let r = Number(l) - Date.now();
        return null !== (e = x.find(e => r <= e)) && void 0 !== e ? e : _.ClearAfterValues.TODAY
      }(),
      status: function() {
        let e = h.StatusSetting.getSetting();
        return E.some(t => t.value === e) ? e : i.StatusTypes.ONLINE
      }()
    }), U(this, "handleClearStatus", () => {
      this.setState({
        emojiInfo: null,
        text: ""
      })
    }), U(this, "handleSubmit", e => {
      e.preventDefault(), this.handleSaveStatus()
    }), U(this, "handleStatusChange", e => {
      this.setState({
        text: e
      })
    }), U(this, "handleEmojiChange", e => {
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
    }), U(this, "handleChangeClearAfter", e => {
      this.setState({
        clearAfter: e
      })
    }), U(this, "handleChangeStatus", e => {
      this.setState({
        status: e
      })
    }), U(this, "handleSaveStatus", () => {
      let {
        sourceAnalyticsContext: e,
        onClose: t
      } = this.props, {
        emojiInfo: a,
        text: s,
        clearAfter: l,
        status: n
      } = this.state, u = h.StatusSetting.getSetting();
      u !== n && (0, c.default)(n, u, e), (0, g.default)(s, a, l, e), t()
    }), U(this, "handleKeyPress", e => {
      e.which === M.KeyboardKeys.ENTER && this.handleSaveStatus()
    }), U(this, "renderEmojiPicker", e => {
      let {
        closePopout: t
      } = e, {
        onClose: a
      } = this.props;
      return (0, s.jsx)(d.default, {
        closePopout: t,
        onSelectEmoji: (e, a) => {
          this.handleEmojiChange(e), a && t()
        },
        pickerIntention: O.EmojiIntention.STATUS,
        onNavigateAway: a
      })
    })
  }
}
t.default = r.default.connectStores([m.default, f.default], () => {
  let e = f.default.getCurrentUser();
  return u()(null != e, "CustomStatusModal: user cannot be null"), {
    customStatus: m.default.getCustomStatusActivity(),
    user: e
  }
}, {
  forwardRef: !0
})(D)