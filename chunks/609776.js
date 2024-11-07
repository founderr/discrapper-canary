t.d(n, {
    Z: function () {
        return Z;
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
    m = t(13664),
    h = t(440371),
    x = t(810788),
    g = t(699516),
    f = t(594174),
    v = t(626135),
    _ = t(570188),
    I = t(427679),
    N = t(930180),
    j = t(46920),
    C = t(157925),
    p = t(981631),
    S = t(765305),
    T = t(190378),
    b = t(388032),
    E = t(740413);
function k(e) {
    let { stageChannelsInGuild: n, channel: t, onSelectChannel: i } = e;
    return null == i
        ? null
        : (0, l.jsx)(l.Fragment, {
              children: (0, l.jsx)(s.FormItem, {
                  title: b.intl.string(b.t.S7GjDw) + ' asdf',
                  className: E.channelSelectionFormItem,
                  required: !0,
                  children: (0, l.jsx)(s.SearchableSelect, {
                      value: t.id,
                      options: n.map((e) => ({
                          value: e.id,
                          label: (0, c.F6)(e, f.default, g.Z, !0)
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
function Z(e) {
    var n, t, a, g, f, Z, B, D;
    let { channel: A, guild: R, header: L, error: G, loading: P, onSave: w, onEventSave: y, onClose: F, onSelectChannel: M, isEvent: z = !1, defaultOptions: U, isSlideReady: O = !0 } = e,
        H = i.useMemo(() => I.Z.getStageInstanceByChannel(A.id), [A.id]),
        [V, q] = i.useState(null !== (t = null !== (n = null == U ? void 0 : U.topic) && void 0 !== n ? n : null == H ? void 0 : H.topic) && void 0 !== t ? t : ''),
        [W, K] = i.useState(null !== (a = null == U ? void 0 : U.description) && void 0 !== a ? a : ''),
        [J] = i.useState(z),
        [Y, X] = i.useState(null !== (g = null == U ? void 0 : U.schedule) && void 0 !== g ? g : { startDate: (0, u.ib)() }),
        [Q, $] = i.useState(J && (null == U ? void 0 : U.schedule) != null),
        ee = (0, _.J)(A),
        en = (0, _.U)(A),
        et = null == H && ee && !J,
        [el, ei] = i.useState(et && en),
        ea = (0, o.e7)([x.Z], () => x.Z.hasHotspot(T.v.LIVE_STAGE_NOTIFICATION_BADGE)),
        er = S.j8.GUILD_ONLY,
        [eo] = i.useState(null !== (Z = null !== (f = null == U ? void 0 : U.privacyLevel) && void 0 !== f ? f : null == H ? void 0 : H.privacy_level) && void 0 !== Z ? Z : er),
        [es, ec] = i.useState(null == U ? void 0 : U.recurrenceRule),
        ed = (0, N._d)(A.id),
        [eu, em] = i.useState(!1),
        eh = (0, c.ZP)(A),
        ex = (0, d.q)(R),
        eg = null != M,
        ef = ex.length > 1;
    i.useEffect(() => {
        v.default.track(p.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == H ? void 0 : H.id,
            can_start_public_stage: !1,
            guild_id: A.guild_id
        });
    }, []);
    let ev = (e) => {
        if ((e.preventDefault(), eo === S.j8.PUBLIC && V.length < 20 && !eu)) {
            em(!0);
            return;
        }
        let n = {
            topic: V,
            privacyLevel: eo,
            sendStartNotification: el
        };
        if (J) {
            if (!Q) return;
            null == y ||
                y({
                    ...n,
                    schedule: Y,
                    description: W,
                    entityType: S.WX.STAGE_INSTANCE
                });
            return;
        }
        null == w || w(n);
    };
    let { color: e_, text: eI } =
            ((B = H),
            (D = eo),
            J
                ? {
                      color: s.Button.Colors.BRAND,
                      text: b.intl.string(b.t['60lJ0N'])
                  }
                : D === S.j8.PUBLIC && (null == B ? void 0 : B.privacy_level) !== S.j8.PUBLIC
                  ? {
                        color: s.Button.Colors.BRAND,
                        text: b.intl.string(b.t['3PatS0'])
                    }
                  : null == B
                    ? {
                          color: s.Button.Colors.GREEN,
                          text: b.intl.string(b.t.s8mM8P)
                      }
                    : {
                          color: s.Button.Colors.BRAND,
                          text: b.intl.string(b.t.K344S0)
                      }),
        eN = i.useRef(null);
    i.useEffect(() => {
        var e;
        O && (null === (e = eN.current) || void 0 === e || e.focus());
    }, [O]);
    let ej = Q && null != Y.startDate && Y.startDate >= r()();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(s.ModalContent, {
                className: E.modalContent,
                children: [
                    L,
                    (0, l.jsx)('div', {
                        className: E.blockedUsersContainer,
                        children: null == H && ed > 0 && (0, l.jsx)(j.mv, { channelId: A.id })
                    }),
                    (0, l.jsxs)('form', {
                        onSubmit: ev,
                        className: E.form,
                        children: [
                            (0, l.jsxs)(s.FormItem, {
                                title: z ? b.intl.string(b.t['0HbEQ0']) : b.intl.string(b.t['5FPBOD']),
                                className: E.topicFormItem,
                                required: !0,
                                children: [
                                    (0, l.jsx)(s.TextInput, {
                                        className: E.textInput,
                                        onChange: (e) => q(e),
                                        placeholder: b.intl.string(b.t.ZwWrub),
                                        maxLength: C.xA,
                                        value: V,
                                        autoComplete: 'off',
                                        inputRef: eN
                                    }),
                                    eu &&
                                        (0, l.jsx)(s.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-warning',
                                            className: E.warning,
                                            children: b.intl.string(b.t.AqTyaW)
                                        }),
                                    null != G
                                        ? (0, l.jsx)(s.Text, {
                                              color: 'text-danger',
                                              variant: 'text-xs/normal',
                                              className: E.warning,
                                              children: G.getAnyErrorMessage()
                                          })
                                        : null
                                ]
                            }),
                            eg && ef
                                ? (0, l.jsx)(k, {
                                      stageChannelsInGuild: ex,
                                      channel: A,
                                      onSelectChannel: M
                                  })
                                : null,
                            J &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(h.Z, {
                                            className: E.formItem,
                                            onScheduleChange: X,
                                            onRecurrenceChange: (e) => {
                                                let n = Y.startDate;
                                                if (null != n) ec((0, u.mF)(e, n));
                                            },
                                            schedule: Y,
                                            recurrenceRule: es,
                                            timeSelected: Q,
                                            onTimeChange: $
                                        }),
                                        null != Y.startDate && Y.startDate < r()()
                                            ? (0, l.jsx)(s.Text, {
                                                  color: 'text-danger',
                                                  variant: 'text-xs/normal',
                                                  className: E.warning,
                                                  children: b.intl.string(b.t.AXR5Sk)
                                              })
                                            : null
                                    ]
                                }),
                            z &&
                                (0, l.jsx)(s.FormItem, {
                                    title: b.intl.string(b.t['+gRCCw']),
                                    className: E.formItem,
                                    children: (0, l.jsx)(s.TextArea, {
                                        placeholder: b.intl.string(b.t['kWO/Ex']),
                                        value: W,
                                        onChange: (e) => K(e),
                                        maxLength: S.wm
                                    })
                                }),
                            et
                                ? (0, l.jsx)(m.Z, {
                                      sendStartNotification: el,
                                      setSendStartNotification: ei,
                                      showNotificationNewBadge: ea
                                  })
                                : null,
                            eg && !ef
                                ? (0, l.jsx)(s.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      className: E.channelSelection,
                                      children: b.intl.format(b.t['S+9O7u'], {
                                          stageName: eh,
                                          stageHook: (e, n) =>
                                              (0, l.jsx)(
                                                  'span',
                                                  {
                                                      className: E.channelName,
                                                      children: A.name
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
                        color: e_,
                        onClick: ev,
                        disabled: '' === V || null == eo || (z && !ej),
                        submitting: P,
                        children: eI
                    }),
                    (0, l.jsx)(s.Button, {
                        color: s.Button.Colors.PRIMARY,
                        className: E.cancelButton,
                        onClick: F,
                        children: b.intl.string(b.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
