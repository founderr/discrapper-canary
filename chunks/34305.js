"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("442837"),
  i = a("481060"),
  r = a("325432"),
  o = a("391690"),
  u = a("714759"),
  d = a("285952"),
  c = a("546591"),
  f = a("424218"),
  E = a("358085"),
  h = a("998502"),
  _ = a("689938"),
  C = a("422340"),
  m = a("794711");

function S(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class p extends s.PureComponent {
  renderDiskUsageCircle() {
    let {
      metadata: e
    } = this.props;
    return null != e && null != e.availableKB && null != e.totalKB ? (0, n.jsx)(u.default, {
      total: e.totalKB,
      used: e.totalKB - e.availableKB
    }) : null
  }
  renderViewing() {
    let e, t;
    let {
      path: a,
      label: s,
      editingPath: l,
      isDefault: r,
      metadata: u
    } = this.props;
    return null != u && (e = null != u.availableKB ? (0, f.formatSize)(u.availableKB, {
      useKibibytes: !0
    }) : null, t = null != u.totalKB ? (0, f.formatSize)(u.totalKB, {
      useKibibytes: !0
    }) : null), (0, n.jsxs)(d.default, {
      className: C.installationPath,
      align: d.default.Align.CENTER,
      children: [this.renderDiskUsageCircle(), (0, n.jsxs)(d.default, {
        direction: d.default.Direction.VERTICAL,
        className: C.__invalid_descriptionWrapper,
        children: [(0, n.jsxs)(d.default, {
          align: d.default.Align.CENTER,
          children: [(0, n.jsx)(i.Heading, {
            className: C.rowTitle,
            variant: "heading-md/semibold",
            children: null != s ? s : o.default.getLabelFromPath(a)
          }), r ? (0, n.jsx)("span", {
            className: C.defaultIndicator,
            children: _.default.Messages.DEFAULT
          }) : null]
        }), null != u && null != e && null != t ? (0, n.jsx)(c.default, {
          className: C.rowBody,
          hoverText: _.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_SPACE.format({
            available: e,
            total: t
          }),
          children: a
        }) : (0, n.jsx)(i.Text, {
          className: C.rowBody,
          variant: "text-xs/normal",
          children: a
        })]
      }), (0, n.jsx)(i.Button, {
        size: i.Button.Sizes.SMALL,
        disabled: null != l,
        color: i.Button.Colors.PRIMARY,
        onClick: this.handleStartEditing,
        children: _.default.Messages.EDIT
      })]
    })
  }
  renderEditing() {
    let {
      path: e,
      hasGamesInstalledInPath: t
    } = this.props, {
      label: a,
      isDefault: s
    } = this.state;
    return (0, n.jsx)(i.Card, {
      editable: !0,
      className: C.installationPathEditing,
      children: (0, n.jsxs)(d.default, {
        children: [this.renderDiskUsageCircle(), (0, n.jsxs)(d.default.Child, {
          children: [(0, n.jsx)(i.FormItem, {
            title: _.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_NAME,
            children: (0, n.jsx)(i.TextInput, {
              value: a,
              placeholder: o.default.getLabelFromPath(e),
              onChange: this.handleLabelChange
            })
          }), (0, n.jsx)(i.FormItem, {
            title: _.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION,
            className: m.marginTop20,
            children: (0, n.jsx)(i.TextInput, {
              disabled: !0,
              value: e
            })
          }), (0, n.jsx)(i.Checkbox, {
            type: i.Checkbox.Types.INVERTED,
            value: null != s ? s : this.props.isDefault,
            disabled: this.props.isDefault,
            className: C.defaultLocationCheckbox,
            onChange: this.handleToggleDefault,
            children: _.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_MAKE_DEFAULT
          }), (0, n.jsx)(i.FormDivider, {
            className: C.separator
          }), (0, n.jsxs)(d.default, {
            children: [(0, n.jsx)(i.Button, {
              disabled: t || this.props.isDefault,
              size: i.Button.Sizes.SMALL,
              color: i.Button.Colors.RED,
              look: i.Button.Looks.OUTLINED,
              onClick: this.handleRemoveLocation,
              children: _.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_REMOVE
            }), (0, n.jsxs)(d.default, {
              justify: d.default.Justify.END,
              children: [(0, n.jsx)(i.Button, {
                size: i.Button.Sizes.SMALL,
                color: i.Button.Colors.PRIMARY,
                look: i.Button.Looks.LINK,
                onClick: this.handleStopEditing,
                children: _.default.Messages.CANCEL
              }), (0, n.jsx)(i.Button, {
                disabled: e === this.props.path && a === this.props.label && s === this.props.isDefault,
                size: i.Button.Sizes.SMALL,
                color: i.Button.Colors.GREEN,
                onClick: this.handleSaveChanges,
                children: _.default.Messages.SAVE
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
    super(...e), S(this, "state", {
      label: void 0,
      isDefault: null
    }), S(this, "handleStartEditing", () => {
      let {
        path: e,
        label: t,
        isDefault: a,
        onToggleEditing: n
      } = this.props;
      n(e), this.setState({
        label: t,
        isDefault: a
      })
    }), S(this, "handleStopEditing", () => {
      let {
        onToggleEditing: e
      } = this.props;
      e(null), this.setState({
        label: void 0,
        isDefault: null
      })
    }), S(this, "handleRemoveLocation", () => {
      (0, i.openModal)(e => (0, n.jsx)(i.ConfirmModal, {
        ...e,
        header: _.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_REMOVE,
        confirmText: _.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_REMOVE,
        cancelText: _.default.Messages.CANCEL,
        onConfirm: () => {
          this.handleStopEditing(), (0, r.removeInstallLocation)(this.props.path)
        },
        children: (0, n.jsx)(i.Text, {
          variant: "text-md/normal",
          children: _.default.Messages.USER_SETTINGS_GAMES_REMOVE_LOCATION_BODY
        })
      }))
    }), S(this, "handleSaveChanges", () => {
      (0, r.updateInstallLocation)(this.props.path, {
        label: null != this.state.label ? this.state.label : this.props.label,
        isDefault: null != this.state.isDefault ? this.state.isDefault : this.props.isDefault
      }), this.handleStopEditing()
    }), S(this, "handleLabelChange", e => {
      this.setState({
        label: e
      })
    }), S(this, "handleToggleDefault", () => {
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
      defaultInstallationPath: a
    } = this.props, {
      editingPath: s
    } = this.state;
    return (0, n.jsxs)(i.FormSection, {
      className: C.wrapper,
      title: _.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATIONS,
      children: [e.map(e => {
        let {
          path: l,
          label: i
        } = e;
        return (0, n.jsx)(p, {
          path: l,
          label: i,
          metadata: t[l],
          isDefault: a === l,
          editingPath: s,
          hasGamesInstalledInPath: o.default.hasGamesInstalledInPath(l),
          onToggleEditing: this.handleToggleEditing
        }, l)
      }), (0, n.jsx)("div", {
        className: C.buttonRowWrapper,
        children: (0, n.jsx)(i.Button, {
          disabled: !E.isPlatformEmbedded,
          onClick: this.handleAddInstallationLocation,
          size: i.Button.Sizes.SMALL,
          children: _.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_ADD
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), S(this, "state", {
      editingPath: null
    }), S(this, "handleAddInstallationLocation", () => {
      h.default.showOpenDialog(["openDirectory"]).then(e => {
        null != e && 0 !== e.length && null != e[0] && "undefined" !== e[0] && (0, r.addInstallLocation)(e[0])
      })
    }), S(this, "handleToggleEditing", e => {
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