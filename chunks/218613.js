"use strict";
s.r(t), s.d(t, {
  AddMembers: function() {
    return eE
  },
  ChannelTypeBadge: function() {
    return ec
  }
}), s("653041"), s("47120"), s("411104");
var a, n, l = s("735250"),
  r = s("470079"),
  i = s("120356"),
  d = s.n(i),
  o = s("512722"),
  u = s.n(o),
  h = s("392711"),
  c = s.n(h),
  E = s("990547"),
  C = s("831209"),
  N = s("442837"),
  p = s("481060"),
  T = s("333848"),
  _ = s("749210"),
  A = s("332063"),
  m = s("620123"),
  f = s("911969"),
  g = s("367907"),
  I = s("812206"),
  M = s("933557"),
  O = s("605436"),
  S = s("185413"),
  L = s("688465"),
  R = s("456269"),
  x = s("312146"),
  y = s("703656"),
  D = s("146085"),
  v = s("60222"),
  P = s("388131"),
  b = s("131704"),
  G = s("592125"),
  j = s("271383"),
  H = s("430824"),
  U = s("496675"),
  B = s("699516"),
  F = s("594174"),
  w = s("474333"),
  k = s("153124"),
  Y = s("93879"),
  V = s("535321"),
  K = s("481479"),
  z = s("160696"),
  W = s("385950"),
  X = s("630641"),
  q = s("908434"),
  J = s("74846"),
  Q = s("316949"),
  Z = s("632184"),
  $ = s("414896"),
  ee = s("170039"),
  et = s("548420"),
  es = s("934415"),
  ea = s("823379"),
  en = s("63063"),
  el = s("981631"),
  er = s("71080"),
  ei = s("710352"),
  ed = s("231338"),
  eo = s("689938"),
  eu = s("587704");

function eh(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function ec(e) {
  let {
    isNew: t,
    isBeta: s
  } = e, a = null;
  return !0 === t ? a = (0, l.jsx)(p.TextBadge, {
    text: eo.default.Messages.CHANNEL_TYPE_NEW,
    className: eu.newBadge,
    color: C.default.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER
  }) : !0 === s && (a = (0, l.jsx)(L.default, {
    className: eu.newBadge
  })), a
}

function eE(e) {
  let {
    onChange: t,
    guildId: s,
    channelType: a,
    description: n
  } = e, [i, d] = r.useState({}), o = (0, N.useStateFromStores)([H.default], () => H.default.getGuild(s)), u = a === el.ChannelTypes.GUILD_STAGE_VOICE;
  return (r.useEffect(() => {
    t(i)
  }, [i, t]), null == o) ? null : (0, l.jsx)(p.ModalContent, {
    className: eu.addMembersContainer,
    children: (0, l.jsx)(S.AddMembersBody, {
      guild: o,
      channel: null,
      permission: u ? D.MODERATE_STAGE_CHANNEL_PERMISSIONS : (0, b.getAccessPermissions)(a),
      pendingAdditions: i,
      setPendingAdditions: d,
      isStageChannel: u,
      description: n
    })
  })
}(n = a || (a = {})).CHANNEL_INFO = "CHANNEL_INFO", n.ADD_MEMBERS = "ADD_MEMBERS";
class eC extends r.PureComponent {
  componentDidMount() {
    let {
      _input: e
    } = this;
    null != e && e.select();
    let {
      guildId: t,
      applications: s,
      canCreateStoreChannel: a
    } = this.props;
    a && null == s && _.default.fetchApplications(t), g.default.trackWithMetadata(el.AnalyticEvents.OPEN_MODAL, {
      type: "Create Channel"
    }), R.GuildForumExperiment.trackExposure({
      guildId: t,
      location: "45d324_1"
    })
  }
  componentDidUpdate(e, t) {
    !t.isPrivate && this.state.isPrivate && this.state.channelType === el.ChannelTypes.GUILD_ANNOUNCEMENT && this.setState({
      channelType: el.ChannelTypes.GUILD_TEXT
    }), !t.isPrivate && this.state.isPrivate && g.default.trackWithMetadata(el.AnalyticEvents.OPEN_MODAL, {
      type: "Create Private Channel"
    })
  }
  getGuildId() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
    return e.guildId
  }
  canSubmit() {
    let {
      canViewChannels: e,
      canConnect: t
    } = this.props, {
      isPrivate: s,
      channelType: a,
      skuId: n,
      name: l
    } = this.state;
    return "" !== l && "" !== l.trim() && (!s || !!(0, O.canCreatePrivateChannel)(a, e, t)) && (a !== el.ChannelTypes.GUILD_STORE || null != n) && !0
  }
  getIconComponent() {
    let {
      isPrivate: e,
      channelType: t
    } = this.state;
    switch (t) {
      case el.ChannelTypes.GUILD_TEXT:
        return e ? V.default : Y.default;
      case el.ChannelTypes.GUILD_FORUM:
        return K.default;
      case el.ChannelTypes.GUILD_MEDIA:
        return q.default;
      case el.ChannelTypes.GUILD_VOICE:
        return e ? $.default : Z.default;
      case el.ChannelTypes.GUILD_STORE:
        return et.default;
      case el.ChannelTypes.GUILD_ANNOUNCEMENT:
        return Q.default;
      case el.ChannelTypes.GUILD_STAGE_VOICE:
        return ee.default;
      default:
        return (0, b.isGuildTextChannelType)(t) ? Y.default : ed.NOOP_NULL
    }
  }
  renderHeader() {
    var e, t, s;
    let a;
    let {
      cloneChannel: n,
      categoryId: r,
      onClose: i
    } = this.props, {
      channelType: d
    } = this.state;
    let o = (e = n, t = d, null != e ? eo.default.Messages.CLONE_CHANNEL : t === el.ChannelTypes.GUILD_CATEGORY ? eo.default.Messages.CREATE_CATEGORY : eo.default.Messages.CREATE_CHANNEL);
    if (null != r) {
      ;
      let e = G.default.getChannel(r);
      a = (0, l.jsx)(p.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        className: eu.subtitle,
        children: eo.default.Messages.IN_CATEGORY.format({
          categoryName: null !== (s = null == e ? void 0 : e.name) && void 0 !== s ? s : ""
        })
      })
    }
    return (0, l.jsxs)(p.ModalHeader, {
      separator: !1,
      children: [(0, l.jsxs)("div", {
        className: eu.header,
        children: [(0, l.jsx)(p.Heading, {
          id: this.headerId,
          variant: "heading-lg/semibold",
          className: eu.title,
          children: o
        }), a]
      }), (0, l.jsx)(p.ModalCloseButton, {
        onClick: i,
        className: eu.closeButton
      })]
    })
  }
  renderName() {
    let e;
    let {
      cloneChannel: t,
      guildId: a
    } = this.props, {
      errors: n,
      channelType: r
    } = this.state;
    (null == n ? void 0 : n.name) != null && (e = (0, l.jsx)(p.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: eu.error,
      children: n.name
    }));
    let i = r === el.ChannelTypes.GUILD_CATEGORY,
      d = i ? eo.default.Messages.CATEGORY_NAME : eo.default.Messages.FORM_LABEL_CHANNEL_NAME,
      o = null != t ? (0, l.jsx)(p.FormText, {
        className: eu.channelNameNote,
        type: p.FormText.Types.DESCRIPTION,
        children: eo.default.Messages.CLONE_CHANNEL_HELP.format({
          name: (0, M.computeChannelName)(t, F.default, B.default, !0)
        })
      }) : r === el.ChannelTypes.GUILD_FORUM ? (0, l.jsx)(p.FormText, {
        className: eu.channelNameNote,
        type: p.FormText.Types.DESCRIPTION,
        children: eo.default.Messages.FORUM_CHANNEL_NAME_NOTE.format({
          forumUpsellHook: (e, t) => (0, l.jsx)(p.Anchor, {
            onClick: () => (0, p.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([s.e("99387"), s.e("18417"), s.e("89552")]).then(s.bind(s, "740696"));
              return t => (0, l.jsx)(e, {
                ...t,
                guildId: a
              })
            }),
            children: e
          }, t)
        })
      }) : null,
      u = this.getIconComponent();
    return (0, l.jsx)(k.UID, {
      children: t => (0, l.jsxs)(p.FormItem, {
        title: d,
        tag: "label",
        htmlFor: t,
        titleClassName: eu.sectionTitle,
        className: eu.name,
        children: [(0, l.jsx)(p.TextInput, {
          value: this.state.name,
          onChange: this.handleNameChange,
          id: t,
          inputRef: this.setInputRef,
          maxLength: 100,
          placeholder: function(e) {
            switch (e) {
              case el.ChannelTypes.GUILD_CATEGORY:
                return eo.default.Messages.CATEGORY_NAME_PLACEHOLDER;
              case el.ChannelTypes.GUILD_FORUM:
                return eo.default.Messages.FORUM_CHANNEL_NAME_PLACEHOLDER;
              default:
                return eo.default.Messages.CHANNEL_NAME_PLACEHOLDER
            }
          }(r),
          className: eu.inputWrapper,
          inputClassName: i ? void 0 : eu.inputInner,
          prefixElement: i ? null : (0, l.jsx)(u, {
            className: eu.inputPrefix,
            width: 16,
            height: 16
          }),
          autoFocus: !0
        }), e, o]
      })
    })
  }
  renderType() {
    let {
      cloneChannel: e,
      applications: t,
      canCreateStoreChannel: s,
      canCreateAnnouncementChannel: a,
      canCreateStageChannel: n,
      canCreateForumChannel: r,
      canCreateMediaChannel: i
    } = this.props, {
      channelType: d,
      isPrivate: o
    } = this.state;
    if (null != e || d === el.ChannelTypes.GUILD_CATEGORY) return;
    let u = null != t && t.length > 0;
    return (0, l.jsx)(p.FormItem, {
      className: eu.type,
      title: eo.default.Messages.CHANNEL_TYPE,
      children: (0, l.jsx)(p.RadioGroup, {
        options: function(e) {
          let {
            isPrivate: t,
            showStoreChannelOption: s,
            showAnnouncementChannelOption: a,
            canCreateStageChannel: n,
            canCreateForumChannel: r,
            canCreateMediaChannel: i
          } = e, d = [{
            icon: t ? V.default : Y.default,
            label: eo.default.Messages.TEXT_CHANNEL_TYPE,
            value: el.ChannelTypes.GUILD_TEXT,
            description: eo.default.Messages.CREATE_TEXT_CHANNEL_DESCRIPTION
          }];
          return d.push({
            icon: t ? $.default : Z.default,
            label: eo.default.Messages.VOICE_CHANNEL_TYPE,
            value: el.ChannelTypes.GUILD_VOICE,
            description: eo.default.Messages.CREATE_VOICE_CHANNEL_DESCRIPTION
          }), r && d.push({
            icon: t ? z.default : K.default,
            label: eo.default.Messages.FORUM_CHANNEL_TYPE,
            value: el.ChannelTypes.GUILD_FORUM,
            description: (0, l.jsxs)(p.Text, {
              variant: "text-sm/normal",
              color: "header-secondary",
              className: eu.radioLabelDescription,
              children: [eo.default.Messages.FORUM_CHANNEL_DESCRIPTION, (0, l.jsx)("br", {}), eo.default.Messages.LEARN_MORE_CLICK.format({
                onClick: () => {
                  open(ei.COMMUNITY_PORTAL_FORUM_PAGE)
                }
              })]
            })
          }), i && d.push({
            icon: t ? J.default : q.default,
            label: eo.default.Messages.MEDIA_CHANNEL_TYPE,
            value: el.ChannelTypes.GUILD_MEDIA,
            description: (0, l.jsxs)(p.Text, {
              variant: "text-sm/normal",
              color: "header-secondary",
              className: eu.radioLabelDescription,
              children: [eo.default.Messages.CREATE_MEDIA_CHANNEL_DESCRIPTION, (0, l.jsx)("br", {}), eo.default.Messages.LEARN_MORE_CLICK.format({
                onClick: () => {
                  open(en.default.getCreatorSupportArticleURL(el.HelpdeskArticles.MEDIA_CHANNEL))
                }
              })]
            }),
            isBeta: !0
          }), a && d.push({
            icon: Q.default,
            iconSize: 24,
            label: eo.default.Messages.NEWS_CHANNEL_TYPE,
            value: el.ChannelTypes.GUILD_ANNOUNCEMENT,
            description: eo.default.Messages.CREATE_NEWS_CHANNEL_DESCRIPTION
          }), s && d.push({
            icon: et.default,
            iconSize: 24,
            label: eo.default.Messages.STORE_CHANNEL_TYPE,
            value: el.ChannelTypes.GUILD_STORE,
            description: eo.default.Messages.CREATE_STORE_CHANNEL_DESCRIPTION
          }), n && d.push({
            icon: ee.default,
            iconSize: 24,
            label: eo.default.Messages.STAGE_VOICE_CHANNEL_TYPE,
            value: el.ChannelTypes.GUILD_STAGE_VOICE,
            description: eo.default.Messages.CREATE_STAGE_CHANNEL_DESCRIPTION
          }), d.map(e => {
            let {
              icon: t,
              iconSize: s,
              label: a,
              value: n,
              description: r,
              isNew: i,
              isBeta: d
            } = e;
            return {
              name: (0, l.jsxs)("div", {
                className: eu.radioItemName,
                children: [(0, l.jsx)(t, {
                  ...null != s ? {
                    width: s,
                    height: s
                  } : null,
                  className: eu.icon,
                  background: eu.background,
                  foreground: eu.foreground
                }), (0, l.jsxs)("div", {
                  children: [(0, l.jsxs)(p.Text, {
                    variant: "text-md/medium",
                    className: eu.radioLabelName,
                    children: [a, (0, l.jsx)(ec, {
                      isNew: i,
                      isBeta: d
                    })]
                  }), "string" == typeof r ? (0, l.jsx)(p.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    className: eu.radioLabelDescription,
                    children: r
                  }) : r]
                })]
              }),
              value: n,
              radioBarClassName: eu.radioBar,
              radioItemIconClassName: eu.radioBarIcon
            }
          })
        }({
          isPrivate: o,
          showStoreChannelOption: s && u,
          showAnnouncementChannelOption: a,
          canCreateStageChannel: n,
          canCreateForumChannel: r,
          canCreateMediaChannel: i
        }),
        value: d,
        size: p.RadioGroup.Sizes.NOT_SET,
        onChange: this.handleTypeChange,
        itemInfoClassName: eu.radioBarLabel
      })
    })
  }
  renderChannelTypeDescription(e) {
    let t;
    return (e === el.ChannelTypes.GUILD_ANNOUNCEMENT && (t = eo.default.Messages.FORM_HELP_NEWS.format({
      documentationLink: en.default.getArticleURL(el.HelpdeskArticles.ANNOUNCEMENT_CHANNELS)
    })), null == t) ? null : (0, l.jsx)(p.FormText, {
      className: eu.channelTypeDescription,
      type: p.FormText.Types.DESCRIPTION,
      children: t
    })
  }
  renderStoreOptions() {
    let {
      applications: e
    } = this.props, {
      applicationId: t,
      skuId: s,
      branchId: a,
      showBranches: n,
      hasBranches: i
    } = this.state;
    if (null == e || 0 === e.length) throw Error("Unexpected empty applications");
    return (0, l.jsxs)("div", {
      children: [(0, l.jsx)(p.FormTitle, {
        tag: "h5",
        children: eo.default.Messages.CREATE_STORE_CHANNEL_APPLICATION
      }), (0, l.jsx)(p.SingleSelect, {
        options: e.map(e => ({
          label: e.name,
          value: e.id
        })),
        placeholder: eo.default.Messages.CREATE_STORE_CHANNEL_SELECT_APPLICATION,
        value: t,
        onChange: this.handleApplicationChange,
        className: eu.storeChannelOptionSelector
      }), null != t ? (0, l.jsxs)(r.Fragment, {
        children: [(0, l.jsx)(p.FormTitle, {
          tag: "h5",
          children: eo.default.Messages.CREATE_STORE_CHANNEL_SKU
        }), (0, l.jsx)(m.default, {
          applicationId: t,
          onChange: this.handleSKUChange,
          selectedSkuId: s,
          className: eu.storeChannelOptionSelector
        }, t)]
      }) : null, null != t && i ? (0, l.jsxs)(p.FormSwitch, {
        hideBorder: !0,
        onChange: this.handleShowBranchesToggle,
        value: n,
        note: eo.default.Messages.CREATE_STORE_CHANNEL_BETA_NOTE.format({
          devPortalUrl: el.MarketingURLs.API_DOCS_GAME_AND_SERVER_MANAGEMENT
        }),
        children: [(0, l.jsx)(W.default, {
          className: eu.switchIcon
        }), eo.default.Messages.CREATE_STORE_CHANNEL_BETA_TITLE]
      }) : null, null != t ? (0, l.jsxs)(r.Fragment, {
        children: [n ? (0, l.jsx)(p.FormTitle, {
          tag: "h5",
          children: eo.default.Messages.CREATE_STORE_CHANNEL_BRANCH
        }) : null, (0, l.jsx)(A.default, {
          applicationId: t,
          onChange: this.handleBranchChange,
          selectedBranchId: a,
          hide: !n,
          onHasBranchesChange: this.handleHasBranchesChange,
          className: eu.storeChannelOptionSelector
        }, t)]
      }) : null]
    })
  }
  renderPrivacyOptions() {
    let {
      cloneChannel: e
    } = this.props, {
      channelType: t,
      isPrivate: s
    } = this.state;
    if (null != e || t === el.ChannelTypes.GUILD_ANNOUNCEMENT) return null;
    let a = t === el.ChannelTypes.GUILD_CATEGORY ? eo.default.Messages.PRIVATE_CATEGORY : eo.default.Messages.PRIVATE_CHANNEL,
      n = t === el.ChannelTypes.GUILD_CATEGORY ? eo.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CATEGORY_DESCRIPTION : eo.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION_NEW;
    return (0, l.jsx)(p.FormItem, {
      children: (0, l.jsxs)(p.FormSwitch, {
        hideBorder: !0,
        onChange: this.handlePrivacyChange,
        value: s,
        note: n,
        children: [(0, l.jsx)(X.default, {
          className: eu.switchIcon
        }), a]
      })
    }, "privacy-switch")
  }
  renderError(e) {
    let t;
    let {
      channelType: s,
      isPrivate: a,
      errors: n
    } = this.state, {
      canConnect: r,
      canViewChannels: i
    } = this.props;
    if (Object.values(n).length > 0) {
      if (null != n.message && "" !== n.message) t = n.message;
      else if (e || null == n.name) {
        let e = Object.values(n)[0];
        e.length > 0 && (t = e)
      }
    } else a && !(0, O.canCreatePrivateChannel)(s, i, r) && (t = (0, O.getPrivateChannelHintText)(s));
    if (null != t) return (0, l.jsx)("div", {
      className: d()(eu.createError, {
        [eu.addMemberError]: e
      }),
      children: (0, l.jsx)(w.default, {
        messageType: w.HelpMessageTypes.ERROR,
        children: t
      })
    })
  }
  renderFooter() {
    let e;
    let {
      channelType: t,
      onClose: s
    } = this.props, {
      channelType: a
    } = this.state, {
      isPrivate: n
    } = this.state;
    e = t === el.ChannelTypes.GUILD_CATEGORY ? eo.default.Messages.CREATE_CATEGORY : eo.default.Messages.CREATE_CHANNEL;
    let r = n || a === el.ChannelTypes.GUILD_STAGE_VOICE;
    return (0, l.jsxs)(p.ModalFooter, {
      className: eu.modalFooter,
      children: [r ? (0, l.jsx)(p.Button, {
        type: "button",
        onClick: () => {
          this.setState({
            slide: "ADD_MEMBERS",
            errors: {}
          })
        },
        disabled: !this.canSubmit(),
        children: eo.default.Messages.NEXT
      }) : (0, l.jsx)(p.Button, {
        type: "submit",
        disabled: !this.canSubmit(),
        children: e
      }), (0, l.jsx)(p.Button, {
        onClick: s,
        look: p.Button.Looks.LINK,
        color: p.Button.Colors.PRIMARY,
        children: eo.default.Messages.CANCEL
      })]
    })
  }
  renderAddMemberFooter() {
    let e;
    let {
      channelType: t
    } = this.props, {
      pendingPermissionOverwrites: s
    } = this.state;
    return e = 0 === Object.keys(s).length ? eo.default.Messages.SKIP : t === el.ChannelTypes.GUILD_CATEGORY ? eo.default.Messages.CREATE_CATEGORY : eo.default.Messages.CREATE_CHANNEL, (0, l.jsxs)(p.ModalFooter, {
      children: [(0, l.jsx)(p.Button, {
        type: "submit",
        disabled: !this.canSubmit(),
        children: e
      }), (0, l.jsx)(p.Button, {
        onClick: () => {
          this.setState({
            slide: "CHANNEL_INFO"
          })
        },
        look: p.Button.Looks.LINK,
        color: p.Button.Colors.PRIMARY,
        children: eo.default.Messages.BACK
      })]
    })
  }
  handlePermissionOverwriteChange(e) {
    this.setState({
      pendingPermissionOverwrites: e
    })
  }
  renderCreateChannelContent() {
    let {
      channelType: e
    } = this.state;
    return (0, l.jsxs)(l.Fragment, {
      children: [this.renderHeader(), (0, l.jsxs)(p.ModalContent, {
        className: eu.modalContent,
        children: [this.renderType(), this.renderName(), e === el.ChannelTypes.GUILD_STORE ? this.renderStoreOptions() : null, this.renderChannelTypeDescription(e), e === el.ChannelTypes.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions()]
      }), this.renderError(), this.renderFooter()]
    })
  }
  renderAddMemberSlideContent() {
    let {
      name: e,
      channelType: t
    } = this.state, {
      guildId: s,
      onClose: a
    } = this.props, n = this.getIconComponent(), r = t === el.ChannelTypes.GUILD_STAGE_VOICE;
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(p.ModalHeader, {
        separator: !1,
        children: [(0, l.jsxs)("div", {
          className: eu.header,
          children: [(0, l.jsx)(p.Heading, {
            variant: "heading-lg/semibold",
            className: eu.title,
            children: r ? eo.default.Messages.CHANNEL_PERMISSIONS_ADD_MODERATOR_TITLE : eo.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
          }), (0, l.jsxs)(p.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: eu.subtitle,
            children: [(0, l.jsx)(n, {
              height: 16,
              width: 16,
              className: eu.subtitleIcon
            }), e]
          })]
        }), (0, l.jsx)(p.ModalCloseButton, {
          onClick: a,
          className: eu.closeButton
        })]
      }), this.renderError(!0), (0, l.jsx)(eE, {
        onChange: this.handlePermissionOverwriteChange,
        guildId: s,
        channelType: t
      }), this.renderAddMemberFooter()]
    })
  }
  renderSlides() {
    let {
      slide: e
    } = this.state, t = {
      impression_group: E.ImpressionGroups.CHANNEL_ADD_FLOW
    };
    return (0, l.jsx)("div", {
      children: (0, l.jsxs)(p.Slides, {
        activeSlide: e,
        width: 460,
        children: [(0, l.jsx)(p.Slide, {
          id: "CHANNEL_INFO",
          impressionName: E.ImpressionNames.CHANNEL_ADD_INFO,
          impressionProperties: t,
          children: this.renderCreateChannelContent()
        }), (0, l.jsx)(p.Slide, {
          id: "ADD_MEMBERS",
          impressionName: E.ImpressionNames.CHANNEL_ADD_MEMBERS,
          impressionProperties: t,
          children: this.renderAddMemberSlideContent()
        })]
      })
    })
  }
  render() {
    let {
      transitionState: e
    } = this.props;
    return (0, l.jsx)(p.ModalRoot, {
      transitionState: e,
      className: eu.modal,
      "aria-labelledby": this.headerId,
      size: p.ModalSize.DYNAMIC,
      children: (0, l.jsx)("form", {
        onSubmit: this.handleSubmit,
        children: this.renderSlides()
      })
    })
  }
  constructor(e) {
    super(e), eh(this, "headerId", (0, k.uid)()), eh(this, "_input", void 0), eh(this, "setInputRef", e => {
      this._input = e
    }), eh(this, "handleNameChange", e => {
      let {
        channelType: t
      } = this.state;
      b.CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES.has(t) && (e = (0, es.sanitizeGuildTextChannelName)(e)), this.setState({
        name: e
      })
    }), eh(this, "handleTypeChange", e => {
      let {
        value: t
      } = e, {
        name: s
      } = this.state;
      b.CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES.has(t) && (s = (0, es.sanitizeGuildTextChannelName)(s)), t === el.ChannelTypes.GUILD_STAGE_VOICE && this.setState({
        isPrivate: !1
      }), this.setState({
        channelType: t,
        name: s
      })
    }), eh(this, "handlePrivacyChange", e => {
      this.setState({
        isPrivate: e
      })
    }), eh(this, "handleApplicationChange", e => {
      this.setState({
        applicationId: e
      })
    }), eh(this, "handleSKUChange", e => {
      this.setState({
        skuId: e
      })
    }), eh(this, "handleShowBranchesToggle", e => {
      this.setState({
        showBranches: e,
        branchId: null
      })
    }), eh(this, "handleBranchChange", e => {
      this.setState({
        branchId: e
      })
    }), eh(this, "handleHasBranchesChange", e => {
      this.setState({
        hasBranches: e
      })
    }), eh(this, "handleSubmit", async e => {
      let t, s, a;
      e.preventDefault();
      let {
        cloneChannel: n,
        categoryId: l,
        user: r,
        memberRoleIds: i,
        isAdmin: d,
        onClose: o,
        owner: u
      } = this.props, {
        name: h,
        pendingPermissionOverwrites: E,
        channelType: C,
        skuId: N,
        branchId: p,
        isPrivate: _
      } = this.state, A = this.getGuildId();
      if (null != A) {
        if (null != n) t = c().values(n.permissionOverwrites), s = n.bitrate, a = n.userLimit;
        else if (C === el.ChannelTypes.GUILD_ANNOUNCEMENT) t = (0, es.permissionOverwritesForAnnouncement)(A);
        else {
          if (_) {
            t = (0, es.permissionOverwritesForRoles)(A, C, [], !0);
            let e = (0, O.extractPermissionOverwrites)(E, C);
            e.length > 0 && (t = t.concat(e));
            let s = null != u && r.id === u.id;
            !(t.some(e => i.has(e.id)) || d || s) && t.push((0, es.permissionOverwriteForUser)(r.id, C))
          }
          C === el.ChannelTypes.GUILD_STAGE_VOICE && (t = [], Object.values(E).forEach(e => {
            let {
              row: s
            } = e;
            null != s.id && "" !== s.id && (s.rowType === er.RowType.ROLE ? t.push((0, P.createModeratorOverwrite)(s.id, f.PermissionOverwriteType.ROLE)) : s.rowType === er.RowType.MEMBER && t.push((0, P.createModeratorOverwrite)(s.id, f.PermissionOverwriteType.MEMBER)))
          }))
        }
        this.setState({
          errors: {}
        });
        try {
          let e = await T.default.createChannel({
            guildId: A,
            type: C,
            name: h,
            permissionOverwrites: t,
            bitrate: s,
            userLimit: a,
            parentId: C !== el.ChannelTypes.GUILD_CATEGORY ? l : null,
            skuId: N,
            branchId: p
          });
          if (null == e || 201 !== e.status) return;
          let n = e.body;
          b.CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES.has(C) && (0, y.transitionToGuild)(n.guild_id, n.id), o()
        } catch (e) {
          null != e.body && "object" == typeof e.body ? this.setState({
            errors: e.body
          }) : this.setState({
            errors: {
              message: eo.default.Messages.ERROR_OCCURRED_TRY_AGAIN
            }
          })
        }
      }
    });
    let {
      channelType: t,
      cloneChannel: s,
      prefillChannelName: a
    } = e;
    this.state = {
      channelType: null != t ? t : el.ChannelTypes.GUILD_TEXT,
      name: null != s ? (0, M.computeChannelName)(s, F.default, B.default) : null != a ? a : "",
      pendingPermissionOverwrites: {},
      isPrivate: !1,
      prevGuildId: e.guildId,
      applicationId: null,
      skuId: null,
      branchId: null,
      showBranches: !1,
      hasBranches: !1,
      slide: "CHANNEL_INFO",
      errors: {}
    }, this.handlePermissionOverwriteChange = this.handlePermissionOverwriteChange.bind(this)
  }
}
t.default = r.forwardRef(function(e, t) {
  let {
    channelType: s,
    guildId: a,
    cloneChannelId: n
  } = e, r = (0, N.useStateFromStoresObject)([H.default, F.default, U.default, G.default, I.default, j.default], () => {
    var e, t, l;
    let r = H.default.getGuild(a),
      i = F.default.getCurrentUser();
    u()(null != i, "CreateChannel: user cannot be undefined");
    let d = null != r && null != r.ownerId ? F.default.getUser(r.ownerId) : null,
      o = new Set(null !== (t = null === (e = j.default.getMember(a, i.id)) || void 0 === e ? void 0 : e.roles) && void 0 !== t ? t : []),
      h = U.default.can(el.Permissions.ADMINISTRATOR, r),
      c = G.default.getChannel(n);
    return {
      guild: r,
      applications: I.default.getGuildApplicationIds(a).map(e => I.default.getApplication(e)).filter(ea.isNotNullish),
      canCreateStoreChannel: null != r && r.hasFeature(el.GuildFeatures.COMMERCE),
      canCreateAnnouncementChannel: null != r && r.hasFeature(el.GuildFeatures.NEWS),
      user: i,
      owner: d,
      memberRoleIds: o,
      canViewChannels: U.default.can(el.Permissions.VIEW_CHANNEL, r),
      canConnect: U.default.can(el.Permissions.CONNECT, r),
      isAdmin: h,
      cloneChannel: c,
      channelType: null !== (l = null == c ? void 0 : c.type) && void 0 !== l ? l : s,
      canManageRoles: U.default.can(el.Permissions.MANAGE_ROLES, r),
      canManageChannels: U.default.can(el.Permissions.MANAGE_CHANNELS, r)
    }
  }), {
    canManageRoles: i,
    canManageChannels: d
  } = r, o = (0, v.useGuildEligibleForStageChannels)(a) && i && d, h = (0, R.useCanCreateForumChannel)(a), c = (0, x.useGuildEligibleForMediaChannels)(null == r ? void 0 : r.guild);
  return (0, l.jsx)(eC, {
    ...e,
    ...r,
    canCreateStageChannel: o,
    canCreateForumChannel: h,
    canCreateMediaChannel: c,
    ref: t
  })
})