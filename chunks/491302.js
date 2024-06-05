"use strict";
l.r(t), l.d(t, {
  default: function() {
    return N
  }
}), l("653041");
var n = l("735250"),
  a = l("470079"),
  s = l("481060"),
  i = l("668781"),
  r = l("139387"),
  o = l("308063"),
  d = l("285952"),
  u = l("259580"),
  c = l("316949"),
  f = l("768581"),
  I = l("486199"),
  m = l("981631"),
  T = l("689938"),
  E = l("615635");

function N(e) {
  let {
    webhook: t,
    editedWebhook: l,
    channelOptions: N,
    isExpanded: _,
    errors: S,
    onToggleExpand: h
  } = e, g = a.useMemo(() => {
    var e, l;
    return e = t, null != (l = t.avatar) && /^data:/.test(l) ? l : (0, f.getUserAvatarURL)({
      id: e.id,
      avatar: l,
      discriminator: m.NON_USER_BOT_DISCRIMINATOR
    })
  }, [t]), p = a.useCallback(() => {
    (0, s.openModal)(e => (0, n.jsx)(s.ConfirmModal, {
      ...e,
      header: T.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE_TITLE.format({
        name: t.name
      }),
      confirmText: T.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE,
      cancelText: T.default.Messages.CANCEL,
      onConfirm: () => {
        o.default.delete(t.guild_id, t.id).catch(() => {
          i.default.show({
            title: T.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_ERROR_DELETING,
            body: T.default.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
          })
        })
      },
      children: (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        children: T.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE_BODY
      })
    }))
  }, [t.guild_id, t.id, t.name]), O = [];
  null != t.source_channel && null != t.source_guild && (O.push({
    icon: c.default,
    text: t.source_channel.name
  }), O.push({
    text: (0, n.jsx)("span", {
      className: E.guildSource,
      children: T.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_GUILD_SOURCE.format({
        guildHook: () => (0, n.jsx)("span", {
          className: E.sourceName,
          children: t.source_guild.name
        }, t.id)
      })
    }, "guild-source")
  }));
  let A = null;
  return _ && null != l && (A = (0, n.jsxs)("div", {
    className: E.body,
    children: [(0, n.jsx)(s.FormDivider, {
      className: E.topDivider
    }), (0, n.jsx)(d.default, {
      children: (0, n.jsxs)(d.default, {
        direction: d.default.Direction.VERTICAL,
        children: [(0, n.jsxs)(d.default, {
          children: [(0, n.jsx)(d.default.Child, {
            basis: "50%",
            children: (0, n.jsx)(s.FormItem, {
              title: T.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_NAME,
              children: (0, n.jsx)(s.TextInput, {
                value: l.name,
                onChange: e => {
                  r.default.updateWebhook({
                    name: e
                  })
                },
                maxLength: 80,
                error: S.name
              })
            })
          }), (0, n.jsx)(d.default.Child, {
            basis: "50%",
            children: (0, n.jsx)(s.FormItem, {
              title: T.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DEST_CHANNEL,
              children: (0, n.jsx)(s.SingleSelect, {
                value: l.channel_id,
                options: N,
                onChange: e => {
                  r.default.updateWebhook({
                    channelId: e
                  })
                }
              })
            })
          })]
        }), (0, n.jsx)(s.FormDivider, {
          className: E.bottomDivider
        }), (0, n.jsx)(d.default, {
          children: (0, n.jsx)(s.Button, {
            onClick: p,
            size: s.Button.Sizes.SMALL,
            color: s.Button.Colors.RED,
            look: s.Button.Looks.LINK,
            className: E.removeButton,
            children: T.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE
          })
        })]
      })
    })]
  })), (0, n.jsx)(s.Card, {
    editable: !0,
    className: E.card,
    children: (0, n.jsxs)(d.default, {
      direction: d.default.Direction.VERTICAL,
      children: [(0, n.jsx)(s.Clickable, {
        className: E.header,
        "aria-expanded": _,
        onClick: h,
        children: (0, n.jsxs)(d.default, {
          align: d.default.Align.CENTER,
          children: [(0, n.jsx)(I.default, {
            name: t.name,
            imageSrc: g,
            detailsClassName: E.__invalid_description,
            details: O
          }), (0, n.jsx)(u.default, {
            className: E.expandIcon,
            expanded: _,
            "aria-hidden": !0
          })]
        })
      }), A]
    })
  })
}