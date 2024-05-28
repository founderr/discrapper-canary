"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("325432"),
  o = n("391690"),
  u = n("714759"),
  d = n("285952"),
  c = n("546591"),
  f = n("424218"),
  E = n("358085"),
  C = n("998502"),
  h = n("689938"),
  _ = n("341972"),
  S = n("611273");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class p extends s.PureComponent {
  renderDiskUsageCircle() {
    let {
      metadata: e
    } = this.props;
    return null != e && null != e.availableKB && null != e.totalKB ? (0, a.jsx)(u.default, {
      total: e.totalKB,
      used: e.totalKB - e.availableKB
    }) : null
  }
  renderViewing() {
    let e, t;
    let {
      path: n,
      label: s,
      editingPath: l,
      isDefault: r,
      metadata: u
    } = this.props;
    return null != u && (e = null != u.availableKB ? (0, f.formatSize)(u.availableKB, {
      useKibibytes: !0
    }) : null, t = null != u.totalKB ? (0, f.formatSize)(u.totalKB, {
      useKibibytes: !0
    }) : null), (0, a.jsxs)(d.default, {
      className: _.installationPath,
      align: d.default.Align.CENTER,
      children: [this.renderDiskUsageCircle(), (0, a.jsxs)(d.default, {
        direction: d.default.Direction.VERTICAL,
        className: _.__invalid_descriptionWrapper,
        children: [(0, a.jsxs)(d.default, {
          align: d.default.Align.CENTER,
          children: [(0, a.jsx)(i.Heading, {
            className: _.rowTitle,
            variant: "heading-md/semibold",
            children: null != s ? s : o.default.getLabelFromPath(n)
          }), r ? (0, a.jsx)("span", {
            className: _.defaultIndicator,
            children: h.default.Messages.DEFAULT
          }) : null]
        }), null != u && null != e && null != t ? (0, a.jsx)(c.default, {
          className: _.rowBody,
          hoverText: h.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_SPACE.format({
            available: e,
            total: t
          }),
          children: n
        }) : (0, a.jsx)(i.Text, {
          className: _.rowBody,
          variant: "text-xs/normal",
          children: n
        })]
      }), (0, a.jsx)(i.Button, {
        size: i.Button.Sizes.SMALL,
        disabled: null != l,
        color: i.Button.Colors.PRIMARY,
        onClick: this.handleStartEditing,
        children: h.default.Messages.EDIT
      })]
    })
  }
  renderEditing() {
    let {
      path: e,
      hasGamesInstalledInPath: t
    } = this.props, {
      label: n,
      isDefault: s
    } = this.state;
    return (0, a.jsx)(i.Card, {
      editable: !0,
      className: _.installationPathEditing,
      children: (0, a.jsxs)(d.default, {
        children: [this.renderDiskUsageCircle(), (0, a.jsxs)(d.default.Child, {
          children: [(0, a.jsx)(i.FormItem, {
            title: h.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_NAME,
            children: (0, a.jsx)(i.TextInput, {
              value: n,
              placeholder: o.default.getLabelFromPath(e),
              onChange: this.handleLabelChange
            })
          }), (0, a.jsx)(i.FormItem, {
            title: h.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION,
            className: S.marginTop20,
            children: (0, a.jsx)(i.TextInput, {
              disabled: !0,
              value: e
            })
          }), (0, a.jsx)(i.Checkbox, {
            type: i.Checkbox.Types.INVERTED,
            value: null != s ? s : this.props.isDefault,
            disabled: this.props.isDefault,
            className: _.defaultLocationCheckbox,
            onChange: this.handleToggleDefault,
            children: h.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_MAKE_DEFAULT
          }), (0, a.jsx)(i.FormDivider, {
            className: _.separator
          }), (0, a.jsxs)(d.default, {
            children: [(0, a.jsx)(i.Button, {
              disabled: t || this.props.isDefault,
              size: i.Button.Sizes.SMALL,
              color: i.Button.Colors.RED,
              look: i.Button.Looks.OUTLINED,
              onClick: this.handleRemoveLocation,
              children: h.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_REMOVE
            }), (0, a.jsxs)(d.default, {
              justify: d.default.Justify.END,
              children: [(0, a.jsx)(i.Button, {
                size: i.Button.Sizes.SMALL,
                color: i.Button.Colors.PRIMARY,
                look: i.Button.Looks.LINK,
                onClick: this.handleStopEditing,
                children: h.default.Messages.CANCEL
              }), (0, a.jsx)(i.Button, {
                disabled: e === this.props.path && n === this.props.label && s === this.props.isDefault,
                size: i.Button.Sizes.SMALL,
                color: i.Button.Colors.GREEN,
                onClick: this.handleSaveChanges,
                children: h.default.Messages.SAVE
              })]
            })]
          })]
        })]
      })
    })
  }
  render() {
    return this.props.editingPath === this.props.path ? this.renderEditing() : this.renderViewing()
  }
  constructor(...e) {
    super(...e), m(this, "state", {
      label: void 0,
      isDefault: null
    }), m(this, "handleStartEditing", () => {
      let {
        path: e,
        label: t,
        isDefault: n,
        onToggleEditing: a
      } = this.props;
      a(e), this.setState({
        label: t,
        isDefault: n
      })
    }), m(this, "handleStopEditing", () => {
      let {
        onToggleEditing: e
      } = this.props;
      e(null), this.setState({
        label: void 0,
        isDefault: null
      })
    }), m(this, "handleRemoveLocation", () => {
      (0, i.openModal)(e => (0, a.jsx)(i.ConfirmModal, {
        ...e,
        header: h.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_REMOVE,
        confirmText: h.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_REMOVE,
        cancelText: h.default.Messages.CANCEL,
        onConfirm: () => {
          this.handleStopEditing(), (0, r.removeInstallLocation)(this.props.path)
        },
        children: (0, a.jsx)(i.Text, {
          variant: "text-md/normal",
          children: h.default.Messages.USER_SETTINGS_GAMES_REMOVE_LOCATION_BODY
        })
      }))
    }), m(this, "handleSaveChanges", () => {
      (0, r.updateInstallLocation)(this.props.path, {
        label: null != this.state.label ? this.state.label : this.props.label,
        isDefault: null != this.state.isDefault ? this.state.isDefault : this.props.isDefault
      }), this.handleStopEditing()
    }), m(this, "handleLabelChange", e => {
      this.setState({
        label: e
      })
    }), m(this, "handleToggleDefault", () => {
      this.setState({
        isDefault: !this.state.isDefault
      })
    })
  }
}
class I extends s.PureComponent {
  componentDidMount() {
    (0, r.fetchMetadata)(this.props.installationPaths.map(e => {
      let {
        path: t
      } = e;
      return t
    }))
  }
  render() {
    let {
      installationPaths: e,
      installationPathsMetadata: t,
      defaultInstallationPath: n
    } = this.props, {
      editingPath: s
    } = this.state;
    return (0, a.jsxs)(i.FormSection, {
      className: _.wrapper,
      title: h.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATIONS,
      children: [e.map(e => {
        let {
          path: l,
          label: i
        } = e;
        return (0, a.jsx)(p, {
          path: l,
          label: i,
          metadata: t[l],
          isDefault: n === l,
          editingPath: s,
          hasGamesInstalledInPath: o.default.hasGamesInstalledInPath(l),
          onToggleEditing: this.handleToggleEditing
        }, l)
      }), (0, a.jsx)("div", {
        className: _.buttonRowWrapper,
        children: (0, a.jsx)(i.Button, {
          disabled: !E.isPlatformEmbedded,
          onClick: this.handleAddInstallationLocation,
          size: i.Button.Sizes.SMALL,
          children: h.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_ADD
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), m(this, "state", {
      editingPath: null
    }), m(this, "handleAddInstallationLocation", () => {
      C.default.showOpenDialog(["openDirectory"]).then(e => {
        null != e && 0 !== e.length && null != e[0] && "undefined" !== e[0] && (0, r.addInstallLocation)(e[0])
      })
    }), m(this, "handleToggleEditing", e => {
      this.setState({
        editingPath: e
      })
    })
  }
}
t.default = l.default.connectStores([o.default], () => ({
  installationPaths: o.default.installationPaths,
  installationPathsMetadata: o.default.installationPathsMetadata,
  defaultInstallationPath: o.default.defaultInstallationPath
}))(I)