n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(653041),
    n(47120),
    n(789020),
    n(724458);
var r = n(392711),
    i = n.n(r),
    a = n(131704),
    s = n(680089),
    o = n(592125),
    l = n(480294),
    u = n(580005),
    c = n(496675),
    d = n(9156),
    f = n(70956),
    _ = n(630388),
    p = n(823379),
    h = n(789662),
    m = n(981631),
    g = n(526761);
function E(e, t, n, r, _) {
    if (t !== h.AR.UseGreyDot)
        return [
            {
                label: 'Setting the guild to a white dot unread',
                apply: (e, t) => {
                    v(e, t, !0);
                }
            }
        ];
    let g = [],
        E = Object.values(o.Z.getMutableGuildChannelsForGuild(e.id)).filter((e) => c.Z.can(m.Plq.VIEW_CHANNEL, e));
    return (
        g.push(
            ...(function (e, t) {
                if (!(d.ZP.isMuted(e.id) && !d.ZP.isTemporarilyMuted(e.id))) return [];
                let n = [
                        {
                            label: 'Unmuting the guild and marking it as read',
                            apply: (e) => {
                                (e.muted = !1), (e.mute_config = null);
                            },
                            needsMarkedAsRead: !0
                        }
                    ],
                    r = t.filter((t) => d.ZP.getChannelMessageNotifications(e.id, t.id) === m.bL.ALL_MESSAGES);
                return (
                    r.length > 0 &&
                        n.push({
                            label: 'Setting '.concat(r.length, ' to mentions-only since they were all-messages and we are unmuting the guild'),
                            debug: r.map((e) => '\n    - #'.concat(e.name)).join(''),
                            apply: (e, t) => {
                                for (let n of r)
                                    I(e, t, n.id, (e) => {
                                        e.message_notifications = m.bL.ONLY_MENTIONS;
                                    });
                            }
                        }),
                    n
                );
            })(e, E)
        ),
        g.push(
            (function (e) {
                if (d.ZP.getMessageNotifications(e.id) === m.bL.ALL_MESSAGES)
                    return {
                        label: 'Setting the guild to only mentions since it is in care-a-little but was previously all-messages',
                        apply: (e) => {
                            e.message_notifications = m.bL.ONLY_MENTIONS;
                        }
                    };
            })(e)
        ),
        g.push(
            (function () {
                return {
                    label: 'Setting the guild to a grey dot unread',
                    apply: (e, t) => {
                        v(e, t, !1);
                    }
                };
            })()
        ),
        g.push(
            ...(function (e) {
                let t = [],
                    [n, r] = i()(e)
                        .filter((e) => e.type === m.d4z.GUILD_ANNOUNCEMENT)
                        .partition((e) => d.ZP.isChannelMuted(e.guild_id, e.id) || (null != e.parent_id && d.ZP.isChannelMuted(e.guild_id, e.parent_id)))
                        .value();
                return (
                    n.length > 0 &&
                        t.push({
                            label: 'Not touching '.concat(n.length, ' announcement channels since they are muted'),
                            debug: n.map((e) => '\n    - #'.concat(e.name)).join('')
                        }),
                    r.length > 0 &&
                        t.push({
                            label: 'Setting '.concat(r.length, ' announcement channels to white-dot'),
                            debug: r.map((e) => '\n    - #'.concat(e.name)).join(''),
                            apply: (e, t) => {
                                for (let n of r) b(e, t, n.id, !0);
                            }
                        }),
                    t
                );
            })(E)
        ),
        g.push(
            ...(function (e) {
                let t = [],
                    n = [];
                for (let t of e) d.ZP.isChannelMuted(t.guild_id, t.id) && t.isCategory() && !s.Z.isCollapsed(t.id) && n.push(t);
                return (
                    n.length > 0 &&
                        t.push({
                            label: 'Unmuting '.concat(n.length, ' categories and setting to grey-dot'),
                            debug: n.map((e) => '\n    - #'.concat(e.name)).join(''),
                            apply: (e, t) => {
                                for (let r of n)
                                    b(e, t, r.id, !1),
                                        I(e, t, r.id, (e) => {
                                            (e.muted = !1), (e.mute_config = null);
                                        });
                            }
                        }),
                    t
                );
            })(E)
        ),
        g.push(
            ...(function (e) {
                let t = [],
                    n = [],
                    r = [];
                return (
                    e.forEach((e) => {
                        if (d.ZP.isChannelMuted(e.guild_id, e.id)) return;
                        let t = d.ZP.getChannelMessageNotifications(e.guild_id, e.id);
                        t === m.bL.ALL_MESSAGES ? n.push(e) : t === m.bL.ONLY_MENTIONS && r.push(e);
                    }),
                    n.length > 0 &&
                        t.push({
                            label: 'Setting '.concat(n.length, ' channels to white-dot since they were explicitly All Messages'),
                            debug: n.map((e) => '\n    - #'.concat(e.name)).join(''),
                            apply: (e, t) => {
                                for (let r of n) b(e, t, r.id, !0);
                            }
                        }),
                    r.length > 0 &&
                        t.push({
                            label: 'Setting '.concat(r.length, ' channels to grey-dot since they were explicitly Mentions Only'),
                            debug: r.map((e) => '\n    - #'.concat(e.name)).join(''),
                            apply: (e, t) => {
                                for (let n of r) b(e, t, n.id, !1);
                            }
                        }),
                    t
                );
            })(E)
        ),
        l.Z.hasConsented(m.pjP.PERSONALIZATION)
            ? g.push(
                  ...(function (e, t, n, r, a) {
                      if (d.ZP.isMuted(e.id) && !d.ZP.isTemporarilyMuted(e.id)) return [];
                      let s = new Set(t.map((e) => e.id)),
                          o = r.filter((e) => s.has(e.channel_id)),
                          l = i().keyBy(o, 'channel_id'),
                          u = Math.max(
                              n.messages === h.XR.High ? a.frecency.yearMinOpensLargeServer : a.frecency.yearMinOpensSmallServer,
                              o.reduce((e, t) => {
                                  var n;
                                  return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0);
                              }, 0) * a.frecency.totalOpensPercent
                          ),
                          c = Math.max(
                              a.frecency.monthMinOpens,
                              o.reduce((e, t) => {
                                  var n;
                                  return e + Number(null !== (n = t.num_three_month_opens) && void 0 !== n ? n : 0);
                              }, 0) * a.frecency.totalOpensPercent
                          ),
                          f = [],
                          _ = [];
                      t.forEach((e) => {
                          var t, n, r, i;
                          let a = null !== (t = l[e.id]) && void 0 !== t ? t : {};
                          Number(null !== (n = a.num_year_opens) && void 0 !== n ? n : 0) > u || Number(null !== (r = a.num_month_opens) && void 0 !== r ? r : 0) > c ? f.push(e) : Number(null !== (i = a.num_three_month_opens) && void 0 !== i ? i : 0) > 2 && _.push(e);
                      });
                      let p = [];
                      return (
                          f.length > 0 &&
                              p.push({
                                  label: 'Setting '.concat(f.length, ' channels to white-dot since they are recent and frequently viewed'),
                                  debug: f.map((e) => '\n    - #'.concat(e.name, ' (').concat(JSON.stringify(l[e.id]), ')')).join(''),
                                  apply: (e, t) => {
                                      for (let n of f) b(e, t, n.id, !0);
                                  }
                              }),
                          _.length > 0 &&
                              p.push({
                                  label: 'NOT setting '.concat(_.length, ' channels to white-dot because they were only viewed a little.'),
                                  debug: _.map((e) => '\n    - #'.concat(e.name, ' (').concat(JSON.stringify(l[e.id]), ')')).join('')
                              }),
                          p
                      );
                  })(e, E, n, r, _)
              )
            : g.push(
                  ...(function (e, t) {
                      if (d.ZP.isMuted(e.id) && !d.ZP.isTemporarilyMuted(e.id)) return [];
                      let n = [],
                          r = new Set(t.map((e) => e.id)),
                          i = Date.now() - f.Z.Millis.DAYS_30,
                          s = u.Z.getFrequentlyWithoutFetchingLatest()
                              .filter((e) => e instanceof a.Sf && r.has(e.id))
                              .filter((e) => {
                                  var t, n;
                                  let r = null !== (n = null === (t = u.Z.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
                                  return 0 !== r.length && r[r.length - 1] >= i;
                              });
                      return (
                          s.length > 0 &&
                              n.push({
                                  label: 'Setting '.concat(s.length, ' channels to white-dot since they are recent and frequently viewed'),
                                  debug: s.map((e) => '\n    - #'.concat(e.name)).join(''),
                                  apply: (e, t) => {
                                      for (let n of s) b(e, t, n.id, !0);
                                  }
                              }),
                          n
                      );
                  })(e, E)
              ),
        g.filter(p.lm)
    );
}
function v(e, t, n) {
    var r, i;
    (e.flags = (0, _.mB)(null !== (i = null !== (r = e.flags) && void 0 !== r ? r : t.flags) && void 0 !== i ? i : 0, g.vc.UNREADS_ALL_MESSAGES, n)), (e.flags = (0, _.mB)(e.flags, g.vc.UNREADS_ONLY_MENTIONS, !n));
}
function I(e, t, n, r) {
    var a, s, o, l;
    let u = null !== (o = null === (a = e.channel_overrides) || void 0 === a ? void 0 : a[n]) && void 0 !== o ? o : {};
    r(u, null !== (l = null === (s = t.channel_overrides) || void 0 === s ? void 0 : s[n]) && void 0 !== l ? l : {}), !i().isEmpty(u) && (null == e.channel_overrides && (e.channel_overrides = {}), (e.channel_overrides[n] = u));
}
function b(e, t, n, r) {
    I(e, t, n, (e, t) => {
        var n, i;
        (e.flags = (0, _.mB)(null !== (i = null !== (n = e.flags) && void 0 !== n ? n : t.flags) && void 0 !== i ? i : 0, g.ic.UNREADS_ALL_MESSAGES, r)), (e.flags = (0, _.mB)(e.flags, g.ic.UNREADS_ONLY_MENTIONS, !r));
    });
}
