"use strict";
n.r(l), n.d(l, {
  default: function() {
    return y
  }
}), n("653041"), n("47120"), n("536091");
var a = n("735250"),
  t = n("470079"),
  s = n("658722"),
  i = n.n(s),
  u = n("399606"),
  o = n("481060"),
  d = n("596454"),
  r = n("471445"),
  c = n("907040"),
  N = n("734893"),
  I = n("813197"),
  m = n("592125"),
  _ = n("984933"),
  h = n("430824"),
  T = n("153124"),
  E = n("642113"),
  v = n("54264"),
  A = n("185403"),
  f = n("740727"),
  x = n("617506"),
  p = n("768581"),
  C = n("823379"),
  O = n("700785"),
  g = n("969632"),
  S = n("580357"),
  j = n("981631"),
  M = n("185923"),
  G = n("689938"),
  L = n("651579");

function R(e, l) {
  switch (e) {
    case N.NewMemberActionTypes.VIEW:
      return O.canEveryoneRole(j.Permissions.VIEW_CHANNEL, l);
    case N.NewMemberActionTypes.CHAT:
      if (j.ChannelTypesSets.GUILD_THREADS_ONLY.has(l.type)) return O.canEveryoneRole(j.Permissions.SEND_MESSAGES_IN_THREADS, l) || O.canEveryoneRole(j.Permissions.SEND_MESSAGES, l);
      return O.canEveryoneRole(j.Permissions.SEND_MESSAGES, l);
    default:
      return !1
  }
}

function D() {
  return {
    channelId: [],
    title: [],
    description: [],
    actionType: [],
    emoji: [],
    icon: []
  }
}

function b(e) {
  let l = D(),
    n = m.default.getChannel(e.channelId);
  return (null == e.title || e.title.length < N.NEW_MEMBER_ACTION_TITLE_MIN_LENGTH) && l.title.push(G.default.Messages.NEW_MEMBER_ACTION_VALIDATION_ERROR_TITLE_REQUIRED.format({
    minLength: N.NEW_MEMBER_ACTION_TITLE_MIN_LENGTH
  })), null != e.actionType && null != n && !R(e.actionType, n) && l.actionType.push(function(e) {
    switch (e) {
      case N.NewMemberActionTypes.VIEW:
        return G.default.Messages.NEW_MEMBER_ACTION_VALIDATION_ERROR_TYPE_VIEW_INVALID_FOR_CHANNEL;
      case N.NewMemberActionTypes.CHAT:
        return G.default.Messages.NEW_MEMBER_ACTION_VALIDATION_ERROR_TYPE_CHAT_INVALID_FOR_CHANNEL;
      default:
        (0, C.assertNever)(e)
    }
  }(e.actionType)), l
}

function y(e) {
  var l, n, s, C, O, y, B, U, k;
  let {
    transitionState: w,
    onClose: H,
    guildId: P,
    action: V,
    onSave: F,
    onDelete: W
  } = e, z = (0, T.useUID)(), [Y] = t.useState(function(e) {
    if (null == e) return null;
    let l = m.default.getChannel(e.channelId);
    return null == l ? null : {
      value: e.channelId,
      label: l.name
    }
  }(V)), [K, X] = t.useState(Y), Q = (0, u.useStateFromStores)([m.default], () => m.default.getChannel(null == K ? void 0 : K.value)), q = (null == Q ? void 0 : Q.isMediaChannel()) === !0, J = t.useMemo(() => [{
    value: N.NewMemberActionTypes.VIEW,
    name: G.default.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_VIEW
  }, {
    value: N.NewMemberActionTypes.CHAT,
    name: (null == Q ? void 0 : Q.type) === j.ChannelTypes.GUILD_FORUM ? q ? G.default.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TALK_IN_MEDIA_CHANNEL : G.default.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TALK_IN_FORUM : G.default.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TALK
  }], [null == Q ? void 0 : Q.type, q]), [Z, $] = t.useState(D()), [ee, el] = t.useState(null !== (l = null == V ? void 0 : V.title) && void 0 !== l ? l : ""), en = (0, u.useStateFromStores)([g.default], () => {
    let e = g.default.getSettings();
    if (null == e.newMemberActions) return new Set;
    let l = new Set(e.newMemberActions.map(e => e.channelId));
    return null != Y && l.delete(Y.value), l
  });
  let [ea, et] = t.useState((O = J, null == (y = V) ? null : null !== (B = O.find(e => e.value === y.actionType)) && void 0 !== B ? B : null)), [es, ei] = t.useState(null !== (n = null == V ? void 0 : V.emoji) && void 0 !== n ? n : null), eu = (0, u.useStateFromStores)([g.default], () => {
    var e;
    return null === (e = g.default.getNewMemberAction(null == V ? void 0 : V.channelId)) || void 0 === e ? void 0 : e.icon
  }), [eo, ed] = t.useState(null), er = null == ee || 0 === ee.length || null == ea || null == K, ec = Object.values(Z).flat().length > 0, eN = t.useCallback(() => {
    if (null == K || null == ea || ee.length <= 0) return;
    let e = {
        channelId: K.value,
        title: ee,
        description: "",
        actionType: ea.value,
        emoji: null != es ? es : null,
        icon: null != eu ? eu : null
      },
      l = null != eo || null != es;
    F(e, eo, l), H()
  }, [F, H, ee, ea, K, es, eu, eo]), eI = t.useCallback(() => {
    null == W || W(), H()
  }, [W, H]), em = t.useCallback(e => {
    el(e), $(b({
      channelId: null == K ? void 0 : K.value,
      title: e,
      description: "",
      actionType: null == ea ? void 0 : ea.value,
      emoji: null != es ? es : void 0
    }))
  }, [el, $, K, ea, es]), e_ = t.useCallback(e => {
    X(e), $(b({
      channelId: null == e ? void 0 : e.value,
      title: ee,
      description: "",
      actionType: null == ea ? void 0 : ea.value,
      emoji: null != es ? es : void 0
    }))
  }, [X, $, ee, ea, es]), eh = t.useCallback(e => {
    et(e), $(b({
      channelId: null == K ? void 0 : K.value,
      title: ee,
      description: "",
      actionType: null == e ? void 0 : e.value,
      emoji: null != es ? es : void 0
    }))
  }, [et, $, K, ee, es]), eT = t.useCallback(e => Promise.resolve(_.default.getSelectableChannels(P).filter(l => !en.has(l.channel.id) && (0, N.isChannelValidForNewMemberAction)(l.channel) && i()(e, l.channel.name)).map(e => ({
    value: e.channel.id,
    label: e.channel.name
  }))), [P, en]), eE = t.useCallback(e => {
    if (null == e || null == P) return null;
    let l = m.default.getChannel(e.value),
      n = h.default.getGuild(P);
    if (null == l || null == n) return null;
    let t = (0, r.getChannelIconComponent)(l, n);
    return null == t ? null : (0, a.jsx)(t, {
      width: 16,
      height: 16,
      className: L.channelIcon
    })
  }, [P]), ev = t.useCallback(function(e) {
    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    ei(l), ed(e)
  }, []), eA = t.useCallback(() => {
    if (null != eo) return eo;
    if (null != es) return null;
    if (null != eu && null != K) return p.default.getNewMemberActionIconURL({
      channelId: K.value,
      icon: eu
    });
    else return null
  }, [K, eu, eo, es])(), ef = t.useCallback(e => {
    null != e && ev(e, null)
  }, [ev]), ex = e => (l, n) => {
    var a, t;
    if (null == l) return;
    let s = null;
    ev(null, s = null == l.id ? {
      id: null,
      name: null !== (a = l.optionallyDiverseSequence) && void 0 !== a ? a : "",
      animated: !1
    } : {
      id: l.id,
      name: null !== (t = l.originalName) && void 0 !== t ? t : l.name,
      animated: l.animated
    }), n && e()
  }, ep = null;
  return ep = null != eA ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("img", {
      src: eA,
      alt: "",
      "aria-hidden": !0,
      className: L.__invalid_image,
      width: 24,
      height: 24
    }), (0, a.jsx)("div", {
      className: L.imageOverlay,
      children: (0, a.jsx)(A.default, {
        width: 24,
        height: 24
      })
    })]
  }) : null != es ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(d.default, {
      animated: null !== (s = es.animated) && void 0 !== s && s,
      emojiId: es.id,
      emojiName: es.name
    }), (0, a.jsx)("div", {
      className: L.imageOverlay,
      children: (0, a.jsx)(A.default, {
        width: 24,
        height: 24
      })
    })]
  }) : (0, a.jsx)(v.default, {
    width: 24,
    height: 24
  }), (0, a.jsxs)(o.ModalRoot, {
    transitionState: w,
    "aria-labelledby": z,
    children: [(0, a.jsxs)("div", {
      className: L.container,
      children: [(0, a.jsx)(o.ModalCloseButton, {
        className: L.closeButton,
        onClick: H
      }), (0, a.jsxs)("div", {
        className: L.formGroup,
        children: [(0, a.jsxs)(o.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [G.default.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TITLE, (0, a.jsx)(S.default, {})]
        }), (0, a.jsx)(o.TextInput, {
          value: ee,
          error: (null !== (C = null == ee ? void 0 : ee.length) && void 0 !== C ? C : 0) > 0 ? Z.title.join(", ") : null,
          onChange: em,
          placeholder: G.default.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TITLE_PLACEHOLDER,
          maxLength: N.NEW_MEMBER_ACTION_TITLE_MAX_LENGTH
        })]
      }), (0, a.jsx)("div", {
        className: L.separator
      }), (0, a.jsxs)("div", {
        className: L.formGroup,
        children: [(0, a.jsxs)(o.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [G.default.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_CHANNEL, (0, a.jsx)(S.default, {})]
        }), (0, a.jsx)(o.SearchableSelect, {
          value: K,
          renderOptionPrefix: eE,
          options: eT,
          onChange: e_
        }), (0, a.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: G.default.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_CHANNEL_EXPLAINER
        })]
      }), (0, a.jsx)("div", {
        className: L.separator
      }), (0, a.jsxs)("div", {
        className: L.splitGroup,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(o.Heading, {
            variant: "heading-md/semibold",
            color: "header-primary",
            children: G.default.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_ICON
          }), (0, a.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: G.default.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_ICON_EXPLAINER
          })]
        }), (0, a.jsx)("div", {
          className: L.iconUploadContainer,
          children: (0, a.jsx)(o.Popout, {
            position: "bottom",
            renderPopout: e => {
              let l = e.closePopout,
                n = (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(I.default, {
                    onChange: e => {
                      ef(e), l()
                    },
                    tabIndex: 0
                  }), (0, a.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "none",
                    children: G.default.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_ICON_UPLOAD
                  })]
                }),
                t = (0, a.jsx)(o.Popout, {
                  position: "top",
                  renderPopout: e => {
                    let {
                      closePopout: n
                    } = e;
                    return (0, a.jsx)(c.default, {
                      closePopout: () => {
                        n(), l()
                      },
                      onSelectEmoji: ex(() => {
                        n(), l()
                      }),
                      pickerIntention: M.EmojiIntention.COMMUNITY_CONTENT,
                      channel: Q
                    })
                  },
                  children: e => (0, a.jsx)(o.Text, {
                    ...e,
                    variant: "text-sm/medium",
                    color: "none",
                    children: G.default.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_ICON_EMOJI
                  })
                });
              return (0, a.jsxs)(o.Menu, {
                navId: "set-image-for-action",
                "aria-label": "upload",
                onClose: () => !1,
                onSelect: () => !1,
                children: [(0, a.jsx)(o.MenuItem, {
                  id: "emoji",
                  label: t,
                  icon: E.default
                }), (0, a.jsx)(o.MenuItem, {
                  className: L.uploadMenuItem,
                  id: "upload",
                  label: n,
                  icon: x.default
                }), (0, a.jsx)(o.MenuItem, {
                  id: "clear",
                  color: "danger",
                  label: G.default.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_ICON_REMOVE,
                  icon: f.default,
                  action: () => {
                    ev(null)
                  }
                })]
              })
            },
            children: e => (0, a.jsx)("div", {
              ...e,
              className: L.iconUpload,
              children: ep
            })
          })
        })]
      }), (0, a.jsx)("div", {
        className: L.separator
      }), (0, a.jsxs)("div", {
        className: L.formGroup,
        children: [(0, a.jsxs)(o.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [G.default.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TYPE, (0, a.jsx)(S.default, {})]
        }), (0, a.jsx)(o.RadioGroup, {
          withTransparentBackground: !0,
          size: o.RadioGroup.Sizes.NONE,
          value: null == ea ? void 0 : ea.value,
          onChange: eh,
          options: (U = J, null == (k = Q) ? U : U.map(e => ({
            ...e,
            disabled: !R(e.value, k)
          })))
        }), null != ea && Z.actionType.length > 0 ? Z.actionType.map(e => (0, a.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-danger",
          children: e
        }, e)) : null]
      })]
    }), (0, a.jsx)(o.ModalFooter, {
      children: (0, a.jsxs)("div", {
        className: L.footerButtons,
        children: [null != V ? (0, a.jsx)("div", {
          className: L.removeButton,
          children: (0, a.jsx)(o.Button, {
            size: o.Button.Sizes.SMALL,
            look: o.Button.Looks.LINK,
            color: o.Button.Colors.RED,
            onClick: eI,
            children: G.default.Messages.REMOVE
          })
        }) : (0, a.jsx)("div", {}), (0, a.jsxs)("div", {
          className: L.rightButtons,
          children: [(0, a.jsx)(o.Button, {
            onClick: H,
            size: o.Button.Sizes.SMALL,
            look: o.Button.Looks.LINK,
            color: o.Button.Colors.PRIMARY,
            children: G.default.Messages.CANCEL
          }), (0, a.jsx)(o.Button, {
            disabled: er || ec,
            onClick: eN,
            children: G.default.Messages.SAVE
          })]
        })]
      })
    })]
  })
}