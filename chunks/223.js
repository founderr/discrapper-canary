"use strict";
n.r(t), n.d(t, {
  default: function() {
    return $
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("913527"),
  o = n.n(r),
  u = n("924826"),
  d = n("722770"),
  c = n("442837"),
  f = n("481060"),
  E = n("607070"),
  _ = n("313889"),
  T = n("825829"),
  m = n("226192"),
  I = n("36459"),
  N = n("336197"),
  p = n("937889"),
  h = n("739566"),
  S = n("507418"),
  C = n("348238"),
  A = n("38267"),
  g = n("103575"),
  M = n("496675"),
  R = n("594174"),
  O = n("467679"),
  v = n("263704"),
  x = n("795295"),
  L = n("288176"),
  P = n("740727"),
  D = n("622116"),
  y = n("289565"),
  U = n("778947"),
  j = n("702346"),
  b = n("5192"),
  G = n("51144"),
  F = n("787374"),
  B = n("981631"),
  k = n("674563"),
  w = n("590433"),
  H = n("959517"),
  V = n("689938"),
  Y = n("344576");

function K(e, t) {
  let {
    popouts: n,
    selected: s,
    setPopout: l
  } = (0, A.default)(e.id, H.DEFAULT_POPOUTS), {
    usernameProfile: i,
    avatarProfile: r
  } = n, o = (0, C.useContextMenuUser)(e.author.id, t.id), u = (0, C.useContextMenuModerateUser)(e.author.id, t.id, e.id), d = (0, C.useClickMessageAuthorUsername)(e, t, i, l), c = (0, C.useClickMessageAuthorAvatar)(r, l);
  return {
    selected: s,
    onContextMenu: o,
    onContextMenuModerateUser: u,
    onClickUsername: d,
    onClickAvatar: c,
    onPopoutRequestClose: a.useCallback(() => l({
      usernameProfile: !1,
      avatarProfile: !1,
      referencedUsernameProfile: !1
    }), [l]),
    renderPopout: S.default,
    showAvatarPopout: r,
    showUsernamePopout: i
  }
}

function W(e, t) {
  return a.useMemo(() => {
    if (null != t) return n => (0, s.jsx)(g.default, {
      ...n,
      location: "AutomodFlagToChannel",
      userId: t.id,
      user: t,
      channelId: e.id,
      guildId: e.guild_id
    })
  }, [e, t])
}

function z(e) {
  let {
    children: t,
    className: n,
    compact: a
  } = e;
  return (0, s.jsx)("div", {
    className: i()(Y.footerContainer, n, {
      [Y.compact]: a
    }),
    children: t
  })
}

function Q(e) {
  let {
    children: t,
    className: n
  } = e;
  return (0, s.jsx)("div", {
    className: i()(Y.annotationRow, n),
    children: t
  })
}

function q(e, t) {
  switch (e) {
    case _.AutomodAlertActionType.DELETE_USER_MESSAGE:
      return (0, s.jsx)(P.default, {
        width: 16,
        height: 16,
        className: Y.alertActionIcon,
        ...t
      });
    case _.AutomodAlertActionType.SET_COMPLETED:
      return (0, s.jsx)(v.default, {
        width: 16,
        height: 16,
        className: i()(Y.alertActionIcon, Y.alertActionSetCompletedIcon),
        ...t
      });
    case _.AutomodAlertActionType.SUBMIT_FEEDBACK:
      return (0, s.jsx)(x.default, {
        width: 16,
        height: 16,
        className: i()(Y.alertActionIcon),
        ...t
      });
    default:
      return null
  }
}

function X(e) {
  let {
    alertAction: t,
    guildId: n
  } = e, a = (0, c.useStateFromStores)([R.default], () => R.default.getUser(t.actor), [t.actor]);
  try {
    let e = parseInt(t.actionType);
    if (null == a) return q(e, {});
    let l = function(e, t, n) {
      var s;
      let a = null !== (s = b.default.getNickname(n, null, t)) && void 0 !== s ? s : G.default.getUserTag(t),
        l = o()(e.ts),
        i = "".concat(a, " ").concat(l.fromNow());
      try {
        switch (parseInt(e.actionType)) {
          case _.AutomodAlertActionType.DELETE_USER_MESSAGE:
            return V.default.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_DELETE_MESSAGE.format({
              userName: a,
              timestamp: l.fromNow()
            });
          case _.AutomodAlertActionType.SET_COMPLETED:
            return V.default.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SET_COMPLETED.format({
              userName: a,
              timestamp: l.fromNow()
            });
          case _.AutomodAlertActionType.SUBMIT_FEEDBACK:
            return V.default.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SUBMIT_FEEDBACK.format({
              userName: a,
              timestamp: l.fromNow()
            });
          default:
            return i
        }
      } catch (e) {
        return i
      }
    }(t, a, n);
    return (0, s.jsx)(f.Tooltip, {
      text: l,
      children: t => q(e, t)
    })
  } catch (e) {
    return null
  }
}

function Z(e) {
  let {
    alertActionsExecution: t,
    guildId: n
  } = e, a = Object.values(t.actions).sort((e, t) => e.actionType < t.actionType ? 1 : -1);
  return (0, s.jsx)("div", {
    className: Y.alertActionsIconContainer,
    children: a.map(e => (0, s.jsx)(X, {
      alertAction: e,
      guildId: n
    }, e.actionType))
  })
}
let J = a.memo(function(e) {
  let t, {
      message: n,
      channel: a,
      embedChannel: l,
      compact: i,
      interactionUserId: r
    } = e,
    o = K(n, a),
    u = W(a, n.author),
    d = (0, h.default)(n),
    c = (0, U.renderUsername)({
      message: n,
      channel: a,
      author: d,
      guildId: null == a ? void 0 : a.guild_id,
      compact: i,
      ...o
    }, u),
    E = R.default.getUser(r),
    _ = K(n, a),
    m = W(a, E);
  if (null != E) {
    let e = (0, h.getUserAuthor)(E, a),
      s = (0, U.renderUsername)({
        message: n,
        channel: a,
        author: e,
        guildId: null == a ? void 0 : a.guild_id,
        compact: i,
        ..._
      }, m);
    t = () => s
  }
  return (0, s.jsx)(f.Text, {
    variant: "text-md/normal",
    color: "header-primary",
    tag: "span",
    className: Y.spanCorrection,
    children: (0, T.getActionHeaderText)(n, l, () => (0, s.jsx)("div", {
      className: Y.channelNameContainer,
      children: (0, s.jsx)(D.default, {
        channel: l,
        className: Y.channelName,
        openChatWithoutConnecting: !0
      })
    }), () => c, t)
  })
});

function $(e) {
  let {
    id: t,
    compact: n,
    message: l,
    channel: r
  } = e, {
    avatarSrc: o,
    eventHandlers: {
      onMouseEnter: h,
      onMouseLeave: S
    }
  } = (0, F.useAutomodAvatar)(!0), {
    onFocus: A,
    ...g
  } = (0, u.useListItem)(null != t ? t : ""), {
    isFocused: R,
    handleFocus: v,
    handleBlur: x
  } = (0, C.useFocusInside)(A), P = (0, c.useStateFromStores)([E.default], () => E.default.keyboardModeEnabled), D = (0, c.useStateFromStores)([M.default], () => M.default.can(B.Permissions.MANAGE_MESSAGES, r), [r]), {
    ruleName: b,
    embedChannel: G,
    decisionId: H,
    keywordMatchedContent: W,
    keyword: q,
    content: X,
    flaggedMessageId: $,
    timeoutDuration: ee,
    decisionReason: et,
    alertActionsExecution: en,
    quarantineType: es,
    interactionUserId: ea
  } = (0, T.default)(l), el = a.useMemo(() => (0, p.renderAutomodMessageMarkup)(X, W, r.id), [X, W, r]), {
    selected: ei,
    ...er
  } = K(l, r), eo = a.useCallback(() => {
    (0, m.openSubmitFeedback)(l.id, X, H, r)
  }, [l.id, X, H, r]), eu = a.useCallback(e => {
    null != $ && null != G && (e.stopPropagation(), e.preventDefault(), (0, N.default)(B.Routes.CHANNEL(null == G ? void 0 : G.guild_id, null == G ? void 0 : G.id, $)))
  }, [G, $]), ed = a.useCallback(() => {
    (0, I.executeAlertAction)(l.id, r, _.AutomodAlertActionType.DELETE_USER_MESSAGE)
  }, [r, l.id]), ec = (0, w.getFriendlyDurationString)(Number(ee)), ef = null != et, eE = D && null != $ && (null == en || !en.actions.hasOwnProperty(_.AutomodAlertActionType.DELETE_USER_MESSAGE));
  return (0, s.jsx)("div", {
    onMouseEnter: h,
    onMouseLeave: S,
    children: (0, s.jsx)(j.default, {
      className: i()(Y.mainContainer, {
        [Y.compact]: n
      }),
      iconNode: n ? null : (0, s.jsx)(F.AutomodAvatar, {
        src: o
      }),
      iconContainerClassName: Y.iconContainer,
      compact: n,
      children: (0, s.jsxs)("div", {
        className: i()(Y.content, {
          [Y.compact]: n
        }),
        children: [(0, s.jsx)(U.BaseMessageHeader, {
          message: l,
          messageClassname: Y.spanCorrection,
          className: i()(Y.usernameContainer, Y.spanCorrection, {
            [Y.compact]: n
          }),
          username: (0, s.jsxs)("div", {
            className: Y.spanCorrection,
            children: [(0, s.jsx)(f.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: Y.username,
              children: V.default.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(O.default, {
              type: k.BotTagTypes.SYSTEM_DM,
              className: Y.systemTag
            }), (0, s.jsx)(J, {
              message: l,
              channel: r,
              embedChannel: G,
              compact: n,
              interactionUserId: ea
            })]
          }),
          compact: n,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: i()(Y.messageContent, {
            [Y.compact]: n
          }),
          children: (0, s.jsx)(y.default, {
            ...g,
            message: l,
            channel: G,
            content: el,
            compact: n,
            withFooter: !0,
            hideTimestamp: !0,
            className: i()(Y.embedCard, {
              [Y.compact]: n,
              [Y.selected]: ei || P && R,
              [Y.isClickable]: null != $ && null != G
            }),
            childrenAccessories: (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsxs)("div", {
                className: Y.centeredRowContainer,
                children: [null != q && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)(f.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    children: V.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_KEYWORD.format({
                      keyword: q
                    })
                  }), (0, s.jsx)("div", {
                    className: i()(Y.dot, Y.dotMargin)
                  })]
                }), null != b && (0, s.jsx)(f.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  tag: "span",
                  children: V.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_RULE_NAME.format({
                    ruleName: b
                  })
                }), null != ec && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)("div", {
                    className: i()(Y.dot, Y.dotMargin)
                  }), (0, s.jsx)(f.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: Y.__invalid_footerText,
                    children: V.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_TIMEOUT_DURATION.format({
                      duration: ec
                    })
                  })]
                }), null != es && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)("div", {
                    className: i()(Y.dot, Y.dotMargin)
                  }), (0, s.jsx)(f.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: Y.titleCase,
                    children: V.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON.format({
                      reason: (0, T.getQuarantineReasonString)(es)
                    })
                  })]
                })]
              }), ef ? (0, s.jsx)(Q, {
                children: (0, s.jsx)(f.Text, {
                  variant: "text-xs/medium",
                  color: "text-normal",
                  tag: "span",
                  children: et
                })
              }) : null]
            }),
            popoutProps: er,
            zalgo: !0,
            onFocus: v,
            onBlur: x,
            onClick: eu
          })
        }), (0, s.jsx)(z, {
          compact: n,
          children: (0, s.jsxs)("div", {
            className: i()(Y.centeredRowContainer, Y.buttonContainer, {
              [Y.compact]: n
            }),
            children: [(0, s.jsx)(f.Button, {
              onClick: e => {
                var t;
                null === (t = er.onContextMenuModerateUser) || void 0 === t || t.call(er, e)
              },
              color: f.Button.Colors.LINK,
              look: f.Button.Looks.LINK,
              size: f.Button.Sizes.SMALL,
              className: Y.buttonStyle,
              children: (0, s.jsxs)("div", {
                className: Y.footerAction,
                children: [(0, s.jsx)(L.default, {
                  width: 16,
                  height: 16,
                  color: d.default.BLUE_345,
                  className: Y.footerIcon
                }), (0, s.jsx)(f.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  children: V.default.Messages.ACTIONS
                })]
              })
            }), (0, s.jsx)("div", {
              className: Y.dot
            }), (0, s.jsx)(f.Button, {
              onClick: eo,
              color: f.Button.Colors.LINK,
              look: f.Button.Looks.LINK,
              size: f.Button.Sizes.SMALL,
              className: Y.buttonStyle,
              children: (0, s.jsx)("div", {
                className: Y.footerAction,
                children: (0, s.jsx)(f.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  children: V.default.Messages.GUILD_AUTOMOD_REPORT_ISSUES
                })
              })
            }), eE ? (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)("div", {
                className: Y.dot
              }), (0, s.jsx)(f.Button, {
                onClick: ed,
                color: f.Button.Colors.LINK,
                look: f.Button.Looks.LINK,
                size: f.Button.Sizes.SMALL,
                className: Y.buttonStyle,
                children: (0, s.jsx)("div", {
                  className: Y.footerAction,
                  children: (0, s.jsx)(f.Text, {
                    variant: "text-xs/normal",
                    color: "text-link",
                    children: V.default.Messages.GUILD_AUTOMOD_ALERT_DELETE_MEMBERS_MESSAGE
                  })
                })
              })]
            }) : null, null != en ? (0, s.jsx)(Z, {
              alertActionsExecution: en,
              guildId: r.guild_id
            }) : null]
          })
        })]
      })
    })
  })
}