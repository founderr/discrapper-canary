n.r(l), n.d(l, {
  default: function() {
    return L
  }
}), n(653041), n(47120), n(536091);
var a = n(735250),
  i = n(470079),
  s = n(658722),
  t = n.n(s),
  o = n(399606),
  u = n(481060),
  r = n(596454),
  d = n(471445),
  c = n(907040),
  I = n(734893),
  N = n(813197),
  m = n(592125),
  _ = n(984933),
  h = n(430824),
  v = n(153124),
  T = n(768581),
  x = n(823379),
  E = n(700785),
  O = n(969632),
  C = n(580357),
  p = n(981631),
  A = n(185923),
  g = n(689938),
  j = n(525480);

function S(e, l) {
  switch (e) {
    case I.oi.VIEW:
      return E.Uu(p.Plq.VIEW_CHANNEL, l);
    case I.oi.CHAT:
      if (p.TPd.GUILD_THREADS_ONLY.has(l.type)) return E.Uu(p.Plq.SEND_MESSAGES_IN_THREADS, l) || E.Uu(p.Plq.SEND_MESSAGES, l);
      return E.Uu(p.Plq.SEND_MESSAGES, l);
    default:
      return !1
  }
}

function M() {
  return {
    channelId: [],
    title: [],
    description: [],
    actionType: [],
    emoji: [],
    icon: []
  }
}

function G(e) {
  let l = M(),
    n = m.Z.getChannel(e.channelId);
  return (null == e.title || e.title.length < I.Wz) && l.title.push(g.Z.Messages.NEW_MEMBER_ACTION_VALIDATION_ERROR_TITLE_REQUIRED.format({
    minLength: I.Wz
  })), null != e.actionType && null != n && !S(e.actionType, n) && l.actionType.push(function(e) {
    switch (e) {
      case I.oi.VIEW:
        return g.Z.Messages.NEW_MEMBER_ACTION_VALIDATION_ERROR_TYPE_VIEW_INVALID_FOR_CHANNEL;
      case I.oi.CHAT:
        return g.Z.Messages.NEW_MEMBER_ACTION_VALIDATION_ERROR_TYPE_CHAT_INVALID_FOR_CHANNEL;
      default:
        (0, x.vE)(e)
    }
  }(e.actionType)), l
}

function L(e) {
  var l, n, s, x, E, L, R, D, Z;
  let {
    transitionState: b,
    onClose: f,
    guildId: B,
    action: U,
    onSave: P,
    onDelete: k
  } = e, y = (0, v.Dt)(), [H] = i.useState(function(e) {
    if (null == e) return null;
    let l = m.Z.getChannel(e.channelId);
    return null == l ? null : {
      value: e.channelId,
      label: l.name
    }
  }(U)), [V, z] = i.useState(H), w = (0, o.e7)([m.Z], () => m.Z.getChannel(null == V ? void 0 : V.value)), W = (null == w ? void 0 : w.isMediaChannel()) === !0, F = i.useMemo(() => [{
    value: I.oi.VIEW,
    name: g.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_VIEW
  }, {
    value: I.oi.CHAT,
    name: (null == w ? void 0 : w.type) === p.d4z.GUILD_FORUM ? W ? g.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TALK_IN_MEDIA_CHANNEL : g.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TALK_IN_FORUM : g.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TALK
  }], [null == w ? void 0 : w.type, W]), [K, Y] = i.useState(M()), [q, Q] = i.useState(null !== (l = null == U ? void 0 : U.title) && void 0 !== l ? l : ""), X = (0, o.e7)([O.Z], () => {
    let e = O.Z.getSettings();
    if (null == e.newMemberActions) return new Set;
    let l = new Set(e.newMemberActions.map(e => e.channelId));
    return null != H && l.delete(H.value), l
  });
  let [J, $] = i.useState((E = F, null == (L = U) ? null : null !== (R = E.find(e => e.value === L.actionType)) && void 0 !== R ? R : null)), [ee, el] = i.useState(null !== (n = null == U ? void 0 : U.emoji) && void 0 !== n ? n : null), en = (0, o.e7)([O.Z], () => {
    var e;
    return null === (e = O.Z.getNewMemberAction(null == U ? void 0 : U.channelId)) || void 0 === e ? void 0 : e.icon
  }), [ea, ei] = i.useState(null), es = null == q || 0 === q.length || null == J || null == V, et = Object.values(K).flat().length > 0, eo = i.useCallback(() => {
    if (null == V || null == J || q.length <= 0) return;
    let e = {
        channelId: V.value,
        title: q,
        description: "",
        actionType: J.value,
        emoji: null != ee ? ee : null,
        icon: null != en ? en : null
      },
      l = null != ea || null != ee;
    P(e, ea, l), f()
  }, [P, f, q, J, V, ee, en, ea]), eu = i.useCallback(() => {
    null == k || k(), f()
  }, [k, f]), er = i.useCallback(e => {
    Q(e), Y(G({
      channelId: null == V ? void 0 : V.value,
      title: e,
      description: "",
      actionType: null == J ? void 0 : J.value,
      emoji: null != ee ? ee : void 0
    }))
  }, [Q, Y, V, J, ee]), ed = i.useCallback(e => {
    z(e), Y(G({
      channelId: null == e ? void 0 : e.value,
      title: q,
      description: "",
      actionType: null == J ? void 0 : J.value,
      emoji: null != ee ? ee : void 0
    }))
  }, [z, Y, q, J, ee]), ec = i.useCallback(e => {
    $(e), Y(G({
      channelId: null == V ? void 0 : V.value,
      title: q,
      description: "",
      actionType: null == e ? void 0 : e.value,
      emoji: null != ee ? ee : void 0
    }))
  }, [$, Y, V, q, ee]), eI = i.useCallback(e => Promise.resolve(_.ZP.getSelectableChannels(B).filter(l => !X.has(l.channel.id) && (0, I.kb)(l.channel) && t()(e, l.channel.name)).map(e => ({
    value: e.channel.id,
    label: e.channel.name
  }))), [B, X]), eN = i.useCallback(e => {
    if (null == e || null == B) return null;
    let l = m.Z.getChannel(e.value),
      n = h.Z.getGuild(B);
    if (null == l || null == n) return null;
    let i = (0, d.KS)(l, n);
    return null == i ? null : (0, a.jsx)(i, {
      size: "xs",
      color: "customColor",
      className: j.channelIcon
    })
  }, [B]), em = i.useCallback(function(e) {
    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    el(l), ei(e)
  }, []), e_ = i.useCallback(() => {
    if (null != ea) return ea;
    if (null != ee) return null;
    if (null != en && null != V) return T.ZP.getNewMemberActionIconURL({
      channelId: V.value,
      icon: en
    });
    else return null
  }, [V, en, ea, ee])(), eh = i.useCallback(e => {
    null != e && em(e, null)
  }, [em]), ev = e => (l, n) => {
    var a, i;
    if (null == l) return;
    let s = null;
    em(null, s = null == l.id ? {
      id: null,
      name: null !== (a = l.optionallyDiverseSequence) && void 0 !== a ? a : "",
      animated: !1
    } : {
      id: l.id,
      name: null !== (i = l.originalName) && void 0 !== i ? i : l.name,
      animated: l.animated
    }), n && e()
  }, eT = null;
  return eT = null != e_ ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("img", {
      src: e_,
      alt: "",
      "aria-hidden": !0,
      className: j.__invalid_image,
      width: 24,
      height: 24
    }), (0, a.jsx)("div", {
      className: j.imageOverlay,
      children: (0, a.jsx)(u.PencilIcon, {
        size: "md",
        color: "currentColor"
      })
    })]
  }) : null != ee ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(r.Z, {
      animated: null !== (s = ee.animated) && void 0 !== s && s,
      emojiId: ee.id,
      emojiName: ee.name
    }), (0, a.jsx)("div", {
      className: j.imageOverlay,
      children: (0, a.jsx)(u.PencilIcon, {
        size: "md",
        color: "currentColor"
      })
    })]
  }) : (0, a.jsx)(u.ImagePlusIcon, {
    size: "md",
    color: "currentColor"
  }), (0, a.jsxs)(u.ModalRoot, {
    transitionState: b,
    "aria-labelledby": y,
    children: [(0, a.jsxs)("div", {
      className: j.container,
      children: [(0, a.jsx)(u.ModalCloseButton, {
        className: j.closeButton,
        onClick: f
      }), (0, a.jsxs)("div", {
        className: j.formGroup,
        children: [(0, a.jsxs)(u.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [g.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TITLE, (0, a.jsx)(C.Z, {})]
        }), (0, a.jsx)(u.TextInput, {
          value: q,
          error: (null !== (x = null == q ? void 0 : q.length) && void 0 !== x ? x : 0) > 0 ? K.title.join(", ") : null,
          onChange: er,
          placeholder: g.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TITLE_PLACEHOLDER,
          maxLength: I.Z3
        })]
      }), (0, a.jsx)("div", {
        className: j.separator
      }), (0, a.jsxs)("div", {
        className: j.formGroup,
        children: [(0, a.jsxs)(u.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [g.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_CHANNEL, (0, a.jsx)(C.Z, {})]
        }), (0, a.jsx)(u.SearchableSelect, {
          value: V,
          renderOptionPrefix: eN,
          options: eI,
          onChange: ed
        }), (0, a.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: g.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_CHANNEL_EXPLAINER
        })]
      }), (0, a.jsx)("div", {
        className: j.separator
      }), (0, a.jsxs)("div", {
        className: j.splitGroup,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(u.Heading, {
            variant: "heading-md/semibold",
            color: "header-primary",
            children: g.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_ICON
          }), (0, a.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: g.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_ICON_EXPLAINER
          })]
        }), (0, a.jsx)("div", {
          className: j.iconUploadContainer,
          children: (0, a.jsx)(u.Popout, {
            position: "bottom",
            renderPopout: e => {
              let l = e.closePopout,
                n = (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(N.ZP, {
                    onChange: e => {
                      eh(e), l()
                    },
                    tabIndex: 0
                  }), (0, a.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    color: "none",
                    children: g.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_ICON_UPLOAD
                  })]
                }),
                i = (0, a.jsx)(u.Popout, {
                  position: "top",
                  renderPopout: e => {
                    let {
                      closePopout: n
                    } = e;
                    return (0, a.jsx)(c.Z, {
                      closePopout: () => {
                        n(), l()
                      },
                      onSelectEmoji: ev(() => {
                        n(), l()
                      }),
                      pickerIntention: A.Hz.COMMUNITY_CONTENT,
                      channel: w
                    })
                  },
                  children: e => (0, a.jsx)(u.Text, {
                    ...e,
                    variant: "text-sm/medium",
                    color: "none",
                    children: g.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_ICON_EMOJI
                  })
                });
              return (0, a.jsxs)(u.Menu, {
                navId: "set-image-for-action",
                "aria-label": "upload",
                onClose: () => !1,
                onSelect: () => !1,
                children: [(0, a.jsx)(u.MenuItem, {
                  id: "emoji",
                  label: i,
                  icon: u.ReactionIcon
                }), (0, a.jsx)(u.MenuItem, {
                  className: j.uploadMenuItem,
                  id: "upload",
                  label: n,
                  icon: u.UploadIcon
                }), (0, a.jsx)(u.MenuItem, {
                  id: "clear",
                  color: "danger",
                  label: g.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_ICON_REMOVE,
                  icon: u.TrashIcon,
                  action: () => {
                    em(null)
                  }
                })]
              })
            },
            children: e => (0, a.jsx)("div", {
              ...e,
              className: j.iconUpload,
              children: eT
            })
          })
        })]
      }), (0, a.jsx)("div", {
        className: j.separator
      }), (0, a.jsxs)("div", {
        className: j.formGroup,
        children: [(0, a.jsxs)(u.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [g.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TYPE, (0, a.jsx)(C.Z, {})]
        }), (0, a.jsx)(u.RadioGroup, {
          withTransparentBackground: !0,
          size: u.RadioGroup.Sizes.NONE,
          value: null == J ? void 0 : J.value,
          onChange: ec,
          options: (D = F, null == (Z = w) ? D : D.map(e => ({
            ...e,
            disabled: !S(e.value, Z)
          })))
        }), null != J && K.actionType.length > 0 ? K.actionType.map(e => (0, a.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-danger",
          children: e
        }, e)) : null]
      })]
    }), (0, a.jsx)(u.ModalFooter, {
      children: (0, a.jsxs)("div", {
        className: j.footerButtons,
        children: [null != U ? (0, a.jsx)("div", {
          className: j.removeButton,
          children: (0, a.jsx)(u.Button, {
            size: u.Button.Sizes.SMALL,
            look: u.Button.Looks.LINK,
            color: u.Button.Colors.RED,
            onClick: eu,
            children: g.Z.Messages.REMOVE
          })
        }) : (0, a.jsx)("div", {}), (0, a.jsxs)("div", {
          className: j.rightButtons,
          children: [(0, a.jsx)(u.Button, {
            onClick: f,
            size: u.Button.Sizes.SMALL,
            look: u.Button.Looks.LINK,
            color: u.Button.Colors.PRIMARY,
            children: g.Z.Messages.CANCEL
          }), (0, a.jsx)(u.Button, {
            disabled: es || et,
            onClick: eo,
            children: g.Z.Messages.SAVE
          })]
        })]
      })
    })]
  })
}