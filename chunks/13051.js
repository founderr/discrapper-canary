"use strict";
l.r(t), l.d(t, {
  default: function() {
    return L
  }
}), l("47120"), l("315314"), l("610138"), l("216116"), l("78328"), l("815648");
var n = l("735250"),
  a = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("913527"),
  o = l.n(r),
  d = l("442837"),
  u = l("481060"),
  c = l("139387"),
  f = l("726542"),
  I = l("339085"),
  m = l("434404"),
  T = l("598077"),
  E = l("430824"),
  N = l("246946"),
  _ = l("285952"),
  S = l("259580"),
  h = l("497309"),
  g = l("531087"),
  p = l("768581"),
  O = l("709054"),
  A = l("486199"),
  C = l("981631"),
  x = l("689938"),
  R = l("32512"),
  M = l("611273");

function L(e) {
  let t, {
      guild: l,
      integration: s,
      editedIntegration: r,
      isExpanded: L,
      onToggleExpand: v,
      onDisable: j,
      onEnable: P
    } = e,
    b = (0, d.useStateFromStores)([E.default], () => E.default.getRoles(l.id)),
    [D, y] = a.useState(!1),
    G = (0, d.useStateFromStores)([N.default], () => N.default.hidePersonalInformation),
    B = a.useCallback(() => {
      y(!0), P(s)
    }, [s, P]),
    k = a.useCallback(() => {
      !s.syncing && (0, u.openModal)(e => {
        let t = 0 === s.expire_behavior ? x.default.Messages.REMOVE_SYNCED_ROLE : x.default.Messages.KICK_FROM_SERVER;
        return (0, n.jsx)(u.ConfirmModal, {
          ...e,
          header: x.default.Messages.DISABLE_INTEGRATION_TITLE,
          confirmText: t,
          cancelText: x.default.Messages.CANCEL,
          onConfirm: () => j(s),
          children: (0, n.jsx)(u.Text, {
            variant: "text-md/normal",
            children: s.type === C.PlatformTypes.YOUTUBE ? x.default.Messages.DISABLE_INTEGRATION_YOUTUBE_BODY : x.default.Messages.DISABLE_INTEGRATION_TWITCH_BODY
          })
        })
      })
    }, [s, j]),
    U = a.useCallback(() => {
      m.default.syncIntegration(l.id, s.id)
    }, [l.id, s.id]),
    H = a.useCallback(() => {
      null != s.role_id && (m.default.setSection(C.GuildSettingsSections.ROLES), m.default.selectRole(s.role_id))
    }, [s.role_id]),
    {
      serviceName: F,
      channelURL: w,
      expireBehaviorLabel: W,
      syncLabel: V,
      subscribersText: K
    } = a.useMemo(() => {
      var e, t, l, n, a;
      let i = null !== (l = null === (t = f.default.get(s.type)) || void 0 === t ? void 0 : null === (e = t.getPlatformUserUrl) || void 0 === e ? void 0 : e.call(t, s.account)) && void 0 !== l ? l : "";
      switch (s.type) {
        case C.PlatformTypes.YOUTUBE:
          return {
            serviceName: x.default.Messages.INTEGRATIONS_YOUTUBE, expireBehaviorLabel: x.default.Messages.FORM_LABEL_MEMBERSHIP_EXPIRE_BEHAVIOR, syncLabel: x.default.Messages.FORM_LABEL_SYNCED_MEMBERS, subscribersText: x.default.Messages.NUM_MEMBERS.format({
              subscribers: null !== (n = s.subscriber_count) && void 0 !== n ? n : 0
            }), channelURL: i
          };
        case C.PlatformTypes.TWITCH:
        default:
          return {
            serviceName: x.default.Messages.INTEGRATIONS_TWITCH, expireBehaviorLabel: x.default.Messages.FORM_LABEL_SUB_EXPIRE_BEHAVIOR, syncLabel: x.default.Messages.FORM_LABEL_SYNCED_SUBS, subscribersText: x.default.Messages.NUM_SUBSCRIBERS.format({
              subscribers: null !== (a = s.subscriber_count) && void 0 !== a ? a : 0
            }), channelURL: i
          }
      }
    }, [s.account, s.subscriber_count, s.type]),
    {
      roleLink: Y,
      syncDescriptionText: z
    } = a.useMemo(() => {
      let e, t;
      let l = null != s.role_id ? b[s.role_id] : null;
      e = null != l ? (0, n.jsx)(u.Anchor, {
        onClick: H,
        children: l.name
      }) : x.default.Messages.NONE;
      let a = f.default.get(s.type);
      return {
        roleLink: e,
        syncDescriptionText: t = s.revoked && null != a ? x.default.Messages.SYNC_REVOKED.format({
          user: s.user,
          platformName: a.name
        }) : x.default.Messages.INTEGRATIONS_LAST_SYNC.format({
          datetime: o()(s.synced_at).calendar()
        })
      }
    }, [b, H, s.revoked, s.role_id, s.synced_at, s.type, s.user]),
    Z = a.useMemo(() => {
      let e = I.default.getGuildEmoji(l.id),
        t = Object.values(b).filter(e => null != e.tags && e.tags.integration_id === s.id).map(e => e.id);
      return s.enable_emoticons ? e.sort((e, t) => e.name.localeCompare(t.name)).filter(e => null != s.role_id && (null == e ? void 0 : e.roles.some(e => t.includes(e)))) : []
    }, [l.id, b, s.enable_emoticons, s.id, s.role_id]);
  if (a.useEffect(() => {
      (null == r ? void 0 : r.id) === s.id && (null == r ? void 0 : r.enabled) === !0 && y(!1)
    }, [r, s.id]), s.enabled && null != s.user) t = [{
    icon: h.default,
    text: G ? x.default.Messages.INTEGRATION_ADDED_DATE.format({
      timestamp: O.default.extractTimestamp(s.id)
    }) : x.default.Messages.INTEGRATION_ADDED_USER_DATE.format({
      user: null != s.user ? new T.default(s.user).tag : null,
      timestamp: O.default.extractTimestamp(s.id)
    })
  }];
  else {
    let e = new URL(w);
    t = [{
      text: x.default.Messages.INTEGRATIONS_ACCOUNT_DESCRIPTION.format({
        serviceName: F,
        accountUrl: w,
        accountUrlText: e.hostname + e.pathname
      })
    }]
  }
  let q = (0, n.jsxs)(_.default, {
      className: R.header,
      align: _.default.Align.CENTER,
      children: [(0, n.jsx)(A.default, {
        name: "".concat(s.name),
        detailsClassName: R.description,
        details: t
      }), s.enabled ? (0, n.jsx)(_.default.Child, {
        shrink: 0,
        grow: 0,
        children: (0, n.jsx)(S.default, {
          className: R.expandIcon,
          expanded: L && !D,
          "aria-hidden": !0
        })
      }) : (0, n.jsx)(_.default.Child, {
        shrink: 0,
        grow: 0,
        children: (0, n.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          color: u.Button.Colors.PRIMARY,
          onClick: B,
          disabled: D,
          children: D ? (0, n.jsx)(g.default, {
            width: 24,
            height: 24
          }) : (0, n.jsx)(n.Fragment, {
            children: x.default.Messages.INTEGRATIONS_ENABLE
          })
        })
      })]
    }),
    X = null;
  return L && !D && null != r && (X = (0, n.jsxs)(_.default, {
    className: R.body,
    direction: _.default.Direction.VERTICAL,
    children: [(0, n.jsx)(u.FormDivider, {
      className: R.topDivider
    }), function(e) {
      let {
        integration: t,
        labelText: l,
        subscribersText: a,
        descriptionText: s,
        roleLink: i,
        onSync: r
      } = e;
      return (0, n.jsxs)(_.default, {
        children: [(0, n.jsxs)(_.default.Child, {
          basis: "50%",
          children: [(0, n.jsx)(u.FormTitle, {
            className: M.marginBottom8,
            children: x.default.Messages.FORM_LABEL_SYNCED_ROLE
          }), (0, n.jsx)(u.Text, {
            className: R.syncedRole,
            color: "header-primary",
            variant: "text-sm/normal",
            children: i
          })]
        }), (0, n.jsxs)(_.default.Child, {
          basis: "50%",
          children: [(0, n.jsx)(u.FormTitle, {
            className: M.marginBottom8,
            children: l
          }), (0, n.jsxs)(_.default, {
            justify: _.default.Justify.BETWEEN,
            children: [(0, n.jsxs)(_.default, {
              direction: _.default.Direction.VERTICAL,
              children: [(0, n.jsx)(u.Text, {
                color: "header-primary",
                variant: "text-sm/normal",
                children: a
              }), (0, n.jsx)(u.Text, {
                color: "header-secondary",
                variant: "text-xs/normal",
                children: s
              })]
            }), (0, n.jsx)(u.Button, {
              size: u.Button.Sizes.SMALL,
              look: u.Button.Looks.FILLED,
              color: u.Button.Colors.PRIMARY,
              disabled: t.syncing || t.revoked,
              onClick: r,
              children: t.syncing ? (0, n.jsx)(g.default, {
                width: 24,
                height: 24
              }) : (0, n.jsx)(n.Fragment, {
                children: x.default.Messages.SYNC
              })
            })]
          })]
        })]
      })
    }({
      integration: r,
      labelText: V,
      subscribersText: K,
      descriptionText: z,
      roleLink: Y,
      onSync: U
    }), (0, n.jsx)(u.FormDivider, {
      className: R.midDivider
    }), function(e) {
      let {
        integration: t,
        labelText: l,
        onBehaviorChange: a,
        onGracePeriodChange: s
      } = e;
      return (0, n.jsxs)(_.default, {
        children: [(0, n.jsxs)(_.default.Child, {
          basis: "50%",
          children: [(0, n.jsx)(u.FormTitle, {
            className: M.marginBottom8,
            children: l
          }), (0, n.jsx)(u.SingleSelect, {
            placeholder: l,
            value: "".concat(t.expire_behavior),
            options: [{
              value: "0",
              label: x.default.Messages.REMOVE_SYNCED_ROLE
            }, {
              value: "1",
              label: x.default.Messages.KICK_FROM_SERVER
            }],
            isDisabled: t.syncing,
            onChange: e => a(parseInt(e))
          })]
        }), (0, n.jsxs)(_.default.Child, {
          basis: "50%",
          children: [(0, n.jsx)(u.FormTitle, {
            className: M.marginBottom8,
            children: x.default.Messages.FORM_LABEL_EXPIRE_GRACE_PERIOD
          }), (0, n.jsx)(u.SingleSelect, {
            placeholder: x.default.Messages.FORM_LABEL_EXPIRE_GRACE_PERIOD,
            maxVisibleItems: 5,
            value: "".concat(t.expire_grace_period),
            options: [1, 3, 7, 14, 30].map(e => ({
              value: "".concat(e),
              label: x.default.Messages.N_DAYS.format({
                days: e
              })
            })),
            onChange: e => s(parseInt(e)),
            isDisabled: t.syncing
          })]
        })]
      })
    }({
      integration: r,
      labelText: W,
      onBehaviorChange: function(e) {
        c.default.updateIntegration({
          expireBehavior: e
        })
      },
      onGracePeriodChange: function(e) {
        c.default.updateIntegration({
          expireGracePeriod: e
        })
      }
    }), s.type === C.PlatformTypes.TWITCH ? function(e) {
      let {
        integration: t,
        emojis: l,
        onToggle: a
      } = e;
      return (0, n.jsxs)(_.default, {
        direction: _.default.Direction.VERTICAL,
        children: [(0, n.jsx)(u.Checkbox, {
          type: u.Checkbox.Types.INVERTED,
          className: i()(M.marginTop20, M.marginBottom8),
          value: t.enable_emoticons,
          disabled: t.syncing,
          onChange: e => {
            let {
              currentTarget: t
            } = e;
            return a(t.checked)
          },
          children: (0, n.jsx)(u.FormText, {
            children: x.default.Messages.ENABLE_TWITCH_EMOJI_SYNC
          })
        }), (0, n.jsx)(_.default, {
          wrap: _.default.Wrap.WRAP,
          className: R.__invalid_twitchEmojis,
          children: l.map((e, t) => (0, n.jsx)(u.Tooltip, {
            text: e.name,
            children: t => (0, n.jsx)("img", {
              alt: x.default.Messages.IMG_ALT_EMOJI.format({
                name: e.name
              }),
              draggable: !1,
              className: i()(R.emoji, "emoji", "jumboable"),
              src: p.default.getEmojiURL({
                id: e.id,
                animated: e.animated,
                size: 28
              }),
              ...t
            }, e.name)
          }, t))
        })]
      })
    }({
      integration: r,
      emojis: Z,
      onToggle: function(e) {
        c.default.updateIntegration({
          enableEmoticons: e
        })
      }
    }) : null, (0, n.jsx)(u.FormDivider, {
      className: R.bottomDivider
    }), (0, n.jsx)(_.default, {
      children: (0, n.jsx)(u.Button, {
        className: R.disableButton,
        size: u.Button.Sizes.SMALL,
        color: u.Button.Colors.RED,
        look: u.Button.Looks.LINK,
        onClick: k,
        children: x.default.Messages.INTEGRATIONS_DISABLE
      })
    })]
  })), (0, n.jsx)(u.Card, {
    editable: !0,
    className: R.card,
    children: (0, n.jsxs)(_.default, {
      direction: _.default.Direction.VERTICAL,
      children: [s.enabled ? (0, n.jsx)(u.Clickable, {
        className: R.expandableHeader,
        "aria-expanded": L && !D,
        onClick: v,
        children: q
      }) : q, X]
    })
  })
}