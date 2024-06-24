t(47120), t(411104);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(392711),
  o = t.n(r),
  c = t(268146),
  E = t(442837),
  d = t(692547),
  _ = t(481060),
  T = t(570140),
  S = t(661111),
  u = t(179658),
  I = t(491428),
  N = t(225433),
  A = t(484614),
  C = t(386506),
  O = t(865427),
  m = t(802098),
  h = t(663993),
  g = t(38618),
  R = t(921801),
  M = t(857192),
  x = t(558724),
  p = t(808506),
  D = t(285952),
  L = t(154921),
  P = t(998502),
  Z = t(210887),
  f = t(601948),
  j = t(726985),
  v = t(981631),
  U = t(908442),
  B = t(309406),
  b = t(5973),
  G = t(331651),
  F = t(520076);

function V(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let y = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
  Y = [{
    value: "branch",
    label: "Branch Name"
  }, {
    value: "id",
    label: "Build ID"
  }];

function H(e) {
  return "discord_ios" in e || "discord_android" in e
}
class k extends i.Component {
  render() {
    let {
      project: e,
      overrideType: s,
      overrideId: t,
      disabled: i,
      error: a
    } = this.props;
    return (0, n.jsxs)(D.Z, {
      direction: D.Z.Direction.VERTICAL,
      className: l()(B.buildOverrideGroup, G.marginBottom20, b.card, B.row),
      children: [(0, n.jsx)(N.Z, {
        className: l()(B.removeBuildOverride, {
          [B.removeBuildOverrideDisabled]: i
        }),
        onClick: i ? void 0 : this.handleRemoveBuildOverride
      }), (0, n.jsxs)(D.Z, {
        className: G.marginBottom8,
        children: [(0, n.jsx)(D.Z.Child, {
          basis: "50%",
          children: (0, n.jsx)(_.FormItem, {
            title: "Override Type",
            className: B.item,
            children: (0, n.jsx)(_.SingleSelect, {
              options: Y,
              onChange: this.handleOverrideTypeChanged,
              value: s,
              isDisabled: i
            })
          })
        }), (0, n.jsx)(D.Z.Child, {
          basis: "50%",
          children: (0, n.jsx)(_.FormItem, {
            title: "branch" === s ? "Branch Name" : "Build ID",
            className: B.item,
            children: (0, n.jsx)(_.TextInput, {
              value: t,
              onChange: this.handleOverrideIdChanged,
              disabled: i
            })
          })
        })]
      }), (0, n.jsxs)(D.Z.Child, {
        children: [null != a && "" !== a && (0, n.jsx)(_.FormText, {
          className: B.item,
          style: {
            color: d.Z.unsafe_rawColors.RED_400.css
          },
          type: _.FormText.Types.DESCRIPTION,
          children: a
        }), (0, n.jsxs)(_.FormText, {
          className: B.item,
          type: _.FormText.Types.DESCRIPTION,
          children: ["This controls the build that will be served for the ", (0, n.jsx)("code", {
            children: e
          }), " project."]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), V(this, "handleRemoveBuildOverride", () => {
      this.props.onBuildOverrideRemoved(this.props.project)
    }), V(this, "handleOverrideIdChanged", e => {
      this.props.onBuildOverrideUpdated(this.props.project, {
        id: e
      })
    }), V(this, "handleOverrideTypeChanged", e => {
      this.props.onBuildOverrideUpdated(this.props.project, {
        type: e,
        id: ""
      })
    })
  }
}
class w extends i.Component {
  async refreshBuildOverrides() {
    this.setState({
      loading: !0
    });
    let e = await (0, O.Ce)();
    this.setState({
      loading: !1,
      buildOverrides: e,
      loadedBuildOverrides: o().cloneDeep(e),
      errors: {}
    })
  }
  isDirty() {
    let {
      buildOverrides: e,
      loadedBuildOverrides: s
    } = this.state;
    return !o().isEqual(e, s)
  }
  componentDidMount() {
    this.refreshBuildOverrides()
  }
  getAvailableProjects() {
    let {
      buildOverrides: e
    } = this.state;
    if (null == e) return [];
    let s = Object.keys(e);
    return o().without(y, ...s)
  }
  renderEmpty() {
    return (0, n.jsxs)(_.EmptyState, {
      theme: Z.Z.theme,
      className: l()(G.marginTop40, G.marginBottom20),
      children: [(0, n.jsx)(_.EmptyStateImage, {
        darkSrc: t(770227),
        lightSrc: t(398684),
        width: 294,
        height: 192
      }), (0, n.jsx)(_.EmptyStateText, {
        children: "You have no build overrides configured."
      })]
    })
  }
  renderItems() {
    let {
      buildOverrides: e,
      saving: s,
      errors: t
    } = this.state;
    return null == e ? null : o().map(e, (e, i) => (0, n.jsx)(k, {
      project: i,
      overrideType: e.type,
      overrideId: e.id,
      disabled: s,
      error: t[i],
      onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
      onBuildOverrideRemoved: this.handleBuildOverrideRemoved
    }, i))
  }
  renderRefreshButton() {
    return !this.state.didSave || this.isDirty() ? null : (0, n.jsx)(D.Z, {
      grow: 0,
      direction: D.Z.Direction.HORIZONTAL_REVERSE,
      children: (0, n.jsx)(D.Z.Child, {
        grow: 0,
        children: (0, n.jsx)(_.Button, {
          onClick: () => location.reload(),
          color: _.Button.Colors.PRIMARY,
          children: "Reload App"
        })
      })
    })
  }
  renderLinkButton() {
    let {
      buildOverrides: e
    } = this.state;
    return null == e || 0 === Object.keys(e).length ? null : (0, n.jsx)(D.Z, {
      grow: 0,
      direction: D.Z.Direction.HORIZONTAL_REVERSE,
      children: (0, n.jsx)(D.Z.Child, {
        grow: 0,
        children: (0, n.jsx)(_.Button, {
          onClick: this.handleLinkGeneration,
          color: _.Button.Colors.BRAND,
          children: "Generate Public Link"
        })
      })
    })
  }
  renderSaveButton() {
    if (!this.isDirty()) return null;
    let {
      saving: e,
      buildOverrides: s
    } = this.state;
    return (0, n.jsxs)(D.Z, {
      grow: 0,
      direction: D.Z.Direction.HORIZONTAL_REVERSE,
      children: [(0, n.jsx)(D.Z.Child, {
        grow: 0,
        children: (0, n.jsx)(_.Button, {
          disabled: H(null != s ? s : {}),
          onClick: this.handleSaveChanges,
          submitting: e,
          color: _.Button.Colors.GREEN,
          children: "Save Build Overrides"
        })
      }), (0, n.jsx)(D.Z.Child, {
        grow: 0,
        children: (0, n.jsx)(_.Button, {
          onClick: this.handleDiscardChanges,
          disabled: e,
          color: _.Button.Colors.RED,
          children: "Discard Changes"
        })
      })]
    })
  }
  render() {
    let e;
    let {
      loading: s,
      saving: t,
      buildOverrides: i
    } = this.state;
    e = s ? (0, n.jsx)(_.Spinner, {
      className: G.marginTop20
    }) : null != i && 0 === Object.keys(i).length ? this.renderEmpty() : this.renderItems();
    let a = !t && !s && this.getAvailableProjects().length > 0,
      l = H(null != i ? i : {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL ? (0, n.jsx)(_.Text, {
        color: "text-danger",
        variant: "text-md/normal",
        children: "Mobile build overrides must be generated using the desktop/web stable client for now!"
      }) : null;
    return (0, n.jsx)(R.F, {
      setting: j.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE,
      children: (0, n.jsxs)(_.FormSection, {
        className: G.marginTop60,
        children: [(0, n.jsxs)(D.Z, {
          className: G.marginBottom20,
          children: [(0, n.jsx)(D.Z.Child, {
            children: (0, n.jsx)(_.FormTitle, {
              tag: _.FormTitleTags.H1,
              children: "Build Overrides"
            })
          }), (0, n.jsx)(D.Z.Child, {
            grow: 0,
            children: (0, n.jsx)(_.Button, {
              size: _.ButtonSizes.SMALL,
              onClick: this.handleAddBuildOverride,
              disabled: !a,
              children: "Add Build Override"
            })
          })]
        }), (0, n.jsx)(_.FormDivider, {}), (0, n.jsxs)(D.Z, {
          direction: D.Z.Direction.VERTICAL,
          children: [l, e, (0, n.jsxs)(D.Z, {
            grow: 0,
            direction: D.Z.Direction.HORIZONTAL_REVERSE,
            children: [this.renderRefreshButton(), this.renderSaveButton(), this.renderLinkButton()]
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), V(this, "state", {
      loading: !0,
      buildOverrides: {},
      loadedBuildOverrides: {},
      errors: {},
      saving: !1,
      didSave: !1
    }), V(this, "handleAddBuildOverride", async () => {
      var e;
      let s = await (e = this.getAvailableProjects(), new Promise(s => {
        (0, _.openModal)(t => {
          let i = e => {
            t.onClose(), s(e)
          };
          return (0, n.jsxs)(_.ModalRoot, {
            ...t,
            "aria-label": "Choose A Project to Override",
            children: [(0, n.jsx)(_.ModalHeader, {
              separator: !1,
              children: (0, n.jsx)(_.Heading, {
                variant: "heading-lg/semibold",
                children: "Choose A Project to Override"
              })
            }), (0, n.jsx)(_.ModalContent, {
              children: (0, n.jsx)("div", {
                className: B.buildOverrideList,
                children: e.map(e => (0, n.jsx)(_.Button, {
                  value: e,
                  color: _.Button.Colors.GREEN,
                  onClick: () => i(e),
                  children: e
                }, e))
              })
            }), (0, n.jsx)(_.ModalFooter, {
              children: (0, n.jsx)(_.Button, {
                color: _.Button.Colors.PRIMARY,
                look: _.Button.Looks.LINK,
                onClick: () => i(null),
                children: "Nevermind"
              })
            })]
          })
        })
      }));
      if (null == s) return;
      let t = {
        ...this.state.buildOverrides,
        [s]: {
          type: "branch",
          id: ""
        }
      };
      this.setState({
        buildOverrides: t
      })
    }), V(this, "handleBuildOverrideUpdated", (e, s) => {
      let {
        buildOverrides: t
      } = this.state, n = {
        ...null != t ? t[e] : {},
        ...s
      }, i = {
        ...this.state.buildOverrides,
        [e]: n
      };
      this.setState({
        buildOverrides: i
      })
    }), V(this, "handleBuildOverrideRemoved", e => {
      let s = {
        ...this.state.buildOverrides
      };
      delete s[e], this.setState({
        buildOverrides: s
      })
    }), V(this, "handleDiscardChanges", () => {
      this.setState({
        buildOverrides: o().cloneDeep(this.state.loadedBuildOverrides),
        errors: {},
        didSave: !1
      })
    }), V(this, "handleSaveChanges", async () => {
      let {
        buildOverrides: e
      } = this.state;
      if (null == e) return;
      this.setState({
        saving: !0
      });
      let s = await (0, C.aD)(e);
      if (200 === s.status) {
        let e = s.body;
        this.setState({
          buildOverrides: e,
          loadedBuildOverrides: o().cloneDeep(e),
          errors: {},
          didSave: !0,
          saving: !1
        })
      } else if (400 === s.status) {
        let e = s.body;
        this.setState({
          errors: e,
          saving: !1,
          didSave: !1
        })
      } else this.setState({
        saving: !1,
        didSave: !1
      })
    }), V(this, "handleLinkGeneration", () => {
      let {
        buildOverrides: e
      } = this.state;
      (0, _.openModal)(s => (0, n.jsx)(W, {
        ...s,
        buildOverrides: e
      }))
    })
  }
}
class W extends i.Component {
  isMobile() {
    var e;
    return H(null !== (e = this.props.buildOverrides) && void 0 !== e ? e : {})
  }
  renderSettingsForm() {
    let {
      ttlSeconds: e,
      releaseChannel: s,
      userIdEntry: t,
      userIdEntryError: i,
      allowedVersions: a,
      allowedVersionEntry: l,
      allowedVersionEntryError: r,
      allowLoggedOut: o,
      experiments: c,
      experimentsError: E
    } = this.state, d = U.S6.find(s => s.value === e), T = a.map(e => ({
      label: e,
      value: e
    }));
    return (0, n.jsxs)(D.Z.Child, {
      basis: "70%",
      children: [(0, n.jsx)(_.FormItem, {
        title: "Expire After",
        className: G.marginBottom20,
        children: (0, n.jsx)(_.SingleSelect, {
          value: null != d ? d.value : null,
          options: U.S6,
          onChange: this.handleExpirationChange
        })
      }), this.isMobile() ? null : (0, n.jsx)(_.FormItem, {
        title: "Release Channel",
        className: G.marginBottom20,
        children: (0, n.jsx)(_.SingleSelect, {
          value: s,
          options: U.F$,
          onChange: this.handleReleaseChannelChange
        })
      }), this.isMobile() ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(_.FormItem, {
          title: "Add allowed app version (required)",
          className: G.marginBottom20,
          children: (0, n.jsxs)(D.Z, {
            direction: D.Z.Direction.HORIZONTAL,
            children: [(0, n.jsx)(D.Z.Child, {
              wrap: !0,
              basis: "90%",
              children: (0, n.jsx)(_.TextInput, {
                autoFocus: !0,
                value: l,
                onKeyPress: this.handleAllowedVersionEnter,
                error: r,
                onChange: this.handleAllowedVersionEntry,
                placeholder: "Example: 34"
              })
            }), (0, n.jsx)(_.Button, {
              onClick: this.handleAddAllowedVersion,
              children: "Add"
            })]
          })
        }), (0, n.jsx)(_.FormItem, {
          title: "Remove allowed app version",
          className: G.marginBottom20,
          children: (0, n.jsx)(_.SingleSelect, {
            value: null,
            options: T,
            onChange: this.handleRemoveAllowedVersion,
            isDisabled: 0 === a.length
          })
        })]
      }) : null, this.isMobile() ? null : (0, n.jsx)(n.Fragment, {
        children: (0, n.jsxs)(_.FormItem, {
          title: "Limit to User IDs (optional)",
          className: G.marginBottom20,
          children: [(0, n.jsx)(D.Z, {
            direction: D.Z.Direction.HORIZONTAL,
            children: (0, n.jsx)(D.Z.Child, {
              wrap: !0,
              basis: "90%",
              children: (0, n.jsx)(_.TextArea, {
                value: t,
                error: i,
                onBlur: () => this.setUserEntryError(""),
                onChange: this.handleUserIDEntry
              })
            })
          }), (0, n.jsx)(_.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: G.marginTop8,
            children: "User IDs can be separated by whitespace or commas."
          })]
        })
      }), (0, n.jsxs)(_.FormItem, {
        title: "Client Experiment Override",
        className: G.marginBottom20,
        children: [(0, n.jsx)(D.Z, {
          direction: D.Z.Direction.HORIZONTAL,
          children: (0, n.jsx)(D.Z.Child, {
            wrap: !0,
            basis: "90%",
            children: (0, n.jsx)(_.TextArea, {
              value: c,
              error: E,
              onChange: this.handleExperiments,
              placeholder: '{"2022-01_threads":1}'
            })
          })
        }), (0, n.jsx)(_.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: G.marginTop8,
          children: "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well."
        })]
      }), (0, n.jsx)(_.FormSwitch, {
        onChange: this.handleAllowLoggedOut,
        value: o,
        children: "Allow logged out users"
      })]
    })
  }
  renderPayloadBlock() {
    let e = JSON.stringify(this.generatePayload(), null, 2),
      s = () => e,
      i = (0, n.jsx)(h.GI, {
        createPromise: () => Promise.resolve().then(t.bind(t, 364964)),
        webpackId: 364964,
        renderFallback: s,
        render: t => {
          let i = t.highlight("json", e, !0);
          return null == i ? s() : (0, n.jsx)("code", {
            className: "hljs scroller ".concat(i.language, " ").concat(F.scrollbarGhost, " ").concat(B.codebox),
            dangerouslySetInnerHTML: {
              __html: i.value
            }
          })
        }
      });
    return (0, n.jsx)(D.Z.Child, {
      children: (0, n.jsx)(_.Card, {
        children: (0, n.jsx)("pre", {
          children: i
        })
      })
    })
  }
  renderLinkForm() {
    let {
      statusTextColor: e,
      statusText: s,
      publicLink: t
    } = this.state;
    return (0, n.jsxs)("div", {
      children: [(0, n.jsx)(_.FormItem, {
        title: "Signed Link",
        children: (0, n.jsxs)(D.Z, {
          children: [(0, n.jsx)(D.Z.Child, {
            wrap: !0,
            basis: "75%",
            children: (0, n.jsx)(A.Z, {
              value: t
            })
          }), (0, n.jsx)(_.Button, {
            onClick: this.handleGenerateLink,
            children: "Generate Link"
          })]
        })
      }), (0, n.jsx)(L.Z, {
        color: e,
        className: "".concat(G.marginBottom8, " ").concat(G.marginTop8),
        children: s
      })]
    })
  }
  render() {
    let {
      onClose: e,
      transitionState: s
    } = this.props;
    return (0, n.jsxs)(_.ModalRoot, {
      size: _.ModalSize.LARGE,
      transitionState: s,
      "aria-label": "Generate Public Build Override Link",
      children: [(0, n.jsxs)(_.ModalHeader, {
        justify: D.Z.Justify.BETWEEN,
        separator: !1,
        children: [(0, n.jsx)(_.Heading, {
          variant: "heading-lg/semibold",
          children: "Generate Public Build Override Link"
        }), (0, n.jsx)(_.ModalCloseButton, {
          onClick: e
        })]
      }), (0, n.jsxs)(_.ModalContent, {
        children: [(0, n.jsxs)(D.Z, {
          children: [this.renderSettingsForm(), this.renderPayloadBlock()]
        }), this.renderLinkForm()]
      })]
    })
  }
  constructor(...e) {
    super(...e), V(this, "state", {
      ttlSeconds: 3600,
      releaseChannel: "all",
      userIds: new Set,
      userIdEntry: "",
      userIdEntryError: null,
      allowedVersions: [],
      allowedVersionEntry: "",
      allowedVersionEntryError: null,
      publicLink: " ",
      statusText: null,
      statusTextColor: L.Z.Colors.STATUS_RED,
      allowLoggedOut: !1
    }), V(this, "setUserEntryError", e => {
      this.setState({
        userIdEntryError: e
      })
    }), V(this, "setStatusMessage", (e, s) => {
      this.setState({
        statusText: e,
        statusTextColor: null != s ? s : L.Z.Colors.STATUS_RED
      })
    }), V(this, "handleUserIDEntry", e => {
      if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError("User IDs are numbers!");
      let s = new Set(e.split(/[,\s]+/).filter(Boolean));
      this.setState({
        userIdEntry: e,
        userIds: s
      })
    }), V(this, "setAllowedVersionError", e => {
      this.setState({
        allowedVersionEntryError: e
      })
    }), V(this, "handleAllowedVersionEntry", e => {
      this.setState({
        allowedVersionEntry: e
      })
    }), V(this, "handleAllowedVersionEnter", e => {
      e.charCode === v.yXg.ENTER && this.handleAddAllowedVersion()
    }), V(this, "handleAddAllowedVersion", () => {
      let {
        allowedVersions: e,
        allowedVersionEntry: s
      } = this.state;
      return 0 === (s = s.trim()).length ? this.setAllowedVersionError("Enter a valid version number!") : e.indexOf(s) >= 0 ? this.setAllowedVersionError("You already added that version!") : void this.setState({
        allowedVersions: [...e, s],
        allowedVersionEntry: "",
        allowedVersionEntryError: ""
      })
    }), V(this, "handleRemoveAllowedVersion", e => {
      let {
        allowedVersions: s
      } = this.state;
      s = s.filter(s => s !== e), this.setState({
        allowedVersions: s
      })
    }), V(this, "handleAllowLoggedOut", e => {
      this.setState({
        allowLoggedOut: e
      })
    }), V(this, "handleExpirationChange", e => {
      this.setState({
        ttlSeconds: e
      })
    }), V(this, "handleReleaseChannelChange", e => {
      this.setState({
        releaseChannel: e
      })
    }), V(this, "handleExperiments", e => {
      if (0 === e.trim().length) {
        this.setState({
          experimentsError: void 0
        });
        return
      }
      try {
        let s = JSON.parse(e);
        for (let e in s) {
          if (null == e.match(/^[0-9]{4}\-[0-9]{2}_[a-z0-9_]+$/)) {
            this.setState({
              experimentsError: "".concat(e, " is an invalid experiment name")
            });
            return
          }
          if ("number" != typeof s[e]) {
            this.setState({
              experimentsError: "".concat(e, " has an invalid bucket override")
            });
            return
          }
        }
      } catch (e) {
        this.setState({
          experimentsError: "Unable to parse experiments ".concat(e.message)
        });
        return
      }
      this.setState({
        experiments: e,
        experimentsError: void 0
      })
    }), V(this, "generatePayload", () => ({
      overrides: this.props.buildOverrides,
      meta: {
        release_channel: "all" === this.state.releaseChannel ? null : this.state.releaseChannel,
        ttl_seconds: this.state.ttlSeconds,
        user_ids: Array.from(this.state.userIds),
        allowed_versions: this.isMobile() ? this.state.allowedVersions : void 0,
        allow_logged_out: this.state.allowLoggedOut,
        experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments)
      }
    })), V(this, "handleGenerateLink", async () => {
      if (this.isMobile() && 0 === this.state.allowedVersions.length) {
        this.setAllowedVersionError("You must add at least one allowed version for iOS");
        return
      }
      this.setStatusMessage(null);
      let e = this.generatePayload(),
        s = await (0, C.M3)(e);
      !1 !== s.error ? this.setStatusMessage(JSON.stringify(s.error), L.Z.Colors.STATUS_RED) : (this.setState({
        publicLink: s.url.toString()
      }), 0 === e.meta.user_ids.length && this.setStatusMessage("Warning! No users added to the whitelist! This link could be used by anyone to override their build.", L.Z.Colors.STATUS_YELLOW))
    })
  }
}

function K() {
  throw Error("Send help")
}

function z() {
  let [e, s] = i.useState(!1), [t, a] = i.useState("");
  return (i.useEffect(() => {
    (async () => {
      a(await (0, p.Y)())
    })()
  }, []), e) ? {} : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: [B.buttonsContainer, G.marginBottom20].join(" "),
      children: [(0, n.jsx)(R.F, {
        setting: j.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY,
        children: (0, n.jsx)(_.Button, {
          onClick: () => window.open(t, "_blank"),
          disabled: "" === t,
          children: "Open Overlay"
        })
      }), (0, n.jsx)(R.F, {
        setting: j.s6.DEVELOPER_OPTIONS_RESET_SOCKET,
        children: (0, n.jsx)(_.Button, {
          onClick: () => {
            g.Z.getSocket().close(), g.Z.getSocket().connect()
          },
          children: "Reset Socket"
        })
      }), (0, n.jsx)(R.F, {
        setting: j.s6.DEVELOPER_OPTIONS_CLEAR_CACHES,
        children: (0, n.jsx)(_.Button, {
          onClick: () => {
            T.Z.dispatch({
              type: "CLEAR_CACHES",
              reason: "Requested by user",
              preventWritingCachesAgainThisSession: !0,
              resetSocket: !0
            })
          },
          children: "Clear Caches"
        })
      })]
    }), (0, n.jsx)(R.F, {
      setting: j.s6.DEVELOPER_OPTIONS_CRASHES,
      children: (0, n.jsx)(_.FormSection, {
        title: "Crashes",
        tag: _.FormTitleTags.H1,
        children: (0, n.jsxs)("div", {
          className: B.buttonsContainer,
          children: [(0, n.jsx)(_.SingleSelect, {
            value: void 0,
            options: [{
              value: void 0,
              label: "Native libdiscord crash"
            }, {
              value: 0,
              label: "Abort()"
            }, {
              value: 1,
              label: "SIGSEGV()"
            }, {
              value: 2,
              label: "EXCEPTION_ACCESS_VIOLATION"
            }, {
              value: 3,
              label: "RaiseFailFastException"
            }, {
              value: 4,
              label: "Out of Memory"
            }],
            onChange: e => null != e && P.ZP.crash(e)
          }), (0, n.jsx)(_.SingleSelect, {
            value: void 0,
            options: [{
              value: void 0,
              label: "Native JS crash"
            }, {
              value: c.Xo.RendererProcessDelayed,
              label: "Delayed exception in renderer process"
            }, {
              value: c.Xo.RendererProcess,
              label: "Exception in renderer process"
            }, {
              value: c.Xo.MainProcess,
              label: "Exception in main process"
            }],
            onChange: e => {
              var s;
              return null != e ? (s = e, void P.ZP.triggerJSException(s)) : void 0
            }
          }), (0, n.jsx)(_.Button, {
            onClick: () => s(!0),
            children: "React Crash"
          }), (0, n.jsx)(_.Button, {
            onClick: K,
            children: "onClick Throw"
          })]
        })
      })
    })]
  })
}
let Q = E.ZP.connectStores([M.default], () => ({
  isTracingRequests: M.default.isTracingRequests,
  isForcedCanary: M.default.isForcedCanary,
  isLoggingGatewayEvents: M.default.isLoggingGatewayEvents,
  isLoggingOverlayEvents: M.default.isLoggingOverlayEvents,
  isLoggingAnalyticsEvents: M.default.isLoggingAnalyticsEvents,
  isAxeEnabled: M.default.isAxeEnabled,
  isSourceMapsEnabled: M.default.sourceMapsEnabled,
  isAnalyticsDebuggerEnabled: M.default.isAnalyticsDebuggerEnabled,
  isIdleStatusIndicatorEnabled: M.default.isIdleStatusIndicatorEnabled,
  appDirectoryIncludesInactiveCollections: M.default.appDirectoryIncludesInactiveCollections
}))(e => {
  let {
    isTracingRequests: s,
    isForcedCanary: t,
    isLoggingGatewayEvents: i,
    isLoggingOverlayEvents: a,
    isLoggingAnalyticsEvents: l,
    isAxeEnabled: r,
    isSourceMapsEnabled: o,
    isAnalyticsDebuggerEnabled: c,
    isIdleStatusIndicatorEnabled: E,
    appDirectoryIncludesInactiveCollections: d
  } = e;
  return (0, n.jsx)(R.F, {
    setting: j.s6.DEVELOPER_OPTIONS_FLAGS,
    children: (0, n.jsxs)(_.FormSection, {
      title: "Developer Flags",
      tag: _.FormTitleTags.H1,
      children: [(0, n.jsx)(R.F, {
        setting: j.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS,
        children: (0, n.jsx)(_.FormSwitch, {
          value: s,
          note: "Force trace all client requests with APM",
          onChange: e => (0, u.y)({
            trace: e
          }),
          children: "Enable Tracing Requests"
        })
      }), (0, n.jsx)(R.F, {
        setting: j.s6.DEVELOPER_OPTIONS_FORCED_CANARY,
        children: (0, n.jsx)(_.FormSwitch, {
          value: t,
          note: "Force all API requests to canary instances",
          onChange: e => (0, u.y)({
            canary: e
          }),
          children: "Enable Forced Canary"
        })
      }), (0, n.jsx)(R.F, {
        setting: j.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE,
        children: (0, n.jsx)(_.FormSwitch, {
          value: i,
          note: "Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see! This includes all message content.",
          onChange: e => (0, u.y)({
            logGatewayEvents: e
          }),
          children: "Enable Logging of Gateway Events to Console"
        })
      }), (0, n.jsx)(R.F, {
        setting: j.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS,
        children: (0, n.jsx)(_.FormSwitch, {
          value: a,
          note: "Logs all overlay related RPC events. Super noisy if an overlay is connected",
          onChange: e => (0, u.y)({
            logOverlayEvents: e
          }),
          children: "Enable Logging of Overlay RPC Events & Commands"
        })
      }), (0, n.jsx)(R.F, {
        setting: j.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING,
        children: (0, n.jsx)(_.FormSwitch, {
          value: l,
          note: "Logs all analytics events to the developer console",
          onChange: e => (0, u.y)({
            logAnalyticsEvents: e
          }),
          children: "Enable Logging of Analytics Events"
        })
      }), (0, n.jsx)(R.F, {
        setting: j.s6.DEVELOPER_OPTIONS_SOURCE_MAPS,
        children: (0, n.jsx)(_.FormSwitch, {
          value: o,
          note: "Only enable on devices you trust.",
          onChange: e => (0, u.y)({
            sourceMapsEnabled: e
          }),
          children: "Enable source maps to be loaded on this client"
        })
      }), (0, n.jsx)(R.F, {
        setting: j.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW,
        children: (0, n.jsx)(_.FormSwitch, {
          value: c,
          note: "Displays a floating debugger with viewed impressions",
          onChange: e => (0, u.y)({
            analyticsDebuggerEnabled: e
          }),
          children: "Enable standard analytics debugger view"
        })
      }), (0, n.jsx)(R.F, {
        setting: j.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR,
        children: (0, n.jsx)(_.FormSwitch, {
          value: E,
          note: "Displays a floating idle status indicator",
          onChange: e => (0, u.y)({
            idleStatusIndicatorEnabled: e
          }),
          children: "Enable idle status indicator"
        })
      }), (0, n.jsx)(R.F, {
        setting: j.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING,
        children: (0, n.jsx)(_.FormSwitch, {
          value: r,
          note: "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development",
          onChange: e => (0, u.y)({
            axeEnabled: e
          }),
          children: "Enable Accessibility Auditing"
        })
      }), (0, n.jsx)(R.F, {
        setting: j.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS,
        children: (0, n.jsx)(_.FormSwitch, {
          value: d,
          note: "In App Directory, include inactive collections on the homepage. Use this to preview changes to collections before publishing them.",
          onChange: e => (0, u.y)({
            appDirectoryIncludesInactiveCollections: e
          }),
          children: "Preview Unpublished Collections on App Directory Homepage"
        })
      }), (0, n.jsxs)(R.F, {
        setting: j.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        children: [(0, n.jsx)("div", {
          className: [B.buttonsContainer, G.marginBottom20].join(" "),
          children: (0, n.jsx)(f.S, {})
        }), (0, n.jsx)(_.FormDivider, {
          className: B.divider
        })]
      })]
    })
  })
});

function X() {
  let e = (0, E.e7)([x.Z], () => x.Z.getSurveyOverride()),
    [s, t] = i.useState(null != e ? e : "");
  return (0, n.jsx)(R.F, {
    setting: j.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE,
    children: (0, n.jsxs)(_.FormSection, {
      tag: _.FormTitleTags.H1,
      title: "Survey Override",
      className: G.marginTop60,
      children: [(0, n.jsx)(_.FormTitle, {
        children: "Copy the ID of the Survey you want to test:"
      }), (0, n.jsxs)("form", {
        className: B.surveyOverride,
        onSubmit: e => {
          e.preventDefault(), s.length > 0 ? I.Xq(s) : I.Xq(null)
        },
        children: [(0, n.jsx)(_.TextInput, {
          className: B.surveyOverrideInput,
          value: s,
          onChange: t
        }), (0, n.jsx)(_.Button, {
          type: "submit",
          children: "Save Override"
        })]
      })]
    })
  })
}

function q() {
  var e;
  let s = (0, E.e7)([m.Z], () => m.Z.overrideId()),
    [t, a] = i.useState(null !== (e = m.Z.overrideId()) && void 0 !== e ? e : "");
  return (0, n.jsx)(R.F, {
    setting: j.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE,
    children: (0, n.jsxs)(_.FormSection, {
      tag: _.FormTitleTags.H1,
      title: "Changelog Override",
      className: G.marginTop60,
      children: [(0, n.jsx)(_.FormTitle, {
        children: "Enter the ID of the changelog you want to test"
      }), (0, n.jsxs)("div", {
        className: B.surveyOverride,
        children: [(0, n.jsx)(_.TextInput, {
          className: B.surveyOverrideInput,
          value: t,
          onChange: a
        }), (0, n.jsx)(_.Button, {
          onClick: () => {
            "" === t ? S.Z.setChangelogOverride(null) : S.Z.setChangelogOverride(t)
          },
          disabled: s === t,
          children: "Update Changelog"
        })]
      })]
    })
  })
}
class J extends i.PureComponent {
  render() {
    return (0, n.jsxs)(i.Fragment, {
      children: [(0, n.jsx)(Q, {}), (0, n.jsx)(z, {}), (0, n.jsx)(X, {}), (0, n.jsx)(q, {}), (0, n.jsx)(w, {})]
    })
  }
}
s.Z = J