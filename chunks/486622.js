n.d(t, {
  m: function() {
    return f
  }
}), n(47120);
var l = n(470079),
  i = n(707019),
  s = n.n(i),
  a = n(881052),
  r = n(726521),
  o = n(621853),
  c = n(484459),
  u = n(695346),
  d = n(626135),
  h = n(823162),
  m = n(268699),
  E = n(9389),
  p = n(687683),
  g = n(981631);

function f(e) {
  let {
    user: t,
    onAcceptSuccess: n,
    onRejectSuccess: i,
    onError: f
  } = e, C = (0, E.Z)(), [_, I] = l.useState(!1), [x, T] = l.useState(!1), [N, Z] = l.useState(!1), [S, v] = l.useState(!1), [A, M] = l.useState(!1), R = _ || x || N, j = l.useCallback(async e => {
    if (!R) {
      I(!0);
      try {
        await (0, h.e4)(e), v(!0), null == n || n()
      } catch (t) {
        let e = new a.Hx(t);
        null == f || f(e)
      } finally {
        I(!1)
      }
    }
  }, [R, n, f]), L = l.useCallback(async e => {
    if (!R) {
      T(!0);
      try {
        await (0, h.gN)(e), M(!0), null == i || i()
      } catch (t) {
        let e = new a.Hx(t);
        null == f || f(e)
      } finally {
        T(!1)
      }
    }
  }, [R, i, f]), O = l.useCallback(async e => {
    if (R) return;
    T(!0);
    let t = s()(e, p.t$);
    try {
      for (let e of t) await (0, h.r_)(e);
      M(!0), null == i || i()
    } catch (t) {
      let e = new a.Hx(t);
      null == f || f(e)
    } finally {
      T(!1)
    }
  }, [R, i, f]), P = l.useCallback(async e => {
    if (R) return;
    if (null != t && null == o.Z.getMutualGuilds(t.id)) {
      Z(!0);
      try {
        await (0, c.Z)(t.id, t.getAvatarURL(void 0, 80), {
          withMutualGuilds: !0,
          withMutualFriendsCount: !0
        })
      } catch (e) {} finally {
        Z(!1)
      }
    }
    let n = async () => {
      var n;
      let l = null != t ? null === (n = o.Z.getMutualGuilds(t.id)) || void 0 === n ? void 0 : n.map(e => e.guild.id) : [];
      d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
        action: p.cl.ACCEPT_CONFIRMATION_PROMPT,
        channel_id: e,
        mutual_guild_ids: null != l ? l : [],
        other_user_id: null == t ? void 0 : t.id
      }), await j(e)
    };
    (0, m.H)({
      channelId: e,
      onConfirm: n,
      onCancel: () => {
        var n;
        let l = null != t ? null === (n = o.Z.getMutualGuilds(t.id)) || void 0 === n ? void 0 : n.map(e => e.guild.id) : [];
        d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
          action: p.cl.DISMISS_CONFIRMATION_PROMPT,
          channel_id: e,
          mutual_guild_ids: null != l ? l : [],
          other_user_id: null == t ? void 0 : t.id
        })
      }
    })
  }, [j, R, t]), y = l.useCallback((e, t, n) => {
    let l = (l, i) => {
        i && u.kJ.updateSetting(l), l && null != t && (0, r.zd)(t), j(e.id), d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
          action: p.cl.ACCEPT_HAM_CONFIRMATION_PROMPT,
          channel_id: e.id,
          is_dont_show_again_checked: i,
          non_spam_retraining_opt_in: l
        }), null != n && n()
      },
      i = u.kJ.getSetting();
    null == i ? (0, m.V)({
      channel: e,
      onConfirm: l,
      onCancel: () => {
        d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
          action: p.cl.DISMISS_HAM_CONFIRMATION_PROMPT,
          channel_id: e.id
        })
      }
    }) : l(i)
  }, [j]);
  return {
    acceptMessageRequest: C ? P : j,
    rejectMessageRequest: L,
    rejectAll: O,
    markAsNotSpam: y,
    isAcceptLoading: _,
    isRejectLoading: x,
    isUserProfileLoading: N,
    isOptimisticAccepted: S,
    isOptimisticRejected: A
  }
}