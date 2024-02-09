"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("866227"),
  i = n.n(s),
  r = n("77078"),
  u = n("656913"),
  o = n("694187"),
  d = n("151642"),
  c = n("29846"),
  f = n("398604"),
  E = n("189443"),
  h = n("822516"),
  v = n("93550"),
  I = n("953143"),
  _ = n("745049"),
  C = n("75015"),
  m = n("837979"),
  g = n("782340"),
  T = n("505376");

function p(e) {
  let {
    editBroadcastInfoData: t
  } = e, {
    broadcastInfo: n,
    broadcastToDirectoryChannels: a,
    setBroadcastToDirectoryChannels: s,
    canEveryoneRoleViewEvent: i
  } = t;
  return n.can_broadcast ? (0, l.jsxs)(r.FormItem, {
    title: g.default.Messages.CREATE_EVENT_PRIVACY_LABEL,
    className: T.formItem,
    children: [(0, l.jsx)(r.Tooltip, {
      text: (0, l.jsx)(r.Text, {
        className: T.broadcastInfoTooltip,
        variant: "text-sm/normal",
        children: g.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
      }),
      "aria-label": g.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
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
            children: g.default.Messages.HUB_EVENTS_SHARE_TITLE
          })
        })
      })
    }), (0, l.jsx)(r.Text, {
      className: T.broadcastInfoDescription,
      variant: "text-xs/normal",
      color: "header-secondary",
      children: g.default.Messages.HUB_EVENTS_SHARE_DESCRIPTION
    })]
  }) : null
}

function N(e) {
  let {
    guildEvent: t,
    guildEventId: s,
    guildId: N,
    editBroadcastInfoData: x,
    error: S,
    validationErrorMessage: A,
    onChange: L,
    canSetFocus: y = !1
  } = e, {
    entityType: R,
    channelId: M,
    description: j,
    name: D,
    image: G,
    scheduledEndTime: O,
    scheduledStartTime: V,
    recurrenceRule: U
  } = t, b = (0, d.useStageBlockedUsersCount)(M), P = null != t && (0, f.isGuildScheduledEventActive)(t), w = a.useMemo(() => {
    let e = (0, h.getScheduleFromEventData)(t);
    return null != e ? e : {
      startDate: i(V)
    }
  }, [t, V]), [F, k] = a.useState(null), B = a.useRef(null);
  a.useEffect(() => {
    if (y) {
      var e;
      null === (e = B.current) || void 0 === e || e.focus()
    }
  }, [y]);
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
          uploadType: C.UploadTypes.SCHEDULED_EVENT_IMAGE,
          allowSkip: !0,
          ...n
        })
      })
    };
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: T.blockedUsersContainer,
      children: null != M && !P && b > 0 && (0, l.jsx)(c.BlockedUsersNotice, {
        channelId: M
      })
    }), (0, l.jsxs)("div", {
      className: T.form,
      children: [(0, l.jsxs)(r.FormItem, {
        title: g.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
        className: T.topicFormItem,
        required: !0,
        children: [(0, l.jsx)(r.TextInput, {
          className: T.textInput,
          onChange: e => {
            L({
              name: e
            })
          },
          placeholder: g.default.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
          maxLength: m.MAX_STAGE_TOPIC_LENGTH,
          value: D,
          autoComplete: "off",
          inputRef: B
        }), null != S ? (0, l.jsx)(r.Text, {
          color: "text-danger",
          variant: "text-xs/normal",
          className: T.warning,
          children: S.getAnyErrorMessage()
        }) : null]
      }), (0, l.jsx)(I.default, {
        className: T.formItem,
        onScheduleChange: e => {
          let {
            startDate: t,
            endDate: n
          } = e, l = {
            scheduledStartTime: null == t ? void 0 : t.toISOString(),
            scheduledEndTime: null == n ? void 0 : n.toISOString()
          };
          null != t && null != O && (null == n ? void 0 : n.isBefore(t)) && (l.scheduledEndTime = t.add(1, "hour").toISOString()), null != t && null != F && (l.recurrenceRule = (0, h.recurrenceOptionToRecurrenceRule)(F, t)), L(l)
        },
        onRecurrenceChange: e => {
          let t = w.startDate;
          if (null == t) return;
          let n = (0, h.recurrenceOptionToRecurrenceRule)(e, t);
          L({
            recurrenceRule: n
          }), k(e)
        },
        schedule: w,
        recurrenceRule: U,
        showEndDate: R === _.GuildScheduledEventEntityTypes.EXTERNAL,
        requireEndDate: R === _.GuildScheduledEventEntityTypes.EXTERNAL,
        disableStartDateTime: P,
        guildId: N
      }), null != A ? (0, l.jsx)(r.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: T.warning,
        children: A
      }) : null, (0, l.jsx)(r.FormItem, {
        title: g.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
        className: T.formItem,
        children: (0, l.jsx)(r.TextArea, {
          className: T.descriptionInput,
          placeholder: g.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
          value: j,
          onChange: e => {
            L({
              description: e
            })
          },
          maxLength: _.GUILD_EVENT_MAX_DESCRIPTION_LENGTH,
          autosize: !0
        })
      }), (0, l.jsxs)(r.FormItem, {
        title: g.default.Messages.GUILD_EVENT_IMAGE,
        className: T.formItem,
        children: [(0, l.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: T.addImageHint,
          children: g.default.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
        }), null != G ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(u.default, {
            className: T.imagePreview,
            iconWrapperClassName: T.imagePreviewInner,
            image: G,
            makeURL: e => {
              if (null == e) return null;
              if (null != N) {
                var n;
                return null !== (n = (0, v.default)((0, E.convertToFakeGuildEvent)(t, N, s))) && void 0 !== n ? n : null
              }
            },
            onChange: z,
            hint: g.default.Messages.GUILD_EVENT_CHANGE_IMAGE,
            showRemoveButton: !1,
            enabled: !0
          }), (0, l.jsx)(r.Button, {
            size: r.Button.Sizes.SMALL,
            onClick: () => H(null),
            children: g.default.Messages.GUILD_EVENT_REMOVE_IMAGE
          })]
        }) : (0, l.jsxs)(r.Button, {
          size: r.Button.Sizes.SMALL,
          children: [g.default.Messages.GUILD_EVENT_ADD_IMAGE, (0, l.jsx)(o.default, {
            onChange: z
          })]
        })]
      }), (0, l.jsx)(p, {
        editBroadcastInfoData: x
      })]
    })]
  })
}