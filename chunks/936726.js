t.d(n, {
  Z: function() {
    return Z
  }
}), t(47120), t(653041);
var i = t(735250),
  l = t(470079),
  s = t(120356),
  a = t.n(s),
  r = t(544891),
  o = t(846519),
  c = t(481060),
  d = t(668781),
  u = t(139387),
  I = t(308063),
  N = t(208567),
  E = t(598077),
  T = t(285952),
  m = t(259580),
  _ = t(768581),
  h = t(572004),
  g = t(709054),
  O = t(51144),
  A = t(486199),
  x = t(981631),
  C = t(689938),
  S = t(690352);
let p = e => {
  if (null == e) return null;
  let n = new E.Z(e);
  return O.ZP.getUserTag(n)
};

function R(e, n) {
  return null != n && /^data:/.test(n) ? n : (0, _.ov)({
    id: e.id,
    avatar: n,
    discriminator: x.fo$
  })
}

function Z(e) {
  let {
    id: n,
    webhook: t,
    editedWebhook: s,
    channelOptions: E,
    isExpanded: _,
    isNew: O,
    errors: Z,
    onToggleExpand: f
  } = e, [M, L] = l.useState(!1), [v] = l.useState(new o.V7);
  l.useEffect(() => () => v.stop(), [v]);
  let j = l.useMemo(() => R(t, t.avatar), [t]),
    b = l.useCallback(() => {
      let e = "".concat((0, r.K0)(!1)).concat(x.ANM.WEBHOOK_INTEGRATION(t.id, t.token));
      (0, h.JG)(e)
    }, [t]),
    P = l.useCallback(() => {
      (0, c.openModal)(e => (0, i.jsx)(c.ConfirmModal, {
        ...e,
        header: C.Z.Messages.WEBHOOK_DELETE_TITLE.format({
          name: t.name
        }),
        confirmText: C.Z.Messages.WEBHOOK_DELETE,
        cancelText: C.Z.Messages.WEBHOOK_CANCEL,
        onConfirm: () => {
          I.Z.delete(t.guild_id, t.id).catch(e => {
            let {
              status: n
            } = e;
            429 === n ? d.Z.show({
              title: C.Z.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
              body: C.Z.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK_RATE_LIMIT
            }) : d.Z.show({
              title: C.Z.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
              body: C.Z.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
            })
          })
        },
        children: (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          children: C.Z.Messages.WEBHOOK_DELETE_BODY.format({
            name: t.name
          })
        })
      }))
    }, [t.guild_id, t.id, t.name]),
    D = [];
  null != t.user ? D.push({
    icon: c.ClockIcon,
    text: C.Z.Messages.INTEGRATION_CREATED_USER_DATE.format({
      user: p(t.user),
      timestamp: g.default.extractTimestamp(t.id)
    })
  }) : D.push({
    icon: c.ClockIcon,
    text: C.Z.Messages.INTEGRATION_CREATED_DATE.format({
      timestamp: g.default.extractTimestamp(t.id)
    })
  });
  let B = null;
  return _ && null != s && (B = (0, i.jsxs)("div", {
    className: S.body,
    children: [(0, i.jsx)(c.FormDivider, {
      className: S.topDivider
    }), (0, i.jsxs)(T.Z, {
      children: [(0, i.jsx)(T.Z.Child, {
        shrink: 1,
        grow: 0,
        children: (0, i.jsxs)(T.Z, {
          className: S.avatarWrapper,
          direction: T.Z.Direction.VERTICAL,
          children: [(0, i.jsx)(N.Z, {
            image: s.avatar,
            onChange: e => {
              u.Z.updateWebhook({
                avatar: e
              })
            },
            makeURL: e => R(t, e),
            imageClassName: S.avatarUploaderInner,
            showIcon: !0
          }), null != Z.avatar && "" !== Z.avatar ? (0, i.jsx)(c.Text, {
            color: "text-danger",
            variant: "text-sm/normal",
            children: Z.avatar
          }) : null]
        })
      }), (0, i.jsxs)(T.Z, {
        direction: T.Z.Direction.VERTICAL,
        children: [(0, i.jsxs)(T.Z, {
          children: [(0, i.jsx)(T.Z.Child, {
            basis: "50%",
            children: (0, i.jsx)(c.FormItem, {
              title: C.Z.Messages.WEBHOOK_FORM_NAME,
              children: (0, i.jsx)(c.TextInput, {
                value: s.name,
                onChange: e => {
                  u.Z.updateWebhook({
                    name: e
                  })
                },
                maxLength: 80,
                error: Z.name
              })
            })
          }), (0, i.jsx)(T.Z.Child, {
            basis: "50%",
            children: (0, i.jsx)(c.FormItem, {
              title: C.Z.Messages.CHANNEL,
              children: (0, i.jsx)(c.SearchableSelect, {
                value: s.channel_id,
                options: E,
                onChange: e => {
                  u.Z.updateWebhook({
                    channelId: e
                  })
                },
                placeholder: C.Z.Messages.CHANNEL_SELECT
              })
            })
          })]
        }), (0, i.jsx)(c.FormDivider, {
          className: S.bottomDivider
        }), (0, i.jsxs)(T.Z, {
          children: [(0, i.jsx)(c.Tooltip, {
            text: C.Z.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL,
            forceOpen: M,
            color: c.TooltipColors.GREEN,
            disableTooltipPointerEvents: !0,
            children: e => {
              let {
                onClick: n,
                onMouseEnter: l,
                onMouseLeave: s,
                onBlur: a,
                onFocus: r,
                ...o
              } = e;
              return (0, i.jsx)(c.Button, {
                ...o,
                "aria-label": "",
                onClick: () => {
                  null == n || n(), L(!0), c.AccessibilityAnnouncer.announce(C.Z.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL), v.start(1e3, () => L(!1)), b()
                },
                size: c.Button.Sizes.SMALL,
                color: c.Button.Colors.PRIMARY,
                look: c.Button.Looks.FILLED,
                className: S.copyButton,
                disabled: null == t.token || "" === t.token,
                children: C.Z.Messages.INTEGRATIONS_WEBHOOK_COPY_URL
              })
            }
          }), (0, i.jsx)(c.Button, {
            onClick: P,
            size: c.Button.Sizes.SMALL,
            color: c.Button.Colors.RED,
            look: c.Button.Looks.LINK,
            children: C.Z.Messages.INTEGRATIONS_WEBHOOK_DELETE
          })]
        })]
      })]
    })]
  })), (0, i.jsx)(c.Card, {
    editable: !0,
    id: n,
    className: a()(S.card, O ? S.pulse : null),
    children: (0, i.jsxs)(T.Z, {
      direction: T.Z.Direction.VERTICAL,
      children: [(0, i.jsx)(c.Clickable, {
        className: S.header,
        "aria-expanded": _,
        onClick: f,
        children: (0, i.jsxs)(T.Z, {
          align: T.Z.Align.CENTER,
          children: [(0, i.jsx)(A.Z, {
            name: t.name,
            imageSrc: j,
            details: D
          }), (0, i.jsx)(m.Z, {
            className: S.expandIcon,
            expanded: _,
            "aria-hidden": !0
          })]
        })
      }), B]
    })
  })
}