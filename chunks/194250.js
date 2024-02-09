"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("866227"),
  r = n.n(s),
  i = n("77078"),
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
  p = n("782340"),
  g = n("505376");

function T(e) {
  let {
    editBroadcastInfoData: t
  } = e, {
    broadcastInfo: n,
    broadcastToDirectoryChannels: a,
    setBroadcastToDirectoryChannels: s,
    canEveryoneRoleViewEvent: r
  } = t;
  return n.can_broadcast ? (0, l.jsxs)(i.FormItem, {
    title: p.default.Messages.CREATE_EVENT_PRIVACY_LABEL,
    className: g.formItem,
    children: [(0, l.jsx)(i.Tooltip, {
      text: (0, l.jsx)(i.Text, {
        className: g.broadcastInfoTooltip,
        variant: "text-sm/normal",
        children: p.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
      }),
      "aria-label": p.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
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
            children: p.default.Messages.HUB_EVENTS_SHARE_TITLE
          })
        })
      })
    }), (0, l.jsx)(i.Text, {
      className: g.broadcastInfoDescription,
      variant: "text-xs/normal",
      color: "header-secondary",
      children: p.default.Messages.HUB_EVENTS_SHARE_DESCRIPTION
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
    entityType: M,
    channelId: R,
    description: j,
    name: D,
    image: O,
    scheduledEndTime: G,
    scheduledStartTime: V,
    recurrenceRule: U
  } = t, b = (0, d.useStageBlockedUsersCount)(R), P = null != t && (0, f.isGuildScheduledEventActive)(t), w = a.useMemo(() => {
    let e = (0, h.getScheduleFromEventData)(t);
    return null != e ? e : {
      startDate: r(V)
    }
  }, [t, V]), [B, k] = a.useState(null), F = a.useRef(null);
  a.useEffect(() => {
    if (y) {
      var e;
      null === (e = F.current) || void 0 === e || e.focus()
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
      }(0, i.openModalLazy)(async () => {
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
      className: g.blockedUsersContainer,
      children: null != R && !P && b > 0 && (0, l.jsx)(c.BlockedUsersNotice, {
        channelId: R
      })
    }), (0, l.jsxs)("div", {
      className: g.form,
      children: [(0, l.jsxs)(i.FormItem, {
        title: p.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
        className: g.topicFormItem,
        required: !0,
        children: [(0, l.jsx)(i.TextInput, {
          className: g.textInput,
          onChange: e => {
            L({
              name: e
            })
          },
          placeholder: p.default.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
          maxLength: m.MAX_STAGE_TOPIC_LENGTH,
          value: D,
          autoComplete: "off",
          inputRef: F
        }), null != S ? (0, l.jsx)(i.Text, {
          color: "text-danger",
          variant: "text-xs/normal",
          className: g.warning,
          children: S.getAnyErrorMessage()
        }) : null]
      }), (0, l.jsx)(I.default, {
        className: g.formItem,
        onScheduleChange: e => {
          let {
            startDate: t,
            endDate: n
          } = e, l = {
            scheduledStartTime: null == t ? void 0 : t.toISOString(),
            scheduledEndTime: null == n ? void 0 : n.toISOString()
          };
          null != t && null != G && (null == n ? void 0 : n.isBefore(t)) && (l.scheduledEndTime = t.add(1, "hour").toISOString()), null != t && null != B && (l.recurrenceRule = (0, h.recurrenceOptionToRecurrenceRule)(B, t)), L(l)
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
        showEndDate: M === _.GuildScheduledEventEntityTypes.EXTERNAL,
        requireEndDate: M === _.GuildScheduledEventEntityTypes.EXTERNAL,
        disableStartDateTime: P,
        guildId: N
      }), null != A ? (0, l.jsx)(i.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: g.warning,
        children: A
      }) : null, (0, l.jsx)(i.FormItem, {
        title: p.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
        className: g.formItem,
        children: (0, l.jsx)(i.TextArea, {
          className: g.descriptionInput,
          placeholder: p.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
          value: j,
          onChange: e => {
            L({
              description: e
            })
          },
          maxLength: _.GUILD_EVENT_MAX_DESCRIPTION_LENGTH,
          autosize: !0
        })
      }), (0, l.jsxs)(i.FormItem, {
        title: p.default.Messages.GUILD_EVENT_IMAGE,
        className: g.formItem,
        children: [(0, l.jsx)(i.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: g.addImageHint,
          children: p.default.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
        }), null != O ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(u.default, {
            className: g.imagePreview,
            iconWrapperClassName: g.imagePreviewInner,
            image: O,
            makeURL: e => {
              if (null == e) return null;
              if (null != N) {
                var n;
                return null !== (n = (0, v.default)((0, E.convertToFakeGuildEvent)(t, N, s))) && void 0 !== n ? n : null
              }
            },
            onChange: z,
            hint: p.default.Messages.GUILD_EVENT_CHANGE_IMAGE,
            showRemoveButton: !1,
            enabled: !0
          }), (0, l.jsx)(i.Button, {
            size: i.Button.Sizes.SMALL,
            onClick: () => H(null),
            children: p.default.Messages.GUILD_EVENT_REMOVE_IMAGE
          })]
        }) : (0, l.jsxs)(i.Button, {
          size: i.Button.Sizes.SMALL,
          children: [p.default.Messages.GUILD_EVENT_ADD_IMAGE, (0, l.jsx)(o.default, {
            onChange: z
          })]
        })]
      }), (0, l.jsx)(T, {
        editBroadcastInfoData: x
      })]
    })]
  })
}