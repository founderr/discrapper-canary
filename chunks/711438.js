"use strict";
a.r(e), a.d(e, {
  default: function() {
    return b
  }
}), a("222007");
var s = a("37983"),
  n = a("884691"),
  l = a("627445"),
  u = a.n(l),
  r = a("446674"),
  i = a("77078"),
  o = a("430568"),
  S = a("901582"),
  d = a("86678"),
  c = a("583232"),
  h = a("91639"),
  m = a("845579"),
  T = a("52028"),
  f = a("697218"),
  p = a("882641"),
  g = a("381546"),
  A = a("599110"),
  C = a("158998"),
  _ = a("921917"),
  O = a("712246"),
  x = a("413524"),
  M = a("49111"),
  N = a("958706"),
  E = a("782340"),
  U = a("711103");
let j = Object.values(x.ClearAfterValues).filter(t => "number" == typeof t).sort((t, e) => t - e);

function v(t) {
  return (0, s.jsxs)("div", {
    className: U.statusOptionItem,
    children: [(0, s.jsx)(i.Status, {
      status: t.value,
      size: 10,
      className: U.statusIcon
    }), t.label]
  })
}
let D = [{
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

function y(t, e, a) {
  return t === i.StatusTypes.ONLINE && e !== i.StatusTypes.ONLINE && null != a
}

function I(t) {
  let {
    status: e,
    clearAfter: a,
    clearStatusToo: n,
    onChange: l
  } = t, u = m.StatusSetting.useSetting(), r = y(u, e, a), o = h.ExpiringStatusExperiment.useExperiment({
    location: "custom status modal"
  }, {
    disable: !r,
    autoTrackExposure: !0
  }).expiringStatus;
  return o ? (0, s.jsx)(i.FormSwitch, {
    className: U.formGroup,
    value: n,
    onChange: l,
    children: E.default.Messages.CUSTOM_STATUS_ALSO_CLEAR_STATUS
  }) : null
}
class L extends n.PureComponent {
  componentDidMount() {
    let {
      sourceAnalyticsContext: t
    } = this.props;
    A.default.track(M.AnalyticEvents.OPEN_MODAL, {
      source: t.location,
      type: M.AnalyticsSections.CUSTOM_STATUS_MODAL,
      load_id: t.loadId
    })
  }
  get clearAfterOptions() {
    return [{
      key: 1,
      value: x.ClearAfterValues.TODAY,
      label: E.default.Messages.CUSTOM_STATUS_TODAY
    }, {
      key: 2,
      value: x.ClearAfterValues.HOURS_4,
      label: E.default.Messages.CUSTOM_STATUS_HOURS.format({
        hours: 4
      })
    }, {
      key: 3,
      value: x.ClearAfterValues.HOURS_1,
      label: E.default.Messages.CUSTOM_STATUS_HOURS.format({
        hours: 1
      })
    }, {
      key: 4,
      value: x.ClearAfterValues.MINUTES_30,
      label: E.default.Messages.CUSTOM_STATUS_MINUTES.format({
        minutes: 30
      })
    }, {
      key: 5,
      value: null,
      label: E.default.Messages.CUSTOM_STATUS_DONT_CLEAR
    }]
  }
  get analyticsLocation() {
    return {
      page: M.AnalyticsPages.CUSTOM_STATUS_MODAL
    }
  }
  getEmojiButtonRenderer() {
    let {
      emojiInfo: t
    } = this.state;
    return null == t ? null : () => (0, s.jsx)(o.default, {
      className: U.emoji,
      emojiId: t.id,
      emojiName: t.name,
      animated: !!t.animated
    })
  }
  renderCustomStatusInput() {
    let {
      user: t
    } = this.props, {
      text: e,
      emojiInfo: a
    } = this.state;
    return (0, s.jsx)(i.FormSection, {
      className: U.formGroup,
      title: E.default.Messages.CUSTOM_STATUS_MODAL_BODY.format({
        username: t.username
      }),
      children: (0, s.jsxs)("div", {
        className: U.inputContainer,
        children: [(0, s.jsx)("div", {
          className: U.emojiButtonContainer,
          children: (0, s.jsx)(i.Popout, {
            renderPopout: this.renderEmojiPicker,
            position: "left",
            animation: i.Popout.Animation.NONE,
            align: "top",
            children: (t, e) => {
              let {
                isShown: a
              } = e;
              return (0, s.jsx)(p.default, {
                ...t,
                active: a,
                className: U.emojiButton,
                tabIndex: 0,
                renderButtonContents: this.getEmojiButtonRenderer()
              })
            }
          })
        }), (0, s.jsx)(i.TextInput, {
          maxLength: x.STATUS_MAX_LENGTH,
          value: e,
          inputClassName: U.input,
          placeholder: E.default.Messages.CUSTOM_STATUS_MODAL_PLACEHOLDER,
          onChange: this.handleStatusChange,
          onKeyPress: this.handleKeyPress,
          autoFocus: !0
        }), e.length > 0 || null != a ? (0, s.jsx)(i.Button, {
          focusProps: {
            offset: {
              top: 8,
              bottom: 8,
              left: -2,
              right: -2
            }
          },
          className: U.clearButton,
          onClick: this.handleClearStatus,
          look: i.Button.Looks.BLANK,
          size: i.Button.Sizes.NONE,
          children: (0, s.jsx)(g.default, {
            className: U.clearIcon
          })
        }) : null]
      })
    })
  }
  renderClearAfter() {
    let {
      clearAfter: t
    } = this.state;
    return (0, s.jsx)(i.FormSection, {
      className: U.formGroup,
      title: E.default.Messages.CUSTOM_STATUS_CLEAR_AFTER,
      children: (0, s.jsx)(i.SingleSelect, {
        placeholder: E.default.Messages.CUSTOM_STATUS_CLEAR_AFTER,
        maxVisibleItems: 5,
        value: t,
        options: this.clearAfterOptions,
        onChange: this.handleChangeClearAfter
      })
    })
  }
  renderStatusInput() {
    let {
      status: t
    } = this.state;
    return (0, s.jsx)(i.FormSection, {
      className: U.formGroup,
      title: E.default.Messages.CUSTOM_STATUS_STATUS_TITLE,
      children: (0, s.jsx)(i.SingleSelect, {
        maxVisibleItems: 4,
        value: t,
        options: D,
        onChange: this.handleChangeStatus,
        renderOptionLabel: v
      })
    })
  }
  renderExpiringStatusOption() {
    let {
      status: t,
      clearAfter: e,
      clearStatusToo: a
    } = this.state;
    return (0, s.jsx)(I, {
      status: t,
      clearAfter: e,
      clearStatusToo: a,
      onChange: t => this.setState({
        clearStatusToo: t
      })
    })
  }
  render() {
    let {
      transitionState: t,
      onClose: e
    } = this.props;
    return (0, s.jsx)(S.default, {
      ...this.analyticsLocation,
      children: (0, s.jsxs)(i.ModalRoot, {
        transitionState: t,
        className: U.modalRoot,
        "aria-label": E.default.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS,
        children: [(0, s.jsxs)(i.ModalHeader, {
          separator: !1,
          className: U.headerContainer,
          children: [(0, s.jsx)("div", {
            className: U.art
          }), (0, s.jsx)("div", {
            className: U.header,
            children: (0, s.jsx)(i.H, {
              className: U.headerText,
              children: E.default.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS
            })
          }), (0, s.jsx)(i.ModalCloseButton, {
            onClick: e,
            className: U.modalCloseButton
          })]
        }), (0, s.jsxs)(i.ModalContent, {
          children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, s.jsx)(i.FormDivider, {
            className: U.formDivider
          }), this.renderStatusInput(), this.renderExpiringStatusOption()]
        }), (0, s.jsxs)(i.ModalFooter, {
          children: [(0, s.jsx)(i.Button, {
            onClick: this.handleSubmit,
            children: E.default.Messages.SAVE
          }), (0, s.jsx)(i.Button, {
            onClick: e,
            look: i.Button.Looks.LINK,
            color: U.cancelButton,
            children: E.default.Messages.CANCEL
          })]
        })]
      })
    })
  }
  constructor(...t) {
    super(...t), this.state = {
      emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
      text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : "",
      clearAfter: function() {
        var t, e, a;
        let s = m.CustomStatusSetting.getSetting();
        if (null == s || "" === s.expiresAtMs) return x.ClearAfterValues.TODAY;
        let n = Number(s.expiresAtMs);
        if (isNaN(n)) return x.ClearAfterValues.TODAY;
        let l = new Date,
          u = new Date(n);
        if (e = l, a = u, e.getFullYear() !== a.getFullYear() || e.getMonth() !== a.getMonth() || e.getDate() !== a.getDate()) return x.ClearAfterValues.TODAY;
        let r = Number(n) - Date.now();
        return null !== (t = j.find(t => r <= t)) && void 0 !== t ? t : x.ClearAfterValues.TODAY
      }(),
      status: function() {
        let t = m.StatusSetting.getSetting();
        return D.some(e => e.value === t) ? t : i.StatusTypes.ONLINE
      }(),
      clearStatusToo: !0
    }, this.handleClearStatus = () => {
      this.setState({
        emojiInfo: null,
        text: ""
      })
    }, this.handleSubmit = t => {
      t.preventDefault(), this.handleSaveStatus()
    }, this.handleStatusChange = t => {
      this.setState({
        text: t
      })
    }, this.handleEmojiChange = t => {
      if (null == t) return;
      let e = null != t.id ? {
        id: t.id,
        name: t.name,
        animated: t.animated
      } : {
        id: null,
        name: t.optionallyDiverseSequence,
        animated: !1
      };
      this.setState({
        emojiInfo: e
      })
    }, this.handleChangeClearAfter = t => {
      this.setState({
        clearAfter: t
      })
    }, this.handleChangeStatus = t => {
      this.setState({
        status: t
      })
    }, this.handleSaveStatus = () => {
      let {
        sourceAnalyticsContext: t,
        onClose: e
      } = this.props, {
        emojiInfo: a,
        text: s,
        clearAfter: n,
        status: l,
        clearStatusToo: u
      } = this.state, r = m.StatusSetting.getSetting(), i = y(r, l, n), o = h.ExpiringStatusExperiment.getCurrentConfig({
        location: "custom status modal (set status)"
      }, {
        disable: !i,
        autoTrackExposure: !0
      }).expiringStatus;
      (0, c.default)(l, void 0, t, o && null != n && u ? (0, O.default)(n) : void 0), (0, _.default)(s, a, n, t), e()
    }, this.handleKeyPress = t => {
      t.which === M.KeyboardKeys.ENTER && this.handleSaveStatus()
    }, this.renderEmojiPicker = t => {
      let {
        closePopout: e
      } = t, {
        onClose: a
      } = this.props;
      return (0, s.jsx)(d.default, {
        closePopout: e,
        onSelectEmoji: (t, a) => {
          this.handleEmojiChange(t), a && e()
        },
        pickerIntention: N.EmojiIntention.STATUS,
        onNavigateAway: a
      })
    }
  }
}
var b = r.default.connectStores([T.default, f.default], () => {
  let t = f.default.getCurrentUser();
  return u(null != t, "CustomStatusModal: user cannot be null"), {
    customStatus: T.default.getCustomStatusActivity(),
    user: t
  }
}, {
  forwardRef: !0
})(L)