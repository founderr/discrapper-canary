"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  r = n("866227"),
  i = n.n(r),
  s = n("446674"),
  u = n("77078"),
  o = n("679653"),
  c = n("776863"),
  d = n("822516"),
  f = n("124163"),
  h = n("953143"),
  E = n("269596"),
  g = n("27618"),
  S = n("697218"),
  v = n("228427"),
  C = n("599110"),
  m = n("887143"),
  _ = n("834052"),
  R = n("151642"),
  p = n("29846"),
  N = n("837979"),
  T = n("49111"),
  x = n("745049"),
  L = n("533613"),
  I = n("782340"),
  y = n("529555");

function A(e) {
  let {
    stageChannelsInGuild: t,
    channel: n,
    onSelectChannel: a
  } = e;
  return null == a ? null : (0, l.jsx)(l.Fragment, {
    children: (0, l.jsx)(u.FormItem, {
      title: I.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL + " asdf",
      className: y.channelSelectionFormItem,
      required: !0,
      children: (0, l.jsx)(u.SearchableSelect, {
        value: n.id,
        options: t.map(e => ({
          value: e.id,
          label: (0, o.computeChannelName)(e, S.default, g.default, !0)
        })),
        onChange: e => {
          let n = t.find(t => t.id === e);
          null != n && a(n)
        },
        renderOptionPrefix: () => (0, l.jsx)(v.default, {
          height: 24
        })
      })
    })
  })
}

function D(e) {
  var t, n, r, g, S, v, D, M;
  let {
    channel: j,
    guild: w,
    header: O,
    error: k,
    loading: G,
    onSave: U,
    onEventSave: P,
    onClose: b,
    onSelectChannel: B,
    isEvent: V = !1,
    defaultOptions: Y,
    isSlideReady: H = !0
  } = e, F = a.useMemo(() => _.default.getStageInstanceByChannel(j.id), [j.id]), [W, Z] = a.useState(null !== (n = null !== (t = null == Y ? void 0 : Y.topic) && void 0 !== t ? t : null == F ? void 0 : F.topic) && void 0 !== n ? n : ""), [z, K] = a.useState(null !== (r = null == Y ? void 0 : Y.description) && void 0 !== r ? r : ""), [q] = a.useState(V), [X, J] = a.useState(null !== (g = null == Y ? void 0 : Y.schedule) && void 0 !== g ? g : {
    startDate: (0, d.getInitialEventStartDate)()
  }), [Q, $] = a.useState(q && (null == Y ? void 0 : Y.schedule) != null), ee = (0, m.useCanSendStageStartNotification)(j), et = (0, m.useDefaultSendStartStageNotificationToggle)(j), en = null == F && ee && !q, [el, ea] = a.useState(en && et), er = (0, s.useStateFromStores)([E.default], () => E.default.hasHotspot(L.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE)), ei = x.GuildScheduledEventPrivacyLevel.GUILD_ONLY, [es] = a.useState(null !== (v = null !== (S = null == Y ? void 0 : Y.privacyLevel) && void 0 !== S ? S : null == F ? void 0 : F.privacy_level) && void 0 !== v ? v : ei), [eu, eo] = a.useState(null == Y ? void 0 : Y.recurrenceRule), ec = (0, R.useStageBlockedUsersCount)(j.id), [ed, ef] = a.useState(!1), eh = (0, o.default)(j), eE = (0, c.useChannelsUserCanStartStageIn)(w), eg = null != B, eS = eE.length > 1;
  a.useEffect(() => {
    C.default.track(T.AnalyticEvents.START_STAGE_OPENED, {
      stage_instance_id: null == F ? void 0 : F.id,
      can_start_public_stage: !1,
      guild_id: j.guild_id
    })
  }, []);
  let ev = e => {
    if (e.preventDefault(), es === x.GuildScheduledEventPrivacyLevel.PUBLIC && W.length < 20 && !ed) {
      ef(!0);
      return
    }
    let t = {
      topic: W,
      privacyLevel: es,
      sendStartNotification: el
    };
    if (q) {
      if (!Q) return;
      null == P || P({
        ...t,
        schedule: X,
        description: z,
        entityType: x.GuildScheduledEventEntityTypes.STAGE_INSTANCE
      });
      return
    }
    null == U || U(t)
  };
  let {
    color: eC,
    text: em
  } = (D = F, M = es, q ? {
    color: u.Button.Colors.BRAND,
    text: I.default.Messages.SCHEDULE_EVENT
  } : M === x.GuildScheduledEventPrivacyLevel.PUBLIC && (null == D ? void 0 : D.privacy_level) !== x.GuildScheduledEventPrivacyLevel.PUBLIC ? {
    color: u.Button.Colors.BRAND,
    text: I.default.Messages.CONTINUE
  } : null == D ? {
    color: u.Button.Colors.GREEN,
    text: I.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
  } : {
    color: u.Button.Colors.BRAND,
    text: I.default.Messages.SAVE_CHANGES
  }), e_ = a.useRef(null);
  a.useEffect(() => {
    var e;
    H && (null === (e = e_.current) || void 0 === e || e.focus())
  }, [H]);
  let eR = Q && null != X.startDate && X.startDate >= i();
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(u.ModalContent, {
      className: y.modalContent,
      children: [O, (0, l.jsx)("div", {
        className: y.blockedUsersContainer,
        children: null == F && ec > 0 && (0, l.jsx)(p.BlockedUsersNotice, {
          channelId: j.id
        })
      }), (0, l.jsxs)("form", {
        onSubmit: ev,
        className: y.form,
        children: [(0, l.jsxs)(u.FormItem, {
          title: V ? I.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL : I.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_LABEL,
          className: y.topicFormItem,
          required: !0,
          children: [(0, l.jsx)(u.TextInput, {
            className: y.textInput,
            onChange: e => Z(e),
            placeholder: I.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_PLACEHOLDER,
            maxLength: N.MAX_STAGE_TOPIC_LENGTH,
            value: W,
            autoComplete: "off",
            inputRef: e_
          }), ed && (0, l.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "text-warning",
            className: y.warning,
            children: I.default.Messages.START_STAGE_PUBLIC_SHORT_TOPIC_WARNING
          }), null != k ? (0, l.jsx)(u.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: y.warning,
            children: k.getAnyErrorMessage()
          }) : null]
        }), eg && eS ? (0, l.jsx)(A, {
          stageChannelsInGuild: eE,
          channel: j,
          onSelectChannel: B
        }) : null, q && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(h.default, {
            className: y.formItem,
            onScheduleChange: J,
            onRecurrenceChange: e => {
              let t = X.startDate;
              if (null == t) return;
              let n = (0, d.recurrenceOptionToRecurrenceRule)(e, t);
              eo(n)
            },
            schedule: X,
            recurrenceRule: eu,
            timeSelected: Q,
            onTimeChange: $
          }), null != X.startDate && X.startDate < i() ? (0, l.jsx)(u.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: y.warning,
            children: I.default.Messages.GUILD_EVENT_PAST_START_DATE
          }) : null]
        }), V && (0, l.jsx)(u.FormItem, {
          title: I.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
          className: y.formItem,
          children: (0, l.jsx)(u.TextArea, {
            placeholder: I.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
            value: z,
            onChange: e => K(e),
            maxLength: x.GUILD_EVENT_MAX_DESCRIPTION_LENGTH
          })
        }), en ? (0, l.jsx)(f.default, {
          sendStartNotification: el,
          setSendStartNotification: ea,
          showNotificationNewBadge: er
        }) : null, eg && !eS ? (0, l.jsx)(u.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          className: y.channelSelection,
          children: I.default.Messages.START_STAGE_MODAL_SET_TOPIC_HELP_TEXT.format({
            stageName: eh,
            stageHook: (e, t) => (0, l.jsx)("span", {
              className: y.channelName,
              children: j.name
            }, t)
          })
        }) : null]
      })]
    }), (0, l.jsxs)(u.ModalFooter, {
      children: [(0, l.jsx)(u.Button, {
        color: eC,
        onClick: ev,
        disabled: "" === W || null == es || V && !eR,
        submitting: G,
        children: em
      }), (0, l.jsx)(u.Button, {
        color: u.Button.Colors.PRIMARY,
        className: y.cancelButton,
        onClick: b,
        children: I.default.Messages.CANCEL
      })]
    })]
  })
}