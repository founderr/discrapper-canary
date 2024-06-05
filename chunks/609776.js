"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("913527"),
  i = n.n(s),
  r = n("442837"),
  d = n("481060"),
  u = n("933557"),
  o = n("77810"),
  c = n("854698"),
  E = n("40623"),
  _ = n("440371"),
  f = n("810788"),
  S = n("699516"),
  T = n("594174"),
  h = n("170039"),
  N = n("626135"),
  g = n("570188"),
  v = n("427679"),
  I = n("930180"),
  x = n("582019"),
  m = n("157925"),
  C = n("981631"),
  A = n("765305"),
  p = n("190378"),
  R = n("689938"),
  L = n("332343");

function j(e) {
  let {
    stageChannelsInGuild: t,
    channel: n,
    onSelectChannel: l
  } = e;
  return null == l ? null : (0, a.jsx)(a.Fragment, {
    children: (0, a.jsx)(d.FormItem, {
      title: R.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL + " asdf",
      className: L.channelSelectionFormItem,
      required: !0,
      children: (0, a.jsx)(d.SearchableSelect, {
        value: n.id,
        options: t.map(e => ({
          value: e.id,
          label: (0, u.computeChannelName)(e, T.default, S.default, !0)
        })),
        onChange: e => {
          let n = t.find(t => t.id === e);
          null != n && l(n)
        },
        renderOptionPrefix: () => (0, a.jsx)(h.default, {
          height: 24
        })
      })
    })
  })
}

function M(e) {
  var t, n, s, S, T, h, M, D;
  let {
    channel: O,
    guild: P,
    header: B,
    error: G,
    loading: y,
    onSave: U,
    onEventSave: V,
    onClose: k,
    onSelectChannel: w,
    isEvent: H = !1,
    defaultOptions: b,
    isSlideReady: F = !0
  } = e, Z = l.useMemo(() => v.default.getStageInstanceByChannel(O.id), [O.id]), [z, W] = l.useState(null !== (n = null !== (t = null == b ? void 0 : b.topic) && void 0 !== t ? t : null == Z ? void 0 : Z.topic) && void 0 !== n ? n : ""), [Y, q] = l.useState(null !== (s = null == b ? void 0 : b.description) && void 0 !== s ? s : ""), [K] = l.useState(H), [X, Q] = l.useState(null !== (S = null == b ? void 0 : b.schedule) && void 0 !== S ? S : {
    startDate: (0, c.getInitialEventStartDate)()
  }), [J, $] = l.useState(K && (null == b ? void 0 : b.schedule) != null), ee = (0, g.useCanSendStageStartNotification)(O), et = (0, g.useDefaultSendStartStageNotificationToggle)(O), en = null == Z && ee && !K, [ea, el] = l.useState(en && et), es = (0, r.useStateFromStores)([f.default], () => f.default.hasHotspot(p.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE)), ei = A.GuildScheduledEventPrivacyLevel.GUILD_ONLY, [er] = l.useState(null !== (h = null !== (T = null == b ? void 0 : b.privacyLevel) && void 0 !== T ? T : null == Z ? void 0 : Z.privacy_level) && void 0 !== h ? h : ei), [ed, eu] = l.useState(null == b ? void 0 : b.recurrenceRule), eo = (0, I.useStageBlockedUsersCount)(O.id), [ec, eE] = l.useState(!1), e_ = (0, u.default)(O), ef = (0, o.useChannelsUserCanStartStageIn)(P), eS = null != w, eT = ef.length > 1;
  l.useEffect(() => {
    N.default.track(C.AnalyticEvents.START_STAGE_OPENED, {
      stage_instance_id: null == Z ? void 0 : Z.id,
      can_start_public_stage: !1,
      guild_id: O.guild_id
    })
  }, []);
  let eh = e => {
    if (e.preventDefault(), er === A.GuildScheduledEventPrivacyLevel.PUBLIC && z.length < 20 && !ec) {
      eE(!0);
      return
    }
    let t = {
      topic: z,
      privacyLevel: er,
      sendStartNotification: ea
    };
    if (K) {
      if (!J) return;
      null == V || V({
        ...t,
        schedule: X,
        description: Y,
        entityType: A.GuildScheduledEventEntityTypes.STAGE_INSTANCE
      });
      return
    }
    null == U || U(t)
  };
  let {
    color: eN,
    text: eg
  } = (M = Z, D = er, K ? {
    color: d.Button.Colors.BRAND,
    text: R.default.Messages.SCHEDULE_EVENT
  } : D === A.GuildScheduledEventPrivacyLevel.PUBLIC && (null == M ? void 0 : M.privacy_level) !== A.GuildScheduledEventPrivacyLevel.PUBLIC ? {
    color: d.Button.Colors.BRAND,
    text: R.default.Messages.CONTINUE
  } : null == M ? {
    color: d.Button.Colors.GREEN,
    text: R.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
  } : {
    color: d.Button.Colors.BRAND,
    text: R.default.Messages.SAVE_CHANGES
  }), ev = l.useRef(null);
  l.useEffect(() => {
    var e;
    F && (null === (e = ev.current) || void 0 === e || e.focus())
  }, [F]);
  let eI = J && null != X.startDate && X.startDate >= i()();
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(d.ModalContent, {
      className: L.modalContent,
      children: [B, (0, a.jsx)("div", {
        className: L.blockedUsersContainer,
        children: null == Z && eo > 0 && (0, a.jsx)(x.BlockedUsersNotice, {
          channelId: O.id
        })
      }), (0, a.jsxs)("form", {
        onSubmit: eh,
        className: L.form,
        children: [(0, a.jsxs)(d.FormItem, {
          title: H ? R.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL : R.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_LABEL,
          className: L.topicFormItem,
          required: !0,
          children: [(0, a.jsx)(d.TextInput, {
            className: L.textInput,
            onChange: e => W(e),
            placeholder: R.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_PLACEHOLDER,
            maxLength: m.MAX_STAGE_TOPIC_LENGTH,
            value: z,
            autoComplete: "off",
            inputRef: ev
          }), ec && (0, a.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-warning",
            className: L.warning,
            children: R.default.Messages.START_STAGE_PUBLIC_SHORT_TOPIC_WARNING
          }), null != G ? (0, a.jsx)(d.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: L.warning,
            children: G.getAnyErrorMessage()
          }) : null]
        }), eS && eT ? (0, a.jsx)(j, {
          stageChannelsInGuild: ef,
          channel: O,
          onSelectChannel: w
        }) : null, K && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(_.default, {
            className: L.formItem,
            onScheduleChange: Q,
            onRecurrenceChange: e => {
              let t = X.startDate;
              if (null != t) eu((0, c.recurrenceOptionToRecurrenceRule)(e, t))
            },
            schedule: X,
            recurrenceRule: ed,
            timeSelected: J,
            onTimeChange: $
          }), null != X.startDate && X.startDate < i()() ? (0, a.jsx)(d.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: L.warning,
            children: R.default.Messages.GUILD_EVENT_PAST_START_DATE
          }) : null]
        }), H && (0, a.jsx)(d.FormItem, {
          title: R.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
          className: L.formItem,
          children: (0, a.jsx)(d.TextArea, {
            placeholder: R.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
            value: Y,
            onChange: e => q(e),
            maxLength: A.GUILD_EVENT_MAX_DESCRIPTION_LENGTH
          })
        }), en ? (0, a.jsx)(E.default, {
          sendStartNotification: ea,
          setSendStartNotification: el,
          showNotificationNewBadge: es
        }) : null, eS && !eT ? (0, a.jsx)(d.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          className: L.channelSelection,
          children: R.default.Messages.START_STAGE_MODAL_SET_TOPIC_HELP_TEXT.format({
            stageName: e_,
            stageHook: (e, t) => (0, a.jsx)("span", {
              className: L.channelName,
              children: O.name
            }, t)
          })
        }) : null]
      })]
    }), (0, a.jsxs)(d.ModalFooter, {
      children: [(0, a.jsx)(d.Button, {
        color: eN,
        onClick: eh,
        disabled: "" === z || null == er || H && !eI,
        submitting: y,
        children: eg
      }), (0, a.jsx)(d.Button, {
        color: d.Button.Colors.PRIMARY,
        className: L.cancelButton,
        onClick: k,
        children: R.default.Messages.CANCEL
      })]
    })]
  })
}