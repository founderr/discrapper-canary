t.d(n, {
    Z: function () {
        return Z;
    }
}),
    t(47120);
var s = t(735250),
    a = t(470079),
    l = t(913527),
    i = t.n(l),
    r = t(442837),
    o = t(481060),
    c = t(933557),
    d = t(77810),
    u = t(854698),
    _ = t(40623),
    E = t(440371),
    x = t(810788),
    m = t(699516),
    h = t(594174),
    I = t(626135),
    T = t(570188),
    N = t(427679),
    C = t(930180),
    g = t(582019),
    v = t(157925),
    S = t(981631),
    f = t(765305),
    j = t(190378),
    A = t(689938),
    p = t(479562);
function L(e) {
    let { stageChannelsInGuild: n, channel: t, onSelectChannel: a } = e;
    return null == a
        ? null
        : (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)(o.FormItem, {
                  title: A.Z.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL + ' asdf',
                  className: p.channelSelectionFormItem,
                  required: !0,
                  children: (0, s.jsx)(o.SearchableSelect, {
                      value: t.id,
                      options: n.map((e) => ({
                          value: e.id,
                          label: (0, c.F6)(e, h.default, m.Z, !0)
                      })),
                      onChange: (e) => {
                          let t = n.find((n) => n.id === e);
                          null != t && a(t);
                      },
                      renderOptionPrefix: () =>
                          (0, s.jsx)(o.StageIcon, {
                              size: 'custom',
                              color: 'currentColor',
                              height: 24
                          })
                  })
              })
          });
}
function Z(e) {
    var n, t, l, m, h, Z, R, M;
    let { channel: B, guild: D, header: b, error: k, loading: G, onSave: O, onEventSave: P, onClose: U, onSelectChannel: F, isEvent: V = !1, defaultOptions: y, isSlideReady: w = !0 } = e,
        z = a.useMemo(() => N.Z.getStageInstanceByChannel(B.id), [B.id]),
        [H, W] = a.useState(null !== (t = null !== (n = null == y ? void 0 : y.topic) && void 0 !== n ? n : null == z ? void 0 : z.topic) && void 0 !== t ? t : ''),
        [q, K] = a.useState(null !== (l = null == y ? void 0 : y.description) && void 0 !== l ? l : ''),
        [Y] = a.useState(V),
        [J, X] = a.useState(null !== (m = null == y ? void 0 : y.schedule) && void 0 !== m ? m : { startDate: (0, u.ib)() }),
        [Q, $] = a.useState(Y && (null == y ? void 0 : y.schedule) != null),
        ee = (0, T.J)(B),
        en = (0, T.U)(B),
        et = null == z && ee && !Y,
        [es, ea] = a.useState(et && en),
        el = (0, r.e7)([x.Z], () => x.Z.hasHotspot(j.v.LIVE_STAGE_NOTIFICATION_BADGE)),
        ei = f.j8.GUILD_ONLY,
        [er] = a.useState(null !== (Z = null !== (h = null == y ? void 0 : y.privacyLevel) && void 0 !== h ? h : null == z ? void 0 : z.privacy_level) && void 0 !== Z ? Z : ei),
        [eo, ec] = a.useState(null == y ? void 0 : y.recurrenceRule),
        ed = (0, C._d)(B.id),
        [eu, e_] = a.useState(!1),
        eE = (0, c.ZP)(B),
        ex = (0, d.q)(D),
        em = null != F,
        eh = ex.length > 1;
    a.useEffect(() => {
        I.default.track(S.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == z ? void 0 : z.id,
            can_start_public_stage: !1,
            guild_id: B.guild_id
        });
    }, []);
    let eI = (e) => {
        if ((e.preventDefault(), er === f.j8.PUBLIC && H.length < 20 && !eu)) {
            e_(!0);
            return;
        }
        let n = {
            topic: H,
            privacyLevel: er,
            sendStartNotification: es
        };
        if (Y) {
            if (!Q) return;
            null == P ||
                P({
                    ...n,
                    schedule: J,
                    description: q,
                    entityType: f.WX.STAGE_INSTANCE
                });
            return;
        }
        null == O || O(n);
    };
    let { color: eT, text: eN } =
            ((R = z),
            (M = er),
            Y
                ? {
                      color: o.Button.Colors.BRAND,
                      text: A.Z.Messages.SCHEDULE_EVENT
                  }
                : M === f.j8.PUBLIC && (null == R ? void 0 : R.privacy_level) !== f.j8.PUBLIC
                  ? {
                        color: o.Button.Colors.BRAND,
                        text: A.Z.Messages.CONTINUE
                    }
                  : null == R
                    ? {
                          color: o.Button.Colors.GREEN,
                          text: A.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
                      }
                    : {
                          color: o.Button.Colors.BRAND,
                          text: A.Z.Messages.SAVE_CHANGES
                      }),
        eC = a.useRef(null);
    a.useEffect(() => {
        var e;
        w && (null === (e = eC.current) || void 0 === e || e.focus());
    }, [w]);
    let eg = Q && null != J.startDate && J.startDate >= i()();
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(o.ModalContent, {
                className: p.modalContent,
                children: [
                    b,
                    (0, s.jsx)('div', {
                        className: p.blockedUsersContainer,
                        children: null == z && ed > 0 && (0, s.jsx)(g.mv, { channelId: B.id })
                    }),
                    (0, s.jsxs)('form', {
                        onSubmit: eI,
                        className: p.form,
                        children: [
                            (0, s.jsxs)(o.FormItem, {
                                title: V ? A.Z.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL : A.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_LABEL,
                                className: p.topicFormItem,
                                required: !0,
                                children: [
                                    (0, s.jsx)(o.TextInput, {
                                        className: p.textInput,
                                        onChange: (e) => W(e),
                                        placeholder: A.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_PLACEHOLDER,
                                        maxLength: v.xA,
                                        value: H,
                                        autoComplete: 'off',
                                        inputRef: eC
                                    }),
                                    eu &&
                                        (0, s.jsx)(o.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-warning',
                                            className: p.warning,
                                            children: A.Z.Messages.START_STAGE_PUBLIC_SHORT_TOPIC_WARNING
                                        }),
                                    null != k
                                        ? (0, s.jsx)(o.Text, {
                                              color: 'text-danger',
                                              variant: 'text-xs/normal',
                                              className: p.warning,
                                              children: k.getAnyErrorMessage()
                                          })
                                        : null
                                ]
                            }),
                            em && eh
                                ? (0, s.jsx)(L, {
                                      stageChannelsInGuild: ex,
                                      channel: B,
                                      onSelectChannel: F
                                  })
                                : null,
                            Y &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        (0, s.jsx)(E.Z, {
                                            className: p.formItem,
                                            onScheduleChange: X,
                                            onRecurrenceChange: (e) => {
                                                let n = J.startDate;
                                                if (null != n) ec((0, u.mF)(e, n));
                                            },
                                            schedule: J,
                                            recurrenceRule: eo,
                                            timeSelected: Q,
                                            onTimeChange: $
                                        }),
                                        null != J.startDate && J.startDate < i()()
                                            ? (0, s.jsx)(o.Text, {
                                                  color: 'text-danger',
                                                  variant: 'text-xs/normal',
                                                  className: p.warning,
                                                  children: A.Z.Messages.GUILD_EVENT_PAST_START_DATE
                                              })
                                            : null
                                    ]
                                }),
                            V &&
                                (0, s.jsx)(o.FormItem, {
                                    title: A.Z.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                                    className: p.formItem,
                                    children: (0, s.jsx)(o.TextArea, {
                                        placeholder: A.Z.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                                        value: q,
                                        onChange: (e) => K(e),
                                        maxLength: f.wm
                                    })
                                }),
                            et
                                ? (0, s.jsx)(_.Z, {
                                      sendStartNotification: es,
                                      setSendStartNotification: ea,
                                      showNotificationNewBadge: el
                                  })
                                : null,
                            em && !eh
                                ? (0, s.jsx)(o.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      className: p.channelSelection,
                                      children: A.Z.Messages.START_STAGE_MODAL_SET_TOPIC_HELP_TEXT.format({
                                          stageName: eE,
                                          stageHook: (e, n) =>
                                              (0, s.jsx)(
                                                  'span',
                                                  {
                                                      className: p.channelName,
                                                      children: B.name
                                                  },
                                                  n
                                              )
                                      })
                                  })
                                : null
                        ]
                    })
                ]
            }),
            (0, s.jsxs)(o.ModalFooter, {
                children: [
                    (0, s.jsx)(o.Button, {
                        color: eT,
                        onClick: eI,
                        disabled: '' === H || null == er || (V && !eg),
                        submitting: G,
                        children: eN
                    }),
                    (0, s.jsx)(o.Button, {
                        color: o.Button.Colors.PRIMARY,
                        className: p.cancelButton,
                        onClick: U,
                        children: A.Z.Messages.CANCEL
                    })
                ]
            })
        ]
    });
}
