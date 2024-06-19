n.d(t, {
  Z: function() {
    return Q
  }
});
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(913527),
  o = n.n(r),
  c = n(91192),
  u = n(722770),
  d = n(442837),
  E = n(481060),
  _ = n(607070),
  I = n(313889),
  T = n(825829),
  N = n(226192),
  m = n(36459),
  h = n(336197),
  C = n(937889),
  S = n(739566),
  A = n(507418),
  p = n(348238),
  g = n(38267),
  f = n(103575),
  O = n(496675),
  R = n(594174),
  M = n(467679),
  x = n(622116),
  v = n(289565),
  L = n(778947),
  Z = n(702346),
  P = n(5192),
  D = n(51144),
  j = n(787374),
  U = n(981631),
  b = n(674563),
  y = n(590433),
  B = n(959517),
  k = n(689938),
  G = n(121802);

function F(e, t) {
  let {
    popouts: n,
    selected: s,
    setPopout: l
  } = (0, g.Z)(e.id, B.d$), {
    usernameProfile: a,
    avatarProfile: r
  } = n, o = (0, p.wq)(e.author.id, t.id), c = (0, p.RN)(e.author.id, t.id, e.id), u = (0, p.XO)(e, t, a, l), d = (0, p.R9)(r, l);
  return {
    selected: s,
    onContextMenu: o,
    onContextMenuModerateUser: c,
    onClickUsername: u,
    onClickAvatar: d,
    onPopoutRequestClose: i.useCallback(() => l({
      usernameProfile: !1,
      avatarProfile: !1,
      referencedUsernameProfile: !1
    }), [l]),
    renderPopout: A.Z,
    showAvatarPopout: r,
    showUsernamePopout: a
  }
}

function w(e, t) {
  return i.useMemo(() => {
    if (null != t) return n => (0, s.jsx)(f.Z, {
      ...n,
      location: "AutomodFlagToChannel",
      userId: t.id,
      user: t,
      channelId: e.id,
      guildId: e.guild_id
    })
  }, [e, t])
}

function V(e) {
  let {
    children: t,
    className: n,
    compact: i
  } = e;
  return (0, s.jsx)("div", {
    className: a()(G.footerContainer, n, {
      [G.compact]: i
    }),
    children: t
  })
}

function H(e) {
  let {
    children: t,
    className: n
  } = e;
  return (0, s.jsx)("div", {
    className: a()(G.annotationRow, n),
    children: t
  })
}

function Y(e, t) {
  switch (e) {
    case I.d.DELETE_USER_MESSAGE:
      return (0, s.jsx)(E.TrashIcon, {
        size: "xs",
        color: "currentColor",
        className: G.alertActionIcon,
        ...t
      });
    case I.d.SET_COMPLETED:
      return (0, s.jsx)(E.CheckmarkLargeIcon, {
        size: "xs",
        color: "currentColor",
        className: a()(G.alertActionIcon, G.alertActionSetCompletedIcon),
        ...t
      });
    case I.d.SUBMIT_FEEDBACK:
      return (0, s.jsx)(E.FlagIcon, {
        size: "xs",
        color: "currentColor",
        className: a()(G.alertActionIcon),
        ...t
      });
    default:
      return null
  }
}

function K(e) {
  let {
    alertAction: t,
    guildId: n
  } = e, i = (0, d.e7)([R.default], () => R.default.getUser(t.actor), [t.actor]);
  try {
    let e = parseInt(t.actionType);
    if (null == i) return Y(e, {});
    let l = function(e, t, n) {
      var s;
      let i = null !== (s = P.ZP.getNickname(n, null, t)) && void 0 !== s ? s : D.ZP.getUserTag(t),
        l = o()(e.ts),
        a = "".concat(i, " ").concat(l.fromNow());
      try {
        switch (parseInt(e.actionType)) {
          case I.d.DELETE_USER_MESSAGE:
            return k.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_DELETE_MESSAGE.format({
              userName: i,
              timestamp: l.fromNow()
            });
          case I.d.SET_COMPLETED:
            return k.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SET_COMPLETED.format({
              userName: i,
              timestamp: l.fromNow()
            });
          case I.d.SUBMIT_FEEDBACK:
            return k.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SUBMIT_FEEDBACK.format({
              userName: i,
              timestamp: l.fromNow()
            });
          default:
            return a
        }
      } catch (e) {
        return a
      }
    }(t, i, n);
    return (0, s.jsx)(E.Tooltip, {
      text: l,
      children: t => Y(e, t)
    })
  } catch (e) {
    return null
  }
}

function W(e) {
  let {
    alertActionsExecution: t,
    guildId: n
  } = e, i = Object.values(t.actions).sort((e, t) => e.actionType < t.actionType ? 1 : -1);
  return (0, s.jsx)("div", {
    className: G.alertActionsIconContainer,
    children: i.map(e => (0, s.jsx)(K, {
      alertAction: e,
      guildId: n
    }, e.actionType))
  })
}
let z = i.memo(function(e) {
  let t, {
      message: n,
      channel: i,
      embedChannel: l,
      compact: a,
      interactionUserId: r
    } = e,
    o = F(n, i),
    c = w(i, n.author),
    u = (0, S.ZP)(n),
    d = (0, L.CF)({
      message: n,
      channel: i,
      author: u,
      guildId: null == i ? void 0 : i.guild_id,
      compact: a,
      ...o
    }, c),
    _ = R.default.getUser(r),
    I = F(n, i),
    N = w(i, _);
  if (null != _) {
    let e = (0, S.ij)(_, i),
      s = (0, L.CF)({
        message: n,
        channel: i,
        author: e,
        guildId: null == i ? void 0 : i.guild_id,
        compact: a,
        ...I
      }, N);
    t = () => s
  }
  return (0, s.jsx)(E.Text, {
    variant: "text-md/normal",
    color: "header-primary",
    tag: "span",
    className: G.spanCorrection,
    children: (0, T.Mq)(n, l, () => (0, s.jsx)("div", {
      className: G.channelNameContainer,
      children: (0, s.jsx)(x.Z, {
        channel: l,
        className: G.channelName,
        openChatWithoutConnecting: !0
      })
    }), () => d, t)
  })
});

function Q(e) {
  let {
    id: t,
    compact: n,
    message: l,
    channel: r
  } = e, {
    avatarSrc: o,
    eventHandlers: {
      onMouseEnter: S,
      onMouseLeave: A
    }
  } = (0, j.m)(!0), {
    onFocus: g,
    ...f
  } = (0, c.JA)(null != t ? t : ""), {
    isFocused: R,
    handleFocus: x,
    handleBlur: P
  } = (0, p.bb)(g), D = (0, d.e7)([_.Z], () => _.Z.keyboardModeEnabled), B = (0, d.e7)([O.Z], () => O.Z.can(U.Plq.MANAGE_MESSAGES, r), [r]), {
    ruleName: w,
    embedChannel: Y,
    decisionId: K,
    keywordMatchedContent: Q,
    keyword: q,
    content: X,
    flaggedMessageId: J,
    timeoutDuration: $,
    decisionReason: ee,
    alertActionsExecution: et,
    quarantineType: en,
    interactionUserId: es
  } = (0, T.ZP)(l), ei = i.useMemo(() => (0, C.k$)(X, Q, r.id), [X, Q, r]), {
    selected: el,
    ...ea
  } = F(l, r), er = i.useCallback(() => {
    (0, N._s)(l.id, X, K, r)
  }, [l.id, X, K, r]), eo = i.useCallback(e => {
    if (null != J && null != Y) e.stopPropagation(), e.preventDefault(), (0, h.Z)(U.Z5c.CHANNEL(null == Y ? void 0 : Y.guild_id, null == Y ? void 0 : Y.id, J))
  }, [Y, J]), ec = i.useCallback(() => {
    (0, m.Xx)(l.id, r, I.d.DELETE_USER_MESSAGE)
  }, [r, l.id]), eu = (0, y.L9)(Number($)), ed = null != ee, eE = B && null != J && (null == et || !et.actions.hasOwnProperty(I.d.DELETE_USER_MESSAGE));
  return (0, s.jsx)("div", {
    onMouseEnter: S,
    onMouseLeave: A,
    children: (0, s.jsx)(Z.Z, {
      className: a()(G.mainContainer, {
        [G.compact]: n
      }),
      iconNode: n ? null : (0, s.jsx)(j.S, {
        src: o
      }),
      iconContainerClassName: G.iconContainer,
      compact: n,
      children: (0, s.jsxs)("div", {
        className: a()(G.content, {
          [G.compact]: n
        }),
        children: [(0, s.jsx)(L.nD, {
          message: l,
          messageClassname: G.spanCorrection,
          className: a()(G.usernameContainer, G.spanCorrection, {
            [G.compact]: n
          }),
          username: (0, s.jsxs)("div", {
            className: G.spanCorrection,
            children: [(0, s.jsx)(E.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: G.username,
              children: k.Z.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(M.Z, {
              type: b.Hb.SYSTEM_DM,
              className: G.systemTag
            }), (0, s.jsx)(z, {
              message: l,
              channel: r,
              embedChannel: Y,
              compact: n,
              interactionUserId: es
            })]
          }),
          compact: n,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: a()(G.messageContent, {
            [G.compact]: n
          }),
          children: (0, s.jsx)(v.Z, {
            ...f,
            message: l,
            channel: Y,
            content: ei,
            compact: n,
            withFooter: !0,
            hideTimestamp: !0,
            className: a()(G.embedCard, {
              [G.compact]: n,
              [G.selected]: el || D && R,
              [G.isClickable]: null != J && null != Y
            }),
            childrenAccessories: (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsxs)("div", {
                className: G.centeredRowContainer,
                children: [null != q && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)(E.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    children: k.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_KEYWORD.format({
                      keyword: q
                    })
                  }), (0, s.jsx)("div", {
                    className: a()(G.dot, G.dotMargin)
                  })]
                }), null != w && (0, s.jsx)(E.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  tag: "span",
                  children: k.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_RULE_NAME.format({
                    ruleName: w
                  })
                }), null != eu && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)("div", {
                    className: a()(G.dot, G.dotMargin)
                  }), (0, s.jsx)(E.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: G.__invalid_footerText,
                    children: k.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_TIMEOUT_DURATION.format({
                      duration: eu
                    })
                  })]
                }), null != en && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)("div", {
                    className: a()(G.dot, G.dotMargin)
                  }), (0, s.jsx)(E.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: G.titleCase,
                    children: k.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON.format({
                      reason: (0, T.hU)(en)
                    })
                  })]
                })]
              }), ed ? (0, s.jsx)(H, {
                children: (0, s.jsx)(E.Text, {
                  variant: "text-xs/medium",
                  color: "text-normal",
                  tag: "span",
                  children: ee
                })
              }) : null]
            }),
            popoutProps: ea,
            zalgo: !0,
            onFocus: x,
            onBlur: P,
            onClick: eo
          })
        }), (0, s.jsx)(V, {
          compact: n,
          children: (0, s.jsxs)("div", {
            className: a()(G.centeredRowContainer, G.buttonContainer, {
              [G.compact]: n
            }),
            children: [(0, s.jsx)(E.Button, {
              onClick: e => {
                var t;
                null === (t = ea.onContextMenuModerateUser) || void 0 === t || t.call(ea, e)
              },
              color: E.Button.Colors.LINK,
              look: E.Button.Looks.LINK,
              size: E.Button.Sizes.SMALL,
              className: G.buttonStyle,
              children: (0, s.jsxs)("div", {
                className: G.footerAction,
                children: [(0, s.jsx)(E.ShieldIcon, {
                  size: "xs",
                  color: u.Z.BLUE_345,
                  className: G.footerIcon
                }), (0, s.jsx)(E.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  children: k.Z.Messages.ACTIONS
                })]
              })
            }), (0, s.jsx)("div", {
              className: G.dot
            }), (0, s.jsx)(E.Button, {
              onClick: er,
              color: E.Button.Colors.LINK,
              look: E.Button.Looks.LINK,
              size: E.Button.Sizes.SMALL,
              className: G.buttonStyle,
              children: (0, s.jsx)("div", {
                className: G.footerAction,
                children: (0, s.jsx)(E.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  children: k.Z.Messages.GUILD_AUTOMOD_REPORT_ISSUES
                })
              })
            }), eE ? (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)("div", {
                className: G.dot
              }), (0, s.jsx)(E.Button, {
                onClick: ec,
                color: E.Button.Colors.LINK,
                look: E.Button.Looks.LINK,
                size: E.Button.Sizes.SMALL,
                className: G.buttonStyle,
                children: (0, s.jsx)("div", {
                  className: G.footerAction,
                  children: (0, s.jsx)(E.Text, {
                    variant: "text-xs/normal",
                    color: "text-link",
                    children: k.Z.Messages.GUILD_AUTOMOD_ALERT_DELETE_MEMBERS_MESSAGE
                  })
                })
              })]
            }) : null, null != et ? (0, s.jsx)(W, {
              alertActionsExecution: et,
              guildId: r.guild_id
            }) : null]
          })
        })]
      })
    })
  })
}