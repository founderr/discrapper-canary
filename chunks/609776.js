t.d(n, {
    Z: function () {
        return k;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    a = t(913527),
    r = t.n(a),
    o = t(442837),
    s = t(481060),
    c = t(933557),
    d = t(77810),
    u = t(854698),
    h = t(40623),
    m = t(440371),
    x = t(810788),
    f = t(699516),
    g = t(594174),
    _ = t(626135),
    v = t(570188),
    I = t(427679),
    N = t(930180),
    p = t(582019),
    C = t(157925),
    j = t(981631),
    S = t(765305),
    T = t(190378),
    E = t(388032),
    b = t(479562);
function A(e) {
    let { stageChannelsInGuild: n, channel: t, onSelectChannel: i } = e;
    return null == i
        ? null
        : (0, l.jsx)(l.Fragment, {
              children: (0, l.jsx)(s.FormItem, {
                  title: E.intl.string(E.t.S7GjDw) + ' asdf',
                  className: b.channelSelectionFormItem,
                  required: !0,
                  children: (0, l.jsx)(s.SearchableSelect, {
                      value: t.id,
                      options: n.map((e) => ({
                          value: e.id,
                          label: (0, c.F6)(e, g.default, f.Z, !0)
                      })),
                      onChange: (e) => {
                          let t = n.find((n) => n.id === e);
                          null != t && i(t);
                      },
                      renderOptionPrefix: () =>
                          (0, l.jsx)(s.StageIcon, {
                              size: 'custom',
                              color: 'currentColor',
                              height: 24
                          })
                  })
              })
          });
}
function k(e) {
    var n, t, a, f, g, k, Z, B;
    let { channel: D, guild: y, header: R, error: P, loading: w, onSave: G, onEventSave: M, onClose: L, onSelectChannel: O, isEvent: U = !1, defaultOptions: F, isSlideReady: z = !0 } = e,
        H = i.useMemo(() => I.Z.getStageInstanceByChannel(D.id), [D.id]),
        [V, q] = i.useState(null !== (t = null !== (n = null == F ? void 0 : F.topic) && void 0 !== n ? n : null == H ? void 0 : H.topic) && void 0 !== t ? t : ''),
        [K, W] = i.useState(null !== (a = null == F ? void 0 : F.description) && void 0 !== a ? a : ''),
        [Y] = i.useState(U),
        [J, Q] = i.useState(null !== (f = null == F ? void 0 : F.schedule) && void 0 !== f ? f : { startDate: (0, u.ib)() }),
        [X, $] = i.useState(Y && (null == F ? void 0 : F.schedule) != null),
        ee = (0, v.J)(D),
        en = (0, v.U)(D),
        et = null == H && ee && !Y,
        [el, ei] = i.useState(et && en),
        ea = (0, o.e7)([x.Z], () => x.Z.hasHotspot(T.v.LIVE_STAGE_NOTIFICATION_BADGE)),
        er = S.j8.GUILD_ONLY,
        [eo] = i.useState(null !== (k = null !== (g = null == F ? void 0 : F.privacyLevel) && void 0 !== g ? g : null == H ? void 0 : H.privacy_level) && void 0 !== k ? k : er),
        [es, ec] = i.useState(null == F ? void 0 : F.recurrenceRule),
        ed = (0, N._d)(D.id),
        [eu, eh] = i.useState(!1),
        em = (0, c.ZP)(D),
        ex = (0, d.q)(y),
        ef = null != O,
        eg = ex.length > 1;
    i.useEffect(() => {
        _.default.track(j.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == H ? void 0 : H.id,
            can_start_public_stage: !1,
            guild_id: D.guild_id
        });
    }, []);
    let e_ = (e) => {
        if ((e.preventDefault(), eo === S.j8.PUBLIC && V.length < 20 && !eu)) {
            eh(!0);
            return;
        }
        let n = {
            topic: V,
            privacyLevel: eo,
            sendStartNotification: el
        };
        if (Y) {
            if (!X) return;
            null == M ||
                M({
                    ...n,
                    schedule: J,
                    description: K,
                    entityType: S.WX.STAGE_INSTANCE
                });
            return;
        }
        null == G || G(n);
    };
    let { color: ev, text: eI } =
            ((Z = H),
            (B = eo),
            Y
                ? {
                      color: s.Button.Colors.BRAND,
                      text: E.intl.string(E.t['60lJ0N'])
                  }
                : B === S.j8.PUBLIC && (null == Z ? void 0 : Z.privacy_level) !== S.j8.PUBLIC
                  ? {
                        color: s.Button.Colors.BRAND,
                        text: E.intl.string(E.t['3PatS0'])
                    }
                  : null == Z
                    ? {
                          color: s.Button.Colors.GREEN,
                          text: E.intl.string(E.t.s8mM8P)
                      }
                    : {
                          color: s.Button.Colors.BRAND,
                          text: E.intl.string(E.t.K344S0)
                      }),
        eN = i.useRef(null);
    i.useEffect(() => {
        var e;
        z && (null === (e = eN.current) || void 0 === e || e.focus());
    }, [z]);
    let ep = X && null != J.startDate && J.startDate >= r()();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(s.ModalContent, {
                className: b.modalContent,
                children: [
                    R,
                    (0, l.jsx)('div', {
                        className: b.blockedUsersContainer,
                        children: null == H && ed > 0 && (0, l.jsx)(p.mv, { channelId: D.id })
                    }),
                    (0, l.jsxs)('form', {
                        onSubmit: e_,
                        className: b.form,
                        children: [
                            (0, l.jsxs)(s.FormItem, {
                                title: U ? E.intl.string(E.t['0HbEQ0']) : E.intl.string(E.t['5FPBOD']),
                                className: b.topicFormItem,
                                required: !0,
                                children: [
                                    (0, l.jsx)(s.TextInput, {
                                        className: b.textInput,
                                        onChange: (e) => q(e),
                                        placeholder: E.intl.string(E.t.ZwWrub),
                                        maxLength: C.xA,
                                        value: V,
                                        autoComplete: 'off',
                                        inputRef: eN
                                    }),
                                    eu &&
                                        (0, l.jsx)(s.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-warning',
                                            className: b.warning,
                                            children: E.intl.string(E.t.AqTyaW)
                                        }),
                                    null != P
                                        ? (0, l.jsx)(s.Text, {
                                              color: 'text-danger',
                                              variant: 'text-xs/normal',
                                              className: b.warning,
                                              children: P.getAnyErrorMessage()
                                          })
                                        : null
                                ]
                            }),
                            ef && eg
                                ? (0, l.jsx)(A, {
                                      stageChannelsInGuild: ex,
                                      channel: D,
                                      onSelectChannel: O
                                  })
                                : null,
                            Y &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(m.Z, {
                                            className: b.formItem,
                                            onScheduleChange: Q,
                                            onRecurrenceChange: (e) => {
                                                let n = J.startDate;
                                                if (null != n) ec((0, u.mF)(e, n));
                                            },
                                            schedule: J,
                                            recurrenceRule: es,
                                            timeSelected: X,
                                            onTimeChange: $
                                        }),
                                        null != J.startDate && J.startDate < r()()
                                            ? (0, l.jsx)(s.Text, {
                                                  color: 'text-danger',
                                                  variant: 'text-xs/normal',
                                                  className: b.warning,
                                                  children: E.intl.string(E.t.AXR5Sk)
                                              })
                                            : null
                                    ]
                                }),
                            U &&
                                (0, l.jsx)(s.FormItem, {
                                    title: E.intl.string(E.t['+gRCCw']),
                                    className: b.formItem,
                                    children: (0, l.jsx)(s.TextArea, {
                                        placeholder: E.intl.string(E.t['kWO/Ex']),
                                        value: K,
                                        onChange: (e) => W(e),
                                        maxLength: S.wm
                                    })
                                }),
                            et
                                ? (0, l.jsx)(h.Z, {
                                      sendStartNotification: el,
                                      setSendStartNotification: ei,
                                      showNotificationNewBadge: ea
                                  })
                                : null,
                            ef && !eg
                                ? (0, l.jsx)(s.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      className: b.channelSelection,
                                      children: E.intl.format(E.t['S+9O7u'], {
                                          stageName: em,
                                          stageHook: (e, n) =>
                                              (0, l.jsx)(
                                                  'span',
                                                  {
                                                      className: b.channelName,
                                                      children: D.name
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
            (0, l.jsxs)(s.ModalFooter, {
                children: [
                    (0, l.jsx)(s.Button, {
                        color: ev,
                        onClick: e_,
                        disabled: '' === V || null == eo || (U && !ep),
                        submitting: w,
                        children: eI
                    }),
                    (0, l.jsx)(s.Button, {
                        color: s.Button.Colors.PRIMARY,
                        className: b.cancelButton,
                        onClick: L,
                        children: E.intl.string(E.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
