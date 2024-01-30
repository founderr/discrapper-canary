"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  i = n("866227"),
  s = n.n(i),
  r = n("77078"),
  u = n("656913"),
  d = n("694187"),
  o = n("151642"),
  c = n("29846"),
  f = n("398604"),
  E = n("189443"),
  I = n("822516"),
  _ = n("93550"),
  h = n("953143"),
  T = n("745049"),
  v = n("75015"),
  N = n("837979"),
  m = n("782340"),
  S = n("505376");

function g(e) {
  let {
    editBroadcastInfoData: t
  } = e, {
    broadcastInfo: n,
    broadcastToDirectoryChannels: a,
    setBroadcastToDirectoryChannels: i,
    canEveryoneRoleViewEvent: s
  } = t;
  return n.can_broadcast ? (0, l.jsxs)(r.FormItem, {
    title: m.default.Messages.CREATE_EVENT_PRIVACY_LABEL,
    className: S.formItem,
    children: [(0, l.jsx)(r.Tooltip, {
      text: (0, l.jsx)(r.Text, {
        className: S.broadcastInfoTooltip,
        variant: "text-sm/normal",
        children: m.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
      }),
      "aria-label": m.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
      shouldShow: !s,
      children: e => (0, l.jsx)("div", {
        ...e,
        children: (0, l.jsx)(r.Checkbox, {
          type: r.Checkbox.Types.INVERTED,
          disabled: !s,
          value: a,
          onChange: (e, t) => i(t),
          children: (0, l.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "interactive-active",
            children: m.default.Messages.HUB_EVENTS_SHARE_TITLE
          })
        })
      })
    }), (0, l.jsx)(r.Text, {
      className: S.broadcastInfoDescription,
      variant: "text-xs/normal",
      color: "header-secondary",
      children: m.default.Messages.HUB_EVENTS_SHARE_DESCRIPTION
    })]
  }) : null
}

function C(e) {
  let {
    guildEvent: t,
    guildEventId: i,
    guildId: C,
    editBroadcastInfoData: p,
    error: x,
    validationErrorMessage: L,
    onChange: O,
    canSetFocus: A = !1
  } = e, {
    entityType: R,
    channelId: M,
    description: y,
    name: D,
    image: U,
    scheduledEndTime: V,
    scheduledStartTime: P,
    recurrenceRule: j
  } = t, G = (0, o.useStageBlockedUsersCount)(M), F = null != t && (0, f.isGuildScheduledEventActive)(t), b = a.useMemo(() => {
    let e = (0, I.getScheduleFromEventData)(t);
    return null != e ? e : {
      startDate: s(P)
    }
  }, [t, P]), [H, B] = a.useState(null), w = a.useRef(null);
  a.useEffect(() => {
    if (A) {
      var e;
      null === (e = w.current) || void 0 === e || e.focus()
    }
  }, [A]);
  let k = e => {
      O({
        image: e
      })
    },
    z = (e, t) => {
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
          uploadType: v.UploadTypes.SCHEDULED_EVENT_IMAGE,
          allowSkip: !0,
          ...n
        })
      })
    };
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: S.blockedUsersContainer,
      children: null != M && !F && G > 0 && (0, l.jsx)(c.BlockedUsersNotice, {
        channelId: M
      })
    }), (0, l.jsxs)("div", {
      className: S.form,
      children: [(0, l.jsxs)(r.FormItem, {
        title: m.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
        className: S.topicFormItem,
        required: !0,
        children: [(0, l.jsx)(r.TextInput, {
          className: S.textInput,
          onChange: e => {
            O({
              name: e
            })
          },
          placeholder: m.default.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
          maxLength: N.MAX_STAGE_TOPIC_LENGTH,
          value: D,
          autoComplete: "off",
          inputRef: w
        }), null != x ? (0, l.jsx)(r.Text, {
          color: "text-danger",
          variant: "text-xs/normal",
          className: S.warning,
          children: x.getAnyErrorMessage()
        }) : null]
      }), (0, l.jsx)(h.default, {
        className: S.formItem,
        onScheduleChange: e => {
          let {
            startDate: t,
            endDate: n
          } = e, l = {
            scheduledStartTime: null == t ? void 0 : t.toISOString(),
            scheduledEndTime: null == n ? void 0 : n.toISOString()
          };
          null != t && null != V && (null == n ? void 0 : n.isBefore(t)) && (l.scheduledEndTime = t.add(1, "hour").toISOString()), null != t && null != H && (l.recurrenceRule = (0, I.recurrenceOptionToRecurrenceRule)(H, t)), O(l)
        },
        onRecurrenceChange: e => {
          let t = b.startDate;
          if (null == t) return;
          let n = (0, I.recurrenceOptionToRecurrenceRule)(e, t);
          O({
            recurrenceRule: n
          }), B(e)
        },
        schedule: b,
        recurrenceRule: j,
        showEndDate: R === T.GuildScheduledEventEntityTypes.EXTERNAL,
        requireEndDate: R === T.GuildScheduledEventEntityTypes.EXTERNAL,
        disableStartDateTime: F,
        guildId: C
      }), null != L ? (0, l.jsx)(r.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: S.warning,
        children: L
      }) : null, (0, l.jsx)(r.FormItem, {
        title: m.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
        className: S.formItem,
        children: (0, l.jsx)(r.TextArea, {
          className: S.descriptionInput,
          placeholder: m.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
          value: y,
          onChange: e => {
            O({
              description: e
            })
          },
          maxLength: T.GUILD_EVENT_MAX_DESCRIPTION_LENGTH,
          autosize: !0
        })
      }), (0, l.jsxs)(r.FormItem, {
        title: m.default.Messages.GUILD_EVENT_IMAGE,
        className: S.formItem,
        children: [(0, l.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: S.addImageHint,
          children: m.default.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
        }), null != U ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(u.default, {
            className: S.imagePreview,
            iconWrapperClassName: S.imagePreviewInner,
            image: U,
            makeURL: e => {
              if (null == e) return null;
              if (null != C) {
                var n;
                return null !== (n = (0, _.default)((0, E.convertToFakeGuildEvent)(t, C, i))) && void 0 !== n ? n : null
              }
            },
            onChange: z,
            hint: m.default.Messages.GUILD_EVENT_CHANGE_IMAGE,
            showRemoveButton: !1,
            enabled: !0
          }), (0, l.jsx)(r.Button, {
            size: r.Button.Sizes.SMALL,
            onClick: () => k(null),
            children: m.default.Messages.GUILD_EVENT_REMOVE_IMAGE
          })]
        }) : (0, l.jsxs)(r.Button, {
          size: r.Button.Sizes.SMALL,
          children: [m.default.Messages.GUILD_EVENT_ADD_IMAGE, (0, l.jsx)(d.default, {
            onChange: z
          })]
        })]
      }), (0, l.jsx)(g, {
        editBroadcastInfoData: p
      })]
    })]
  })
}