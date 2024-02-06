"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("866227"),
  r = n.n(s),
  i = n("77078"),
  u = n("656913"),
  d = n("694187"),
  o = n("151642"),
  c = n("29846"),
  E = n("398604"),
  f = n("189443"),
  I = n("822516"),
  h = n("93550"),
  _ = n("953143"),
  T = n("745049"),
  N = n("75015"),
  v = n("837979"),
  m = n("782340"),
  g = n("505376");

function S(e) {
  let {
    editBroadcastInfoData: t
  } = e, {
    broadcastInfo: n,
    broadcastToDirectoryChannels: a,
    setBroadcastToDirectoryChannels: s,
    canEveryoneRoleViewEvent: r
  } = t;
  return n.can_broadcast ? (0, l.jsxs)(i.FormItem, {
    title: m.default.Messages.CREATE_EVENT_PRIVACY_LABEL,
    className: g.formItem,
    children: [(0, l.jsx)(i.Tooltip, {
      text: (0, l.jsx)(i.Text, {
        className: g.broadcastInfoTooltip,
        variant: "text-sm/normal",
        children: m.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
      }),
      "aria-label": m.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
      shouldShow: !r,
      children: e => (0, l.jsx)("div", {
        ...e,
        children: (0, l.jsx)(i.Checkbox, {
          type: i.Checkbox.Types.INVERTED,
          disabled: !r,
          value: a,
          onChange: (e, t) => s(t),
          children: (0, l.jsx)(i.Text, {
            variant: "text-md/normal",
            color: "interactive-active",
            children: m.default.Messages.HUB_EVENTS_SHARE_TITLE
          })
        })
      })
    }), (0, l.jsx)(i.Text, {
      className: g.broadcastInfoDescription,
      variant: "text-xs/normal",
      color: "header-secondary",
      children: m.default.Messages.HUB_EVENTS_SHARE_DESCRIPTION
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
    validationErrorMessage: A,
    onChange: L,
    canSetFocus: O = !1
  } = e, {
    entityType: M,
    channelId: R,
    description: D,
    name: y,
    image: j,
    scheduledEndTime: V,
    scheduledStartTime: U,
    recurrenceRule: P
  } = t, G = (0, o.useStageBlockedUsersCount)(R), H = null != t && (0, E.isGuildScheduledEventActive)(t), w = a.useMemo(() => {
    let e = (0, I.getScheduleFromEventData)(t);
    return null != e ? e : {
      startDate: r(U)
    }
  }, [t, U]), [B, F] = a.useState(null), b = a.useRef(null);
  a.useEffect(() => {
    if (O) {
      var e;
      null === (e = b.current) || void 0 === e || e.focus()
    }
  }, [O]);
  let k = e => {
      L({
        image: e
      })
    },
    z = (e, t) => {
      if (null == e || void 0 === t) {
        k(null);
        return
      }(0, i.openModalLazy)(async () => {
        let {
          default: a
        } = await n.el("57015").then(n.bind(n, "57015"));
        return n => (0, l.jsx)(a, {
          imgURI: e,
          file: t,
          onCrop: k,
          uploadType: N.UploadTypes.SCHEDULED_EVENT_IMAGE,
          allowSkip: !0,
          ...n
        })
      })
    };
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: g.blockedUsersContainer,
      children: null != R && !H && G > 0 && (0, l.jsx)(c.BlockedUsersNotice, {
        channelId: R
      })
    }), (0, l.jsxs)("div", {
      className: g.form,
      children: [(0, l.jsxs)(i.FormItem, {
        title: m.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
        className: g.topicFormItem,
        required: !0,
        children: [(0, l.jsx)(i.TextInput, {
          className: g.textInput,
          onChange: e => {
            L({
              name: e
            })
          },
          placeholder: m.default.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
          maxLength: v.MAX_STAGE_TOPIC_LENGTH,
          value: y,
          autoComplete: "off",
          inputRef: b
        }), null != p ? (0, l.jsx)(i.Text, {
          color: "text-danger",
          variant: "text-xs/normal",
          className: g.warning,
          children: p.getAnyErrorMessage()
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
          null != t && null != V && (null == n ? void 0 : n.isBefore(t)) && (l.scheduledEndTime = t.add(1, "hour").toISOString()), null != t && null != B && (l.recurrenceRule = (0, I.recurrenceOptionToRecurrenceRule)(B, t)), L(l)
        },
        onRecurrenceChange: e => {
          let t = w.startDate;
          if (null == t) return;
          let n = (0, I.recurrenceOptionToRecurrenceRule)(e, t);
          L({
            recurrenceRule: n
          }), F(e)
        },
        schedule: w,
        recurrenceRule: P,
        showEndDate: M === T.GuildScheduledEventEntityTypes.EXTERNAL,
        requireEndDate: M === T.GuildScheduledEventEntityTypes.EXTERNAL,
        disableStartDateTime: H,
        guildId: C
      }), null != A ? (0, l.jsx)(i.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: g.warning,
        children: A
      }) : null, (0, l.jsx)(i.FormItem, {
        title: m.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
        className: g.formItem,
        children: (0, l.jsx)(i.TextArea, {
          className: g.descriptionInput,
          placeholder: m.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
          value: D,
          onChange: e => {
            L({
              description: e
            })
          },
          maxLength: T.GUILD_EVENT_MAX_DESCRIPTION_LENGTH,
          autosize: !0
        })
      }), (0, l.jsxs)(i.FormItem, {
        title: m.default.Messages.GUILD_EVENT_IMAGE,
        className: g.formItem,
        children: [(0, l.jsx)(i.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: g.addImageHint,
          children: m.default.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
        }), null != j ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(u.default, {
            className: g.imagePreview,
            iconWrapperClassName: g.imagePreviewInner,
            image: j,
            makeURL: e => {
              if (null == e) return null;
              if (null != C) {
                var n;
                return null !== (n = (0, h.default)((0, f.convertToFakeGuildEvent)(t, C, s))) && void 0 !== n ? n : null
              }
            },
            onChange: z,
            hint: m.default.Messages.GUILD_EVENT_CHANGE_IMAGE,
            showRemoveButton: !1,
            enabled: !0
          }), (0, l.jsx)(i.Button, {
            size: i.Button.Sizes.SMALL,
            onClick: () => k(null),
            children: m.default.Messages.GUILD_EVENT_REMOVE_IMAGE
          })]
        }) : (0, l.jsxs)(i.Button, {
          size: i.Button.Sizes.SMALL,
          children: [m.default.Messages.GUILD_EVENT_ADD_IMAGE, (0, l.jsx)(d.default, {
            onChange: z
          })]
        })]
      }), (0, l.jsx)(S, {
        editBroadcastInfoData: x
      })]
    })]
  })
}