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
  S = n("810788"),
  T = n("699516"),
  f = n("594174"),
  N = n("170039"),
  h = n("626135"),
  g = n("570188"),
  I = n("427679"),
  m = n("930180"),
  x = n("582019"),
  v = n("157925"),
  C = n("981631"),
  A = n("765305"),
  R = n("190378"),
  p = n("689938"),
  j = n("332343");

function L(e) {
  let {
    stageChannelsInGuild: t,
    channel: n,
    onSelectChannel: l
  } = e;
  return null == l ? null : (0, a.jsx)(a.Fragment, {
    children: (0, a.jsx)(d.FormItem, {
      title: p.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL + " asdf",
      className: j.channelSelectionFormItem,
      required: !0,
      children: (0, a.jsx)(d.SearchableSelect, {
        value: n.id,
        options: t.map(e => ({
          value: e.id,
          label: (0, u.computeChannelName)(e, f.default, T.default, !0)
        })),
        onChange: e => {
          let n = t.find(t => t.id === e);
          null != n && l(n)
        },
        renderOptionPrefix: () => (0, a.jsx)(N.default, {
          height: 24
        })
      })
    })
  })
}

function M(e) {
  var t, n, s, T, f, N, M, D;
  let {
    channel: O,
    guild: P,
    header: G,
    error: B,
    loading: y,
    onSave: U,
    onEventSave: V,
    onClose: k,
    onSelectChannel: w,
    isEvent: H = !1,
    defaultOptions: b,
    isSlideReady: F = !0
  } = e, z = l.useMemo(() => I.default.getStageInstanceByChannel(O.id), [O.id]), [W, Z] = l.useState(null !== (n = null !== (t = null == b ? void 0 : b.topic) && void 0 !== t ? t : null == z ? void 0 : z.topic) && void 0 !== n ? n : ""), [Y, q] = l.useState(null !== (s = null == b ? void 0 : b.description) && void 0 !== s ? s : ""), [K] = l.useState(H), [X, Q] = l.useState(null !== (T = null == b ? void 0 : b.schedule) && void 0 !== T ? T : {
    startDate: (0, c.getInitialEventStartDate)()
  }), [J, $] = l.useState(K && (null == b ? void 0 : b.schedule) != null), ee = (0, g.useCanSendStageStartNotification)(O), et = (0, g.useDefaultSendStartStageNotificationToggle)(O), en = null == z && ee && !K, [ea, el] = l.useState(en && et), es = (0, r.useStateFromStores)([S.default], () => S.default.hasHotspot(R.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE)), ei = A.GuildScheduledEventPrivacyLevel.GUILD_ONLY, [er] = l.useState(null !== (N = null !== (f = null == b ? void 0 : b.privacyLevel) && void 0 !== f ? f : null == z ? void 0 : z.privacy_level) && void 0 !== N ? N : ei), [ed, eu] = l.useState(null == b ? void 0 : b.recurrenceRule), eo = (0, m.useStageBlockedUsersCount)(O.id), [ec, eE] = l.useState(!1), e_ = (0, u.default)(O), eS = (0, o.useChannelsUserCanStartStageIn)(P), eT = null != w, ef = eS.length > 1;
  l.useEffect(() => {
    h.default.track(C.AnalyticEvents.START_STAGE_OPENED, {
      stage_instance_id: null == z ? void 0 : z.id,
      can_start_public_stage: !1,
      guild_id: O.guild_id
    })
  }, []);
  let eN = e => {
    if (e.preventDefault(), er === A.GuildScheduledEventPrivacyLevel.PUBLIC && W.length < 20 && !ec) {
      eE(!0);
      return
    }
    let t = {
      topic: W,
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
    color: eh,
    text: eg
  } = (M = z, D = er, K ? {
    color: d.Button.Colors.BRAND,
    text: p.default.Messages.SCHEDULE_EVENT
  } : D === A.GuildScheduledEventPrivacyLevel.PUBLIC && (null == M ? void 0 : M.privacy_level) !== A.GuildScheduledEventPrivacyLevel.PUBLIC ? {
    color: d.Button.Colors.BRAND,
    text: p.default.Messages.CONTINUE
  } : null == M ? {
    color: d.Button.Colors.GREEN,
    text: p.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
  } : {
    color: d.Button.Colors.BRAND,
    text: p.default.Messages.SAVE_CHANGES
  }), eI = l.useRef(null);
  l.useEffect(() => {
    var e;
    F && (null === (e = eI.current) || void 0 === e || e.focus())
  }, [F]);
  let em = J && null != X.startDate && X.startDate >= i()();
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(d.ModalContent, {
      className: j.modalContent,
      children: [G, (0, a.jsx)("div", {
        className: j.blockedUsersContainer,
        children: null == z && eo > 0 && (0, a.jsx)(x.BlockedUsersNotice, {
          channelId: O.id
        })
      }), (0, a.jsxs)("form", {
        onSubmit: eN,
        className: j.form,
        children: [(0, a.jsxs)(d.FormItem, {
          title: H ? p.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL : p.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_LABEL,
          className: j.topicFormItem,
          required: !0,
          children: [(0, a.jsx)(d.TextInput, {
            className: j.textInput,
            onChange: e => Z(e),
            placeholder: p.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_PLACEHOLDER,
            maxLength: v.MAX_STAGE_TOPIC_LENGTH,
            value: W,
            autoComplete: "off",
            inputRef: eI
          }), ec && (0, a.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-warning",
            className: j.warning,
            children: p.default.Messages.START_STAGE_PUBLIC_SHORT_TOPIC_WARNING
          }), null != B ? (0, a.jsx)(d.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: j.warning,
            children: B.getAnyErrorMessage()
          }) : null]
        }), eT && ef ? (0, a.jsx)(L, {
          stageChannelsInGuild: eS,
          channel: O,
          onSelectChannel: w
        }) : null, K && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(_.default, {
            className: j.formItem,
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
            className: j.warning,
            children: p.default.Messages.GUILD_EVENT_PAST_START_DATE
          }) : null]
        }), H && (0, a.jsx)(d.FormItem, {
          title: p.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
          className: j.formItem,
          children: (0, a.jsx)(d.TextArea, {
            placeholder: p.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
            value: Y,
            onChange: e => q(e),
            maxLength: A.GUILD_EVENT_MAX_DESCRIPTION_LENGTH
          })
        }), en ? (0, a.jsx)(E.default, {
          sendStartNotification: ea,
          setSendStartNotification: el,
          showNotificationNewBadge: es
        }) : null, eT && !ef ? (0, a.jsx)(d.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          className: j.channelSelection,
          children: p.default.Messages.START_STAGE_MODAL_SET_TOPIC_HELP_TEXT.format({
            stageName: e_,
            stageHook: (e, t) => (0, a.jsx)("span", {
              className: j.channelName,
              children: O.name
            }, t)
          })
        }) : null]
      })]
    }), (0, a.jsxs)(d.ModalFooter, {
      children: [(0, a.jsx)(d.Button, {
        color: eh,
        onClick: eN,
        disabled: "" === W || null == er || H && !em,
        submitting: y,
        children: eg
      }), (0, a.jsx)(d.Button, {
        color: d.Button.Colors.PRIMARY,
        className: j.cancelButton,
        onClick: k,
        children: p.default.Messages.CANCEL
      })]
    })]
  })
}