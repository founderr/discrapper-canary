n.d(t, {
    Z: function () {
        return C;
    }
});
var r,
    i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(468194),
    u = n(481060),
    c = n(904245),
    d = n(596454),
    _ = n(377171),
    E = n(739566),
    f = n(942951),
    h = n(834129),
    p = n(809026),
    m = n(139256),
    I = n(489887),
    T = n(689938),
    g = n(167919);
let S = 16;
function A() {
    return (0, i.jsx)('svg', {
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: _.Z.INTERACTIVE_NORMAL,
        'aria-hidden': !0,
        children: (0, i.jsx)('path', {
            'fill-rule': 'evenodd',
            'clip-rule': 'evenodd',
            d: 'M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM5.70711 9.29289C5.31658 8.90237 4.68342 8.90237 4.29289 9.29289C3.90237 9.68342 3.90237 10.3166 4.29289 10.7071L5.08579 11.5L4.29289 12.2929C3.90237 12.6834 3.90237 13.3166 4.29289 13.7071C4.68342 14.0976 5.31658 14.0976 5.70711 13.7071L6.5 12.9142L7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071C9.09763 13.3166 9.09763 12.6834 8.70711 12.2929L7.91421 11.5L8.70711 10.7071C9.09763 10.3166 9.09763 9.68342 8.70711 9.29289C8.31658 8.90237 7.68342 8.90237 7.29289 9.29289L6.5 10.0858L5.70711 9.29289ZM15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289L17.5 10.0858L18.2929 9.29289C18.6834 8.90237 19.3166 8.90237 19.7071 9.29289C20.0976 9.68342 20.0976 10.3166 19.7071 10.7071L18.9142 11.5L19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071C19.3166 14.0976 18.6834 14.0976 18.2929 13.7071L17.5 12.9142L16.7071 13.7071C16.3166 14.0976 15.6834 14.0976 15.2929 13.7071C14.9024 13.3166 14.9024 12.6834 15.2929 12.2929L16.0858 11.5L15.2929 10.7071C14.9024 10.3166 14.9024 9.68342 15.2929 9.29289ZM9.08869 17.5563C8.78148 18.0152 8.16038 18.1382 7.70142 17.831C7.24247 17.5238 7.11947 16.9027 7.42669 16.4437C8.41166 14.9723 10.092 14 11.9999 14C13.9078 14 15.5881 14.9723 16.5731 16.4437C16.8803 16.9027 16.7573 17.5238 16.2984 17.831C15.8394 18.1382 15.2183 18.0152 14.9111 17.5563C14.2815 16.6158 13.2124 16 11.9999 16C10.7874 16 9.71825 16.6158 9.08869 17.5563Z',
            fill: 'currentColor'
        })
    });
}
function v(e) {
    let t,
        { hasNoVotes: n, victorEmoji: r } = e;
    if (n) t = (0, i.jsx)(A, {});
    else if (null != r) {
        let e = '' !== r.name ? r.name : r.displayName;
        t = (0, i.jsx)(d.Z, {
            emojiId: r.id,
            emojiName: e,
            animated: r.animated
        });
    }
    return null != t
        ? (0, i.jsx)('div', {
              className: g.imageContainer,
              children: t
          })
        : null;
}
function N(e) {
    if (0 === e.totalVotes) return { type: 'NO_VOTES' };
    let t = null != e.victorAnswerId,
        n = e.totalVotes > 0 ? Math.round((e.victorAnswerVotes / e.totalVotes) * 100) : 0;
    return t
        ? {
              type: 'VICTOR',
              victorAnswerText: e.victorAnswerText,
              victorVotePercentage: n
          }
        : {
              type: 'TIE',
              tiedVotePercentage: n
          };
}
function O(e) {
    let t,
        { type: n, ...r } = e;
    switch (n) {
        case 'NO_VOTES':
            t = (0, i.jsx)(u.Text, {
                variant: 'text-sm/semibold',
                color: 'text-normal',
                scaleFontToUserSetting: !0,
                children: T.Z.Messages.POLL_RESULT_NO_VOTERS
            });
            break;
        case 'VICTOR':
            let { victorAnswerText: a, victorVotePercentage: o } = r;
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)('div', {
                        className: g.victorAnswer,
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: 'text-sm/semibold',
                                color: 'text-normal',
                                className: g.victorAnswerText,
                                scaleFontToUserSetting: !0,
                                children: a
                            }),
                            (0, i.jsx)(m.ZY, {
                                size: S,
                                className: g.victorIcon,
                                isVictor: !0,
                                isExpired: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)(u.Text, {
                        variant: 'text-xs/medium',
                        color: 'input-placeholder-text',
                        scaleFontToUserSetting: !0,
                        children: [T.Z.Messages.POLL_RESULT_WINNING, ' \u2022 ', o, '%']
                    })
                ]
            });
            break;
        case 'TIE':
            let { tiedVotePercentage: s } = r;
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(u.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        scaleFontToUserSetting: !0,
                        children: T.Z.Messages.POLL_RESULT_TIED
                    }),
                    (0, i.jsxs)(u.Text, {
                        variant: 'text-xs/medium',
                        color: 'input-placeholder-text',
                        scaleFontToUserSetting: !0,
                        children: [s, '%']
                    })
                ]
            });
    }
    return (0, i.jsx)('div', {
        className: g.description,
        children: t
    });
}
function R(e) {
    let { className: t, data: n, onClickPollLink: r } = e,
        o = a.useMemo(() => N(n), [n]),
        l = null != n.victorEmoji || 'NO_VOTES' === o.type;
    return (0, i.jsxs)('div', {
        className: s()(g.container, { [g.containerWithImage]: l }, t),
        children: [
            (0, i.jsx)(v, {
                hasNoVotes: 'NO_VOTES' === o.type,
                victorEmoji: n.victorEmoji
            }),
            (0, i.jsx)(O, { ...o }),
            null != r &&
                (0, i.jsx)(u.Button, {
                    className: g.button,
                    size: u.Button.Sizes.TINY,
                    onClick: r,
                    color: u.Button.Colors.PRIMARY,
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-sm/medium',
                        color: 'none',
                        scaleFontToUserSetting: !0,
                        children: T.Z.Messages.POLL_RESULT_VIEW_POLL
                    })
                })
        ]
    });
}
function C(e) {
    var t;
    let { message: n, channel: r, compact: o, disableInteraction: s = !1 } = e,
        d = n.embeds[0],
        _ = a.useMemo(() => (0, p.Z)(d), [d]),
        m = (0, l.aF)(null !== (t = null == _ ? void 0 : _.questionText) && void 0 !== t ? t : '', I.Dv),
        S = (0, E.ZP)(n),
        A = (0, f.l)({
            user: n.author,
            channelId: r.id,
            guildId: r.guild_id,
            messageId: n.id
        }),
        v = n.messageReference,
        N = a.useCallback(() => {
            null != v &&
                c.Z.jumpToMessage({
                    channelId: v.channel_id,
                    messageId: v.message_id,
                    flash: !0,
                    returnMessageId: n.id
                });
        }, [n.id, v]);
    return null == _
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(h.Z, {
                      iconNode: (0, i.jsx)(u.PollsIcon, { size: 'xs' }),
                      timestamp: n.timestamp,
                      compact: o,
                      children: T.Z.Messages.POLL_RESULT_MESSAGE_HEADER.format({
                          username: S.nick,
                          usernameHook: A(S),
                          title: m,
                          titleOnClick: N
                      })
                  }),
                  (0, i.jsx)(R, {
                      className: g.embed,
                      data: _,
                      onClickPollLink: s ? void 0 : N
                  })
              ]
          });
}
!(function (e) {
    (e.NO_VOTES = 'NO_VOTES'), (e.VICTOR = 'VICTOR'), (e.TIE = 'TIE');
})(r || (r = {}));
