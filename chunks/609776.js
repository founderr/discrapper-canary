"use strict";
a.r(t), a.d(t, {
  default: function() {
    return M
  }
}), a("47120");
var l = a("735250"),
  s = a("470079"),
  n = a("913527"),
  i = a.n(n),
  r = a("442837"),
  d = a("481060"),
  o = a("933557"),
  u = a("77810"),
  c = a("854698"),
  E = a("40623"),
  f = a("440371"),
  h = a("810788"),
  _ = a("699516"),
  N = a("594174"),
  S = a("170039"),
  x = a("626135"),
  T = a("570188"),
  v = a("427679"),
  m = a("930180"),
  C = a("582019"),
  g = a("157925"),
  I = a("981631"),
  A = a("765305"),
  L = a("190378"),
  j = a("689938"),
  R = a("332343");

function p(e) {
  let {
    stageChannelsInGuild: t,
    channel: a,
    onSelectChannel: s
  } = e;
  return null == s ? null : (0, l.jsx)(l.Fragment, {
    children: (0, l.jsx)(d.FormItem, {
      title: j.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL + " asdf",
      className: R.channelSelectionFormItem,
      required: !0,
      children: (0, l.jsx)(d.SearchableSelect, {
        value: a.id,
        options: t.map(e => ({
          value: e.id,
          label: (0, o.computeChannelName)(e, N.default, _.default, !0)
        })),
        onChange: e => {
          let a = t.find(t => t.id === e);
          null != a && s(a)
        },
        renderOptionPrefix: () => (0, l.jsx)(S.default, {
          height: 24
        })
      })
    })
  })
}

function M(e) {
  var t, a, n, _, N, S, M, D;
  let {
    channel: B,
    guild: G,
    header: O,
    error: P,
    loading: U,
    onSave: V,
    onEventSave: k,
    onClose: y,
    onSelectChannel: F,
    isEvent: w = !1,
    defaultOptions: H,
    isSlideReady: b = !0
  } = e, Z = s.useMemo(() => v.default.getStageInstanceByChannel(B.id), [B.id]), [z, W] = s.useState(null !== (a = null !== (t = null == H ? void 0 : H.topic) && void 0 !== t ? t : null == Z ? void 0 : Z.topic) && void 0 !== a ? a : ""), [Y, K] = s.useState(null !== (n = null == H ? void 0 : H.description) && void 0 !== n ? n : ""), [q] = s.useState(w), [X, J] = s.useState(null !== (_ = null == H ? void 0 : H.schedule) && void 0 !== _ ? _ : {
    startDate: (0, c.getInitialEventStartDate)()
  }), [Q, $] = s.useState(q && (null == H ? void 0 : H.schedule) != null), ee = (0, T.useCanSendStageStartNotification)(B), et = (0, T.useDefaultSendStartStageNotificationToggle)(B), ea = null == Z && ee && !q, [el, es] = s.useState(ea && et), en = (0, r.useStateFromStores)([h.default], () => h.default.hasHotspot(L.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE)), ei = A.GuildScheduledEventPrivacyLevel.GUILD_ONLY, [er] = s.useState(null !== (S = null !== (N = null == H ? void 0 : H.privacyLevel) && void 0 !== N ? N : null == Z ? void 0 : Z.privacy_level) && void 0 !== S ? S : ei), [ed, eo] = s.useState(null == H ? void 0 : H.recurrenceRule), eu = (0, m.useStageBlockedUsersCount)(B.id), [ec, eE] = s.useState(!1), ef = (0, o.default)(B), eh = (0, u.useChannelsUserCanStartStageIn)(G), e_ = null != F, eN = eh.length > 1;
  s.useEffect(() => {
    x.default.track(I.AnalyticEvents.START_STAGE_OPENED, {
      stage_instance_id: null == Z ? void 0 : Z.id,
      can_start_public_stage: !1,
      guild_id: B.guild_id
    })
  }, []);
  let eS = e => {
    if (e.preventDefault(), er === A.GuildScheduledEventPrivacyLevel.PUBLIC && z.length < 20 && !ec) {
      eE(!0);
      return
    }
    let t = {
      topic: z,
      privacyLevel: er,
      sendStartNotification: el
    };
    if (q) {
      if (!Q) return;
      null == k || k({
        ...t,
        schedule: X,
        description: Y,
        entityType: A.GuildScheduledEventEntityTypes.STAGE_INSTANCE
      });
      return
    }
    null == V || V(t)
  };
  let {
    color: ex,
    text: eT
  } = (M = Z, D = er, q ? {
    color: d.Button.Colors.BRAND,
    text: j.default.Messages.SCHEDULE_EVENT
  } : D === A.GuildScheduledEventPrivacyLevel.PUBLIC && (null == M ? void 0 : M.privacy_level) !== A.GuildScheduledEventPrivacyLevel.PUBLIC ? {
    color: d.Button.Colors.BRAND,
    text: j.default.Messages.CONTINUE
  } : null == M ? {
    color: d.Button.Colors.GREEN,
    text: j.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
  } : {
    color: d.Button.Colors.BRAND,
    text: j.default.Messages.SAVE_CHANGES
  }), ev = s.useRef(null);
  s.useEffect(() => {
    var e;
    b && (null === (e = ev.current) || void 0 === e || e.focus())
  }, [b]);
  let em = Q && null != X.startDate && X.startDate >= i()();
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(d.ModalContent, {
      className: R.modalContent,
      children: [O, (0, l.jsx)("div", {
        className: R.blockedUsersContainer,
        children: null == Z && eu > 0 && (0, l.jsx)(C.BlockedUsersNotice, {
          channelId: B.id
        })
      }), (0, l.jsxs)("form", {
        onSubmit: eS,
        className: R.form,
        children: [(0, l.jsxs)(d.FormItem, {
          title: w ? j.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL : j.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_LABEL,
          className: R.topicFormItem,
          required: !0,
          children: [(0, l.jsx)(d.TextInput, {
            className: R.textInput,
            onChange: e => W(e),
            placeholder: j.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_PLACEHOLDER,
            maxLength: g.MAX_STAGE_TOPIC_LENGTH,
            value: z,
            autoComplete: "off",
            inputRef: ev
          }), ec && (0, l.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-warning",
            className: R.warning,
            children: j.default.Messages.START_STAGE_PUBLIC_SHORT_TOPIC_WARNING
          }), null != P ? (0, l.jsx)(d.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: R.warning,
            children: P.getAnyErrorMessage()
          }) : null]
        }), e_ && eN ? (0, l.jsx)(p, {
          stageChannelsInGuild: eh,
          channel: B,
          onSelectChannel: F
        }) : null, q && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(f.default, {
            className: R.formItem,
            onScheduleChange: J,
            onRecurrenceChange: e => {
              let t = X.startDate;
              if (null != t) eo((0, c.recurrenceOptionToRecurrenceRule)(e, t))
            },
            schedule: X,
            recurrenceRule: ed,
            timeSelected: Q,
            onTimeChange: $
          }), null != X.startDate && X.startDate < i()() ? (0, l.jsx)(d.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: R.warning,
            children: j.default.Messages.GUILD_EVENT_PAST_START_DATE
          }) : null]
        }), w && (0, l.jsx)(d.FormItem, {
          title: j.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
          className: R.formItem,
          children: (0, l.jsx)(d.TextArea, {
            placeholder: j.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
            value: Y,
            onChange: e => K(e),
            maxLength: A.GUILD_EVENT_MAX_DESCRIPTION_LENGTH
          })
        }), ea ? (0, l.jsx)(E.default, {
          sendStartNotification: el,
          setSendStartNotification: es,
          showNotificationNewBadge: en
        }) : null, e_ && !eN ? (0, l.jsx)(d.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          className: R.channelSelection,
          children: j.default.Messages.START_STAGE_MODAL_SET_TOPIC_HELP_TEXT.format({
            stageName: ef,
            stageHook: (e, t) => (0, l.jsx)("span", {
              className: R.channelName,
              children: B.name
            }, t)
          })
        }) : null]
      })]
    }), (0, l.jsxs)(d.ModalFooter, {
      children: [(0, l.jsx)(d.Button, {
        color: ex,
        onClick: eS,
        disabled: "" === z || null == er || w && !em,
        submitting: U,
        children: eT
      }), (0, l.jsx)(d.Button, {
        color: d.Button.Colors.PRIMARY,
        className: R.cancelButton,
        onClick: y,
        children: j.default.Messages.CANCEL
      })]
    })]
  })
}