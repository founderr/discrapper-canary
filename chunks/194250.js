"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
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
  T = n("75015"),
  m = n("837979"),
  N = n("782340"),
  g = n("777181");

function C(e) {
  let {
    editBroadcastInfoData: t
  } = e, {
    broadcastInfo: n,
    broadcastToDirectoryChannels: a,
    setBroadcastToDirectoryChannels: s,
    canEveryoneRoleViewEvent: i
  } = t;
  return n.can_broadcast ? (0, l.jsxs)(r.FormItem, {
    title: N.default.Messages.CREATE_EVENT_PRIVACY_LABEL,
    className: g.formItem,
    children: [(0, l.jsx)(r.Tooltip, {
      text: (0, l.jsx)(r.Text, {
        className: g.broadcastInfoTooltip,
        variant: "text-sm/normal",
        children: N.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
      }),
      "aria-label": N.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
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
            children: N.default.Messages.HUB_EVENTS_SHARE_TITLE
          })
        })
      })
    }), (0, l.jsx)(r.Text, {
      className: g.broadcastInfoDescription,
      variant: "text-xs/normal",
      color: "header-secondary",
      children: N.default.Messages.HUB_EVENTS_SHARE_DESCRIPTION
    })]
  }) : null
}

function x(e) {
  let {
    guildEvent: t,
    guildEventId: s,
    guildId: x,
    editBroadcastInfoData: p,
    error: S,
    validationErrorMessage: A,
    onChange: L,
    canSetFocus: R = !1
  } = e, {
    entityType: M,
    channelId: y,
    description: D,
    name: j,
    image: G,
    scheduledEndTime: V,
    scheduledStartTime: O,
    recurrenceRule: U
  } = t, b = (0, o.useStageBlockedUsersCount)(y), P = null != t && (0, E.isGuildScheduledEventActive)(t), B = a.useMemo(() => {
    let e = (0, h.getScheduleFromEventData)(t);
    return null != e ? e : {
      startDate: i(O)
    }
  }, [t, O]), [F, w] = a.useState(() => (0, h.recurrenceRuleToOption)(i(O), U)), k = a.useRef(null);
  a.useEffect(() => {
    if (R) {
      var e;
      null === (e = k.current) || void 0 === e || e.focus()
    }
  }, [R]);
  let H = e => {
      L({
        image: e
      })
    },
    z = (e, t) => {
      if (null == e || void 0 === t) {
        H(null);
        return
      }(0, r.openModalLazy)(async () => {
        let {
          default: a
        } = await n.el("57015").then(n.bind(n, "57015"));
        return n => (0, l.jsx)(a, {
          imgURI: e,
          file: t,
          onCrop: H,
          uploadType: T.UploadTypes.SCHEDULED_EVENT_IMAGE,
          allowSkip: !0,
          ...n
        })
      })
    };
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: g.blockedUsersContainer,
      children: null != y && !P && b > 0 && (0, l.jsx)(c.BlockedUsersNotice, {
        channelId: y
      })
    }), (0, l.jsxs)("div", {
      className: g.form,
      children: [(0, l.jsxs)(r.FormItem, {
        title: N.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
        className: g.topicFormItem,
        required: !0,
        children: [(0, l.jsx)(r.TextInput, {
          className: g.textInput,
          onChange: e => {
            L({
              name: e
            })
          },
          placeholder: N.default.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
          maxLength: m.MAX_STAGE_TOPIC_LENGTH,
          value: j,
          autoComplete: "off",
          inputRef: k
        }), null != S ? (0, l.jsx)(r.Text, {
          color: "text-danger",
          variant: "text-xs/normal",
          className: g.warning,
          children: S.getAnyErrorMessage()
        }) : null]
      }), (0, l.jsx)(_.default, {
        className: g.formItem,
        onScheduleChange: e => {
          let {
            startDate: t,
            endDate: n
          } = e, l = {
            scheduledStartTime: null == t ? void 0 : t.toISOString(),
            scheduledEndTime: null == n ? void 0 : n.toISOString()
          };
          null != t && null != V && (null == n ? void 0 : n.isBefore(t)) && (l.scheduledEndTime = t.add(1, "hour").toISOString()), null != t && null != F && (l.recurrenceRule = (0, h.recurrenceOptionToRecurrenceRule)(F, t)), L(l)
        },
        onRecurrenceChange: e => {
          let t = B.startDate;
          if (null == t) return;
          let n = (0, h.recurrenceOptionToRecurrenceRule)(e, t);
          L({
            recurrenceRule: n
          }), w(e)
        },
        schedule: B,
        recurrenceRule: U,
        showEndDate: M === I.GuildScheduledEventEntityTypes.EXTERNAL,
        requireEndDate: M === I.GuildScheduledEventEntityTypes.EXTERNAL,
        disableStartDateTime: P,
        guildId: x
      }), null != A ? (0, l.jsx)(r.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: g.warning,
        children: A
      }) : null, (0, l.jsx)(r.FormItem, {
        title: N.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
        className: g.formItem,
        children: (0, l.jsx)(r.TextArea, {
          className: g.descriptionInput,
          placeholder: N.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
          value: D,
          onChange: e => {
            L({
              description: e
            })
          },
          maxLength: I.GUILD_EVENT_MAX_DESCRIPTION_LENGTH,
          autosize: !0
        })
      }), (0, l.jsxs)(r.FormItem, {
        title: N.default.Messages.GUILD_EVENT_IMAGE,
        className: g.formItem,
        children: [(0, l.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: g.addImageHint,
          children: N.default.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
        }), null != G ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(u.default, {
            className: g.imagePreview,
            iconWrapperClassName: g.imagePreviewInner,
            image: G,
            makeURL: e => {
              if (null == e) return null;
              if (null != x) {
                var n;
                return null !== (n = (0, v.default)((0, f.convertToFakeGuildEvent)(t, x, s))) && void 0 !== n ? n : null
              }
            },
            onChange: z,
            hint: N.default.Messages.GUILD_EVENT_CHANGE_IMAGE,
            showRemoveButton: !1,
            enabled: !0
          }), (0, l.jsx)(r.Button, {
            size: r.Button.Sizes.SMALL,
            onClick: () => H(null),
            children: N.default.Messages.GUILD_EVENT_REMOVE_IMAGE
          })]
        }) : (0, l.jsxs)(r.Button, {
          size: r.Button.Sizes.SMALL,
          children: [N.default.Messages.GUILD_EVENT_ADD_IMAGE, (0, l.jsx)(d.default, {
            onChange: z
          })]
        })]
      }), (0, l.jsx)(C, {
        editBroadcastInfoData: p
      })]
    })]
  })
}