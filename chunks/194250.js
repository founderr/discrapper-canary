"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("866227"),
  i = n.n(s),
  r = n("77078"),
  u = n("656913"),
  d = n("694187"),
  o = n("151642"),
  c = n("29846"),
  E = n("398604"),
  f = n("189443"),
  h = n("822516"),
  v = n("93550"),
  _ = n("953143"),
  I = n("745049"),
  m = n("75015"),
  T = n("782340"),
  N = n("777181");

function g(e) {
  let {
    editBroadcastInfoData: t
  } = e, {
    broadcastInfo: n,
    broadcastToDirectoryChannels: a,
    setBroadcastToDirectoryChannels: s,
    canEveryoneRoleViewEvent: i
  } = t;
  return n.can_broadcast ? (0, l.jsxs)(r.FormItem, {
    title: T.default.Messages.CREATE_EVENT_PRIVACY_LABEL,
    className: N.formItem,
    children: [(0, l.jsx)(r.Tooltip, {
      text: (0, l.jsx)(r.Text, {
        className: N.broadcastInfoTooltip,
        variant: "text-sm/normal",
        children: T.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
      }),
      "aria-label": T.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
      shouldShow: !i,
      children: e => (0, l.jsx)("div", {
        ...e,
        children: (0, l.jsx)(r.Checkbox, {
          type: r.Checkbox.Types.INVERTED,
          disabled: !i,
          value: a,
          onChange: (e, t) => s(t),
          children: (0, l.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "interactive-active",
            children: T.default.Messages.HUB_EVENTS_SHARE_TITLE
          })
        })
      })
    }), (0, l.jsx)(r.Text, {
      className: N.broadcastInfoDescription,
      variant: "text-xs/normal",
      color: "header-secondary",
      children: T.default.Messages.HUB_EVENTS_SHARE_DESCRIPTION
    })]
  }) : null
}

function C(e) {
  let {
    guildEvent: t,
    guildEventId: s,
    guildId: C,
    editBroadcastInfoData: x,
    error: p,
    validationErrorMessage: S,
    onChange: A,
    canSetFocus: L = !1
  } = e, {
    entityType: R,
    channelId: M,
    description: y,
    name: D,
    image: j,
    scheduledEndTime: G,
    scheduledStartTime: V,
    recurrenceRule: O
  } = t, U = (0, o.useStageBlockedUsersCount)(M), b = null != t && (0, E.isGuildScheduledEventActive)(t), P = a.useMemo(() => {
    let e = (0, h.getScheduleFromEventData)(t);
    return null != e ? e : {
      startDate: i(V)
    }
  }, [t, V]), [B, F] = a.useState(() => (0, h.recurrenceRuleToOption)(i(V), O)), w = a.useRef(null);
  a.useEffect(() => {
    if (L) {
      var e;
      null === (e = w.current) || void 0 === e || e.focus()
    }
  }, [L]);
  let k = e => {
      A({
        image: e
      })
    },
    H = (e, t) => {
      if (null == e || void 0 === t) {
        k(null);
        return
      }(0, r.openModalLazy)(async () => {
        let {
          default: a
        } = await n.el("57015").then(n.bind(n, "57015"));
        return n => (0, l.jsx)(a, {
          imgURI: e,
          file: t,
          onCrop: k,
          uploadType: m.UploadTypes.SCHEDULED_EVENT_IMAGE,
          allowSkip: !0,
          ...n
        })
      })
    };
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: N.blockedUsersContainer,
      children: null != M && !b && U > 0 && (0, l.jsx)(c.BlockedUsersNotice, {
        channelId: M
      })
    }), (0, l.jsxs)("div", {
      className: N.form,
      children: [(0, l.jsxs)(r.FormItem, {
        title: T.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
        className: N.topicFormItem,
        required: !0,
        children: [(0, l.jsx)(r.TextInput, {
          className: N.textInput,
          onChange: e => {
            A({
              name: e
            })
          },
          placeholder: T.default.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
          maxLength: I.GUILD_EVENT_MAX_NAME_LENGTH,
          value: D,
          autoComplete: "off",
          inputRef: w
        }), null != p ? (0, l.jsx)(r.Text, {
          color: "text-danger",
          variant: "text-xs/normal",
          className: N.warning,
          children: p.getAnyErrorMessage()
        }) : null]
      }), (0, l.jsx)(_.default, {
        className: N.formItem,
        onScheduleChange: e => {
          let {
            startDate: t,
            endDate: n
          } = e, l = {
            scheduledStartTime: null == t ? void 0 : t.toISOString(),
            scheduledEndTime: null == n ? void 0 : n.toISOString()
          };
          null != t && null != G && (null == n ? void 0 : n.isBefore(t)) && (l.scheduledEndTime = t.add(1, "hour").toISOString()), null != t && null != B && (l.recurrenceRule = (0, h.recurrenceOptionToRecurrenceRule)(B, t)), A(l)
        },
        onRecurrenceChange: e => {
          let t = P.startDate;
          if (null == t) return;
          let n = (0, h.recurrenceOptionToRecurrenceRule)(e, t);
          A({
            recurrenceRule: n
          }), F(e)
        },
        schedule: P,
        recurrenceRule: O,
        showEndDate: R === I.GuildScheduledEventEntityTypes.EXTERNAL,
        requireEndDate: R === I.GuildScheduledEventEntityTypes.EXTERNAL,
        disableStartDateTime: b,
        guildId: C
      }), null != S ? (0, l.jsx)(r.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: N.warning,
        children: S
      }) : null, (0, l.jsx)(r.FormItem, {
        title: T.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
        className: N.formItem,
        children: (0, l.jsx)(r.TextArea, {
          className: N.descriptionInput,
          placeholder: T.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
          value: y,
          onChange: e => {
            A({
              description: e
            })
          },
          maxLength: I.GUILD_EVENT_MAX_DESCRIPTION_LENGTH,
          autosize: !0
        })
      }), (0, l.jsxs)(r.FormItem, {
        title: T.default.Messages.GUILD_EVENT_IMAGE,
        className: N.formItem,
        children: [(0, l.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: N.addImageHint,
          children: T.default.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
        }), null != j ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(u.default, {
            className: N.imagePreview,
            iconWrapperClassName: N.imagePreviewInner,
            image: j,
            makeURL: e => {
              if (null == e) return null;
              if (null != C) {
                var n;
                return null !== (n = (0, v.default)((0, f.convertToFakeGuildEvent)(t, C, s))) && void 0 !== n ? n : null
              }
            },
            onChange: H,
            hint: T.default.Messages.GUILD_EVENT_CHANGE_IMAGE,
            showRemoveButton: !1,
            enabled: !0
          }), (0, l.jsx)(r.Button, {
            size: r.Button.Sizes.SMALL,
            onClick: () => k(null),
            children: T.default.Messages.GUILD_EVENT_REMOVE_IMAGE
          })]
        }) : (0, l.jsxs)(r.Button, {
          size: r.Button.Sizes.SMALL,
          children: [T.default.Messages.GUILD_EVENT_ADD_IMAGE, (0, l.jsx)(d.default, {
            onChange: H
          })]
        })]
      }), (0, l.jsx)(g, {
        editBroadcastInfoData: x
      })]
    })]
  })
}