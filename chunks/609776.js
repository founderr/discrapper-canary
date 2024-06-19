t.d(n, {
  Z: function() {
    return L
  }
}), t(47120);
var s = t(735250),
  l = t(470079),
  a = t(913527),
  i = t.n(a),
  r = t(442837),
  o = t(481060),
  c = t(933557),
  d = t(77810),
  u = t(854698),
  E = t(40623),
  _ = t(440371),
  T = t(810788),
  N = t(699516),
  h = t(594174),
  I = t(626135),
  x = t(570188),
  m = t(427679),
  S = t(930180),
  g = t(582019),
  v = t(157925),
  A = t(981631),
  C = t(765305),
  f = t(190378),
  j = t(689938),
  R = t(505429);

function M(e) {
  let {
    stageChannelsInGuild: n,
    channel: t,
    onSelectChannel: l
  } = e;
  return null == l ? null : (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(o.FormItem, {
      title: j.Z.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL + " asdf",
      className: R.channelSelectionFormItem,
      required: !0,
      children: (0, s.jsx)(o.SearchableSelect, {
        value: t.id,
        options: n.map(e => ({
          value: e.id,
          label: (0, c.F6)(e, h.default, N.Z, !0)
        })),
        onChange: e => {
          let t = n.find(n => n.id === e);
          null != t && l(t)
        },
        renderOptionPrefix: () => (0, s.jsx)(o.StageIcon, {
          size: "custom",
          color: "currentColor",
          height: 24
        })
      })
    })
  })
}

function L(e) {
  var n, t, a, N, h, L, Z, p;
  let {
    channel: D,
    guild: O,
    header: B,
    error: P,
    loading: G,
    onSave: U,
    onEventSave: y,
    onClose: b,
    onSelectChannel: k,
    isEvent: V = !1,
    defaultOptions: w,
    isSlideReady: F = !0
  } = e, H = l.useMemo(() => m.Z.getStageInstanceByChannel(D.id), [D.id]), [z, W] = l.useState(null !== (t = null !== (n = null == w ? void 0 : w.topic) && void 0 !== n ? n : null == H ? void 0 : H.topic) && void 0 !== t ? t : ""), [K, q] = l.useState(null !== (a = null == w ? void 0 : w.description) && void 0 !== a ? a : ""), [Y] = l.useState(V), [J, Q] = l.useState(null !== (N = null == w ? void 0 : w.schedule) && void 0 !== N ? N : {
    startDate: (0, u.ib)()
  }), [X, $] = l.useState(Y && (null == w ? void 0 : w.schedule) != null), ee = (0, x.J)(D), en = (0, x.U)(D), et = null == H && ee && !Y, [es, el] = l.useState(et && en), ea = (0, r.e7)([T.Z], () => T.Z.hasHotspot(f.v.LIVE_STAGE_NOTIFICATION_BADGE)), ei = C.j8.GUILD_ONLY, [er] = l.useState(null !== (L = null !== (h = null == w ? void 0 : w.privacyLevel) && void 0 !== h ? h : null == H ? void 0 : H.privacy_level) && void 0 !== L ? L : ei), [eo, ec] = l.useState(null == w ? void 0 : w.recurrenceRule), ed = (0, S._d)(D.id), [eu, eE] = l.useState(!1), e_ = (0, c.ZP)(D), eT = (0, d.q)(O), eN = null != k, eh = eT.length > 1;
  l.useEffect(() => {
    I.default.track(A.rMx.START_STAGE_OPENED, {
      stage_instance_id: null == H ? void 0 : H.id,
      can_start_public_stage: !1,
      guild_id: D.guild_id
    })
  }, []);
  let eI = e => {
    if (e.preventDefault(), er === C.j8.PUBLIC && z.length < 20 && !eu) {
      eE(!0);
      return
    }
    let n = {
      topic: z,
      privacyLevel: er,
      sendStartNotification: es
    };
    if (Y) {
      if (!X) return;
      null == y || y({
        ...n,
        schedule: J,
        description: K,
        entityType: C.WX.STAGE_INSTANCE
      });
      return
    }
    null == U || U(n)
  };
  let {
    color: ex,
    text: em
  } = (Z = H, p = er, Y ? {
    color: o.Button.Colors.BRAND,
    text: j.Z.Messages.SCHEDULE_EVENT
  } : p === C.j8.PUBLIC && (null == Z ? void 0 : Z.privacy_level) !== C.j8.PUBLIC ? {
    color: o.Button.Colors.BRAND,
    text: j.Z.Messages.CONTINUE
  } : null == Z ? {
    color: o.Button.Colors.GREEN,
    text: j.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
  } : {
    color: o.Button.Colors.BRAND,
    text: j.Z.Messages.SAVE_CHANGES
  }), eS = l.useRef(null);
  l.useEffect(() => {
    var e;
    F && (null === (e = eS.current) || void 0 === e || e.focus())
  }, [F]);
  let eg = X && null != J.startDate && J.startDate >= i()();
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(o.ModalContent, {
      className: R.modalContent,
      children: [B, (0, s.jsx)("div", {
        className: R.blockedUsersContainer,
        children: null == H && ed > 0 && (0, s.jsx)(g.mv, {
          channelId: D.id
        })
      }), (0, s.jsxs)("form", {
        onSubmit: eI,
        className: R.form,
        children: [(0, s.jsxs)(o.FormItem, {
          title: V ? j.Z.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL : j.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_LABEL,
          className: R.topicFormItem,
          required: !0,
          children: [(0, s.jsx)(o.TextInput, {
            className: R.textInput,
            onChange: e => W(e),
            placeholder: j.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_PLACEHOLDER,
            maxLength: v.xA,
            value: z,
            autoComplete: "off",
            inputRef: eS
          }), eu && (0, s.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-warning",
            className: R.warning,
            children: j.Z.Messages.START_STAGE_PUBLIC_SHORT_TOPIC_WARNING
          }), null != P ? (0, s.jsx)(o.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: R.warning,
            children: P.getAnyErrorMessage()
          }) : null]
        }), eN && eh ? (0, s.jsx)(M, {
          stageChannelsInGuild: eT,
          channel: D,
          onSelectChannel: k
        }) : null, Y && (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(_.Z, {
            className: R.formItem,
            onScheduleChange: Q,
            onRecurrenceChange: e => {
              let n = J.startDate;
              if (null != n) ec((0, u.mF)(e, n))
            },
            schedule: J,
            recurrenceRule: eo,
            timeSelected: X,
            onTimeChange: $
          }), null != J.startDate && J.startDate < i()() ? (0, s.jsx)(o.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: R.warning,
            children: j.Z.Messages.GUILD_EVENT_PAST_START_DATE
          }) : null]
        }), V && (0, s.jsx)(o.FormItem, {
          title: j.Z.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
          className: R.formItem,
          children: (0, s.jsx)(o.TextArea, {
            placeholder: j.Z.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
            value: K,
            onChange: e => q(e),
            maxLength: C.wm
          })
        }), et ? (0, s.jsx)(E.Z, {
          sendStartNotification: es,
          setSendStartNotification: el,
          showNotificationNewBadge: ea
        }) : null, eN && !eh ? (0, s.jsx)(o.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          className: R.channelSelection,
          children: j.Z.Messages.START_STAGE_MODAL_SET_TOPIC_HELP_TEXT.format({
            stageName: e_,
            stageHook: (e, n) => (0, s.jsx)("span", {
              className: R.channelName,
              children: D.name
            }, n)
          })
        }) : null]
      })]
    }), (0, s.jsxs)(o.ModalFooter, {
      children: [(0, s.jsx)(o.Button, {
        color: ex,
        onClick: eI,
        disabled: "" === z || null == er || V && !eg,
        submitting: G,
        children: em
      }), (0, s.jsx)(o.Button, {
        color: o.Button.Colors.PRIMARY,
        className: R.cancelButton,
        onClick: b,
        children: j.Z.Messages.CANCEL
      })]
    })]
  })
}