n.d(t, {
    Gb: function () {
        return f;
    },
    J1: function () {
        return u;
    },
    KV: function () {
        return c;
    },
    Ql: function () {
        return l;
    },
    j$: function () {
        return h;
    }
});
var r,
    i = n(314897),
    a = n(230900),
    o = n(854698),
    s = n(765305);
function l(e) {
    return !!(null == e ? void 0 : e.id);
}
function u(e) {
    var t, n;
    return null == e
        ? null
        : {
              start: e.start,
              end: e.end,
              frequency: e.frequency,
              interval: e.interval,
              by_weekday: e.byWeekday,
              by_n_weekday: e.byNWeekday,
              by_month: e.byMonth,
              by_month_day: (null !== (n = null === (t = e.byMonthDay) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0 ? e.byMonthDay : null,
              by_year_day: e.byYearDay,
              count: e.count
          };
}
function c(e) {
    return null == e
        ? null
        : {
              start: new Date(e.start).toISOString(),
              end: null != e.end ? new Date(e.end).toISOString() : null,
              frequency: e.frequency,
              interval: e.interval,
              byWeekday: e.by_weekday,
              byNWeekday: e.by_n_weekday,
              byMonth: e.by_month,
              byMonthDay: e.by_month_day,
              byYearDay: e.by_year_day,
              count: e.count
          };
}
function d(e) {
    return e.map((e) => ({
        event_exception_id: e.eventExceptionId,
        event_id: e.eventId,
        guild_id: e.guildId,
        scheduled_start_time: e.scheduledStartTime,
        scheduled_end_time: e.scheduledEndTime,
        is_canceled: e.isCanceled
    }));
}
function _(e) {
    return e.map((e) => ({
        eventExceptionId: e.event_exception_id,
        eventId: e.event_id,
        guildId: e.guild_id,
        scheduledStartTime: e.scheduled_start_time,
        scheduledEndTime: e.scheduled_end_time,
        isCanceled: e.is_canceled
    }));
}
function E(e) {
    return null != e && 'id' in e;
}
function f(e, t, n) {
    let { name: r, description: a, privacyLevel: o, channelId: l, scheduledStartTime: c, scheduledEndTime: _, entityType: E, entityMetadata: f, image: h, recurrenceRule: p, eventExceptions: m } = e;
    return {
        id: null != n ? n : s.Ku,
        name: r,
        description: null != a ? a : null,
        privacy_level: o,
        scheduled_start_time: c,
        scheduled_end_time: _,
        entity_type: E,
        entity_metadata: null != f ? f : null,
        image: null != h ? h : void 0,
        channel_id: l,
        guild_id: t,
        creator_id: i.default.getId(),
        status: s.p1.SCHEDULED,
        recurrence_rule: u(p),
        guild_scheduled_event_exceptions: d(m)
    };
}
function h(e, t) {
    var n, r, i, l, u, d, f;
    let h = {
        name: null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : '',
        privacyLevel: null !== (r = null == e ? void 0 : e.privacy_level) && void 0 !== r ? r : s.j8.GUILD_ONLY,
        description: null !== (i = null == e ? void 0 : e.description) && void 0 !== i ? i : '',
        scheduledStartTime: null !== (l = null == e ? void 0 : e.scheduled_start_time) && void 0 !== l ? l : (0, o.ib)().toISOString(),
        entityType: null !== (u = null == e ? void 0 : e.entity_type) && void 0 !== u ? u : s.WX.NONE,
        entityMetadata: null !== (d = null == e ? void 0 : e.entity_metadata) && void 0 !== d ? d : void 0,
        channelId: null == e ? void 0 : e.channel_id,
        creatorId: null == e ? void 0 : e.creator_id,
        image: null == e ? void 0 : e.image,
        scheduledEndTime: null == e ? void 0 : e.scheduled_end_time,
        recurrenceRule: c(null == e ? void 0 : e.recurrence_rule),
        eventExceptions: _(null !== (f = null == e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== f ? f : [])
    };
    if (E(e) && (null == e ? void 0 : e.entity_type) === s.WX.EXTERNAL) {
        let t = (0, a.cS)(e);
        null != t && (h.entityMetadata = { location: t });
    } else null == h.channelId && null != t && ((h.channelId = t.id), t.isGuildStageVoice() ? (h.entityType = s.WX.STAGE_INSTANCE) : t.isGuildVoice() && (h.entityType = s.WX.VOICE));
    return h;
}
!(function (e) {
    (e.CHANNEL_SELECTOR = 'ChannelSelector'), (e.DETAILS = 'Details'), (e.PREVIEW = 'Preview');
})(r || (r = {}));
