t.d(n, {
  Z: function() {
    return f
  }
}), t(47120), t(315314), t(610138), t(216116), t(78328), t(815648);
var i = t(735250),
  s = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(913527),
  o = t.n(r),
  c = t(442837),
  d = t(481060),
  u = t(139387),
  I = t(726542),
  N = t(339085),
  E = t(434404),
  T = t(598077),
  m = t(430824),
  _ = t(246946),
  h = t(285952),
  O = t(259580),
  g = t(531087),
  A = t(768581),
  C = t(709054),
  S = t(486199),
  x = t(981631),
  p = t(689938),
  R = t(573138),
  Z = t(331651);

function f(e) {
  let n, {
      guild: t,
      integration: l,
      editedIntegration: r,
      isExpanded: f,
      onToggleExpand: M,
      onDisable: L,
      onEnable: v
    } = e,
    j = (0, c.e7)([m.Z], () => m.Z.getRoles(t.id)),
    [b, D] = s.useState(!1),
    P = (0, c.e7)([_.Z], () => _.Z.hidePersonalInformation),
    B = s.useCallback(() => {
      D(!0), v(l)
    }, [l, v]),
    G = s.useCallback(() => {
      !l.syncing && (0, d.openModal)(e => {
        let n = 0 === l.expire_behavior ? p.Z.Messages.REMOVE_SYNCED_ROLE : p.Z.Messages.KICK_FROM_SERVER;
        return (0, i.jsx)(d.ConfirmModal, {
          ...e,
          header: p.Z.Messages.DISABLE_INTEGRATION_TITLE,
          confirmText: n,
          cancelText: p.Z.Messages.CANCEL,
          onConfirm: () => L(l),
          children: (0, i.jsx)(d.Text, {
            variant: "text-md/normal",
            children: l.type === x.ABu.YOUTUBE ? p.Z.Messages.DISABLE_INTEGRATION_YOUTUBE_BODY : p.Z.Messages.DISABLE_INTEGRATION_TWITCH_BODY
          })
        })
      })
    }, [l, L]),
    y = s.useCallback(() => {
      E.Z.syncIntegration(t.id, l.id)
    }, [t.id, l.id]),
    k = s.useCallback(() => {
      null != l.role_id && (E.Z.setSection(x.pNK.ROLES), E.Z.selectRole(l.role_id))
    }, [l.role_id]),
    {
      serviceName: U,
      channelURL: H,
      expireBehaviorLabel: W,
      syncLabel: w,
      subscribersText: F
    } = s.useMemo(() => {
      var e, n, t, i, s;
      let a = null !== (t = null === (n = I.Z.get(l.type)) || void 0 === n ? void 0 : null === (e = n.getPlatformUserUrl) || void 0 === e ? void 0 : e.call(n, l.account)) && void 0 !== t ? t : "";
      switch (l.type) {
        case x.ABu.YOUTUBE:
          return {
            serviceName: p.Z.Messages.INTEGRATIONS_YOUTUBE, expireBehaviorLabel: p.Z.Messages.FORM_LABEL_MEMBERSHIP_EXPIRE_BEHAVIOR, syncLabel: p.Z.Messages.FORM_LABEL_SYNCED_MEMBERS, subscribersText: p.Z.Messages.NUM_MEMBERS.format({
              subscribers: null !== (i = l.subscriber_count) && void 0 !== i ? i : 0
            }), channelURL: a
          };
        case x.ABu.TWITCH:
        default:
          return {
            serviceName: p.Z.Messages.INTEGRATIONS_TWITCH, expireBehaviorLabel: p.Z.Messages.FORM_LABEL_SUB_EXPIRE_BEHAVIOR, syncLabel: p.Z.Messages.FORM_LABEL_SYNCED_SUBS, subscribersText: p.Z.Messages.NUM_SUBSCRIBERS.format({
              subscribers: null !== (s = l.subscriber_count) && void 0 !== s ? s : 0
            }), channelURL: a
          }
      }
    }, [l.account, l.subscriber_count, l.type]),
    {
      roleLink: V,
      syncDescriptionText: K
    } = s.useMemo(() => {
      let e, n;
      let t = null != l.role_id ? j[l.role_id] : null;
      e = null != t ? (0, i.jsx)(d.Anchor, {
        onClick: k,
        children: t.name
      }) : p.Z.Messages.NONE;
      let s = I.Z.get(l.type);
      return {
        roleLink: e,
        syncDescriptionText: n = l.revoked && null != s ? p.Z.Messages.SYNC_REVOKED.format({
          user: l.user,
          platformName: s.name
        }) : p.Z.Messages.INTEGRATIONS_LAST_SYNC.format({
          datetime: o()(l.synced_at).calendar()
        })
      }
    }, [j, k, l.revoked, l.role_id, l.synced_at, l.type, l.user]),
    Y = s.useMemo(() => {
      let e = N.Z.getGuildEmoji(t.id),
        n = Object.values(j).filter(e => null != e.tags && e.tags.integration_id === l.id).map(e => e.id);
      return l.enable_emoticons ? e.sort((e, n) => e.name.localeCompare(n.name)).filter(e => null != l.role_id && (null == e ? void 0 : e.roles.some(e => n.includes(e)))) : []
    }, [t.id, j, l.enable_emoticons, l.id, l.role_id]);
  if (s.useEffect(() => {
      (null == r ? void 0 : r.id) === l.id && (null == r ? void 0 : r.enabled) === !0 && D(!1)
    }, [r, l.id]), l.enabled && null != l.user) n = [{
    icon: d.ClockIcon,
    text: P ? p.Z.Messages.INTEGRATION_ADDED_DATE.format({
      timestamp: C.default.extractTimestamp(l.id)
    }) : p.Z.Messages.INTEGRATION_ADDED_USER_DATE.format({
      user: null != l.user ? new T.Z(l.user).tag : null,
      timestamp: C.default.extractTimestamp(l.id)
    })
  }];
  else {
    let e = new URL(H);
    n = [{
      text: p.Z.Messages.INTEGRATIONS_ACCOUNT_DESCRIPTION.format({
        serviceName: U,
        accountUrl: H,
        accountUrlText: e.hostname + e.pathname
      })
    }]
  }
  let z = (0, i.jsxs)(h.Z, {
      className: R.header,
      align: h.Z.Align.CENTER,
      children: [(0, i.jsx)(S.Z, {
        name: "".concat(l.name),
        detailsClassName: R.description,
        details: n
      }), l.enabled ? (0, i.jsx)(h.Z.Child, {
        shrink: 0,
        grow: 0,
        children: (0, i.jsx)(O.Z, {
          className: R.expandIcon,
          expanded: f && !b,
          "aria-hidden": !0
        })
      }) : (0, i.jsx)(h.Z.Child, {
        shrink: 0,
        grow: 0,
        children: (0, i.jsx)(d.Button, {
          size: d.Button.Sizes.SMALL,
          color: d.Button.Colors.PRIMARY,
          onClick: B,
          disabled: b,
          children: b ? (0, i.jsx)(g.Z, {
            width: 24,
            height: 24
          }) : (0, i.jsx)(i.Fragment, {
            children: p.Z.Messages.INTEGRATIONS_ENABLE
          })
        })
      })]
    }),
    q = null;
  return f && !b && null != r && (q = (0, i.jsxs)(h.Z, {
    className: R.body,
    direction: h.Z.Direction.VERTICAL,
    children: [(0, i.jsx)(d.FormDivider, {
      className: R.topDivider
    }), function(e) {
      let {
        integration: n,
        labelText: t,
        subscribersText: s,
        descriptionText: l,
        roleLink: a,
        onSync: r
      } = e;
      return (0, i.jsxs)(h.Z, {
        children: [(0, i.jsxs)(h.Z.Child, {
          basis: "50%",
          children: [(0, i.jsx)(d.FormTitle, {
            className: Z.marginBottom8,
            children: p.Z.Messages.FORM_LABEL_SYNCED_ROLE
          }), (0, i.jsx)(d.Text, {
            className: R.syncedRole,
            color: "header-primary",
            variant: "text-sm/normal",
            children: a
          })]
        }), (0, i.jsxs)(h.Z.Child, {
          basis: "50%",
          children: [(0, i.jsx)(d.FormTitle, {
            className: Z.marginBottom8,
            children: t
          }), (0, i.jsxs)(h.Z, {
            justify: h.Z.Justify.BETWEEN,
            children: [(0, i.jsxs)(h.Z, {
              direction: h.Z.Direction.VERTICAL,
              children: [(0, i.jsx)(d.Text, {
                color: "header-primary",
                variant: "text-sm/normal",
                children: s
              }), (0, i.jsx)(d.Text, {
                color: "header-secondary",
                variant: "text-xs/normal",
                children: l
              })]
            }), (0, i.jsx)(d.Button, {
              size: d.Button.Sizes.SMALL,
              look: d.Button.Looks.FILLED,
              color: d.Button.Colors.PRIMARY,
              disabled: n.syncing || n.revoked,
              onClick: r,
              children: n.syncing ? (0, i.jsx)(g.Z, {
                width: 24,
                height: 24
              }) : (0, i.jsx)(i.Fragment, {
                children: p.Z.Messages.SYNC
              })
            })]
          })]
        })]
      })
    }({
      integration: r,
      labelText: w,
      subscribersText: F,
      descriptionText: K,
      roleLink: V,
      onSync: y
    }), (0, i.jsx)(d.FormDivider, {
      className: R.midDivider
    }), function(e) {
      let {
        integration: n,
        labelText: t,
        onBehaviorChange: s,
        onGracePeriodChange: l
      } = e;
      return (0, i.jsxs)(h.Z, {
        children: [(0, i.jsxs)(h.Z.Child, {
          basis: "50%",
          children: [(0, i.jsx)(d.FormTitle, {
            className: Z.marginBottom8,
            children: t
          }), (0, i.jsx)(d.SingleSelect, {
            placeholder: t,
            value: "".concat(n.expire_behavior),
            options: [{
              value: "0",
              label: p.Z.Messages.REMOVE_SYNCED_ROLE
            }, {
              value: "1",
              label: p.Z.Messages.KICK_FROM_SERVER
            }],
            isDisabled: n.syncing,
            onChange: e => s(parseInt(e))
          })]
        }), (0, i.jsxs)(h.Z.Child, {
          basis: "50%",
          children: [(0, i.jsx)(d.FormTitle, {
            className: Z.marginBottom8,
            children: p.Z.Messages.FORM_LABEL_EXPIRE_GRACE_PERIOD
          }), (0, i.jsx)(d.SingleSelect, {
            placeholder: p.Z.Messages.FORM_LABEL_EXPIRE_GRACE_PERIOD,
            maxVisibleItems: 5,
            value: "".concat(n.expire_grace_period),
            options: [1, 3, 7, 14, 30].map(e => ({
              value: "".concat(e),
              label: p.Z.Messages.N_DAYS.format({
                days: e
              })
            })),
            onChange: e => l(parseInt(e)),
            isDisabled: n.syncing
          })]
        })]
      })
    }({
      integration: r,
      labelText: W,
      onBehaviorChange: function(e) {
        u.Z.updateIntegration({
          expireBehavior: e
        })
      },
      onGracePeriodChange: function(e) {
        u.Z.updateIntegration({
          expireGracePeriod: e
        })
      }
    }), l.type === x.ABu.TWITCH ? function(e) {
      let {
        integration: n,
        emojis: t,
        onToggle: s
      } = e;
      return (0, i.jsxs)(h.Z, {
        direction: h.Z.Direction.VERTICAL,
        children: [(0, i.jsx)(d.Checkbox, {
          type: d.Checkbox.Types.INVERTED,
          className: a()(Z.marginTop20, Z.marginBottom8),
          value: n.enable_emoticons,
          disabled: n.syncing,
          onChange: e => {
            let {
              currentTarget: n
            } = e;
            return s(n.checked)
          },
          children: (0, i.jsx)(d.FormText, {
            children: p.Z.Messages.ENABLE_TWITCH_EMOJI_SYNC
          })
        }), (0, i.jsx)(h.Z, {
          wrap: h.Z.Wrap.WRAP,
          className: R.__invalid_twitchEmojis,
          children: t.map((e, n) => (0, i.jsx)(d.Tooltip, {
            text: e.name,
            children: n => (0, i.jsx)("img", {
              alt: p.Z.Messages.IMG_ALT_EMOJI.format({
                name: e.name
              }),
              draggable: !1,
              className: a()(R.emoji, "emoji", "jumboable"),
              src: A.ZP.getEmojiURL({
                id: e.id,
                animated: e.animated,
                size: 28
              }),
              ...n
            }, e.name)
          }, n))
        })]
      })
    }({
      integration: r,
      emojis: Y,
      onToggle: function(e) {
        u.Z.updateIntegration({
          enableEmoticons: e
        })
      }
    }) : null, (0, i.jsx)(d.FormDivider, {
      className: R.bottomDivider
    }), (0, i.jsx)(h.Z, {
      children: (0, i.jsx)(d.Button, {
        className: R.disableButton,
        size: d.Button.Sizes.SMALL,
        color: d.Button.Colors.RED,
        look: d.Button.Looks.LINK,
        onClick: G,
        children: p.Z.Messages.INTEGRATIONS_DISABLE
      })
    })]
  })), (0, i.jsx)(d.Card, {
    editable: !0,
    className: R.card,
    children: (0, i.jsxs)(h.Z, {
      direction: h.Z.Direction.VERTICAL,
      children: [l.enabled ? (0, i.jsx)(d.Clickable, {
        className: R.expandableHeader,
        "aria-expanded": f && !b,
        onClick: M,
        children: z
      }) : z, q]
    })
  })
}